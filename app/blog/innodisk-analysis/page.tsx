import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "宜鼎（5289）實戰拆解：法人如何看工業儲存的護城河｜市場軍師 Remi",
  description:
    "宜鼎國際（Innodisk）深度分析。從法人視角拆解工業級儲存的競爭壁壘、財務結構與風險控管要點，幫你建立有邏輯的進出場框架。",
  keywords: ["宜鼎", "Innodisk", "5289", "工業儲存", "法人分析", "台股", "風險控管"],
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

export default function InnodiskAnalysis() {
  return (
    <main
      className="min-h-screen px-6 py-24 sm:px-16"
      style={{ backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
    >
      <div className="max-w-2xl mx-auto w-full flex flex-col gap-16">

        {/* Header */}
        <header className="flex flex-col gap-6">
          <div className="flex items-center gap-3 flex-wrap">
            <Badge
              className="text-xs rounded-sm"
              style={{ backgroundColor: "#1B2D5A", color: "#F5F4F0" }}
            >
              個股拆解
            </Badge>
            <Badge
              className="text-xs rounded-sm"
              style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
            >
              工業儲存
            </Badge>
            <span className="text-xs" style={{ color: "#1B2D5A", opacity: 0.45 }}>
              2026-04-25 · 市場軍師 Remi
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold leading-snug tracking-tight">
            宜鼎（5289）實戰拆解：<br />
            法人如何看工業儲存的護城河
          </h1>
          <p className="text-lg leading-relaxed" style={{ opacity: 0.65 }}>
            這不是目標價預測，也不是買進建議。這是一個拆解競爭優勢、辨識風險、
            建立進出場邏輯的思維示範。
          </p>
          <div className="border-t" style={{ borderColor: "#1B2D5A1A" }} />
        </header>

        <article className="flex flex-col gap-12">

          {/* 公司定位 */}
          <section className="flex flex-col gap-5">
            <SectionLabel>公司定位</SectionLabel>
            <H2>宜鼎在做什麼，為什麼不一樣</H2>
            <Paragraph>
              宜鼎國際（Innodisk，5289.TW）是台灣少數專注於工業級嵌入式儲存與記憶體模組的上市公司。
              它的客戶不是你我這種消費者，而是工廠自動化設備、醫療儀器、航太系統、軍事通訊——
              凡是需要在極端環境下穩定運作、壽命要求超過十年的應用場景。
            </Paragraph>
            <Paragraph>
              這和消費型 SSD 廠商的邏輯完全不同。消費型市場拼的是容量與價格；
              工業型市場拼的是可靠性、長料號供貨保證、以及客製化能力。
              一旦設備量產導入某家供應商的儲存模組，更換的成本極高——這就是宜鼎的護城河所在。
            </Paragraph>
          </section>

          {/* 競爭優勢拆解 */}
          <section className="flex flex-col gap-5">
            <H2>三條護城河，一條比一條難複製</H2>
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "客製化能力 × 長料號承諾",
                  body: "工業客戶的採購周期以年計，一旦認證通過，供應商不會輕易被替換。宜鼎對主要料號提供 3–5 年的持續供貨承諾，這對競爭對手形成高壁壘——你得先有同等的庫存管理能力和研發深度，才能開始搶單。",
                },
                {
                  title: "垂直整合的韌體與 IC 設計能力",
                  body: "宜鼎不只做模組組裝，它自行開發韌體與部分控制 IC。這意味著它能針對特殊應用（如寬溫、抗震、防斷電保護）進行底層優化，這是純模組廠做不到的。",
                },
                {
                  title: "小量多樣的市場定位",
                  body: "工業儲存的每個垂直市場規模都不大，但利潤率遠高於消費型。這讓大廠缺乏動力進入，卻讓宜鼎這類專注型廠商可以累積深度的行業 know-how 和客戶關係。",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-base font-bold shrink-0 pt-0.5" style={{ color: "#D4A843" }}>—</span>
                  <div className="flex flex-col gap-1.5">
                    <p className="text-sm font-semibold" style={{ color: "#1B2D5A" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#1B2D5A", opacity: 0.68 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 法人觀點 */}
          <section className="flex flex-col gap-5">
            <SectionLabel>法人觀點</SectionLabel>
            <Card className="border-0 shadow-none" style={{ backgroundColor: "#1B2D5A" }}>
              <CardContent className="flex flex-col gap-5 pt-6 pb-6">
                <p className="text-base font-semibold leading-snug" style={{ color: "#F5F4F0" }}>
                  法人買宜鼎，買的不是今年的 EPS，買的是客戶黏著度形成的可見現金流。
                </p>
                <p className="text-sm leading-[1.85]" style={{ color: "#F5F4F0", opacity: 0.72 }}>
                  工業儲存的特性是需求相對平穩，但切入需要時間。一旦某個垂直行業的設備廠商採用宜鼎，
                  後續的維修、擴容、新機型導入都會延續使用同一家供應商。
                  法人對這類「低波動、高黏性」的商業模式給予較高的本益比溢價，
                  不是因為成長性高，而是因為可預測性高。
                </p>
                <p className="text-sm leading-[1.85]" style={{ color: "#F5F4F0", opacity: 0.72 }}>
                  觀察重點：外資持股比例的方向性變化、毛利率是否維持在 40% 以上、
                  以及 AI Edge 與車用領域的新客戶導入進度——這三項指標，
                  比單季 EPS 更能反映公司的真實競爭態勢。
                </p>
              </CardContent>
            </Card>
          </section>

          {/* 風險因子 */}
          <section className="flex flex-col gap-5">
            <H2>你必須先看懂風險，再談進場</H2>
            <Paragraph>
              宜鼎的護城河真實存在，但這不代表它沒有風險。以下是法人在評估時會重點追蹤的風險因子：
            </Paragraph>
            <div className="flex flex-col gap-5">
              {[
                {
                  risk: "NAND Flash 原物料週期",
                  detail: "宜鼎的成本結構高度依賴 NAND Flash 價格。當 Flash 報價快速上漲（如 2021–2022），毛利率會受到壓縮。需追蹤三星、鎧俠的 NAND 報價趨勢作為領先指標。",
                },
                {
                  risk: "客戶集中度",
                  detail: "工業型廠商的大客戶黏性雖高，但若前幾大客戶業務下滑或轉單，對營收衝擊會較集中。財報中的客戶集中度揭露是必讀欄位。",
                },
                {
                  risk: "中國競爭者崛起",
                  detail: "中國工業儲存廠商技術能力持續提升，且在本土市場享有政策優勢。宜鼎若無法在歐美日市場持續深化，長期的市場份額存在侵蝕風險。",
                },
              ].map((item) => (
                <div key={item.risk} className="flex gap-4">
                  <span className="text-xs font-bold shrink-0 tracking-widest uppercase mt-1" style={{ color: "#D4A843" }}>
                    風險
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold" style={{ color: "#1B2D5A" }}>{item.risk}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#1B2D5A", opacity: 0.65 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 實戰規則 */}
          <section className="flex flex-col gap-5">
            <SectionLabel>實戰規則</SectionLabel>
            <Card className="border-0 shadow-none" style={{ backgroundColor: "#FFFFFF" }}>
              <CardContent className="flex flex-col gap-6 pt-6 pb-6">
                <p className="text-sm font-semibold" style={{ color: "#1B2D5A" }}>
                  在考慮宜鼎進出場時，這三個規則可以幫你過濾雜訊：
                </p>
                {[
                  {
                    rule: "01",
                    title: "用毛利率當健康指標，而非股價",
                    body: "宜鼎的競爭優勢最終體現在毛利率。若連續兩季毛利率低於 38%，代表競爭壓力或成本壓力已實質影響護城河，需重新評估假設前提。",
                  },
                  {
                    rule: "02",
                    title: "外資動向是信號，但不是唯一信號",
                    body: "外資連續買超通常反映法人對未來 2–4 季獲利能見度的信心。但外資也可能因為台股整體資金移動而進出，需搭配產業訂單能見度一起看，不能單獨解讀。",
                  },
                  {
                    rule: "03",
                    title: "設定停損點在基本面改變，而非技術面跌幅",
                    body: "對基本面型持股，停損條件應是「公司競爭優勢出現實質弱化跡象」，而非「股價跌了 10%」。前者是理性邊界，後者只是噪音反應。兩者的框架完全不同。",
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
                      <p className="text-sm font-semibold" style={{ color: "#1B2D5A" }}>{item.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#1B2D5A", opacity: 0.65 }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          {/* 結語 */}
          <section className="flex flex-col gap-5 border-t pt-10" style={{ borderColor: "#1B2D5A1A" }}>
            <H2>這篇文章最重要的一句話</H2>
            <Paragraph>
              分析宜鼎不是為了告訴你「現在該買還是賣」。是為了示範一件事：
              每一個進出場決定，都應該有一個你能清楚說出來的邏輯——
              進場的理由是什麼、這個理由在什麼情況下會不成立、
              不成立的時候你的出場條件是什麼。
            </Paragraph>
            <Paragraph>
              有這三個答案，你才是在交易一個系統，而不是在賭一個感覺。
            </Paragraph>
          </section>

        </article>

        {/* CTA */}
        <div className="flex flex-col gap-4 border-t pt-10" style={{ borderColor: "#1B2D5A1A" }}>
          <p className="text-base font-medium">想對你自己的持股做同樣的拆解？</p>
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
