
import React from 'react';
import { Beaker, Search, BarChart2, BookOpen, Bell, Settings, Sun, Moon, ClipboardList } from 'lucide-react';
import { AppLanguage } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDark: boolean;
  toggleDark: () => void;
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeTab, 
  setActiveTab, 
  isDark, 
  toggleDark,
  language,
  setLanguage
}) => {
  const t = {
    search: language === 'en' ? 'Standards Search' : 'Tra cứu tiêu chuẩn',
    methodCard: language === 'en' ? 'Method Cards' : 'Method Cards (Ứng dụng)',
    compare: language === 'en' ? 'Method Comparison' : 'So sánh phương pháp',
    library: language === 'en' ? 'My Library' : 'Thư viện của tôi',
    updates: language === 'en' ? 'SYSTEM & UPDATES' : 'HỆ THỐNG & CẬP NHẬT',
    notifications: language === 'en' ? 'Notifications' : 'Thông báo mới',
    settings: language === 'en' ? 'Settings' : 'Cài đặt',
    lightMode: language === 'en' ? 'Light Mode' : 'Chế độ sáng',
    darkMode: language === 'en' ? 'Dark Mode' : 'Chế độ tối',
    titleSearch: language === 'en' ? 'Analytical Standards Search' : 'Tra cứu tiêu chuẩn phân tích',
    titleMethodCard: language === 'en' ? 'Application Method Cards' : 'Thẻ phương pháp ứng dụng',
    titleCompare: language === 'en' ? 'Method Comparison Engine' : 'Công cụ so sánh phương pháp',
    titleLibrary: language === 'en' ? 'Standard Management' : 'Quản lý tiêu chuẩn',
    role: language === 'en' ? 'Senior Chemist' : 'Kỹ thuật viên cao cấp'
  };

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 dark:bg-slate-900 text-slate-300 flex flex-col hidden md:flex shrink-0 border-r border-slate-800/50">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-900/40">
            <Beaker size={24} />
          </div>
          <span className="text-xl font-black text-white tracking-tight">LabSpec Pro</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1.5">
          <button
            onClick={() => setActiveTab('search')}
            className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all ${activeTab === 'search' ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/50' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <Search size={20} />
            <span className="font-bold text-sm">{t.search}</span>
          </button>
          <button
            onClick={() => setActiveTab('methodCard')}
            className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all ${activeTab === 'methodCard' ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/50' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <ClipboardList size={20} />
            <span className="font-bold text-sm">{t.methodCard}</span>
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all ${activeTab === 'compare' ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/50' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <BarChart2 size={20} />
            <span className="font-bold text-sm">{t.compare}</span>
          </button>
          <button
            onClick={() => setActiveTab('library')}
            className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all ${activeTab === 'library' ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/50' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <BookOpen size={20} />
            <span className="font-bold text-sm">{t.library}</span>
          </button>
          
          <div className="pt-10 pb-2 px-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
            {t.updates}
          </div>
          <button className="w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl hover:bg-slate-800 group transition-all">
            <Bell size={20} className="group-hover:text-blue-400" />
            <span className="font-bold text-sm">{t.notifications}</span>
            <span className="ml-auto bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">3</span>
          </button>
        </nav>

        <div className="p-6 border-t border-slate-800/50 space-y-2">
          <button 
            onClick={toggleDark}
            className="w-full flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all text-sm font-bold"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
            <span>{isDark ? t.lightMode : t.darkMode}</span>
          </button>
          <button className="w-full flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all text-sm font-bold">
            <Settings size={18} />
            <span>{t.settings}</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 glass-morphism sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-4 text-slate-500 md:hidden">
             <Beaker size={24} className="text-blue-600" />
             <span className="font-black text-slate-900 dark:text-white">LabSpec</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              {activeTab === 'search' && t.titleSearch}
              {activeTab === 'methodCard' && t.titleMethodCard}
              {activeTab === 'compare' && t.titleCompare}
              {activeTab === 'library' && t.titleLibrary}
            </h1>
          </div>
          <div className="flex items-center gap-6">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-[10px] font-black rounded-lg transition-all ${language === 'en' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-400 dark:text-slate-500'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('vi')}
                className={`px-3 py-1.5 text-[10px] font-black rounded-lg transition-all ${language === 'vi' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-400 dark:text-slate-500'}`}
              >
                VI
              </button>
            </div>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>

            <div className="hidden sm:flex flex-col text-right">
              <p className="font-black text-slate-900 dark:text-white leading-none text-sm">{t.role}</p>
              <p className="text-blue-500 text-[10px] font-bold uppercase tracking-tighter">ISO 17025 Lead</p>
            </div>
            <div className="relative">
              <img className="w-9 h-9 rounded-xl border-2 border-white dark:border-slate-800 shadow-lg" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="user" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-950 rounded-full"></div>
            </div>
          </div>
        </header>

        <section className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
};
