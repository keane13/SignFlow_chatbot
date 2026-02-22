
import React from 'react';
import { FEATURES } from '../../constants';
import { ArrowRight, CheckCircle2, Shield, Zap, Award, Star } from 'lucide-react';

export const LandingPage: React.FC<{ onExploreAssistant: () => void }> = ({ onExploreAssistant }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Zap className="w-3 h-3 fill-cyan-400" />
            Next-Gen Digital Signature
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            Alur Kerja Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Lebih Cerdas & Aman</span>
          </h1>
          <p className="text-slate-400 text-xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            SignFlow AI merevolusi cara Anda menandatangani dokumen. Integrasi kecerdasan buatan, verifikasi instan, dan legalitas global dalam satu platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-2xl transition-all shadow-2xl shadow-cyan-500/20 active:scale-95">
              Mulai Alur Gratis
            </button>
           
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-slate-950 mb-6">Efisiensi Tanpa Batas</h2>
              <p className="text-slate-500 text-lg">Platform kami dirancang untuk skalabilitas perusahaan besar namun cukup sederhana untuk kebutuhan personal.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden"><img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" /></div>)}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-500 mb-0.5"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                <div className="font-bold text-slate-950">50,000+ Users</div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all group relative overflow-hidden">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:rotate-[10deg] transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-950 mb-4">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{feature.description}</p>
                <div className="h-1 w-0 bg-cyan-500 group-hover:w-full transition-all duration-500 absolute bottom-0 left-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-12">Authorized and Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="flex items-center gap-3 font-black text-2xl text-slate-800 tracking-tighter italic uppercase">PERURI</div>
            <div className="flex items-center gap-3 font-black text-2xl text-slate-800 tracking-tighter italic uppercase">KOMINFO</div>
            <div className="flex items-center gap-3 font-black text-2xl text-slate-800 tracking-tighter italic uppercase">CERT-ID</div>
            <div className="flex items-center gap-3 font-black text-2xl text-slate-800 tracking-tighter italic uppercase">GLOBAL-SIGN</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/10 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-12 md:p-24 rounded-[40px] border border-white/10 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Ubah Dokumen Anda Menjadi <br /><span className="text-cyan-400">Alur Kerja yang Pintar</span></h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg">Mulai efisiensi digital hari ini dengan platform tanda tangan elektronik paling modern.</p>
            <button className="px-12 py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-slate-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95">
              Daftar Gratis Sekarang
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
