
import React, { useState } from 'react';
import { AnalyticalStandard, StandardStatus, AppLanguage } from '../types';
import { Share2, PlusCircle, Scale, BookOpen, Layers, Zap, ChevronDown, ChevronUp } from 'lucide-react';

interface StandardCardProps {
  standard: AnalyticalStandard;
  onCompareToggle: (code: string) => void;
  isComparing: boolean;
  onViewDetails: (standard: AnalyticalStandard) => void;
  language: AppLanguage;
}

export const StandardCard: React.FC<StandardCardProps> = ({ 
  standard, 
  onCompareToggle, 
  isComparing, 
  onViewDetails,
  language
}) => {
  const [expanded, setExpanded] = useState(false);

  const t = {
    matrix: language === 'en' ? 'Matrix' : 'Ma trận',
    instrument: language === 'en' ? 'Instrument' : 'Thiết bị',
    compare: language === 'en' ? 'Compare' : 'So sánh',
    selected: language === 'en' ? 'Selected' : 'Đã chọn',
    insight: language === 'en' ? 'Quick Insight (2-Min Read)' : 'Tóm tắt phương pháp (2 Phút)',
    specs: language === 'en' ? 'Technical Specifications' : 'Thông số kỹ thuật',
    analyte: language === 'en' ? 'Analyte' : 'Chỉ tiêu',
    loq: language === 'en' ? 'LOQ/LOD' : 'LOQ/LOD',
    mrl: language === 'en' ? 'MRL Threshold' : 'Ngưỡng MRL',
    open: language === 'en' ? 'OPEN FULL PROTOCOL (BILINGUAL)' : 'XEM QUY TRÌNH CHI TIẾT (SONG NGỮ)'
  };

  const getStatusColor = (status: StandardStatus) => {
    switch (status) {
      case StandardStatus.ACTIVE: return 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20';
      case StandardStatus.SUPERSEDED: return 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20';
      case StandardStatus.WITHDRAWN: return 'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20';
      default: return 'bg-slate-50 text-slate-600 border-slate-100 dark:bg-slate-800/50 dark:text-slate-400 dark:border-slate-700';
    }
  };

  return (
    <div className={`group bg-white dark:bg-slate-900 rounded-[2rem] border transition-all duration-500 overflow-hidden ${expanded ? 'ring-2 ring-blue-500 shadow-2xl z-10' : 'border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-xl'}`}>
      <div className="p-1">
        <div className="flex flex-col md:flex-row md:items-center p-6 gap-6">
          {/* Organization & Code Badge */}
          <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-1 min-w-[150px]">
            <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">{standard.organization}</span>
            <h3 className="text-xl font-black text-slate-900 dark:text-white font-mono tracking-tight">{standard.code}</h3>
            <span className={`mt-1.5 px-3 py-0.5 rounded-full text-[10px] font-black border ${getStatusColor(standard.status)}`}>
              {standard.status.toUpperCase()}
            </span>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-2">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {standard.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold">
              <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <Layers size={14} className="text-slate-400" />
                <span className="text-slate-400">{t.matrix}: <span className="text-slate-900 dark:text-slate-200">{standard.matrix}</span></span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <Zap size={14} className="text-amber-500" />
                <span className="text-slate-400">{t.instrument}: <span className="text-slate-900 dark:text-slate-200">{standard.parameters.instrument}</span></span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3 shrink-0">
             <button
              onClick={() => onCompareToggle(standard.code)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-xs transition-all ${isComparing ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
            >
              <PlusCircle size={16} />
              {isComparing ? t.selected : t.compare}
            </button>
            
            <button
              onClick={() => setExpanded(!expanded)}
              className={`p-3 rounded-2xl transition-all ${expanded ? 'bg-slate-900 dark:bg-slate-700 text-white shadow-lg' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
            >
              {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
        </div>

        {/* Expanded Summary Area */}
        {expanded && (
          <div className="px-8 pb-8 pt-2 animate-in slide-in-from-top-4 duration-300">
            <div className="h-px bg-slate-100 dark:bg-slate-800 w-full mb-8"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-1.5 bg-blue-600 rounded-full"></div>
                  <h4 className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-[0.2em]">{t.insight}</h4>
                </div>
                <div className="bg-blue-50/40 dark:bg-blue-900/10 p-8 rounded-[2rem] border border-blue-100/50 dark:border-blue-500/10">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm italic font-medium">
                    "{standard.twoMinuteRead}"
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-1.5 bg-amber-500 rounded-full"></div>
                  <h4 className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-[0.2em]">{t.specs}</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                    <span className="text-[10px] font-black text-slate-400 uppercase">{t.analyte}</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{standard.parameters.analyte}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                    <span className="text-[10px] font-black text-slate-400 uppercase">{t.loq}</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{standard.parameters.lod}</span>
                  </div>
                  {standard.parameters.mrl && (
                    <div className="flex justify-between items-center p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl border border-indigo-100 dark:border-indigo-500/10">
                      <span className="text-[10px] font-black text-indigo-400 uppercase flex items-center gap-1.5"><Scale size={12} /> {t.mrl}</span>
                      <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">{standard.parameters.mrl}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <button
                onClick={() => onViewDetails(standard)}
                className="flex-1 flex items-center justify-center gap-3 py-4.5 rounded-2xl bg-blue-600 text-white text-sm font-black hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all active:scale-[0.98]"
              >
                <BookOpen size={18} /> {t.open}
              </button>
              <button className="px-6 py-4.5 rounded-2xl border-2 border-slate-100 dark:border-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
