import BlogSection from "@/components/blog/BlogSection";
import BrandedTip from "@/components/blog/BrandedTip";
import BlogSources from "@/components/blog/BlogSources";
import { TOCSection } from "@/components/blog/BlogTOC";

export const sections: TOCSection[] = [
  { id: "who-regulates", title: "Who Regulates What", level: 2 },
  { id: "fda-jurisdiction", title: "FDA's Bakery Jurisdiction", level: 2 },
  { id: "usda-overlap", title: "USDA's Overlap (Meat-Filled Products)", level: 2 },
  { id: "state-local", title: "The State and Local Layer", level: 2 },
  { id: "what-inspectors-look-at", title: "What Inspectors Actually Look At", level: 2 },
  { id: "equipment-and-audit", title: "How Equipment Design Affects the Audit", level: 2 },
  { id: "preparing", title: "Preparing for an Inspection", level: 2 },
];

export default function PostBody() {
  return (
    <>
      <p style={{ fontSize: "19px", color: "#3D6478", fontStyle: "italic", marginBottom: "32px", lineHeight: 1.6 }}>
        A working bakery can fall under FDA, USDA, state agriculture, and local health jurisdiction simultaneously — sometimes at the same physical location. This is a cheat sheet for who&apos;s coming through the door, what they&apos;re looking for, and how your equipment either helps or hurts you when they do.
      </p>

      <BlogSection id="who-regulates" title="Who Regulates What">
        <p>
          Federal food regulation in the United States splits along a simple-sounding but operationally tricky line:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>FDA</strong> regulates most food, including bakery products that don&apos;t contain meat or poultry above certain thresholds. This is most bakeries, most of the time.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>USDA-FSIS</strong> regulates meat, poultry, and processed egg products — including bakery products that contain &gt;3% raw or &gt;2% cooked meat by weight. Meat pies, sausage rolls, breakfast sandwiches with cooked bacon over the threshold.
          </li>
          <li>
            <strong>State and local authorities</strong> handle retail bakeries (over-the-counter sales to consumers), restaurant kitchens, and a layer of additional inspections regardless of federal jurisdiction.
          </li>
        </ul>
        <p>
          A facility can be under multiple jurisdictions at once. A bakery that produces both plain bread (FDA) and meat-filled products (USDA) operates under both regulators, often with separate production zones and separate inspections.
        </p>
      </BlogSection>

      <BlogSection id="fda-jurisdiction" title="FDA&apos;s Bakery Jurisdiction">
        <p>
          For most bakeries, the FDA is the relevant federal regulator. The FDA enforces several overlapping bodies of regulation:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
          <li style={{ marginBottom: "8px" }}><strong>FSMA (Food Safety Modernization Act)</strong> — preventive controls, allergen control, supply chain verification, environmental monitoring</li>
          <li style={{ marginBottom: "8px" }}><strong>21 CFR Part 117</strong> — Current Good Manufacturing Practice (CGMP) requirements</li>
          <li style={{ marginBottom: "8px" }}><strong>21 CFR Part 110</strong> — older CGMP framework, still partially applicable</li>
          <li><strong>FALCPA</strong> — allergen labeling and cross-contact prevention</li>
        </ul>
        <p>
          FDA inspections happen on a risk-based schedule. High-risk facilities (allergen-containing, ready-to-eat, those with prior issues) get inspected more often. A typical bakery might see an FDA inspector every 2–3 years; a high-risk operation might see one annually.
        </p>
      </BlogSection>

      <BlogSection id="usda-overlap" title="USDA&apos;s Overlap (Meat-Filled Products)">
        <p>
          If your bakery makes meat pies, sausage rolls, breakfast sandwiches, or any product that exceeds the meat-content thresholds, you&apos;re in USDA-FSIS jurisdiction for those products.
        </p>
        <p>
          USDA inspections operate very differently from FDA:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
          <li style={{ marginBottom: "8px" }}><strong>Continuous inspection.</strong> USDA inspectors are physically present at the facility during production, every shift.</li>
          <li style={{ marginBottom: "8px" }}><strong>HACCP (Hazard Analysis Critical Control Points).</strong> Required and verified.</li>
          <li style={{ marginBottom: "8px" }}><strong>Sanitation Standard Operating Procedures (SSOPs).</strong> Documented, audited, and observed.</li>
          <li><strong>Establishment number.</strong> Required and printed on every product.</li>
        </ul>
        <p>
          Operating under USDA is a meaningfully different operational regime than operating under FDA. The equipment standards are tighter, the documentation burden is higher, and the inspection frequency is daily rather than periodic.
        </p>
      </BlogSection>

      <BlogSection id="state-local" title="The State and Local Layer">
        <p>
          Federal jurisdiction doesn&apos;t replace state and local jurisdiction — it overlays. Most bakeries operate under at least one of:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
          <li style={{ marginBottom: "8px" }}><strong>State Department of Agriculture</strong> — for wholesale/manufacturing operations</li>
          <li style={{ marginBottom: "8px" }}><strong>State or local Department of Health</strong> — for retail operations</li>
          <li style={{ marginBottom: "8px" }}><strong>City health inspectors</strong> — for facility cleanliness, pest control, employee health</li>
          <li><strong>State labor department</strong> — for OSHA-equivalent workplace safety</li>
        </ul>
        <p>
          The state/local layer is where most surprise inspections happen. Federal inspectors generally schedule visits or arrive during scheduled production. State and local inspectors can show up any time during operating hours.
        </p>
      </BlogSection>

      <BlogSection id="what-inspectors-look-at" title="What Inspectors Actually Look At">
        <p>
          Different inspections have different focuses, but the universals across all of them:
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
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Focus Area</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>What They Check</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Equipment design</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Cleanability, sealed welds, smooth surfaces, drainage, no harborage</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Equipment condition</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Rust, finish degradation, accumulated residue, broken parts</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Sanitation records</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Wash-down logs, chemical concentrations, swab results</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Allergen control</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Segregation, labeling, equipment changeover procedures</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Pest control</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Active program, monitoring stations, no evidence of activity</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Employee practices</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Hand washing, glove use, no-jewelry rules, hair restraint</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", fontWeight: 600 }}>Documentation</td>
                <td style={{ padding: "10px 16px" }}>HACCP plans, SOPs, training records, supplier verification</td>
              </tr>
            </tbody>
          </table>
        </div>
      </BlogSection>

      <BlogSection id="equipment-and-audit" title="How Equipment Design Affects the Audit">
        <p>
          The equipment line in the inspection table above is where IBE&apos;s product decisions intersect with your regulatory exposure. Specific design elements that show up on inspection reports:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Sealed welds.</strong> Continuous welds, ground smooth, with no gaps. Tack-welded equipment fails this check.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Smooth radii.</strong> No sharp 90-degree internal corners where residue can accumulate. BISSC requires ≥ 6mm radius.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Sealed tube ends.</strong> Hollow tubing in equipment must have sealed ends. Open ends are non-cleanable cavities.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Drainable surfaces.</strong> No standing-water traps. Equipment surfaces should drain when sprayed.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Removable shelves and components.</strong> Inspectors will ask to see surfaces that aren&apos;t visible from outside. Component-built equipment passes this test trivially. Welded equipment doesn&apos;t.
          </li>
          <li>
            <strong>Material composition.</strong> Inspectors can ask for documentation that food-contact surfaces are food-contact-rated materials.
          </li>
        </ul>
        <BrandedTip variant="reference" href="/blog/bissc-certification-explained" linkText="Read the BISSC guide">
          <strong>Reference:</strong> Equipment that meets BISSC standards meets the equipment-design portion of FDA, USDA, and most third-party audits by default. Last week&apos;s post on BISSC certification covers what to ask vendors.
        </BrandedTip>
      </BlogSection>

      <BlogSection id="preparing" title="Preparing for an Inspection">
        <p>
          A short, practical checklist for inspection readiness:
        </p>
        <ol style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Maintain an equipment file.</strong> For each piece of major equipment: model, serial number, BISSC or other certification documents, original spec sheets, maintenance log.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Run pre-audit walkthroughs quarterly.</strong> Walk the floor with a critical eye. Find what an inspector would find before they do.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Train staff for the unscheduled visit.</strong> State and local inspectors don&apos;t schedule. Everyone on the floor should know the basics: hand-washing, glove use, who escorts the inspector, where documents are kept.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Keep wash-down records up to the minute.</strong> If logs are a week behind, that&apos;s a finding. Logs that are current at the moment an inspector arrives demonstrate program discipline.
          </li>
          <li>
            <strong>Replace failed-finish equipment proactively.</strong> An inspector finding a rusty rack is a citation. Replacing it before they arrive is just operations.
          </li>
        </ol>
        <BrandedTip variant="quote" href="/#contact" linkText="Get inspection-ready equipment">
          <strong>Quote Tip:</strong> If you&apos;re preparing for FSMA reinspection, USDA establishment review, or AIB/SQF certification, mention it in your quote request. We&apos;ll spec equipment with the documentation an inspector wants to see attached.
        </BrandedTip>
      </BlogSection>

      <BlogSources
        items={[
          {
            title: "FDA Food Safety Modernization Act (FSMA)",
            publisher: "U.S. Food and Drug Administration",
            url: "https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements/food-safety-modernization-act-fsma",
          },
          {
            title: "USDA-FSIS Inspection Programs",
            publisher: "USDA Food Safety and Inspection Service",
            url: "https://www.fsis.usda.gov",
          },
          {
            title: "21 CFR Part 117 — Current Good Manufacturing Practice",
            publisher: "Code of Federal Regulations",
            url: "https://www.ecfr.gov",
          },
          {
            title: "Food Allergen Labeling and Consumer Protection Act (FALCPA)",
            publisher: "U.S. Food and Drug Administration",
            url: "https://www.fda.gov",
          },
          {
            title: "Inspection Readiness for Bakery Operations",
            publisher: "American Bakers Association",
            url: "https://www.americanbakers.org",
          },
        ]}
      />
    </>
  );
}
