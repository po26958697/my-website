import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Monitor, FileText, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "啟動策略重構｜市場軍師 Remi",
  description:
    "預約市場軍師 Remi 一對一交易策略諮詢。從風險框架到執行紀律，幫你建立可重複獲利的交易系統。",
};

const specs = [
  { icon: Clock, label: "諮詢時長", value: "60 分鐘" },
  { icon: Monitor, label: "形式", value: "視訊 1 對 1" },
  { icon: FileText, label: "交付物", value: "策略行動清單" },
];

const painPoints = [
  "設了停損，但到了那個價位就是按不下去",
  "交易系統不穩定，靠感覺進出場，盈虧難以預測",
  "知道要控管風險，但不知道怎麼量化成具體規則",
  "看對了方向，卻因為倉位太重或太輕，最終沒有賺到應有的報酬",
];

export default function Contact() {
  return (
    <main className="min-h-screen" style={{ color: "#1B2D5A" }}>

      {/* ── Section 1：Hero（深靛藍底） */}
      <section style={{ backgroundColor: "#1B2D5A" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-24 flex flex-col gap-6">
          <Badge
            className="w-fit text-xs tracking-widest uppercase rounded-sm"
            style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
          >
            Contact
          </Badge>
          <h1
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
            style={{ color: "#F5F4F0" }}
          >
            啟動策略重構
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#F5F4F0", opacity: 0.72 }}>
            如果你不確定自己的問題在哪，那正是我們該聊聊的原因。
          </p>
        </div>
      </section>

      {/* ── Section 2：諮詢主卡（純白底） */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-20 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#D4A843" }}>
              目前開放
            </p>
            <h2 className="text-3xl font-bold tracking-tight">一對一策略諮詢</h2>
            <p className="text-base leading-relaxed" style={{ opacity: 0.65 }}>
              你只需要大概說得出卡在哪裡——停損執行不了、倉位管理混亂，還是系統還沒建立完整——
              其他的，諮詢的時候一起釐清。
            </p>
          </div>

          {/* 規格三欄 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {specs.map(({ icon: Icon, label, value }) => (
              <Card
                key={label}
                className="border-0 shadow-sm w-full"
                style={{ backgroundColor: "#F5F4F0" }}
              >
                <CardContent className="flex flex-col gap-3 pt-5 pb-5">
                  <Icon size={18} style={{ color: "#D4A843" }} strokeWidth={1.5} />
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs" style={{ opacity: 0.5 }}>{label}</p>
                    <p className="text-sm font-semibold">{value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA 按鈕 */}
          <div>
            {/* TODO: 將 href 換成你的 Calendly 或預約工具連結 */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 text-base font-semibold rounded-sm transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-px"
              style={{
                backgroundColor: "#D4A843",
                color: "#1B2D5A",
                boxShadow: "0 2px 8px rgba(212,168,67,0.35)",
              }}
            >
              立即預約諮詢時段
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 3：適合對象（暖灰底） */}
      <section style={{ backgroundColor: "#F5F4F0" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-20 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#D4A843" }}>
              適合你嗎
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              這個諮詢適合你，如果你有以下困境
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {painPoints.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-sm"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <CheckCircle
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: "#D4A843" }}
                  strokeWidth={1.5}
                />
                <p className="text-sm leading-relaxed" style={{ opacity: 0.72 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4：表單（純白底） */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-20 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#D4A843" }}>
              還沒準備好直接預約？
            </p>
            <h2 className="text-3xl font-bold tracking-tight">留下聯絡資訊</h2>
            <p className="text-base leading-relaxed" style={{ opacity: 0.62 }}>
              留下你的 Email，我會在開放新諮詢時段時主動通知你。
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">你的稱呼</label>
              <input
                id="name"
                type="text"
                placeholder="例：小明、Ming"
                className="w-full rounded-sm border px-4 py-3 text-sm outline-none transition-colors focus:border-current"
                style={{ borderColor: "#1B2D5A22", backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-sm border px-4 py-3 text-sm outline-none transition-colors focus:border-current"
                style={{ borderColor: "#1B2D5A22", backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="situation" className="text-sm font-medium">
                你目前的交易困境
                <span className="ml-1 text-xs font-normal" style={{ opacity: 0.45 }}>（選填）</span>
              </label>
              <textarea
                id="situation"
                rows={3}
                placeholder="例：停損總是執行不了，帳戶一直在小虧狀態……"
                className="w-full rounded-sm border px-4 py-3 text-sm outline-none resize-none transition-colors focus:border-current"
                style={{ borderColor: "#1B2D5A22", backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
              />
            </div>
            {/* TODO: 串接表單後端（Formspree / Resend）或替換為 Google 表單 */}
            <Button
              className="w-full py-5 text-sm font-semibold rounded-sm transition-all hover:opacity-90 hover:shadow-md"
              style={{
                backgroundColor: "#1B2D5A",
                color: "#F5F4F0",
                boxShadow: "0 1px 4px rgba(27,45,90,0.2)",
              }}
            >
              送出
            </Button>
          </div>
        </div>
      </section>

      {/* ── Section 5：結語（深靛藍底） */}
      <section style={{ backgroundColor: "#1B2D5A" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-20">
          <p className="text-xl sm:text-2xl font-bold leading-relaxed" style={{ color: "#F5F4F0" }}>
            如果你不確定自己的問題在哪，<br />
            那正是我們該聊聊的原因。
          </p>
        </div>
      </section>

    </main>
  );
}
