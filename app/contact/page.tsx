import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "啟動策略重構｜市場軍師 Remi",
  description:
    "預約市場軍師 Remi 一對一交易策略諮詢。從風險框架到執行紀律，幫你建立可重複獲利的交易系統。",
};

export default function Contact() {
  return (
    <main
      className="min-h-screen px-6 py-24 sm:px-16"
      style={{ backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
    >
      <div className="max-w-2xl mx-auto w-full flex flex-col gap-20">

        {/* Header */}
        <section className="flex flex-col gap-5">
          <Badge
            variant="outline"
            className="w-fit text-xs tracking-widest uppercase border-none px-0"
            style={{ color: "#D4A843", background: "transparent" }}
          >
            Contact
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            啟動策略重構
          </h1>
          <p className="text-lg leading-relaxed" style={{ opacity: 0.68 }}>
            如果你不確定自己的問題在哪，那正是我們該聊聊的原因。
          </p>
        </section>

        {/* 諮詢主卡 */}
        <section className="flex flex-col gap-6 border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          <Card className="border-0 shadow-none" style={{ backgroundColor: "#1B2D5A" }}>
            <CardContent className="flex flex-col items-center gap-6 py-12 px-8 text-center">
              <p className="text-xs tracking-widest uppercase" style={{ color: "#D4A843" }}>
                目前開放
              </p>
              <h2 className="text-2xl font-bold leading-snug" style={{ color: "#F5F4F0" }}>
                一對一策略諮詢
              </h2>
              <p className="text-base leading-relaxed max-w-sm" style={{ color: "#F5F4F0", opacity: 0.72 }}>
                目前僅開放一對一策略諮詢。你只需要大概說得出卡在哪裡——
                是停損執行不了、倉位管理混亂，還是交易系統還沒建立完整——
                其他的，諮詢的時候一起釐清。
              </p>
              <div className="w-full border-t pt-6" style={{ borderColor: "#FFFFFF18" }}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-6">
                  {[
                    { label: "諮詢時長", value: "60 分鐘" },
                    { label: "形式", value: "視訊 1 對 1" },
                    { label: "交付", value: "策略行動清單" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col gap-1">
                      <span className="text-xs" style={{ color: "#F5F4F0", opacity: 0.5 }}>
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold" style={{ color: "#F5F4F0" }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
                {/* TODO: 將 href 換成你的 Calendly 或預約工具連結 */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 text-base font-semibold rounded-sm transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
                >
                  立即預約諮詢時段
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 適合對象 */}
        <section className="flex flex-col gap-6 border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          <p className="text-xs tracking-widest uppercase" style={{ color: "#D4A843" }}>
            適合你嗎
          </p>
          <h2 className="text-xl font-bold">這個諮詢適合你，如果你有以下困境</h2>
          <div className="flex flex-col gap-3">
            {[
              "設了停損，但到了那個價位就是按不下去",
              "交易系統不穩定，靠感覺進出場，盈虧難以預測",
              "知道要控管風險，但不知道怎麼量化成具體規則",
              "看對了方向，卻因為倉位太重或太輕，最終沒有賺到應有的報酬",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-sm mt-0.5 shrink-0" style={{ color: "#D4A843" }}>—</span>
                <p className="text-sm leading-relaxed" style={{ opacity: 0.72 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 留下聯絡資訊 */}
        <section className="flex flex-col gap-6 border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase" style={{ color: "#D4A843" }}>
              還沒準備好直接預約？
            </p>
            <h2 className="text-xl font-bold">留下聯絡資訊</h2>
            <p className="text-sm leading-relaxed" style={{ opacity: 0.62 }}>
              留下你的 Email，我會在開放新諮詢時段時主動通知你。
            </p>
          </div>

          <Card className="border-0 shadow-none" style={{ backgroundColor: "#FFFFFF" }}>
            <CardContent className="flex flex-col gap-5 pt-6 pb-6">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium" style={{ color: "#1B2D5A" }}>
                  你的稱呼
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="例：小明、Ming"
                  className="w-full rounded-sm border px-4 py-3 text-sm outline-none"
                  style={{ borderColor: "#1B2D5A22", backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium" style={{ color: "#1B2D5A" }}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-sm border px-4 py-3 text-sm outline-none"
                  style={{ borderColor: "#1B2D5A22", backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="situation" className="text-sm font-medium" style={{ color: "#1B2D5A" }}>
                  你目前的交易困境（選填）
                </label>
                <textarea
                  id="situation"
                  rows={3}
                  placeholder="例：停損總是執行不了，帳戶一直在小虧狀態……"
                  className="w-full rounded-sm border px-4 py-3 text-sm outline-none resize-none"
                  style={{ borderColor: "#1B2D5A22", backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
                />
              </div>
              {/* TODO: 串接表單後端（Formspree / Resend）或替換為 Google 表單 */}
              <Button
                className="w-full py-5 text-sm font-semibold rounded-sm transition-opacity hover:opacity-85"
                style={{ backgroundColor: "#1B2D5A", color: "#F5F4F0" }}
              >
                送出
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* 結語 */}
        <section className="border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          <p className="text-lg font-medium leading-relaxed">
            如果你不確定自己的問題在哪，那正是我們該聊聊的原因。
          </p>
        </section>

      </div>
    </main>
  );
}
