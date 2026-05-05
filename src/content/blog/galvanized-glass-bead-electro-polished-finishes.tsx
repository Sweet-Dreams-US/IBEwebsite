import BlogSection from "@/components/blog/BlogSection";
import BrandedTip from "@/components/blog/BrandedTip";
import BlogSources from "@/components/blog/BlogSources";
import { TOCSection } from "@/components/blog/BlogTOC";

export const sections: TOCSection[] = [
  { id: "why-finish", title: "Why Finish Matters More Than You Think", level: 2 },
  { id: "galvanized", title: "Galvanized: The Workhorse", level: 2 },
  { id: "glass-bead", title: "Glass-Bead Blasted: The Sweet Spot", level: 2 },
  { id: "electro-polished", title: "Electro-Polished: The Gold Standard", level: 2 },
  { id: "matching-zone", title: "Matching Finish to Zone", level: 2 },
  { id: "cost-comparison", title: "Cost Comparison", level: 2 },
  { id: "questions-to-ask", title: "Questions to Ask Vendors", level: 2 },
];

export default function PostBody() {
  return (
    <>
      <p style={{ fontSize: "19px", color: "#3D6478", fontStyle: "italic", marginBottom: "32px", lineHeight: 1.6 }}>
        Three finishes, three sanitation profiles, three price points. Each one is correct in some places and wrong in others. Knowing which is which is the difference between equipment that lasts 15 years and equipment that fails its third audit.
      </p>

      <BlogSection id="why-finish" title="Why Finish Matters More Than You Think">
        <p>
          The substrate of your equipment — standard steel, 304 stainless, 316 stainless — determines its corrosion resistance and structural integrity. The finish determines its <strong>sanitation profile and operational lifespan</strong>. Two pieces of equipment built from identical 304 stainless can perform very differently in your facility based purely on how they&apos;re finished.
        </p>
        <p>
          A finish does three jobs: protects the substrate from environmental degradation, provides a cleanable surface, and resists the chemical exposure of routine sanitation. Different finishes excel at different jobs. None excels at all three.
        </p>
      </BlogSection>

      <BlogSection id="galvanized" title="Galvanized: The Workhorse">
        <p>
          Galvanizing is a zinc coating applied to standard steel by hot-dipping or electroplating. The zinc layer protects the underlying steel from rust by sacrificing itself in oxidation reactions — when the surface is scratched, the zinc preferentially corrodes instead of the steel beneath.
        </p>
        <p>
          <strong>Where it works:</strong>
        </p>
        <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
          <li style={{ marginBottom: "8px" }}>Dry-zone equipment that won&apos;t see frequent caustic wash-down</li>
          <li style={{ marginBottom: "8px" }}>Storage and transport racks for sealed product</li>
          <li style={{ marginBottom: "8px" }}>Cart frames where structural durability matters more than sanitation</li>
          <li>High-volume applications where cost is a primary driver</li>
        </ul>
        <p>
          <strong>Where it fails:</strong>
        </p>
        <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
          <li style={{ marginBottom: "8px" }}>Caustic wash-down zones — the zinc reacts with high-pH cleaners and degrades</li>
          <li style={{ marginBottom: "8px" }}>Wet environments where standing water sits for extended periods</li>
          <li>Direct food contact applications (zinc isn&apos;t food-contact approved)</li>
        </ul>
        <p>
          Galvanized is the right answer for a lot of bakery equipment that doesn&apos;t live in a wash-down zone. It&apos;s the wrong answer when applied indiscriminately to equipment that does.
        </p>
        <BrandedTip variant="spec" href="/#products" linkText="See galvanized rack options">
          <strong>Spec Tip:</strong> IBE bread racks come in galvanized as one of three available finishes. The choice between galvanized and the upgraded finishes is almost always a function of what zone the rack lives in, not what it costs.
        </BrandedTip>
      </BlogSection>

      <BlogSection id="glass-bead" title="Glass-Bead Blasted: The Sweet Spot">
        <p>
          Glass-bead blasting is a mechanical surface treatment, typically applied to standard steel or stainless. Fine glass beads are propelled at the surface, creating a uniform matte finish that&apos;s significantly smoother and more cleanable than a raw mill or galvanized finish.
        </p>
        <p>
          The finish does two things at once: it removes surface contaminants (mill scale, weld discoloration, minor pitting) and creates a consistent low-roughness surface profile that resists bacterial harborage.
        </p>
        <p>
          <strong>Where it works:</strong>
        </p>
        <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
          <li style={{ marginBottom: "8px" }}>Production-zone equipment that sees regular wash-down but not direct food contact</li>
          <li style={{ marginBottom: "8px" }}>Mid-tier sanitation requirements where a polished finish is overkill</li>
          <li style={{ marginBottom: "8px" }}>Bakery operations that want consistent cleanability without electro-polish pricing</li>
          <li>Equipment that needs to look professional during walk-throughs and audits</li>
        </ul>
        <p>
          For most bakeries, glass-bead is the &quot;default upgrade&quot; from galvanized. It costs 15–25% more, performs notably better in wash-down environments, and meets sanitation standards for non-contact food-zone equipment.
        </p>
      </BlogSection>

      <BlogSection id="electro-polished" title="Electro-Polished: The Gold Standard">
        <p>
          Electro-polishing is an electrochemical process that smooths and brightens stainless steel by selectively removing a thin layer of surface metal. The result is a surface that&apos;s not just visibly polished but microscopically smoother — the surface roughness (Ra value) drops dramatically, removing crevices where bacteria can colonize.
        </p>
        <p>
          Electro-polishing also passivates the steel surface, enhancing corrosion resistance beyond what raw stainless offers. For high-acid or chloride-exposed environments, this matters.
        </p>
        <p>
          <strong>Where it works:</strong>
        </p>
        <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
          <li style={{ marginBottom: "8px" }}>Direct food contact surfaces — trough interiors, pan surfaces</li>
          <li style={{ marginBottom: "8px" }}>USDA-inspected facilities with elevated sanitation requirements</li>
          <li style={{ marginBottom: "8px" }}>Allergen-control zones requiring verifiable wash-down efficacy</li>
          <li style={{ marginBottom: "8px" }}>Pharmaceutical, dietary supplement, and high-care food applications</li>
          <li>Cold-chain equipment that cycles through condensation</li>
        </ul>
        <p>
          For most bakery applications outside direct food contact, electro-polished is over-spec. For applications where it&apos;s appropriate, nothing else clears the bar.
        </p>
      </BlogSection>

      <BlogSection id="matching-zone" title="Matching Finish to Zone">
        <p>
          A working framework for matching finish to facility zone:
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
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Facility Zone</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Recommended Finish</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Office / mailroom / dry storage</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Galvanized or nickel-chrome</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Receiving / shipping</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Galvanized or epoxy-coated</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Cooling / proofing (no contact)</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Galvanized or glass-bead blasted</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Mixing / dough handling</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>304 stainless, glass-bead or #4 polish</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Wash-down / sanitation</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>304 stainless, electro-polished</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Direct food contact (trough, pan)</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>304 stainless, electro-polished</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", fontWeight: 600 }}>Allergen-control / USDA inspection</td>
                <td style={{ padding: "10px 16px" }}>304 or 316 stainless, electro-polished</td>
              </tr>
            </tbody>
          </table>
        </div>
      </BlogSection>

      <BlogSection id="cost-comparison" title="Cost Comparison">
        <p>
          Indexed against the cheapest option (galvanized standard steel = 1.00):
        </p>
        <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
          <li style={{ marginBottom: "6px" }}>Galvanized: <strong>1.00×</strong></li>
          <li style={{ marginBottom: "6px" }}>Glass-bead blasted standard steel: <strong>1.15–1.25×</strong></li>
          <li style={{ marginBottom: "6px" }}>304 stainless, mill finish: <strong>1.60–1.90×</strong></li>
          <li style={{ marginBottom: "6px" }}>304 stainless, glass-bead blasted: <strong>1.75–2.00×</strong></li>
          <li>304 stainless, electro-polished: <strong>2.00–2.50×</strong></li>
        </ul>
        <p>
          The cost steps are nonlinear. The biggest jump is from standard steel to stainless (any finish). Once you&apos;re in stainless, the finish upgrade adds 20–30%. For applications that genuinely need a polished food-contact surface, that delta is small relative to the audit risk it eliminates.
        </p>
        <BrandedTip variant="reference" href="/blog/steel-vs-stainless-steel-bakery" linkText="See last week's substrate guide">
          <strong>Reference:</strong> Finish selection happens after substrate selection. If you haven&apos;t locked in stainless vs standard yet, work through that decision first using last week&apos;s framework.
        </BrandedTip>
      </BlogSection>

      <BlogSection id="questions-to-ask" title="Questions to Ask Vendors">
        <p>
          When a vendor quotes you equipment with a finish, four questions cut through ambiguity:
        </p>
        <ol style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>What&apos;s the substrate, and what&apos;s the finish?</strong> &quot;Stainless&quot; alone tells you nothing about the surface treatment. Make them break it out.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>What&apos;s the surface roughness (Ra value)?</strong> If they don&apos;t know, the finish probably wasn&apos;t engineered. Bakery-grade equipment should hit Ra ≤ 0.8 µm; food-contact electro-polished should hit Ra ≤ 0.4 µm.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Is the welded zone finished to the same standard as the parent metal?</strong> Welds are where finishes fail. A vendor that polishes the parent metal but leaves welds rough is selling you a sanitation problem.
          </li>
          <li>
            <strong>What&apos;s the warranty on the finish, and what voids it?</strong> Caustic exposure in zones where the finish wasn&apos;t designed for it commonly voids warranties.
          </li>
        </ol>
        <BrandedTip variant="quote" href="/#contact" linkText="Get a finish-specced quote">
          <strong>Quote Tip:</strong> IBE&apos;s racks come in galvanized, glass-bead blasted, and electro-polished stainless. Tell us your zones and we&apos;ll spec each rack to the right finish — not the most expensive one, the right one.
        </BrandedTip>
      </BlogSection>

      <BlogSources
        items={[
          {
            title: "Surface Finishes for Stainless Steel in Food Service",
            publisher: "American Iron and Steel Institute",
            url: "https://www.steel.org",
          },
          {
            title: "Sanitary Equipment Design Standards",
            publisher: "Baking Industry Sanitation Standards Committee",
            url: "https://www.bissc.org",
          },
          {
            title: "Electro-Polishing in Food Processing Equipment",
            publisher: "Food Engineering Magazine",
            url: "https://www.foodengineeringmag.com",
          },
          {
            title: "NSF/ANSI 51 — Food Equipment Materials",
            publisher: "NSF International",
            url: "https://www.nsf.org",
            note: "Standards for surface finish in food-contact applications.",
          },
        ]}
      />
    </>
  );
}
