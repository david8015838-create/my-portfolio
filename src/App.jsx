import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, BadgeCheck, Code2, Briefcase, Mail } from "lucide-react";

const spring = { type: "spring", stiffness: 120, damping: 18 };
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: spring }
};

function Nav({ onMenu }) {
  return (
    <div className="fixed z-50 w-[92%] max-w-6xl left-1/2 -translate-x-1/2 mt-6 px-6 py-4 glass rounded-[24px] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-accent" />
        <div className="text-xl font-extrabold">Owen.</div>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
        <a href="#home" className="hover:text-white transition-all duration-500">首頁</a>
        <a href="#grid" className="hover:text-white transition-all duration-500">作品與技能</a>
        <a href="#contact" className="hover:text-white transition-all duration-500">聯絡</a>
      </div>
      <button onClick={onMenu} className="md:hidden px-4 py-2 rounded-full bg-white text-black text-xs font-bold transition-all duration-500 hover:opacity-90">選單</button>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen px-6 pt-32 md:pt-40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_60%)]" />
        <div className="absolute -top-20 right-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-extrabold tracking-tightest"
            >
              極簡．專注．實作
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-slate-400 mt-6 max-w-xl"
            >
              結合數據思維與產品化能力，打造精緻而高效的使用者體驗。
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#grid" className="px-8 py-3 rounded-full bg-white text-black font-bold inline-flex items-center gap-2 transition-all duration-500 hover:opacity-90 hover:translate-y-[-2px]">
                查看作品
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 text-white font-bold inline-flex items-center gap-2 transition-all duration-500 hover:bg-white/10 hover:translate-y-[-2px]">
                聯絡我
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <div className="glass rounded-full px-4 py-2 inline-flex items-center gap-2 text-sm text-slate-300 transition-all duration-500 hover:bg-white/10">
                <Code2 className="w-4 h-4 text-accent" />
                產品化實作
              </div>
              <div className="glass rounded-full px-4 py-2 inline-flex items-center gap-2 text-sm text-slate-300 transition-all duration-500 hover:bg-white/10">
                <Briefcase className="w-4 h-4 text-accent" />
                實戰專案
              </div>
              <div className="glass rounded-full px-4 py-2 inline-flex items-center gap-2 text-sm text-slate-300 transition-all duration-500 hover:bg-white/10">
                <BadgeCheck className="w-4 h-4 text-accent" />
                細節控
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass soft-shadow rounded-[24px] p-6">
              <div className="aspect-[4/3] rounded-[24px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_60%)] border border-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ className = "", children, href }) {
  const Wrapper = href ? "a" : "div";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={spring}
      className={`glass soft-shadow rounded-[24px] p-6 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 transition-all duration-500 ${className}`}
    >
      <Wrapper href={href} className="block">
        {children}
      </Wrapper>
    </motion.div>
  );
}

