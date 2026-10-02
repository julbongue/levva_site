'use client';

import React, { useState } from 'react';
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ChevronDown,
  Package,
  Car,
  Navigation,
  Building2,
  Store,
  Utensils,
  Menu,
  X,
  Compass,
  Users,
  Check,
  Banknote,
  BadgeCheck,
  Search
} from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('entregas'); // 'entregas' | 'corridas'

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "O que é a Levva?",
      a: "A Levva é uma plataforma tecnológica angolana desenhada para simplificar o transporte de passageiros e de encomendas, com soluções práticas adaptadas à realidade local de Luanda e de Angola."
    },
    {
      q: "A Levva já trabalha com transporte de passageiros?",
      a: "Sim! A Levva Mobilidade já está em funcionamento em Luanda. Podes pedir viagens com motoristas parceiros credenciados, acompanhar o trajeto em tempo real e viajar com conforto, segurança e tarifas transparentes."
    },
    {
      q: "Como funciona uma entrega de encomenda?",
      a: "Basta indicar o ponto de recolha e de entrega no mapa, especificar os detalhes do pacote (documentos, medicamentos, comida ou outros itens) e confirmar o pedido. A plataforma encontra o estafeta mais próximo para recolher e entregar."
    },
    {
      q: "Como escolho os locais de recolha e entrega?",
      a: "Podes pesquisar por bairros e pontos de referência conhecidos em Luanda ou selecionar a localização exata tocando diretamente no mapa integrado da Levva."
    },
    {
      q: "Posso acompanhar a viagem ou a entrega em tempo real?",
      a: "Sim. Desde a aceitação pelo motorista ou estafeta até à chegada ao destino, podes visualizar o percurso, a aproximação e o tempo estimado em tempo real."
    },
    {
      q: "Como funciona o pagamento?",
      a: "O pagamento é efetuado de forma simples e direta em dinheiro no momento da entrega ou conclusão da viagem, com o valor exato em Kwanzas (Kz) apresentado com total transparência antes de confirmar o pedido."
    },
    {
      q: "Como posso ser motorista ou estafeta parceiro?",
      a: "Podes candidatar-te diretamente através da secção 'Para Parceiros'. Aceitamos estafetas com motorizadas ou carrinhas, e motoristas com viaturas particulares ou integrados em frotas parceiras credenciadas como a AJJ."
    }
  ];

  return (
    <div className="landing-wrapper">
      {/* 1. NAVBAR */}
      <header className="navbar">
        <div className="container">
          <div className="navbar-inner">
            {/* Official Levva Brandmark */}
            <a href="#" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/levva-logo.svg"
                alt="Levva — Rápida para entregar, segura para confiar."
                style={{ height: '38px', width: 'auto', display: 'block' }}
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav>
              <ul className="nav-links">
                <li><a href="#produto" className="nav-link">Produto</a></li>
                <li><a href="#como-funciona" className="nav-link">Como funciona</a></li>
                <li><a href="#negocios" className="nav-link">Para negócios</a></li>
                <li><a href="#parceiros" className="nav-link">Para parceiros</a></li>
                <li><a href="#filosofia" className="nav-link">Sobre</a></li>
                <li><a href="#faq" className="nav-link">FAQ</a></li>
              </ul>
            </nav>

            {/* Desktop CTA */}
            <div className="nav-cta">
              <a href="#produto" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
                Começar
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#produto" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Produto</a>
          <a href="#como-funciona" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Como funciona</a>
          <a href="#negocios" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Para negócios</a>
          <a href="#parceiros" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Para parceiros</a>
          <a href="#filosofia" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
          <a href="#faq" className="nav-link" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a href="#produto" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)} style={{ textAlign: 'center', marginTop: '8px' }}>
            Começar
          </a>
        </div>
      </header>

      {/* 2. HERO */}
      <section className="section hero bg-pin-pattern">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column: Copy */}
            <div className="hero-content">
              <div className="badge badge-orange">
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F2994A' }}></span>
                Mobilidade & Entregas Feitas para Angola
              </div>

              <h1 className="hero-title">
                A mobilidade de Angola, feita para a <span>realidade de Angola</span>.
              </h1>

              <p className="hero-subtitle">
                Viagens de passageiros confortáveis e entregas de encomendas ágeis, pensadas para o dia a dia de quem vive, trabalha e se move por Angola.
              </p>

              <div className="hero-actions">
                <a href="#produto" className="btn btn-primary" style={{ padding: '15px 30px', fontSize: '1.02rem', fontWeight: 700 }}>
                  <Package size={20} /> Fazer uma entrega
                </a>
                <a href="#produto" className="btn btn-navy" style={{ padding: '15px 30px', fontSize: '1.02rem', fontWeight: 700 }}>
                  <Car size={20} /> Pedir uma corrida
                </a>
              </div>

              <div className="hero-trust-row">
                <div className="trust-item">
                  <CheckCircle2 size={18} color="#F2994A" />
                  <span>Transporte de Passageiros Ativo</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={18} color="#F2994A" />
                  <span>Entregas com Rastreio</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={18} color="#F2994A" />
                  <span>Valores Claros em Kwanzas (Kz)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Smartphone Mockup (Fiel à App Real Levva Customer) */}
            <div className="mockup-wrapper">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  {/* Top Bar Real Levva Customer */}
                  <div style={{
                    padding: '12px 14px 10px',
                    background: '#FFFFFF',
                    borderBottom: '1px solid #E2E8F0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}>
                    {/* App Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '6px',
                          background: '#122340',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <MapPin size={15} color="#F2994A" fill="#F2994A" />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.82rem', fontWeight: 900, color: '#122340', letterSpacing: '0.04em', lineHeight: 1 }}>
                            LEVVA
                          </div>
                          <div style={{ fontSize: '0.62rem', color: '#5B6472', lineHeight: 1, marginTop: '2px' }}>
                            Mobilidade e entregas
                          </div>
                        </div>
                      </div>

                      <span style={{
                        background: '#ECFDF5',
                        color: '#047857',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '10px',
                        border: '1px solid #A7F3D0'
                      }}>
                        ● Online
                      </span>
                    </div>

                    {/* Segmented Switch: Entregas (Encomendas) vs Corridas (Mobilidade) */}
                    <div style={{
                      background: '#F1F5F9',
                      borderRadius: '10px',
                      padding: '3px',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '4px'
                    }}>
                      <button
                        onClick={() => setActiveTab('entregas')}
                        style={{
                          background: activeTab === 'entregas' ? '#122340' : 'transparent',
                          color: activeTab === 'entregas' ? '#FFFFFF' : '#5B6472',
                          border: 'none',
                          padding: '6px 4px',
                          borderRadius: '8px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          transition: 'all 0.2s'
                        }}
                      >
                        <Package size={13} color={activeTab === 'entregas' ? '#F2994A' : '#5B6472'} />
                        <span>Entregas</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('corridas')}
                        style={{
                          background: activeTab === 'corridas' ? '#122340' : 'transparent',
                          color: activeTab === 'corridas' ? '#FFFFFF' : '#5B6472',
                          border: 'none',
                          padding: '6px 4px',
                          borderRadius: '8px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          transition: 'all 0.2s'
                        }}
                      >
                        <Car size={13} color={activeTab === 'corridas' ? '#F2994A' : '#5B6472'} />
                        <span>Corridas</span>
                      </button>
                    </div>
                  </div>

                  {/* Map Visualization Area (Luanda OpenStreetMap Style) */}
                  <div className="phone-map-view">
                    {/* Luanda Coastline & Map Canvas */}
                    <svg viewBox="0 0 320 230" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                      {/* Water / Baía de Luanda */}
                      <path d="M 0 0 L 110 0 C 105 50 85 90 60 140 C 40 180 10 210 0 230 Z" fill="#D4E6F1" />
                      <text x="18" y="70" fill="#2980B9" fontSize="8" fontWeight="600" opacity="0.6">Baía de Luanda</text>

                      {/* Land roads grid */}
                      <path d="M 80 30 L 320 60" stroke="#E2E8F0" strokeWidth="4" />
                      <path d="M 70 95 L 320 110" stroke="#E2E8F0" strokeWidth="5" />
                      <path d="M 50 160 L 320 180" stroke="#E2E8F0" strokeWidth="4" />
                      <path d="M 140 0 L 160 230" stroke="#E2E8F0" strokeWidth="5" />
                      <path d="M 230 0 L 250 230" stroke="#E2E8F0" strokeWidth="4" />

                      {/* Main Arteries: Estrada de Catete / Deolinda Rodrigues */}
                      <path d="M 90 70 Q 180 100 290 140" stroke="#CBD5E1" strokeWidth="6" />

                      {/* Bairros labels */}
                      <text x="100" y="45" fill="#94A3B8" fontSize="7.5" fontWeight="600">Maianga</text>
                      <text x="175" y="40" fill="#94A3B8" fontSize="7.5" fontWeight="600">Maculusso</text>
                      <text x="75" y="145" fill="#94A3B8" fontSize="7.5" fontWeight="600">Samba</text>
                      <text x="180" y="90" fill="#94A3B8" fontSize="7.5" fontWeight="600">Bairro Popular</text>
                      <text x="235" y="165" fill="#94A3B8" fontSize="7.5" fontWeight="600">Palanca</text>

                      {/* Active Route Path from Video: Bairro Neves Bendinha -> Estrada da Samba */}
                      {activeTab === 'entregas' ? (
                        <>
                          {/* Route Path (Bairro Popular -> Estrada da Samba) */}
                          <path
                            d="M 215 95 Q 160 120 95 160"
                            stroke="#F2994A"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray="6 4"
                            fill="none"
                          />
                          {/* Moving Motorcycle Courier */}
                          <circle cx="155" cy="128" r="10" fill="#122340" />
                          <circle cx="155" cy="128" r="4" fill="#F2994A" />
                        </>
                      ) : (
                        <>
                          {/* Passenger Route: Maianga -> Talatona */}
                          <path
                            d="M 120 50 Q 170 120 220 200"
                            stroke="#F2994A"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray="6 4"
                            fill="none"
                          />
                          {/* Moving Partner Car */}
                          <circle cx="170" cy="125" r="10" fill="#122340" />
                          <circle cx="170" cy="125" r="4" fill="#F2994A" />
                        </>
                      )}
                    </svg>

                    {/* Point A Marker (Recolha) */}
                    <div style={{
                      position: 'absolute',
                      top: activeTab === 'entregas' ? '78px' : '38px',
                      left: activeTab === 'entregas' ? '215px' : '120px',
                      transform: 'translate(-50%, -100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      pointerEvents: 'none'
                    }}>
                      <div style={{
                        background: '#122340',
                        color: '#FFFFFF',
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        padding: '3px 6px',
                        borderRadius: '6px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                      }}>
                        {activeTab === 'entregas' ? 'Bairro Neves Bendinha' : 'Maianga'}
                      </div>
                      <div style={{ width: '8px', height: '8px', background: '#122340', transform: 'rotate(45deg)', marginTop: '-4px' }}></div>
                    </div>

                    {/* Point B Marker (Destino) */}
                    <div style={{
                      position: 'absolute',
                      top: activeTab === 'entregas' ? '160px' : '200px',
                      left: activeTab === 'entregas' ? '95px' : '220px',
                      transform: 'translate(-50%, -100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      pointerEvents: 'none'
                    }}>
                      <div style={{
                        background: '#F2994A',
                        color: '#FFFFFF',
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        padding: '3px 6px',
                        borderRadius: '6px',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 2px 8px rgba(242,153,74,0.4)'
                      }}>
                        {activeTab === 'entregas' ? 'Estrada da Samba' : 'Talatona'}
                      </div>
                      <div style={{ width: '8px', height: '8px', background: '#F2994A', transform: 'rotate(45deg)', marginTop: '-4px' }}></div>
                    </div>
                  </div>

                  {/* Bottom Sheet Card Real da Levva */}
                  <div style={{
                    background: '#FFFFFF',
                    borderTop: '1px solid #E2E8F0',
                    padding: '12px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}>
                    {/* Status Row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#F2994A',
                          boxShadow: '0 0 0 3px rgba(242,153,74,0.25)'
                        }}></div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#122340' }}>
                          {activeTab === 'entregas' ? 'Pedido criado' : 'Motorista a caminho'}
                        </span>
                      </div>

                      <span style={{
                        background: 'rgba(242, 153, 74, 0.12)',
                        color: '#E07B2A',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '6px'
                      }}>
                        {activeTab === 'entregas' ? 'Atual' : 'ETA: 6 min'}
                      </span>
                    </div>

                    {/* Stepper Preview */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.66rem',
                      color: '#5B6472'
                    }}>
                      <span style={{ color: '#122340', fontWeight: 700 }}>1. Criado</span>
                      <span>→</span>
                      <span>2. A procurar</span>
                      <span>→</span>
                      <span>3. Em trânsito</span>
                    </div>

                    {/* Real Order Details from Video */}
                    <div style={{
                      background: '#F8FAFC',
                      borderRadius: '8px',
                      padding: '8px 10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: '1px solid #EDF2F7'
                    }}>
                      <div>
                        <div style={{ fontSize: '0.65rem', color: '#64748B' }}>
                          {activeTab === 'entregas' ? 'TIPO DE ENCOMENDA' : 'VIATURA & PARCEIRO'}
                        </div>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#122340' }}>
                          {activeTab === 'entregas' ? 'Medicamento • Expressa' : 'Toyota Starlet • AJJ'}
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.65rem', color: '#64748B' }}>
                          PAGAMENTO (DINHEIRO)
                        </div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#F2994A' }}>
                          {activeTab === 'entregas' ? '1.886 Kz' : '2.450 Kz'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUÇÃO DO PRODUTO */}
      <section id="produto" className="section section-white">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '12px' }}>
              Soluções Levva
            </div>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '16px' }}>
              Uma plataforma. Duas formas de mover.
            </h2>
            <p>
              Tecnologia prática pensada para resolver o transporte de passageiros e de encomendas em Angola de forma confiável e eficiente.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {/* Card 1: Levva Entregas */}
            <div className="card" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(242, 153, 74, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F2994A'
                }}>
                  <Package size={28} />
                </div>
                <span className="badge badge-orange">Disponível • Piloto Luanda</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Levva Entregas</h3>
              <p style={{ fontWeight: 600, color: '#122340', marginBottom: '8px' }}>
                Envia o que precisa de chegar.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Cria pedidos em segundos, seleciona os pontos de recolha e entrega com precisão no mapa e acompanha o estafeta até ao destino final.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                  <Check size={16} color="#F2994A" /> Criação ágil de pedidos de entrega
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                  <Check size={16} color="#F2994A" /> Seleção de locais via mapa interativo
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                  <Check size={16} color="#F2994A" /> Acompanhamento do percurso em tempo real
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                  <Check size={16} color="#F2994A" /> Pagamento simples em dinheiro no destino
                </li>
              </ul>

              <a href="#como-funciona" className="btn btn-navy" style={{ width: '100%' }}>
                Ver como funciona <ArrowRight size={16} />
              </a>
            </div>

            {/* Card 2: Levva Mobilidade */}
            <div className="card" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(18, 35, 64, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#122340'
                }}>
                  <Car size={28} />
                </div>
                <span className="badge" style={{ backgroundColor: '#ECFDF5', color: '#047857', border: '1px solid #A7F3D0' }}>
                  Disponível • Transporte de Passageiros
                </span>
              </div>

              <h3 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>Levva Mobilidade</h3>
              <p style={{ fontWeight: 600, color: '#122340', marginBottom: '8px' }}>
                Chegar ao destino também é simples.
              </p>
              <p style={{ marginBottom: '24px' }}>
                A vertical de transporte de passageiros está funcional para oferecer viagens urbanas rápidas, confortáveis e com respeito pelo passageiro e motorista.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                  <Check size={16} color="#F2994A" /> Corridas urbanas com rotas transparentes
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                  <Check size={16} color="#F2994A" /> Motoristas parceiros credenciados e verificados
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                  <Check size={16} color="#F2994A" /> Estimativas de percurso e valor claro antes de arrancar
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                  <Check size={16} color="#F2994A" /> Pagamento direto em dinheiro ao motorista
                </li>
              </ul>

              <a href="#como-funciona" className="btn btn-primary" style={{ width: '100%' }}>
                Pedir uma corrida <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMO FUNCIONA */}
      <section id="como-funciona" className="section section-light bg-pin-pattern">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '12px' }}>
              Passo a Passo
            </div>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '16px' }}>
              Como funciona na Levva
            </h2>
            <p>
              Quer estejas a enviar uma encomenda ou a pedir uma viagem de passageiros, o processo é simples e direto.
            </p>
          </div>

          <div className="steps-grid">
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-number">01</div>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(242, 153, 74, 0.12)',
                color: '#F2994A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <MapPin size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Define o percurso</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Indica o ponto de recolha e o destino no mapa, ou pesquisa pelo local de referência em Luanda.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-number">02</div>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(242, 153, 74, 0.12)',
                color: '#F2994A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Clock size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Confirma o pedido</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Confere a estimativa de tempo e o valor transparente em Kwanzas e confirma a solicitação.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-number">03</div>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(242, 153, 74, 0.12)',
                color: '#F2994A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Navigation size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Encontramos o parceiro</h3>
              <p style={{ fontSize: '0.95rem' }}>
                O sistema aproxima o teu pedido do estafeta ou motorista credenciado mais próximo na tua zona.
              </p>
            </div>

            {/* Step 4 */}
            <div className="step-card">
              <div className="step-number">04</div>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(242, 153, 74, 0.12)',
                color: '#F2994A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <CheckCircle2 size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Acompanha até à entrega</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Segue a viagem ou encomenda em tempo real no mapa e conclui o pagamento com tranquilidade em dinheiro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DESTAQUE DO MAPA */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>
            <div className="badge badge-orange" style={{ marginBottom: '12px' }}>
              Navegação no Terreno
            </div>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '16px', color: '#FFFFFF' }}>
              Do ponto A ao ponto B, sem complicar.
            </h2>
            <p style={{ color: '#A3ADC2' }}>
              Uma interface limpa que compreende a geografia e os pontos de referência de Luanda.
            </p>
          </div>

          <div className="luanda-map-container">
            {/* Visual Panel */}
            <div className="map-visual-panel">
              <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.15,
                backgroundImage: 'radial-gradient(#FFFFFF 1.5px, transparent 1.5px)',
                backgroundSize: '20px 20px'
              }}></div>

              {/* Luanda Arteries / Roads representation */}
              <svg viewBox="0 0 700 440" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
                <path d="M 50 30 Q 150 120 220 220 T 400 360" stroke="#1E3A5F" strokeWidth="8" fill="none" opacity="0.4" />
                <path d="M 120 80 L 600 240" stroke="#1E3A5F" strokeWidth="4" fill="none" opacity="0.6" />
                <path d="M 80 180 L 550 380" stroke="#1E3A5F" strokeWidth="3" fill="none" opacity="0.5" />
                <path d="M 280 40 L 320 400" stroke="#1E3A5F" strokeWidth="4" fill="none" opacity="0.5" />
                
                {/* Active Route */}
                <path
                  d="M 160 110 Q 250 160 320 230 T 460 290"
                  stroke="#F2994A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="8 6"
                  fill="none"
                />

                {/* Point A */}
                <circle cx="160" cy="110" r="14" fill="#122340" stroke="#F2994A" strokeWidth="3" />
                <circle cx="160" cy="110" r="5" fill="#FFFFFF" />

                {/* Vehicle in transit */}
                <circle cx="310" cy="225" r="10" fill="#F2994A" />
                <circle cx="310" cy="225" r="4" fill="#122340" />

                {/* Point B */}
                <circle cx="460" cy="290" r="16" fill="#F2994A" stroke="#FFFFFF" strokeWidth="3" />
                <circle cx="460" cy="290" r="6" fill="#122340" />
              </svg>

              {/* Zone Tag 1 */}
              <div style={{
                position: 'absolute',
                top: '75px',
                left: '185px',
                background: '#122340',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#FFFFFF',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 600
              }}>
                <span style={{ color: '#F2994A', marginRight: '6px' }}>●</span> Ponto A: Maculusso
              </div>

              {/* Zone Tag 2 */}
              <div style={{
                position: 'absolute',
                top: '260px',
                left: '485px',
                background: '#F2994A',
                color: '#FFFFFF',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 700
              }}>
                Ponto B: Talatona
              </div>
            </div>

            {/* Info Panel */}
            <div className="map-info-panel">
              <div>
                <span className="badge badge-orange" style={{ marginBottom: '16px' }}>
                  Cartografia Adaptada a Angola
                </span>
                <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '12px' }}>
                  Precisão com base em pontos reais e vias de Luanda
                </h3>
                <p style={{ color: '#A3ADC2', fontSize: '0.95rem', marginBottom: '24px' }}>
                  Tanto para estafetas de mota como para motoristas de passageiros, a indicação direta no mapa evita voltas desnecessárias e garante pontualidade.
                </p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '12px',
                padding: '18px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{ fontSize: '0.8rem', color: '#F2994A', fontWeight: 600, marginBottom: '6px' }}>
                  ESTADO ATUAL DO SERVIÇO
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                  Em trânsito • Rota otimizada
                </div>
                <div style={{ fontSize: '0.85rem', color: '#8FA1BC' }}>
                  Distância estimada: 11.4 km • Tempo: ~22 min
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. “FEITA PARA ANGOLA” */}
      <section id="filosofia" className="section section-light">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '12px' }}>
              Valores da Marca
            </div>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '16px' }}>
              Construída a partir da realidade de Angola.
            </h2>
            <p>
              “Tornar o transporte de pessoas e encomendas em Angola mais rápido, mais simples e mais seguro — começando pelo terreno, não pelo ecrã.”
            </p>
          </div>

          <div className="props-grid">
            {/* LOCAL */}
            <div className="prop-card">
              <div className="prop-icon-wrap">
                <Compass size={24} />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F2994A', letterSpacing: '0.05em', marginBottom: '6px' }}>
                01 • LOCAL
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Pensada para o terreno</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Desenvolvida a considerar as vias, os pontos de referência e as reais dinâmicas de circulação do dia a dia angolano.
              </p>
            </div>

            {/* SIMPLES */}
            <div className="prop-card">
              <div className="prop-icon-wrap">
                <CheckCircle2 size={24} />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F2994A', letterSpacing: '0.05em', marginBottom: '6px' }}>
                02 • SIMPLES
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Sem passos desnecessários</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Interfaces diretas e funcionais que resolvem o transporte sem fricção, excesso de botões ou barreiras tecnológicas.
              </p>
            </div>

            {/* PRÓXIMA */}
            <div className="prop-card">
              <div className="prop-icon-wrap">
                <Users size={24} />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F2994A', letterSpacing: '0.05em', marginBottom: '6px' }}>
                03 • PRÓXIMA
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Tecnologia que fala como gente</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Comunicação clara, honesta e em português natural, conectando passageiros, motoristas e entregadores com respeito.
              </p>
            </div>

            {/* CONFIÁVEL */}
            <div className="prop-card">
              <div className="prop-icon-wrap">
                <ShieldCheck size={24} />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F2994A', letterSpacing: '0.05em', marginBottom: '6px' }}>
                04 • CONFIÁVEL
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Cumprimos o que prometemos</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Sem números fabricados ou promessas irreais. Um compromisso honesto com a segurança, previsibilidade e integridade de cada serviço.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRODUTO REAL */}
      <section className="section section-white">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '12px' }}>
              Experiência no Terreno
            </div>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '16px' }}>
              Três experiências conectadas e ativas
            </h2>
            <p>
              A Levva une passageiros, clientes corporativos, estafetas e motoristas de forma fluida.
            </p>
          </div>

          <div className="experience-grid">
            {/* Experience 1: Cliente / Passageiro */}
            <div className="exp-card">
              <div className="exp-card-header">
                <span className="badge badge-orange" style={{ marginBottom: '10px' }}>Para Quem Se Desloca ou Envia</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '6px' }}>Pedir, Acompanhar e Pagar</h3>
                <p style={{ fontSize: '0.9rem' }}>Controlo da corrida ou da encomenda na palma da mão.</p>
              </div>
              <div className="exp-card-preview">
                <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#5B6472' }}>1. Localização no mapa</div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#122340' }}>Ponto de Partida e Chegada selecionados</div>
                </div>
                <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#5B6472' }}>2. Acompanhamento</div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#122340' }}>Viatura / Estafeta a caminho</div>
                </div>
                <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#5B6472' }}>3. Pagamento</div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#122340' }}>Pagamento direto em dinheiro no destino</div>
                </div>
              </div>
            </div>

            {/* Experience 2: Entregador */}
            <div className="exp-card">
              <div className="exp-card-header">
                <span className="badge badge-navy" style={{ marginBottom: '10px' }}>Para o Entregador</span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '6px' }}>Entregas Ágeis em Duas Rodas</h3>
                <p style={{ fontSize: '0.9rem' }}>Ferramenta de trabalho para estafetas com mota ou carrinha.</p>
              </div>
              <div className="exp-card-preview">
                <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#5B6472' }}>1. Estado</div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }}></span>
                    Online para entregas
                  </div>
                </div>
                <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#5B6472' }}>2. Notificação de Pedido</div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#122340' }}>Recolha de pacote a 1.2 km</div>
                </div>
                <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#5B6472' }}>3. Confirmação</div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#122340' }}>Entrega validada com sucesso</div>
                </div>
              </div>
            </div>

            {/* Experience 3: Motorista Levva Mobilidade */}
            <div className="exp-card">
              <div className="exp-card-header">
                <span className="badge" style={{ backgroundColor: '#ECFDF5', color: '#047857', border: '1px solid #A7F3D0', marginBottom: '10px' }}>
                  Para o Motorista de Passageiros
                </span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '6px' }}>Corridas Urbanas Ativas</h3>
                <p style={{ fontSize: '0.9rem' }}>Plataforma completa para condutores e frotas parceiras.</p>
              </div>
              <div className="exp-card-preview">
                <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#5B6472' }}>1. Notificação de Corrida</div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#122340' }}>Passageiro a 400m • Destino claro</div>
                </div>
                <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#5B6472' }}>2. Navegação em Rota</div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#122340' }}>Percurso otimizado em Luanda</div>
                </div>
                <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.75rem', color: '#5B6472' }}>3. Fecho de Viagem</div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#122340' }}>Pagamento direto e encerramento sem atritos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PARA NEGÓCIOS */}
      <section id="negocios" className="section section-light bg-pin-pattern">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '12px' }}>
              Soluções B2B
            </div>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '16px' }}>
              O teu negócio vende. A Levva ajuda a entregar.
            </h2>
            <p>
              Logística sob demanda para comércios e empresas que precisam de levar os seus produtos aos clientes com rapidez e tranquilidade.
            </p>
          </div>

          <div className="business-grid">
            {/* Restaurantes */}
            <div className="business-card">
              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(242, 153, 74, 0.12)',
                  color: '#F2994A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Utensils size={26} />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>Restaurantes & Takeaways</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
                  Garante que as refeições chegam quentes e no tempo prometido. Sem a necessidade de manter uma frota própria permanente.
                </p>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #E2E8F0', paddingTop: '16px', fontSize: '0.88rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={14} color="#F2994A" /> Entregas rápidas de comida
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={14} color="#F2994A" /> Estafetas com caixas térmicas
                </li>
              </ul>
            </div>

            {/* Lojas */}
            <div className="business-card">
              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(242, 153, 74, 0.12)',
                  color: '#F2994A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Store size={26} />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>Lojas & E-Commerce</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
                  Entrega vestuário, eletrónicos, cosméticos e encomendas no próprio dia para compradores em qualquer município da Grande Luanda.
                </p>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #E2E8F0', paddingTop: '16px', fontSize: '0.88rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={14} color="#F2994A" /> Recolhas diárias agendadas
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={14} color="#F2994A" /> Prova de entrega no destino
                </li>
              </ul>
            </div>

            {/* Pequenos Negócios */}
            <div className="business-card">
              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(242, 153, 74, 0.12)',
                  color: '#F2994A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Building2 size={26} />
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>Pequenos Negócios & Escritórios</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
                  Envio seguro de documentos, contratos, encomendas corporativas e pequenas cargas com acompanhamento passo a passo.
                </p>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid #E2E8F0', paddingTop: '16px', fontSize: '0.88rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={14} color="#F2994A" /> Transporte prioritário
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={14} color="#F2994A" /> Relatório simples de envios
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PARA ENTREGADORES E MOTORISTAS */}
      <section id="parceiros" className="section section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>
            <div className="badge badge-orange" style={{ marginBottom: '12px' }}>
              Comunidade de Parceiros
            </div>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '16px', color: '#FFFFFF' }}>
              Queres estar do lado de quem faz a cidade andar?
            </h2>
            <p style={{ color: '#A3ADC2' }}>
              Na Levva, os parceiros no terreno são a espinha dorsal de toda a operação. Valorizamos a tua dedicação, segurança e autonomia.
            </p>
          </div>

          <div className="partner-grid">
            {/* Parceiro 1: Entregador */}
            <div className="partner-card">
              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(242, 153, 74, 0.15)',
                  color: '#F2994A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Package size={26} />
                </div>
                <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '12px' }}>
                  Quero fazer entregas
                </h3>
                <p style={{ color: '#A3ADC2', fontSize: '0.98rem', marginBottom: '24px' }}>
                  Tens motorizada, bicicleta ou carrinha? Junta-te à rede de estafetas da Levva Entregas e recebe pedidos de recolha e entrega no teu percurso diário.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px', color: '#CBD5E1', fontSize: '0.92rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Check size={16} color="#F2994A" /> Horários e disponibilidade geridos por ti
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Check size={16} color="#F2994A" /> Notificações de pedidos em tempo real
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Check size={16} color="#F2994A" /> Suporte operacional próximo e dedicado
                  </li>
                </ul>
              </div>
              <a href="mailto:geral@levva.co.ao?subject=Candidatura%20Entregador%20Levva" className="btn btn-primary" style={{ textAlign: 'center' }}>
                Candidatar como Entregador <ArrowRight size={16} />
              </a>
            </div>

            {/* Parceiro 2: Motorista de Passageiros */}
            <div className="partner-card">
              <div>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Car size={26} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF' }}>Quero conduzir</h3>
                  <span className="badge" style={{ backgroundColor: '#064E3B', color: '#6EE7B7', fontSize: '0.75rem' }}>
                    Inscrições Abertas
                  </span>
                </div>
                <p style={{ color: '#A3ADC2', fontSize: '0.98rem', marginBottom: '24px' }}>
                  Para motoristas com viatura própria ou condutores de frotas parceiras (como a AJJ) que desejam transportar passageiros com segurança e previsibilidade em Luanda.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px', color: '#CBD5E1', fontSize: '0.92rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Check size={16} color="#F2994A" /> Plataforma de passageiros funcional e ativa
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Check size={16} color="#F2994A" /> Passageiros identificados e corridas monitorizadas
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Check size={16} color="#F2994A" /> Integração com frotas e identificação oficial Levva
                  </li>
                </ul>
              </div>
              <a href="mailto:geral@levva.co.ao?subject=Candidatura%20Motorista%20Levva" className="btn btn-secondary-white" style={{ textAlign: 'center' }}>
                Candidatar como Motorista <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CONFIANÇA / TECNOLOGIA */}
      <section className="section section-white">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '12px' }}>
              Base Tecnológica
            </div>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '16px' }}>
              Tecnologia prática focada no essencial
            </h2>
            <p>
              Sem floreados nem complexidade. Apenas as ferramentas certas para fazer as coisas acontecerem.
            </p>
          </div>

          <div className="tech-grid">
            {/* Matching */}
            <div className="tech-card">
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: 'rgba(242, 153, 74, 0.12)',
                color: '#F2994A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Navigation size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Matching</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Aproximamos pedidos e passageiros do parceiro mais adequado de forma rápida e inteligente.
              </p>
            </div>

            {/* Tracking */}
            <div className="tech-card">
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: 'rgba(242, 153, 74, 0.12)',
                color: '#F2994A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Clock size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Tracking</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Acompanha o percurso do veículo em tempo real desde a confirmação até à chegada.
              </p>
            </div>

            {/* Mapa */}
            <div className="tech-card">
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: 'rgba(242, 153, 74, 0.12)',
                color: '#F2994A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <MapPin size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Mapa</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Escolhe pontos de partida, paragem e chegada diretamente no mapa, adaptado a Luanda.
              </p>
            </div>

            {/* Preço Transparente em Kwanzas */}
            <div className="tech-card">
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                backgroundColor: 'rgba(242, 153, 74, 0.12)',
                color: '#F2994A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <Banknote size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Valores Claros</h3>
              <p style={{ fontSize: '0.92rem' }}>
                Preço fixo apresentado em Kwanzas (Kz) antes de confirmar, com pagamento simples e direto em dinheiro no destino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section id="faq" className="section section-light">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '12px' }}>
              Perguntas Frequentes
            </div>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '16px' }}>
              Perguntas e Respostas
            </h2>
            <p>
              Respostas diretas e transparentes sobre os serviços da Levva.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      color="#122340"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. CTA FINAL */}
      <section className="section section-white">
        <div className="container">
          <div className="cta-banner">
            <div style={{ maxWidth: '620px', zIndex: 1 }}>
              <div className="badge badge-orange" style={{ marginBottom: '16px' }}>
                Junta-te ao Movimento
              </div>
              <h2 style={{ fontSize: '2.6rem', color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.2 }}>
                Angola está em movimento.
                <br />
                <span style={{ color: '#F2994A' }}>E a Levva também.</span>
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '1.1rem' }}>
                Começa hoje a enviar encomendas ou a deslocar-te com rapidez e segurança pela cidade.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', zIndex: 1, minWidth: '240px' }}>
              <a href="#produto" className="btn btn-primary" style={{ padding: '16px 28px', fontSize: '1rem', fontWeight: 700 }}>
                <Package size={18} /> Fazer uma entrega
              </a>
              <a href="#produto" className="btn btn-secondary-white" style={{ padding: '15px 28px', fontSize: '0.98rem', fontWeight: 700 }}>
                <Car size={18} /> Pedir uma corrida
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            {/* Brand Col */}
            <div>
              <div style={{ marginBottom: '18px' }}>
                <img
                  src="/levva-logo-white.svg"
                  alt="Levva"
                  style={{ height: '36px', width: 'auto', display: 'block' }}
                />
              </div>
              <p style={{ fontSize: '0.92rem', color: '#8FA1BC', maxWidth: '300px', marginBottom: '20px' }}>
                A plataforma angolana de entregas e mobilidade desenhada a partir da realidade do terreno.
              </p>
              <div style={{ fontSize: '0.88rem', color: '#8FA1BC' }}>
                <div>Luanda, Angola</div>
                <div>Website: <a href="http://www.levva.co.ao" target="_blank" rel="noreferrer" style={{ color: '#F2994A' }}>www.levva.co.ao</a></div>
                <div>Email: <a href="mailto:geral@levva.co.ao" style={{ color: '#F2994A' }}>geral@levva.co.ao</a></div>
              </div>
            </div>

            {/* Links Col 1 */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '16px', letterSpacing: '0.04em' }}>
                PRODUTO
              </h4>
              <ul className="footer-links-list">
                <li><a href="#produto" className="footer-link">Levva Mobilidade</a></li>
                <li><a href="#produto" className="footer-link">Levva Entregas</a></li>
                <li><a href="#como-funciona" className="footer-link">Como funciona</a></li>
                <li><a href="#faq" className="footer-link">Perguntas Frequentes</a></li>
              </ul>
            </div>

            {/* Links Col 2 */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '16px', letterSpacing: '0.04em' }}>
                PARCEIROS
              </h4>
              <ul className="footer-links-list">
                <li><a href="#parceiros" className="footer-link">Para Motoristas</a></li>
                <li><a href="#parceiros" className="footer-link">Para Entregadores</a></li>
                <li><a href="#negocios" className="footer-link">Para Negócios</a></li>
                <li><a href="mailto:geral@levva.co.ao" className="footer-link">Contacto Comercial</a></li>
              </ul>
            </div>

            {/* Links Col 3 */}
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', marginBottom: '16px', letterSpacing: '0.04em' }}>
                INSTITUCIONAL
              </h4>
              <ul className="footer-links-list">
                <li><a href="#filosofia" className="footer-link">Sobre a Levva</a></li>
                <li><a href="mailto:geral@levva.co.ao" className="footer-link">Contacto</a></li>
                <li><span className="footer-link" style={{ cursor: 'pointer' }}>Termos de Uso</span></li>
                <li><span className="footer-link" style={{ cursor: 'pointer' }}>Privacidade</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © {new Date().getFullYear()} Levva Tecnologia, Lda. Todos os direitos reservados.
            </div>
            <div style={{ display: 'flex', gap: '20px', color: '#8FA1BC' }}>
              <span>Luanda • Angola</span>
              <span>•</span>
              <span>Mobilidade feita para Angola</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
