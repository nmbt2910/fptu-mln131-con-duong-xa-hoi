import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center drum-pattern-bg star-pattern overflow-hidden">
      {/* Decorative star */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
        <svg width="600" height="600" viewBox="0 0 600 600">
          <polygon
            points="300,30 360,225 570,225 396,345 456,540 300,420 144,540 204,345 30,225 240,225"
            fill="hsl(var(--gold))"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl font-medium tracking-widest uppercase text-accent mb-6">
            Chương 3 — Chủ nghĩa Xã hội Khoa học
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground mb-8">
            Quá độ lên{" "}
            <span className="text-primary">Chủ nghĩa Xã hội</span>
            <br />
            bỏ qua chế độ{" "}
            <span className="text-gold-dark">Tư bản Chủ nghĩa</span>
            <br />
            ở Việt Nam
          </h1>
          <div className="section-divider w-48 mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12"
        >
          <nav className="inline-flex flex-wrap justify-center gap-3">
            {[
              "1. Giới thiệu chung về Chủ nghĩa Xã hội",
              "2. Tính tất yếu & đặc điểm",
              "3. Bỏ qua Tư bản Chủ nghĩa ở Việt Nam",
              "4. Đặc trưng Chủ nghĩa Xã hội Việt Nam",
              "5. Phương hướng & Kết luận",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm md:text-base font-medium text-foreground"
              >
                {item}
              </span>
            ))}
          </nav>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
