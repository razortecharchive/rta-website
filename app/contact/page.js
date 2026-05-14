'use client';
import { useState } from 'react';
import Nav from '../components/Nav';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors((er) => ({ ...er, [name]: '' }));
    }
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'お名前を入力してください。';
    if (!form.email.trim() || !form.email.includes('@')) e.email = '正しいメールアドレスを入力してください。';
    if (!form.message.trim()) e.message = 'メッセージを入力してください。';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) {
      setErrors(e2);
      return;
    }
    setSubmitted(true);
  };

  return (
    <main style={{background:'#EDEBE5', minHeight:'100vh', fontFamily:'DM Sans, sans-serif', fontWeight:200, color:'#1C1A17'}}>
      <Nav />

      {/* HEADER */}
      <section className="contact-header" style={{padding:'180px 80px 80px', borderBottom:'1px solid #C4BFB7'}}>
        <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:36, display:'flex', alignItems:'center', gap:16}}>
          <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
          Contact — Get in Touch
        </div>
        <h1 className="page-heading" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(28px, 3vw, 42px)', fontWeight:200, lineHeight:1.05, letterSpacing:'-0.02em', marginBottom:36}}>
          Let's <em style={{fontStyle:'italic', color:'#C9956A'}}>talk</em>.
        </h1>
        <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:13, color:'#9A948C', lineHeight:2.1, maxWidth:560}}>
          セミナーへのお問い合わせ、コラボレーションのご相談、技術についての対話。お気軽にメッセージをお送りください。
        </p>
      </section>

      {/* FORM */}
      <section className="section-pad" style={{padding:'120px 80px'}}>
        <div className="contact-grid" style={{display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:120, alignItems:'start'}}>

          {/* LEFT INFO */}
          <aside>
            <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#C9956A', marginBottom:28, display:'flex', alignItems:'center', gap:16}}>
              <span style={{width:18, height:1, background:'#C9956A', display:'inline-block'}}></span>
              Info
            </div>

            <div style={{display:'flex', flexDirection:'column', gap:36, marginBottom:48}}>
              <div>
                <div style={{fontSize:9, color:'#9A948C', letterSpacing:'0.32em', textTransform:'uppercase', marginBottom:10}}>Email</div>
                <a href="mailto:hello@rta.studio" style={{fontFamily:'Cormorant Garamond, serif', fontSize:18, fontWeight:300, color:'#1C1A17', textDecoration:'none', letterSpacing:'0.01em'}}>hello@rta.studio</a>
              </div>
              <div>
                <div style={{fontSize:9, color:'#9A948C', letterSpacing:'0.32em', textTransform:'uppercase', marginBottom:10}}>Studio</div>
                <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, color:'#1C1A17', lineHeight:1.9}}>
                  〒810-0041<br/>
                  福岡市中央区大名 X-X-X<br/>
                  ill 天神大名 内
                </p>
              </div>
              <div>
                <div style={{fontSize:9, color:'#9A948C', letterSpacing:'0.32em', textTransform:'uppercase', marginBottom:10}}>Hours</div>
                <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, color:'#1C1A17', lineHeight:1.9}}>
                  Tue — Sat<br/>
                  11:00 — 19:00 JST
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div style={{width:72, height:72, border:'1px solid #C4BFB7', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <div style={{width:44, height:44, borderRadius:'50%', border:'1px solid #C9956A'}}></div>
            </div>
          </aside>

          {/* RIGHT FORM */}
          <div>
            {submitted ? (
              <div style={{border:'1px solid #C9956A', padding:'48px 36px', background:'#E5E2DA', textAlign:'center'}}>
                <span style={{width:8, height:8, borderRadius:'50%', background:'#C9956A', display:'inline-block', marginBottom:20}}></span>
                <h2 style={{fontFamily:'Cormorant Garamond, serif', fontSize:28, fontWeight:300, marginBottom:14, letterSpacing:'-0.01em'}}>Thank you.</h2>
                <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, color:'#9A948C', lineHeight:2}}>
                  メッセージを受け取りました。<br/>
                  数営業日以内にご返信いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:32}}>
                <Field
                  label="Name / お名前"
                  num="01"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  error={errors.name}
                />
                <Field
                  label="Email / メールアドレス"
                  num="02"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  error={errors.email}
                />
                <Field
                  label="Message / メッセージ"
                  num="03"
                  name="message"
                  type="textarea"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="ご相談内容をお書きください。"
                  error={errors.message}
                />

                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:24, paddingTop:16, borderTop:'1px solid #C4BFB7', flexWrap:'wrap'}}>
                  <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:10, color:'#9A948C', lineHeight:1.8, maxWidth:340}}>
                    送信内容は、お問い合わせ対応の目的でのみ使用します。
                  </p>
                  <button
                    type="submit"
                    style={{
                      fontFamily:'DM Sans, sans-serif',
                      fontSize:9,
                      letterSpacing:'0.32em',
                      textTransform:'uppercase',
                      color:'#1C1A17',
                      border:'1px solid #C4BFB7',
                      padding:'18px 44px',
                      background:'transparent',
                      cursor:'pointer',
                      whiteSpace:'nowrap',
                    }}
                  >
                    Send Message →
                  </button>
                </div>
              </form>
            )}
          </div>
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
          .contact-header {
            padding: 140px 24px 60px !important;
          }
          .section-pad {
            padding: 72px 24px !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 64px !important;
          }
        }
      `}</style>
    </main>
  );
}

function Field({ label, num, name, type = 'text', value, onChange, placeholder, error }) {
  const isTextarea = type === 'textarea';
  const sharedStyle = {
    width: '100%',
    padding: '18px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: error ? '1px solid #C9956A' : '1px solid #C4BFB7',
    outline: 'none',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 14,
    color: '#1C1A17',
    letterSpacing: '0.01em',
    resize: 'none',
  };
  return (
    <div style={{display:'flex', flexDirection:'column', gap:8}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <label htmlFor={name} style={{fontFamily:'DM Sans, sans-serif', fontSize:9, letterSpacing:'0.32em', textTransform:'uppercase', color:'#9A948C'}}>
          — {label}
        </label>
        <span style={{fontSize:9, color:'#C9956A', letterSpacing:'0.32em'}}>{num}</span>
      </div>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={6}
          style={sharedStyle}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={sharedStyle}
        />
      )}
      {error && (
        <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:11, color:'#C9956A', letterSpacing:'0.04em'}}>{error}</p>
      )}
    </div>
  );
}
