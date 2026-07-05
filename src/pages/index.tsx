import React, { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [videos] = useState([
    { id: 1, title: "Video_Campanha_Natal_Final.mp4", status: "Concluído", date: "Hoje, 14:32", size: "45.2 MB" },
    { id: 2, title: "Corte_Podcast_Ep03_Instagram.mp4", status: "Processando (85%)", date: "Hoje, 11:15", size: "12.8 MB" },
    { id: 3, title: "Anuncio_Roda_De_Descontos.mp4", status: "Aguardando", date: "Ontem, 18:40", size: "89.1 MB" }
  ]);

  return (
    <div className="flex h-screen bg-[#09090b] text-[#f4f4f5] font-sans overflow-hidden">
      
      {/* SIDEBAR LATERAL */}
      <aside className="w-64 bg-[#18181b] border-r border-[#27272a] flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="p-6 flex items-center gap-2 border-b border-[#27272a]">
            <div className="bg-red-600 text-white font-black px-2 py-1 rounded text-xs tracking-wider">EXPOST</div>
            <span className="font-bold tracking-tight text-sm text-zinc-400">AI</span>
          </div>
          
          {/* Menu de Navegação */}
          <nav className="p-4 space-y-1">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'dashboard' 
                  ? 'bg-zinc-800 text-white font-semibold' 
                  : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
              }`}
            >
              📊 Dashboard
            </button>
            
            <button 
              onClick={() => setActiveTab('editor')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'editor' 
                  ? 'bg-zinc-800 text-white font-semibold' 
                  : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
              }`}
            >
              ✂️ Editor de Vídeo
            </button>
          </nav>
        </div>

        <div className="p-4 border-t border-[#27272a] bg-zinc-900/50 flex items-center justify-between text-xs text-zinc-500">
          <span>Versão 1.0.0</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-emerald-500 font-medium">Online</span>
          </div>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 bg-[#09090b] flex flex-col overflow-y-auto">
        <header className="h-16 border-b border-[#27272a] px-8 flex items-center justify-between bg-[#09090b]/80">
          <div className="text-sm font-medium text-zinc-400">
            {activeTab === 'dashboard' ? 'Geral / Visão Global' : 'Ferramentas / Editor'}
          </div>
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-300">
            KC
          </div>
        </header>

        <div className="p-8 flex-1 max-w-5xl w-full mx-auto">
          {activeTab === 'dashboard' ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
                  <p className="text-zinc-400 text-sm mt-1">Gerencie seus projetos e vídeos gerados por Inteligência Artificial.</p>
                </div>
                <button 
                  onClick={() => setActiveTab('editor')}
                  className="bg-red-600 hover:bg-red-700 text-white font-medium text-sm px-4 py-2.5 rounded-lg transition-all"
                >
                  + Novo Vídeo
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#18181b] border border-[#27272a] p-5 rounded-xl">
                  <div className="text-xs font-medium text-zinc-400 uppercase">Total de Vídeos</div>
                  <div className="text-2xl font-bold text-white mt-2">12</div>
                </div>
                <div className="bg-[#18181b] border border-[#27272a] p-5 rounded-xl">
                  <div className="text-xs font-medium text-zinc-400 uppercase">Espaço Utilizado</div>
                  <div className="text-2xl font-bold text-white mt-2">1.4 GB</div>
                </div>
                <div className="bg-[#18181b] border border-[#27272a] p-5 rounded-xl">
                  <div className="text-xs font-medium text-zinc-400 uppercase">Créditos</div>
                  <div className="text-2xl font-bold text-emerald-400 mt-2">450 min</div>
                </div>
              </div>

              {/* Tabela de Vídeos */}
              <div className="bg-[#18181b] border border-[#27272a] rounded-xl overflow-hidden mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-900/50 text-xs font-semibold text-zinc-400 border-b border-[#27272a]">
                        <th className="p-4">Nome do Arquivo</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Data</th>
                        <th className="p-4 text-right">Tamanho</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#27272a] text-sm text-zinc-300">
                      {videos.map((video) => (
                        <tr key={video.id}>
                          <td className="p-4 text-white font-medium">{video.title}</td>
                          <td className="p-4">
                            <span className="px-2 py-0.5 rounded text-xs bg-zinc-800 text-zinc-300">{video.status}</span>
                          </td>
                          <td className="p-4 text-zinc-400">{video.date}</td>
                          <td className="p-4 text-right font-mono text-zinc-400">{video.size}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-white">Editor de Vídeo</h1>
              <div className="border-2 border-dashed border-[#27272a] rounded-xl p-12 text-center bg-zinc-900/20">
                <p className="text-zinc-300">Arraste e solte o seu vídeo aqui</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
