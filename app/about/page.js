'use client';

import Image from 'next/image';
import Nav from '../components/Nav';
import { useLang } from '../context/LangContext';
import { useGsapPageScroll } from '../hooks/useGsapPageScroll';

const pillars = [
  {
    num: '01',
    en: 'SEE',
    jp: '髪を観察する',
    jpEn: 'Observe Hair',
    bodyJa: '切る前に、髪が何を求めているかを読む。毛流・骨格・毛量の関係を観察し、刃が向かうべき方向を見定める。',
    bodyEn: 'Before cutting, read what the hair is asking for. Observe the relationship between flow, bone structure, and volume—and determine where the blade should go.',
  },
  {
    num: '02',
    en: 'TOUCH',
    jp: '柔操作理論',
    jpEn: 'Soft Manipulation Theory',
    bodyJa: '力ではなく、接触の質で毛束を導く。柔操作の理論として、手の重さと刃の角度を身体に落とし込む。',
    bodyEn: 'Guide the strand through the quality of contact, not force. Embody soft manipulation as the weight of the hands and the angle of the blade.',
  },
  {
    num: '03',
    en: 'FLOW',
    jp: 'CUT × DRY',
    jpEn: 'CUT × DRY',
    bodyJa: 'カットとドライを一つの流れとして設計する。切断の瞬間から仕上がりまで、連続した感覚で形を立ち上げる。',
    bodyEn: 'Design cut and dry as one continuous flow. From the moment of severance to the finish, shape rises through unbroken sensation.',
  },
];

const philosophyItemsJa = ['生え癖', '毛流れ', '根元方向', '落下位置', '質感', '空気感'];
const philosophyItemsEn = ['Natural growth', 'Hair flow', 'Root direction', 'Fall position', 'Texture', 'Airiness'];

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
  const { lang } = useLang();
  const isEn = lang === 'en';

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
        <div className="about-fade-up" style={{maxWidth:640}}>
          <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:11, letterSpacing:'0.28em', textTransform:'uppercase', color:'#C9956A', marginBottom:32}}>
            {isEn ? 'What is RTA Subscription' : 'RTA Subscription とは'}
          </p>
          <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:15, lineHeight:2.2, color:'#1C1A17', marginBottom:32, fontWeight:300}}>
            {isEn ? (
              <>RTA Subscription is not<br />simply an online salon.</>
            ) : (
              <>RTA Subscriptionは、<br />単なるオンラインサロンではない。</>
            )}
          </p>
          <p style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(18px,2vw,24px)', fontStyle:'italic', fontWeight:300, color:'#1C1A17', marginBottom:48, letterSpacing:'-0.01em', paddingLeft:24, borderLeft:'1px solid #C4BFB7'}}>
            {isEn ? '"An Archive that Preserves Sensation"' : '"感覚を保存するArchive"'}
          </p>
          <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.4, color:'#9A948C', marginBottom:8}}>
            {isEn
              ? 'Much beauty education teaches cutting methods, procedures, and styles.'
              : '多くの美容教育は、切り方・手順・スタイルを教える。'}
          </p>
          <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.4, color:'#9A948C', marginBottom:48}}>
            {isEn ? (
              <>But what RTA wants to preserve is <strong style={{color:'#1C1A17', fontWeight:300}}>"how you see hair"</strong>.</>
            ) : (
              <>しかしRTAが保存したいのは、<strong style={{color:'#1C1A17', fontWeight:300}}>「髪の見方」</strong>。</>
            )}
          </p>
          <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:11, letterSpacing:'0.28em', textTransform:'uppercase', color:'#C9956A', marginBottom:24}}>
            RTA Subscription Philosophy
          </p>
          <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:13, lineHeight:2.2, color:'#1C1A17', marginBottom:40, fontWeight:300}}>
            {isEn ? (
              <>We do not let technique end as <strong style={{fontWeight:300}}>"sensation"</strong>.</>
            ) : (
              <>技術を<strong style={{fontWeight:300}}>"感覚"</strong>で終わらせない。</>
            )}
          </p>
          <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.4, color:'#9A948C', marginBottom:16}}>
            {isEn ? 'At RTA,' : 'RTAでは、'}
          </p>
          <div style={{display:'flex', flexWrap:'wrap', gap:'8px 24px', marginBottom:32}}>
            {(isEn ? philosophyItemsEn : philosophyItemsJa).map((item) => (
              <span key={item} style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:11, color:'#1C1A17', letterSpacing:'0.12em', display:'flex', alignItems:'center', gap:8}}>
                <span style={{width:4, height:4, borderRadius:'50%', background:'#C9956A', display:'inline-block'}} />
                {item}
              </span>
            ))}
          </div>
          <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.4, color:'#9A948C'}}>
            {isEn ? 'we theorize these and translate them into reproducibility.' : 'を理論化し、再現性へ落とし込む。'}
          </p>
        </div>
      </section>

      <ParallaxPhoto className="about-parallax-wrap about-photo-2" height="70vh" src="/about-2.jpg" alt="Razor Tech Archive — Session" />

      <section className="section-pad" style={{padding:'140px 80px', borderBottom:'1px solid #C4BFB7'}}>
        <SectionLabel>Three Pillars</SectionLabel>
        {pillars.map((p) => (
          <div
            key={p.num}
            className="about-pillar-row about-fade-up"
            style={{display:'grid', gridTemplateColumns:'180px 1fr', alignItems:'start', gap:48, padding:'36px 0', borderBottom:'1px solid #C4BFB7'}}
          >
            <span style={{fontSize:10, color:'#9A948C', letterSpacing:'0.12em'}}>{p.num} — {isEn ? p.jpEn : p.jp}</span>
            <div>
              <span className="about-pillar-title" style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:'clamp(18px,2.4vw,30px)', fontWeight:300, color:'#1C1A17', display:'block', marginBottom:12}}>{p.en}</span>
              <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.1, color:'#9A948C', maxWidth:560}}>{isEn ? p.bodyEn : p.bodyJa}</p>
            </div>
          </div>
        ))}
      </section>

      <ParallaxPhoto className="about-parallax-wrap about-photo-1" height="60vh" src="/about-1.jpg" alt="Razor Tech Archive — Concept" />

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
