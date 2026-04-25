import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "市場軍師｜台灣個人創業行銷策略顧問",
  description:
    "不用學滿行銷，只要搞懂你的市場。專注服務台灣個人創業者與自媒體經營者，提供一對一行銷策略諮詢，幫你找到市場定位、設計可執行的行銷路徑。",
};

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col justify-center px-6 py-24 sm:px-16"
      style={{ backgroundColor: "#F5F4F0", color: "#1B2D5A" }}
    >
      <div className="max-w-2xl mx-auto w-full flex flex-col gap-16">

        {/* Hero */}
        <section className="flex flex-col gap-6">
          <Badge
            variant="outline"
            className="w-fit text-xs tracking-widest uppercase border-none px-0"
            style={{ color: "#D4A843", background: "transparent" }}
          >
            市場軍師
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            不用學滿行銷，<br />只要搞懂你的市場
          </h1>
          <p className="text-lg leading-relaxed" style={{ opacity: 0.7 }}>
            台灣個人創業者的行銷策略顧問。<br />
            不是叫你動快一點——是先確認跑道是對的，再開始跑。
          </p>
          <div className="pt-2">
            <Button
              asChild
              className="px-8 py-6 text-base font-semibold rounded-sm"
              style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
            >
              <Link href="/contact">開始策略諮詢</Link>
            </Button>
          </div>
        </section>

        {/* 核心價值 */}
        <section className="flex flex-col gap-8 border-t pt-12" style={{ borderColor: "#1B2D5A1A" }}>
          <p className="text-xs tracking-widest uppercase" style={{ color: "#D4A843" }}>
            我相信的事
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-0 shadow-none" style={{ backgroundColor: "#FFFFFF" }}>
              <CardHeader>
                <CardTitle className="text-base font-semibold" style={{ color: "#1B2D5A" }}>
                  想清楚比動快更重要
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed" style={{ color: "#1B2D5A", opacity: 0.65 }}>
                  很多人行銷失敗不是執行力差，是方向一開始就錯了。
                  我的工作是讓你在對的方向上才開始跑。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none" style={{ backgroundColor: "#FFFFFF" }}>
              <CardHeader>
                <CardTitle className="text-base font-semibold" style={{ color: "#1B2D5A" }}>
                  不賣焦慮，賣清醒
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed" style={{ color: "#1B2D5A", opacity: 0.65 }}>
                  讓你知道自己現在在哪裡、下一步去哪裡——
                  而不是用「你落後了」來驅動你。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </main>
  );
}
