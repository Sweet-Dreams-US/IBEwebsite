import BlogSection from "@/components/blog/BlogSection";
import BrandedTip from "@/components/blog/BrandedTip";
import BlogSources from "@/components/blog/BlogSources";
import { TOCSection } from "@/components/blog/BlogTOC";

export const sections: TOCSection[] = [
  { id: "case-study", title: "A Composite Case Study", level: 2 },
  { id: "how-it-fails", title: "How a Wrong-Spec Rack Actually Fails", level: 2 },
  { id: "five-year-cascade", title: "The Five-Year Cost Cascade", level: 2 },
  { id: "where-it-goes-wrong", title: "Three Places This Gets Decided Wrong", level: 2 },
  { id: "specifying-correctly", title: "How to Spec Correctly", level: 2 },
];

export default function PostBody() {
  return (
    <>
      <p style={{ fontSize: "19px", color: "#3D6478", fontStyle: "italic", marginBottom: "32px", lineHeight: 1.6 }}>
        A galvanized rack in a wash-down zone isn&apos;t cheap. It&apos;s a five-year liability that compounds quietly until the day an audit fails. This post is about the math behind that statement.
      </p>

      <BlogSection id="case-study" title="A Composite Case Study">
        <p>
          A regional wholesale bakery in the Midwest needed to expand its cooling capacity. Their procurement team got three quotes for 30 bread racks. The cheapest was galvanized standard steel at $850/unit. The next was glass-bead blasted standard steel at $1,000/unit. The most expensive was electro-polished 304 stainless at $1,650/unit.
        </p>
        <p>
          The team chose galvanized. Total saved at PO: $24,000 against the stainless quote, $4,500 against the glass-bead quote.
        </p>
        <p>
          The racks went into the cooling area, which was on a daily caustic wash-down rotation along with the rest of the production zone. Within 14 months, the first signs of finish failure appeared. By month 30, half the fleet had visible degradation. By month 48, an audit flagged the racks for sanitation deficiency.
        </p>
        <p>
          The bakery replaced the entire fleet at month 52 — with stainless. Total cost over the four-year period including the original galvanized purchase: $74,000. Had they bought stainless from the start: $49,500.
        </p>
        <p>
          The galvanized decision cost them <strong>$24,500 more</strong> than the &quot;expensive&quot; option, plus the cost of the failed audit and the operational disruption of mid-cycle replacement.
        </p>
      </BlogSection>

      <BlogSection id="how-it-fails" title="How a Wrong-Spec Rack Actually Fails">
        <p>
          Galvanized finishes don&apos;t fail dramatically. They fail in stages, each one harder to spot than the last:
        </p>
        <ol style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Months 1–12: Surface dulling.</strong> The zinc layer reacts with caustic cleaners and gradually loses its bright finish. Equipment starts to look &quot;tired.&quot; Most operators don&apos;t notice or attribute it to normal wear.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Months 12–24: White rust.</strong> Zinc oxidation accelerates in wet conditions, producing a chalky white residue called white rust. Equipment looks dirty even after wash-down. Cleaning teams start using more aggressive chemicals, accelerating degradation.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Months 24–36: Localized failure.</strong> The zinc layer wears through in high-contact areas (where pans rest on shelves, where casters meet the floor, where the rack is grabbed during loading). Underlying steel begins to show, and surface rust appears.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Months 36–48: Pitting.</strong> Surface rust progresses to localized pitting. The substrate is now compromised in those spots. Cleaning becomes harder because the pitted surface harbors residue.
          </li>
          <li>
            <strong>Months 48+: Audit failure.</strong> An auditor flags the equipment for sanitation deficiency. Either you replace it on the inspector&apos;s timeline (which is your worst negotiation position) or you risk losing certifications.
          </li>
        </ol>
        <p>
          By the time the audit fires, the equipment has been quietly costing you labor and risk for years.
        </p>
      </BlogSection>

      <BlogSection id="five-year-cascade" title="The Five-Year Cost Cascade">
        <p>
          The total cost of a wrong-spec rack isn&apos;t just the replacement cost. It&apos;s a cascade:
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
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Cost Bucket (per 30-rack fleet)</th>
                <th style={{ padding: "12px 16px", textAlign: "right", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Estimated Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Original purchase (galvanized)</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$25,500</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Increased sanitation labor (years 2–4)</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$8,000</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>More aggressive cleaning chemicals</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$3,000</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Audit remediation cost</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$5,000</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Mid-cycle replacement (stainless)</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$49,500</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Disposal of failed fleet</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$2,000</td>
              </tr>
              <tr style={{ background: "rgba(192, 86, 33, 0.06)" }}>
                <td style={{ padding: "12px 16px", fontWeight: 700, color: "#1C2B36" }}>Total over 5 years</td>
                <td style={{ padding: "12px 16px", textAlign: "right", fontWeight: 700, color: "#C05621" }}>$93,000</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", fontStyle: "italic", color: "#5A6E78" }}>Compare to: original stainless purchase + maintenance</td>
                <td style={{ padding: "10px 16px", textAlign: "right", fontStyle: "italic", color: "#5A6E78" }}>$54,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The wrong finish cost the bakery $38,500 more than the right finish, plus the operational disruption that doesn&apos;t fit on a spreadsheet.
        </p>
        <BrandedTip variant="reference" href="/blog/galvanized-glass-bead-electro-polished-finishes" linkText="Read the finishes guide">
          <strong>Reference:</strong> The matching-finish-to-zone framework from last week is what would have prevented this case study. Worth re-reading if you&apos;re currently sizing a fleet.
        </BrandedTip>
      </BlogSection>

      <BlogSection id="where-it-goes-wrong" title="Three Places This Gets Decided Wrong">
        <p>
          Wrong-finish decisions tend to come from three failure modes:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>The lowest-bid procurement reflex.</strong> When procurement is evaluated on cost-savings against quote, they have no incentive to spec correctly — they have an incentive to find the cheapest line item that meets the literal requirements (&quot;bread rack, 17 shelf, 24×66&quot;). Finish doesn&apos;t make it into the requirements doc, so the cheapest finish wins.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>The single-finish-fleet shortcut.</strong> Specifying everything to one finish is easier than zoning the facility. Either you over-spec everything (wasteful) or you under-spec everything (the case study above).
          </li>
          <li>
            <strong>The forgotten zone evolution.</strong> The cooling area was a dry zone when the racks were bought five years ago. Since then, the bakery added an ingredient-recovery process that introduced wash-down. The racks weren&apos;t re-evaluated against the new operating conditions. They didn&apos;t change — the zone changed around them.
          </li>
        </ul>
      </BlogSection>

      <BlogSection id="specifying-correctly" title="How to Spec Correctly">
        <p>
          Three habits eliminate the wrong-finish failure mode:
        </p>
        <ol style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Map your facility by sanitation zone before you spec equipment.</strong> Every piece of equipment has to live somewhere. Knowing whether that somewhere is a dry zone, a wash-down zone, or a food-contact zone is prerequisite to any rational finish decision.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Re-evaluate zones every two years.</strong> Operations change. A zone that was dry when you specced equipment for it can become wet when a process changes. Catch this before the equipment fails.
          </li>
          <li>
            <strong>Get the finish in writing on every quote.</strong> If a quote says &quot;steel rack, 17 shelf, 24×66&quot; without specifying the finish, treat it as incomplete. Reject quotes that won&apos;t name the substrate, finish, and surface roughness.
          </li>
        </ol>
        <BrandedTip variant="quote" href="/#contact" linkText="Get a zone-specced quote">
          <strong>Quote Tip:</strong> When IBE quotes a fleet, we ask about your facility zones up front. The result is a mixed-finish quote that&apos;s usually 20–30% cheaper than uniform stainless and dramatically more durable than uniform galvanized.
        </BrandedTip>
        <p>
          The finish decision is small at the quote stage and dominant at the lifecycle stage. Five years from now, the equipment that was specced correctly is still working. The equipment that was specced cheaply is in the dumpster, and the bakery is writing the second check.
        </p>
      </BlogSection>

      <BlogSources
        items={[
          {
            title: "Corrosion in Food Processing Equipment",
            publisher: "ASM International",
            note: "Reference for galvanized failure modes in caustic environments.",
          },
          {
            title: "Sanitation Audit Standards for Bakery Facilities",
            publisher: "AIB International",
            url: "https://www.aibinternational.com",
          },
          {
            title: "Equipment Lifecycle Cost Analysis in Food Manufacturing",
            publisher: "Food Engineering Magazine",
            url: "https://www.foodengineeringmag.com",
          },
          {
            title: "BISSC Material and Finish Standards",
            publisher: "Baking Industry Sanitation Standards Committee",
            url: "https://www.bissc.org",
          },
        ]}
      />
    </>
  );
}
