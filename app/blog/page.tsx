import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "文章｜市場軍師 Remi",
  description: "交易紀律、法人視角、概率思維——市場軍師 Remi 的實戰觀察與策略筆記。",
};

const articles = [
  {
    slug: "innodisk-analysis",
    category: "個股拆解",
    date: "2026-04-25",
    title: "宜鼎（5289）實戰拆解",
    subtitle: "法人如何看工業儲存的護城河",
    summary:
      "從競爭壁壘、財務結構到風險控管，拆解宜鼎（Innodisk）的法人邏輯，建立有框架的進出場思維。",
  },
  {
    slug: "why-stop-loss-fails",
    category: "交易心理",
    date: "2026-04-25",
    title: "為什麼你的停損單總是執行不了？",
    subtitle: "操盤手從虧損恐懼到概率思維的心理重構",
    summary:
      "停損失敗不是意志力問題，是思維框架的問題。法人視角帶你看清楚這件事，並給出三條可立即執行的實戰規則。",
  },
];

export default function BlogIndex() {
  return (
    <main
      className="min-h-screen px-6 py-24 sm:px-16"
      style={{ backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
    >
      <div className="max-w-2xl mx-auto w-full flex flex-col gap-16">

        {/* Header */}
        <section className="flex flex-col gap-4">
          <Badge
            variant="outline"
            className="w-fit text-xs tracking-widest uppercase border-none px-0"
            style={{ color: "#D4A843", background: "transparent" }}
          >
            Blog
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">策略筆記</h1>
          <p className="text-base leading-relaxed" style={{ opacity: 0.65 }}>
            交易紀律、法人視角、概率思維。寫給認真想把這件事做對的人。
          </p>
        </section>

        {/* 文章列表 */}
        <section className="flex flex-col gap-6 border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group flex flex-col gap-3 pb-10 border-b last:border-0 last:pb-0 transition-opacity hover:opacity-75"
              style={{ borderColor: "#1B2D5A1A" }}
            >
              <div className="flex items-center gap-3">
                <Badge
                  className="text-xs rounded-sm"
                  style={{ backgroundColor: "#1B2D5A", color: "#F5F4F0" }}
                >
                  {article.category}
                </Badge>
                <span className="text-xs" style={{ opacity: 0.4 }}>
                  {article.date}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold leading-snug tracking-tight">
                  {article.title}
                </h2>
                <p className="text-sm font-medium" style={{ color: "#D4A843" }}>
                  {article.subtitle}
                </p>
              </div>
              <p className="text-sm leading-relaxed" style={{ opacity: 0.65 }}>
                {article.summary}
              </p>
              <span className="text-xs font-medium tracking-wide" style={{ color: "#D4A843" }}>
                閱讀全文 →
              </span>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
}
