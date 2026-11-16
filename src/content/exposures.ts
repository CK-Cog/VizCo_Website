export type Exposure = {
  headline: string;
  line: string;
};

/**
 * Plain-language examples of how AI goes wrong, in our own words. Not a complete list.
 * Numbering is generated from the order here.
 */
export const EXPOSURES: Exposure[] = [
  { headline: "It says something untrue.", line: "A customer acts on it, and holds you to it." },
  { headline: "It acts without permission.", line: "It pays, sends or deletes without approval." },
  { headline: "It goes beyond its job.", line: "It takes on tasks no one gave it, and acts on them." },
  { headline: "It shares what it shouldn't.", line: "Private data reaches the wrong person." },
  { headline: "It obeys the wrong instructions.", line: "Hidden text in a document takes control." },
  { headline: "It changes how it behaves.", line: "It drifts from what you tested, and no one notices." },
  { headline: "It won't stop when told.", line: "The off switch fails, and it keeps acting." },
  { headline: "An update breaks it.", line: "The model underneath changes, and your workflow fails." },
  { headline: "It runs up costs.", line: "It loops or overuses paid services, and the bill lands on you." },
  { headline: "It copies someone else's work.", line: "Protected content ends up in what it produces." },
  { headline: "It treats people unfairly.", line: "A group loses out, and regulators notice." },
  { headline: "It breaks the rules.", line: "A legal duty is missed, and you answer for it." },
  { headline: "It was oversold.", line: "Investors or customers say you overstated what it can do." },
];
