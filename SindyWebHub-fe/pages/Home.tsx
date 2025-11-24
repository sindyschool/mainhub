import React from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, Star } from 'lucide-react';
import { TESTS } from './TestPage';
import { WORKBOOKS } from './WorkbookPage';
import { Counselor } from '../types';

// Mock Data for Counselors
const COUNSELORS: Counselor[] = [
  { id: 'c1', name: '김지현 상담사', title: '부부 갈등 및 소통 전문가', tags: ['외도', '소통단절'], rating: 4.9, reviewCount: 128, image: 'bg-purple-100', isAvailable: true },
  { id: 'c2', name: '이민수 박사', title: '가족 상담 1급 전문가', tags: ['이혼위기', '고부갈등'], rating: 5.0, reviewCount: 84, image: 'bg-blue-100', isAvailable: true },
  { id: 'c3', name: '박수진 상담사', title: '정서 중심 부부 치료(EFT)', tags: ['우울', '불안'], rating: 4.8, reviewCount: 210, image: 'bg-yellow-100', isAvailable: false },
  { id: 'c4', name: '최준호 원장', title: '15년 경력 임상심리전문가', tags: ['섹스리스', '중년부부'], rating: 4.9, reviewCount: 342, image: 'bg-green-100', isAvailable: true },
];

const GymFeed: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-6">
      {/* 1. App Intro Hero - Cute & Friendly */}
      <section className="bg-white rounded-3xl p-8 text-slate-800 relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div className="relative z-10">
          <div className="inline-block bg-purple-50 text-purple-600 font-bold px-3 py-1 rounded-full text-xs mb-4">
             ✨ Sindy Gym
          </div>
          <h2 className="text-2xl font-black mb-4 leading-snug">
            마음도 운동이 필요해요<br/>
            Sindy Gym에서 시작하세요
          </h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            하루 10분, 관계 근육을 키우는<br/>
            셀프케어 루틴을 만나보세요.
          </p>
          
          <div className="flex gap-3">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3.5 rounded-2xl font-bold transition-all text-sm shadow-lg shadow-purple-200 active:scale-95">
              Gym 앱 다운로드
            </button>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3.5 rounded-2xl font-bold transition-all text-sm active:scale-95">
              둘러보기
            </button>
          </div>
        </div>
        
        {/* Emoji Deco */}
        <div className="absolute right-[-20px] bottom-[-20px] text-[120px] opacity-20 rotate-12 pointer-events-none emoji-fix">
           🧘‍♀️
        </div>
      </section>

      {/* 2. Features Grid - Cute Emojis */}
      <section className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <h3 className="text-lg font-bold text-slate-900 mb-6 px-2">이럴 때 켜보세요</h3>
        <div className="grid grid-cols-3 gap-4">
           <div className="text-center group cursor-pointer">
              {/* Emoji Container Trick: Big Container, Soft BG, Centered */}
              <div className="w-16 h-16 mx-auto bg-[#F5F3FF] rounded-2xl flex items-center justify-center mb-3 text-3xl group-hover:scale-110 transition-transform shadow-sm emoji-fix">
                 🎋
              </div>
              <h4 className="text-sm font-bold text-slate-900">감정 디톡스</h4>
              <p className="text-[10px] text-slate-400 mt-1">대나무숲</p>
           </div>
           <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto bg-[#F5F3FF] rounded-2xl flex items-center justify-center mb-3 text-3xl group-hover:scale-110 transition-transform shadow-sm emoji-fix">
                 💪
              </div>
              <h4 className="text-sm font-bold text-slate-900">애착 훈련</h4>
              <p className="text-[10px] text-slate-400 mt-1">안정형 되기</p>
           </div>
           <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto bg-[#F5F3FF] rounded-2xl flex items-center justify-center mb-3 text-3xl group-hover:scale-110 transition-transform shadow-sm emoji-fix">
                 📊
              </div>
              <h4 className="text-sm font-bold text-slate-900">관계 리포트</h4>
              <p className="text-[10px] text-slate-400 mt-1">데이터 분석</p>
           </div>
        </div>
      </section>

      {/* 3. Psych Tests Entry - List Style */}
      <section className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between mb-6">
             <h3 className="text-lg font-bold text-slate-900">가볍게 알아보는 내 마음</h3>
             <Link to="/tests" className="text-slate-400 text-xs font-bold flex items-center hover:text-purple-600 transition">
               더보기 <ChevronRight size={14}/>
             </Link>
        </div>
        <div className="space-y-4">
           {TESTS.slice(0, 3).map((test, idx) => (
             <Link to="/tests" key={test.id} className="flex items-center gap-4 p-2 rounded-2xl hover:bg-slate-50 transition-colors group">
                <div className="w-12 h-12 bg-[#F5F3FF] rounded-2xl flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform emoji-fix">
                    {idx === 0 ? '🧩' : idx === 1 ? '❤️‍🔥' : '⚖️'}
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 text-sm truncate">{test.title}</h4>
                    <p className="text-xs text-slate-400 truncate mt-0.5">{test.description}</p>
                </div>
                <div className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-lg">
                    {test.time}
                </div>
             </Link>
           ))}
        </div>
      </section>
    </div>
  );
};

