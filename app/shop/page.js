'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import { useLang } from '../context/LangContext';
import { useGsapPageScroll } from '../hooks/useGsapPageScroll';

const products = [
  {
    id: 'razor-basics-vol-3',
    nameJa: 'Razor Basics Vol. 03 チケット',
    nameEn: 'Razor Basics Vol. 03 Ticket',
    price: 18000,
    category: 'Seminar',
    soldOut: false,
    buttonLabel: 'Get Ticket',
    descJa: 'レザーカット技術の基礎を体系的に学ぶ、入門編 第3弾。福岡 / ill 天神大名で開催。',
    descEn: 'Volume 3 of the introductory series on razor cutting fundamentals. Held in Fukuoka at ill Tenjin Daimyo.',
  },
  {
    id: 'advanced-razor-tech',
    nameJa: 'Advanced Razor Tech チケット',
    nameEn: 'Advanced Razor Tech Ticket',
    price: 24000,
    category: 'Seminar',
    soldOut: false,
    buttonLabel: 'Get Ticket',
    descJa: '応用技術と理論を深く掘り下げる、経験者向けセッション。',
    descEn: 'An advanced session that deepens applied technique and theory for experienced practitioners.',
  },
  {
    id: 'rta-original-razor',
    nameJa: 'RTA Original Razor',
    nameEn: 'RTA Original Razor',
    price: 18000,
    category: 'Product',
    soldOut: true,
    buttonLabel: 'Purchase',
    descJa: 'Stealth cut のために設計されたオリジナルレザー。静寂と精度を支える一本。',
    descEn: 'An original razor designed for Stealth cut—a single tool that supports silence and precision.',
  },
  {
    id: 'rta-tote-bag',
    nameJa: 'RTA Tote Bag',
    nameEn: 'RTA Tote Bag',
    price: 5500,
    category: 'Product',
    soldOut: true,
    buttonLabel: 'Purchase',
    descJa: 'ナチュラルキャンバスに型押しのロゴ。控えめな日々の相棒。',
    descEn: 'Embossed logo on natural canvas. A quiet companion for everyday use.',
  },
  {
    id: 'rta-zine-vol-1',
    nameJa: 'RTA Zine Vol.01',
    nameEn: 'RTA Zine Vol.01',
    price: 3300,
    category: 'Product',
    soldOut: true,
    buttonLabel: 'Purchase',
    descJa: '理論と感覚を綴じた、最初のアーカイブ印刷物。',
    descEn: 'The first printed archive—theory and sensation bound together.',
  },
];

