import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SectionTransition = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-primary/5 drum-pattern-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">Phần 2</h2>
          <h3 className="text-xl md:text-3xl font-semibold text-foreground mb-4">
            Tính tất yếu và đặc điểm của thời kỳ quá độ lên CNXH
          </h3>
          <div className="section-divider w-32 mb-12" />
        </motion.div>

        {/* 2.1 */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-6">
            2.1. Tính tất yếu khách quan của thời kỳ quá độ
          </h4>
          <p className="text-sm text-muted-foreground mb-6 italic">(Giáo trình, tr. 104–106)</p>

          <div className="bg-card rounded-xl border border-border p-6 md:p-8 mb-6">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Học thuyết hình thái kinh tế – xã hội của chủ nghĩa Mác – Lênin đã chỉ rõ: lịch sử xã hội trải qua 5 hình thái: cộng sản nguyên thủy, chiếm hữu nô lệ, phong kiến, tư bản chủ nghĩa và cộng sản chủ nghĩa. Từ CHỦ NGHĨA TƯ BẢN lên CHỦ NGHĨA XÃ HỘI tất yếu phải trải qua thời kỳ quá độ chính trị.
            </p>
          </div>

          {/* Quotes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.blockquote
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-card rounded-xl border-l-4 border-accent p-6 md:p-8"
            >
              <p className="text-base md:text-lg italic leading-relaxed text-foreground mb-4">
                "Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kỳ cải biến cách mạng; nhà nước của thời kỳ ấy là nền chuyên chính cách mạng của giai cấp vô sản."
              </p>
              <footer className="text-sm font-semibold text-primary">
                — C. Mác (Toàn tập, t.19, tr.47)
              </footer>
            </motion.blockquote>

            <motion.blockquote
              variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-card rounded-xl border-l-4 border-primary p-6 md:p-8"
            >
              <p className="text-base md:text-lg italic leading-relaxed text-foreground mb-4">
                "Về lý luận, không thể nghi ngờ gì được rằng giữa chủ nghĩa tư bản và chủ nghĩa cộng sản, có một thời kỳ quá độ nhất định."
              </p>
              <footer className="text-sm font-semibold text-primary">
                — V.I. Lênin (Toàn tập, t.39, tr.309)
              </footer>
            </motion.blockquote>
          </div>

          <div className="bg-card rounded-xl border border-border p-6 md:p-8 mb-8">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Về xã hội của thời kỳ quá độ, C. Mác cho rằng đó là xã hội vừa thoát thai từ xã hội tư bản chủ nghĩa, xã hội chưa phát triển trên cơ sở của chính nó, còn mang nhiều dấu vết của xã hội cũ để lại, về mọi phương diện – kinh tế, đạo đức, tinh thần.
            </p>
            <p className="text-sm text-muted-foreground mt-3 italic">(Giáo trình, tr. 89; C. Mác và Ph. Ăngghen: Toàn tập, t.19, tr.33)</p>
          </div>

          {/* Two types of transition */}
          <h5 className="text-base md:text-xl font-semibold text-foreground mb-4">Hai loại quá độ:</h5>
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start bg-card rounded-xl border border-border p-6">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">1</span>
              <div>
                <h6 className="font-semibold text-base md:text-lg text-foreground mb-2">Quá độ trực tiếp</h6>
                <p className="text-base leading-relaxed text-foreground">
                  Từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đối với những nước đã trải qua chủ nghĩa tư bản phát triển. Cho đến nay thời kỳ quá độ trực tiếp lên chủ nghĩa cộng sản từ chủ nghĩa tư bản phát triển chưa từng diễn ra.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-card rounded-xl border border-border p-6">
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">2</span>
              <div>
                <h6 className="font-semibold text-base md:text-lg text-foreground mb-2">Quá độ gián tiếp</h6>
                <p className="text-base leading-relaxed text-foreground">
                  Từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đối với những nước chưa trải qua chủ nghĩa tư bản phát triển. Trên thế giới một thế kỷ qua, kể cả Liên Xô và các nước xã hội chủ nghĩa Đông Âu trước đây, Trung Quốc, Việt Nam và một số nước xã hội chủ nghĩa khác ngày nay, theo đúng lý luận Mác – Lênin, đều đang trải qua thời kỳ quá độ gián tiếp với những trình độ phát triển khác nhau.
                </p>
                <p className="text-sm text-muted-foreground mt-2 italic">(Giáo trình, tr. 105)</p>
              </div>
            </div>
          </div>

          <motion.blockquote
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-accent/10 rounded-xl border-l-4 border-accent p-6 md:p-8"
          >
            <p className="text-base md:text-lg italic leading-relaxed text-foreground mb-3">
              V.I. Lênin khẳng định: các nước lạc hậu với sự giúp đỡ của giai cấp vô sản các nước tiên tiến có thể tiến tới chủ nghĩa cộng sản, không nhất thiết phải trải qua giai đoạn phát triển tư bản chủ nghĩa.
            </p>
            <footer className="text-sm font-semibold text-primary">(V.I. Lênin: Toàn tập, t.41, tr.295)</footer>
          </motion.blockquote>
        </motion.div>

        {/* 2.2 */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-6">
            2.2. Điều kiện ra đời của Chủ nghĩa Xã hội
          </h4>
          <p className="text-sm text-muted-foreground mb-6 italic">(Giáo trình, tr. 90–92)</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border-2 border-accent/30 p-6 md:p-8">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-accent">a</span>
              </div>
              <h5 className="text-lg md:text-xl font-bold text-foreground mb-3">Điều kiện kinh tế</h5>
              <p className="text-base leading-relaxed text-foreground">
                Nhờ những bước tiến to lớn của lực lượng sản xuất, biểu hiện tập trung nhất là sự ra đời của công nghiệp cơ khí, chủ nghĩa tư bản đã tạo ra bước phát triển vượt bậc của lực lượng sản xuất. Tuy nhiên, trong xã hội tư bản chủ nghĩa, lực lượng sản xuất càng được cơ khí hóa, hiện đại hóa càng mang tính xã hội hóa cao, thì càng mâu thuẫn với quan hệ sản xuất tư bản chủ nghĩa dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa. Đây là mâu thuẫn kinh tế cơ bản dẫn đến sự diệt vong tất yếu của chủ nghĩa tư bản và sự ra đời của chủ nghĩa xã hội.
              </p>
              <p className="text-sm text-muted-foreground mt-3 italic">(Giáo trình, tr. 90–91)</p>
            </div>

            <div className="bg-card rounded-xl border-2 border-primary/30 p-6 md:p-8">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">b</span>
              </div>
              <h5 className="text-lg md:text-xl font-bold text-foreground mb-3">Điều kiện chính trị – xã hội</h5>
              <p className="text-base leading-relaxed text-foreground">
                Cùng với sự phát triển mạnh mẽ của nền đại công nghiệp cơ khí là sự trưởng thành vượt bậc cả về số lượng và chất lượng của giai cấp công nhân, con đẻ của nền đại công nghiệp. Sự phát triển của lực lượng sản xuất và sự trưởng thành của giai cấp công nhân là tiền đề kinh tế – xã hội dẫn tới sự sụp đổ không tránh khỏi của chủ nghĩa tư bản. Sự trưởng thành vượt bậc của giai cấp công nhân được đánh dấu bằng sự ra đời của Đảng Cộng sản, đội tiền phong của giai cấp công nhân, trực tiếp lãnh đạo cuộc đấu tranh chính trị của giai cấp công nhân chống giai cấp tư sản.
              </p>
              <p className="text-sm text-muted-foreground mt-3 italic">(Giáo trình, tr. 91–92)</p>
            </div>
          </div>
        </motion.div>

        {/* 2.3 */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-6">
            2.3. Những đặc trưng bản chất của CNXH theo Mác – Lênin
          </h4>
          <p className="text-sm text-muted-foreground mb-6 italic">(Giáo trình, tr. 93–103)</p>

          <p className="text-base md:text-lg leading-relaxed text-foreground mb-8 bg-card rounded-xl border border-border p-6">
            Căn cứ vào những dự báo của C. Mác và Ph. Ăngghen và những quan điểm của V.I. Lênin về chủ nghĩa xã hội ở nước Nga Xôviết, có thể khái quát những đặc trưng cơ bản của chủ nghĩa xã hội như sau:
          </p>

          <div className="space-y-4">
            {[
              { num: 1, text: "CNXH giải phóng giai cấp, giải phóng dân tộc, giải phóng xã hội, giải phóng con người, tạo điều kiện để con người phát triển toàn diện. Đây là sự khác biệt về chất so với các hình thái kinh tế – xã hội trước. (tr. 93–95)" },
              { num: 2, text: "CNXH có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất được phân phối chủ yếu theo lao động. V.I. Lênin cho rằng \"Từ CHỦ NGHĨA TƯ BẢN, nhân loại chỉ có thể tiến thẳng lên CHỦ NGHĨA XÃ HỘI, nghĩa là lên chế độ công hữu về các tư liệu sản xuất và chế độ phân phối sản phẩm theo lao động của mỗi người.\" (V.I. Lênin: Toàn tập, t.31, tr.220). (tr. 95–97)" },
              { num: 3, text: "CNXH là chế độ xã hội do nhân dân lao động làm chủ. (tr. 98)" },
              { num: 4, text: "CNXH có nhà nước kiểu mới mang bản chất giai cấp công nhân, đại diện cho lợi ích, quyền lực và ý chí của nhân dân lao động. (tr. 98–99)" },
              { num: 5, text: "CNXH có nền văn hóa phát triển cao, kế thừa và phát huy những giá trị của văn hóa dân tộc và tinh hoa văn hóa nhân loại. (tr. 100–101)" },
              { num: 6, text: "CNXH bảo đảm bình đẳng, đoàn kết giữa các dân tộc và có quan hệ hữu nghị, hợp tác với nhân dân các nước trên thế giới. (tr. 101–103)" },
            ].map((item) => (
              <motion.div
                key={item.num}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {item.num}
                </span>
                <p className="text-base md:text-lg leading-relaxed text-foreground pt-1">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 2.4 */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-6">
            2.4. Đặc điểm của thời kỳ quá độ lên CNXH
          </h4>
          <p className="text-sm text-muted-foreground mb-4 italic">(Giáo trình, tr. 107–109)</p>
          <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
            Thực chất là thời kỳ cải biến cách mạng sâu sắc, triệt để từ xã hội tiền tư bản chủ nghĩa và tư bản chủ nghĩa sang xã hội chủ nghĩa. Có thể khái quát những đặc điểm cơ bản như sau:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "a) Lĩnh vực kinh tế",
                content: "Tất yếu tồn tại nền kinh tế nhiều thành phần, trong đó có thành phần đối lập. Lênin chỉ rõ ở Nga tồn tại 5 thành phần: kinh tế gia trưởng; kinh tế hàng hóa nhỏ; kinh tế tư bản; kinh tế tư bản nhà nước; kinh tế XHCN. (V.I. Lênin: Toàn tập, t.36, tr.362) (Giáo trình, tr. 107–108)",
                color: "accent",
              },
              {
                title: "b) Lĩnh vực chính trị",
                content: "Thiết lập và tăng cường chuyên chính vô sản – giai cấp công nhân nắm quyền lực nhà nước, trấn áp giai cấp tư sản, xây dựng xã hội không giai cấp. Đây là sự thống trị về chính trị của giai cấp công nhân với chức năng thực hiện dân chủ đối với nhân dân, tổ chức xây dựng và bảo vệ chế độ mới. (Giáo trình, tr. 108)",
                color: "primary",
              },
              {
                title: "c) Lĩnh vực tư tưởng – văn hóa",
                content: "Còn tồn tại nhiều tư tưởng (chủ yếu: tư tưởng vô sản và tư tưởng tư sản). Giai cấp công nhân thông qua đội tiền phong của mình là Đảng Cộng sản từng bước xây dựng văn hóa vô sản, nền văn hóa mới xã hội chủ nghĩa, tiếp thu giá trị văn hóa dân tộc và tinh hoa nhân loại. (Giáo trình, tr. 108–109)",
                color: "gold-dark",
              },
              {
                title: "d) Lĩnh vực xã hội",
                content: "Do kết cấu của nền kinh tế nhiều thành phần quy định nên trong thời kỳ quá độ còn tồn tại nhiều giai cấp, tầng lớp và sự khác biệt giữa các giai cấp tầng lớp xã hội, các giai cấp, tầng lớp vừa hợp tác, vừa đấu tranh với nhau. Trong xã hội của thời kỳ quá độ còn tồn tại sự khác biệt giữa nông thôn, thành thị, giữa lao động trí óc và lao động chân tay. (Giáo trình, tr. 109)",
                color: "brown",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border p-6 md:p-8"
              >
                <h5 className="text-lg md:text-xl font-bold text-foreground mb-3">{item.title}</h5>
                <p className="text-base leading-relaxed text-foreground">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 2.5 - Đặc điểm xuất phát điểm VN */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h4 className="text-lg md:text-2xl font-semibold text-gold-dark mb-6">
            e) Đặc điểm xuất phát điểm của Việt Nam
          </h4>
          <p className="text-sm text-muted-foreground mb-6 italic">(Giáo trình, tr. 109–110)</p>
          <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">
            Việt Nam tiến lên chủ nghĩa xã hội trong điều kiện vừa thuận lợi vừa khó khăn đan xen, với những đặc trưng cơ bản sau đây:
          </p>

          <div className="space-y-4">
            {[
              "Xuất phát từ một xã hội vốn là thuộc địa, nửa phong kiến, lực lượng sản xuất rất thấp. Đất nước trải qua chiến tranh ác liệt, kéo dài nhiều thập kỷ, hậu quả để lại còn nặng nề. Những tàn dư thực dân, phong kiến còn nhiều. Các thế lực thù địch thường xuyên tìm cách phá hoại chế độ xã hội chủ nghĩa và nền độc lập dân tộc của nhân dân ta.",
              "Cuộc cách mạng khoa học và công nghệ hiện đại đang diễn ra mạnh mẽ, cuốn hút tất cả các nước ở mức độ khác nhau. Nền sản xuất vật chất và đời sống xã hội đang trong quá trình quốc tế hóa sâu sắc, ảnh hưởng lớn tới nhịp độ phát triển lịch sử và cuộc sống các dân tộc. Những xu thế đó vừa tạo thời cơ phát triển nhanh cho các nước, vừa đặt ra những thách thức gay gắt.",
              "Thời đại ngày nay vẫn là thời đại quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội, cho dù chế độ xã hội chủ nghĩa ở Liên Xô và Đông Âu sụp đổ. Các nước với chế độ xã hội và trình độ phát triển khác nhau cùng tồn tại, vừa hợp tác vừa đấu tranh, cạnh tranh gay gắt vì lợi ích quốc gia, dân tộc.",
            ].map((text, i) => (
              <div key={i} className="flex gap-4 items-start bg-accent/10 rounded-xl p-6">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-base md:text-lg leading-relaxed text-foreground">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionTransition;
