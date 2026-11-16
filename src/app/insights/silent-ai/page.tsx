import type { Metadata } from "next";
import Article from "@/components/Article";
import Cite from "@/components/Cite";
import { insight } from "@/content/insights";
import { pageMeta } from "@/lib/seo";

const post = insight("silent-ai");

export const metadata: Metadata = pageMeta({
  title: "Silent AI: the problem with a policy that says nothing",
  description: post.description,
  path: `/insights/${post.slug}`,
  type: "article",
});

export default function SilentAiPost() {
  return (
    <Article post={post} sources={["csis", "insuranceBusiness", "moffatt", "pra2017", "pra2019"]}>
      <h2>What silent means</h2>
      <p>
        A policy is silent on AI when it neither covers it nor excludes it. Most business policies were written before AI could act on its own, so
        they simply never mention it.
        <Cite s="csis" />
      </p>
      <p>
        <strong>Silence isn&apos;t cover.</strong> It&apos;s an untested assumption.
      </p>

      <h2>Why silence is a risk</h2>
      <ul>
        <li>
          <strong>You find out at claim time.</strong> Whether a silent policy pays for an AI loss is argued after the loss has happened.
          <Cite s="insuranceBusiness" />
        </li>
        <li>
          <strong>It isn&apos;t a stable position.</strong> Standard AI exclusion wording has been available to insurers since January 2026, and US
          state regulators had approved more than 80% of insurers&apos; requests to exclude AI by April 2026.
          <Cite s={["insuranceBusiness", "csis"]} />
        </li>
        <li>
          <strong>The losses are real.</strong> A tribunal has already held an airline liable for its chatbot&apos;s wrong refund advice.
          <Cite s="moffatt" />
        </li>
      </ul>

      <h2>We&apos;ve been here before</h2>
      <p>
        UK regulators told insurers in 2017 to manage the cyber risk sitting silently in their policies
        <Cite s="pra2017" />, and in 2019 warned that many still hadn&apos;t worked out their exposure.
        <Cite s="pra2019" /> Silence gets removed. When it goes, the policy either names the risk or writes it out.
      </p>

      <h2>What to do about it</h2>
      <ul>
        <li>
          <strong>List the AI you rely on,</strong> including AI inside software you buy.
        </li>
        <li>
          <strong>Ask in writing</strong> whether each policy pays for a loss caused by it.
        </li>
        <li>
          <strong>Replace silence with cover that names AI.</strong> That&apos;s what we place.
        </li>
      </ul>
    </Article>
  );
}
