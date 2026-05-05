import BlogSection from "@/components/blog/BlogSection";
import BrandedTip from "@/components/blog/BrandedTip";
import BlogSources from "@/components/blog/BlogSources";
import { TOCSection } from "@/components/blog/BlogTOC";

export const sections: TOCSection[] = [
  { id: "right-question", title: "The Capacity Question, Asked Correctly", level: 2 },
  { id: "peak-vs-average", title: "The Peak-vs-Average Trap", level: 2 },
  { id: "three-formulas", title: "Three Formulas You Actually Need", level: 2 },
  { id: "rack-count", title: "Rack Count from Production Volume", level: 3 },
  { id: "cycle-buffer", title: "Cycle Buffer", level: 3 },
  { id: "floor-space", title: "Floor Space Required", level: 3 },
  { id: "common-mistakes", title: "Common Sizing Mistakes", level: 2 },
  { id: "from-throughput-to-floor", title: "From Throughput to Floor Space", level: 2 },
  { id: "putting-it-together", title: "Putting It Together", level: 2 },
];

export default function PostBody() {
  return (
    <>
      <p style={{ fontSize: "19px", color: "#3D6478", fontStyle: "italic", marginBottom: "32px", lineHeight: 1.6 }}>
        Sizing equipment isn&apos;t about today&apos;s production volume. It&apos;s about the volume your facility will actually run two years from now, on the worst week of the year, with one piece of equipment in the shop. Capacity planning that ignores that reality is the most common mistake in industrial bakery procurement.
      </p>

      <BlogSection id="right-question" title="The Capacity Question, Asked Correctly">
        <p>
          When a vendor asks &quot;how many racks do you need?&quot;, the wrong answer is a number based on average daily production. The right answer is a calculation that accounts for peak production, cycle time, redundancy, and a realistic 24-month forecast.
        </p>
        <p>
          Most bakeries that under-buy do so because they sized to last quarter&apos;s averages. Most bakeries that over-buy do so because someone overcorrected after the last under-buy. There&apos;s a more disciplined way.
        </p>
      </BlogSection>

      <BlogSection id="peak-vs-average" title="The Peak-vs-Average Trap">
        <p>
          The trap is simple: you size your equipment to handle the average week, then your operation regularly fails to handle the peak week. For a wholesale bakery, that might be the week before Thanksgiving. For a retail-supply operation, the days before a holiday. For a food-service contract bakery, an unannounced volume spike from a major customer.
        </p>
        <p>
          The right anchor is <strong>peak production volume</strong>, not average. Specifically: the highest week your operation has run in the last 24 months, plus a forecast for what your peak might be in the next 24 months given expected growth.
        </p>
        <p>
          For most bakeries, peak weekly volume runs 1.4–1.8× the average week. If you&apos;re sizing equipment to average and the multiplier in your business is 1.6×, you&apos;re going to be 60% short on the days that matter.
        </p>
        <BrandedTip variant="reference" href="/blog/buy-new-vs-refurbish" linkText="See last week's post">
          <strong>Reference:</strong> If you&apos;re evaluating capacity additions on existing equipment, the buy-vs-refurbish framework from last week applies before you start adding new units.
        </BrandedTip>
      </BlogSection>

      <BlogSection id="three-formulas" title="Three Formulas You Actually Need">

        <BlogSection id="rack-count" title="Rack Count from Production Volume" level={3}>
          <p>
            The basic conversion from production volume to rack count:
          </p>
          <div
            style={{
              background: "#1C2B36",
              color: "#ffffff",
              padding: "24px 28px",
              borderRadius: "6px",
              margin: "20px 0",
              fontFamily: "monospace",
              fontSize: "14px",
              lineHeight: 1.8,
            }}
          >
            <strong style={{ color: "#C05621", display: "block", marginBottom: "12px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1.5px", fontFamily: "var(--font-barlow), sans-serif" }}>
              Formula 1
            </strong>
            Racks Needed = (Peak Pans Per Hour × Cooling Hours)<br />
            &nbsp;&nbsp;&nbsp;&nbsp;÷ Pans Per Rack
          </div>
          <p>
            For a bakery running 600 pans/hour at peak with a 90-minute cool cycle, using 17-shelf racks holding 17 pans each:
          </p>
          <p style={{ background: "rgba(95, 138, 158, 0.08)", padding: "16px 20px", borderRadius: "4px", margin: "16px 0", fontFamily: "monospace", fontSize: "14px" }}>
            (600 × 1.5) ÷ 17 = 53 racks at peak occupancy
          </p>
        </BlogSection>

        <BlogSection id="cycle-buffer" title="Cycle Buffer" level={3}>
          <p>
            A rack count that&apos;s exactly equal to peak occupancy means there&apos;s no buffer for loading, unloading, transit, sanitation, or downtime. Real operations need a buffer.
          </p>
          <div
            style={{
              background: "#1C2B36",
              color: "#ffffff",
              padding: "24px 28px",
              borderRadius: "6px",
              margin: "20px 0",
              fontFamily: "monospace",
              fontSize: "14px",
              lineHeight: 1.8,
            }}
          >
            <strong style={{ color: "#C05621", display: "block", marginBottom: "12px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1.5px", fontFamily: "var(--font-barlow), sans-serif" }}>
              Formula 2
            </strong>
            Total Fleet = Racks Needed × 1.20<br />
            &nbsp;&nbsp;&nbsp;&nbsp;(20% buffer for cycling and downtime)
          </div>
          <p>
            For the example above: 53 × 1.20 = <strong>64 racks total</strong>. The 11-rack buffer covers loading, transit, sanitation, and one or two units in the shop.
          </p>
          <p>
            For very high-throughput operations or those running 6–7 days a week, a 25–30% buffer is more realistic. For low-utilization operations, 15% is acceptable.
          </p>
        </BlogSection>

        <BlogSection id="floor-space" title="Floor Space Required" level={3}>
          <p>
            Once you know rack count, you can convert to floor space — but you have to account for both the rack footprint and the operational space around it (aisle access, clearance for opening, transit lanes).
          </p>
          <div
            style={{
              background: "#1C2B36",
              color: "#ffffff",
              padding: "24px 28px",
              borderRadius: "6px",
              margin: "20px 0",
              fontFamily: "monospace",
              fontSize: "14px",
              lineHeight: 1.8,
            }}
          >
            <strong style={{ color: "#C05621", display: "block", marginBottom: "12px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1.5px", fontFamily: "var(--font-barlow), sans-serif" }}>
              Formula 3
            </strong>
            Floor Space (sq ft) = Total Fleet × Rack Footprint × 2.0<br />
            &nbsp;&nbsp;&nbsp;&nbsp;(2× multiplier for aisle and clearance)
          </div>
          <p>
            A 24x66 rack has a 11 sq ft footprint. For 64 racks: 64 × 11 × 2.0 = <strong>1,408 sq ft</strong> of cooling/proofing floor space.
          </p>
        </BlogSection>
      </BlogSection>

      <BlogSection id="common-mistakes" title="Common Sizing Mistakes">
        <p>
          Even with the formulas above, several recurring errors cause sizing to miss reality:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Sizing to last year&apos;s peak, not next year&apos;s.</strong> If you&apos;re growing 8% a year, this year&apos;s peak will be ~16% higher than the comparable peak two years ago. Build that in.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Ignoring the proofing-to-cooling delta.</strong> Proofing and cooling have different cycle times. If you size based on cooling and try to share the rack pool with proofing, neither cycle is well-served.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Forgetting the sanitation cycle.</strong> Racks coming out of wash-down aren&apos;t available for the next production cycle for 30–60 minutes. That has to live in the buffer math.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Overweighting current conditions.</strong> If you size for the most efficient line layout you&apos;ve ever achieved, the first day reality breaks the layout, you&apos;re short.
          </li>
          <li>
            <strong>Forgetting freight when ordering large fleets.</strong> Buying 64 racks at once means freight is a meaningful percentage of total cost. Component-built racks ship knocked-down, dramatically reducing freight on large orders.
          </li>
        </ul>
        <BrandedTip variant="spec" href="/#products" linkText="See bread rack sizing options">
          <strong>Spec Tip:</strong> IBE bread racks come in 8, 9, 10, 15, and 17 shelf configurations. Custom shelf counts are available. The right shelf count is usually a function of pan size and cycle volume — happy to spec it with you.
        </BrandedTip>
      </BlogSection>

      <BlogSection id="from-throughput-to-floor" title="From Throughput to Floor Space">
        <p>
          One of the cleanest ways to think about capacity planning is to work the chain in both directions. Most operations start with a known throughput target and need to figure out floor space. Sometimes you have to start with available floor space and figure out maximum throughput. The formulas work either direction:
        </p>
        <p style={{ background: "rgba(95, 138, 158, 0.08)", padding: "16px 20px", borderRadius: "4px", margin: "16px 0", fontFamily: "monospace", fontSize: "14px" }}>
          Max Throughput = (Floor Space ÷ 2.0 ÷ Rack Footprint) ÷ 1.20<br />
          &nbsp;&nbsp;&nbsp;&nbsp;× (Pans Per Rack ÷ Cooling Hours)
        </p>
        <p>
          For a 1,500 sq ft cooling area: (1,500 ÷ 2.0 ÷ 11) ÷ 1.20 = 57 racks operationally available. If those are 17-pan racks on a 90-min cycle: 57 × (17 ÷ 1.5) = <strong>~646 pans/hour maximum</strong>.
        </p>
        <p>
          That gives you a hard ceiling. If your business plan calls for 800 pans/hour at peak, you don&apos;t have a rack problem — you have a floor space problem, and you need to address it before adding equipment.
        </p>
      </BlogSection>

      <BlogSection id="putting-it-together" title="Putting It Together">
        <p>
          Capacity planning is a conversation, not a one-shot calculation. Run the numbers, then revisit them quarterly as production volume changes. The biggest mistakes happen when sizing is done once at facility startup and never reviewed.
        </p>
        <p>
          A practical capacity-planning process:
        </p>
        <ol style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            Track <strong>actual peak weekly volume</strong> for the trailing 24 months.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Apply your forecast growth to project peak 24 months out.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Run the three formulas to get rack count and floor space.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Sanity-check against current utilization. If you&apos;re running below 70% utilization at your current peak, you may have less room to add equipment than the formulas suggest.
          </li>
          <li>
            <strong>Review every six months.</strong> Production volume drifts. Capacity needs to drift with it.
          </li>
        </ol>
        <BrandedTip variant="quote" href="/#contact" linkText="Get a sizing consultation">
          <strong>Quote Tip:</strong> If you&apos;re working through a capacity expansion, bring us your peak volume number and your floor footprint. We&apos;ll spec a rack and cart fleet that hits both.
        </BrandedTip>
      </BlogSection>

      <BlogSources
        items={[
          {
            title: "Production Capacity Planning in Food Manufacturing",
            publisher: "American Society of Baking",
            url: "https://www.asbe.org",
          },
          {
            title: "Throughput Analysis for Industrial Bakery Operations",
            publisher: "Snack Food & Wholesale Bakery",
            url: "https://www.snackandbakery.com",
          },
          {
            title: "Lean Manufacturing Principles for Bakeries",
            publisher: "Bakery Business Magazine",
            note: "Buffer-sizing rules of thumb adapted from lean manufacturing.",
          },
          {
            title: "Plant Layout and Capacity Design",
            publisher: "Food Engineering Magazine",
            url: "https://www.foodengineeringmag.com",
          },
        ]}
      />
    </>
  );
}
