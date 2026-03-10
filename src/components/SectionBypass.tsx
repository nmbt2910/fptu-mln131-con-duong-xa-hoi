import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SectionBypass = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">Phần 3</h2>
          <h3 className="text-xl md:text-3xl font-semibold text-foreground mb-4">
            Đặc điểm bỏ qua chế độ Tư bản Chủ nghĩa ở Việt Nam
          </h3>
          <p className="text-sm text-muted-foreground mb-4 italic">(Giáo trình, tr. 110–112)</p>
          <div className="section-divider w-32 mb-12" />
        </motion.div>

        {/* 3.1 Khái niệm */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-6">3.1. Khái niệm</h4>
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 md:p-8">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              "Bỏ qua chế độ tư bản chủ nghĩa" không có nghĩa là phủ nhận hoàn toàn những thành tựu của chủ nghĩa tư bản. Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là sự lựa chọn con đường phát triển phù hợp với điều kiện lịch sử cụ thể của Việt Nam.
            </p>
          </div>
        </motion.div>

        {/* 3.2 Nội dung */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-6">3.2. Nội dung của việc bỏ qua TBCN</h4>
          <p className="text-base md:text-lg text-foreground mb-8">Tư tưởng này cần được hiểu đầy đủ với bốn nội dung sau đây:</p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {[
                {
                  label: "Thứ nhất",
                  text: "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là con đường cách mạng tất yếu khách quan, con đường xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta.",
                },
                {
                  label: "Thứ hai",
                  text: "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa, tức là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa. Trong thời kỳ quá độ vẫn còn nhiều hình thức sở hữu, nhiều thành phần kinh tế, nhưng sở hữu tư nhân tư bản chủ nghĩa và thành phần kinh tế tư nhân tư bản chủ nghĩa không chiếm vai trò chủ đạo; thời kỳ quá độ còn nhiều hình thức phân phối, ngoài phân phối theo lao động vẫn là chủ đạo còn phân phối theo mức độ đóng góp và quỹ phúc lợi xã hội.",
                },
                {
                  label: "Thứ ba",
                  text: "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa đòi hỏi phải tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt được dưới chủ nghĩa tư bản, đặc biệt là những thành tựu về khoa học và công nghệ, thành tựu về quản lý phát triển xã hội, đặc biệt là xây dựng nền kinh tế hiện đại, phát triển nhanh lực lượng sản xuất.",
                },
                {
                  label: "Thứ tư",
                  text: "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là tạo ra sự biến đổi về chất của xã hội trên tất cả các lĩnh vực, là sự nghiệp rất khó khăn, phức tạp, lâu dài với nhiều chặng đường, nhiều hình thức tổ chức kinh tế, xã hội có tính chất quá độ đòi hỏi phải có quyết tâm chính trị cao và khát vọng lớn của toàn Đảng, toàn dân.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative md:pl-16"
                >
                  <div className="hidden md:flex absolute left-0 w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold text-lg z-10">
                    {i + 1}
                  </div>
                  <div className="bg-card rounded-xl border border-border p-6 md:p-8">
                    <span className="inline-block md:hidden w-8 h-8 rounded-full bg-primary text-primary-foreground text-center leading-8 font-bold text-sm mr-3 mb-2">
                      {i + 1}
                    </span>
                    <span className="font-bold text-primary text-base md:text-lg">{item.label}: </span>
                    <span className="text-base md:text-lg leading-relaxed text-foreground">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3.3 Ý nghĩa */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-6">3.3. Ý nghĩa</h4>
          <div className="bg-accent/10 rounded-xl p-6 md:p-8 border border-accent/30">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Con đường này giúp Việt Nam tránh được những mâu thuẫn gay gắt của xã hội tư bản chủ nghĩa, tận dụng thành tựu nhân loại để phát triển nhanh hơn. Công cuộc Đổi mới (1986) là minh chứng điển hình: Việt Nam hội nhập sâu rộng với nền kinh tế thế giới, đạt nhiều thành tựu to lớn.
            </p>
            <p className="text-sm text-muted-foreground mt-3 italic">(Giáo trình, tr. 110–112)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionBypass;
