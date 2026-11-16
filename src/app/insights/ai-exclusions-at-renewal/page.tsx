import type { Metadata } from "next";
import Article from "@/components/Article";
import Cite from "@/components/Cite";
import { insight } from "@/content/insights";
import { pageMeta } from "@/lib/seo";

const post = insight("ai-exclusions-at-renewal");

export const metadata: Metadata = pageMeta({
  title: "AI exclusions at renewal: what they say and what to check",
  description: post.dek,
  path: `/insights/${post.slug}`,
  type: "article",
});

export default function ExclusionsPost() {
  return (
    <Article post={post} sources={["insuranceBusiness", "csis", "moneyGeek"]}>
      <h2>What&apos;s changed</h2>
      <p>
        Since January 2026, insurers in the US have had standard wording that writes generative AI out of business policies. By mid-2026 it was on
        file in 49 states.
        <Cite s="insuranceBusiness" />
      </p>
      <p>
        More than 80% of insurers&apos; requests to exclude AI had been approved by April 2026.
        <Cite s="csis" />
      </p>

      <h2>How it reaches you</h2>
      <ul>
        <li>
          <strong>It arrives as an extra page.</strong> The exclusion is usually added at renewal, so it&apos;s easy to miss.
          <Cite s="moneyGeek" />
        </li>
        <li>
          <strong>It defines AI broadly:</strong> &ldquo;a machine-based learning system or model that is trained on data with the ability to create
          content or responses, including but not limited to text, images, audio, video or code.&rdquo;
          <Cite s="moneyGeek" />
        </li>
        <li>
          <strong>Any connection can trigger it,</strong> even if a person checked the work.
          <Cite s={["insuranceBusiness", "moneyGeek"]} />
        </li>
        <li>
          <strong>It reaches AI you buy,</strong> through a vendor or software you already pay for.
          <Cite s="moneyGeek" />
        </li>
      </ul>

      <h2>If you find one</h2>
      <p>
        Insurers write out what they can&apos;t see.
        <Cite s="csis" /> <strong>Evidence changes that.</strong> We put your AI on record for insurers, and place cover written for it.
      </p>
    </Article>
  );
}
