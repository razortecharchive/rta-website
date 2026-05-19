'use client';

import Nav from '../components/Nav';
import { useGsapPageScroll } from '../hooks/useGsapPageScroll';

const steps = [
  {
    step: 'STEP 1',
    en: 'SEE',
    jp: '髪を観察する',
    body: '毛流・骨格・毛量を読み、切る前の「見方」を身体に刻む。Archive では観察のプロセスを映像と言語で保存する。',
  },
  {
    step: 'STEP 2',
    en: 'TOUCH',
    jp: '柔操作理論',
    body: '力ではなく接触の質で毛束を導く。柔操作の理論を、手の重さと刃の角度として再現可能にする。',
  },
  {
    step: 'STEP 3',
    en: 'FLOW',
    jp: 'CUT × DRY',
    body: 'カットとドライを一つの流れとして設計。切断から仕上がりまで、連続した感覚で形を立ち上げる。',
  },
  {
    step: 'STEP 4',
    en: 'DESIGN',
    jp: 'デザイン設計',
    body: '観察・操作・フローを統合し、人物に応じた設計図を描く。スタイルではなく、構造としてのデザイン。',
  },
  {
    step: 'STEP 5',
    en: 'EXPRESSION',
    jp: '表現',
    body: '技術を個の表現へ昇華する。保存された感覚を、現場の一瞬のカットとして取り出す。',
  },
];

const archiveTags = [
  'SEE', 'TOUCH', 'FLOW', 'DESIGN', 'EXPRESSION',
  'Stealth Cut', 'Razor', 'Dry', 'Theory', 'Session',
];

