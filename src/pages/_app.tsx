"use client";
import { useState } from 'react';

export default function DashboardPage() {
  const [abaAtiva, setAbaAtiva] = useState('dashboard');

  return (
    <div className="flex h-screen bg-[#09090b] text-white font-sans">
      {/* Sidebar / Barra Lateral */}
      <aside className="w-64 bg-[#121214] border-r border-[#1f1f23] p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">EXPOST</span>
            <span className="text-sm font-semibold tracking-wider text-gray-400">AI</span>
          </div>
          
          <nav className="space-y-2">
            <button 
              onClick={() => setAbaAtiva('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${abaAtiva === 'dashboard' ? 'bg-[#1f1f23] text-white' : 'text-gray-400 hover:bg-[#1a1a1e] hover:text-white'}`}
            >
              📊 Dashboard
            </button>
            <button 
              onClick={() => setAbaAtiva('editor')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${abaAtiva === 'editor' ? 'bg-[#1f1f23] text-white' : 'text-gray-400 hover:bg-[#1a1a1e] hover:text-white'}`}
            >
              ✂️ Editor
            </button>
          </nav>
        </div>
        
        <div className="text-xs text-gray-500 border-t border-[#1f1f23] pt-4">
          Status: <span className="text-green-500 font-medium">Online</span>
        </div>
      </aside>

      {/* Main Content / Conteúdo Principal */}
      <main className="flex-1 p-10 overflow-y-auto">
        {abaAtiva === 'dashboard' ? (
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
            <p className="text-gray-400 mb-8">Painel Escuro Ativo com Sucesso!</p>
            
            <button 
              onClick={() => setAbaAtiva('editor')}
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-red-900/20"
            >
              + Novo Vídeo
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Editor de Vídeo</h1>
            <p className="text-gray-400 mb-8">Área de edição da IA.</p>
            <div className="border border-dashed border-[#1f1f23] rounded-xl p-12 text-center text-gray-500">
              Arrasta os teus ficheiros para aqui para começar.
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
