'use client';

import Image from 'next/image';
import Nav from '../components/Nav';
import { useGsapPageScroll } from '../hooks/useGsapPageScroll';

const pillars = [
  {
    num: '01',
    en: 'SEE',
    jp: '髪を観察する',
    body: '切る前に、髪が何を求めているかを読む。毛流・骨格・毛量の関係を観察し、刃が向かうべき方向を見定める。',
  },
  {
    num: '02',
    en: 'TOUCH',
    jp: '柔操作理論',
    body: '力ではなく、接触の質で毛束を導く。柔操作の理論として、手の重さと刃の角度を身体に落とし込む。',
  },
  {
    num: '03',
    en: 'FLOW',
    jp: 'CUT × DRY',
    body: 'カットとドライを一つの流れとして設計する。切断の瞬間から仕上がりまで、連続した感覚で形を立ち上げる。',
  },
];

function SectionLabel({ children }) {
  return (
    <div className="about-fade-up" style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:64, display:'flex', alignItems:'center', gap:16}}>
      <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}} />
      {children}
    </div>
  );
}

function ParallaxPhoto({ className, src, alt, height }) {
  return (
    <div className={className} style={{position:'relative', width:'100%', height, overflow:'hidden', borderBottom:'1px solid #C4BFB7'}}>
      <div className="parallax-image-inner" style={{position:'absolute', left:0, top:'-7.5%', width:'100%', height:'115%'}}>
        <Image
          src={src}
          alt={alt}
          fill
          quality={100}
          sizes="100vw"
          style={{
            objectFit:'cover',
            objectPosition:'center',
            willChange:'transform',
          }}
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  const mainRef = useGsapPageScroll();

  return (
    <main ref={mainRef} style={{background:'#EDEBE5', minHeight:'100vh', fontFamily:'DM Sans, sans-serif', fontWeight:200, color:'#1C1A17'}}>
      <Nav />

      <section className="section-pad about-page-top" style={{padding:'180px 80px 80px', borderBottom:'1px solid #C4BFB7'}}>
        <SectionLabel>About / Manifesto</SectionLabel>
        <h1 className="about-page-title about-animate-title" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(28px, 3vw, 42px)', fontWeight:200, lineHeight:1.05, letterSpacing:'-0.02em', marginBottom:0}}>
          The Art of <em style={{fontStyle:'italic', color:'#C9956A'}}>Stealth</em> Cut.
        </h1>
      </section>

      <section className="section-pad" style={{padding:'80px 80px', borderBottom:'1px solid #C4BFB7'}}>
        <p className="about-fade-up" style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.1, color:'#9A948C', maxWidth:640}}>
          RTA Subscriptionは、単なるオンラインサロンではない。
          <strong style={{color:'#1C1A17', fontWeight:300}}>「感覚を保存するArchive」</strong>
          。多くの美容教育は切り方・手順・スタイルを教える。しかしRTAが保存したいのは、髪の見方。技術を
          <strong style={{color:'#1C1A17', fontWeight:300}}>「感覚」</strong>
          で終わらせない。
        </p>
      </section>

      <ParallaxPhoto className="about-parallax-wrap about-photo-2" height="70vh" src="/about-2.jpg" alt="Razor Tech Archive — セッション風景" />

      <section className="section-pad" style={{padding:'140px 80px', borderBottom:'1px solid #C4BFB7'}}>
        <SectionLabel>Three Pillars</SectionLabel>
        {pillars.map((p) => (
          <div
            key={p.num}
            className="about-pillar-row about-fade-up"
            style={{display:'grid', gridTemplateColumns:'180px 1fr', alignItems:'start', gap:48, padding:'36px 0', borderBottom:'1px solid #C4BFB7'}}
          >
            <span style={{fontSize:10, color:'#9A948C', letterSpacing:'0.12em'}}>{p.num} — {p.jp}</span>
            <div>
              <span className="about-pillar-title" style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:'clamp(18px,2.4vw,30px)', fontWeight:300, color:'#1C1A17', display:'block', marginBottom:12}}>{p.en}</span>
              <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.1, color:'#9A948C', maxWidth:560}}>{p.body}</p>
            </div>
          </div>
        ))}
      </section>

      <ParallaxPhoto className="about-parallax-wrap about-photo-1" height="60vh" src="/about-1.jpg" alt="Razor Tech Archive — コンセプトビジュアル" />

      <section className="section-pad" style={{padding:'140px 80px', borderBottom:'1px solid #C4BFB7', textAlign:'center'}}>
        <p className="about-quote about-fade-up" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(22px,2.8vw,36px)', fontStyle:'italic', fontWeight:300, lineHeight:1.45, color:'#1C1A17', maxWidth:720, margin:'0 auto 24px', letterSpacing:'-0.01em'}}>
          “The blade does not cut hair.<br />
          It listens to the weight that asks to fall.”
        </p>
        <p className="about-fade-up" style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:11, color:'#9A948C', letterSpacing:'0.3em', textTransform:'uppercase'}}>— RTA Manifesto, 2026</p>
      </section>

      <footer className="site-footer about-fade-up" style={{padding:'48px 80px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <span style={{fontFamily:'Cormorant Garamond, serif', fontSize:13, letterSpacing:'0.3em', textTransform:'uppercase', opacity:0.5}}>Razor Tech Archive</span>
        <span style={{fontSize:9, letterSpacing:'0.18em', color:'#9A948C'}}>© 2026 Razor Tech Archive</span>
        <div style={{display:'flex', gap:24}}>
          <a href="#" style={{fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'#9A948C', textDecoration:'none'}}>Instagram</a>
          <a href="/contact" style={{fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'#9A948C', textDecoration:'none'}}>Contact</a>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .about-page-top { padding: 140px 24px 60px !important; }
          .section-pad { padding: 80px 24px !important; }
          .about-photo-2 { height: 55vh !important; }
          .about-photo-1 { height: 45vh !important; }
          .about-pillar-row { grid-template-columns: 1fr !important; gap: 12px !important; padding: 28px 0 !important; }
          .about-pillar-title { font-size: 20px !important; }
          .about-quote { font-size: 20px !important; }
        }
      `}</style>
    </main>
  );
}
