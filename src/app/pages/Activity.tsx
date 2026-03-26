import { useState } from "react";
import { Calendar, MapPin, PlayCircle, Users, CheckCircle } from "lucide-react";
import { cn } from "../components/Layout";

export function Activity() {
  const [activeTab, setActiveTab] = useState<"activity" | "course">("activity");

  return (
    <div className="flex flex-col min-h-full pb-8 bg-gray-50/50">
      <header className="px-6 pt-12 pb-2 bg-white sticky top-0 z-20">
        <h1 className="text-2xl font-bold text-[#303030] mb-4">文体活动</h1>
        
        {/* Custom Tabs */}
        <div className="flex gap-6 border-b border-gray-100">
          <button 
            onClick={() => setActiveTab("activity")}
            className={cn(
              "pb-3 text-base font-medium relative transition-colors",
              activeTab === "activity" ? "text-[#303030]" : "text-gray-400"
            )}
          >
            社区活动
            {activeTab === "activity" && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-emerald-500 rounded-t-full" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab("course")}
            className={cn(
              "pb-3 text-base font-medium relative transition-colors",
              activeTab === "course" ? "text-[#303030]" : "text-gray-400"
            )}
          >
            线上课程
            {activeTab === "course" && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-emerald-500 rounded-t-full" />
            )}
          </button>
        </div>
      </header>

      <div className="px-5 mt-6">
        {activeTab === "activity" ? (
          <div className="space-y-4">
            <div className="bg-white rounded-[28px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50">
              <div className="relative h-40">
                <img src="https://images.unsplash.com/photo-1773227059529-3a2bd04ce5b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZW5pb3JzJTIwZXZlbnR8ZW58MXx8fHwxNzc0NDA2MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Activity" className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-sm flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  正在报名
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#303030] text-lg mb-2">迎春社区广场舞大赛</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={14} className="text-gray-400" /> 
                    周六上午 09:00 - 11:30
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin size={14} className="text-gray-400" /> 
                    阳光社区文化广场
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Users size={14} className="text-gray-400" /> 
                    已报 12/20 人
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-emerald-600 text-white py-2.5 rounded-xl text-sm font-bold active:scale-[0.98] transition-transform">
                    立即报名
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[28px] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50 opacity-80">
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#303030] text-base">社区书画展</h3>
                  <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-[10px]">已结束</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={14} /> 上周日
                  </div>
                </div>
                <button className="w-full bg-gray-50 text-gray-500 py-2.5 rounded-xl text-sm font-medium border border-gray-200">
                  查看活动回顾
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "中国书法入门与赏析",
                progress: 60,
                img: "https://images.unsplash.com/photo-1583389409210-0234eee7cdce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxsaWdyYXBoeSUyMGxlYXJuaW5nJTIwb25saW5lfGVufDF8fHx8MTc3NDQwNjA2MXww&ixlib=rb-4.1.0&q=80&w=1080",
                duration: "24分钟",
              },
              {
                title: "中老年智能手机防骗指南",
                progress: 100,
                img: "https://images.unsplash.com/photo-1758612898258-398a43e7fd65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBsZWFybmluZyUyMG9ubGluZXxlbnwxfHx8fDE3NzQ0MDU5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
                duration: "已学完",
              }
            ].map((course, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50 flex flex-col">
                <div className="relative h-28 bg-gray-200">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <PlayCircle className="text-white/80" size={32} />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded">
                    {course.duration}
                  </div>
                </div>
                <div className="p-3 flex-1 flex flex-col">
                  <h3 className="font-bold text-[#303030] text-xs line-clamp-2 mb-2 leading-snug">{course.title}</h3>
                  <div className="mt-auto">
                    <div className="flex justify-between items-center text-[10px] mb-1">
                      <span className="text-gray-500">学习进度</span>
                      <span className="text-emerald-600 font-medium">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    {course.progress === 100 ? (
                       <div className="mt-3 flex items-center justify-center gap-1 text-xs text-orange-500 font-medium bg-orange-50 py-1.5 rounded-lg">
                         <CheckCircle size={12} /> 已打卡积分 +10
                       </div>
                    ) : (
                      <button className="mt-3 w-full bg-emerald-50 text-emerald-600 py-1.5 rounded-lg text-xs font-bold">
                        继续学习
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
