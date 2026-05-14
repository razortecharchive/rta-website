import Nav from '../components/Nav';

const glassCard = {
  background: 'rgba(237,235,229,0.7)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(237,235,229,0.5)',
  borderRadius: 2,
  padding: 48,
};

export default function AboutPage() {
  return (
    <main style={{position:'relative', minHeight:'100vh', fontFamily:'DM Sans, sans-serif', fontWeight:200, color:'#1C1A17', background:'transparent'}}>
      {/* Fixed parallax background — backgroundAttachment works on background-image */}
      <div
        className="about-parallax-bg"
        aria-hidden="true"
        style={{
          position:'fixed',
          inset:0,
          zIndex:0,
          backgroundImage:'url(/about-1.jpg)',
          backgroundSize:'cover',
          backgroundPosition:'center',
          backgroundRepeat:'no-repeat',
          backgroundAttachment:'fixed',
        }}
      />

      <Nav />

      <div className="about-content" style={{position:'relative', zIndex:1}}>
        {/* HERO */}
        <section className="about-section-outer about-hero-wrap" style={{padding:'160px 80px 32px'}}>
          <div className="about-glass" style={{...glassCard, position:'relative', overflow:'hidden'}}>
            <div aria-hidden="true" style={{position:'absolute', top:32, right:32, width:160, height:160, border:'1px solid rgba(196,191,183,0.45)', borderRadius:2, pointerEvents:'none'}}></div>
            <div aria-hidden="true" style={{position:'absolute', top:56, right:56, width:96, height:96, borderRadius:'50%', border:'1px solid rgba(201,149,106,0.4)', pointerEvents:'none'}}></div>
            <div aria-hidden="true" style={{position:'absolute', top:100, right:108, width:6, height:6, borderRadius:'50%', background:'#C9956A', opacity:0.7, pointerEvents:'none'}}></div>

            <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:36, display:'flex', alignItems:'center', gap:16}}>
              <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
              About — Manifesto
            </div>
            <h1 className="page-heading" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(28px, 3vw, 42px)', fontWeight:200, lineHeight:1.05, letterSpacing:'-0.02em', marginBottom:36, position:'relative', zIndex:1}}>
              The Art of<br/><em style={{fontStyle:'italic', color:'#C9956A'}}>Stealth</em><br/>Cut.
            </h1>
            <p className="about-lede" style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:15, fontStyle:'italic', color:'#1C1A17', lineHeight:2.1, maxWidth:620, position:'relative', zIndex:1}}>
              音もなく、摩擦もなく、ただ正確に。<br/>フクロウの飛翔のように、静寂の中に宿る技術を。
            </p>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="about-section-outer" style={{padding:'32px 80px'}}>
          <div className="about-glass" style={glassCard}>
            <div className="about-two-col" style={{display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:80, alignItems:'start'}}>
              <div>
                <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:36, display:'flex', alignItems:'center', gap:16}}>
                  <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
                  I — Manifesto
                </div>
                <h2 className="about-section-title" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(36px,4.4vw,64px)', fontWeight:200, lineHeight:1, letterSpacing:'-0.02em', marginBottom:40}}>
                  Precision<br/>has no<br/><em style={{fontStyle:'italic', color:'#C9956A'}}>language</em>.
                </h2>
                <div style={{width:88, height:88, border:'1px solid rgba(196,191,183,0.7)', borderRadius:2, display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <div style={{width:54, height:54, borderRadius:'50%', border:'1px solid rgba(196,191,183,0.7)'}}></div>
                </div>
              </div>

              <div>
                <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:13, lineHeight:2.2, color:'#1C1A17', marginBottom:28}}>
                  髪を切るという行為は、極めて私的で身体的な対話である。私たちはその対話を、感覚の領域だけに閉じ込めない。
                </p>
                <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.2, color:'#9A948C', marginBottom:28}}>
                  Razor Tech Archive は、レザーカットという技術のなかに眠る論理を、丁寧に取り出し、言葉に変換し、再び現場へ戻していくための場である。技術者の手元で起きていることを観察し、分解し、共有可能なかたちにする。
                </p>
                <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.2, color:'#9A948C', marginBottom:28}}>
                  <strong style={{color:'#1C1A17', fontWeight:300}}>「stealth cut」</strong>とは、音も摩擦も最小化された切断のあり方を指す。それは単なる静けさではなく、毛束の重さと刃の角度、肌のテンションと呼吸が一致した瞬間に立ち上がる、ひとつの整合性である。
                </p>
                <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.2, color:'#9A948C'}}>
                  私たちはこの整合性を、神秘化しない。再現可能な手順と、共有可能な語彙によって、次の世代に渡せる「技術の文体」として残していく。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTERSTITIAL */}
        <div className="about-interstitial" style={{width:'100%', height:'60vh', overflow:'hidden'}}>
          <img
            src="/about-2.jpg"
            alt=""
            style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', display:'block'}}
          />
        </div>

        {/* PILLARS */}
        <section className="about-section-outer" style={{padding:'32px 80px'}}>
          <div className="about-glass pillars-glass" style={{...glassCard, position:'relative'}}>
            <div aria-hidden="true" style={{position:'absolute', top:36, right:36, width:1, height:96, background:'rgba(196,191,183,0.45)'}}></div>

            <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:48, display:'flex', alignItems:'center', gap:16}}>
              <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
              II — Three Pillars
            </div>

            <div className="pillars-grid" style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:48}}>
              {[
                {
                  num:'01',
                  title:'Theory',
                  jp:'理論',
                  body:'手の動きを「型」で覚えるのではなく、骨格・毛量・刃角の関係として理解する。再現性のある言葉に翻訳する。',
                },
                {
                  num:'02',
                  title:'Practice',
                  jp:'実践',
                  body:'対面のセッションで、自分の手で確かめる。録画では掴めない、空気の重みと刃の手応えを共有する。',
                },
                {
                  num:'03',
                  title:'Archive',
                  jp:'記録',
                  body:'過去のセッションを、テクニックではなく問いとして残す。次の技術者が同じ問いから出発できるように。',
                },
              ].map((p) => (
                <article key={p.num} style={{borderTop:'1px solid rgba(196,191,183,0.5)', paddingTop:28, display:'flex', flexDirection:'column', gap:20}}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <span style={{fontSize:9, color:'#C9956A', letterSpacing:'0.32em'}}>— {p.num}</span>
                    <span style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:11, color:'#9A948C', letterSpacing:'0.3em'}}>{p.jp}</span>
                  </div>
                  <h3 style={{fontFamily:'Cormorant Garamond, serif', fontSize:30, fontWeight:300, letterSpacing:'-0.01em'}}>{p.title}</h3>
                  <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.1, color:'#9A948C'}}>{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INTERSTITIAL */}
        <div className="about-interstitial" style={{width:'100%', height:'60vh', overflow:'hidden'}}>
          <img
            src="/about-3.jpg"
            alt=""
            style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', display:'block'}}
          />
        </div>

        {/* CLOSING */}
        <section className="about-section-outer" style={{padding:'32px 80px 160px'}}>
          <div className="about-glass" style={{...glassCard, textAlign:'center', position:'relative'}}>
            <div aria-hidden="true" style={{position:'absolute', top:40, left:'50%', transform:'translateX(-50%)', width:1, height:48, background:'rgba(201,149,106,0.65)'}}></div>
            <p className="closing-quote" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(28px,3.4vw,48px)', fontStyle:'italic', fontWeight:300, lineHeight:1.4, color:'#1C1A17', maxWidth:780, margin:'48px auto 28px', letterSpacing:'-0.01em'}}>
              “The blade does not <em style={{color:'#C9956A'}}>cut</em> hair.<br/>It listens to the weight that asks to fall.”
            </p>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, color:'#9A948C', letterSpacing:'0.3em', textTransform:'uppercase'}}>— RTA Manifesto, 2026</p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="site-footer about-section-outer" style={{padding:'32px 80px 48px'}}>
          <div className="about-glass" style={{...glassCard, padding:'32px 48px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:20}}>
            <span style={{fontFamily:'Cormorant Garamond, serif', fontSize:13, letterSpacing:'0.3em', textTransform:'uppercase', opacity:0.55}}>Razor Tech Archive</span>
            <span style={{fontSize:9, letterSpacing:'0.18em', color:'#9A948C'}}>© 2026 Razor Tech Archive</span>
            <div style={{display:'flex', gap:24}}>
              <a href="#" style={{fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'#9A948C', textDecoration:'none'}}>Instagram</a>
              <a href="/contact" style={{fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'#9A948C', textDecoration:'none'}}>Contact</a>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-section-outer {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .about-glass {
            padding: 28px 20px !important;
          }
          .about-hero-wrap {
            padding-top: 120px !important;
          }
          .about-interstitial {
            height: 45vh !important;
          }
          .about-two-col {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-section-title {
            font-size: 36px !important;
          }
          .pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .closing-quote {
            font-size: 22px !important;
          }
          .site-footer .about-glass {
            flex-direction: column !important;
            text-align: center !important;
            justify-content: center !important;
          }
          /* iOS: reduce jank with fixed attachment */
          @supports (-webkit-touch-callout: none) {
            .about-parallax-bg {
              background-attachment: scroll !important;
            }
          }
        }
      `}</style>
    </main>
  );
}
