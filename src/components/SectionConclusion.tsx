import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SectionConclusion = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-8">Kết luận</h2>
          <div className="section-divider w-24 mx-auto mb-8" />
          <p className="text-lg md:text-2xl leading-relaxed text-foreground mb-8" style={{ fontFamily: "var(--font-accent)" }}>
            Con đường quá độ lên CHỦ NGHĨA XÃ HỘI bỏ qua chế độ Tư bản chủ nghĩa là sự lựa chọn dứt khoát, đúng đắn của Đảng Cộng sản Việt Nam, đáp ứng nguyện vọng thiết tha của dân tộc, phản ánh xu thế phát triển của thời đại, phù hợp với quan điểm khoa học của chủ nghĩa Mác – Lênin.
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
