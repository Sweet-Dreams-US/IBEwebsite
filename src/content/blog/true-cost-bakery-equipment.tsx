import BlogSection from "@/components/blog/BlogSection";
import BrandedTip from "@/components/blog/BrandedTip";
import BlogSources from "@/components/blog/BlogSources";
import { TOCSection } from "@/components/blog/BlogTOC";

export const sections: TOCSection[] = [
  { id: "sticker-shock", title: "Beyond the Sticker Price", level: 2 },
  { id: "five-cost-buckets", title: "The Five Cost Buckets", level: 2 },
  { id: "purchase-price", title: "1. Purchase Price", level: 3 },
  { id: "freight", title: "2. Freight & Installation", level: 3 },
  { id: "operating", title: "3. Operating & Labor", level: 3 },
  { id: "maintenance", title: "4. Maintenance & Repair", level: 3 },
  { id: "disposal", title: "5. Disposal & Replacement", level: 3 },
  { id: "tco-formula", title: "The Napkin Formula", level: 2 },
  { id: "worked-example", title: "A Worked Example: Bread Racks", level: 2 },
  { id: "what-to-do", title: "What To Do With This", level: 2 },
];

export default function PostBody() {
  return (
    <>
      <p style={{ fontSize: "19px", color: "#3D6478", fontStyle: "italic", marginBottom: "32px", lineHeight: 1.6 }}>
        The cheapest rack on the quote is rarely the cheapest rack on the floor. Five years in, the equipment that looked like a deal is the equipment your maintenance team is wrestling with at 2am. This is a framework for spotting that mistake before it gets made.
      </p>

      <BlogSection id="sticker-shock" title="Beyond the Sticker Price">
        <p>
          Most bakery equipment purchases get evaluated on a single number: the line-item price on the quote. It&apos;s a tempting shortcut. The number is concrete, it&apos;s easy to compare across vendors, and it&apos;s the figure the CFO asks about.
        </p>
        <p>
          The problem is that purchase price is usually the smallest cost in the equipment&apos;s life. By the time a bread rack reaches retirement, you&apos;ve spent more on labor moving it, more on parts replacing wheels and shelves, and more on energy circulating air through it than you ever spent buying it.
        </p>
        <p>
          <strong>Total Cost of Ownership</strong> (TCO) is the standard framework for fixing this. It&apos;s used everywhere from automotive fleets to data centers. It works just as well for bakery equipment, and you don&apos;t need a finance degree to run it.
        </p>
      </BlogSection>

      <BlogSection id="five-cost-buckets" title="The Five Cost Buckets">
        <p>
          Every piece of equipment you own generates costs in five buckets. Some are obvious; some are easy to forget until they hit. To run TCO honestly, you need to give each one a number — even if the number is a rough estimate.
        </p>

        <BlogSection id="purchase-price" title="1. Purchase Price" level={3}>
          <p>
            The line item on the quote. Easy to find, hard to argue about. This is where almost every comparison stops, and it&apos;s where the trouble starts.
          </p>
        </BlogSection>

        <BlogSection id="freight" title="2. Freight & Installation" level={3}>
          <p>
            Freight from the manufacturer to your dock. Installation labor if the equipment requires it. Disposal of pallets and packaging. For racks and carts, freight is a meaningful percentage of total purchase cost — sometimes 10–20% — and it varies enormously based on whether the equipment ships fully assembled or knocked-down.
          </p>
          <BrandedTip variant="reference">
            <strong>Why this matters:</strong> Equipment that ships disassembled costs less to freight, less to store before deployment, and is easier to bring back to the shop for major repair. It&apos;s a feature most buyers underweight on day one and overweight by year three.
          </BrandedTip>
        </BlogSection>

        <BlogSection id="operating" title="3. Operating & Labor" level={3}>
          <p>
            Energy, water, and labor consumed while the equipment is in use. For a bread rack, this is mostly labor — how many people-minutes does it take to load, push, unload, and break down? For a blast freezer rack, energy joins the conversation.
          </p>
          <p>
            A mobile rack with smooth-running casters and a single operator costs less per cycle than a stationary rack that needs two people to transfer pans. Run that delta over five years of production and the math gets loud.
          </p>
          <BrandedTip variant="spec" href="/#products" linkText="See our cooling racks">
            <strong>Spec Tip:</strong> Our component-built bread racks come with multiple caster options precisely because the right wheel for a tile floor is different from the right wheel for a wash-down zone. Wheels are 5% of the price and 80% of the labor difference.
          </BrandedTip>
        </BlogSection>

        <BlogSection id="maintenance" title="4. Maintenance & Repair" level={3}>
          <p>
            Replacement shelves, replacement wheels, weld repairs, finish refurbishment. Two architectures dominate the market here, and they cost very differently.
          </p>
          <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong>Welded racks</strong> are cheaper to manufacture and ship faster. When a shelf cracks or a frame member bends, the rack often has to be cut up and rebuilt, or simply scrapped.
            </li>
            <li>
              <strong>Component-built racks</strong> bolt together. Damaged shelves come out and new ones go in without a welder. Bent frame members can be replaced individually.
            </li>
          </ul>
          <p>
            On a 10-year horizon, the maintenance delta between these two architectures regularly exceeds the original purchase price. This is the bucket that matters most and gets considered least.
          </p>
        </BlogSection>

        <BlogSection id="disposal" title="5. Disposal & Replacement" level={3}>
          <p>
            Eventually, every piece of equipment leaves the floor. The cost of pulling it out, hauling it away, and re-buying its replacement closes the TCO loop. Equipment that lasts 15 years instead of 7 doesn&apos;t just save you the second purchase — it saves you the disruption of a rip-and-replace cycle in a working facility.
          </p>
        </BlogSection>
      </BlogSection>

      <BlogSection id="tco-formula" title="The Napkin Formula">
        <p>
          You don&apos;t need a spreadsheet to run a first-pass TCO. You need five numbers and an honest assessment of the time horizon.
        </p>
        <div
          style={{
            background: "#1C2B36",
            color: "#ffffff",
            padding: "28px 32px",
            borderRadius: "6px",
            margin: "24px 0",
            fontFamily: "monospace",
            fontSize: "15px",
            lineHeight: 1.8,
          }}
        >
          <strong style={{ color: "#C05621", display: "block", marginBottom: "12px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1.5px" }}>
            TCO Formula
          </strong>
          TCO = Purchase + Freight + (Annual Operating × Years) +<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Annual Maintenance × Years) + Disposal
        </div>
        <p>
          For a fair comparison between two pieces of equipment, you also need to divide TCO by expected service life — that gives you a cost-per-year figure that&apos;s honest about lifespan differences.
        </p>
      </BlogSection>

      <BlogSection id="worked-example" title="A Worked Example: Bread Racks">
        <p>
          Imagine two bread racks quoted at different prices: a welded rack at $850 and a component-built rack at $1,150. The welded rack looks like a $300 win. Does that hold up?
        </p>
        <div
          style={{
            overflowX: "auto",
            margin: "24px 0",
            border: "1px solid rgba(28, 43, 54, 0.12)",
            borderRadius: "6px",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr style={{ background: "#F2F5F7" }}>
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Cost Bucket (10 yrs)</th>
                <th style={{ padding: "12px 16px", textAlign: "right", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Welded</th>
                <th style={{ padding: "12px 16px", textAlign: "right", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Component</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Purchase</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$850</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$1,150</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Freight (knocked-down ships smaller)</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$160</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$95</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Wheel/caster replacement (× 3 cycles)</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$340</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$240</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Damaged shelf repair</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$420 (weld, downtime)</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$85 (drop-in)</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Mid-life rebuild</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Replace ($850)</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>$280 (parts)</td>
              </tr>
              <tr style={{ background: "rgba(192, 86, 33, 0.06)" }}>
                <td style={{ padding: "12px 16px", fontWeight: 700, color: "#1C2B36" }}>10-Year TCO</td>
                <td style={{ padding: "12px 16px", textAlign: "right", fontWeight: 700, color: "#1C2B36" }}>$2,620</td>
                <td style={{ padding: "12px 16px", textAlign: "right", fontWeight: 700, color: "#C05621" }}>$1,850</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The component-built rack saves ~$770 over ten years per unit. Across a fleet of 40 racks, that&apos;s a $30,000 difference that never appears on the original quote.
        </p>
        <BrandedTip variant="quote" href="/#contact" linkText="Get a TCO-aware quote">
          <strong>Quote Tip:</strong> When you ask IBE for a quote, ask us to break out expected 10-year maintenance costs alongside the purchase line. Our racks are built component-first specifically so the maintenance bucket stays small.
        </BrandedTip>
      </BlogSection>

      <BlogSection id="what-to-do" title="What To Do With This">
        <p>
          You don&apos;t need a perfect TCO model. You need a model honest enough to flag the cases where the cheap option is actually expensive. A few habits to build into your purchasing process:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Ask vendors about parts availability.</strong> If they can&apos;t name a turnaround time on replacement shelves, the rack isn&apos;t built to be repaired.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Get a freight number before signing.</strong> A surprising number of quotes hide $200–$400 in freight that turns the comparison upside-down.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Decide on a planning horizon.</strong> Bakery equipment often runs 10–15 years. If you&apos;re evaluating on a 3-year horizon, you&apos;re lying to yourself.
          </li>
          <li>
            <strong>Document the decision.</strong> When the rack is still on the floor in 2036 and someone asks why you spent the extra $300, you&apos;ll want the math.
          </li>
        </ul>
        <p>
          The point of TCO isn&apos;t to make purchasing harder. It&apos;s to make sure that when you do buy the cheaper option, you&apos;re doing it on purpose.
        </p>
      </BlogSection>

      <BlogSources
        items={[
          {
            title: "Total Cost of Ownership: A Key Concept in Strategic Cost Management",
            publisher: "Journal of Business Logistics",
            note: "Foundational academic treatment of TCO methodology in industrial procurement.",
          },
          {
            title: "Equipment Replacement Decision Framework",
            publisher: "American Society of Baking",
            url: "https://www.asbe.org",
          },
          {
            title: "BISSC Sanitation Standards for Baking Equipment",
            publisher: "Baking Industry Sanitation Standards Committee",
            url: "https://www.bissc.org",
            note: "Sanitation design standards that drive maintenance and repair frequency.",
          },
          {
            title: "Snack Food & Wholesale Bakery — Equipment Trends",
            publisher: "BNP Media",
            url: "https://www.snackandbakery.com",
            note: "Industry coverage of equipment lifecycle and replacement economics.",
          },
        ]}
      />
    </>
  );
}
