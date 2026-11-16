export type Exposure = {
  headline: string;
  line: string;
};

export type ExposureGroup = {
  name: string;
  items: Exposure[];
};

/**
 * Plain-language examples of how AI goes wrong, in our own words, grouped by what goes wrong.
 * Not a complete list. Numbering (01 to 12) is generated from the order here.
 */
export const EXPOSURE_GROUPS: ExposureGroup[] = [
  {
    name: "Says the wrong thing",
    items: [
      { headline: "It says something untrue.", line: "A customer acts on it, and holds you to it." },
      { headline: "It shares what it shouldn't.", line: "Private data reaches the wrong person." },
      { headline: "It copies someone else's work.", line: "Protected content ends up in what it produces." },
    ],
  },
  {
    name: "Does the wrong thing",
    items: [
      { headline: "It acts without permission.", line: "It pays, sends or deletes without approval." },
      { headline: "It goes beyond its job.", line: "It takes on tasks no one gave it, and acts on them." },
      { headline: "It obeys the wrong instructions.", line: "Hidden text in a document takes control." },
    ],
  },
  {
    name: "Stops behaving as tested",
    items: [
      { headline: "It changes how it behaves.", line: "It drifts from what you tested, and no one notices." },
      { headline: "It won't stop when told.", line: "The off switch fails, and it keeps acting." },
      { headline: "An update breaks it.", line: "The model underneath changes, and your workflow fails." },
    ],
  },
  {
    name: "Lands you with the bill",
    items: [
      { headline: "It runs up costs.", line: "It loops or overuses paid services, and the bill lands on you." },
      { headline: "It treats people unfairly.", line: "A group loses out, and regulators notice." },
      { headline: "It breaks the rules.", line: "A legal duty is missed, and you answer for it." },
    ],
  },
];

export const EXPOSURE_COUNT = EXPOSURE_GROUPS.reduce((n, g) => n + g.items.length, 0);
