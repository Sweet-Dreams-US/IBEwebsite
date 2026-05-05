import BlogSection from "@/components/blog/BlogSection";
import BrandedTip from "@/components/blog/BrandedTip";
import BlogSources from "@/components/blog/BlogSources";
import { TOCSection } from "@/components/blog/BlogTOC";

export const sections: TOCSection[] = [
  { id: "what-bissc-is", title: "What BISSC Actually Is", level: 2 },
  { id: "what-gets-certified", title: "What Gets Certified", level: 2 },
  { id: "what-the-mark-proves", title: "What the Mark Proves (and Doesn't)", level: 2 },
  { id: "verifying-claims", title: "How to Verify a BISSC Claim", level: 2 },
  { id: "why-audits-flag", title: "Why Audits Flag Non-BISSC Equipment", level: 2 },
  { id: "buying-with-bissc", title: "Buying With BISSC in Mind", level: 2 },
];

export default function PostBody() {
  return (
    <>
      <p style={{ fontSize: "19px", color: "#3D6478", fontStyle: "italic", marginBottom: "32px", lineHeight: 1.6 }}>
        Most bakeries assume their equipment is BISSC compliant. Most are wrong about at least some of it. The mark isn&apos;t a sticker — it&apos;s a verifiable claim with a paper trail, and knowing how to read that trail separates equipment that passes audits from equipment that almost does.
      </p>

      <BlogSection id="what-bissc-is" title="What BISSC Actually Is">
        <p>
          The Baking Industry Sanitation Standards Committee — BISSC — is a non-profit standards body that publishes sanitary design and construction standards specifically for bakery equipment. The organization dates back to 1949 and is recognized by ANSI as an accredited standards developer.
        </p>
        <p>
          BISSC standards cover both <strong>design</strong> (how equipment must be constructed to be sanitarily acceptable) and <strong>certification</strong> (how individual equipment models are evaluated against those standards by third-party auditors).
        </p>
        <p>
          The BISSC mark on a piece of equipment is a claim that this specific model has been audited by a BISSC-authorized inspector and met the published standard at the time of inspection. It&apos;s not a self-certification. It&apos;s not a marketing claim. It&apos;s a third-party-verified mark with a registry behind it.
        </p>
      </BlogSection>

      <BlogSection id="what-gets-certified" title="What Gets Certified">
        <p>
          BISSC certification is granted at the <strong>model level</strong>, not the unit level. When a manufacturer certifies a bread rack model under BISSC, every rack of that exact model produced subsequently carries the certification — assuming the manufacturer continues to produce it to the certified design.
        </p>
        <p>
          Certifications cover specific design elements:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "8px" }}><strong>Material composition</strong> (substrate, finish, grade)</li>
          <li style={{ marginBottom: "8px" }}><strong>Weld continuity and finish</strong> (continuous, ground smooth, no crevices)</li>
          <li style={{ marginBottom: "8px" }}><strong>Surface accessibility for cleaning</strong> (no enclosed cavities, drainable surfaces)</li>
          <li style={{ marginBottom: "8px" }}><strong>Joint and fastener design</strong> (no exposed threads in food zones, sealed joints)</li>
          <li style={{ marginBottom: "8px" }}><strong>Drainage</strong> (no standing-water traps)</li>
          <li><strong>Construction documentation</strong> (drawings, specifications, change control)</li>
        </ul>
        <p>
          A certification is &quot;sticky&quot; only as long as the manufacturer keeps building to spec. If a manufacturer changes the design — different welding process, different finish, different fastener — and doesn&apos;t re-certify, equipment from that point forward isn&apos;t actually BISSC compliant even if the model number didn&apos;t change.
        </p>
      </BlogSection>

      <BlogSection id="what-the-mark-proves" title="What the Mark Proves (and Doesn&apos;t)">
        <p>
          The BISSC mark proves a bounded set of things:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
          <li style={{ marginBottom: "8px" }}>The design met the standard at certification time</li>
          <li style={{ marginBottom: "8px" }}>A third-party auditor verified the build matched the design</li>
          <li>The manufacturer has documentation supporting the certification</li>
        </ul>
        <p>
          The mark <strong>doesn&apos;t</strong> prove:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "12px 0" }}>
          <li style={{ marginBottom: "8px" }}>That the equipment is being maintained in a sanitary state in your facility</li>
          <li style={{ marginBottom: "8px" }}>That the manufacturer hasn&apos;t deviated from the certified design since</li>
          <li style={{ marginBottom: "8px" }}>That the certification is current (some certifications need to be renewed)</li>
          <li>That the equipment is suitable for your specific application</li>
        </ul>
        <p>
          Auditors at your facility check both the certification status of the equipment and the maintenance state of the equipment. Either one can fail an audit independently.
        </p>
      </BlogSection>

      <BlogSection id="verifying-claims" title="How to Verify a BISSC Claim">
        <p>
          A vendor that claims BISSC certification on their equipment should be able to produce three documents within a few hours of being asked:
        </p>
        <ol style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>The current BISSC certification document.</strong> This names the model, the certification number, the certification date, and any conditions or restrictions.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>The third-party audit report.</strong> Some manufacturers will share this; some treat it as confidential. At minimum, they should be willing to confirm the auditor&apos;s name and the audit date.
          </li>
          <li>
            <strong>A statement of design continuity.</strong> Confirmation that the units being shipped today match the design that was certified — that no material, weld, or fastener changes have been made since certification without re-certification.
          </li>
        </ol>
        <p>
          A vendor who can&apos;t produce these documents is making a marketing claim, not a verifiable certification claim. Treat it accordingly.
        </p>
        <BrandedTip variant="spec" href="/#products" linkText="See our BISSC-spec products">
          <strong>Spec Tip:</strong> IBE designs equipment to BISSC standards as a baseline — sealed welds, smooth-radius corners, drainable surfaces, food-contact materials. Specific certifications on specific models are documented and available on request.
        </BrandedTip>
      </BlogSection>

      <BlogSection id="why-audits-flag" title="Why Audits Flag Non-BISSC Equipment">
        <p>
          Third-party food safety auditors (AIB, SQF, BRC) don&apos;t require BISSC certification specifically — but they require equipment that meets equivalent sanitary design standards. Equipment that wasn&apos;t designed to a recognized standard usually fails on one of these specific issues:
        </p>
        <ul style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Hollow tubing without sealed ends.</strong> Open tube ends create cavities that can&apos;t be cleaned. BISSC requires sealed.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Tack-welded joints.</strong> Discontinuous welds create gaps that harbor product residue. BISSC requires continuous welds.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Exposed bolt threads in food zones.</strong> Threads create crevices where contamination accumulates. BISSC requires shrouded or eliminated.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Inaccessible drainage.</strong> Standing water is a sanitation failure mode. BISSC requires drainable surfaces.
          </li>
          <li>
            <strong>Sharp internal corners.</strong> 90-degree internal corners can&apos;t be cleaned reliably. BISSC requires smooth radii (typically ≥ 6mm).
          </li>
        </ul>
        <p>
          Each of these is a single audit finding. Stack two or three on the same piece of equipment and you have a corrective action notice, possibly an audit failure.
        </p>
      </BlogSection>

      <BlogSection id="buying-with-bissc" title="Buying With BISSC in Mind">
        <p>
          A practical approach to integrating BISSC awareness into your purchasing process:
        </p>
        <ol style={{ paddingLeft: "24px", margin: "16px 0" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Make BISSC compliance a requirement on your spec sheets, not a bonus.</strong> If you put it in the requirements, vendors who can&apos;t meet it self-select out.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Distinguish between &quot;BISSC certified&quot; and &quot;BISSC compliant.&quot;</strong> Compliant means the design meets the standard. Certified means a third party verified it. For most non-direct-contact equipment, compliant is sufficient. For direct food contact and for facilities under tight audit regimes, certified is worth specifying.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Document what you bought.</strong> Keep the certification documents and design specs in your equipment file. When an auditor asks why a piece of equipment is acceptable, you have an answer ready.
          </li>
          <li>
            <strong>Re-verify after major design changes.</strong> If a manufacturer revises the design of a piece of equipment you own, ask whether the certification still applies.
          </li>
        </ol>
        <BrandedTip variant="quote" href="/#contact" linkText="Discuss BISSC requirements">
          <strong>Quote Tip:</strong> If your facility operates under SQF, BRC, or AIB audit regimes, mention this when requesting a quote. We&apos;ll spec equipment that has the documentation an auditor needs to see — not just the build that meets the standard.
        </BrandedTip>
      </BlogSection>

      <BlogSources
        items={[
          {
            title: "BISSC Standards and Certification Programs",
            publisher: "Baking Industry Sanitation Standards Committee",
            url: "https://www.bissc.org",
            note: "Primary source for current BISSC standards and the registry of certified equipment.",
          },
          {
            title: "AIB International Sanitation Audit Standards",
            publisher: "AIB International",
            url: "https://www.aibinternational.com",
          },
          {
            title: "SQF Code Edition 9",
            publisher: "SQF Institute",
            url: "https://www.sqfi.com",
          },
          {
            title: "Sanitary Design Principles for Food Equipment",
            publisher: "European Hygienic Engineering & Design Group (EHEDG)",
            url: "https://www.ehedg.org",
            note: "Equivalent international standards body; useful cross-reference.",
          },
        ]}
      />
    </>
  );
}
