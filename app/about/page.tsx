export default function About() {
  return (
    <main
      className="min-h-screen px-6 py-24 sm:px-16"
      style={{ backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
    >
      <div className="max-w-2xl mx-auto w-full flex flex-col gap-20">

        {/* Hook */}
        <section className="flex flex-col gap-6">
          <p className="text-sm tracking-widest uppercase" style={{ color: "#D4A843" }}>
            關於軍師
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            你有沒有這種感覺：<br />
            腦袋裡有很多想法，<br />
            但不知道從哪裡下手？
          </h1>
          <p className="text-lg leading-relaxed" style={{ opacity: 0.75 }}>
            想做內容，又不確定受眾是誰。想推服務，又不知道怎麼說才讓人買單。
            於是就先拖著，或者什麼都試一點，結果什麼都沒長起來。
          </p>
          <p className="text-lg leading-relaxed" style={{ opacity: 0.75 }}>
            這不是你不夠努力。是方向還沒想清楚。
          </p>
        </section>

        {/* 我是誰 */}
        <section className="flex flex-col gap-6 border-t pt-12" style={{ borderColor: "#1B2D5A22" }}>
          <h2 className="text-2xl font-bold">我就是那個朋友</h2>
          <p className="text-lg leading-relaxed" style={{ opacity: 0.75 }}>
            比你多走幾步路、踩過類似的坑，可以直接跟你說：「問題在這裡，我們這樣想。」
          </p>
          <p className="text-lg leading-relaxed" style={{ opacity: 0.75 }}>
            我是市場軍師——一個專注服務台灣個人創業者與自媒體經營者的行銷策略顧問。
            我不是教你理論的學院派，也不是幫你跑廣告的執行商。
            我在你腦袋還一片混亂的時候，幫你把市場方向想清楚。
          </p>
        </section>

        {/* 核心價值觀 */}
        <section className="flex flex-col gap-10 border-t pt-12" style={{ borderColor: "#1B2D5A22" }}>
          <h2 className="text-xs tracking-widest uppercase" style={{ color: "#D4A843" }}>
            我相信的事
          </h2>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold">想清楚比動快更重要</h3>
            <p className="text-lg leading-relaxed" style={{ opacity: 0.75 }}>
              我見過太多人，花了三個月做內容、投了廣告預算，然後才來問：「為什麼沒有用？」
              問題通常不在執行力——在方向。
              在你開始跑之前，我想幫你先確認跑道是對的。
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold">不賣焦慮，賣清醒</h3>
            <p className="text-lg leading-relaxed" style={{ opacity: 0.75 }}>
              市場上充斥著「你落後了」的恐嚇式行銷。我想做的相反——
              讓你知道自己現在在哪裡、下一步去哪裡，然後帶著清醒往前走，不是帶著焦慮亂跑。
            </p>
          </div>
        </section>

        {/* 我的經歷（待填） */}
        <section className="flex flex-col gap-6 border-t pt-12" style={{ borderColor: "#1B2D5A22" }}>
          <h2 className="text-2xl font-bold">我的經歷</h2>
          {/* TODO: 填入你的真實背景——工作經歷、進入行銷領域的轉折故事、服務過的對象類型 */}
          <p className="text-lg leading-relaxed" style={{ opacity: 0.75 }}>
            ［待補：你的背景故事、轉折點、為什麼走上策略顧問這條路］
          </p>
        </section>

        {/* CTA */}
        <section className="flex flex-col gap-4 border-t pt-12" style={{ borderColor: "#1B2D5A22" }}>
          <p className="text-lg font-medium">準備好把方向想清楚了嗎？</p>
          <div>
            <a
              href="/contact"
              className="inline-block px-8 py-4 text-base font-semibold rounded-sm transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
            >
              開始策略諮詢
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
