"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "./BlogCard";
import BlogFilters, { BlogStatusFilter, BlogDepthFilter } from "./BlogFilters";
import { BlogPostMeta, BlogTopic, BlogRole, isReleased } from "@/data/blog-posts";

interface BlogIndexProps {
  posts: BlogPostMeta[];
  classes: Record<number, { name: string; description: string }>;
}

export default function BlogIndex({ posts, classes }: BlogIndexProps) {
  const [topic, setTopic] = useState<BlogTopic | "all">("all");
  const [role, setRole] = useState<BlogRole | "all">("all");
  const [depth, setDepth] = useState<BlogDepthFilter>("all");
  const [statusFilter, setStatusFilter] = useState<BlogStatusFilter>("published");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      // "Published only" = released (status published AND publish date has arrived)
      if (statusFilter === "published" && !isReleased(p)) return false;
      if (topic !== "all" && p.topic !== topic) return false;
      if (role !== "all" && !p.roles.includes(role)) return false;
      if (depth !== "all" && p.depth !== depth) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.unitTitle.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [posts, topic, role, depth, statusFilter, search]);

  const groupedByClass = useMemo(() => {
    const groups: Record<number, BlogPostMeta[]> = {};
    for (const p of filtered) {
      if (!groups[p.classNumber]) groups[p.classNumber] = [];
      groups[p.classNumber].push(p);
    }
    return groups;
  }, [filtered]);

  const showGrouped = statusFilter === "all" && topic === "all" && role === "all" && depth === "all" && !search.trim();

  return (
    <main style={{ minHeight: "100vh", background: "#F2F5F7" }}>
      <Navbar />

      {/* Hero */}
      <header
        style={{
          background: "linear-gradient(135deg, #1C2B36 0%, #2A3F4D 100%)",
          color: "#ffffff",
          padding: "140px 24px 80px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2.5px",
              color: "#C05621",
              marginBottom: "16px",
            }}
          >
            IBE Knowledge Center
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "24px",
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            Practical guides for bakery owners and GMs.
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
              maxWidth: "720px",
            }}
          >
            A weekly column on the equipment, materials, and operating decisions that quietly govern your P&amp;L. Written by the team that&apos;s been building the racks since 2008.
          </p>
        </div>
      </header>

      {/* Body */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 24px 100px",
        }}
      >
        <BlogFilters
          topic={topic}
          role={role}
          depth={depth}
          statusFilter={statusFilter}
          search={search}
          onTopicChange={setTopic}
          onRoleChange={setRole}
          onDepthChange={setDepth}
          onStatusChange={setStatusFilter}
          onSearchChange={setSearch}
          totalCount={filtered.length}
        />

        {filtered.length === 0 ? (
          <div
            style={{
              padding: "60px 24px",
              textAlign: "center",
              background: "#ffffff",
              border: "1px solid rgba(28, 43, 54, 0.08)",
              borderRadius: "6px",
              color: "#5A6E78",
            }}
          >
            <p style={{ fontSize: "16px" }}>No articles match your filters yet.</p>
          </div>
        ) : showGrouped ? (
          // Grouped by class when no filters active
          Object.keys(groupedByClass)
            .map(Number)
            .sort((a, b) => a - b)
            .map((classNum) => (
              <section key={classNum} style={{ marginBottom: "64px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "16px",
                    marginBottom: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      color: "#C05621",
                    }}
                  >
                    Class {classNum}
                  </span>
                  <h2
                    style={{
                      fontSize: "clamp(22px, 3vw, 28px)",
                      fontWeight: 700,
                      color: "#1C2B36",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {classes[classNum].name}
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#5A6E78",
                    marginBottom: "24px",
                    maxWidth: "720px",
                  }}
                >
                  {classes[classNum].description}
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "20px",
                  }}
                >
                  {groupedByClass[classNum].map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            ))
        ) : (
          // Flat grid when filters are active
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
