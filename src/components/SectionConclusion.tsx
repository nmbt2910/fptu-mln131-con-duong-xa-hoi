import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SectionConclusion = () => {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-primary/10 to-background relative overflow-hidden">
      {/* Decorative star */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
        <svg width="400" height="400" viewBox="0 0 400 400">
          <polygon
            points="200,20 240,150 380,150 264,230 304,360 200,280 96,360 136,230 20,150 160,150"
            fill="hsl(var(--gold))"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-8">Kết luận</h2>
          <div className="section-divider w-24 mx-auto mb-8" />
          <p className="text-lg md:text-2xl leading-relaxed text-foreground mb-8" style={{ fontFamily: "var(--font-accent)" }}>
            Con đường quá độ lên Chủ nghĩa Xã hội bỏ qua chế độ Tư bản chủ nghĩa là sự lựa chọn dứt khoát, đúng đắn của Đảng Cộng sản Việt Nam, đáp ứng nguyện vọng thiết tha của dân tộc, phản ánh xu thế phát triển của thời đại, phù hợp với quan điểm khoa học của chủ nghĩa Mác – Lênin.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground italic">
            Trân trọng cảm ơn thầy cô và các bạn đã lắng nghe!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionConclusion;
