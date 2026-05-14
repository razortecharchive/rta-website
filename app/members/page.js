'use client';
import { useState } from 'react';
import Nav from '../components/Nav';

export default function MembersPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !email.includes('@')) {
      setError('正しいメールアドレスを入力してください。');
      return;
    }
    setSubmitted(true);
  };

  return (
    <main style={{background:'#EDEBE5', minHeight:'100vh', fontFamily:'DM Sans, sans-serif', fontWeight:200, color:'#1C1A17'}}>
      <Nav />

      {/* HERO */}
      <section className="members-hero" style={{minHeight:'100vh', padding:'180px 80px 120px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', position:'relative', textAlign:'center'}}>

        {/* Decorative geometry */}
        <div aria-hidden="true" style={{position:'absolute', top:'18%', left:'12%', width:120, height:120, border:'1px solid #C4BFB7', display:'flex', alignItems:'center', justifyContent:'center', opacity:0.6}}>
          <div style={{width:60, height:60, borderRadius:'50%', border:'1px solid #C4BFB7'}}></div>
        </div>
        <div aria-hidden="true" style={{position:'absolute', bottom:'14%', right:'10%', width:1, height:120, background:'#C4BFB7', opacity:0.7}}></div>
        <div aria-hidden="true" style={{position:'absolute', top:'30%', right:'18%', width:8, height:8, borderRadius:'50%', background:'#C9956A', opacity:0.8}}></div>

        <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:48, display:'flex', alignItems:'center', gap:16}}>
          <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
          Members — Coming 2026
          <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
        </div>

        <h1 className="members-title" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(28px, 3vw, 42px)', fontWeight:200, lineHeight:1.05, letterSpacing:'-0.02em', marginBottom:36}}>
          <em style={{fontStyle:'italic', color:'#C9956A'}}>Coming</em><br/>Soon.
        </h1>

        <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:14, fontStyle:'italic', color:'#9A948C', lineHeight:2, maxWidth:520, marginBottom:14}}>
          会員制プラットフォームは、まもなく公開されます。
        </p>
        <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, color:'#9A948C', lineHeight:2.1, maxWidth:480, marginBottom:64}}>
          オンラインセミナー、アーカイブ動画、技術者同士のクローズドな対話。Stealth cut の継続的な学びの場を、招待制で提供します。
        </p>

        {/* Email Registration Form */}
        <div className="members-form-wrap" style={{width:'100%', maxWidth:480}}>
          {submitted ? (
            <div style={{border:'1px solid #C9956A', padding:'28px 24px', background:'#E5E2DA', display:'flex', alignItems:'center', gap:14, justifyContent:'center'}}>
              <span style={{width:6, height:6, borderRadius:'50%', background:'#C9956A', display:'inline-block'}}></span>
              <span style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, color:'#1C1A17'}}>ご登録ありがとうございました。準備が整い次第ご案内いたします。</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:16}}>
              <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#9A948C', textAlign:'left'}}>— Notify Me</div>
              <div className="members-form-row" style={{display:'flex', gap:0, border:'1px solid #C4BFB7', background:'transparent'}}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    flex:1,
                    padding:'18px 20px',
                    background:'transparent',
                    border:'none',
                    outline:'none',
                    fontFamily:'DM Sans, sans-serif',
                    fontSize:13,
                    color:'#1C1A17',
                    letterSpacing:'0.02em'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    fontFamily:'DM Sans, sans-serif',
                    fontSize:9,
                    letterSpacing:'0.32em',
                    textTransform:'uppercase',
                    color:'#1C1A17',
                    border:'none',
                    borderLeft:'1px solid #C4BFB7',
                    background:'transparent',
                    padding:'18px 28px',
                    cursor:'pointer',
                    whiteSpace:'nowrap',
                  }}
                >
                  Notify →
                </button>
              </div>
              {error && (
                <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:11, color:'#C9956A', textAlign:'left'}}>{error}</p>
              )}
              <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:10, color:'#9A948C', textAlign:'left', lineHeight:1.8}}>
                ご入力いただいたメールアドレスは、Members のご案内のみに使用します。
              </p>
            </form>
          )}
        </div>

      </section>

      {/* PREVIEW */}
      <section className="section-pad" style={{padding:'120px 80px', borderTop:'1px solid #C4BFB7'}}>
        <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:64, display:'flex', alignItems:'center', gap:16}}>
          <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
          What's Inside
        </div>

        <div className="preview-grid" style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:48}}>
          {[
            { num:'01', label:'Archive Video', desc:'過去セミナーのフル映像と、章ごとの技法解説。' },
            { num:'02', label:'Live Sessions', desc:'毎月1回のオンライン勉強会。事例の共有と質疑応答。' },
            { num:'03', label:'Private Forum', desc:'会員同士が技術を持ち寄り、議論するクローズドな場。' },
          ].map((f) => (
            <div key={f.num} style={{borderTop:'1px solid #C4BFB7', paddingTop:24}}>
              <div style={{fontSize:9, color:'#C9956A', letterSpacing:'0.32em', marginBottom:18}}>— {f.num}</div>
              <h3 style={{fontFamily:'Cormorant Garamond, serif', fontSize:22, fontWeight:300, marginBottom:12, letterSpacing:'-0.01em'}}>{f.label}</h3>
              <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:11, lineHeight:2, color:'#9A948C'}}>{f.desc}</p>
            </div>
          ))}
        </div>
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
          .members-hero {
            padding: 140px 24px 80px !important;
          }
          .section-pad {
            padding: 72px 24px !important;
          }
          .preview-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .members-form-row {
            flex-direction: column !important;
          }
          .members-form-row button {
            border-left: none !important;
            border-top: 1px solid #C4BFB7 !important;
            padding: 16px 28px !important;
          }
        }
      `}</style>
    </main>
  );
}
