import React from 'react';
import { ShoppingBag, Star, BookOpen, ArrowRight } from 'lucide-react';
import { Workbook } from '../types';

export const WORKBOOKS: Workbook[] = [
  { id: '1', title: "불안형 아내와 회피형 남편", subtitle: "서로 다른 우리가 이해하는 법", price: 18000, imageColor: "bg-purple-100", category: "관계 회복", tag: "BEST" },
  { id: '2', title: "하루 10분 감정 대화", subtitle: "싸우지 않고 대화하는 기술", price: 15000, imageColor: "bg-blue-100", category: "대화법" },
  { id: '3', title: "나를 돌보는 감정 일기", subtitle: "내 마음을 먼저 챙기세요", price: 12000, imageColor: "bg-green-100", category: "셀프케어" },
  { id: '4', title: "부부 싸움 패턴 끊기", subtitle: "지긋지긋한 반복에서 탈출", price: 22000, imageColor: "bg-orange-100", category: "갈등 해결" },
  { id: '5', title: "결혼 전 꼭 물어야 할 100가지", subtitle: "예비 부부를 위한 체크리스트", price: 16000, imageColor: "bg-purple-50", category: "예비 부부" },
  { id: '6', title: "섹스리스 탈출 가이드", subtitle: "친밀감을 되찾는 스킨십", price: 25000, imageColor: "bg-yellow-100", category: "친밀감" },
];

const WorkbookPage: React.FC = () => {
  return (
    <div className="pt-8 pb-24 animate-fade-in-up max-w-[600px] mx-auto">
      <div className="px-6">
        <header className="mb-8">
            <h1 className="text-2xl font-black text-slate-900 mb-2">신디 서점</h1>
            <p className="text-slate-500 text-sm">관계의 깊이를 더하는 큐레이션</p>
        </header>

        {/* Categories */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {['전체', '관계 회복', '대화법', '셀프케어'].map((cat, idx) => (
                <button key={idx} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition ${idx === 0 ? 'bg-slate-800 text-white shadow-lg shadow-slate-200' : 'bg-white text-slate-500 shadow-sm'}`}>
                    {cat}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
            {WORKBOOKS.map((book) => (
                <div key={book.id} className="group cursor-pointer">
                    <div className={`aspect-[3/4] ${book.imageColor} rounded-3xl mb-3 relative flex items-center justify-center overflow-hidden shadow-sm`}>
                        <div className="text-5xl drop-shadow-sm">📕</div>
                        {book.tag && (
                            <span className="absolute top-3 left-3 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-md">
                                {book.tag}
                            </span>
                        )}
                    </div>
                    <div className="px-1">
                        <span className="text-[10px] font-bold text-slate-400 mb-1 block">{book.category}</span>
                        <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug line-clamp-2">{book.title}</h3>
                        <div className="font-bold text-purple-600 text-sm">{book.price.toLocaleString()}원</div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WorkbookPage;