"use client";
import { useState, useRef } from 'react';

export default function DashboardPage() {
  const [abaAtiva, setAbaAtiva] = useState('dashboard');
  const [formato, setFormato] = useState('9-16');
  const [videoURL, setVideoURL] = useState<string | null>(null);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>EXPOST <span className="badge">AI</span></h2>
        <nav className="menu">
          <a href="#" className="menu-item active">📊 Dashboard</a>
          <a href="#" className="menu-item" onClick={() => setAbaAtiva('editor')}>✂️ Editor</a>
        </nav>
      </aside>
      <main className="main-content">
        <h1>Dashboard</h1>
        <p className="subtitle">Painel Escuro Ativo com Sucesso!</p>
        <button className="btn-primary" onClick={() => setAbaAtiva('editor')}>+ Novo Vídeo</button>
      </main>
    </div>
  );
}
