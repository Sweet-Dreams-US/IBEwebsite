import BlogSection from "@/components/blog/BlogSection";
import BrandedTip from "@/components/blog/BrandedTip";
import BlogSources from "@/components/blog/BlogSources";
import { TOCSection } from "@/components/blog/BlogTOC";

export const sections: TOCSection[] = [
  { id: "third-option", title: "The Third Option Most People Miss", level: 2 },
  { id: "when-refurb-wins", title: "When Refurbishing Actually Wins", level: 2 },
  { id: "structural", title: "Structural Integrity", level: 3 },
  { id: "design", title: "Design Era", level: 3 },
  { id: "scope", title: "Scope of Work", level: 3 },
  { id: "false-economy", title: "When Refurbishing Is a False Economy", level: 2 },
  { id: "sixty-percent-rule", title: "The 60% Rule", level: 2 },
  { id: "what-to-look-for", title: "What to Look For in a Refurb Candidate", level: 2 },
  { id: "doing-it-right", title: "Doing It Right", level: 2 },
];

export default function PostBody() {
  return (
    <>
      <p style={{ fontSize: "19px", color: "#3D6478", fontStyle: "italic", marginBottom: "32px", lineHeight: 1.6 }}>
        The buy-vs-refurbish decision usually gets framed as a binary. It isn&apos;t. Component-built equipment introduces a third path — selective refurbishment — that changes the math for most owners. Here&apos;s how to recognize when each option actually wins.
      </p>

      <BlogSection id="third-option" title="The Third Option Most People Miss">
        <p>
          The conventional question — &quot;should we buy new or refurbish what we have?&quot; — assumes your equipment is a single unit that&apos;s either replaced wholesale or fixed wholesale. That&apos;s how welded equipment works. It&apos;s not how component-built equipment works.
        </p>
        <p>
          On a component-built rack, individual shelves come out. Casters swap. Frame members can be replaced one at a time. The result is a third path: <strong>selective refurbishment</strong>, where you replace only the parts that are actually failing while keeping the parts that are still serving.
        </p>
        <p>
          For most operations with component-built equipment less than ten years old, this third option dominates the other two. The all-or-nothing buy/refurb framing is a holdover from welded-equipment thinking that quietly costs the industry money every quarter.
        </p>
        <BrandedTip variant="reference" href="/blog/true-cost-bakery-equipment" linkText="Read the TCO framework">
          <strong>Reference:</strong> The math here only works if you&apos;re evaluating on a multi-year horizon. If you&apos;re thinking in 2-year buckets, see last week&apos;s post on Total Cost of Ownership before reading further.
        </BrandedTip>
      </BlogSection>

      <BlogSection id="when-refurb-wins" title="When Refurbishing Actually Wins">
        <p>
          Three conditions need to hold simultaneously for refurbishment to beat new equipment. Miss any one of them and the math flips.
        </p>

        <BlogSection id="structural" title="Structural Integrity" level={3}>
          <p>
            The frame and major weight-bearing members need to be sound. Bent, cracked, or significantly corroded structural elements are a no-go — they&apos;ve already accumulated fatigue you can&apos;t see, and they&apos;ll fail unpredictably even if surface repair makes them look fine.
          </p>
          <p>
            What you can fix: bent or cracked shelves, worn casters, surface rust, damaged finishes, broken latches, missing hardware. What you can&apos;t fix economically: a frame that&apos;s out of square, weld cracks at structural joints, or load-bearing tubing with corrosion-through.
          </p>
        </BlogSection>

        <BlogSection id="design" title="Design Era" level={3}>
          <p>
            Refurbishing equipment that&apos;s 25 years old often means buying parts for a design that&apos;s no longer in production. Even when parts are available, the original design may not meet current sanitation standards (BISSC has tightened expectations several times) or current safety expectations.
          </p>
          <p>
            The sweet spot for refurbishment is equipment that&apos;s 5–15 years old. Newer than that and you&apos;re refurbishing equipment that arguably should still be operating without intervention. Older than that and you&apos;re investing in a design that&apos;s being phased out.
          </p>
        </BlogSection>

        <BlogSection id="scope" title="Scope of Work" level={3}>
          <p>
            Refurbishment wins when the scope is bounded. &quot;Replace 40 shelves and 80 casters across a fleet of 20 racks&quot; is a tractable scope with predictable cost. &quot;Make these old racks look new&quot; isn&apos;t — it leaks scope, and refurbishment projects with leaking scope routinely come in at 70–90% of new equipment cost.
          </p>
          <p>
            Before you refurbish, write down the parts list. If you can&apos;t put it on one page, you&apos;re probably better off buying new.
          </p>
        </BlogSection>
      </BlogSection>

      <BlogSection id="false-economy" title="When Refurbishing Is a False Economy">
        <p>
          The most expensive refurbishment is the one that delays a replacement that was always coming. Five common patterns where this shows up:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Cascading failures.</strong> Once a piece of equipment starts breaking, it tends to keep breaking. Replacing the third caster on a cart that&apos;s also showing rust spots and shelf cracks usually means you&apos;ll be back inside six months.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Sanitation drift.</strong> Older finishes degrade in ways that aren&apos;t visible but compromise wash-down efficacy. Refurbishment can re-finish a frame, but can&apos;t restore the BISSC profile of a rack that&apos;s aged out of compliance.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Hidden labor.</strong> Old equipment that runs slightly worse than new equipment costs labor every shift. The labor delta over five years is regularly larger than the price difference between refurb and replacement.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Mismatched fleet.</strong> Refurbishing one rack while leaving twenty old ones in place creates an inconsistent fleet, which costs labor in confusion and training. Refurbishment usually only pays at fleet scale.
          </li>
          <li>
            <strong>Aesthetics-driven scope.</strong> &quot;Make it look new&quot; is the surest way to hit 90% of replacement cost on something that still functions like 8-year-old equipment.
          </li>
        </ul>
      </BlogSection>

      <BlogSection id="sixty-percent-rule" title="The 60% Rule">
        <p>
          The simplest rule of thumb for the buy-vs-refurbish decision:
        </p>
        <div
          style={{
            background: "#1C2B36",
            color: "#ffffff",
            padding: "24px 28px",
            borderRadius: "6px",
            margin: "20px 0",
            fontSize: "16px",
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "#C05621", display: "block", marginBottom: "8px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
            The 60% Rule
          </strong>
          If a refurbishment quote exceeds <strong>60% of replacement cost</strong>, replace. Almost always.
        </div>
        <p>
          The reasoning: a new piece of equipment comes with a full design lifespan ahead of it. A refurbished piece doesn&apos;t — at best, it gets back to an effective lifespan of maybe 60–70% of new. So a refurbishment that costs 60% of replacement is paying full price for partial life.
        </p>
        <p>
          Exceptions exist. A 30%-of-replacement refurbishment on equipment that&apos;s 5 years old and structurally sound is usually fine. A 65%-of-replacement refurbishment on equipment that&apos;s 12 years old almost never is.
        </p>
      </BlogSection>

      <BlogSection id="what-to-look-for" title="What to Look For in a Refurb Candidate">
        <p>
          Before you commit to refurbishing a rack, trough, or cart, run this 5-point inspection:
        </p>
        <div
          style={{
            overflowX: "auto",
            margin: "20px 0",
            border: "1px solid rgba(28, 43, 54, 0.12)",
            borderRadius: "6px",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#F2F5F7" }}>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Check</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Pass</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Fail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Frame square</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Diagonals match within 1/4&quot;</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", color: "#C05621" }}>Visible twist or out-of-square</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Welds intact</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>No cracks at structural joints</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", color: "#C05621" }}>Hairline cracks anywhere load-bearing</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Corrosion</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Surface rust only</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", color: "#C05621" }}>Pitting or through-corrosion in tubing</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Parts available</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>OEM still makes the components</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", color: "#C05621" }}>Custom fab needed for shelves</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", fontWeight: 600 }}>Compliance</td>
                <td style={{ padding: "10px 16px" }}>Original design met current standards</td>
                <td style={{ padding: "10px 16px", color: "#C05621" }}>Unsealed welds, raw bolt heads in food zone</td>
              </tr>
            </tbody>
          </table>
        </div>
        <BrandedTip variant="spec" href="/#products" linkText="See our component-built racks">
          <strong>Spec Tip:</strong> All IBE racks ship as components for exactly this reason. Replacement shelves, casters, and frame parts are stock items — not custom fabrication. That&apos;s what makes selective refurbishment economical.
        </BrandedTip>
      </BlogSection>

      <BlogSection id="doing-it-right" title="Doing It Right">
        <p>
          If you&apos;ve decided refurbishment wins for your situation, three habits separate good outcomes from bad ones:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Get a parts list before a labor estimate.</strong> The cost of a refurbishment is the parts plus the labor. A vendor who can&apos;t itemize the parts is going to add labor mid-project to cover whatever they didn&apos;t plan for.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Refurbish the fleet, not the unit.</strong> If you&apos;re going to do this, do it across enough units that your operation looks consistent afterward. Mixed-condition fleets cost labor every shift.
          </li>
          <li>
            <strong>Document the refurb date.</strong> A refurbished rack started its second life on a known date. Track that — it&apos;s the date that determines when it cycles to replacement.
          </li>
        </ul>
        <p>
          Refurbishment isn&apos;t a way to avoid replacement; it&apos;s a way to time replacement. Done right, it converts a capex spike into a smoother capex curve. Done wrong, it&apos;s the most expensive way to delay a decision you were going to make anyway.
        </p>
        <BrandedTip variant="quote" href="/#contact" linkText="Talk to us about a refurb">
          <strong>Quote Tip:</strong> If you&apos;re evaluating a fleet for refurbishment, IBE can quote replacement components against original equipment specs going back to 2008. Bring us your serial numbers — we can usually tell you in a day what&apos;s economical and what isn&apos;t.
        </BrandedTip>
      </BlogSection>

      <BlogSources
        items={[
          {
            title: "Equipment Asset Management in Food Manufacturing",
            publisher: "Food Engineering Magazine",
            url: "https://www.foodengineeringmag.com",
            note: "Industry coverage of refurbishment vs replacement decision frameworks.",
          },
          {
            title: "BISSC Standards: Sanitary Construction of Bakery Equipment",
            publisher: "Baking Industry Sanitation Standards Committee",
            url: "https://www.bissc.org",
          },
          {
            title: "Capital Equipment Lifecycle Management",
            publisher: "American Society of Baking",
            url: "https://www.asbe.org",
          },
          {
            title: "Reliability-Centered Maintenance for Food Processing",
            publisher: "International Society of Automation",
            note: "Foundational framework for the cascade-failure pattern.",
          },
        ]}
      />
    </>
  );
}
