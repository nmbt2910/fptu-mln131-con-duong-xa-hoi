import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SectionIntro = () => {
  const approaches = [
    {
      num: "01",
      title: "Phong trào thực tiễn",
      desc: "Phong trào đấu tranh của nhân dân lao động chống lại áp bức, bất công, chống các giai cấp thống trị.",
    },
    {
      num: "02",
      title: "Trào lưu tư tưởng",
      desc: "Lý luận phản ánh lý tưởng giải phóng nhân dân lao động khỏi áp bức, bóc lột, bất công.",
    },
    {
      num: "03",
      title: "Một khoa học",
      desc: "Chủ nghĩa xã hội khoa học là khoa học về sứ mệnh lịch sử của giai cấp công nhân.",
    },
    {
      num: "04",
      title: "Chế độ xã hội tốt đẹp",
      desc: "Giai đoạn đầu của hình thái kinh tế – xã hội cộng sản chủ nghĩa.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">Phần 1</h2>
          <h3 className="text-xl md:text-3xl font-semibold text-foreground mb-4">
            Giới thiệu về Chủ nghĩa Xã hội
          </h3>
          <div className="section-divider w-32 mb-8" />
        </motion.div>

        <motion.h4
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-lg md:text-2xl font-semibold text-gold-dark mb-8"
        >
          1.1. Các góc độ tiếp cận Chủ nghĩa Xã hội
        </motion.h4>

        <p className="text-sm text-muted-foreground mb-6 italic">(Giáo trình, tr. 86–87)</p>

        {/* Horizontal card strip — unique to this section */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {approaches.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 bg-card rounded-2xl border border-border p-6 relative overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-gold-dark opacity-30 group-hover:opacity-60 transition-opacity" />
              <span className="text-4xl font-black text-primary/40 select-none block mb-2">
                {item.num}
              </span>
              <h5 className="text-lg md:text-xl font-bold text-primary mb-2">{item.title}</h5>
              <p className="text-base leading-relaxed text-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 md:p-8 mb-8"
        >
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            Theo quan điểm của chủ nghĩa Mác – Lênin, sau khi giai cấp công nhân giành được chính quyền thì xã hội sẽ trải qua một thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-card rounded-xl border border-border p-6 md:p-8"
        >
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            Ở Việt Nam, Đảng ta xác định: Việt Nam quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa, xuất phát từ đặc điểm lịch sử và điều kiện thực tế của đất nước. Sau gần 40 năm thực hiện công cuộc Đổi mới (tháng 12/1986 đến tháng 3/2026), Việt Nam đã đạt được nhiều thành tựu quan trọng, từng bước xây dựng nền kinh tế phát triển và nâng cao đời sống nhân dân.
          </p>
          <p className="text-sm text-muted-foreground mt-3 italic">(Giáo trình, tr. 109–110)</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionIntro;
