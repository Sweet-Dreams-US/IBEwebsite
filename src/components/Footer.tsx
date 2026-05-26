"use client";

import EmailLink from "@/components/EmailLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "linear-gradient(180deg, #1C2B36, #162129)", borderTop: "3px solid #C05621" }}>
      {/* Blog promo strip */}
      <div
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          background: "rgba(192, 86, 33, 0.04)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "32px 24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div style={{ flex: "1 1 360px" }}>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                color: "#C05621",
                marginBottom: "8px",
              }}
            >
              IBE Blog
            </div>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.85)",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Practical guides for bakery owners and GMs. New article every week.
            </p>
          </div>
          <a
            href="/blog"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "#C05621",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              borderRadius: "4px",
              transition: "background 0.2s ease, transform 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#9c4119";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#C05621";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Browse Articles →
          </a>
        </div>
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "80px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "60px", marginBottom: "60px" }}>
          {/* Logo & Description */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <span style={{ fontSize: "36px", fontWeight: 800, color: "#ffffff" }}>IBE</span>
            </div>
            <p style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.8, marginBottom: "24px" }}>
              Industrial Bakery Equipment - Specializing in food service equipment, wire carts, and sheet metal products since 2008.
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.5)", marginBottom: "8px" }}>Fort Wayne, IN</p>
            <a href="tel:260-710-0063" style={{ display: "block", fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", marginBottom: "6px" }}>260-710-0063</a>
            <EmailLink
              user="sales"
              domain="industrialbakeryequipment.com"
              style={{ display: "block", fontSize: "14px", color: "#5F8A9E", textDecoration: "none", marginBottom: "4px", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C05621")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5F8A9E")}
            />
            <EmailLink
              user="ibepurchasing"
              domain="yahoo.com"
              style={{ display: "block", fontSize: "14px", color: "#5F8A9E", textDecoration: "none", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C05621")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#5F8A9E")}
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#ffffff", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "1px" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { name: "Home", href: "/#home" },
                { name: "About", href: "/#about" },
                { name: "Products", href: "/#products" },
                { name: "Events", href: "/#events" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.name} style={{ marginBottom: "14px" }}>
                  <a
                    href={link.href}
                    style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", fontSize: "15px", transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c05621")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#ffffff", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "1px" }}>Products</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Bakery Products", "Bread Racks", "Blast Freeze Racks", "Wire Carts", "Custom Solutions"].map((item) => (
                <li key={item} style={{ marginBottom: "14px" }}>
                  <a
                    href="/#products"
                    style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", fontSize: "15px", transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c05621")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#ffffff", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "1px" }}>Industries</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Baking", "Food Processing", "Restaurant", "Retail Grocery", "Government/Military"].map((item) => (
                <li key={item} style={{ marginBottom: "14px", color: "rgba(255, 255, 255, 0.6)", fontSize: "15px" }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)", paddingTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
          <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.5)" }}>
            &copy; {currentYear} IBE - Industrial Bakery Equipment. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.5)" }}>Quality equipment since</span>
            <span style={{ fontSize: "14px", color: "#c05621", fontWeight: 600 }}>2008</span>
          </div>
        </div>
        <div style={{ textAlign: "center", paddingTop: "16px" }}>
          <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.3)" }}>
            Website developed by{" "}
            <a
              href="https://sweetdreams.us"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255, 255, 255, 0.4)", textDecoration: "none", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C05621")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.4)")}
            >
              Sweet Dreams
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
