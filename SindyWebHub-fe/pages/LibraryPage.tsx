import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

const COLUMNS = [
  { id: 1, title: "부부 싸움, '잘' 하는 법이 따로 있다?", author: "김지현 상담사", category: "갈등 해결", readTime: "5분" },
  { id: 2, title: "회피형 남편을 움직이는 대화의 기술", author: "이민수 박사", category: "대화법", readTime: "7분" },
  { id: 3, title: "섹스리스, 친밀감 회복의 첫 단계", author: "최준호 원장", category: "부부 관계", readTime: "6분" },
  { id: 4, title: "육아로 지친 아내를 위한 심리 처방", author: "박수진 상담사", category: "육아 스트레스", readTime: "4분" },
  { id: 5, title: "권태기 극복을 위한 3가지 질문", author: "신디 에디터", category: "권태기", readTime: "3분" },
];

const LibraryPage: React.FC = () => {
  return (
    <div className="pt-8 pb-24 animate-fade-in-up max-w-[600px] mx-auto">
      <div className="px-6">
        <header className="mb-8">
            <h1 className="text-2xl font-black text-slate-800 mb-2">신디 라이브러리</h1>
            <p className="text-slate-500 text-sm">전문가가 전하는 관계의 지혜</p>
        </header>

        {/* Categories */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
            {['전체', '칼럼', '아티클', 'Q&A'].map((cat, idx) => (
                <button key={idx} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition ${idx === 0 ? 'bg-slate-800 text-white shadow-lg shadow-slate-200' : 'bg-white text-slate-500 shadow-sm'}`}>
                    {cat}
                </button>
            ))}
        </div>

        <div className="space-y-4">
            {COLUMNS.map((col, idx) => (
                <div key={col.id} className="bg-white p-5 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] active:scale-98 transition-all cursor-pointer group">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-lg mb-2 inline-block">
                                {col.category}
                            </span>
                            <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-purple-700 transition-colors">
                                {col.title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                                <span className="font-medium text-slate-600">{col.author}</span>
                                <span className="w-0.5 h-2 bg-slate-200"></span>
                                <span>{col.readTime}</span>
                            </div>
                        </div>
                        <div className="w-16 h-16 bg-[#F5F3FF] rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform emoji-fix">
                            {idx % 2 === 0 ? '📰' : '✍️'}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;