import { ReactNode } from "react";

interface BlogSectionProps {
  id: string;
  title: string;
  level?: 2 | 3;
  children: ReactNode;
}

export default function BlogSection({
  id,
  title,
  level = 2,
  children,
}: BlogSectionProps) {
  const styles =
    level === 2
      ? {
          fontSize: "clamp(22px, 3vw, 30px)",
          fontWeight: 700,
          color: "#1C2B36",
          marginTop: "56px",
          marginBottom: "20px",
          letterSpacing: "-0.01em",
          scrollMarginTop: "100px",
        }
      : {
          fontSize: "clamp(18px, 2.4vw, 22px)",
          fontWeight: 600,
          color: "#1C2B36",
          marginTop: "36px",
          marginBottom: "14px",
          scrollMarginTop: "100px",
        };

  if (level === 3) {
    return (
      <section>
        <h3 id={id} style={styles}>
          {title}
        </h3>
        <div className="blog-prose">{children}</div>
      </section>
    );
  }

  return (
    <section>
      <h2 id={id} style={styles}>
        {title}
      </h2>
      <div className="blog-prose">{children}</div>
    </section>
  );
}
