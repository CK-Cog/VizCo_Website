export type Exposure = {
  code: string;
  headline: string;
  line: string;
};

/** Plain-language examples of how AI goes wrong. Not a complete list. */
export const EXPOSURES: Exposure[] = [
  { code: "01", headline: "It says something untrue.", line: "A customer acts on it, and holds you to it." },
  { code: "02", headline: "It acts without permission.", line: "It pays, sends or deletes without approval." },
  { code: "03", headline: "It shares what it shouldn't.", line: "Private data reaches the wrong person." },
  { code: "04", headline: "It obeys the wrong instructions.", line: "Hidden text in a document takes control." },
  { code: "05", headline: "It copies someone else's work.", line: "Protected content ends up in what it produces." },
  { code: "06", headline: "It treats people unfairly.", line: "A group loses out, and regulators notice." },
  { code: "07", headline: "It breaks the rules.", line: "A legal duty is missed, and you answer for it." },
];
