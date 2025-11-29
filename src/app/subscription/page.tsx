"use client"
import { BottomBar } from "@/components/ui/bottom-bar"

export default function SubscriptionPage() {
  return (
    <div
      className="relative min-h-screen w-full flex items-start justify-center app-stars pt-5 pb-[110px] md:pb-[80px] lg:pb-[65px]"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 90px)" }}
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="relative max-w-[343px] mx-auto mb-0">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", width: "342px", height: "127px", borderRadius: "20px", background: "linear-gradient(180deg, #08102D 0%, #1A285B 100%)" }}>
            <img src="/woman.png" alt="woman" style={{ width: "110px", height: "120px", objectFit: "cover", alignSelf: "flex-end" }} />
            <div
              style={{
                width: "173px",
                height: "35px",
                backgroundColor: "#D3B589",
                WebkitMaskImage: "url('/надпись.png')",
                maskImage: "url('/надпись.png')",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
          </div>
        </div>
        <div className="relative max-w-[343px] mx-auto mb-0" style={{ marginTop: "15px" }}>
          <div
            style={{
              width: "343px",
              borderRadius: "20px",
              background: "linear-gradient(180deg, #08102d 0%, #1a285b 100%)",
              padding: "16px",
              color: "#fff",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div
                className="font-libertinus"
                style={{
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "95%",
                  textTransform: "uppercase",
                  background: "linear-gradient(90deg, #f4d990 0%, #cb9b3d 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: "left",
                }}
              >
                у вас нет активной подписки
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <a
                href="https://t.me/Levi_Antonina"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "21px",
                  marginBottom: "23px",
                  width: "242px",
                  height: "35px",
                  borderRadius: "5px",
                  background: "linear-gradient(90deg, #f4d990 0%, #cb9b3d 100%)",
                  fontFamily: "var(--font-family)",
                  fontWeight: 400,
                  fontSize: "10px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#48351b",
                }}
              >
                оформить подписку
              </a>
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}
