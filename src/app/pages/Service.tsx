import { CalendarClock, Sparkles, Stethoscope, Clock, ShieldCheck, Star } from "lucide-react";
import { cn } from "../components/Layout";

export function Service() {
  return (
    <div className="flex flex-col min-h-full pb-8 bg-gray-50/50">
      <header className="px-6 pt-12 pb-4 bg-white sticky top-0 z-20 shadow-sm shadow-gray-100">
        <h1 className="text-2xl font-bold text-[#303030]">服务预约中心</h1>
      </header>

      {/* Main Categories */}
      <section className="px-5 mt-6 grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-5 text-white relative overflow-hidden shadow-lg shadow-blue-500/20 active:scale-95 transition-transform">
          <div className="absolute right-0 bottom-0 opacity-20 -mr-4 -mb-4">
            <Sparkles size={80} />
          </div>
          <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
            <Sparkles size={20} />
          </div>
          <h3 className="font-bold text-lg mb-1 relative z-10">生活辅助</h3>
          <p className="text-blue-100 text-xs relative z-10">保洁/助餐/维修</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-5 text-white relative overflow-hidden shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform">
          <div className="absolute right-0 bottom-0 opacity-20 -mr-4 -mb-4">
            <Stethoscope size={80} />
          </div>
          <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
            <Stethoscope size={20} />
          </div>
          <h3 className="font-bold text-lg mb-1 relative z-10">健康咨询</h3>
          <p className="text-emerald-100 text-xs relative z-10">看诊/理疗/陪诊</p>
        </div>
      </section>

      {/* Recommended Services */}
      <section className="px-5 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#303030]">热门服务</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              title: "深度家庭保洁 (2小时)",
              tags: ["星级阿姨", "生活辅助"],
              price: "¥ 80",
              originalPrice: "¥ 120",
              img: "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwY2xlYW5pbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc3NDQwNjAzNnww&ixlib=rb-4.1.0&q=80&w=1080",
            },
            {
              title: "全科名医图文问诊",
              tags: ["三甲医生", "极速响应"],
              price: "¥ 0",
              originalPrice: "¥ 50",
              img: "https://images.unsplash.com/photo-1758691461916-dc7894eb8f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjb25zdWx0YXRpb24lMjBkb2N0b3J8ZW58MXx8fHwxNzc0NDA2MDM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
            },
          ].map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-4 flex gap-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50">
              <img src={service.img} alt={service.title} className="w-24 h-24 rounded-2xl object-cover" />
              <div className="flex-1 flex flex-col py-1">
                <h3 className="font-bold text-[#303030] text-sm line-clamp-2 mb-2">{service.title}</h3>
                <div className="flex gap-1.5 mb-auto">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      <ShieldCheck size={10} /> {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-orange-500">{service.price}</span>
                    <span className="text-xs text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <button className="bg-emerald-600 text-white text-xs font-medium px-4 py-1.5 rounded-full active:scale-95 transition-transform">
                    预约
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment History */}
      <section className="px-5 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#303030]">近期记录</h2>
          <button className="text-xs text-gray-500 flex items-center gap-1">全部记录 <CalendarClock size={14} /></button>
        </div>
        
        <div className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50">
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-50">
            <div className="flex items-center gap-2">
              <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded-md">已完成</span>
              <span className="text-sm font-bold text-[#303030]">中医理疗服务</span>
            </div>
            <span className="text-xs text-gray-400">昨天 14:30</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock size={14} /> 服务时长: 60分钟
            </div>
            <button className="text-orange-500 border border-orange-200 bg-orange-50 text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1">
              <Star size={12} fill="currentColor" /> 去评价
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
