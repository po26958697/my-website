import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服務內容｜市場軍師",
  description:
    "一對一行銷策略諮詢，專為台灣個人創業者、自媒體經營者、想從接案轉品牌的自由工作者設計。三步驟釐清市場定位，拿回清醒的行動方向。",
};

const steps = [
  {
    number: "01",
    title: "初步診斷",
    description:
      "用一份結構化的問卷，讓我在正式諮詢前先掌握你的業務現況、目標受眾、以及你覺得卡住的地方。",
  },
  {
    number: "02",
    title: "策略定位",
    description:
      "一對一深度對話，一起釐清你的市場位置：你在對誰說話、你的差異化在哪裡、現在最值得集中火力的方向是什麼。",
  },
  {
    number: "03",
    title: "行動路徑",
    description:
      "你不會只帶走一份說不清楚的建議——而是一份看得懂、做得到、有優先順序的行動清單。",
  },
];

export default function Services() {
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
            Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            服務內容
          </h1>
          <p className="text-lg leading-relaxed" style={{ opacity: 0.7 }}>
            我只做一件事：幫你在動手之前，先把方向想清楚。
          </p>
        </section>

        {/* 主力服務 */}
        <section className="flex flex-col gap-8 border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          <p className="text-xs tracking-widest uppercase" style={{ color: "#D4A843" }}>
            主力服務
          </p>

          <Card className="border-0 shadow-none" style={{ backgroundColor: "#FFFFFF" }}>
            <CardHeader className="gap-3">
              <Badge
                className="w-fit text-xs font-medium rounded-sm"
                style={{ backgroundColor: "#1B2D5A", color: "#F5F4F0" }}
              >
                一對一策略諮詢
              </Badge>
              <CardTitle className="text-2xl font-bold leading-snug" style={{ color: "#1B2D5A" }}>
                試了很多方法，但客戶就是不增加？
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <CardDescription className="text-base leading-relaxed" style={{ color: "#1B2D5A", opacity: 0.7 }}>
                問題通常不是你不努力——是你還沒搞清楚，自己的市場在哪裡、受眾是誰、
                為什麼他們應該選你而不是其他人。
              </CardDescription>
              <CardDescription className="text-base leading-relaxed" style={{ color: "#1B2D5A", opacity: 0.7 }}>
                一對一諮詢不是叫你「多發文」或「試試廣告」。
                我們會一起從根源找到卡點——讓你之後每一步的執行都走在對的方向上。
              </CardDescription>

              {/* 適合對象 */}
              <div className="flex flex-col gap-3 pt-2">
                <p className="text-sm font-semibold" style={{ color: "#1B2D5A" }}>適合你，如果你是：</p>
                <ul className="flex flex-col gap-2">
                  {[
                    "台灣個人創業者、一人公司主理人",
                    "自媒體經營者（Podcast、Newsletter、YouTube、IG）",
                    "想從「接案」轉型「品牌」的自由工作者",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed"
                      style={{ color: "#1B2D5A", opacity: 0.75 }}
                    >
                      <span style={{ color: "#D4A843", flexShrink: 0 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-5 text-sm font-semibold rounded-sm transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
                >
                  預約諮詢
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 諮詢流程 */}
        <section className="flex flex-col gap-8 border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          <p className="text-xs tracking-widest uppercase" style={{ color: "#D4A843" }}>
            諮詢流程
          </p>
          <h2 className="text-2xl font-bold">你不用猜接下來會發生什麼</h2>
          <div className="flex flex-col gap-4">
            {steps.map((step) => (
              <Card
                key={step.number}
                className="border-0 shadow-none flex-row items-start"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <CardHeader className="pr-0 pt-5">
                  <span
                    className="text-2xl font-bold tabular-nums leading-none"
                    style={{ color: "#D4A843" }}
                  >
                    {step.number}
                  </span>
                </CardHeader>
                <CardContent className="pt-5 pb-5">
                  <p className="text-base font-semibold mb-1" style={{ color: "#1B2D5A" }}>
                    {step.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#1B2D5A", opacity: 0.65 }}>
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 預告區塊：企業內訓 */}
        <section className="flex flex-col gap-6 border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          <p className="text-xs tracking-widest uppercase" style={{ color: "#D4A843" }}>
            即將推出
          </p>
          <Card
            className="border border-dashed shadow-none"
            style={{ backgroundColor: "transparent", borderColor: "#1B2D5A33" }}
          >
            <CardHeader>
              <Badge
                variant="outline"
                className="w-fit text-xs rounded-sm"
                style={{ borderColor: "#1B2D5A33", color: "#1B2D5A", opacity: 0.6 }}
              >
                Coming Soon
              </Badge>
              <CardTitle className="text-xl font-bold" style={{ color: "#1B2D5A", opacity: 0.6 }}>
                企業內部行銷訓練
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed" style={{ color: "#1B2D5A", opacity: 0.55 }}>
                針對有內部行銷人員、卻缺乏策略思維框架的團隊設計。
                不是只教工具，而是幫你的團隊建立「先想清楚，再執行」的工作模式。
                有興趣提前了解？
              </CardDescription>
              <p className="mt-3 text-sm font-medium" style={{ color: "#D4A843", opacity: 0.8 }}>
                <Link href="/contact" className="underline underline-offset-4">
                  留下聯絡方式，優先通知你 →
                </Link>
              </p>
            </CardContent>
          </Card>
        </section>

      </div>
    </main>
  );
}