const plans = [
  {
    name: 'BASIC',
    jp: 'ベーシック',
    price: '¥3,300',
    period: '/ month',
    features: [
      'Archive 動画の閲覧（限定カテゴリ）',
      'タグ検索・キーワード検索',
      '月1回のオンライン Q&A',
    ],
    highlight: false,
  },
  {
    name: 'FOUNDATION',
    jp: 'ファウンデーション',
    price: '¥8,800',
    period: '/ month',
    features: [
      'STEP 1〜3 の全コンテンツ',
      'Archive 全タグへのアクセス',
      '月2回のライブセッション',
      '技術ノート（PDF）',
    ],
    highlight: true,
  },
  {
    name: 'CERTIFIED MEMBER',
    jp: '認定メンバー',
    price: '¥18,000',
    period: '/ month',
    features: [
      'STEP 1〜5 の全コンテンツ',
      'Archive 完全アクセス',
      'オフラインセミナー優先参加',
      '認定バッジ・会員フォーラム',
      '個別フィードバック（月1回）',
    ],
    highlight: false,
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

export default function MembersPage() {
  const mainRef = useGsapPageScroll();

  return (
    <main ref={mainRef} style={{background:'#EDEBE5', minHeight:'100vh', fontFamily:'DM Sans, sans-serif', fontWeight:200, color:'#1C1A17'}}>
      <Nav />

      {/* HEADER */}
      <section className="section-pad members-page-top" style={{padding:'180px 80px 80px', borderBottom:'1px solid #C4BFB7'}}>
        <SectionLabel>Members / Subscription</SectionLabel>
        <h1 className="members-page-title about-animate-title" style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(32px, 4vw, 56px)', fontWeight:200, lineHeight:1.05, letterSpacing:'-0.02em', marginBottom:28}}>
          Join the <em style={{fontStyle:'italic', color:'#C9956A'}}>Archive</em>
        </h1>
        <p className="about-fade-up" style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:13, color:'#9A948C', lineHeight:2.1, maxWidth:560}}>
          感覚を保存し、検索し、現場へ戻す。RTA Subscription は、技術を「感覚」で終わらせないための学びのインフラです。
        </p>
      </section>

      {/* STEPS */}
      <section className="section-pad" style={{padding:'140px 80px', borderBottom:'1px solid #C4BFB7'}}>
        <SectionLabel>Learning Path — STEP 1–5</SectionLabel>
        {steps.map((s) => (
          <div
            key={s.step}
            className="members-step-row about-fade-up"
            style={{display:'grid', gridTemplateColumns:'140px 1fr', alignItems:'start', gap:48, padding:'40px 0', borderBottom:'1px solid #C4BFB7'}}
          >
            <div>
              <div style={{fontSize:9, color:'#C9956A', letterSpacing:'0.32em', marginBottom:10}}>{s.step}</div>
              <span style={{fontFamily:'Cormorant Garamond, serif', fontSize:28, fontWeight:300, letterSpacing:'-0.01em', display:'block'}}>{s.en}</span>
              <span style={{fontSize:10, color:'#9A948C', letterSpacing:'0.12em'}}>{s.jp}</span>
            </div>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.1, color:'#9A948C', maxWidth:560, paddingTop:8}}>{s.body}</p>
          </div>
        ))}
      </section>

      {/* ARCHIVE SYSTEM */}
      <section className="section-pad" style={{padding:'140px 80px', borderBottom:'1px solid #C4BFB7'}}>
        <SectionLabel>Archive System</SectionLabel>
        <div className="members-archive-grid about-fade-up" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start'}}>
          <div>
            <h2 style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(24px, 3vw, 36px)', fontWeight:300, lineHeight:1.15, marginBottom:24, letterSpacing:'-0.01em'}}>
              検索できる教育、<br />
              <em style={{fontStyle:'italic', color:'#C9956A'}}>保存された感覚</em>
            </h2>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.1, color:'#9A948C', marginBottom:20}}>
              セッション映像・技法解説・理論ノートを、タグとキーワードで横断検索。切り方の手順ではなく、「なぜそう見たか」という問いから学べる構造。
            </p>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.1, color:'#9A948C'}}>
              現場で迷ったとき、Archive に戻る。感覚を言語と映像の両方で手元に置き続ける。
            </p>
          </div>
          <div style={{border:'1px solid #C4BFB7', padding:'36px 32px', background:'#E5E2DA'}}>
            <div style={{fontSize:8, letterSpacing:'0.45em', textTransform:'uppercase', color:'#9A948C', marginBottom:24}}>— Tags</div>
            <div style={{display:'flex', flexWrap:'wrap', gap:10}}>
              {archiveTags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize:9,
                    letterSpacing:'0.22em',
                    textTransform:'uppercase',
                    color:'#1C1A17',
                    border:'1px solid #C4BFB7',
                    padding:'10px 14px',
                    background:'#EDEBE5',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION PLANS */}
      <section className="section-pad" style={{padding:'140px 80px', borderBottom:'1px solid #C4BFB7'}}>
        <SectionLabel>Subscription Plan</SectionLabel>
        <div className="members-plans-grid" style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:32}}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="about-fade-up"
              style={{
                border: plan.highlight ? '1px solid #C9956A' : '1px solid #C4BFB7',
                padding:'40px 32px',
                background: plan.highlight ? '#E5E2DA' : 'transparent',
                display:'flex',
                flexDirection:'column',
                minHeight:420,
              }}
            >
              <div style={{fontSize:9, color:'#9A948C', letterSpacing:'0.28em', marginBottom:8}}>{plan.jp}</div>
              <h3 style={{fontFamily:'Cormorant Garamond, serif', fontSize:26, fontWeight:300, marginBottom:4, letterSpacing:'-0.01em'}}>{plan.name}</h3>
              <div style={{marginBottom:28, paddingBottom:28, borderBottom:'1px solid #C4BFB7'}}>
                <span style={{fontFamily:'Cormorant Garamond, serif', fontSize:32, fontWeight:300}}>{plan.price}</span>
                <span style={{fontSize:10, color:'#9A948C', letterSpacing:'0.12em'}}>{plan.period}</span>
              </div>
              <ul style={{listStyle:'none', flex:1, display:'flex', flexDirection:'column', gap:14}}>
                {plan.features.map((f) => (
                  <li key={f} style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:11, lineHeight:1.85, color:'#9A948C', paddingLeft:16, position:'relative'}}>
                    <span style={{position:'absolute', left:0, top:'0.55em', width:4, height:4, borderRadius:'50%', background:'#C9956A'}} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                style={{
                  display:'inline-block',
                  marginTop:28,
                  fontSize:9,
                  letterSpacing:'0.28em',
                  textTransform:'uppercase',
                  color:'#1C1A17',
                  border:'1px solid #C4BFB7',
                  padding:'16px 24px',
                  textDecoration:'none',
                  textAlign:'center',
                  background: plan.highlight ? '#EDEBE5' : 'transparent',
                }}
              >
                Inquire →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* OFFLINE CONNECTION */}
      <section className="section-pad" style={{padding:'140px 80px', borderBottom:'1px solid #C4BFB7'}}>
        <SectionLabel>Offline Connection</SectionLabel>
        <div className="members-offline about-fade-up" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center'}}>
          <div>
            <h2 style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(24px, 3vw, 36px)', fontWeight:300, lineHeight:1.15, marginBottom:24, letterSpacing:'-0.01em'}}>
              オンラインで蓄積し、<br />
              <em style={{fontStyle:'italic', color:'#C9956A'}}>対面で深める</em>
            </h2>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.1, color:'#9A948C', marginBottom:20}}>
              Archive で保存した感覚は、セミナーとワークショップで身体に戻る。録画では届かない手応えと空気の重みを、福岡・東京を中心に共有する。
            </p>
            <p style={{fontFamily:"'Hiragino Mincho Pro', 'ヒラギノ明朝 Pro', serif", fontSize:12, lineHeight:2.1, color:'#9A948C'}}>
              CERTIFIED MEMBER 以上は、オフラインセッションへの優先参加と、クローズドな技術対話へのアクセスが含まれます。
            </p>
            <a href="/seminar" style={{display:'inline-block', marginTop:32, fontSize:9, letterSpacing:'0.32em', textTransform:'uppercase', color:'#1C1A17', border:'1px solid #C4BFB7', padding:'18px 44px', textDecoration:'none'}}>
              View Seminars →
            </a>
          </div>
          <div style={{border:'1px solid #C4BFB7', aspectRatio:'4/3', display:'flex', alignItems:'center', justifyContent:'center', background:'#D9D5CC'}}>
            <span style={{fontFamily:'Cormorant Garamond, serif', fontSize:10, letterSpacing:'0.35em', textTransform:'uppercase', color:'#C4BFB7'}}>Offline Session</span>
          </div>
        </div>
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
          .members-page-top { padding: 140px 24px 60px !important; }
          .section-pad { padding: 80px 24px !important; }
          .members-step-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            padding: 32px 0 !important;
          }
          .members-archive-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .members-plans-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .members-offline {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </main>
  );
}
