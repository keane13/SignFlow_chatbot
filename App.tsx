
import React, { useState } from 'react';
import { LandingPage } from './client/pages/LandingPage';
import { Chatbot } from './client/components/Chatbot';
import { Shield, Zap, Info, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'landing' | 'assistant'>('landing');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-['Inter']">
      {/* Premium Navbar */}
      <header className="sticky top-0 z-50 w-full glass-morphism border-b border-slate-100 bg-white/70">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setCurrentPage('landing')}
          >
            <div className="w-11 h-11 bg-slate-950 rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform">
              <Zap className="w-6 h-6 text-cyan-400 fill-current" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-950 uppercase italic">SignFlow<span className="text-cyan-500">.AI</span></span>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            <button
              onClick={() => setCurrentPage('landing')}
              className={`text-sm font-bold tracking-wide transition-colors hover:text-cyan-600 ${currentPage === 'landing' ? 'text-cyan-600' : 'text-slate-500'}`}
            >
              Platform
            </button>
            <button className="text-sm font-bold tracking-wide text-slate-500 hover:text-cyan-600">Enterprise</button>
            <button className="text-sm font-bold tracking-wide text-slate-500 hover:text-cyan-600">Developers</button>
          </nav>

          <div className="flex items-center gap-6">
            <button className="hidden sm:block text-sm font-black text-slate-950 hover:text-cyan-600 transition-colors uppercase tracking-widest">Login</button>
            <button className="bg-slate-950 text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95">
              Start Free
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <LandingPage onExploreAssistant={() => {}} />
      </main>

      {/* Modern Footer */}
      <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-cyan-400 fill-current" />
                </div>
                <span className="text-2xl font-black italic tracking-tighter uppercase">SignFlow<span className="text-cyan-500">.AI</span></span>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed max-w-sm mb-10 italic">
                Platform identitas digital masa depan yang menggabungkan kecerdasan buatan dengan keamanan tingkat tinggi untuk alur kerja global.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center hover:bg-cyan-50 hover:text-cyan-600 cursor-pointer transition-all"><Info className="w-5 h-5" /></div>)}
              </div>
            </div>
            <div>
              <h4 className="font-black text-slate-950 mb-8 uppercase tracking-widest text-xs">Solution</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-bold">
                <li className="hover:text-cyan-600 cursor-pointer flex items-center gap-2">Solo-Sign <ChevronRight className="w-3 h-3" /></li>
                <li className="hover:text-cyan-600 cursor-pointer flex items-center gap-2">Multi-Flow <ChevronRight className="w-3 h-3" /></li>
                <li className="hover:text-cyan-600 cursor-pointer flex items-center gap-2">Sequence AI <ChevronRight className="w-3 h-3" /></li>
                <li className="hover:text-cyan-600 cursor-pointer flex items-center gap-2">Digital Meterai <ChevronRight className="w-3 h-3" /></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-slate-950 mb-8 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-bold">
                <li className="hover:text-cyan-600 cursor-pointer">About AI</li>
                <li className="hover:text-cyan-600 cursor-pointer">Security First</li>
                <li className="hover:text-cyan-600 cursor-pointer">Global Compliance</li>
                <li className="hover:text-cyan-600 cursor-pointer">Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-slate-950 mb-8 uppercase tracking-widest text-xs">Reach Us</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium italic">
                <li>Sudirman Central Business District, Jakarta</li>
                <li>hello@signflow.ai</li>
                <li className="text-slate-950 font-bold not-italic">+62 21 5500 9988</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
              © 2025 SIGNFLOW AI SYSTEMS GLOBAL. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <span className="hover:text-slate-950 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-slate-950 cursor-pointer transition-colors">Terms of Flow</span>
              <span className="hover:text-slate-950 cursor-pointer transition-colors">Cookie Matrix</span>
            </div>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;
