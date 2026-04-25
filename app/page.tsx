export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col justify-center px-6 py-24 sm:px-16"
      style={{ backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
    >
      <div className="max-w-2xl mx-auto w-full flex flex-col gap-16">

        {/* Hero */}
        <section className="flex flex-col gap-6">
          <p className="text-sm tracking-widest uppercase" style={{ color: "#D4A843" }}>
            市場軍師
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            不用學滿行銷，<br />只要搞懂你的市場
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#1B2D5A", opacity: 0.7 }}>
            專注服務台灣個人創業者與自媒體經營者的行銷策略顧問。<br />
            幫你在對的方向上，才開始跑。
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-block px-8 py-4 text-base font-semibold rounded-sm transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
            >
              開始策略諮詢
            </a>
          </div>
        </section>

        {/* 核心價值 */}
        <section className="flex flex-col gap-8 border-t pt-12" style={{ borderColor: "#1B2D5A22" }}>
          <h2 className="text-xs tracking-widest uppercase" style={{ color: "#D4A843" }}>
            我相信的事
          </h2>
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
            <div className="flex flex-col gap-2 sm:flex-1">
              <h3 className="text-lg font-semibold">想清楚比動快更重要</h3>
              <p className="text-base leading-relaxed" style={{ opacity: 0.7 }}>
                很多人行銷失敗不是執行力差，是方向一開始就錯了。
                我的工作是讓你在對的方向上才開始跑。
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-1">
              <h3 className="text-lg font-semibold">不賣焦慮，賣清醒</h3>
              <p className="text-base leading-relaxed" style={{ opacity: 0.7 }}>
                讓你知道自己現在在哪裡、下一步去哪裡——
                而不是用「你落後了」來驅動你。
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
