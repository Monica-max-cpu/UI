import { ChevronDown, FileText, Stethoscope, Smartphone, ChevronRight, Moon, Sun, Coffee, Utensils, Smile, Meh, Frown, Sparkles } from "lucide-react";
import { useState } from "react";

export function Health() {
  const [sleepStart, setSleepStart] = useState("22:30");
  const [sleepEnd, setSleepEnd] = useState("06:30");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [currentMood, setCurrentMood] = useState<"happy" | "neutral" | "sad" | null>(null);
  const [todayMood, setTodayMood] = useState<"happy" | "neutral" | "sad" | null>(null);

  return (
    <div className="flex flex-col min-h-full pb-8 bg-[#FFFCF8] text-[#303030]">
      {/* BMI Header */}
      <header className="px-6 pt-12 pb-4 flex justify-between items-center">
        <h1 className="text-2xl font-normal text-[#303030]">BMI 计算器</h1>
        <button className="flex items-center gap-2 border border-[#E8E7E7] rounded-xl px-4 py-2 text-sm text-[#6A6969] bg-white">
          上周 <ChevronDown size={16} />
        </button>
      </header>

      {/* Main BMI Card */}
      <section className="px-5 mt-4">
        <div className="bg-white rounded-2xl p-6 relative border border-[#E8E7E7] shadow-[0_1px_50px_rgba(0,0,0,0.08)]">
          <h2 className="text-base font-normal text-[#303030] mb-2">身体质量指数（BMI）</h2>
          <div className="flex items-end justify-between mb-8">
            <span className="text-3xl font-normal text-[#272927]">24.9</span>
            <div className="bg-[#D6FFDD] text-[#272927] text-xs px-3 py-1.5 rounded-lg mb-1">
              健康状态良好
            </div>
          </div>

          {/* Gradient Bar */}
          <div className="relative h-3.5 rounded-full w-full bg-gradient-to-r from-[#B5D4F1] via-[#81E6DB] via-[#E8D284] to-[#E2798E] mb-2">
            <div className="absolute left-[65%] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#D16564] border-2 border-white rounded-full shadow-sm" />
          </div>

          {/* Scale Labels */}
          <div className="flex justify-between text-xs font-bold text-[#303030] px-1">
            <span>15</span>
            <span>18.5</span>
            <span>25</span>
            <span>30</span>
            <span>40</span>
          </div>
        </div>
      </section>

      {/* Height and Weight Cards - Moved here */}
      <section className="px-5 mt-6 grid grid-cols-2 gap-4">
        {/* Height Card */}
        <div className="bg-[#F8DEBD] rounded-xl p-5 flex flex-col justify-center text-[#272927] relative overflow-hidden h-[90px]">
          <span className="text-base font-normal">身高</span>
          <span className="text-base font-normal mt-1">170 厘米</span>
          {/* Decorative Scale */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 h-6">
            <div className="w-[2px] h-3 bg-black/30 rounded-full" />
            <div className="w-[2px] h-3 bg-black/40 rounded-full" />
            <div className="w-[2px] h-3 bg-black/70 rounded-full" />
            <div className="w-[2px] h-6 bg-[#D16564] rounded-full" />
            <div className="w-[2px] h-3 bg-[#282828] rounded-full" />
            <div className="w-[2px] h-3 bg-[#282828] rounded-full" />
            <div className="w-[2px] h-3 bg-[#282828] rounded-full" />
          </div>
        </div>

        {/* Weight Card */}
        <div className="bg-[#D0FBFF] rounded-xl p-5 flex flex-col justify-center text-[#272927] relative overflow-hidden h-[90px]">
          <span className="text-base font-normal">体重</span>
          <span className="text-base font-normal mt-1">72 公斤</span>
          {/* Decorative Scale */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 h-6">
            <div className="w-[2px] h-3 bg-black/30 rounded-full" />
            <div className="w-[2px] h-3 bg-black/40 rounded-full" />
            <div className="w-[2px] h-3 bg-black/70 rounded-full" />
            <div className="w-[2px] h-6 bg-[#D16564] rounded-full" />
            <div className="w-[2px] h-3 bg-[#282828] rounded-full" />
            <div className="w-[2px] h-3 bg-[#282828] rounded-full" />
            <div className="w-[2px] h-3 bg-[#282828] rounded-full" />
          </div>
        </div>
      </section>

      {/* Sleep Record */}
      <section className="px-5 mt-8">
        <h2 className="text-[22px] font-normal text-[#303030] mb-4">睡眠记录</h2>
        <div className="bg-white rounded-2xl p-5 border border-[#E8E7E7] shadow-[0_1px_50px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#D0FBFF] rounded-xl flex items-center justify-center">
              <Moon size={24} className="text-[#272927]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#303030]">今日睡眠</p>
              <p className="text-xs text-[#818181]">记录您的睡眠时间</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <label className="text-sm text-[#303030] w-20">入睡时间</label>
              <input
                type="time"
                value={sleepStart}
                onChange={(e) => setSleepStart(e.target.value)}
                className="flex-1 px-4 py-2 border border-[#E8E7E7] rounded-lg text-sm bg-[#FFFCF8] text-[#303030]"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm text-[#303030] w-20">起床时间</label>
              <input
                type="time"
                value={sleepEnd}
                onChange={(e) => setSleepEnd(e.target.value)}
                className="flex-1 px-4 py-2 border border-[#E8E7E7] rounded-lg text-sm bg-[#FFFCF8] text-[#303030]"
              />
            </div>
          </div>
          <button className="mt-4 w-full bg-[#F8DEBD] text-[#272927] py-2.5 rounded-lg text-sm font-medium active:scale-[0.98] transition-transform">
            保存记录
          </button>
        </div>
      </section>

      {/* Diet Record */}
      <section className="px-5 mt-6">
        <h2 className="text-[22px] font-normal text-[#303030] mb-4">饮食记录</h2>
        <div className="bg-white rounded-2xl p-5 border border-[#E8E7E7] shadow-[0_1px_50px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#F8DEBD] rounded-xl flex items-center justify-center">
              <Utensils size={24} className="text-[#272927]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#303030]">今日饮食</p>
              <p className="text-xs text-[#818181]">记录您的三餐内容</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FFF4E6] rounded-lg flex items-center justify-center">
                <Coffee size={16} className="text-[#F3A53F]" />
              </div>
              <input
                type="text"
                placeholder="早餐内容"
                value={breakfast}
                onChange={(e) => setBreakfast(e.target.value)}
                className="flex-1 px-4 py-2 border border-[#E8E7E7] rounded-lg text-sm bg-[#FFFCF8] text-[#303030] placeholder:text-[#C4C4C4]"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FFF4E6] rounded-lg flex items-center justify-center">
                <Sun size={16} className="text-[#F3A53F]" />
              </div>
              <input
                type="text"
                placeholder="午餐内容"
                value={lunch}
                onChange={(e) => setLunch(e.target.value)}
                className="flex-1 px-4 py-2 border border-[#E8E7E7] rounded-lg text-sm bg-[#FFFCF8] text-[#303030] placeholder:text-[#C4C4C4]"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FFF4E6] rounded-lg flex items-center justify-center">
                <Moon size={16} className="text-[#F3A53F]" />
              </div>
              <input
                type="text"
                placeholder="晚餐内容"
                value={dinner}
                onChange={(e) => setDinner(e.target.value)}
                className="flex-1 px-4 py-2 border border-[#E8E7E7] rounded-lg text-sm bg-[#FFFCF8] text-[#303030] placeholder:text-[#C4C4C4]"
              />
            </div>
          </div>
          <button className="mt-4 w-full bg-[#F8DEBD] text-[#272927] py-2.5 rounded-lg text-sm font-medium active:scale-[0.98] transition-transform">
            保存记录
          </button>
        </div>
      </section>

      {/* Mood Record */}
      <section className="px-5 mt-6">
        <h2 className="text-[22px] font-normal text-[#303030] mb-4">情绪记录</h2>
        <div className="bg-white rounded-2xl p-5 border border-[#E8E7E7] shadow-[0_1px_50px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#FFE6F0] rounded-xl flex items-center justify-center">
              <Smile size={24} className="text-[#E2798E]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#303030]">今日心情</p>
              <p className="text-xs text-[#818181]">记录您的情绪状态</p>
            </div>
          </div>
          
          {/* Current Mood */}
          <div className="mb-4">
            <p className="text-sm text-[#303030] mb-2">记录当下感受</p>
            <div className="flex gap-3">
              <button
                onClick={() => setCurrentMood("happy")}
                className={`flex-1 py-3 rounded-lg border-2 transition-all ${
                  currentMood === "happy" ? "border-[#90DF9E] bg-[#F0FFF3]" : "border-[#E8E7E7] bg-white"
                }`}
              >
                <Smile size={24} className={`mx-auto ${currentMood === "happy" ? "text-[#90DF9E]" : "text-[#C4C4C4]"}`} />
                <p className="text-xs mt-1 text-[#303030]">开心</p>
              </button>
              <button
                onClick={() => setCurrentMood("neutral")}
                className={`flex-1 py-3 rounded-lg border-2 transition-all ${
                  currentMood === "neutral" ? "border-[#F3A53F] bg-[#FFF4E6]" : "border-[#E8E7E7] bg-white"
                }`}
              >
                <Meh size={24} className={`mx-auto ${currentMood === "neutral" ? "text-[#F3A53F]" : "text-[#C4C4C4]"}`} />
                <p className="text-xs mt-1 text-[#303030]">平静</p>
              </button>
              <button
                onClick={() => setCurrentMood("sad")}
                className={`flex-1 py-3 rounded-lg border-2 transition-all ${
                  currentMood === "sad" ? "border-[#E2798E] bg-[#FFE6F0]" : "border-[#E8E7E7] bg-white"
                }`}
              >
                <Frown size={24} className={`mx-auto ${currentMood === "sad" ? "text-[#E2798E]" : "text-[#C4C4C4]"}`} />
                <p className="text-xs mt-1 text-[#303030]">低落</p>
              </button>
            </div>
          </div>

          {/* Today Overall Mood */}
          <div>
            <p className="text-sm text-[#303030] mb-2">记录今天整体感受</p>
            <div className="flex gap-3">
              <button
                onClick={() => setTodayMood("happy")}
                className={`flex-1 py-3 rounded-lg border-2 transition-all ${
                  todayMood === "happy" ? "border-[#90DF9E] bg-[#F0FFF3]" : "border-[#E8E7E7] bg-white"
                }`}
              >
                <Smile size={24} className={`mx-auto ${todayMood === "happy" ? "text-[#90DF9E]" : "text-[#C4C4C4]"}`} />
                <p className="text-xs mt-1 text-[#303030]">开心</p>
              </button>
              <button
                onClick={() => setTodayMood("neutral")}
                className={`flex-1 py-3 rounded-lg border-2 transition-all ${
                  todayMood === "neutral" ? "border-[#F3A53F] bg-[#FFF4E6]" : "border-[#E8E7E7] bg-white"
                }`}
              >
                <Meh size={24} className={`mx-auto ${todayMood === "neutral" ? "text-[#F3A53F]" : "text-[#C4C4C4]"}`} />
                <p className="text-xs mt-1 text-[#303030]">平静</p>
              </button>
              <button
                onClick={() => setTodayMood("sad")}
                className={`flex-1 py-3 rounded-lg border-2 transition-all ${
                  todayMood === "sad" ? "border-[#E2798E] bg-[#FFE6F0]" : "border-[#E8E7E7] bg-white"
                }`}
              >
                <Frown size={24} className={`mx-auto ${todayMood === "sad" ? "text-[#E2798E]" : "text-[#C4C4C4]"}`} />
                <p className="text-xs mt-1 text-[#303030]">低落</p>
              </button>
            </div>
          </div>
          
          <button className="mt-4 w-full bg-[#F8DEBD] text-[#272927] py-2.5 rounded-lg text-sm font-medium active:scale-[0.98] transition-transform">
            保存记录
          </button>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-5 mt-8 space-y-3 pb-8">
        {/* AI Analysis Button - NEW */}
        <button className="w-full bg-gradient-to-r from-[#F8DEBD] to-[#FFE6F0] rounded-2xl p-4 flex items-center justify-between border border-[#E8E7E7] active:scale-[0.98] transition-transform shadow-[0_1px_20px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#F3A53F]">
              <Sparkles size={20} />
            </div>
            <div className="text-left">
              <p className="font-medium text-[#272927] text-sm">AI 健康分析</p>
              <p className="text-xs text-[#6A6969] mt-0.5">基于睡眠、饮食、情绪数据的智能建议</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-[#6A6969]" />
        </button>

        <button className="w-full bg-gradient-to-r from-[#D0FBFF] to-[#E8DEBD] rounded-2xl p-4 flex items-center justify-between border border-[#E8E7E7] active:scale-[0.98] transition-transform shadow-[0_1px_20px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#3b82f6]">
              <FileText size={20} />
            </div>
            <div className="text-left">
              <p className="font-medium text-[#272927] text-sm">综合健康报告</p>
              <p className="text-xs text-[#6A6969] mt-0.5">查看各项指标历史趋势</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-[#6A6969]" />
        </button>

        <button className="w-full bg-gradient-to-r from-[#FFE6F0] to-[#E8D4F1] rounded-2xl p-4 flex items-center justify-between border border-[#E8E7E7] active:scale-[0.98] transition-transform shadow-[0_1px_20px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#E2798E]">
              <Stethoscope size={20} />
            </div>
            <div className="text-left">
              <p className="font-medium text-[#272927] text-sm">在线健康咨询</p>
              <p className="text-xs text-[#6A6969] mt-0.5">由专业医生为您解答疑问</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-[#6A6969]" />
        </button>
      </section>
    </div>
  );
}