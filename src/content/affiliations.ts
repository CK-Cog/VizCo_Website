/**
 * The logos in the band under the home hero: where our team and advisors studied and
 * worked, and who invested in us.
 *
 * Only add a logo for a real, current or past tie that we can point to (a degree, a job,
 * an investment), and only as a wordmark, never a university seal or crest. Every logo in
 * public/affiliations is ready to swap in. See docs/affiliations.md for where each came from.
 */
export type Affiliation = {
  /** Full name, used as the alt text */
  name: string;
  src: string;
  /** Intrinsic size of the file, for next/image */
  width: number;
  height: number;
  /**
   * Height in the row, in rem (shown a little smaller on phones). Tuned by eye so each
   * mark carries about the same weight: wide wordmarks sit lower, compact or heavy ones
   * a touch higher.
   */
  h: number;
  basis: "education" | "experience" | "investor";
};

/** In display order. Schools alternate with companies and investors, so similar marks don't bunch up. */
export const AFFILIATIONS: Affiliation[] = [
  { name: "Stanford University", src: "/affiliations/stanford.svg", width: 640, height: 134, h: 1.75, basis: "education" },
  { name: "Microsoft", src: "/affiliations/microsoft.svg", width: 338, height: 72, h: 1.75, basis: "experience" },
  { name: "Massachusetts Institute of Technology", src: "/affiliations/mit.svg", width: 1360, height: 721, h: 2.125, basis: "education" },
  { name: "ING", src: "/affiliations/ing.svg", width: 265, height: 89, h: 1.65, basis: "experience" },
  { name: "XRC Ventures", src: "/investors/xrc-ventures.png", width: 1238, height: 186, h: 1.3, basis: "investor" },
  { name: "University of California, Berkeley", src: "/affiliations/berkeley.svg", width: 213, height: 66, h: 2.125, basis: "education" },
  { name: "NextGen Venture Partners", src: "/investors/ngvp.png", width: 1024, height: 254, h: 1.45, basis: "investor" },
  { name: "Yale University", src: "/affiliations/yale.svg", width: 500, height: 216, h: 1.95, basis: "education" },
  { name: "Entrepreneurs First", src: "/investors/entrepreneurs-first.png", width: 154, height: 76, h: 2.5, basis: "investor" },
];
