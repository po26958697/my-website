import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "關於軍師｜市場軍師 Remi",
  description:
    "Web 開發者出身的交易策略顧問。將程式邏輯引入交易系統，把模糊的市場直覺轉化為可執行的演算法與風險管理機制。",
};

export default function About() {
  return (
    <main
      className="min-h-screen px-6 py-24 sm:px-16"
      style={{ backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
    >
      <div className="max-w-2xl mx-auto w-full flex flex-col gap-20">

        {/* Hero */}
        <section className="flex flex-col gap-6">
          <Badge
            variant="outline"
            className="w-fit text-xs tracking-widest uppercase border-none px-0"
            style={{ color: "#D4A843", background: "transparent" }}
          >
            關於軍師
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            市場不給情緒發獎金，<br />只給紀律發報酬。
          </h1>
          <p className="text-lg leading-relaxed" style={{ opacity: 0.72 }}>
            這不是一句激勵格言。這是我用虧損換來的作業系統。
          </p>
        </section>

        {/* 專業背景 */}
        <section className="flex flex-col gap-6 border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          <Badge
            variant="outline"
            className="w-fit text-xs tracking-widest uppercase border-none px-0"
            style={{ color: "#D4A843", background: "transparent" }}
          >
            背景
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight">
            從寫程式到看盤：系統思維的遷移
          </h2>
          <p className="text-base leading-[1.85]" style={{ opacity: 0.72 }}>
            我的起點是 Web 開發。程式設計教會我一件事：系統不會說謊，邏輯不接受例外。
            一段代碼要麼跑得通，要麼跑不通，沒有「差不多」的空間。
          </p>
          <p className="text-base leading-[1.85]" style={{ opacity: 0.72 }}>
            當我把這套思維帶進交易市場，我才看清楚大多數虧損的真正原因：
            不是分析能力不足，是「例外」太多——今天這單感覺不一樣、這次停損先不設、
            這個訊號我覺得可以忽略。每一個「例外」，都是在系統裡埋一個 bug。
          </p>
          <p className="text-base leading-[1.85]" style={{ opacity: 0.72 }}>
            所以我做了一件對工程師來說很自然的事：把模糊的市場直覺，
            翻譯成可以被檢驗、可以被量化、可以被嚴格執行的交易規則。
            把「我感覺」換成「當條件 A + B 同時成立，執行動作 C」。
          </p>
        </section>

        {/* 核心金句卡 */}
        <section>
          <Card className="border-0 shadow-none" style={{ backgroundColor: "#1B2D5A" }}>
            <CardContent className="flex flex-col gap-4 py-10 px-8">
              <p className="text-xs tracking-widest uppercase" style={{ color: "#D4A843" }}>
                軍師使命
              </p>
              <p className="text-xl font-bold leading-snug" style={{ color: "#F5F4F0" }}>
                幫助受困於心理素質的投資者，透過系統化的風險管理機制，翻轉虧損，
                建立專業的法人交易紀律。
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#F5F4F0", opacity: 0.68 }}>
                不是叫你「更努力研究線圖」，不是叫你「相信自己」。
                是幫你建立一套即使情緒崩潰，系統仍能正常運作的交易架構。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* 為什麼是我 */}
        <section className="flex flex-col gap-6 border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          <Badge
            variant="outline"
            className="w-fit text-xs tracking-widest uppercase border-none px-0"
            style={{ color: "#D4A843", background: "transparent" }}
          >
            為什麼是我
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight">
            因為我懂代碼的嚴謹，更懂市場的冷酷。
          </h2>
          <div className="flex flex-col gap-8">
            {[
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
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <h3 className="text-base font-semibold" style={{ color: "#1B2D5A" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.85]" style={{ opacity: 0.68 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 我的經歷（待補） */}
        <section className="flex flex-col gap-4 border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          <h2 className="text-xl font-bold">經歷</h2>
          {/* TODO: 填入你的真實背景——開發年資、交易資歷、具體的轉折點與里程碑 */}
          <p className="text-sm leading-relaxed" style={{ opacity: 0.5 }}>
            ［待補：開發背景、交易資歷、轉折點、服務過的對象類型］
          </p>
        </section>

        {/* CTA */}
        <section className="flex flex-col gap-4 border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          <p className="text-base font-medium">
            準備把「感覺」換成「系統」了嗎？
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold rounded-sm transition-opacity hover:opacity-85 w-fit"
            style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
          >
            預約一對一策略諮詢
          </Link>
        </section>

      </div>
    </main>
  );
}
