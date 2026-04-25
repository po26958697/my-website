import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "合作案例｜市場軍師",
  description:
    "設計師定位重建、Podcast 商業化——看看混亂是怎麼被理清的。台灣個人品牌行銷策略諮詢真實案例（匿名處理）。",
};

const cases = [
  {
    id: "A",
    industry: "設計 / 個人品牌",
    title: "從接案轉品牌的設計師",
    summary: "接不完的案子、報不出去的價格、說不清楚自己在做什麼——問題不在作品集，在定位。",
    problem: {
      label: "Problem",
      question: "接案接到沒有邊界，為什麼客戶還是覺得你貴？",
      body: "這位設計師做了五年，作品不差，客戶也算穩定。但每次談費用都很痛苦——對方覺得貴，她自己也說不清楚為什麼值這個價。同時，她接什麼都接：品牌識別、社群素材、名片、包裝——接到累，卻沒有一個清楚的「我是做什麼的」。",
    },
    process: {
      label: "Process",
      body: "我們花了兩次對話做了一件事：把她過去五年的客戶全部攤開來看。哪些案子她做得最順？哪些案子事後最有成就感？哪些客戶最後變成長期合作？答案其實一直在那裡——她最擅長的是幫品牌「從零建立視覺語言」，而不是接散單。問題是她從來沒有把這件事說清楚。",
    },
    result: {
      label: "Result",
      body: "重新定位後，她把服務收攏成兩個方案，拿掉所有散件報價。官網改寫、介紹信改寫，第一個月詢問的客戶品質就明顯不同——不再有人問「可以算便宜一點嗎」，開始有人問「這個方案包含什麼」。",
    },
  },
  {
    id: "B",
    industry: "自媒體 / Podcast",
    title: "想規模化的 Podcaster",
    summary: "聽眾數字在長，但每個月收入是零。不是內容不好，是從來沒想過怎麼把流量變成生意。",
    problem: {
      label: "Problem",
      question: "節目做了兩年、聽眾破萬，然後呢？",
      body: "這位 Podcaster 節目做得認真，每週一集，話題有深度，聽眾黏著度也高。但他的困境很典型：他不知道接下來要往哪裡走。業配合作偶爾有，但不穩定；想做課程，但不知道教什麼；想找人贊助，但不知道怎麼談。每件事都像個選項，但選哪個都沒把握。",
    },
    process: {
      label: "Process",
      body: "我們先做的事不是「想要賣什麼」，而是「你的聽眾是誰」。他以為聽眾很雜，但把節目數據仔細拆開看，有一群人佔了超過六成的互動——都是三十歲左右、在職場轉換期的上班族。這群人聽他的節目是因為他幫他們整理了很多關於「職涯選擇」的框架。那個框架，才是他真正在賣的東西。",
    },
    result: {
      label: "Result",
      body: "我們把這個框架包成一個三小時的工作坊，先在小範圍測試。報名十二人，轉換率超過他的預期。他沒有減少節目更新，但開始把每集當成工作坊的前置內容在設計——流量和產品之間有了連結，而不是兩件各自漂浮的事。",
    },
  },
];

function NarrativeBlock({
  label,
  question,
  body,
}: {
  label: string;
  question?: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span
        className="text-xs tracking-widest uppercase font-medium"
        style={{ color: "#D4A843" }}
      >
        {label}
      </span>
      {question && (
        <p className="text-base font-semibold leading-snug" style={{ color: "#1B2D5A" }}>
          {question}
        </p>
      )}
      <p className="text-sm leading-relaxed" style={{ color: "#1B2D5A", opacity: 0.68 }}>
        {body}
      </p>
    </div>
  );
}

export default function Cases() {
  return (
    <main
      className="min-h-screen px-6 py-24 sm:px-16"
      style={{ backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
    >
      <div className="max-w-2xl mx-auto w-full flex flex-col gap-20">

        {/* Header */}
        <section className="flex flex-col gap-6">
          <Badge
            variant="outline"
            className="w-fit text-xs tracking-widest uppercase border-none px-0"
            style={{ color: "#D4A843", background: "transparent" }}
          >
            Cases
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            合作案例
          </h1>
          <p className="text-lg leading-relaxed" style={{ opacity: 0.7 }}>
            以下案例均已匿名處理。你不需要跟他們狀況一模一樣——只要能找到一個你自己也問過的問題，就夠了。
          </p>
        </section>

        {/* 案例列表 */}
        {cases.map((c) => (
          <section
            key={c.id}
            className="flex flex-col gap-6 border-t pt-12"
            style={{ borderColor: "#1B2D5A1A" }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Badge
                  className="text-xs font-medium rounded-sm"
                  style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
                >
                  {c.industry}
                </Badge>
              </div>
              <h2 className="text-2xl font-bold leading-snug">
                案例 {c.id}：{c.title}
              </h2>
              <p className="text-base leading-relaxed" style={{ opacity: 0.65 }}>
                {c.summary}
              </p>
            </div>

            <Card className="border-0 shadow-none" style={{ backgroundColor: "#FFFFFF" }}>
              <CardContent className="flex flex-col gap-8 pt-6 pb-6">
                <NarrativeBlock
                  label={c.problem.label}
                  question={c.problem.question}
                  body={c.problem.body}
                />
                <div className="border-t" style={{ borderColor: "#1B2D5A0F" }} />
                <NarrativeBlock
                  label={c.process.label}
                  body={c.process.body}
                />
                <div className="border-t" style={{ borderColor: "#1B2D5A0F" }} />
                <NarrativeBlock
                  label={c.result.label}
                  body={c.result.body}
                />
              </CardContent>
            </Card>
          </section>
        ))}

        {/* CTA */}
        <section
          className="flex flex-col gap-4 border-t pt-12"
          style={{ borderColor: "#1B2D5A1A" }}
        >
          <p className="text-base font-medium">你的情況和這些案例有點像？</p>
          <p className="text-sm leading-relaxed" style={{ opacity: 0.65 }}>
            不用完全一樣。只要你覺得「方向不清楚、不知道從哪開始」，都可以來聊聊。
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-5 text-sm font-semibold rounded-sm transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
            >
              預約初次諮詢
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
