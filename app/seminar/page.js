'use client';

import Nav from '../components/Nav';
import { useGsapPageScroll } from '../hooks/useGsapPageScroll';

const upcomingSeminars = [
  {
    num: '01',
    date: '2026.06.15',
    weekday: 'SUN',
    name: 'Razor Basics Vol. 03',
    category: 'Introductory',
    location: '福岡 / ill 天神大名',
    time: '14:00 — 18:00',
    capacity: '12名',
    price: 18000,
    body: 'レザーカット技術の基礎を体系的に学ぶ入門編 第3弾。刃の角度、骨格との対話、毛流の解読。技術を「型」として固めるのではなく、毎回の毛量に応答する身体に変えていく。',
  },
  {
    num: '02',
    date: '2026.07.20',
    weekday: 'MON',
    name: 'Advanced Razor Tech',
    category: 'Advanced',
    location: '東京 / TBA',
    time: '13:00 — 19:00',
    capacity: '8名',
    price: 24000,
    body: '応用技術と理論を深く掘り下げる、経験者向けセッション。Stealth cut の核心——音と摩擦を消し、毛束の重さ自体を再構築するための姿勢、刃の引き、呼吸の同期について。',
  },
  {
    num: '03',
    date: 'Coming Soon',
    weekday: '——',
    name: '始考 Vol. 03',
    category: 'Theory',
    location: '場所未定',
    time: '——',
    capacity: '——',
    price: null,
    body: '感覚を理論に降ろし、再び現場に戻すための対話型セミナー。次回開催は調整中。詳細は会員ニュースレターで先行案内します。',
    upcoming: true,
  },
];

const pastSeminars = [
  {
    num: '04',
    date: '2026.04.18',
    name: 'Razor Basics Vol. 02',
    location: '福岡 / ill 天神大名',
    attendees: '12名',
  },
  {
    num: '05',
    date: '2026.02.21',
    name: 'Razor Basics Vol. 01',
    location: '福岡 / ill 天神大名',
    attendees: '10名',
  },
  {
    num: '06',
    date: '2025.12.15',
    name: '始考 Vol. 02',
    location: '東京 / FAGAN PARK',
    attendees: '8名',
  },
  {
    num: '07',
    date: '2025.09.10',
    name: '始考 Vol. 01',
    location: '福岡 / Studio Loft',
    attendees: '6名',
  },
];

