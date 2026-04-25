import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Layers, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "關於軍師｜市場軍師 Remi",
  description:
    "Web 開發者出身的交易策略顧問。將程式邏輯引入交易系統，把模糊的市場直覺轉化為可執行的演算法與風險管理機制。",
};

const services = [
  {
    icon: Users,
    title: "一對一策略諮詢",
    desc: "從你的現況出發，找到交易系統的真實卡點。帶走一份可立即執行的行動清單，不是理論，是下週就能用的決策框架。",
  },
  {
    icon: Layers,
    title: "交易系統建構",
    desc: "把模糊的進出場直覺，翻譯成有條件、可量化、可嚴格執行的規則框架。從感覺交易，進化到系統交易。",
  },
  {
    icon: Shield,
    title: "風險控管框架",
    desc: "設定每筆交易的最大風險上限、倉位計算邏輯、停損觸發條件。把保護資金變成自動化習慣，不靠意志力。",
  },
];

const whyMe = [
  {
    title: "系統架構師的執著",
    body: "寫過夠多系統，我知道邊界條件有多重要。交易系統也一樣——你沒有定義清楚的每一個情況，市場都會替你定義，而且通常是最殘酷的那個版本。",
  },
  {
    title: "概率框架，不是預測框架",
    body: "我不相信有人能預測市場。我相信的是：在正期望值的條件下持續執行，樣本夠大，結果自然會站在你這邊。這是統計學，不是玄學。",
  },
  {
    title: "虧損過，所以知道問題在哪",
    body: "我不是從教科書學交易的。我是從帳戶裡少掉的數字學的。那些虧損讓我知道：問題不在市場，在系統。更準確地說，在沒有系統。",
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
            結合 Web 開發者的邏輯嚴謹性與法人級交易紀律，致力於將複雜市場數據轉化為可執行的策略。
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#F5F4F0", opacity: 0.5 }}>
            這不是一句激勵格言。這是我用虧損換來的作業系統。
          </p>
        </div>
      </section>

      {/* ── Section 2：背景敘事（純白底） */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-20 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#D4A843" }}>
              背景
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              從寫程式到看盤：系統思維的遷移
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-base leading-[1.9]" style={{ opacity: 0.72 }}>
              我的起點是 Web 開發。程式設計教會我一件事：系統不會說謊，邏輯不接受例外。
              一段代碼要麼跑得通，要麼跑不通，沒有「差不多」的空間。
            </p>
            <p className="text-base leading-[1.9]" style={{ opacity: 0.72 }}>
              當我把這套思維帶進交易市場，我才看清楚大多數虧損的真正原因：
              不是分析能力不足，是「例外」太多。每一個「這次感覺不一樣」，
              都是在系統裡埋一個 bug。
            </p>
            <p className="text-base leading-[1.9]" style={{ opacity: 0.72 }}>
              所以我做了一件對工程師來說很自然的事：
              把「我感覺」換成「當條件 A + B 同時成立，執行動作 C」。
              把模糊的市場直覺，翻譯成可被檢驗、可被量化、可被嚴格執行的交易規則。
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3：服務內容（暖灰底，三欄 Card） */}
      <section style={{ backgroundColor: "#F5F4F0" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-20 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#D4A843" }}>
              服務內容
            </p>
            <h2 className="text-3xl font-bold tracking-tight">我能幫你做什麼</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <Card
                key={title}
                className="border-0 shadow-sm flex flex-col gap-0 w-full"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <CardContent className="flex flex-col gap-4 pt-7 pb-7">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#1B2D5A10" }}
                  >
                    <Icon size={20} style={{ color: "#D4A843" }} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-bold" style={{ color: "#1B2D5A" }}>
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ opacity: 0.65 }}>
                      {desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold w-fit transition-opacity hover:opacity-70"
            style={{ color: "#1B2D5A" }}
          >
            查看完整服務說明 <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Section 4：使命宣言（深靛藍底） */}
      <section style={{ backgroundColor: "#1B2D5A" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-20 flex flex-col gap-6">
          <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#D4A843" }}>
            軍師使命
          </p>
          <p className="text-2xl sm:text-3xl font-bold leading-snug" style={{ color: "#F5F4F0" }}>
            幫助受困於心理素質的投資者，透過系統化的風險管理機制，翻轉虧損，
            建立專業的法人交易紀律。
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#F5F4F0", opacity: 0.65 }}>
            不是叫你「更努力研究線圖」，不是叫你「相信自己」。
            是幫你建立一套即使情緒崩潰，系統仍能正常運作的交易架構。
          </p>
        </div>
      </section>

      {/* ── Section 5：為什麼是我（純白底） */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-20 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#D4A843" }}>
              為什麼是我
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              因為我懂代碼的嚴謹，更懂市場的冷酷。
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            {whyMe.map((item, i) => (
              <div key={item.title} className="flex gap-5">
                <span
                  className="text-3xl font-bold tabular-nums leading-none shrink-0 pt-1"
                  style={{ color: "#D4A843", opacity: 0.35 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="text-sm leading-[1.85]" style={{ opacity: 0.65 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6：經歷（暖灰底） */}
      <section style={{ backgroundColor: "#F5F4F0" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-20 flex flex-col gap-5">
          <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#D4A843" }}>
            經歷
          </p>
          <h2 className="text-2xl font-bold">里程碑</h2>
          {/* TODO: 填入你的真實背景——開發年資、交易資歷、具體轉折點與里程碑 */}
          <p className="text-sm leading-relaxed" style={{ opacity: 0.45 }}>
            ［待補：開發背景、交易資歷、轉折點、服務過的對象類型］
          </p>
        </div>
      </section>

      {/* ── Section 7：CTA（深靛藍底） */}
      <section style={{ backgroundColor: "#1B2D5A" }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-16 py-20 flex flex-col gap-6">
          <h2 className="text-2xl font-bold" style={{ color: "#F5F4F0" }}>
            準備把「感覺」換成「系統」了嗎？
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
