import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "為什麼你的停損單總是執行不了？｜市場軍師 Remi",
  description:
    "操盤手從虧損恐懼到概率思維的心理重構。停損失敗不是意志力問題，是思維框架的問題。法人視角帶你看清楚這件事。",
  keywords: ["停損", "交易心理", "損失厭惡", "概率思維", "操盤紀律", "市場軍師"],
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#D4A843" }}>
      {children}
    </p>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-[1.85] tracking-wide" style={{ color: "#1B2D5A", opacity: 0.78 }}>
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold tracking-tight" style={{ color: "#1B2D5A" }}>
      {children}
    </h2>
  );
}

export default function WhyStopLossFails() {
  return (
    <main
      className="min-h-screen px-6 py-24 sm:px-16"
      style={{ backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
    >
      <div className="max-w-2xl mx-auto w-full flex flex-col gap-16">

        {/* 文章 Header */}
        <header className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Badge
              className="text-xs rounded-sm"
              style={{ backgroundColor: "#1B2D5A", color: "#F5F4F0" }}
            >
              交易心理
            </Badge>
            <span className="text-xs" style={{ color: "#1B2D5A", opacity: 0.45 }}>
              2026-04-25 · 市場軍師 Remi
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-snug tracking-tight">
            為什麼你的停損單總是執行不了？<br />
            操盤手從虧損恐懼到概率思維的心理重構
          </h1>
          <p className="text-lg leading-relaxed" style={{ opacity: 0.65 }}>
            停損失敗，不是意志力不夠。是你用錯了框架。
          </p>
          <div className="border-t" style={{ borderColor: "#1B2D5A1A" }} />
        </header>

        {/* 正文 */}
        <article className="flex flex-col gap-12">

          {/* 開場情境 */}
          <section className="flex flex-col gap-4">
            <Paragraph>
              你設好了停損。你告訴自己：「跌破這個價位，我一定出場。」
            </Paragraph>
            <Paragraph>
              然後它真的跌破了。你的手指放在滑鼠上，但你沒有按下去。
            </Paragraph>
            <Paragraph>
              你開始想：「也許只是假破？也許明天會反彈？這單子我研究了這麼久……」
            </Paragraph>
            <Paragraph>
              兩天後，虧損擴大了三倍。你才終於出場——不是因為你想清楚了，是因為你撐不住了。
            </Paragraph>
            <Paragraph>
              這不是你的個案。這幾乎是每一個非職業交易者的共同劇本。
            </Paragraph>
          </section>

          {/* 問題根源 */}
          <section className="flex flex-col gap-5">
            <H2>停損失敗的根源：不是紀律，是框架</H2>
            <Paragraph>
              大多數人以為停損執行不了是「意志力問題」或「情緒管理問題」。
              所以他們嘗試更嚴格要求自己、設更多規則、把停損貼在螢幕上提醒自己。
            </Paragraph>
            <Paragraph>
              但這些都只是症狀處理。真正的問題更深一層：
              你用「這單子我會虧多少」的框架在思考，而不是「這個交易系統長期下來的勝率和期望值是什麼」。
            </Paragraph>
            <Paragraph>
              行為經濟學把這個現象稱為「損失厭惡」（Loss Aversion）——
              人對損失的痛苦感受，約是同等獲利喜悅的兩倍。
              這不是性格缺陷，是人類的神經系統設定。
              你的大腦在交易虧損時啟動的，和看到掠食者時一樣的迴路。
            </Paragraph>
            <Paragraph>
              問題是：在原始環境裡，「逃跑或戰鬥」讓你存活。在市場裡，它讓你把小虧變大虧。
            </Paragraph>
          </section>

          {/* 軍師觀點 */}
          <section className="flex flex-col gap-5">
            <SectionLabel>軍師觀點</SectionLabel>
            <Card className="border-0 shadow-none" style={{ backgroundColor: "#1B2D5A" }}>
              <CardContent className="flex flex-col gap-5 pt-6 pb-6">
                <p className="text-base font-semibold leading-snug" style={{ color: "#F5F4F0" }}>
                  法人不是沒有情緒。法人是把情緒排除在決策流程之外。
                </p>
                <p className="text-sm leading-[1.85]" style={{ color: "#F5F4F0", opacity: 0.75 }}>
                  一個合格的法人交易員，看每一筆交易的方式是這樣的：
                  「這個部位，是我整體策略中的一個樣本點。它的勝負，不影響策略的統計優勢。
                  停損是這個策略的一部分，不是失敗，是系統正常運作的訊號。」
                </p>
                <p className="text-sm leading-[1.85]" style={{ color: "#F5F4F0", opacity: 0.75 }}>
                  換句話說：他們不是在「忍痛停損」，他們根本沒有在用「痛」的框架看這件事。
                  對他們來說，執行停損和執行買入是同一種行為——都是遵守系統。
                </p>
                <p className="text-sm leading-[1.85]" style={{ color: "#F5F4F0", opacity: 0.75 }}>
                  這才是你真正需要建立的東西：不是更強的意志力，是更正確的思維框架。
                </p>
              </CardContent>
            </Card>
          </section>

          {/* 概率思維的重構 */}
          <section className="flex flex-col gap-5">
            <H2>從「這單子」到「這個系統」</H2>
            <Paragraph>
              概率思維的核心只有一句話：你無法控制單一交易的結果，但你可以控制系統的期望值。
            </Paragraph>
            <Paragraph>
              假設你的交易系統勝率是 45%，但平均獲利是平均虧損的 2.5 倍。
              長期下來，這是一個正期望值的系統——即使你輸的次數比贏的多。
            </Paragraph>
            <Paragraph>
              在這個框架下，每一次執行停損，不是「我又輸了」，而是「我讓系統繼續正常運作了」。
              每一次不執行停損，才是真正的失誤——不是因為你虧錢，是因為你破壞了系統的統計邊際。
            </Paragraph>
            <Paragraph>
              這個認知轉變不是一句話就能完成的。但它是所有職業交易者都走過的那條路。
            </Paragraph>
          </section>

          {/* 實戰規則 */}
          <section className="flex flex-col gap-5">
            <SectionLabel>實戰規則</SectionLabel>
            <Card className="border-0 shadow-none" style={{ backgroundColor: "#FFFFFF" }}>
              <CardContent className="flex flex-col gap-6 pt-6 pb-6">
                <p className="text-sm font-semibold" style={{ color: "#1B2D5A" }}>
                  在你能夠重構思維框架之前，先用這三條規則保護你的帳戶：
                </p>
                {[
                  {
                    rule: "01",
                    title: "停損點在進場前設定，不在持倉中改動",
                    body: "進場前你的情緒是中立的，這是你最理性的時刻。持倉中你的大腦已被「損失厭惡」劫持。規則：停損只能在進場前設，進場後不能往下移，只能往上移（保護獲利）。",
                  },
                  {
                    rule: "02",
                    title: "每筆交易的風險上限固定為帳戶的 1-2%",
                    body: "不是「這單感覺很穩所以多押一點」。風險固定，倉位才能固定，停損才有意義。當你知道這單最多虧 1%，執行停損的心理阻力會大幅降低。",
                  },
                  {
                    rule: "03",
                    title: "用交易日誌追蹤「停損執行率」，而非只看損益",
                    body: "如果你的系統設計了停損，執行率應該要接近 100%。每次沒執行都記下來：當時你告訴自己什麼理由？這些理由，就是你需要修正的認知偏誤清單。",
                  },
                ].map((item) => (
                  <div key={item.rule} className="flex gap-4">
                    <span
                      className="text-xl font-bold tabular-nums shrink-0 leading-none pt-0.5"
                      style={{ color: "#D4A843" }}
                    >
                      {item.rule}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-sm font-semibold" style={{ color: "#1B2D5A" }}>
                        {item.title}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "#1B2D5A", opacity: 0.65 }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          {/* 結語 */}
          <section className="flex flex-col gap-5 border-t pt-10" style={{ borderColor: "#1B2D5A1A" }}>
            <H2>停損不是你的敵人</H2>
            <Paragraph>
              你之所以停損執行不了，不是因為你不夠努力，是因為沒有人告訴你：
              停損本身不是痛苦的來源，你對它的詮釋方式才是。
            </Paragraph>
            <Paragraph>
              當你開始用系統的視角看每一筆交易，停損就變成了一個中性的技術動作。
              就像開車踩煞車——不是失敗，是操作的一部分。
            </Paragraph>
            <Paragraph>
              這個轉變需要時間，需要重複，需要有人幫你在混亂中找到框架。
            </Paragraph>
          </section>

        </article>

        {/* CTA */}
        <div className="flex flex-col gap-4 border-t pt-10" style={{ borderColor: "#1B2D5A1A" }}>
          <p className="text-base font-medium">你的停損問題，背後是哪一種思維框架的缺口？</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold rounded-sm transition-opacity hover:opacity-85 w-fit"
            style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
          >
            預約一對一策略諮詢
          </Link>
        </div>

      </div>
    </main>
  );
}