function BentoGrid() {
  return (
    <section id="grid" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-10">Bento</h2>
        <div className="bento">
          <BentoCard className="md:col-span-4 md:row-span-2">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="text-slate-300 text-sm">專案</div>
                <div className="text-2xl font-bold mt-2">Ledger App</div>
                <p className="text-slate-400 mt-2">極簡雲端記帳，專注體驗。</p>
              </div>
              <div className="mt-6">
                <a href="https://david8015838-create.github.io/ledger-app/" className="text-accent text-sm border-b border-accent transition-all duration-500 hover:text-white">點擊預覽</a>
              </div>
            </div>
          </BentoCard>
          <BentoCard className="md:col-span-2">
            <div>
              <div className="text-slate-300 text-sm">專案</div>
              <div className="text-xl font-bold mt-2">SplitWise Pro</div>
              <p className="text-slate-400 mt-2">雲端即時同步的分帳工具。</p>
              <div className="mt-4">
                <a href="https://david8015838-create.github.io/splitwise-pro/" className="text-accent text-sm border-b border-accent transition-all duration-500 hover:text-white">點擊預覽</a>
              </div>
            </div>
          </BentoCard>
          <BentoCard className="md:col-span-2">
            <div>
              <div className="text-slate-300 text-sm">專案</div>
              <div className="text-xl font-bold mt-2">StockLens</div>
              <p className="text-slate-400 mt-2">資產管理與複利試算。</p>
              <div className="mt-4">
                <a href="https://david8015838-create.github.io/stock-lens/" className="text-accent text-sm border-b border-accent transition-all duration-500 hover:text-white">點擊預覽</a>
              </div>
            </div>
          </BentoCard>
          <BentoCard className="md:col-span-4">
            <div className="flex items-center gap-4">
              <img src="/n8n.JPG" loading="lazy" className="w-24 h-24 object-cover rounded-[24px]" />
              <div>
                <div className="text-slate-300 text-sm">Workflow</div>
                <div className="text-xl font-bold">n8n 自動化流程</div>
                <p className="text-slate-400 mt-1">
                  每日爬取並摘要 AI 新聞，生成中英雙語與英練版寄送。
                </p>
              </div>
            </div>
          </BentoCard>
          <BentoCard className="md:col-span-3">
            <div>
              <div className="text-slate-300 text-sm">Experience</div>
              <div className="text-xl font-bold">淡江大學 國企系</div>
              <div className="mt-3 flex gap-3">
                <img src="/淡江畢業證書.JPG" loading="lazy" className="w-24 h-24 object-cover rounded-[24px] fade-in" onLoad={(e)=>e.currentTarget.classList.add('loaded')} />
              </div>
            </div>
          </BentoCard>
          <BentoCard className="md:col-span-3">
            <div>
              <div className="text-slate-300 text-sm">Experience</div>
              <div className="text-xl font-bold">CIA 語言學校</div>
              <div className="mt-3 flex gap-3">
                <img src="/Cebu internantional academy畢業證書.jpg" loading="lazy" className="w-24 h-24 object-cover rounded-[24px] fade-in" onLoad={(e)=>e.currentTarget.classList.add('loaded')} />
                <img src="/CIA獨立公開英文演講.JPG" loading="lazy" className="w-24 h-24 object-cover rounded-[24px] fade-in" onLoad={(e)=>e.currentTarget.classList.add('loaded')} />
                <img src="/CIA獨立公開英文演講2.PNG" loading="lazy" className="w-24 h-24 object-cover rounded-[24px] fade-in" onLoad={(e)=>e.currentTarget.classList.add('loaded')} />
              </div>
            </div>
          </BentoCard>
          <BentoCard className="md:col-span-3">
            <div>
              <div className="text-slate-300 text-sm">Google Career</div>
              <div className="mt-3 flex gap-3">
                <img src="/google_analytics.jpg" loading="lazy" className="w-24 h-24 object-cover rounded-[24px] fade-in" onLoad={(e)=>e.currentTarget.classList.add('loaded')} />
                <img src="/google_project_management.jpg" loading="lazy" className="w-24 h-24 object-cover rounded-[24px] fade-in" onLoad={(e)=>e.currentTarget.classList.add('loaded')} />
              </div>
            </div>
          </BentoCard>
          <BentoCard className="md:col-span-3">
            <div>
              <div className="text-slate-300 text-sm">Finance Certificates</div>
              <div className="mt-3 flex gap-3">
                <img src="/credit.jpg" loading="lazy" className="w-24 h-24 object-cover rounded-[24px] fade-in" onLoad={(e)=>e.currentTarget.classList.add('loaded')} />
                <img src="/trust.jpg" loading="lazy" className="w-24 h-24 object-cover rounded-[24px] fade-in" onLoad={(e)=>e.currentTarget.classList.add('loaded')} />
                <img src="/audit.jpg" loading="lazy" className="w-24 h-24 object-cover rounded-[24px] fade-in" onLoad={(e)=>e.currentTarget.classList.add('loaded')} />
              </div>
            </div>
          </BentoCard>
          <BentoCard className="md:col-span-3">
            <div>
              <div className="text-slate-300 text-sm">Language</div>
              <div className="mt-3 flex gap-3">
                <img src="/toeic.jpg" loading="lazy" className="w-24 h-24 object-cover rounded-[24px] fade-in" onLoad={(e)=>e.currentTarget.classList.add('loaded')} />
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-6xl mx-auto glass rounded-[24px] p-8 soft-shadow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-2xl font-extrabold">保持聯絡</div>
            <p className="text-slate-400 mt-2">Email: david8015838@gmail.com</p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:david8015838@gmail.com" className="px-6 py-3 rounded-full bg-white text-black font-bold transition-all duration-500 hover:opacity-90">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Nav onMenu={() => setMenuOpen(true)} />
      <Hero />
      <BentoGrid />
      <Footer />
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={spring}
            className="glass rounded-[24px] p-8 w-[90%] max-w-md"
          >
            <div className="text-xl font-extrabold mb-6">選單</div>
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-white">首頁</a>
              <a href="#grid" className="text-white">作品與技能</a>
              <a href="#contact" className="text-white">聯絡</a>
            </div>
            <div className="mt-8 flex justify-end">
              <button onClick={() => setMenuOpen(false)} className="px-6 py-3 rounded-full bg-white text-black font-bold">關閉</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
