import { Outlet, useLocation, useNavigate } from "react-router";
import { Home, HeartPulse, HandPlatter, CalendarDays, User } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: "首页", icon: Home },
    { path: "/health", label: "健康", icon: HeartPulse },
    { path: "/service", label: "服务", icon: HandPlatter },
    { path: "/activity", label: "活动", icon: CalendarDays },
    { path: "/profile", label: "我的", icon: User },
  ];

  return (
    <div className="flex flex-col h-screen w-full max-w-md mx-auto bg-[#FFFCF8] overflow-hidden shadow-2xl relative">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-24 scroll-smooth">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 rounded-t-3xl pb-safe">
        <div className="flex justify-around items-center px-2 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center justify-center w-16 gap-1 group"
              >
                <div
                  className={cn(
                    "p-2 rounded-2xl transition-all duration-300",
                    isActive ? "bg-emerald-100 text-emerald-600" : "text-[#6A6969] group-hover:bg-gray-50"
                  )}
                >
                  <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span
                  className={cn(
                    "text-[11px] font-medium transition-colors",
                    isActive ? "text-emerald-600" : "text-[#6A6969]"
                  )}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
