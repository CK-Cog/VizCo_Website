import type { Metadata } from "next";
import Article from "@/components/Article";
import Cite from "@/components/Cite";
import { insight } from "@/content/insights";
import { pageMeta } from "@/lib/seo";

const post = insight("ai-liability-trends-2026");

export const metadata: Metadata = pageMeta({
  title: "Five trends reshaping AI liability in 2026",
  description: post.dek,
  path: `/insights/${post.slug}`,
  type: "article",
});

export default function TrendsPost() {
  return (
    <Article post={post} sources={["aiIndex", "csis", "moffatt", "mobley", "garcia", "aiAct", "pld", "insuranceBusiness"]}>
      <h2>1. More AI is going wrong, and it&apos;s on record</h2>
      <p>
        The AI Incident Database recorded 362 AI incidents in 2025, up from 233 in 2024.
        <Cite s="aiIndex" />
      </p>
      <p>As AI moves from answering questions to taking actions, a mistake stops being embarrassing and starts being a loss.</p>

      <h2>2. AI is getting harder to see into</h2>
      <p>
        Stanford&apos;s measure of how open the major AI model developers are about their models fell to an average score of 40 in 2025.
        <Cite s="aiIndex" />
      </p>
      <p>
        That matters for cover. Insurers need to see a risk to insure it, and generative AI fails three of nine standard tests of insurability
        outright, and strains five more.
        <Cite s="csis" />
      </p>

      <h2>3. Courts are holding businesses to what their AI does</h2>
      <ul>
        <li>
          <strong>2024:</strong> a tribunal held an airline liable for its chatbot&apos;s wrong refund advice, rejecting the argument that the
          chatbot was responsible for its own actions.
          <Cite s="moffatt" />
        </li>
        <li>
          <strong>2025:</strong> a US court let job applicants&apos; age-discrimination claims against an AI hiring vendor proceed as a nationwide
          collective action. The claims are allegations, not findings.
          <Cite s="mobley" />
        </li>
        <li>
          <strong>2025:</strong> in a separate case, a US federal court let a lawsuit over an AI chatbot app&apos;s conversations go forward, and was
          not prepared, at that early stage, to treat the chatbot&apos;s output as protected speech.
          <Cite s="garcia" />
        </li>
      </ul>

      <h2>4. Regulators have set dates</h2>
      <ul>
        <li>
          <strong>EU AI Act:</strong> transparency obligations apply from 2 August 2026. Duties for high-risk AI follow from December 2027.
          <Cite s="aiAct" />
        </li>
        <li>
          <strong>EU product liability:</strong> new rules treat software, including AI, as a product, with liability regardless of fault. They
          apply to products placed on the market after 9 December 2026.
          <Cite s="pld" />
        </li>
      </ul>

      <h2>5. Cover is moving the other way</h2>
      <p>
        While exposure grows, standard insurance is pulling back. Standard AI exclusion wording has been available since January 2026, and was on
        file in 49 US states by mid-2026.
        <Cite s="insuranceBusiness" />
      </p>

      <h2>What it means for you</h2>
      <p>
        <strong>Liability for AI is growing at the same time as the cover for it is shrinking.</strong> The businesses that stay insured will be
        the ones that can show insurers how their AI works.
      </p>
      <p>Start with two things: a list of the AI you run and buy, and a careful read of your next renewal.</p>
    </Article>
  );
}
