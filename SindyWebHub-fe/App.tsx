import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Menu, Globe } from 'lucide-react';
import Home from './pages/Home';
import WorkbookPage from './pages/WorkbookPage';
import TestPage from './pages/TestPage';
import LibraryPage from './pages/LibraryPage';
import SindyChat from './components/SindyChat';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// -- Layout Component --
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F4F6]">
      <ScrollToTop />
      {/* Standard Header - Cleaner & Softer */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg h-16 transition-all shadow-[0_1px_0_0_rgba(0,0,0,0.03)] flex items-center justify-center">
        <div className="max-w-[800px] w-full px-6 flex items-center justify-between">
          
          {/* 1. Logo */}
          <div className="flex-shrink-0 flex items-center z-10">
            <Link to="/" className="text-2xl font-black tracking-tighter text-purple-600 flex items-center gap-1">
              Sindy
            </Link>
          </div>

          {/* 2. Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-500">
             <Link to="/?mode=gym" className="hover:text-purple-600 transition">혼자서</Link>
             <Link to="/?mode=pro" className="hover:text-purple-600 transition">전문가랑</Link>
             <Link to="/workbooks" className="hover:text-purple-600 transition">스토어</Link>
             <Link to="/library" className="hover:text-purple-600 transition">라이브러리</Link>
          </nav>

          {/* 3. User Menu / Mobile Toggle */}
          <div className="flex items-center gap-3 justify-end shrink-0 z-10">
            <div 
              className="flex items-center gap-3 bg-slate-50 rounded-full pl-4 pr-2 py-1.5 hover:bg-slate-100 transition cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={18} className="text-slate-600" />
              <div className="w-7 h-7 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 text-[10px] font-bold">
                MY
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full right-6 w-60 bg-white shadow-xl rounded-2xl z-50 animate-fade-in-up mt-2 p-2 border border-slate-100">
             <nav className="flex flex-col gap-1 text-sm font-bold text-slate-700">
                <Link to="/?mode=gym" className="p-3 hover:bg-slate-50 rounded-xl transition-colors flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="emoji-fix">🧘‍♀️</span> 혼자서
                </Link>
                <Link to="/?mode=pro" className="p-3 hover:bg-slate-50 rounded-xl transition-colors flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="emoji-fix">👩‍⚕️</span> 전문가랑
                </Link>
                <Link to="/workbooks" className="p-3 hover:bg-slate-50 rounded-xl transition-colors flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="emoji-fix">🛍️</span> 스토어
                </Link>
                <Link to="/library" className="p-3 hover:bg-slate-50 rounded-xl transition-colors flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="emoji-fix">📚</span> 라이브러리
                </Link>
                <div className="h-px bg-slate-50 my-1 mx-2"></div>
                <Link to="#" className="p-3 hover:bg-slate-50 rounded-xl transition-colors text-slate-400" onClick={() => setIsMobileMenuOpen(false)}>로그인</Link>
             </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#F2F4F6] text-slate-400 py-12 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-slate-800 text-lg font-black">Sindy</h2>
          <div className="text-xs space-y-1">
             <p>(주)신디 | 대표: 김신디 | 서울시 강남구 테헤란로 123</p>
             <p>사업자등록번호: 123-45-67890</p>
          </div>
          <div className="flex justify-center gap-4 text-xs font-bold pt-4">
             <Link to="#" className="hover:text-slate-600">이용약관</Link>
             <Link to="#" className="hover:text-slate-600">개인정보처리방침</Link>
             <Link to="#" className="hover:text-slate-600">고객센터</Link>
          </div>
          <p className="text-[10px] text-slate-300 pt-4">© 2024 Sindy Inc.</p>
        </div>
      </footer>
      
      {/* Floating AI Chat */}
      <SindyChat />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workbooks" element={<WorkbookPage />} />
          <Route path="/tests" element={<TestPage />} />
          <Route path="/library" element={<LibraryPage />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;