"use client";

import { BlogTopic, BlogRole, blogTopics, blogRoles } from "@/data/blog-posts";

export type BlogStatusFilter = "all" | "published";
export type BlogDepthFilter = "all" | "quick" | "deep";

interface BlogFiltersProps {
  topic: BlogTopic | "all";
  role: BlogRole | "all";
  depth: BlogDepthFilter;
  statusFilter: BlogStatusFilter;
  search: string;
  onTopicChange: (t: BlogTopic | "all") => void;
  onRoleChange: (r: BlogRole | "all") => void;
  onDepthChange: (d: BlogDepthFilter) => void;
  onStatusChange: (s: BlogStatusFilter) => void;
  onSearchChange: (s: string) => void;
  totalCount: number;
}

const chipStyle = (active: boolean): React.CSSProperties => ({
  padding: "8px 16px",
  borderRadius: "999px",
  border: active ? "1px solid #C05621" : "1px solid rgba(28, 43, 54, 0.15)",
  background: active ? "#C05621" : "#ffffff",
  color: active ? "#ffffff" : "#1C2B36",
  fontSize: "13px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s ease",
  whiteSpace: "nowrap",
});

export default function BlogFilters({
  topic,
  role,
  depth,
  statusFilter,
  search,
  onTopicChange,
  onRoleChange,
  onDepthChange,
  onStatusChange,
  onSearchChange,
  totalCount,
}: BlogFiltersProps) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid rgba(28, 43, 54, 0.08)",
        borderRadius: "6px",
        padding: "24px",
        marginBottom: "32px",
      }}
    >
      {/* Search */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="search"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
            border: "1px solid rgba(28, 43, 54, 0.15)",
            borderRadius: "6px",
            fontSize: "15px",
            color: "#1C2B36",
            background: "#F2F5F7",
            fontFamily: "inherit",
            outline: "none",
            transition: "border-color 0.2s ease",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#5F8A9E")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(28, 43, 54, 0.15)")}
        />
      </div>

      {/* Topic */}
      <FilterRow label="Topic">
        <button
          type="button"
          onClick={() => onTopicChange("all")}
          style={chipStyle(topic === "all")}
        >
          All
        </button>
        {blogTopics.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => onTopicChange(t)}
            style={chipStyle(topic === t)}
          >
            {t}
          </button>
        ))}
      </FilterRow>

      {/* Role */}
      <FilterRow label="For Your Role">
        <button
          type="button"
          onClick={() => onRoleChange("all")}
          style={chipStyle(role === "all")}
        >
          Any
        </button>
        {blogRoles.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => onRoleChange(r)}
            style={chipStyle(role === r)}
          >
            {r}
          </button>
        ))}
      </FilterRow>

      {/* Depth */}
      <FilterRow label="Depth">
        <button type="button" onClick={() => onDepthChange("all")} style={chipStyle(depth === "all")}>
          Any length
        </button>
        <button type="button" onClick={() => onDepthChange("quick")} style={chipStyle(depth === "quick")}>
          Quick read (≤7 min)
        </button>
        <button type="button" onClick={() => onDepthChange("deep")} style={chipStyle(depth === "deep")}>
          Deep dive (8+ min)
        </button>
      </FilterRow>

      {/* Status & count */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          paddingTop: "16px",
          borderTop: "1px solid rgba(28, 43, 54, 0.06)",
        }}
      >
        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => onStatusChange("published")}
            style={chipStyle(statusFilter === "published")}
          >
            Published only
          </button>
          <button
            type="button"
            onClick={() => onStatusChange("all")}
            style={chipStyle(statusFilter === "all")}
          >
            Show roadmap
          </button>
        </div>
        <span style={{ fontSize: "14px", color: "#5A6E78", fontWeight: 500 }}>
          {totalCount} {totalCount === 1 ? "article" : "articles"}
        </span>
      </div>
    </div>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div
        style={{
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          color: "#5A6E78",
          marginBottom: "10px",
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>{children}</div>
    </div>
  );
}
