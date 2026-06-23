/**
 * Minimal Voyage AI embeddings client (REST). Anthropic has no embeddings
 * endpoint, so we use Voyage (its recommended partner). Works in Node and on
 * Vercel Edge — only needs global fetch.
 */

const VOYAGE_URL = "https://api.voyageai.com/v1/embeddings";
export const VOYAGE_MODEL = "voyage-3"; // 1024-dim

type InputType = "query" | "document";

export async function embed(
  input: string | string[],
  inputType: InputType,
  apiKey = process.env.VOYAGE_API_KEY,
): Promise<number[][]> {
  if (!apiKey) throw new Error("VOYAGE_API_KEY is not set");
  const texts = Array.isArray(input) ? input : [input];

  const res = await fetch(VOYAGE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: texts,
      model: VOYAGE_MODEL,
      input_type: inputType,
    }),
  });

  if (!res.ok) {
    throw new Error(`Voyage API error ${res.status}: ${await res.text()}`);
  }

  const json = (await res.json()) as {
    data: { embedding: number[]; index: number }[];
  };
  // Preserve input order.
  return json.data
    .sort((a, b) => a.index - b.index)
    .map((d) => d.embedding);
}

/** Convenience: embed a single string and return one vector. */
export async function embedOne(
  text: string,
  inputType: InputType,
  apiKey?: string,
): Promise<number[]> {
  const [vec] = await embed(text, inputType, apiKey);
  return vec;
}
