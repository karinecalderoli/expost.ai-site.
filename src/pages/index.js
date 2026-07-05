import React, { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [videos] = useState([
    { id: 1, title: "Video_Campanha_Natal_Final.mp4", status: "Concluído", date: "Hoje, 14:32", size: "45.2 MB" },
    { id: 2, title: "Corte_Podcast_Ep03_Instagram.mp4", status: "Processando (85%)", date: "Hoje, 11:15", size: "12.8 MB" },
    { id: 3, title: "Anuncio_Roda_De_Descontos.mp4", status: "Aguardando", date: "Ontem, 18:40", size: "89.1 MB" }
  ]);

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#09090b', color: '#f4f4f5', fontFamily: 'sans-serif', overflow: 'hidden' }}>
      
      {/* SIDEBAR */}
      <aside style={{ width: '16rem', backgroundColor: '#18181b', borderRight: '1px solid #27272a', display: 'flex', flexDirection: 'col', justifyContent: 'space-between', padding: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <span style={{ backgroundColor: '#dc2626', color: 'white', fontWeight: 'bold', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem' }}>EXPOST</span>
            <span style={{ color: '#a1a1aa', fontWeight: 'bold', fontSize: '0.875rem' }}>AI</span>
          </div>
          
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <button 
              onClick={() => setActiveTab('dashboard')}
              style={{ width: '100%', textAlign: 'left', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: 'none', backgroundColor: activeTab === 'dashboard' ? '#27272a' : 'transparent', color: activeTab === 'dashboard' ? 'white' : '#a1a1aa', cursor: 'pointer', fontWeight: '500' }}
            >
              📊 Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('editor')}
              style={{ width: '100%', textAlign: 'left', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: 'none', backgroundColor: activeTab === 'editor' ? '#27272a' : 'transparent', color: activeTab === 'editor' ? 'white' : '#a1a1aa', cursor: 'pointer', fontWeight: '500' }}
            >
              ✂️ Editor de Vídeo
            </button>
          </nav>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        <header style={{ height: '4rem', borderBottom: '1px solid #27272a', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '0.875rem', color: '#a1a1aa' }}>
            {activeTab === 'dashboard' ? 'Geral / Visão Global' : 'Ferramentas / Editor'}
          </div>
          <div style={{ width: '2rem', height: '2rem', borderRadius: '9999px', backgroundColor: '#27272a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>
            KC
          </div>
        </header>

        <div style={{ padding: '2rem', flex: 1, maxWidth: '64rem', width: '100%', margin: '0 auto' }}>
          {activeTab === 'dashboard' ? (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                  <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white', margin: 0 }}>Dashboard</h1>
                  <p style={{ color: '#a1a1aa', fontSize: '0.875rem', margin: '0.25rem 0 0 0' }}>Gerencie seus projetos gerados por Inteligência Artificial.</p>
                </div>
                <button onClick={() => setActiveTab('editor')} style={{ backgroundColor: '#dc2626', color: 'white', border: 'none', padding: '0.625rem 1rem', borderRadius: '0.5rem', fontWeight: '500', cursor: 'pointer' }}>
                  + Novo Vídeo
                </button>
              </div>

              <div style={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '0.75rem', overflow: 'hidden' }}>
                <div style={{ padding: '1.25rem', borderBottom: '1px solid #27272a' }}>
                  <h3 style={{ margin: 0, color: 'white' }}>Arquivos Recentes</h3>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#09090b', color: '#a1a1aa', fontSize: '0.75rem', borderBottom: '1px solid #27272a' }}>
                      <th style={{ padding: '1rem' }}>Nome</th>
                      <th style={{ padding: '1rem' }}>Status</th>
                      <th style={{ padding: '1rem' }}>Data</th>
                    </tr>
                  </thead>
                  <tbody style={{ color: '#e4e4e7', fontSize: '0.875rem' }}>
                    {videos.map(video => (
                      <tr key={video.id} style={{ borderBottom: '1px solid #27272a' }}>
                        <td style={{ padding: '1rem' }}>{video.title}</td>
                        <td style={{ padding: '1rem' }}><span style={{ color: '#10b981' }}>{video.status}</span></td>
                        <td style={{ padding: '1rem', color: '#71717a' }}>{video.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>Editor de Vídeo</h1>
              <div style={{ border: '2px dashed #27272a', borderRadius: '0.75rem', padding: '4rem', textAlign: 'center', backgroundColor: '#18181b' }}>
                <p style={{ color: '#a1a1aa', margin: 0 }}>Arraste e solte o seu vídeo aqui para começar.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
