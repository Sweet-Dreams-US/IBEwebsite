import BlogSection from "@/components/blog/BlogSection";
import BrandedTip from "@/components/blog/BrandedTip";
import BlogSources from "@/components/blog/BlogSources";
import { TOCSection } from "@/components/blog/BlogTOC";

export const sections: TOCSection[] = [
  { id: "question-behind", title: "The Question Behind the Question", level: 2 },
  { id: "where-standard-belongs", title: "Where Standard Steel Still Belongs", level: 2 },
  { id: "where-stainless-wins", title: "Where Stainless Wins", level: 2 },
  { id: "mid-zone", title: "The Mid-Zone Where It Gets Complicated", level: 2 },
  { id: "what-stainless-means", title: "What \"Stainless\" Actually Means", level: 2 },
  { id: "304-vs-316", title: "304 vs 316", level: 3 },
  { id: "polish-finish", title: "Polish and Finish", level: 3 },
  { id: "cost-reality", title: "Cost Differential Reality Check", level: 2 },
  { id: "decision-framework", title: "The Decision Framework", level: 2 },
];

export default function PostBody() {
  return (
    <>
      <p style={{ fontSize: "19px", color: "#3D6478", fontStyle: "italic", marginBottom: "32px", lineHeight: 1.6 }}>
        Stainless steel is the default answer to a question most bakeries don&apos;t ask. Here&apos;s how to ask it correctly — and why the right answer for half your facility might be standard steel.
      </p>

      <BlogSection id="question-behind" title="The Question Behind the Question">
        <p>
          When a vendor asks &quot;stainless or standard?&quot;, what they&apos;re really asking is: <em>where does this piece of equipment live, what touches it, how often is it cleaned, and how visible is it during a regulatory audit?</em>
        </p>
        <p>
          Stainless steel costs roughly 1.5–2.5× as much as comparable standard steel for bakery equipment. That&apos;s a real number that compounds across a fleet. Spending it everywhere is wasteful. Skipping it where it belongs is a five-year liability.
        </p>
      </BlogSection>

      <BlogSection id="where-standard-belongs" title="Where Standard Steel Still Belongs">
        <p>
          Standard steel — typically with galvanized or nickel-chrome finish — is the right choice for several common bakery applications:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Mail and document carts.</strong> No food contact, no wash-down. A nickel-chrome finish over standard steel will outlast the equipment&apos;s useful life.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Mobile bread racks in dry zones.</strong> If the rack is cooling finished bread that&apos;s already in pans, and the rack itself isn&apos;t a food-contact surface, standard steel with the right finish performs.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Receiving and transport carts.</strong> Carts that move sealed packaging through the facility don&apos;t need stainless. Galvanized or epoxy-coated steel handles the duty.
          </li>
          <li>
            <strong>Storage racks and fixturing in dry-goods zones.</strong> Anywhere wash-down isn&apos;t part of the routine.
          </li>
        </ul>
        <BrandedTip variant="spec" href="/#products" linkText="See our standard-steel cart options">
          <strong>Spec Tip:</strong> IBE&apos;s mail carts and carryout carts are standard steel with appropriate finishes precisely because they live in dry zones. The nickel-chrome finish on the LS-3 and LS-4 won&apos;t chip, peel, or rust under normal mailroom and office conditions.
        </BrandedTip>
      </BlogSection>

      <BlogSection id="where-stainless-wins" title="Where Stainless Wins">
        <p>
          Stainless steel is the right choice — often the only correct choice — when any of these conditions apply:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Direct food contact.</strong> Trough interiors, pan surfaces, anything where dough or finished product touches the equipment.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Wash-down zones.</strong> Equipment that gets sprayed with caustic cleaners daily. Standard steel with a finish will eventually fail at that finish; stainless is the substrate, not a coating, so it doesn&apos;t.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>High-temp / cold-shock cycles.</strong> Equipment that goes between blast freezer and oven (yes, this is a thing — pie racks famously do both). Coatings on standard steel crack under thermal cycling. Stainless doesn&apos;t.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>USDA-inspected facilities.</strong> If you&apos;re processing meat fillings or operating under USDA jurisdiction, the bar is higher and stainless is the practical default.
          </li>
          <li>
            <strong>Allergen-control zones.</strong> Smooth, non-porous surfaces are critical for allergen wash-down. Stainless cleans more reliably than coated steel.
          </li>
        </ul>
      </BlogSection>

      <BlogSection id="mid-zone" title="The Mid-Zone Where It Gets Complicated">
        <p>
          Most bakeries have a middle zone where the answer isn&apos;t obvious. Equipment that:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "8px" }}>Doesn&apos;t directly contact food but is in a wash-down area</li>
          <li style={{ marginBottom: "8px" }}>Lives in a dry zone but occasionally gets pressure-washed during deep cleans</li>
          <li>Operates in an environment with intermittent humidity from ovens or coolers</li>
        </ul>
        <p>
          For these cases, the best answer is usually standard steel with an upgraded finish — specifically, glass-bead blasted or electro-polished steel. The substrate is standard, but the finish is engineered for the conditions. Cost lands around 1.2–1.4× standard, well below true stainless.
        </p>
        <p>
          A common error is to either over-spec everything to stainless (paying 2× across the fleet) or under-spec everything to galvanized (and replacing finish-failed equipment in 5 years). The mid-zone is where finish selection actually matters more than substrate selection.
        </p>
      </BlogSection>

      <BlogSection id="what-stainless-means" title="What &quot;Stainless&quot; Actually Means">
        <p>
          When a vendor says &quot;stainless,&quot; they usually mean one of two grades — and the difference matters.
        </p>

        <BlogSection id="304-vs-316" title="304 vs 316" level={3}>
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
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Grade</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Use Case</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Cost vs 304</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)", fontWeight: 600 }}>304</td>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Most bakery, dry food. Standard food-grade stainless.</td>
                  <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Baseline</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 16px", fontWeight: 600 }}>316</td>
                  <td style={{ padding: "10px 16px" }}>Salt, brine, acidic environments. Required for some seafood and brining.</td>
                  <td style={{ padding: "10px 16px" }}>+30–50%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            For 95% of bakery applications, 304 is correct. 316 is required when chloride exposure (salt) is part of the process — primarily seafood, brining, or pickling adjacent operations. Specifying 316 where 304 will do is wasted money.
          </p>
        </BlogSection>

        <BlogSection id="polish-finish" title="Polish and Finish" level={3}>
          <p>
            Stainless comes with different surface polishes, designated by number. The most common in food service:
          </p>
          <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
            <li style={{ marginBottom: "6px" }}><strong>2B:</strong> Mill finish, dull. OK for non-visible structural use.</li>
            <li style={{ marginBottom: "6px" }}><strong>#3:</strong> Light polish. Suitable for most equipment exteriors.</li>
            <li style={{ marginBottom: "6px" }}><strong>#4:</strong> Brushed. The standard for visible food-service equipment.</li>
            <li><strong>Electro-polished:</strong> Smoothest. Highest sanitation rating. Premium pricing.</li>
          </ul>
          <p>
            Spec the polish your application actually needs — over-spec adds cost without operational benefit.
          </p>
        </BlogSection>
      </BlogSection>

      <BlogSection id="cost-reality" title="Cost Differential Reality Check">
        <p>
          For a typical bakery rack, expect roughly the following cost differential:
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
                <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Configuration</th>
                <th style={{ padding: "12px 16px", textAlign: "right", fontWeight: 700, color: "#1C2B36", borderBottom: "1px solid rgba(28, 43, 54, 0.1)" }}>Indexed Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Standard steel, galvanized</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>1.00×</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>Standard steel, glass-bead blasted</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>1.15–1.25×</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>304 stainless, mill finish</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>1.6–1.9×</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>304 stainless, electro-polished</td>
                <td style={{ padding: "10px 16px", textAlign: "right", borderBottom: "1px solid rgba(28, 43, 54, 0.06)" }}>2.0–2.5×</td>
              </tr>
              <tr>
                <td style={{ padding: "10px 16px" }}>316 stainless, electro-polished</td>
                <td style={{ padding: "10px 16px", textAlign: "right" }}>2.6–3.2×</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The progression is steep. A 50-rack fleet specced uniformly to 316 electro-polished costs roughly 3× a galvanized fleet — a difference of $50,000–$80,000 on a typical project. Get the spec right.
        </p>
      </BlogSection>

      <BlogSection id="decision-framework" title="The Decision Framework">
        <p>
          A simple decision tree for the buy decision:
        </p>
        <ol style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Is there direct food contact?</strong> If yes → 304 stainless minimum.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Is there chloride / salt / brine exposure?</strong> If yes → step up to 316 stainless.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Is the equipment in a regular wash-down zone?</strong> If yes → 304 stainless or upgraded-finish standard steel.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Is the equipment in a dry zone?</strong> If yes → standard steel with appropriate finish.
          </li>
          <li>
            <strong>USDA inspection or allergen-control zone?</strong> If yes → stainless regardless of contact, for cleanability.
          </li>
        </ol>
        <p>
          Most bakeries end up with mixed fleets: stainless for the production zone and dough handling, standard steel for carts and dry-zone equipment. That mix is usually correct, and any vendor who pushes an all-stainless or all-standard quote should explain why.
        </p>
        <BrandedTip variant="quote" href="/#contact" linkText="Get a mixed-fleet quote">
          <strong>Quote Tip:</strong> When you ask IBE for a quote on a mixed fleet, we&apos;ll spec by zone — stainless where it belongs, standard steel where it makes sense. The result is usually 30–40% lower than uniform stainless and operates the same.
        </BrandedTip>
      </BlogSection>

      <BlogSources
        items={[
          {
            title: "Stainless Steel Grades for Food Service Applications",
            publisher: "Specialty Steel Industry of North America (SSINA)",
            url: "https://www.ssina.com",
          },
          {
            title: "Material Selection for Food Contact Surfaces",
            publisher: "NSF International",
            url: "https://www.nsf.org",
          },
          {
            title: "BISSC Material Standards for Bakery Equipment",
            publisher: "Baking Industry Sanitation Standards Committee",
            url: "https://www.bissc.org",
          },
          {
            title: "Corrosion Resistance in Food Processing Environments",
            publisher: "ASM International",
            note: "Reference for chloride / brine sensitivity that drives 304 vs 316 selection.",
          },
        ]}
      />
    </>
  );
}
