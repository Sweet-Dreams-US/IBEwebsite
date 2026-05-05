export interface BlogSource {
  title: string;
  publisher?: string;
  url?: string;
  note?: string;
}

interface BlogSourcesProps {
  items: BlogSource[];
}

export default function BlogSources({ items }: BlogSourcesProps) {
  if (items.length === 0) return null;

  return (
    <section
      id="sources"
      style={{
        marginTop: "72px",
        paddingTop: "32px",
        borderTop: "2px solid rgba(28, 43, 54, 0.1)",
        scrollMarginTop: "100px",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#1C2B36",
          marginBottom: "20px",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
        }}
      >
        Sources & Further Reading
      </h2>
      <ol
        style={{
          listStylePosition: "outside",
          paddingLeft: "24px",
          margin: 0,
        }}
      >
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              marginBottom: "14px",
              fontSize: "15px",
              lineHeight: 1.6,
              color: "#4A5E68",
            }}
          >
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#3D6478",
                  textDecoration: "none",
                  fontWeight: 600,
                  borderBottom: "1px dotted #3D6478",
                }}
              >
                {item.title}
              </a>
            ) : (
              <span style={{ fontWeight: 600, color: "#1C2B36" }}>{item.title}</span>
            )}
            {item.publisher && (
              <span style={{ color: "#5A6E78" }}> — {item.publisher}</span>
            )}
            {item.note && (
              <span style={{ display: "block", fontSize: "14px", color: "#5A6E78", marginTop: "4px" }}>
                {item.note}
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
