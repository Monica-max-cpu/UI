import { User, Award, Users, Smartphone, Bell, Shield, ChevronRight, Edit3, ShieldAlert } from "lucide-react";
import { cn } from "../components/Layout";

export function Profile() {
  return (
    <div className="flex flex-col min-h-full pb-8 bg-gray-50/50">
      {/* Profile Header */}
      <header className="px-5 pt-12 pb-6 bg-[#303030] text-white rounded-b-[40px] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center p-1 backdrop-blur-md">
            <div className="w-full h-full bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">李</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">李建国</h1>
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] flex items-center gap-1">
                <ShieldAlert size={10} /> 实名认证
              </span>
            </div>
            <p className="text-sm text-gray-300 mt-1">138 **** 5678</p>
          </div>
          <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white active:scale-95 transition-transform">
            <Edit3 size={16} />
          </button>
        </div>

        {/* Points Info */}
        <div className="mt-6 flex bg-white/10 rounded-2xl p-4 backdrop-blur-md relative z-10">
          <div className="flex-1 text-center border-r border-white/10">
            <p className="text-xs text-gray-300 mb-1">可用积分</p>
            <p className="text-2xl font-bold text-orange-400">1,280</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-xs text-gray-300 mb-1">健康天数</p>
            <p className="text-2xl font-bold text-emerald-400">365</p>
          </div>
        </div>
      </header>

      {/* Menu List */}
      <section className="px-5 mt-6 space-y-4">
        <div className="bg-white rounded-[28px] p-2 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50">
          <MenuButton icon={Award} label="积分兑换中心" color="text-orange-500" bgColor="bg-orange-50" />
          <div className="h-[1px] bg-gray-50 mx-4" />
          <MenuButton icon={Users} label="亲属绑定" subtitle="已绑定 2 人" color="text-blue-500" bgColor="bg-blue-50" />
          <div className="h-[1px] bg-gray-50 mx-4" />
          <MenuButton icon={Smartphone} label="设备管理" subtitle="手表在线" color="text-emerald-500" bgColor="bg-emerald-50" />
        </div>

        <div className="bg-white rounded-[28px] p-2 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50">
          <MenuButton icon={Bell} label="消息通知" subtitle="有 3 条未读" color="text-purple-500" bgColor="bg-purple-50" badge={true} />
          <div className="h-[1px] bg-gray-50 mx-4" />
          <MenuButton icon={Shield} label="隐私设置" color="text-gray-500" bgColor="bg-gray-100" />
        </div>
      </section>

      {/* Logout */}
      <div className="px-5 mt-8 mb-4">
        <button className="w-full py-4 text-center text-red-500 font-medium bg-white rounded-2xl border border-red-50 shadow-sm active:scale-[0.98] transition-transform">
          退出登录
        </button>
      </div>
    </div>
  );
}

function MenuButton({ icon: Icon, label, subtitle, color, bgColor, badge = false }: { 
  icon: any, 
  label: string, 
  subtitle?: string, 
  color: string, 
  bgColor: string,
  badge?: boolean 
}) {
  return (
    <button className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 active:scale-[0.98] transition-all">
      <div className="flex items-center gap-3">
        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center relative", bgColor, color)}>
          <Icon size={20} />
          {badge && <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />}
        </div>
        <span className="font-medium text-[#303030] text-[15px]">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {subtitle && <span className="text-xs text-gray-400">{subtitle}</span>}
        <ChevronRight size={16} className="text-gray-300" />
      </div>
    </button>
  );
}
