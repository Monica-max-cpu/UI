import { HeartPulse, Droplet, Activity, Calendar, Pill, Stethoscope, Utensils, Users, ChevronRight } from "lucide-react";
import { cn } from "../components/Layout";
import { LineChart, Line, AreaChart, Area, ResponsiveContainer, YAxis } from "recharts";

// Mock data for sparklines
const hrData = [{ v: 70 }, { v: 72 }, { v: 68 }, { v: 75 }, { v: 74 }, { v: 78 }, { v: 75 }];
const spo2Data = [{ v: 96 }, { v: 97 }, { v: 98 }, { v: 97 }, { v: 99 }, { v: 98 }, { v: 98 }];
const bpData = [{ v: 120 }, { v: 118 }, { v: 122 }, { v: 125 }, { v: 119 }, { v: 121 }, { v: 120 }];
const bsData = [{ v: 5.4 }, { v: 5.6 }, { v: 5.2 }, { v: 5.8 }, { v: 5.5 }, { v: 5.3 }, { v: 5.5 }];

export function Home() {
  return (
    <div className="flex flex-col min-h-full pb-8">
      {/* Header */}
      <header className="px-6 pt-12 pb-4">
        <h1 className="text-2xl font-bold text-[#303030]">上午好，李建国</h1>
        <p className="text-sm text-[#6A6969] mt-1">今天的天气很不错，适合出门走走哦！</p>
      </header>

      {/* Health Overview Card */}
      <section className="px-5 mb-6">
        <div className="flex justify-between items-center mb-4 px-1">
          <h2 className="text-lg font-bold text-[#303030]">健康概览</h2>
          <button className="text-sm text-emerald-600 font-medium flex items-center">
            详细报告 <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* BP Card */}
          <div className="bg-white rounded-xl p-3 shadow-[0_1px_50px_rgba(0,0,0,0.08)] border border-[#E8E7E7] flex flex-col relative overflow-hidden h-[168px]">
            {/* Status Dot - Top Right - Normal */}
            <div className="absolute top-3 right-3 w-2 h-2 bg-emerald-400 rounded-full"></div>
            
            {/* Header with Icon and Title */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-[46px] h-[46px] bg-[#F8DEBD] rounded-xl flex items-center justify-center">
                <HeartPulse size={20} className="text-[#E79B38]" />
              </div>
              <span className="font-semibold text-black text-[14px]">血压</span>
            </div>
            
            {/* Value and Unit */}
            <div className="flex items-baseline gap-1 mb-3">
              <span className="font-normal text-[#272927] leading-none text-[32px]">120</span>
              <span className="font-bold text-[#818181] text-[14px]">/80 mmHg</span>
            </div>
            
            {/* Chart Area */}
            <div className="relative h-[58px] w-full mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={bpData}>
                  <defs>
                    <linearGradient id="bpGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F8DEBD" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#F8DEBD" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <YAxis domain={['dataMin - 5', 'dataMax + 5']} hide />
                  <Area type="monotone" dataKey="v" stroke="#F3A53F" strokeWidth={2} fill="url(#bpGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Blood Sugar Card */}
          <div className="bg-white rounded-xl p-3 shadow-[0_1px_50px_rgba(0,0,0,0.08)] border border-[#E8E7E7] flex flex-col relative overflow-hidden h-[168px]">
            {/* Status Dot - Top Right - Normal */}
            <div className="absolute top-3 right-3 w-2 h-2 bg-emerald-400 rounded-full"></div>
            
            {/* Header with Icon and Title */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-[46px] h-[46px] bg-[#F8DEBD] rounded-xl flex items-center justify-center">
                <Droplet size={20} className="text-[#E79B38]" />
              </div>
              <span className="font-semibold text-black text-[14px]">血糖</span>
            </div>
            
            {/* Value and Unit */}
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-[32px] font-normal text-[#272927] leading-none">5.5</span>
              <span className="font-bold text-[#818181] text-[14px]">mmol/L</span>
            </div>
            
            {/* Chart Area */}
            <div className="relative h-[58px] w-full mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={bsData}>
                  <defs>
                    <linearGradient id="bsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F8DEBD" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#F8DEBD" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <YAxis domain={['dataMin - 0.5', 'dataMax + 0.5']} hide />
                  <Area type="monotone" dataKey="v" stroke="#F3A53F" strokeWidth={2} fill="url(#bsGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Heart Rate Card - ABNORMAL STATUS with pulse animation */}
          <div className="bg-white rounded-xl p-3 shadow-[0_1px_50px_rgba(0,0,0,0.08)] border border-[#E8E7E7] flex flex-col relative overflow-visible h-[168px] animate-pulse">
            {/* Status Dot - Top Right - Abnormal with ripple effect */}
            <div className="absolute top-3 right-3">
              {/* Core red dot */}
              <div className="relative w-2 h-2 bg-red-500 rounded-full">
                {/* Ripple 1 */}
                <div className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-75"></div>
                {/* Ripple 2 - delayed */}
                <div className="absolute inset-0 w-2 h-2 bg-red-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            {/* Header with Icon and Title */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-[46px] h-[46px] bg-[#FFE6F0] rounded-xl flex items-center justify-center">
                <Activity size={20} className="text-[#E2798E]" />
              </div>
              <span className="font-semibold text-black text-[14px]">心率</span>
            </div>
            
            {/* Value and Unit - Red color for abnormal */}
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-[32px] font-normal text-red-500 leading-none">95</span>
              <span className="font-bold text-[#818181] text-[14px]">bpm</span>
            </div>
            
            {/* Chart Area */}
            <div className="relative h-[58px] w-full mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={hrData}>
                  <defs>
                    <linearGradient id="hrGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFE6F0" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#FFE6F0" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <YAxis domain={['dataMin - 5', 'dataMax + 5']} hide />
                  <Area type="monotone" dataKey="v" stroke="#E2798E" strokeWidth={2} fill="url(#hrGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Blood Oxygen Card */}
          <div className="bg-white rounded-xl p-3 shadow-[0_1px_50px_rgba(0,0,0,0.08)] border border-[#E8E7E7] flex flex-col relative overflow-hidden h-[168px]">
            {/* Status Dot - Top Right - Normal */}
            <div className="absolute top-3 right-3 w-2 h-2 bg-emerald-400 rounded-full"></div>
            
            {/* Header with Icon and Title */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-[46px] h-[46px] bg-[#D0FBFF] rounded-xl flex items-center justify-center">
                <Activity size={20} className="text-[#3b82f6]" />
              </div>
              <span className="font-semibold text-black text-[14px]">血氧</span>
            </div>
            
            {/* Value and Unit */}
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-[32px] font-normal text-[#272927] leading-none">98</span>
              <span className="font-bold text-[#818181] text-[14px]">%</span>
            </div>
            
            {/* Chart Area */}
            <div className="relative h-[58px] w-full mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={spo2Data}>
                  <defs>
                    <linearGradient id="spo2Gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D0FBFF" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#D0FBFF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <YAxis domain={['dataMin - 2', 'dataMax + 2']} hide />
                  <Area type="monotone" dataKey="v" stroke="#3b82f6" strokeWidth={2} fill="url(#spo2Gradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-400 text-right w-full px-1">数据更新于 10 分钟前</div>
      </section>

      {/* AI Recommendations */}
      <section className="px-5 mb-6">
        <h2 className="text-lg font-bold text-[#303030] mb-4 px-1">AI 为您推荐</h2>
        <div className="flex gap-4 overflow-x-auto snap-x hide-scrollbar pb-2 -mx-5 px-5">
          <div className="min-w-[240px] snap-center bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
            <div className="h-32 bg-gray-200 relative">
              <img src="https://images.unsplash.com/photo-1760331840426-027b269d0af2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBoZWFsdGglMjBleGVyY2lzZXxlbnwxfHx8fDE3NzQ0MDU5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Exercise" className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-black/40 backdrop-blur-md text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Activity size={12} /> 适宜今日
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[#303030] text-sm">老年柔和太极拳基础班</h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-1">根据您的关节健康度推荐</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded-md">线上课程</span>
                <button className="text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-full font-medium">去练习</button>
              </div>
            </div>
          </div>

          <div className="min-w-[240px] snap-center bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
            <div className="h-32 bg-gray-200 relative">
              <img src="https://images.unsplash.com/photo-1758691031235-9db55497d898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBwZW9wbGUlMjBwbGF5aW5nJTIwY2hlc3N8ZW58MXx8fHwxNzc0NDA1OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Chess" className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-black/40 backdrop-blur-md text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Users size={12} /> 热门活动
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[#303030] text-sm">社区象棋交流赛</h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-1">您感兴趣的益智活动，就在本周五</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-orange-600 text-xs font-medium bg-orange-50 px-2 py-1 rounded-md">社区活动</span>
                <button className="text-xs bg-orange-500 text-white px-3 py-1.5 rounded-full font-medium">去报名</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Grid Quick Links */}
      <section className="px-5 mb-8">
        <h2 className="text-lg font-bold text-[#303030] mb-4 px-1">常用服务</h2>
        <div className="bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 grid grid-cols-3 gap-y-6 gap-x-4">
          {[
            { icon: Stethoscope, label: "在线问诊", color: "text-blue-500", bg: "bg-blue-50" },
            { icon: Pill, label: "用药提醒", color: "text-emerald-500", bg: "bg-emerald-50" },
            { icon: Utensils, label: "社区助餐", color: "text-orange-500", bg: "bg-orange-50" },
            { icon: Calendar, label: "体检预约", color: "text-purple-500", bg: "bg-purple-50" },
            { icon: Activity, label: "健康评估", color: "text-rose-500", bg: "bg-rose-50" },
            { icon: Users, label: "亲属绑定", color: "text-indigo-500", bg: "bg-indigo-50" },
          ].map((item, i) => (
            <button key={i} className="flex flex-col items-center gap-2 group">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-active:scale-95", item.bg, item.color)}>
                <item.icon size={22} strokeWidth={2.5} />
              </div>
              <span className="text-xs font-medium text-gray-700">{item.label}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}