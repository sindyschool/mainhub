import React from 'react';
import { CheckCircle, Clock, Users, ChevronRight } from 'lucide-react';
import { PsychTest } from '../types';

export const TESTS: PsychTest[] = [
  { id: '1', title: "성인 애착유형 테스트", description: "나의 연애 스타일과 불안의 원인 찾기", questions: 36, time: "10분", participants: 125000, color: "", iconType: 'shield' },
  { id: '2', title: "부부 갈등 패턴 분석", description: "우리 부부가 자주 싸우는 진짜 이유", questions: 24, time: "7분", participants: 89000, color: "", iconType: 'heart' },
  { id: '3', title: "자아분화도 검사", description: "건강한 독립을 위한 심리 점검", questions: 40, time: "12분", participants: 54000, color: "", iconType: 'brain' },
  { id: '4', title: "이혼 위험성 체크리스트", description: "현재 우리 부부의 위기 수준은?", questions: 15, time: "5분", participants: 32000, color: "", iconType: 'zap' },
  { id: '5', title: "우울/불안 척도 검사", description: "내 마음의 에너지 확인하기", questions: 20, time: "5분", participants: 45000, color: "", iconType: 'activity' },
];

const TestPage: React.FC = () => {
    const renderEmoji = (type: string, idx: number) => {
        const emojis = ['🧩', '❤️‍🔥', '⚖️', '🌩️', '🔋'];
        return emojis[idx % emojis.length];
    }

  return (
    <div className="pt-8 pb-24 animate-fade-in-up max-w-[600px] mx-auto">
       <div className="px-6">
        <header className="mb-8">
            <h1 className="text-2xl font-black text-slate-800 mb-2">심리 테스트</h1>
            <p className="text-slate-500 text-sm">나를 알고 상대를 이해하는 시작점</p>
        </header>

        <div className="space-y-3">
            {TESTS.map((test, idx) => (
                <div key={test.id} className="bg-white p-4 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] active:scale-98 transition-all cursor-pointer flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#F5F3FF] rounded-2xl flex items-center justify-center text-3xl shrink-0">
                        {renderEmoji(test.iconType, idx)}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                             <h3 className="text-base font-bold text-slate-900 truncate">{test.title}</h3>
                             {idx < 2 && <span className="bg-purple-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">HOT</span>}
                        </div>
                        <p className="text-slate-500 text-xs truncate mb-2">{test.description}</p>
                        <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400">
                            <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg">⏱️ {test.time}</span>
                            <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg">👤 {test.participants.toLocaleString()}명</span>
                        </div>
                    </div>
                    <ChevronRight className="text-slate-300" size={20} />
                </div>
            ))}
        </div>
       </div>
    </div>
  );
};

export default TestPage;