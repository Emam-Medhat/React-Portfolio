import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function BackendCodeShowcase() {
  const { t, language, isRtl } = useLanguage();

  return (
    <div className="relative mx-auto w-full max-w-2xl px-4 py-16">
      {/* Main Window */}
      <motion.div
        className="relative rounded-[20px] bg-[#0f111a] p-8 shadow-2xl border border-white/5"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Top Window Bar */}
        <div className={`mb-8 flex items-center gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className={`flex gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className={`${isRtl ? 'mr-4' : 'ml-4'} text-xs font-semibold text-[#5c6370] font-mono`}>PropertyController.php</span>
        </div>

        {/* Code Content */}
        <div className={isRtl ? 'text-right' : 'text-left'}>
          <pre className="text-sm leading-relaxed md:text-base font-mono overflow-x-auto whitespace-pre-wrap">
            <code>
              <span className="text-[#ff79c6]">class</span> <span className="text-[#50fa7b]">PropertyController</span> <span className="text-[#ff79c6]">extends</span> <span className="text-[#50fa7b]">Controller</span>
              <br />
              <span className="text-[#f8f8f2]">{'{'}</span>
              <br />
              <span className="text-[#ff79c6]">    public function</span> <span className="text-[#50fa7b]">index</span><span className="text-[#f8f8f2]">(</span><span className="text-[#8be9fd]">Request</span> <span className="text-[#bd93f9]">$request</span><span className="text-[#f8f8f2]">)</span>
              <br />
              <span className="text-[#f8f8f2]">    {'{'}</span>
              <br />
              <span className="text-[#ff79c6]">        return</span> <span className="text-[#50fa7b]">Property</span><span className="text-[#ff79c6]">::</span><span className="text-[#8be9fd]">query</span><span className="text-[#f8f8f2]">()</span>
              <br />
              <span className="text-[#ff79c6]">            -&gt;</span><span className="text-[#8be9fd]">withAvgRating</span><span className="text-[#f8f8f2]">()</span>
              <br />
              <span className="text-[#ff79c6]">            -&gt;</span><span className="text-[#8be9fd]">withLocationData</span><span className="text-[#f8f8f2]">()</span>
              <br />
              <span className="text-[#ff79c6]">            -&gt;</span><span className="text-[#8be9fd]">when</span><span className="text-[#f8f8f2]">(</span><span className="text-[#bd93f9]">$request</span><span className="text-[#ff79c6]">-&gt;</span><span className="text-[#8be9fd]">has</span><span className="text-[#f8f8f2]">(</span><span className="text-[#f1fa8c]">'ai_price'</span><span className="text-[#f8f8f2]">),</span>
              <br />
              <span className="text-[#ff79c6]">                fn</span><span className="text-[#f8f8f2]">(</span><span className="text-[#bd93f9]">$q</span><span className="text-[#f8f8f2]">) </span><span className="text-[#ff79c6]">=&gt;</span> <span className="text-[#bd93f9]">$q</span><span className="text-[#ff79c6]">-&gt;</span><span className="text-[#8be9fd]">withAiValuation</span><span className="text-[#f8f8f2]">()</span>
              <br />
              <span className="text-[#f8f8f2]">            )</span>
              <br />
              <span className="text-[#ff79c6]">            -&gt;</span><span className="text-[#8be9fd]">cache</span><span className="text-[#f8f8f2]">(</span><span className="text-[#bd93f9]">300</span><span className="text-[#f8f8f2]">) </span><span className="text-[#6272a4]">// 5-min Redis TTL</span>
              <br />
              <span className="text-[#ff79c6]">            -&gt;</span><span className="text-[#8be9fd]">paginate</span><span className="text-[#f8f8f2]">(</span><span className="text-[#bd93f9]">20</span><span className="text-[#f8f8f2]">);</span>
              <br />
              <span className="text-[#f8f8f2]">    {'}'}</span>
              <br /><br />
              <span className="text-[#ff79c6]">    public function</span> <span className="text-[#50fa7b]">tokenize</span><span className="text-[#f8f8f2]">(</span><span className="text-[#50fa7b]">Property</span> <span className="text-[#bd93f9]">$property</span><span className="text-[#f8f8f2]">)</span>
              <br />
              <span className="text-[#f8f8f2]">    {'{'}</span>
              <br />
              <span className="text-[#6272a4]">        // Blockchain tokenization</span>
              <br />
              <span className="text-[#f8f8f2]">        </span><span className="text-[#50fa7b]">TokenizationJob</span><span className="text-[#ff79c6]">::</span><span className="text-[#8be9fd]">dispatch</span><span className="text-[#f8f8f2]">(</span><span className="text-[#bd93f9]">$property</span><span className="text-[#f8f8f2]">)</span>
              <br />
              <span className="text-[#ff79c6]">            -&gt;</span><span className="text-[#8be9fd]">onQueue</span><span className="text-[#f8f8f2]">(</span><span className="text-[#f1fa8c]">'blockchain'</span><span className="text-[#f8f8f2]">);</span>
              <br />
              <span className="text-[#f8f8f2]">    {'}'}</span>
              <br />
              <span className="text-[#f8f8f2]">{'}'}</span>
            </code>
          </pre>
        </div>

        {/* Floating Badges */}
        <motion.div
          className={`absolute rounded-xl border border-white/10 bg-[#161b22]/90 px-5 py-4 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20 ${isRtl ? '-left-6 -top-6 lg:-left-10' : '-right-6 -top-6 lg:-right-10'}`}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className={`flex items-center gap-2 mb-1 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
              <span className="text-[#ff7b72] text-sm">⚡</span>
              <span className="text-xs font-semibold text-[#8b949e]">
                {language === 'en' ? 'Query time' : 'وقت الاستعلام'}
              </span>
            </div>
            <div className={`text-xl font-bold text-[#b392f0] ${isRtl ? 'text-right' : ''}`}>3ms</div>
          </motion.div>
        </motion.div>

        <motion.div
          className={`absolute bottom-32 lg:bottom-40 rounded-xl border border-white/10 bg-[#161b22]/90 px-5 py-4 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20 ${isRtl ? '-right-6 lg:-right-12' : '-left-6 lg:-left-12'}`}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            <div className={`flex items-center gap-2 mb-1 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
              <span className="text-[#f2cc60] text-sm">🔒</span>
              <span className="text-xs font-semibold text-[#8b949e]">
                {language === 'en' ? 'Auth' : 'المصادقة'}
              </span>
            </div>
            <div className={`text-base font-black text-white ${isRtl ? 'text-right' : ''}`}>JWT + RBAC</div>
          </motion.div>
        </motion.div>

        <motion.div
          className={`absolute rounded-xl border border-white/10 bg-[#161b22]/90 px-5 py-4 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20 ${isRtl ? '-left-6 -bottom-6 lg:-left-8' : '-right-6 -bottom-6 lg:-right-8'}`}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <div className={`flex items-center gap-2 mb-1 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
              <span className="text-[#c9d1d9] text-sm">✓</span>
              <span className="text-xs font-semibold text-[#8b949e]">
                {language === 'en' ? 'Coverage' : 'التغطية'}
              </span>
            </div>
            <div className={`text-lg font-bold text-[#b392f0] ${isRtl ? 'text-right' : ''}`}>80%+</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
