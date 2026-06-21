import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";

/**
 * A hidden easter egg: type the secret word anywhere on the site and a little
 * message springs in (via Framer Motion), then fades away. Invisible to anyone
 * who doesn't know the word.
 */
const SECRET = "framer";
const HIDE_AFTER_MS = 6000;

export default function SecretMessage() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    let buffer = "";
    let clearTimer: ReturnType<typeof setTimeout>;

    const onKeyDown = (e: KeyboardEvent) => {
      // Don't capture typing inside form fields.
      const el = e.target as HTMLElement | null;
      if (
        el &&
        (el.tagName === "INPUT" ||
          el.tagName === "TEXTAREA" ||
          el.isContentEditable)
      ) {
        return;
      }
      if (e.key.length !== 1 || !/[a-z]/i.test(e.key)) return;

      buffer = (buffer + e.key.toLowerCase()).slice(-SECRET.length);
      clearTimeout(clearTimer);
      clearTimer = setTimeout(() => (buffer = ""), 1500);

      if (buffer === SECRET) {
        buffer = "";
        setOpen(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(clearTimer);
    };
  }, []);

  // Auto-dismiss; also close on Esc.
  useEffect(() => {
    if (!open) return;
    const hide = setTimeout(() => setOpen(false), HIDE_AFTER_MS);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(hide);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] grid place-items-center bg-pine-950/60 backdrop-blur-sm"
          role="dialog"
          aria-label="A little message"
        >
          {/* Floating hearts */}
          {!reduce &&
            Array.from({ length: 9 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 60, x: 0, opacity: 0 }}
                animate={{
                  y: -260,
                  x: (i % 2 ? 1 : -1) * (20 + (i % 3) * 30),
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3.5,
                  delay: 0.2 + i * 0.18,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="pointer-events-none absolute"
                style={{ left: `${20 + i * 7}%`, bottom: "30%" }}
              >
                <Heart className="h-5 w-5 fill-canyon-400 text-canyon-400" />
              </motion.div>
            ))}

          <motion.div
            initial={{ scale: 0.7, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={
              reduce
                ? { duration: 0.3 }
                : { type: "spring", stiffness: 220, damping: 18 }
            }
            onClick={(e) => e.stopPropagation()}
            className="relative mx-6 max-w-md rounded-3xl bg-sand-50 px-8 py-10 text-center shadow-2xl"
          >
            <motion.div
              animate={reduce ? {} : { scale: [1, 1.18, 1] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-canyon-100"
            >
              <Heart className="h-7 w-7 fill-canyon-500 text-canyon-500" />
            </motion.div>

            <p className="font-display text-2xl leading-snug text-pine-900 sm:text-3xl">
              Where do you wanna go next baby
              <Heart className="mx-1.5 inline h-6 w-6 -translate-y-0.5 fill-canyon-500 text-canyon-500" />
              ?
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
