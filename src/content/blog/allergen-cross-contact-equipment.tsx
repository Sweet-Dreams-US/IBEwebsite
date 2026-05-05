import BlogSection from "@/components/blog/BlogSection";
import BrandedTip from "@/components/blog/BrandedTip";
import BlogSources from "@/components/blog/BlogSources";
import { TOCSection } from "@/components/blog/BlogTOC";

export const sections: TOCSection[] = [
  { id: "why-this-matters", title: "Why This Matters", level: 2 },
  { id: "contact-vs-contamination", title: "Cross-Contact vs Cross-Contamination", level: 2 },
  { id: "equipment-strategies", title: "Equipment-Driven Mitigation Strategies", level: 2 },
  { id: "color-coding", title: "Color-Coding and Visual Systems", level: 3 },
  { id: "component-swappability", title: "Component Swappability", level: 3 },
  { id: "dedicated-vs-shared", title: "Dedicated vs Shared Equipment", level: 3 },
  { id: "validation", title: "Validation: Proving the Mitigation Works", level: 2 },
  { id: "audit-trail", title: "The Audit Trail", level: 2 },
  { id: "doing-it-right", title: "Doing It Right", level: 2 },
];

export default function PostBody() {
  return (
    <>
      <p style={{ fontSize: "19px", color: "#3D6478", fontStyle: "italic", marginBottom: "32px", lineHeight: 1.6 }}>
        One mislabeled tray can shut down a brand. Allergen cross-contact is the failure mode that turns small mistakes into Class I recalls, and equipment design is one of the few places you can engineer it out before it happens. Here&apos;s how to think about that engineering.
      </p>

      <BlogSection id="why-this-matters" title="Why This Matters">
        <p>
          The Big Nine allergens (milk, egg, fish, shellfish, tree nuts, peanuts, wheat, soy, sesame) are responsible for roughly 90% of food allergic reactions in the United States. For a bakery, that list overlaps with daily ingredients — wheat is the obvious one, but milk, egg, soy, and tree nuts are routine.
        </p>
        <p>
          When an allergen ends up in a product that wasn&apos;t supposed to contain it, regulatory consequences are severe. The FDA&apos;s Class I recall threshold for undeclared allergens is essentially zero — there&apos;s no &quot;trace amount&quot; tolerance. A single batch contaminated with undeclared peanut residue from shared equipment can recall an entire production run.
        </p>
        <p>
          Beyond the regulatory exposure, the brand and customer-trust consequences are typically worse than the recall itself. Bakeries that have managed allergen incidents successfully have done so because their equipment design made cross-contact unlikely in the first place — not because they were lucky during cleanup.
        </p>
      </BlogSection>

      <BlogSection id="contact-vs-contamination" title="Cross-Contact vs Cross-Contamination">
        <p>
          The two terms are often used interchangeably, but they describe different problems with different solutions:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Cross-contact</strong> is the unintended transfer of an allergen from one food to another via shared surfaces, equipment, hands, or environment. It&apos;s an allergen-specific problem.
          </li>
          <li>
            <strong>Cross-contamination</strong> is the unintended transfer of any contaminant — pathogenic bacteria, foreign material, allergens — from one source to another. Cross-contact is a subset of cross-contamination.
          </li>
        </ul>
        <p>
          Cross-contact is harder to manage than general cross-contamination because the &quot;contaminant&quot; is itself a food. There&apos;s no thermal kill step that works (cooking doesn&apos;t denature most allergens). Cleaning chemistry that handles bacteria doesn&apos;t necessarily remove allergen residue. The mitigation strategy has to be physical separation, not chemical neutralization.
        </p>
      </BlogSection>

      <BlogSection id="equipment-strategies" title="Equipment-Driven Mitigation Strategies">

        <BlogSection id="color-coding" title="Color-Coding and Visual Systems" level={3}>
          <p>
            The simplest and most effective allergen control strategy at the human level is visual differentiation. Color-coded equipment for different allergen profiles makes accidental crossover obvious immediately:
          </p>
          <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
            <li style={{ marginBottom: "8px" }}>Red carts for allergen-containing production</li>
            <li style={{ marginBottom: "8px" }}>Blue carts for allergen-free production</li>
            <li style={{ marginBottom: "8px" }}>Yellow carts for sanitation-only use</li>
            <li>Green carts for outbound finished product</li>
          </ul>
          <p>
            Color-coding works for carts, racks, totes, scoops, and ingredient bins. It doesn&apos;t require sophisticated tracking systems — it just requires that wrong-color equipment in the wrong zone is visually obvious to anyone walking by.
          </p>
        </BlogSection>

        <BlogSection id="component-swappability" title="Component Swappability" level={3}>
          <p>
            Component-built equipment lets you implement a mitigation strategy that&apos;s impossible with welded equipment: <strong>changeover by component</strong>.
          </p>
          <p>
            On a component-built rack, shelves come out and get replaced with sanitized shelves between allergen runs. The frame stays. The labor is bounded — usually under five minutes per rack. Cross-contact risk is reduced to the frame surface, which is much easier to wash than a full rack.
          </p>
          <p>
            On a welded rack, this isn&apos;t possible. Either you wash the entire rack between runs (a 30+ minute operation) or you accept the cross-contact risk. Most operations end up accepting more risk than they should because the alternative is operationally untenable.
          </p>
          <BrandedTip variant="spec" href="/#products" linkText="See component-built racks">
            <strong>Spec Tip:</strong> IBE&apos;s component-built rack design lets you maintain pools of sanitized shelves dedicated to specific allergen profiles. Swap shelves between runs, sanitize the frame on a normal cycle, and your changeover time drops dramatically.
          </BrandedTip>
        </BlogSection>

        <BlogSection id="dedicated-vs-shared" title="Dedicated vs Shared Equipment" level={3}>
          <p>
            For high-risk allergens (especially peanut and tree nut, which trigger the most severe reactions and have the lowest detection thresholds), the safest approach is dedicated equipment.
          </p>
          <p>
            That doesn&apos;t mean a separate facility — it means a separate fleet of racks, troughs, carts, and tools that never cross into non-allergen zones. The capital cost of dedicated equipment is real, but it&apos;s usually less than the cost of a single allergen-driven recall.
          </p>
          <p>
            For lower-risk allergens (wheat, milk, egg in a non-egg-free facility), shared equipment with rigorous changeover protocols is generally workable. The decision tree:
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
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Scenario</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Recommended Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Peanut or tree nut production</td>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Dedicated equipment, color-coded, segregated zone</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Multi-allergen ingredient lines</td>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Component-swappable equipment, validated changeover</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Wheat-containing facility, gluten-free runs</td>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Dedicated equipment for GF or never produce GF</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 16px", fontWeight: 600 }}>Single-allergen-profile production</td>
                  <td style={{ padding: "10px 16px" }}>Standard equipment with allergen labeling on all SKUs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </BlogSection>
      </BlogSection>

      <BlogSection id="validation" title="Validation: Proving the Mitigation Works">
        <p>
          A cross-contact mitigation strategy isn&apos;t complete until it&apos;s validated — meaning you have evidence that the strategy actually prevents detectable allergen transfer. Validation typically involves:
        </p>
        <ol style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Surface swab testing.</strong> After the standard changeover procedure, swab equipment surfaces and test for the specific allergen of concern. Repeat 3–5 times to demonstrate consistency.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Finished-product testing.</strong> Run a non-allergen batch immediately after an allergen batch (using the standard changeover) and test the finished product for allergen residue.
          </li>
          <li>
            <strong>Document the protocol.</strong> Once validated, the changeover procedure becomes a documented SOP. Any deviation requires re-validation.
          </li>
        </ol>
        <p>
          Validation is a one-time cost (roughly $2,000–$5,000 per allergen pathway in lab fees) that produces evidence usable for inspection, audit, and customer requirements indefinitely.
        </p>
      </BlogSection>

      <BlogSection id="audit-trail" title="The Audit Trail">
        <p>
          Whatever your strategy, an inspector or auditor will want to see four documents:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
          <li style={{ marginBottom: "8px" }}><strong>Allergen control plan</strong> — written, current, signed</li>
          <li style={{ marginBottom: "8px" }}><strong>Changeover SOPs</strong> — specific procedures for every allergen transition</li>
          <li style={{ marginBottom: "8px" }}><strong>Validation results</strong> — lab evidence that procedures work</li>
          <li><strong>Training records</strong> — every employee who handles allergen production is trained on the procedures</li>
        </ul>
        <p>
          Equipment that&apos;s been designed and bought with allergen control in mind makes all four documents easier. Color-coded fleets, component-swappable racks, and dedicated zones produce procedures that are simpler to write, easier to train, and more reliable in execution.
        </p>
        <BrandedTip variant="reference" href="/blog/sanitation-design-101" linkText="Read sanitation design 101">
          <strong>Reference:</strong> The sanitary design principles from last week — sealed welds, smooth radii, drainable surfaces — are also allergen control principles. A surface that can&apos;t be cleaned of bacteria can&apos;t be cleaned of allergens either.
        </BrandedTip>
      </BlogSection>

      <BlogSection id="doing-it-right" title="Doing It Right">
        <p>
          A practical approach to building allergen control into a bakery operation:
        </p>
        <ol style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Map every allergen flow in your facility.</strong> Where does it enter, where is it stored, where is it processed, where does it leave? Cross-contact happens at the seams.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Specify equipment to support the strategy you&apos;ve mapped.</strong> If you need dedicated peanut-zone equipment, buy enough of it to actually dedicate. If you&apos;re using component-swap strategy, buy component-built equipment.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Color-code aggressively.</strong> Carts, racks, scoops, ingredient totes, even cleaning equipment. Make wrong-equipment-in-wrong-zone visually obvious from a distance.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Validate the strategy.</strong> Lab evidence that your specific procedures on your specific equipment actually work.
          </li>
          <li>
            <strong>Train, audit, retrain.</strong> Allergen control is people-and-process-driven. Equipment makes it possible; humans make it work.
          </li>
        </ol>
        <BrandedTip variant="quote" href="/#contact" linkText="Discuss allergen-aware equipment">
          <strong>Quote Tip:</strong> If you&apos;re designing an allergen-control program around a fleet purchase, mention it in your quote request. We&apos;ll spec equipment that supports your strategy — color options, component design, dedicated-fleet sizing.
        </BrandedTip>
        <p>
          Allergen incidents are rare. When they happen, they&apos;re catastrophic. The bakeries that handle them best are the ones that designed the risk out before they ever needed to manage it.
        </p>
      </BlogSection>

      <BlogSources
        items={[
          {
            title: "Food Allergen Labeling and Consumer Protection Act (FALCPA)",
            publisher: "U.S. Food and Drug Administration",
            url: "https://www.fda.gov/food/food-allergensgluten-free-guidance-documents-regulatory-information/food-allergen-labeling-and-consumer-protection-act-2004-falcpa",
          },
          {
            title: "Allergen Control Best Practices for Bakeries",
            publisher: "American Bakers Association",
            url: "https://www.americanbakers.org",
          },
          {
            title: "FDA Allergen Management Guidance",
            publisher: "U.S. Food and Drug Administration",
            url: "https://www.fda.gov",
          },
          {
            title: "FARE Food Allergy Resources",
            publisher: "Food Allergy Research & Education",
            url: "https://www.foodallergy.org",
          },
          {
            title: "Validation of Allergen Cleaning Procedures",
            publisher: "Food Engineering Magazine",
            url: "https://www.foodengineeringmag.com",
          },
        ]}
      />
    </>
  );
}