const ProFeed: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-6">
       
       {/* 1. App Intro Hero - PRO */}
       <section className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div className="relative z-10">
          <div className="inline-block bg-purple-500 text-white font-bold px-3 py-1 rounded-full text-xs mb-4">
             👑 Sindy PRO
          </div>
          <h2 className="text-2xl font-black mb-4 leading-snug">
            검증된 전문가와의 1:1 상담<br/>
            PRO 앱에서 만나보세요
          </h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            비대면 화상 상담부터 텍스트 테라피까지.<br/>
            가장 안전하고 편안한 공간입니다.
          </p>
          
          <div className="flex gap-3">
            <button className="bg-white hover:bg-slate-100 text-slate-900 px-6 py-3.5 rounded-2xl font-bold transition-all text-sm shadow-lg active:scale-95">
              PRO 앱 다운로드
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3.5 rounded-2xl font-bold transition-all text-sm active:scale-95">
              상담 문의하기
            </button>
          </div>
        </div>
        
        {/* Emoji Deco */}
        <div className="absolute right-[-20px] bottom-[-20px] text-[120px] opacity-10 rotate-[-12deg] pointer-events-none emoji-fix">
           👩‍⚕️
        </div>
      </section>

       {/* 2. Benefits - Card */}
       <section className="bg-white rounded-3xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <span className="text-purple-600 font-bold text-xs mb-2 block">Why Sindy PRO?</span>
          <h2 className="text-xl font-black text-slate-900 mb-8">
            믿을 수 있는 전문가와<br/>안전하게 이야기하세요
          </h2>
          
          <div className="grid grid-cols-1 gap-4 text-left">
             {[
                { emoji: "🎓", title: "상위 1% 검증된 전문가", desc: "신디가 엄격하게 모셨습니다" },
                { emoji: "🔒", title: "100% 익명 비밀 보장", desc: "기록이 절대 남지 않아요" },
                { emoji: "🏠", title: "집에서 편안하게", desc: "화상으로 만나는 1:1 상담" }
             ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-[#F2F4F6] p-4 rounded-2xl">
                    <div className="text-2xl emoji-fix">{item.emoji}</div>
                    <div>
                        <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                </div>
             ))}
          </div>
       </section>

       {/* 3. Counselors List */}
       <section>
         <div className="flex items-center justify-between px-2 mb-4">
            <h2 className="text-lg font-bold text-slate-900">추천 선생님</h2>
            <Link to="#" className="text-slate-400 text-xs font-bold">전체보기</Link>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COUNSELORS.map((counselor) => (
              <div key={counselor.id} className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all active:scale-95 cursor-pointer border border-transparent hover:border-purple-100 group">
                 <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 ${counselor.image} rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform emoji-fix`}>
                       {counselor.id === 'c1' ? '👩‍🏫' : counselor.id === 'c2' ? '👨‍⚕️' : counselor.id === 'c3' ? '👩‍💼' : '👨‍💼'}
                    </div>
                    <div>
                       <h3 className="font-bold text-slate-900 text-sm">{counselor.name}</h3>
                       <p className="text-purple-600 text-xs font-bold mt-0.5">{counselor.title}</p>
                    </div>
                 </div>
                 
                 <div className="flex flex-wrap gap-1.5 mb-4">
                    {counselor.tags.map(tag => (
                      <span key={tag} className="bg-slate-50 text-slate-500 px-2 py-1 rounded-lg text-[10px] font-bold">#{tag}</span>
                    ))}
                 </div>

                 <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-50">
                    <div className="flex items-center gap-1 font-bold text-slate-700">
                       <Star size={12} className="text-yellow-400 fill-yellow-400"/> {counselor.rating}
                       <span className="text-slate-300 font-normal">({counselor.reviewCount})</span>
                    </div>
                    {counselor.isAvailable ? (
                       <span className="text-blue-500 font-bold bg-blue-50 px-2 py-1 rounded-lg">예약가능</span>
                    ) : (
                       <span className="text-slate-300 font-bold bg-slate-50 px-2 py-1 rounded-lg">예약마감</span>
                    )}
                 </div>
              </div>
            ))}
         </div>
       </section>
    </div>
  );
};

const ShopFeed: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-6">
        <section className="bg-white rounded-3xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
           <div className="text-4xl mb-4 emoji-fix">🛍️</div>
           <h2 className="text-xl font-black text-slate-900 mb-2">신디 스토어</h2>
           <p className="text-slate-500 text-sm">관계 회복을 위한 필독서와 워크북</p>
        </section>

        <div className="grid grid-cols-2 gap-4">
           {WORKBOOKS.map((book) => (
             <Link to="/workbooks" key={book.id} className="bg-white rounded-3xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] active:scale-95 transition-all group">
                <div className={`aspect-[3/4] ${book.imageColor} rounded-2xl mb-4 relative flex items-center justify-center overflow-hidden`}>
                   <div className="text-5xl drop-shadow-sm group-hover:scale-110 transition-transform emoji-fix">📕</div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded inline-block">{book.category}</span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">{book.title}</h3>
                  <div className="font-bold text-purple-600 text-sm mt-1">{book.price.toLocaleString()}원</div>
                </div>
             </Link>
           ))}
        </div>
        
        <div className="text-center py-4">
             <Link to="/workbooks" className="inline-block bg-white border border-slate-200 text-slate-600 px-6 py-3 rounded-2xl text-sm font-bold hover:bg-slate-50 transition-colors">
                 전체 상품 보러가기
             </Link>
        </div>
    </div>
  )
}

const Home: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const mode = (searchParams.get('mode') as 'gym' | 'pro' | 'shop') || 'gym'; 

  const handleModeChange = (newMode: 'gym' | 'pro' | 'shop') => {
    navigate(`/?mode=${newMode}`);
  };

  return (
    <div className="w-full pb-24 max-w-[600px] mx-auto">
      {/* 1. Toss Style Hero */}
      <div className="px-6 pt-12 pb-8">
        <h1 className="text-2xl font-black text-slate-800 leading-snug">
          커플·부부 관계의 모든 문제<br/>
          <span className="text-purple-600">신디</span>에서 답을 찾다
        </h1>
      </div>

      {/* 2. Navigation Tabs (3 Columns) */}
      <div className="px-6 mb-8">
        <div className="bg-white p-2 rounded-[28px] shadow-sm grid grid-cols-3 gap-1">
           <button 
             onClick={() => handleModeChange('gym')}
             className={`py-4 px-1 rounded-[20px] transition-all duration-300 flex flex-col items-center justify-center gap-2 active:scale-95 ${
               mode === 'gym' 
               ? 'bg-[#F5F3FF] text-purple-600 shadow-sm ring-1 ring-purple-100' 
               : 'bg-transparent text-slate-400 hover:bg-slate-50'
             }`}
           >
             <span className="text-2xl emoji-fix">🧘‍♀️</span>
             <span className="text-[10px] sm:text-xs font-extrabold whitespace-nowrap">혼자서</span>
           </button>
           
           <button 
             onClick={() => handleModeChange('pro')}
             className={`py-4 px-1 rounded-[20px] transition-all duration-300 flex flex-col items-center justify-center gap-2 active:scale-95 ${
               mode === 'pro' 
               ? 'bg-[#F5F3FF] text-purple-600 shadow-sm ring-1 ring-purple-100' 
               : 'bg-transparent text-slate-400 hover:bg-slate-50'
             }`}
           >
             <span className="text-2xl emoji-fix">👩‍⚕️</span>
             <span className="text-[10px] sm:text-xs font-extrabold whitespace-nowrap">전문가랑</span>
           </button>

           <button 
             onClick={() => handleModeChange('shop')}
             className={`py-4 px-1 rounded-[20px] transition-all duration-300 flex flex-col items-center justify-center gap-2 active:scale-95 ${
               mode === 'shop' 
               ? 'bg-[#F5F3FF] text-purple-600 shadow-sm ring-1 ring-purple-100' 
               : 'bg-transparent text-slate-400 hover:bg-slate-50'
             }`}
           >
             <span className="text-2xl emoji-fix">🛍️</span>
             <span className="text-[10px] sm:text-xs font-extrabold whitespace-nowrap">스토어</span>
           </button>
        </div>
      </div>

      {/* 3. Feeds */}
      <div className="px-6">
        {mode === 'gym' && <GymFeed />}
        {mode === 'pro' && <ProFeed />}
        {mode === 'shop' && <ShopFeed />}
      </div>
    </div>
  );
};

export default Home;