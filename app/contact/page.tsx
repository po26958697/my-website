export default function Contact() {
  return (
    <main
      className="min-h-screen flex flex-col justify-center px-6 py-24 sm:px-16"
      style={{ backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
    >
      <div className="max-w-2xl mx-auto w-full flex flex-col gap-8">
        <p className="text-sm tracking-widest uppercase" style={{ color: "#D4A843" }}>
          Contact
        </p>
        <h1 className="text-4xl font-bold tracking-tight">預約諮詢</h1>
        <p className="text-lg leading-relaxed" style={{ opacity: 0.7 }}>
          準備好想清楚你的市場方向了嗎？點下方按鈕預約一對一策略諮詢。
        </p>
        <div>
          <a
            href="#"
            className="inline-block px-8 py-4 text-base font-semibold rounded-sm transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
          >
            立即預約諮詢
          </a>
        </div>
      </div>
    </main>
  );
}
