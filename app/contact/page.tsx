import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "預約諮詢｜市場軍師",
  description:
    "預約市場軍師一對一行銷策略諮詢。如果你不確定自己的問題在哪，那正是我們該聊聊的原因。",
};

export default function Contact() {
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
            Contact
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            預約諮詢
          </h1>
        </section>

        {/* 預約區塊 */}
        <section className="flex flex-col gap-6 border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          <Card className="border-0 shadow-none" style={{ backgroundColor: "#1B2D5A" }}>
            <CardContent className="flex flex-col items-center gap-6 py-12 px-8 text-center">
              <p className="text-xs tracking-widest uppercase" style={{ color: "#D4A843" }}>
                目前開放中
              </p>
              <CardTitle className="text-2xl font-bold leading-snug" style={{ color: "#F5F4F0" }}>
                一對一策略諮詢
              </CardTitle>
              <CardDescription
                className="text-base leading-relaxed max-w-sm"
                style={{ color: "#F5F4F0", opacity: 0.75 }}
              >
                目前僅開放一對一策略諮詢，請點擊下方按鈕預約時間。
                你只需要大概知道自己卡在哪裡——其他的，諮詢的時候一起想。
              </CardDescription>
              <Button
                className="mt-2 px-10 py-6 text-base font-semibold rounded-sm w-full sm:w-auto transition-opacity hover:opacity-85"
                style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
                asChild
              >
                {/* TODO: 將 href 換成你的 Calendly 或預約工具連結 */}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  立即預約諮詢時段
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* 替代方案：留下聯絡資訊 */}
        <section className="flex flex-col gap-8 border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase" style={{ color: "#D4A843" }}>
              還沒準備好直接預約？
            </p>
            <h2 className="text-2xl font-bold">留下聯絡資訊</h2>
            <p className="text-base leading-relaxed" style={{ opacity: 0.65 }}>
              留下你的 Email，我會在開放新諮詢時段時主動通知你。
            </p>
          </div>

          <Card className="border-0 shadow-none" style={{ backgroundColor: "#FFFFFF" }}>
            <CardContent className="flex flex-col gap-5 pt-6 pb-6">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium"
                  style={{ color: "#1B2D5A" }}
                >
                  你的稱呼
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="例：小明、Ming"
                  className="w-full rounded-sm border px-4 py-3 text-sm outline-none transition-colors"
                  style={{
                    borderColor: "#1B2D5A22",
                    backgroundColor: "#F5F4F0",
                    color: "#1B2D5A",
                  }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium"
                  style={{ color: "#1B2D5A" }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-sm border px-4 py-3 text-sm outline-none transition-colors"
                  style={{
                    borderColor: "#1B2D5A22",
                    backgroundColor: "#F5F4F0",
                    color: "#1B2D5A",
                  }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="situation"
                  className="text-sm font-medium"
                  style={{ color: "#1B2D5A" }}
                >
                  你目前的狀況（選填）
                </label>
                <textarea
                  id="situation"
                  rows={3}
                  placeholder="例：我在做 Podcast，有點迷失方向，不確定接下來要往哪走"
                  className="w-full rounded-sm border px-4 py-3 text-sm outline-none transition-colors resize-none"
                  style={{
                    borderColor: "#1B2D5A22",
                    backgroundColor: "#F5F4F0",
                    color: "#1B2D5A",
                  }}
                />
              </div>

              {/* TODO: 串接表單後端（Formspree / Resend / Notion API）或直接用 Google 表單替換此區塊 */}
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
          <p className="text-lg font-medium leading-relaxed" style={{ color: "#1B2D5A" }}>
            如果你不確定自己的問題在哪，那正是我們該聊聊的原因。
          </p>
        </section>

      </div>
    </main>
  );
}
