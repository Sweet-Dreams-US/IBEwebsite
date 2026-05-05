import BlogSection from "@/components/blog/BlogSection";
import BrandedTip from "@/components/blog/BrandedTip";
import BlogSources from "@/components/blog/BlogSources";
import { TOCSection } from "@/components/blog/BlogTOC";

export const sections: TOCSection[] = [
  { id: "design-not-cleaning", title: "Sanitation Is a Design Problem, Not a Cleaning Problem", level: 2 },
  { id: "five-principles", title: "The Five Design Principles", level: 2 },
  { id: "sealed-welds", title: "Sealed Welds and Crevice-Free Joints", level: 3 },
  { id: "smooth-radii", title: "Smooth Radii", level: 3 },
  { id: "cleanability", title: "Cleanability and Access", level: 3 },
  { id: "materials", title: "Material Selection", level: 3 },
  { id: "drainage", title: "Drainage", level: 3 },
  { id: "audit-details", title: "The Audit-Passing Details", level: 2 },
  { id: "checklist", title: "A Practical Inspection Checklist", level: 2 },
];

export default function PostBody() {
  return (
    <>
      <p style={{ fontSize: "19px", color: "#3D6478", fontStyle: "italic", marginBottom: "32px", lineHeight: 1.6 }}>
        Sanitation isn&apos;t won at wash-down. It&apos;s won at spec. The difference between equipment that cleans easily and equipment that&apos;s a labor sink is decided years before the first shift — in design choices that you can verify on a quote.
      </p>

      <BlogSection id="design-not-cleaning" title="Sanitation Is a Design Problem, Not a Cleaning Problem">
        <p>
          When sanitation goes wrong in a bakery, the instinct is to fix it with more cleaning — more chemicals, more labor, more frequent wash-downs. That works as a short-term patch. It rarely works as a long-term solution, because the underlying problem is usually that the equipment itself was designed in a way that makes thorough cleaning impossible.
        </p>
        <p>
          The principle that food-safety engineers organize around: <strong>cleanability is a property of the equipment, not the cleaner</strong>. A poorly designed piece of equipment cannot be made sanitarily compliant by labor. A well-designed piece of equipment is sanitarily compliant after a routine wash-down.
        </p>
        <p>
          This post covers the five design principles that determine which side of that line your equipment falls on.
        </p>
      </BlogSection>

      <BlogSection id="five-principles" title="The Five Design Principles">

        <BlogSection id="sealed-welds" title="Sealed Welds and Crevice-Free Joints" level={3}>
          <p>
            Tack welds and discontinuous welds create gaps where product residue accumulates. Wash-down water can&apos;t reach the inside of the gap. Cleaning chemicals don&apos;t penetrate. Bacteria colonize.
          </p>
          <p>
            Sanitary design requires <strong>continuous welds, ground smooth</strong>. No gaps, no exposed weld bead, no surface roughness that exceeds the parent metal&apos;s finish. Where welds aren&apos;t structurally necessary, joints should be sealed with food-grade adhesive, gaskets, or mechanical compression — not left open.
          </p>
          <p>
            Auditors check this directly. They look at welded joints with magnification and they probe with picks. Equipment that fails on weld continuity is some of the most common audit findings in bakery facilities.
          </p>
        </BlogSection>

        <BlogSection id="smooth-radii" title="Smooth Radii" level={3}>
          <p>
            Sharp internal corners can&apos;t be cleaned reliably. A 90-degree internal corner has a tiny zone at the apex where neither pressure-spray nor manual scrubbing reaches. Product residue collects there.
          </p>
          <p>
            Sanitary design requires <strong>internal radii of at least 6mm</strong> (¼ inch) at all internal corners. Some applications require larger — 12mm or more for direct-contact zones. The smooth radius lets cleaning action reach the entire surface uniformly.
          </p>
          <p>
            On equipment quotes, this shows up as &quot;radiused corners&quot; or &quot;smooth-radius construction.&quot; Vendors that don&apos;t specify radius are usually building 90-degree corners.
          </p>
        </BlogSection>

        <BlogSection id="cleanability" title="Cleanability and Access" level={3}>
          <p>
            Every surface that can become contaminated needs to be reachable for cleaning. That&apos;s a more demanding standard than it sounds — many equipment designs hide surfaces that look exterior but are functionally interior.
          </p>
          <p>
            Sanitary design requires:
          </p>
          <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
            <li style={{ marginBottom: "8px" }}>No enclosed cavities (sealed tube ends, sealed hollow members)</li>
            <li style={{ marginBottom: "8px" }}>Removable components for surfaces that need direct cleaning access</li>
            <li style={{ marginBottom: "8px" }}>Tool-less disassembly for routine wash-down (no requiring wrenches to access cleaning surfaces)</li>
            <li>Visible inspection of all food-contact surfaces from a normal standing position</li>
          </ul>
          <p>
            Component-built equipment naturally passes this test — shelves come out, frame members are accessible, every surface can be cleaned. Welded equipment often fails it, because disassembly for cleaning isn&apos;t designed in.
          </p>
          <BrandedTip variant="spec" href="/#products" linkText="See component-built equipment">
            <strong>Spec Tip:</strong> IBE racks have removable shelves precisely so this principle is satisfied without operator gymnastics. Pull the shelf, clean both sides, slide it back. The whole rack inspects in 90 seconds.
          </BrandedTip>
        </BlogSection>

        <BlogSection id="materials" title="Material Selection" level={3}>
          <p>
            Materials in food-contact zones need to be:
          </p>
          <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
            <li style={{ marginBottom: "8px" }}><strong>Non-toxic</strong> — won&apos;t leach into product</li>
            <li style={{ marginBottom: "8px" }}><strong>Non-reactive</strong> — won&apos;t corrode under normal cleaning chemistry</li>
            <li style={{ marginBottom: "8px" }}><strong>Non-absorbent</strong> — won&apos;t soak up product or cleaner</li>
            <li><strong>Durable</strong> — won&apos;t flake, crack, or shed particles into product</li>
          </ul>
          <p>
            For most bakery applications, this means food-grade stainless steel (304 or 316), food-grade plastics (HDPE, polypropylene), or food-grade silicone elastomers. Materials outside this set need a specific justification.
          </p>
        </BlogSection>

        <BlogSection id="drainage" title="Drainage" level={3}>
          <p>
            Standing water is a sanitation failure mode. Where water collects, biofilms form. Equipment that traps water in pockets, crevices, or horizontal surfaces without slope will fail an audit.
          </p>
          <p>
            Sanitary design requires:
          </p>
          <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
            <li style={{ marginBottom: "8px" }}>All surfaces drain when sprayed (slope toward an outlet)</li>
            <li style={{ marginBottom: "8px" }}>No horizontal surfaces in food-contact zones without a drainage path</li>
            <li>Pooled-water test passes within seconds, not minutes</li>
          </ul>
          <p>
            One of the easiest tests on the floor: spray a surface with water and watch what happens. Water that disappears in seconds is fine. Water that lingers is a finding.
          </p>
        </BlogSection>
      </BlogSection>

      <BlogSection id="audit-details" title="The Audit-Passing Details">
        <p>
          Beyond the five principles above, several specific details show up disproportionately in audit findings and are worth checking explicitly:
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
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Detail</th>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Standard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Bolt threads in food zone</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Shrouded or eliminated; threads are crevices</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Tubing ends</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Sealed, no open hollow cavities</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Caster wheels</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Non-marking, sealed bearings, cleanable</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Shelf supports</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>No horizontal flat surfaces that hold debris</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Welded joints</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Continuous, ground smooth to parent metal finish</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>Floor clearance</td>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>≥ 6 inches under stationary equipment for cleaning</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", fontWeight: 600 }}>Surface roughness (Ra)</td>
                <td style={{ padding: "10px 16px" }}>≤ 0.8 µm for standard food contact; ≤ 0.4 µm for high-care</td>
              </tr>
            </tbody>
          </table>
        </div>
      </BlogSection>

      <BlogSection id="checklist" title="A Practical Inspection Checklist">
        <p>
          Walk a piece of equipment with this checklist before you accept it from a supplier:
        </p>
        <ol style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Visual check of every weld.</strong> Continuous? Ground smooth? Same finish as parent metal? Any visible crack, pinhole, or undercut?
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Probe internal corners.</strong> Run a finger or pick around every internal corner. Smooth? Or a 90-degree edge that catches?
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Check tube ends.</strong> Every hollow member should be sealed. Open ends are immediately disqualifying.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Test drainage.</strong> Pour water on each major surface. Does it drain in seconds, or pool?
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Try removing components.</strong> If shelves are designed to come out, do they come out cleanly? Without tools? Without forcing?
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Look at fasteners.</strong> Any exposed threads in food-contact zones? Any bolt heads that won&apos;t shed product?
          </li>
          <li>
            <strong>Material verification.</strong> Material certification documents on file? Substrate and finish documented to spec?
          </li>
        </ol>
        <p>
          Most well-built bakery equipment passes this checklist. Most poorly-built equipment fails on at least three items. The checklist takes ten minutes per piece of equipment and pays for itself many times over.
        </p>
        <BrandedTip variant="quote" href="/#contact" linkText="Spec sanitation-first equipment">
          <strong>Quote Tip:</strong> If you&apos;re building or upgrading a facility under FSMA, USDA, or third-party audit, mention it in your quote. IBE specs equipment to sanitary-design standards by default — and we&apos;ll happily walk through any specific design element on your floor.
        </BrandedTip>
      </BlogSection>

      <BlogSources
        items={[
          {
            title: "BISSC Sanitary Design Standards",
            publisher: "Baking Industry Sanitation Standards Committee",
            url: "https://www.bissc.org",
            note: "Primary authority for bakery-specific sanitary design.",
          },
          {
            title: "EHEDG Sanitary Design Guidelines",
            publisher: "European Hygienic Engineering & Design Group",
            url: "https://www.ehedg.org",
            note: "International cross-reference; widely used in food equipment design.",
          },
          {
            title: "NSF/ANSI 51 — Food Equipment Materials",
            publisher: "NSF International",
            url: "https://www.nsf.org",
          },
          {
            title: "10 Principles of Sanitary Design",
            publisher: "American Meat Institute Foundation (now NAMI)",
            note: "Foundational paper on sanitary design principles, applicable to all food processing.",
          },
          {
            title: "FDA Guidance on Equipment Hygienic Design",
            publisher: "U.S. Food and Drug Administration",
            url: "https://www.fda.gov",
          },
        ]}
      />
    </>
  );
}