export default function SeminarPage() {
  const mainRef = useGsapPageScroll();

  return (
    <main ref={mainRef} style={{background:'#EDEBE5', minHeight:'100vh', fontFamily:'DM Sans, sans-serif', fontWeight:200, color:'#1C1A17'}}>
      <Nav />

      {/* HERO PHOTO */}
      <section className="seminar-hero" style={{position:'relative', width:'100%', height:'70vh', overflow:'hidden', borderBottom:'1px solid #C4BFB7'}}>
        <div className="about-parallax-wrap" style={{position:'absolute', inset:0}}>
          <img
            src="/seminar-hero.jpg"
            alt="Razor Tech Archive — Seminars & Sessions"
            style={{
              position:'absolute',
              left:0,
              top:'-7.5%',
              width:'100%',
              height:'115%',
              objectFit:'cover',
              objectPosition:'center',
              display:'block',
              willChange:'transform',
            }}
          />
        </div>
        <div aria-hidden="true" style={{position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(28,26,23,0.2) 0%, rgba(28,26,23,0) 35%, rgba(237,235,229,0.3) 70%, rgba(237,235,229,1) 100%)', zIndex:5, pointerEvents:'none'}}></div>

        <div className="seminar-hero-content about-page-top" style={{position:'absolute', inset:0, zIndex:10, display:'flex', flexDirection:'column', justifyContent:'center', padding:'180px 80px 80px'}}>
          <div className="about-fade-up" style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#FFFFFF', marginBottom:36, display:'flex', alignItems:'center', gap:16, opacity:0.85}}>
            <span style={{width:18, height:1, background:'#FFFFFF', display:'inline-block', opacity:0.7}}></span>
            Seminar — Sessions
          </div>
          <h1 className="page-heading about-animate-title" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(28px, 3vw, 42px)', fontWeight:200, lineHeight:1.05, letterSpacing:'-0.02em', marginBottom:36, color:'#FFFFFF'}}>
            <em style={{fontStyle:'italic', color:'#FFFFFF'}}>Seminars</em><br/>& Sessions
          </h1>
          <p className="about-fade-up" style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:13, color:'#FFFFFF', lineHeight:2.1, maxWidth:560, opacity:0.85}}>レザーカット技術と思想を、対面で深く学ぶための定期セッション。Stealth cut の感覚を、各自の身体に落とし込むための時間。</p>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="section-pad" style={{padding:'140px 80px'}}>
        <div className="about-fade-up" style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:64, display:'flex', alignItems:'center', gap:16}}>
          <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
          Upcoming
        </div>

        {upcomingSeminars.map((s) => (
          <article key={s.num} className="seminar-detail about-fade-up" style={{display:'grid', gridTemplateColumns:'200px 1fr 200px', gap:60, padding:'56px 0', borderTop:'1px solid #C4BFB7', alignItems:'start', opacity: s.upcoming ? 0.45 : 1}}>
            <div>
              <div style={{fontSize:10, color:'#9A948C', letterSpacing:'0.22em', marginBottom:14}}>{s.num} / {s.category}</div>
              <div style={{fontFamily:'Cormorant Garamond, serif', fontSize:28, fontWeight:300, lineHeight:1.1, letterSpacing:'-0.01em'}}>{s.date}</div>
              <div style={{fontSize:9, color:'#9A948C', letterSpacing:'0.3em', marginTop:6}}>{s.weekday}</div>
            </div>

            <div>
              <h2 className="seminar-detail-title" style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:'clamp(22px,2.8vw,36px)', fontWeight:300, lineHeight:1.2, marginBottom:20, color:'#1C1A17'}}>{s.name}</h2>
              <div style={{display:'flex', flexWrap:'wrap', gap:24, marginBottom:24, fontSize:10, color:'#9A948C', letterSpacing:'0.18em', textTransform:'uppercase'}}>
                <span>{s.location}</span>
                <span>{s.time}</span>
                <span>{s.capacity}</span>
              </div>
              <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.1, color:'#9A948C', maxWidth:540}}>{s.body}</p>
            </div>

            <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', gap:18}}>
              <span style={{fontFamily:'Cormorant Garamond, serif', fontSize:24, fontWeight:300}}>
                {s.price !== null ? `¥${s.price.toLocaleString()}` : '——'}
              </span>
              {s.price !== null ? (
                <a href="/shop" style={{fontSize:9, letterSpacing:'0.28em', textTransform:'uppercase', color:'#1C1A17', border:'1px solid #C4BFB7', padding:'14px 24px', textDecoration:'none', whiteSpace:'nowrap'}}>Get Ticket →</a>
              ) : (
                <span style={{fontSize:9, letterSpacing:'0.28em', textTransform:'uppercase', color:'#9A948C', border:'1px solid #C4BFB7', padding:'14px 24px', background:'#E5E2DA', whiteSpace:'nowrap'}}>Coming Soon</span>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* PAST */}
      <section className="section-pad" style={{padding:'140px 80px', borderTop:'1px solid #C4BFB7'}}>
        <div className="about-fade-up" style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:64, display:'flex', alignItems:'center', gap:16}}>
          <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
          Past — Archive
        </div>

        {pastSeminars.map((s) => (
          <div key={s.num} className="past-row about-fade-up" style={{display:'grid', gridTemplateColumns:'80px 140px 1fr auto', gap:48, padding:'32px 0', borderBottom:'1px solid #C4BFB7', alignItems:'center', opacity:0.6}}>
            <span style={{fontSize:10, color:'#9A948C', letterSpacing:'0.18em'}}>{s.num}</span>
            <span style={{fontFamily:'Cormorant Garamond, serif', fontSize:14, fontWeight:300}}>{s.date}</span>
            <span style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:'clamp(15px,1.8vw,22px)', fontWeight:300}}>{s.name}</span>
            <span style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:10, color:'#9A948C', letterSpacing:'0.12em'}}>{s.location} · {s.attendees}</span>
          </div>
        ))}
      </section>

      {/* CTA — full-bleed photo like hero */}
      <section
        className="seminar-cta-hero"
        style={{
          position:'relative',
          width:'100%',
          height:'70vh',
          minHeight:420,
          overflow:'hidden',
          borderTop:'1px solid #C4BFB7',
          borderBottom:'1px solid #C4BFB7',
        }}
      >
        <div className="about-parallax-wrap" style={{position:'absolute', inset:0}}>
          <img
            src="/seminar-about.jpg"
            alt="精密なカットと仕上がり — RTA セッション"
            style={{
              position:'absolute',
              left:0,
              top:'-7.5%',
              width:'100%',
              height:'115%',
              objectFit:'cover',
              objectPosition:'center',
              display:'block',
              willChange:'transform',
            }}
          />
        </div>
        <div
          aria-hidden="true"
          style={{
            position:'absolute',
            inset:0,
            background:'linear-gradient(to bottom, rgba(28,26,23,0.2) 0%, rgba(28,26,23,0) 35%, rgba(237,235,229,0.3) 70%, rgba(237,235,229,1) 100%)',
            zIndex:5,
            pointerEvents:'none',
          }}
        />

        <div
          className="seminar-cta-content"
          style={{
            position:'absolute',
            inset:0,
            zIndex:10,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            padding:'180px 80px 80px',
          }}
        >
          <div
            className="about-fade-up"
            style={{
              fontSize:8,
              letterSpacing:'0.45em',
              textTransform:'uppercase',
              color:'#FFFFFF',
              marginBottom:36,
              display:'flex',
              alignItems:'center',
              gap:16,
              opacity:0.85,
            }}
          >
            <span style={{width:18, height:1, background:'#FFFFFF', display:'inline-block', opacity:0.7}} />
            Archive — Members
          </div>
          <h2
            className="about-fade-up"
            style={{
              fontFamily:'Cormorant Garamond, serif',
              fontSize:'clamp(28px, 3vw, 42px)',
              fontWeight:200,
              lineHeight:1.05,
              letterSpacing:'-0.02em',
              marginBottom:28,
              color:'#FFFFFF',
            }}
          >
            Join the<br />
            <em style={{fontStyle:'italic', color:'#FFFFFF'}}>Archive</em>
          </h2>
          <p
            className="about-fade-up"
            style={{
              fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif",
              fontSize:13,
              color:'#FFFFFF',
              lineHeight:2.1,
              maxWidth:560,
              opacity:0.85,
              marginBottom:40,
            }}
          >
            新しいセッション情報を、いち早く受け取る。
          </p>
          <div className="about-fade-up">
            <a
              href="/members"
              style={{
                display:'inline-block',
                fontSize:9,
                letterSpacing:'0.32em',
                textTransform:'uppercase',
                color:'#FFFFFF',
                border:'1px solid rgba(255,255,255,0.6)',
                padding:'18px 44px',
                textDecoration:'none',
              }}
            >
              Join the Archive →
            </a>
          </div>
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
          .seminar-hero {
            height: 60vh !important;
          }
          .seminar-hero-content {
            padding: 140px 24px 40px !important;
          }
          .section-pad {
            padding: 80px 24px !important;
          }
          .seminar-detail {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 40px 0 !important;
          }
          .seminar-detail-title {
            font-size: 24px !important;
          }
          .past-row {
            grid-template-columns: 60px 1fr !important;
            gap: 12px 24px !important;
            padding: 24px 0 !important;
          }
          .past-row > span:nth-child(2) {
            grid-column: 2 !important;
          }
          .past-row > span:nth-child(3) {
            grid-column: 1 / -1 !important;
            font-size: 18px !important;
          }
          .past-row > span:nth-child(4) {
            grid-column: 1 / -1 !important;
          }
          .seminar-cta-hero {
            height: 60vh !important;
            min-height: 380px !important;
          }
          .seminar-cta-content {
            padding: 140px 24px 48px !important;
          }
        }
      `}</style>
    </main>
  );
}
