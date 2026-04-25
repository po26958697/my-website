import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Compass, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "關於軍師｜市場軍師 Remi",
  description:
    "長線價值投資者出身的策略顧問。幫助投資者建立可執行的交易系統，幫助台灣個人創業者找到正確的市場方向。",
};

const whyMe = [
  {
    title: "投資者的執著",
    body: "做過夠多交易，我知道邊界條件有多重要。你沒有定義清楚的每一個情況，市場都會替你定義——而且通常是最殘酷的那個版本。你對停損的定義模糊，它就替你定義；你對加碼的條件不清楚，情緒就替你決定。",
  },
  {
    title: "概率框架，不是預測框架",
    body: "我不相信有人能預測市場。我相信的是：在正期望值的條件下持續執行，樣本夠大，結果自然會站在你這邊。這是統計學，不是玄學。",
  },
  {
    title: "虧損過，所以知道問題在哪",
    body: "我不是從教科書學投資的。是從帳戶裡少掉的數字學的。那些虧損讓我知道：問題不在市場，在系統。更準確地說，在沒有系統。",
  },
];

export default function About() {
  return (
    <main className="min-h-screen" style={{ color: "#1B2D5A" }}>

      {/* ── Section 1：Hero（深靛藍底） */}
      <section style={{ backgroundColor: "#1B2D5A" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-24 flex flex-col gap-7">
          <Badge
            className="w-fit text-xs tracking-widest uppercase rounded-sm"
            style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
          >
            關於軍師
          </Badge>
          <h1
            className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
            style={{ color: "#F5F4F0" }}
          >
            市場不給情緒發獎金，<br />只給紀律發報酬。
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#F5F4F0", opacity: 0.75 }}>
            我是 Remi。結合長線價值投資思維與系統化策略，
            幫助投資者跨越階層、幫助創業者找到正確的市場方向。
          </p>
        </div>
      </section>

      {/* ── Section 2：我的故事（純白底） */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-20 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#D4A843" }}>
              我的故事
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              從投資者到顧問：一段關於紀律的學習
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-base leading-[1.9]" style={{ opacity: 0.75 }}>
              我不是從教科書學投資的。我是從一次又一次的「感覺不錯應該能漲」開始的，
              然後慢慢學到一件事：感覺不值錢，系統才值錢。
            </p>
            <p className="text-base leading-[1.9]" style={{ opacity: 0.75 }}>
              過去五年，我的資產從 200 萬成長到 400 萬。這不是因為我找到了什麼神奇的選股公式，
              而是因為我花了很長的時間，把「我覺得這支不錯」，換成了一套有條件、有節點、
              可以重複執行的投資框架——在情緒最差的時候，還是能照著走。
            </p>
            <p className="text-base leading-[1.9]" style={{ opacity: 0.75 }}>
              我一直相信，投資是普通人少數能透過紀律改變階層的方式。不是靠運氣，不是靠內線，
              是靠一套比市場上大多數人多想一步的系統。這個信念讓我開始想：
              這套東西能不能幫到別人？
            </p>
            <p className="text-base leading-[1.9]" style={{ opacity: 0.75 }}>
              我接觸過很多投資者，問題幾乎都不是不努力——他們研究線圖、讀財報、跟著各種觀點操作，
              但就是賺不到穩定的報酬。少的不是資訊，是一套在市場最亂的時候仍能執行的框架。
              那個框架，就是我在幫他們建立的東西。
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3：我能幫誰（暖灰底，雙軌） */}
      <section style={{ backgroundColor: "#F5F4F0" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-20 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#D4A843" }}>
              我能幫誰
            </p>
            <h2 className="text-3xl font-bold tracking-tight">兩種困境，同一個解法核心</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* 軌道 A：投資者 */}
            <Card className="border-0 shadow-sm w-full" style={{ backgroundColor: "#FFFFFF" }}>
              <CardContent className="flex flex-col gap-5 pt-7 pb-7">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center"
                  style={{ backgroundColor: "#1B2D5A10" }}
                >
                  <TrendingUp size={20} style={{ color: "#D4A843" }} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#D4A843" }}>
                    投資者 / 存股者
                  </p>
                  <h3 className="text-xl font-bold" style={{ color: "#1B2D5A" }}>
                    你在市場裡卡住了
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ opacity: 0.68 }}>
                  你有在投資，但報酬不穩定、情緒影響決策、
                  不知道問題出在哪裡。感覺每次都差一點，但說不清楚差在哪。
                </p>
                <div className="flex flex-col gap-2 pt-1">
                  <p className="text-xs font-semibold tracking-wide" style={{ color: "#1B2D5A" }}>
                    我幫你做的事
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {[
                      "建立可執行的交易系統",
                      "釐清風險框架與倉位邏輯",
                      "把感覺換成有條件的規則",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ opacity: 0.68 }}>
                        <span style={{ color: "#D4A843", flexShrink: 0 }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 軌道 B：創業者 */}
            <Card className="border-0 shadow-sm w-full" style={{ backgroundColor: "#FFFFFF" }}>
              <CardContent className="flex flex-col gap-5 pt-7 pb-7">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center"
                  style={{ backgroundColor: "#1B2D5A10" }}
                >
                  <Compass size={20} style={{ color: "#D4A843" }} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#D4A843" }}>
                    個人創業者 / 自媒體
                  </p>
                  <h3 className="text-xl font-bold" style={{ color: "#1B2D5A" }}>
                    你不缺努力，缺方向
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ opacity: 0.68 }}>
                  你有在做行銷，但不知道自己的市場定位在哪、
                  為什麼受眾沒在增長。做了很多，但好像每件事都只做到一半。
                </p>
                <div className="flex flex-col gap-2 pt-1">
                  <p className="text-xs font-semibold tracking-wide" style={{ color: "#1B2D5A" }}>
                    我幫你做的事
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {[
                      "找到市場定位與差異化方向",
                      "設計可執行的行銷路徑",
                      "先想清楚，再開始動",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ opacity: 0.68 }}>
                        <span style={{ color: "#D4A843", flexShrink: 0 }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Section 4：為什麼是我（純白底） */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-20 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#D4A843" }}>
              為什麼是我
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              因為我走過你現在的位置。
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            {whyMe.map((item, i) => (
              <div key={item.title} className="flex gap-5">
                <span
                  className="text-3xl font-bold tabular-nums leading-none shrink-0 pt-1"
                  style={{ color: "#D4A843", opacity: 0.3 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="text-sm leading-[1.85]" style={{ opacity: 0.65 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5：CTA（深靛藍底） */}
      <section style={{ backgroundColor: "#1B2D5A" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-20 flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "#F5F4F0" }}>
            準備把困惑換成清晰了嗎？
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#F5F4F0", opacity: 0.65 }}>
            不需要想清楚所有問題再來。你只需要知道自己卡在哪裡，
            剩下的我們一起找出來。
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-sm transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-px"
              style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
            >
              預約一對一策略諮詢 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
