import Nav from '../components/Nav';

export default function AboutPage() {
  return (
    <main style={{background:'#EDEBE5', minHeight:'100vh', fontFamily:'DM Sans, sans-serif', fontWeight:200, color:'#1C1A17'}}>
      <Nav />

      {/* HERO */}
      <section className="about-hero" style={{position:'relative', padding:'180px 80px 120px', borderBottom:'1px solid #C4BFB7', overflow:'hidden'}}>
        {/* Geometric decorations */}
        <div aria-hidden="true" style={{position:'absolute', top:120, right:80, width:200, height:200, border:'1px solid #C4BFB7', opacity:0.6}}></div>
        <div aria-hidden="true" style={{position:'absolute', top:180, right:140, width:120, height:120, borderRadius:'50%', border:'1px solid #C9956A', opacity:0.5}}></div>
        <div aria-hidden="true" style={{position:'absolute', top:260, right:200, width:6, height:6, borderRadius:'50%', background:'#C9956A'}}></div>

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
      </section>

      {/* MANIFESTO */}
      <section className="section-pad" style={{padding:'160px 80px'}}>
        <div className="about-two-col" style={{display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:120, alignItems:'start'}}>
          <div style={{position:'sticky', top:120}}>
            <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:36, display:'flex', alignItems:'center', gap:16}}>
              <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
              I — Manifesto
            </div>
            <h2 className="about-section-title" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(36px,4.4vw,64px)', fontWeight:200, lineHeight:1, letterSpacing:'-0.02em', marginBottom:48}}>
              Precision<br/>has no<br/><em style={{fontStyle:'italic', color:'#C9956A'}}>language</em>.
            </h2>
            <div style={{width:88, height:88, border:'1px solid #C4BFB7', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <div style={{width:54, height:54, borderRadius:'50%', border:'1px solid #C4BFB7'}}></div>
            </div>
          </div>

          <div>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:13, lineHeight:2.2, color:'#1C1A17', marginBottom:32}}>
              髪を切るという行為は、極めて私的で身体的な対話である。私たちはその対話を、感覚の領域だけに閉じ込めない。
            </p>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.2, color:'#9A948C', marginBottom:32}}>
              Razor Tech Archive は、レザーカットという技術のなかに眠る論理を、丁寧に取り出し、言葉に変換し、再び現場へ戻していくための場である。技術者の手元で起きていることを観察し、分解し、共有可能なかたちにする。
            </p>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.2, color:'#9A948C', marginBottom:32}}>
              <strong style={{color:'#1C1A17', fontWeight:300}}>「stealth cut」</strong>とは、音も摩擦も最小化された切断のあり方を指す。それは単なる静けさではなく、毛束の重さと刃の角度、肌のテンションと呼吸が一致した瞬間に立ち上がる、ひとつの整合性である。
            </p>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.2, color:'#9A948C'}}>
              私たちはこの整合性を、神秘化しない。再現可能な手順と、共有可能な語彙によって、次の世代に渡せる「技術の文体」として残していく。
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section-pad" style={{padding:'160px 80px', borderTop:'1px solid #C4BFB7', position:'relative'}}>
        <div aria-hidden="true" style={{position:'absolute', top:80, right:80, width:1, height:120, background:'#C4BFB7'}}></div>

        <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:64, display:'flex', alignItems:'center', gap:16}}>
          <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
          II — Three Pillars
        </div>

        <div className="pillars-grid" style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:60}}>
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
            <article key={p.num} style={{borderTop:'1px solid #C4BFB7', paddingTop:36, display:'flex', flexDirection:'column', gap:24}}>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span style={{fontSize:9, color:'#C9956A', letterSpacing:'0.32em'}}>— {p.num}</span>
                <span style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:11, color:'#9A948C', letterSpacing:'0.3em'}}>{p.jp}</span>
              </div>
              <h3 style={{fontFamily:'Cormorant Garamond, serif', fontSize:34, fontWeight:300, letterSpacing:'-0.01em'}}>{p.title}</h3>
              <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.1, color:'#9A948C'}}>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ORIGINS */}
      <section className="section-pad" style={{padding:'160px 80px', borderTop:'1px solid #C4BFB7'}}>
        <div className="origins-grid" style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:120, alignItems:'start'}}>
          <div>
            <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:36, display:'flex', alignItems:'center', gap:16}}>
              <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
              III — Origins
            </div>
            <h2 className="about-section-title" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(36px,4.4vw,64px)', fontWeight:200, lineHeight:1.0, letterSpacing:'-0.02em', marginBottom:48}}>
              From a quiet<br/><em style={{fontStyle:'italic', color:'#C9956A'}}>workshop</em>.
            </h2>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.2, color:'#9A948C', marginBottom:28}}>
              Razor Tech Archive は、福岡のひとつの工房から始まった。日々の現場で繰り返される質問——「どうしてこの角度で？」「なぜここで止める？」——それらに、丁寧に答えを残していくことが、最初の動機だった。
            </p>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.2, color:'#9A948C', marginBottom:28}}>
              2025 年、小さな対面の勉強会としてスタートしたセッションは、いまではアーカイブとして、また会員制のオンライン空間として、技術者同士の対話の場へと広がりつつある。
            </p>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.2, color:'#9A948C'}}>
              派手な技を見せる場所ではない。日常の手元に、もう一度、静けさを取り戻すための場所である。
            </p>
          </div>

          <aside style={{position:'relative'}}>
            <div aria-hidden="true" style={{aspectRatio:'3/4', background:'#D9D5CC', border:'1px solid #C4BFB7', position:'relative', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <div style={{position:'absolute', inset:24, border:'1px solid #C4BFB7'}}></div>
              <div style={{width:48, height:48, borderRadius:'50%', border:'1px solid #C9956A'}}></div>
              <span style={{position:'absolute', bottom:16, left:16, fontSize:8, letterSpacing:'0.32em', textTransform:'uppercase', color:'#9A948C'}}>Fig. 01 — Stillness</span>
              <span style={{position:'absolute', top:16, right:16, fontSize:8, letterSpacing:'0.32em', textTransform:'uppercase', color:'#C9956A'}}>RTA / 2026</span>
            </div>
          </aside>
        </div>
      </section>

      {/* CLOSING */}
      <section className="section-pad" style={{padding:'180px 80px 140px', borderTop:'1px solid #C4BFB7', textAlign:'center', position:'relative'}}>
        <div aria-hidden="true" style={{position:'absolute', top:80, left:'50%', transform:'translateX(-50%)', width:1, height:64, background:'#C9956A'}}></div>
        <p className="closing-quote" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(28px,3.4vw,48px)', fontStyle:'italic', fontWeight:300, lineHeight:1.4, color:'#1C1A17', maxWidth:780, margin:'0 auto 32px', letterSpacing:'-0.01em'}}>
          “The blade does not <em style={{color:'#C9956A'}}>cut</em> hair.<br/>It listens to the weight that asks to fall.”
        </p>
        <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, color:'#9A948C', letterSpacing:'0.3em', textTransform:'uppercase'}}>— RTA Manifesto, 2026</p>
      </section>

      {/* FOOTER */}
      <footer className="site-footer" style={{padding:'48px 80px', borderTop:'1px solid #C4BFB7', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <span style={{fontFamily:'Cormorant Garamond, serif', fontSize:13, letterSpacing:'0.3em', textTransform:'uppercase', opacity:0.5}}>Razor Tech Archive</span>
        <span style={{fontSize:9, letterSpacing:'0.18em', color:'#9A948C'}}>© 2026 Razor Tech Archive</span>
        <div style={{display:'flex', gap:24}}>
          <a href="#" style={{fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'#9A948C', textDecoration:'none'}}>Instagram</a>
          <a href="/contact" style={{fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'#9A948C', textDecoration:'none'}}>Contact</a>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .about-hero {
            padding: 140px 24px 80px !important;
          }
          .about-lede {
            font-size: 13px !important;
          }
          .section-pad {
            padding: 88px 24px !important;
          }
          .about-two-col,
          .origins-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .about-section-title {
            font-size: 40px !important;
          }
          .pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .closing-quote {
            font-size: 22px !important;
          }
        }
      `}</style>
    </main>
  );
}
