import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const GameSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 drum-pattern-bg star-pattern">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="bg-card rounded-2xl border-2 border-accent/40 p-8 md:p-12 shadow-lg">
            <div className="text-5xl md:text-6xl mb-6">🏆</div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Ai là triệu phú?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Thử thách kiến thức của bạn với trò chơi Ai là triệu phú! Các câu hỏi liên quan đến chủ đề môn Chủ nghĩa xã hội khoa học.
            </p>
            <a
              href="https://mini-game-flax.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
            >
              🎮 Chơi ngay
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GameSection;
