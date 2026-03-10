import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SectionDirections = () => {
  const sevenDirections = [
    "Xây dựng Nhà nước xã hội chủ nghĩa, Nhà nước của nhân dân, do nhân dân, vì nhân dân, lấy liên minh giai cấp công nhân với giai cấp nông dân và tầng lớp trí thức làm nền tảng, do Đảng Cộng sản lãnh đạo. Thực hiện đầy đủ quyền dân chủ của nhân dân, giữ nghiêm kỷ cương xã hội, chuyên chính với mọi hành động xâm phạm lợi ích của Tổ quốc và của nhân dân.",
    "Phát triển lực lượng sản xuất, công nghiệp hóa đất nước theo hướng hiện đại gắn liền với phát triển một nền nông nghiệp toàn diện là nhiệm vụ trung tâm nhằm từng bước xây dựng cơ sở vật chất – kỹ thuật của chủ nghĩa xã hội, không ngừng nâng cao năng suất lao động xã hội và cải thiện đời sống nhân dân.",
    "Phù hợp với sự phát triển của lực lượng sản xuất, thiết lập từng bước quan hệ sản xuất xã hội chủ nghĩa từ thấp đến cao với sự đa dạng về hình thức sở hữu. Phát triển nền kinh tế hàng hóa nhiều thành phần theo định hướng xã hội chủ nghĩa, vận hành theo cơ chế thị trường có sự quản lý của Nhà nước.",
    "Tiến hành cách mạng xã hội chủ nghĩa trên lĩnh vực tư tưởng và văn hóa làm cho thế giới quan Mác – Lênin và tư tưởng, đạo đức Hồ Chí Minh giữ vị trí chỉ đạo trong đời sống tinh thần xã hội. Kế thừa và phát huy những truyền thống văn hóa tốt đẹp của tất cả các dân tộc trong nước, tiếp thu tinh hoa văn hóa nhân loại.",
    "Thực hiện chính sách đại đoàn kết dân tộc, củng cố và mở rộng Mặt trận dân tộc thống nhất, tập hợp mọi lực lượng phấn đấu vì sự nghiệp dân giàu, nước mạnh. Thực hiện chính sách đối ngoại hòa bình, hợp tác và hữu nghị với tất cả các nước.",
    "Xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc là hai nhiệm vụ chiến lược của cách mạng Việt Nam. Trong khi đặt lên hàng đầu nhiệm vụ xây dựng đất nước, nhân dân ta luôn luôn nâng cao cảnh giác, củng cố quốc phòng, bảo vệ an ninh chính trị, trật tự an toàn xã hội.",
    "Xây dựng Đảng trong sạch, vững mạnh về chính trị, tư tưởng và tổ chức ngang tầm nhiệm vụ, bảo đảm cho Đảng làm tròn trách nhiệm lãnh đạo sự nghiệp cách mạng xã hội chủ nghĩa ở nước ta.",
  ];

  const eightRelations = [
    "Quan hệ giữa đổi mới, ổn định và phát triển.",
    "Quan hệ giữa đổi mới kinh tế và đổi mới chính trị.",
    "Quan hệ giữa kinh tế thị trường và định hướng xã hội chủ nghĩa.",
    "Quan hệ giữa phát triển lực lượng sản xuất và xây dựng, hoàn thiện quan hệ sản xuất xã hội chủ nghĩa.",
    "Quan hệ giữa tăng trưởng kinh tế và phát triển văn hóa, tiến bộ và công bằng xã hội.",
    "Quan hệ giữa xây dựng Chủ nghĩa Xã hội và bảo vệ Tổ quốc xã hội chủ nghĩa.",
    "Quan hệ giữa độc lập, tự chủ và hội nhập quốc tế.",
    "Quan hệ giữa Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ.",
  ];

  return (
    <section className="py-16 md:py-24 px-4 drum-pattern-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">Phần 5</h2>
          <h3 className="text-xl md:text-3xl font-semibold text-foreground mb-4">
            Phương hướng xây dựng Chủ nghĩa Xã hội ở Việt Nam và Kết luận
          </h3>
          <div className="section-divider w-32 mb-12" />
        </motion.div>

        {/* 5.1 — Zigzag / alternating layout */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-2">
            5.1. Bảy phương hướng cơ bản theo Cương lĩnh 1991
          </h4>
          <p className="text-sm text-muted-foreground mb-6 italic">(Giáo trình, tr. 114–116)</p>
          <p className="text-base md:text-lg text-foreground mb-8">
            Trên cơ sở bảy phương hướng cơ bản phản ánh con đường quá độ lên chủ nghĩa xã hội ở nước ta được xác định trong Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (1991):
          </p>

          <div className="space-y-4">
            {sevenDirections.map((d, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex gap-4 items-start p-5 md:p-6 rounded-xl border border-border ${i % 2 === 0 ? 'bg-card md:mr-12' : 'bg-secondary/20 md:ml-12'}`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-primary-foreground ${i % 2 === 0 ? 'bg-gold-dark' : 'bg-primary'}`}>
                  {i + 1}
                </div>
                <p className="text-base md:text-lg leading-relaxed text-foreground">{d}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 5.2 */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-2">
            5.2. Tám phương hướng theo Đại hội XI
          </h4>
          <p className="text-sm text-muted-foreground mb-6 italic">(Giáo trình, tr. 116–117)</p>
          <div className="bg-gradient-to-r from-card to-secondary/30 rounded-2xl border border-border p-6 md:p-8">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Đại hội XI đã kế thừa và phát triển bảy phương hướng cơ bản của Cương lĩnh 1991 thành tám phương hướng, phù hợp với tình hình mới, bổ sung thêm nội dung về hội nhập quốc tế và phát triển bền vững.
            </p>
          </div>
        </motion.div>

        {/* 5.3 — Grid of relation cards with icons */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-2">
            5.3. Tám mối quan hệ lớn cần nắm vững
          </h4>
          <p className="text-sm text-muted-foreground mb-6 italic">(Giáo trình, tr. 117 – Cương lĩnh 2011)</p>
          <p className="text-base md:text-lg text-foreground mb-8">
            Trong quá trình thực hiện các phương hướng cơ bản đó, trong Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (bổ sung, phát triển năm 2011), Đảng yêu cầu phải đặc biệt chú trọng nắm vững và giải quyết tốt tám mối quan hệ lớn:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {eightRelations.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-5 border border-border text-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mx-auto mb-3">
                  {i + 1}
                </div>
                <p className="text-sm md:text-base font-medium text-foreground leading-snug">{r}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-card rounded-xl border border-border p-6 md:p-8 mt-8">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Thực hiện tám phương hướng và giải quyết thành công các mối quan hệ lớn chính là đưa cách mạng nước ta theo đúng con đường phát triển quá độ lên Chủ nghĩa Xã hội bỏ qua chế độ Tư bản chủ nghĩa.
            </p>
            <p className="text-sm text-muted-foreground mt-3 italic">(Giáo trình, tr. 117)</p>
          </div>
        </motion.div>

        {/* 5.4 Liên hệ thực tiễn */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-6">
            5.4. Liên hệ thực tiễn
          </h4>
          <div className="relative bg-gradient-to-br from-accent/15 to-primary/10 rounded-2xl p-6 md:p-8 border border-accent/20">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Nhờ thực hiện các phương hướng trên, sau gần 40 năm đổi mới (tháng 12/1986 đến tháng 3/2026), Việt Nam đã đạt thành tựu to lớn, có ý nghĩa lịch sử: tăng trưởng kinh tế ổn định, đời sống nhân dân không ngừng được cải thiện, vị thế quốc tế ngày càng nâng cao.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionDirections;
