'use client';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={{background:'#EDEBE5', minHeight:'100vh', fontFamily:'DM Sans, sans-serif', fontWeight:200, color:'#1C1A17'}}>

      {/* NAV */}
      <nav className="site-nav" style={{position:'fixed', top:0, left:0, right:0, zIndex:200, padding:'26px 48px', display:'flex', alignItems:'center', justifyContent:'space-between', background:'rgba(237,235,229,0.9)', backdropFilter:'blur(12px)', borderBottom:'1px solid #C4BFB7'}}>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{display:'flex', flexDirection:'column', gap:7, cursor:'pointer', padding:4, background:'none', border:'none', zIndex:300}}>
          <span style={{display:'block', width:24, height:1, background:'#1C1A17', transition:'all 0.5s', transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none'}}></span>
          <span style={{display:'block', width:24, height:1, background:'#1C1A17', transition:'all 0.5s', opacity: menuOpen ? 0 : 1}}></span>
          <span style={{display:'block', width:24, height:1, background:'#1C1A17', transition:'all 0.5s', transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none'}}></span>
        </button>
        <div style={{position:'absolute', left:'50%', transform:'translateX(-50%)'}}>
          <span style={{fontFamily:'Cormorant Garamond, serif', fontSize:13, letterSpacing:'0.3em', textTransform:'uppercase'}}>Razor Tech Archive</span>
        </div>
        <div style={{display:'flex', gap:20}}>
          <button style={{background:'none', border:'none', cursor:'pointer', opacity:0.5}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C1A17" strokeWidth="1.2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </button>
          <button style={{background:'none', border:'none', cursor:'pointer', opacity:0.5}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C1A17" strokeWidth="1.2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
          <button style={{background:'none', border:'none', cursor:'pointer', opacity:0.5}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C1A17" strokeWidth="1.2" strokeLinecap="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
        </div>
      </nav>

      {/* MENU OVERLAY */}
      {menuOpen && (
        <div className="menu-overlay" style={{position:'fixed', inset:0, background:'#E5E2DA', zIndex:150, display:'flex', flexDirection:'column', justifyContent:'center', padding:'120px 80px 80px'}}>
          <ul style={{listStyle:'none', marginBottom:80}}>
            {[['01','Seminar','#'],['02','Shop','/shop'],['03','Members','#'],['04','About','#'],['05','Archive','#'],['06','Contact','#']].map(([num, name, href]) => (
              <li key={name} style={{borderBottom:'1px solid #C4BFB7', overflow:'hidden'}}>
                <a href={href} style={{display:'flex', alignItems:'center', padding:'22px 0', textDecoration:'none', color:'rgba(28,26,23,0.45)', fontSize:11, letterSpacing:'0.32em', textTransform:'uppercase'}}>
                  <span style={{fontSize:9, color:'#9A948C', width:36}}>{num}</span>
                  <span style={{flex:1, paddingLeft:20}}>{name}</span>
                  <span style={{fontSize:10, color:'#C9956A'}}>→</span>
                </a>
              </li>
            ))}
          </ul>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, fontStyle:'italic', color:'#9A948C', lineHeight:1.8}}>Precision has no language.<br/>感覚を理論へ。</p>
            <div style={{display:'flex', gap:28}}>
              <a href="#" style={{fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'#9A948C', textDecoration:'none'}}>Instagram</a>
              <a href="#" style={{fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'#9A948C', textDecoration:'none'}}>© 2026 RTA</a>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section style={{position:'relative', width:'100vw', height:'100vh', background:'#EDEBE5', overflow:'hidden'}}>
        <img src="/hero.png" alt="Razor Tech Archive" style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center'}} />
        <div style={{position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(237,235,229,0) 55%, rgba(237,235,229,0.85) 100%)', zIndex:5, pointerEvents:'none'}}></div>
        <div className="hero-meta" style={{position:'absolute', top:88, left:0, right:0, padding:'0 48px', display:'flex', justifyContent:'space-between', zIndex:10}}>
          <span style={{fontSize:9, letterSpacing:'0.3em', textTransform:'uppercase', color:'#9A948C'}}>Razor Tech Archive — 2026</span>
          <span style={{fontSize:9, letterSpacing:'0.3em', textTransform:'uppercase', color:'#9A948C'}}>/ Stealth Cut /</span>
        </div>
        <span className="hero-vert" style={{position:'absolute', left:24, top:'50%', transform:'translateY(-50%) rotate(180deg)', writingMode:'vertical-rl', fontSize:8, letterSpacing:'0.35em', textTransform:'uppercase', color:'#C4BFB7', zIndex:10}}>Archive</span>
        <div className="hero-title-block" style={{position:'absolute', left:48, top:'50%', transform:'translateY(-50%)', zIndex:10}}>
          <h1 style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(13px,1.4vw,18px)', fontWeight:300, lineHeight:1.3, marginBottom:10}}>—Razor Tech<br/>Archive</h1>
          <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:9, letterSpacing:'0.25em', textTransform:'uppercase', color:'#9A948C'}}>感覚を理論へ。</p>
        </div>
        <div className="hero-bottom" style={{position:'absolute', bottom:40, left:0, right:0, padding:'0 48px', display:'flex', alignItems:'flex-end', justifyContent:'space-between', zIndex:10}}>
          <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:13, fontStyle:'italic', color:'#9A948C', lineHeight:1.8}}>Precision has no language.<br/>感覚を理論へ。</p>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:12}}>
            <span style={{fontSize:8, letterSpacing:'0.3em', textTransform:'uppercase', color:'#C4BFB7', writingMode:'vertical-rl'}}>Scroll</span>
            <div style={{
              width:1,
              height:52,
              background:'linear-gradient(to bottom, #C9956A, transparent)',
              animation:'scrollPulse 2.4s ease-in-out infinite'
            }}></div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{borderTop:'1px solid #C4BFB7', borderBottom:'1px solid #C4BFB7', padding:'13px 0', overflow:'hidden'}}>
        <div style={{display:'flex', gap:60, animation:'tick 28s linear infinite', whiteSpace:'nowrap'}}>
          {['Razor Tech Archive','Stealth Cut','Precision Has No Language','感覚を理論へ','From Sensation to Theory','Razor Tech Archive','Stealth Cut','Precision Has No Language','感覚を理論へ','From Sensation to Theory'].map((t,i) => (
            <span key={i} style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:8, letterSpacing:'0.35em', textTransform:'uppercase', color:'#9A948C', flexShrink:0}}>{t} &nbsp;✦&nbsp; </span>
          ))}
        </div>
      </div>

      {/* SEMINAR */}
      <section className="section-pad" style={{padding:'140px 80px', borderTop:'1px solid #C4BFB7'}}>
        <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:64, display:'flex', alignItems:'center', gap:16}}>
          <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
          Upcoming Seminars
        </div>
        {[
          {num:'01', date:'2026.06.15', name:'Razor Basics Vol. 03', loc:'福岡 / ill 天神大名', price:'¥18,000'},
          {num:'02', date:'2026.07.20', name:'Advanced Razor Tech', loc:'東京 / TBA', price:'¥24,000'},
          {num:'03', date:'Coming Soon', name:'始考 Vol. 03', loc:'場所未定', price:'——', dim:true},
        ].map(s => (
          <a key={s.num} href="#" className="seminar-item" style={{display:'grid', gridTemplateColumns:'180px 1fr auto auto', alignItems:'center', gap:48, padding:'36px 0', borderBottom:'1px solid #C4BFB7', textDecoration:'none', color:'#1C1A17', opacity: s.dim ? 0.35 : 1}}>
            <span style={{fontSize:10, color:'#9A948C', letterSpacing:'0.12em'}}>{s.num} — {s.date}</span>
            <span className="seminar-name" style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:'clamp(18px,2.4vw,30px)', fontWeight:300}}>{s.name}</span>
            <span style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:10, color:'#9A948C', letterSpacing:'0.08em'}}>{s.loc}</span>
            <span style={{fontFamily:'Cormorant Garamond, serif', fontSize:16, fontWeight:300, textAlign:'right', opacity:0.6}}>{s.price}</span>
          </a>
        ))}
      </section>

      {/* ABOUT */}
      <section className="section-pad" style={{padding:'140px 80px', borderTop:'1px solid #C4BFB7'}}>
        <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:64, display:'flex', alignItems:'center', gap:16}}>
          <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
          About
        </div>
        <div className="about-grid" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:120}}>
          <div>
            <div className="about-heading" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(40px,5vw,72px)', fontWeight:200, lineHeight:0.95, letterSpacing:'-0.02em', marginBottom:48}}>
              The Art<br/>of <em style={{fontStyle:'italic', color:'#C9956A'}}>Stealth</em><br/>Cut
            </div>
            <div style={{width:72, height:72, border:'1px solid #C4BFB7', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <div style={{width:44, height:44, borderRadius:'50%', border:'1px solid #C4BFB7'}}></div>
            </div>
          </div>
          <div style={{paddingTop:8}}>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.1, color:'#9A948C', marginBottom:24}}>Razor Tech Archive（RTA）は、レザーカット技術の教育・普及を専門とする教育プラットフォームです。</p>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.1, color:'#9A948C', marginBottom:24}}><strong style={{color:'#1C1A17', fontWeight:300}}>「stealth cut」</strong>——音もなく、摩擦もなく、ただ正確に。フクロウの飛翔のように静寂の中に宿る技術を、理論と感覚の両軸から追求する。</p>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.1, color:'#9A948C'}}>セミナー、アーカイブコンテンツ、技術者コミュニティを通じて、カット技術の新しい基準を提案します。</p>
          </div>
        </div>
      </section>

      {/* MEMBERS */}
      <section className="section-pad" style={{padding:'140px 80px', borderTop:'1px solid #C4BFB7'}}>
        <div className="members-banner" style={{border:'1px solid #C4BFB7', padding:'100px 80px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:60, position:'relative', overflow:'hidden'}}>
          <div>
            <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:28, display:'flex', alignItems:'center', gap:16}}>
              <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
              Members
            </div>
            <h2 className="members-heading" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(32px,4vw,56px)', fontWeight:200, lineHeight:1.0, marginBottom:20, letterSpacing:'-0.01em'}}>Join the<br/>Archive</h2>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, color:'#9A948C', lineHeight:2, maxWidth:400}}>会員限定コンテンツ、オンラインセミナー、アプリへのアクセス。技術を深める場所がここにあります。</p>
          </div>
          <a href="#" style={{fontSize:9, letterSpacing:'0.28em', textTransform:'uppercase', color:'#1C1A17', border:'1px solid #C4BFB7', padding:'20px 52px', textDecoration:'none', whiteSpace:'nowrap', flexShrink:0}}>Join Now</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer" style={{padding:'48px 80px', borderTop:'1px solid #C4BFB7', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <span style={{fontFamily:'Cormorant Garamond, serif', fontSize:13, letterSpacing:'0.3em', textTransform:'uppercase', opacity:0.5}}>Razor Tech Archive</span>
        <span style={{fontSize:9, letterSpacing:'0.18em', color:'#9A948C'}}>© 2026 Razor Tech Archive</span>
        <div style={{display:'flex', gap:24}}>
          <a href="#" style={{fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'#9A948C', textDecoration:'none'}}>Instagram</a>
          <a href="#" style={{fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'#9A948C', textDecoration:'none'}}>Contact</a>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,200;0,300;1,200;1,300&family=DM+Sans:wght@200;300&display=swap');
        @keyframes tick { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(0.3); transform-origin: top; opacity: 0.4; }
          50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
        }
        @media (max-width: 768px) {
          .site-nav {
            padding: 20px 20px !important;
          }
          .menu-overlay {
            padding: 100px 24px 40px !important;
          }
          .hero-meta {
            padding: 0 20px !important;
            top: 76px !important;
          }
          .hero-vert {
            display: none !important;
          }
          .hero-title-block {
            left: 20px !important;
          }
          .hero-bottom {
            padding: 0 20px !important;
            bottom: 32px !important;
          }
          .section-pad {
            padding: 80px 24px !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .about-heading {
            font-size: 44px !important;
            margin-bottom: 28px !important;
          }
          .seminar-item {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
            padding: 28px 0 !important;
          }
          .seminar-name {
            font-size: 22px !important;
          }
          .members-banner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 32px !important;
            padding: 56px 28px !important;
          }
          .members-heading {
            font-size: 34px !important;
          }
          .site-footer {
            flex-direction: column !important;
            gap: 18px !important;
            padding: 36px 24px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </main>
  );
}