export default function Shop() {
  const [loadingId, setLoadingId] = useState(null);
  const [success, setSuccess] = useState(false);
  const mainRef = useGsapPageScroll();
  const { lang } = useLang();
  const isEn = lang === 'en';

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
      setSuccess(true);
    }
  }, []);

  const handleCheckout = async (product) => {
    if (product.soldOut) return;
    setLoadingId(product.id);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productName: product.nameJa, price: product.price }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(isEn ? 'Could not start checkout. Please try again later.' : 'チェックアウトを開始できませんでした。時間をおいて再度お試しください。');
        setLoadingId(null);
      }
    } catch (err) {
      console.error(err);
      alert(isEn ? 'A network error occurred.' : 'ネットワークエラーが発生しました。');
      setLoadingId(null);
    }
  };

  return (
    <main ref={mainRef} style={{background:'#EDEBE5', minHeight:'100vh', fontFamily:'DM Sans, sans-serif', fontWeight:200, color:'#1C1A17'}}>

      {success && (
        <div style={{position:'fixed', top:96, left:'50%', transform:'translateX(-50%)', zIndex:250, background:'#E5E2DA', border:'1px solid #C9956A', padding:'16px 28px', display:'flex', alignItems:'center', gap:16}}>
          <span style={{width:6, height:6, borderRadius:'50%', background:'#C9956A', display:'inline-block'}}></span>
          <span style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, color:'#1C1A17'}}>{isEn ? 'Thank you for your order.' : 'ご注文ありがとうございました。'}</span>
          <button onClick={() => setSuccess(false)} style={{background:'none', border:'none', cursor:'pointer', color:'#9A948C', fontSize:14, paddingLeft:4}}>×</button>
        </div>
      )}

      <Nav />

      {/* SHOP HEADER */}
      <section className="shop-header about-page-top" style={{padding:'180px 80px 80px', borderBottom:'1px solid #C4BFB7'}}>
        <div className="about-fade-up" style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:36, display:'flex', alignItems:'center', gap:16}}>
          <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
          Shop — Tickets & Goods
        </div>
        <h1 className="shop-heading about-animate-title" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(48px,7vw,108px)', fontWeight:200, lineHeight:0.95, letterSpacing:'-0.02em', marginBottom:36}}>
          Razor Tech<br/><em style={{fontStyle:'italic', color:'#C9956A'}}>Archive</em> Shop
        </h1>
        <p className="about-fade-up" style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:13, color:'#9A948C', lineHeight:2.1, maxWidth:540}}>
          {isEn
            ? 'Seminar tickets and products that support the theory of Stealth cut. Learn the technique—and keep the tools at hand.'
            : 'セミナーチケットと、Stealth cut の理論を支えるためのプロダクト群。技術を学び、道具として手元に置く。'}
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="section-pad" style={{padding:'120px 80px'}}>
        <div className="products-grid" style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:60}}>
          {products.map((p, idx) => {
            const isLoading = loadingId === p.id;
            const disabled = p.soldOut || isLoading;
            return (
              <article key={p.id} className="product-card about-fade-up" style={{display:'flex', flexDirection:'column', opacity: p.soldOut ? 0.55 : 1, transition:'opacity 0.3s'}}>
                <div style={{aspectRatio:'1/1', background:'#D9D5CC', border:'1px solid #C4BFB7', marginBottom:28, position:'relative', overflow:'hidden'}}>
                  <span style={{position:'absolute', top:16, left:16, fontSize:8, letterSpacing:'0.3em', textTransform:'uppercase', color:'#9A948C'}}>0{idx + 1}</span>
                  <span style={{position:'absolute', top:16, right:16, fontSize:8, letterSpacing:'0.3em', textTransform:'uppercase', color: p.category === 'Seminar' ? '#C9956A' : '#9A948C'}}>{p.category}</span>
                  <span style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', fontFamily:'Cormorant Garamond, serif', fontSize:10, letterSpacing:'0.3em', color:'#C4BFB7', textTransform:'uppercase'}}>
                    {p.category === 'Seminar' ? 'Ticket' : 'Product Image'}
                  </span>
                  {p.soldOut && (
                    <div style={{position:'absolute', bottom:16, left:16, right:16, borderTop:'1px solid #C4BFB7', paddingTop:12, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                      <span style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#1C1A17'}}>Sold Out</span>
                      <span style={{width:6, height:6, borderRadius:'50%', background:'#1C1A17'}}></span>
                    </div>
                  )}
                </div>
                <h2 className="product-name" style={{fontFamily:'Cormorant Garamond, serif', fontSize:24, fontWeight:300, lineHeight:1.2, marginBottom:14, letterSpacing:'-0.01em'}}>{isEn ? p.nameEn : p.nameJa}</h2>
                <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:11, lineHeight:1.95, color:'#9A948C', marginBottom:32}}>{isEn ? p.descEn : p.descJa}</p>
                <div style={{marginTop:'auto', paddingTop:24, borderTop:'1px solid #C4BFB7', display:'flex', alignItems:'center', justifyContent:'space-between', gap:16, flexWrap:'wrap'}}>
                  <span style={{fontFamily:'Cormorant Garamond, serif', fontSize:22, fontWeight:300}}>¥{p.price.toLocaleString()}</span>
                  <button
                    onClick={() => handleCheckout(p)}
                    disabled={disabled}
                    style={{
                      fontFamily:'DM Sans, sans-serif',
                      fontSize:9,
                      letterSpacing:'0.28em',
                      textTransform:'uppercase',
                      color: p.soldOut ? '#C4BFB7' : (isLoading ? '#9A948C' : '#1C1A17'),
                      border: '1px solid #C4BFB7',
                      background: p.soldOut ? '#E5E2DA' : 'transparent',
                      padding:'14px 24px',
                      cursor: p.soldOut ? 'not-allowed' : (isLoading ? 'wait' : 'pointer'),
                      whiteSpace:'nowrap',
                      transition:'all 0.3s'
                    }}
                  >
                    {p.soldOut ? 'Sold Out' : (isLoading ? 'Loading…' : `${p.buttonLabel} →`)}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer about-fade-up" style={{padding:'48px 80px', borderTop:'1px solid #C4BFB7', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <span style={{fontFamily:'Cormorant Garamond, serif', fontSize:13, letterSpacing:'0.3em', textTransform:'uppercase', opacity:0.5}}>Razor Tech Archive</span>
        <span style={{fontSize:9, letterSpacing:'0.18em', color:'#9A948C'}}>© 2026 Razor Tech Archive</span>
        <div style={{display:'flex', gap:24}}>
          <a href="#" style={{fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'#9A948C', textDecoration:'none'}}>Instagram</a>
          <a href="/contact" style={{fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'#9A948C', textDecoration:'none'}}>Contact</a>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .shop-header {
            padding: 140px 24px 60px !important;
          }
          .shop-heading {
            font-size: 50px !important;
          }
          .section-pad {
            padding: 72px 24px !important;
          }
          .products-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          .product-name {
            font-size: 20px !important;
          }
        }
      `}</style>
    </main>
  );
}
