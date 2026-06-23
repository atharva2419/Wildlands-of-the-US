import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Compass, ExternalLink } from "lucide-react";

interface Citation {
  park: string;
  url: string;
  section: string;
}
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  citations?: Citation[];
}

const SUGGESTIONS = [
  "Where can I see a California condor?",
  "Which park has the best dark skies?",
  "Dog-friendly trails near Tucson?",
];

export default function RangerChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  async function send(question: string) {
    const q = question.trim();
    if (!q || streaming) return;
    setInput("");

    const next: ChatMessage[] = [
      ...messages,
      { role: "user", content: q },
      { role: "assistant", content: "" },
    ];
    setMessages(next);
    setStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next
            .filter((m) => m.content || m.role === "user")
            .map(({ role, content }) => ({ role, content })),
        }),
      });
      if (!res.ok || !res.body) throw new Error(`Request failed (${res.status})`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      // Stream and parse Server-Sent Events.
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split("\n\n");
        buffer = parts.pop() ?? "";
        for (const part of parts) {
          const line = part.trim();
          if (!line.startsWith("data:")) continue;
          const payload = JSON.parse(line.slice(5).trim());
          if (payload.type === "token") {
            appendToLast(setMessages, payload.text);
          } else if (payload.type === "done") {
            setLastCitations(setMessages, payload.citations ?? []);
          } else if (payload.type === "error") {
            appendToLast(setMessages, `\n\n⚠️ ${payload.message}`);
          }
        }
      }
    } catch (e) {
      appendToLast(
        setMessages,
        `\n\n⚠️ Sorry — I couldn't reach the trailhead. ${
          e instanceof Error ? e.message : ""
        }`,
      );
    } finally {
      setStreaming(false);
    }
  }

  return (
    <>
      {/* Launcher */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-pine-600 text-sand-50 shadow-xl shadow-pine-950/30"
        aria-label="Ask a Ranger"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-50 flex h-[34rem] max-h-[75vh] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-3xl bg-sand-50 shadow-2xl ring-1 ring-pine-200"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-pine-700 px-5 py-4 text-sand-50">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-pine-600">
                <Compass className="h-5 w-5 text-canyon-300" />
              </div>
              <div>
                <div className="font-display text-lg font-bold uppercase tracking-wide leading-none">
                  Ask a Ranger
                </div>
                <div className="text-xs text-sand-100/70">
                  Grounded in real park data
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.length === 0 && (
                <div className="mt-2">
                  <p className="px-1 text-sm text-pine-700">
                    Hi! I'm your trail guide. Ask me anything about the parks —
                    wildlife, trails, camping, when to visit.
                  </p>
                  <div className="mt-4 space-y-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="block w-full rounded-xl bg-white px-3 py-2 text-left text-sm text-pine-800 ring-1 ring-pine-100 transition-colors hover:bg-pine-50"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div
                  key={i}
                  className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-canyon-600 text-sand-50"
                        : "bg-white text-pine-900 ring-1 ring-pine-100"
                    }`}
                  >
                    {m.content || (
                      <span className="inline-flex gap-1">
                        <Dot /> <Dot delay={0.15} /> <Dot delay={0.3} />
                      </span>
                    )}
                    {m.citations && m.citations.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5 border-t border-pine-50 pt-2.5">
                        {m.citations.map((c) => (
                          <Link
                            key={c.url + c.section}
                            to={c.url}
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center gap-1 rounded-full bg-pine-50 px-2 py-0.5 text-[11px] font-semibold text-pine-700 hover:bg-pine-100"
                          >
                            {c.park} <ExternalLink className="h-2.5 w-2.5" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-pine-100 bg-white p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about any park…"
                className="flex-1 rounded-full bg-sand-50 px-4 py-2 text-sm text-pine-900 outline-none ring-1 ring-pine-100 focus:ring-pine-300"
              />
              <button
                type="submit"
                disabled={streaming || !input.trim()}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-pine-600 text-sand-50 transition-opacity disabled:opacity-40"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ repeat: Infinity, duration: 1.1, delay }}
      className="inline-block h-1.5 w-1.5 rounded-full bg-pine-400"
    />
  );
}

/** Append streamed text to the last (assistant) message. */
function appendToLast(
  set: React.Dispatch<React.SetStateAction<ChatMessage[]>>,
  text: string,
) {
  set((prev) => {
    const copy = [...prev];
    const last = copy[copy.length - 1];
    if (last?.role === "assistant") {
      copy[copy.length - 1] = { ...last, content: last.content + text };
    }
    return copy;
  });
}

function setLastCitations(
  set: React.Dispatch<React.SetStateAction<ChatMessage[]>>,
  citations: Citation[],
) {
  set((prev) => {
    const copy = [...prev];
    const last = copy[copy.length - 1];
    if (last?.role === "assistant") {
      copy[copy.length - 1] = { ...last, citations };
    }
    return copy;
  });
}
