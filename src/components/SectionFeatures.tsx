import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SectionFeatures = () => {
  const sixFeatures = [
    "Do nhân dân lao động làm chủ.",
    "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về các tư liệu sản xuất chủ yếu.",
    "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
    "Con người được giải phóng, có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện.",
    "Các dân tộc bình đẳng, đoàn kết và giúp đỡ nhau cùng tiến bộ.",
    "Có quan hệ hữu nghị và hợp tác với nhân dân tất cả các nước trên thế giới.",
  ];

  const eightFeatures = [
    "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
    "Do nhân dân làm chủ.",
    "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ phù hợp.",
    "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
    "Con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện.",
    "Các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển.",
    "Có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo.",
    "Có quan hệ hữu nghị và hợp tác với các nước trên thế giới.",
  ];

  const goals = [
    { year: "2025", milestone: "Kỷ niệm 50 năm giải phóng miền Nam", desc: "Là nước đang phát triển, có công nghiệp theo hướng hiện đại, vượt qua mức thu nhập trung bình thấp." },
    { year: "2030", milestone: "Kỷ niệm 100 năm thành lập Đảng", desc: "Là nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao." },
    { year: "2045", milestone: "Kỷ niệm 100 năm thành lập nước", desc: "Trở thành nước phát triển, thu nhập cao." },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-primary/5 star-pattern">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">Phần 4</h2>
          <h3 className="text-xl md:text-3xl font-semibold text-foreground mb-4">
            Những đặc trưng của Chủ nghĩa Xã hội ở Việt Nam
          </h3>
          <div className="section-divider w-32 mb-12" />
        </motion.div>

        {/* 4.1 — Mosaic/masonry-inspired layout */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-2">
            4.1. Sáu đặc trưng theo Cương lĩnh 1991
          </h4>
          <p className="text-sm text-muted-foreground mb-6 italic">(Giáo trình, tr. 113)</p>
          <p className="text-base md:text-lg text-foreground mb-6">
            Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (1991) đã xác định mô hình chủ nghĩa xã hội ở nước ta với sáu đặc trưng:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sixFeatures.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card rounded-2xl border border-border p-5 md:p-6 relative overflow-hidden h-full flex flex-col"
              >
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-lg font-black text-primary/40">{i + 1}</span>
                </div>
                <p className="text-base leading-relaxed text-foreground pr-10">{f}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4.2 — Horizontal scroll-like cards with accent stripe */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-2">
            4.2. Tám đặc trưng theo Cương lĩnh bổ sung năm 2011
          </h4>
          <p className="text-sm text-muted-foreground mb-6 italic">(Giáo trình, tr. 113–114)</p>
          <p className="text-base md:text-lg text-foreground mb-6">
            Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (bổ sung, phát triển năm 2011) đã phát triển mô hình chủ nghĩa xã hội Việt Nam với tám đặc trưng cơ bản như sau:
          </p>

          <div className="space-y-3">
            {eightFeatures.map((f, i) => {
              const colors = ["border-l-primary", "border-l-accent", "border-l-gold-dark", "border-l-brown"];
              return (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`bg-card rounded-r-xl border-l-4 ${colors[i % 4]} p-5 flex gap-3 items-start`}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center font-bold text-sm text-foreground">
                    {i + 1}
                  </span>
                  <p className="text-base leading-relaxed text-foreground">{f}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 4.3 Goals — Large year display with milestone cards */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-2">
            4.3. Mục tiêu phát triển của Việt Nam
          </h4>
          <p className="text-sm text-muted-foreground mb-6 italic">(Giáo trình, tr. 118 – Đại hội XIII)</p>
          <p className="text-base md:text-lg text-foreground mb-8">
            Đại hội XIII của Đảng đã xác định mục tiêu đến giữa thế kỷ XXI, nước ta trở thành nước phát triển theo định hướng xã hội chủ nghĩa với các mục tiêu cụ thể:
          </p>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-gold-dark opacity-20 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {goals.map((g, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl border-2 border-primary/20 p-6 md:p-8 text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                  <div className="relative">
                    <div className="text-5xl md:text-6xl font-black text-primary mb-2">{g.year}</div>
                    <p className="text-sm font-semibold text-accent mb-4">{g.milestone}</p>
                    <div className="section-divider w-16 mx-auto mb-4" />
                    <p className="text-base leading-relaxed text-foreground">{g.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFeatures;
