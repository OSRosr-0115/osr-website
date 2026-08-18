import { useState, useEffect, useRef, useCallback } from 'react'

import image6 from './image6.jpeg';
import image7 from './image7.jpeg';
import image0 from './image0.png';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';

// ─── Tokens ────────────────────────────────────────────────────────────────────
const NAVY   = '#0d1f35'
const NAVY2  = '#162d47'
const GOLD   = '#c9a84c'
const GOLD2  = '#f0d88a'
const GOLDDIM= '#a07830'
const WHITE  = '#ffffff'
const OFF    = '#f7f6f2'
const GRAY   = '#e8e5df'
const MUTED  = '#6b6b6b'
const BORDER = 'rgba(201,168,76,0.25)';

// ─── Scroll reveal hook ────────────────────────────────────────────────────────
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Reveal({ children, className, delay = 0, tag = 'div' }: {
  children: React.ReactNode; className?: string; delay?: number; tag?: 'div'|'section'|'p'|'h2'|'h3'|'li'
}) {
  const { ref, visible } = useReveal()
  const Tag = tag as any
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  )
}

// ─── Gold rule ─────────────────────────────────────────────────────────────────
function GoldRule({ className = '' }: { className?: string }) {
  const { ref, visible } = useReveal(0.5)
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div style={{
        height: '1px',
        background: `linear-gradient(90deg, ${GOLD}, ${GOLD2}, ${GOLDDIM})`,
        transformOrigin: 'left',
        transform: visible ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 1s cubic-bezier(0.16,1,0.3,1)',
      }} />
    </div>
  )
}

// ─── Section heading ──────────────────────────────────────────────────────────
function SectionHead({ en, jp, light = false }: { en: string; jp: string; light?: boolean }) {
  return (
    <div className="mb-14">
      <Reveal delay={0}>
        <p className="text-xs tracking-[0.35em] mb-3 font-medium" style={{ fontFamily: 'Shippori Mincho', color: GOLD, letterSpacing: '0.3em' }}>{en}</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="text-3xl lg:text-4xl font-bold leading-snug" style={{ fontFamily: 'Shippori Mincho', color: light ? WHITE : NAVY, letterSpacing: '0.05em' }}>{jp}</h2>
      </Reveal>
      <Reveal delay={180}>
        <div className="mt-5 w-12 h-px" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD2})` }} />
      </Reveal>
    </div>
  )
}

// ─── Nav links ────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: '会社概要', href: '#about' },
  { label: '業務内容', href: '#services' },
  { label: '施工実績', href: '#works' },
  { label:`社長メッセージ`, href:`#message`},
  { label: 'お知らせ', href: '#news' },
  { label: '求人', href: '#recruit' },
  { label: '事業紹介', href: '#business' },
]

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES_DATA = [
  {
    no: '01',
    title: '退去立ち合い・原状回復',
    en: 'Restoration',
    desc: '退去時の立会いから、クロス・床・設備補修・クリーニングまで対応。',
    image: image0,
  },
  {
    no: '02',
    title: 'リフォーム工事',
    en: 'Inspection Agency',
    desc: 'キッチン・浴室・洗面・内装変更など、住まいを幅広くリニューアル。',
    image: image1,
  },
  {
    no: '03',
    title: '内装・設備工事',
    en: 'Renovation',
    desc: 'クロス・床・健具・電気・水回り・空調など各種施工に対応。',
    image: image2,
  },
  {
    no: '04',
    title: '外構・エクステリア工事',
    en: 'Interior & Equipment',
    desc: `フェンス・ブロック・土間・門まわりなど、建物外部の工事にも対応。`,
    image: image3,
  },
  {
    no: '05',
    title: '不用品回収・残置物撤去',
    en: 'Clearance & Cleaning',
    desc: '家具・家電・残置物などの回収・撤去をまとめて対応。',
    image: image4,
  },
  {
    no: '06',
    title: 'ハウスクリーニング',
    en: 'Property Management',
    desc: '入退去時や工事後の清掃まで、きれいな状態に仕上げる。',
    image: image5,
  },
]

const WORKS_DATA = [
  { tag: '内装工事', title: 'オフィス内装工事①', area: '埼玉県春日部市', img: image6 },
  { tag: '内装工事', title: 'オフィス内装工事②', area: '埼玉県春日部市', img: image7 },
 
]

const NEWS_DATA = [
  { date: '2026.08.07', cat: '採用情報', title: '施工スタッフを募集中です(詳細は求人ページへ)',link:`#recruit` },
  { date: '2026.05.26', cat: `『令和の虎』出演しました。`, title: 'YouTubeチャンネル『令和の虎』ぜひご視聴ください。',link:`https://www.youtube.com/watch?v=FiPLOYbRcco` },
]

const RECRUIT_DATA = [
  {
    position: '施工スタッフ（正社員）',
    type: '正社員',
    summary: '原状回復・リフォーム工事の現場施工をお任せします。未経験者・経験者歓迎。先輩スタッフが丁寧に指導します。',
    conditions: ['月給 230,000円〜', '週休2日制（日・祝）', '社会保険完備', '資格取得支援制度あり'],
  },
  {
    position: '現場監督・工事責任者',
    type: '正社員',
    summary: '複数現場の進捗管理・職人手配・品質管理をお任せします。施工経験3年以上の方歓迎。',
    conditions: ['月給 280,000円〜', '週休2日制(日・祝)', '社会保険完備', '資格取得支援制度あり'],
  },
]

const RELATED_DATA = [
  {
    name: '重量鳶事業',
    desc: '『安心・安全・信頼』のサービスをご提供します。',
    icon: '✦',
    url: 'https://www.osr0115.com',
  },
  {
    name: 'デジタルサイネージ事業',
    desc: '世界の最先端を日本のスタンダードへ。デジタルサイネージで、日本の未来をもっと便利に、もっと豊かに。',
    icon: '◆',
    url: '',
  },
  
]

// ─── Main ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', tel: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll) }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`https://formspree.io/f/mgawovgb`, {
      method: `POST`,
      body: new FormData(e.currentTarget),
      headers: {
      　Accept:'application/json'
    } 
  })

    const result = await response.json();
    
if (response.ok) {
  setSent(true);
} else {
  alert('送信に失敗しました。もう一度お試しください。')
}
}; 
  const heroStyle = (delay: number) => ({
    opacity: heroVisible ? 1 : 0,
    transform: heroVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  })

  return (
    <div style={{ background: WHITE, color: '#1a1a1a', fontFamily: 'Noto Sans JP' }}>

      {/* ══════════════ HEADER ══════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(13,31,53,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? `1px solid ${BORDER}` : '1px solid transparent',
        }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://res.cloudinary.com/hlmgcqgq/image/upload/f_auto,q_auto/18BDE8B5-89D1-41CC-97FE-29F1D887EFB1_ks6hyl"
            alt="株式会社OSR"
            className="h-20 w-auto object-contain"
            />
        </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map(n => (
              <a key={n.label} href={n.href || undefined}
                className="text-xs tracking-wide relative group transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}
                onMouseEnter={e => (e.currentTarget.style.color = GOLD2)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact"
              className="hidden lg:block px-6 py-2.5 text-xs font-medium tracking-widest transition-all duration-300 border"
              style={{ borderColor: GOLD, color: GOLD }}
              onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = NAVY }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = GOLD }}>
              お問い合わせ
            </a>
            <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {[0,1,2].map(i => (
                <span key={i} className="block w-5 h-px transition-all duration-300"
                  style={{
                    background: GOLD,
                    transform: menuOpen ? (i===0?'rotate(45deg) translate(3px,3px)':i===1?'scaleX(0)':'rotate(-45deg) translate(3px,-3px)') : 'none',
                  }} />
              ))}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t" style={{ background: 'rgba(13,31,53,0.98)', borderColor: BORDER }}>
            {NAV_ITEMS.map(n => (
              <a key={n.label} href={n.href || undefined}
                className="flex items-center justify-between px-6 py-4 border-b text-sm"
                style={{ borderColor: 'rgba(201,168,76,0.1)', color: 'rgba(255,255,255,0.75)', fontWeight: 300 }}
                onClick={() => setMenuOpen(false)}>
                {n.label}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6h6M7 3l3 3-3 3" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/hlmgcqgq/image/upload/f_auto,q_auto/image0_rjdt3v"
            alt="高品質リフォーム施工"
            className="w-full h-full object-cover"
            style={{ transform: 'scale(1.05)', transition: 'transform 8s ease', ...(heroVisible ? { transform: 'scale(1)' } : {}) }}
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, rgba(13,31,53,0.92) 0%, rgba(13,31,53,0.7) 55%, rgba(13,31,53,0.3) 100%)` }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,31,53,0.6) 0%, transparent 50%)' }} />
        </div>

        {/* Gold vertical accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(to bottom, transparent 0%, ${GOLD} 30%, ${GOLD2} 70%, transparent 100%)` }} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 pb-24 lg:pb-32 pt-32 w-full">
          <div style={heroStyle(0)} className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD2})` }} />
            <span className="text-xs tracking-[0.4em] font-medium" style={{ color: GOLD, fontFamily: 'Shippori Mincho' }}>RESTORATION &amp; RENOVATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white"
            style={{ ...heroStyle(150), fontFamily: 'Shippori Mincho', letterSpacing: '0.04em', lineHeight: 1.25 }}>
            原状回復工事<br />
            リフォーム工事<br />
            <span style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', background: `linear-gradient(90deg, ${GOLD} 0%, ${GOLD2} 50%, ${GOLD} 100%)`, backgroundSize: '200% auto', animation: 'shimmer 4s linear infinite', backgroundClip: 'text' }}>
             　　　　 一社完結
            </span>
          </h1>

          <p className="text-sm lg:text-base leading-loose mb-10 max-w-xl"
            style={{ ...heroStyle(300), color: 'rgba(255,255,255,0.65)', fontWeight: 300 }}>
            株式会社OSRは、退去立ち合い・原状回復・リフォーム<br />
            内装・外構・ハウスクリーニングまで<br className="hidden lg:block" />
            建物に関する幅広い工事をワンストップで対応します。
          </p>

          <div style={heroStyle(450)} className="flex flex-wrap gap-4">
            <a href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD2} 100%)`, color: NAVY }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              無料見積もりを依頼する
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke={NAVY} strokeWidth="1.5"/></svg>
            </a>
            <a href="#services"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest border transition-all duration-300"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: WHITE }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD2; e.currentTarget.style.color = GOLD2 }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = WHITE }}>
              サービス一覧
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={heroStyle(700)}>
          <span className="text-xs tracking-[0.3em]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Shippori Mincho' }}>SCROLL</span>
          <div className="w-px h-12 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.15)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: `linear-gradient(to bottom, ${GOLD}, transparent)`, animation: 'fadeUp 1.5s ease infinite' }} />
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden py-3 flex" style={{ background: `linear-gradient(90deg, ${GOLD} 0%, ${GOLD2} 50%, ${GOLD} 100%)` }}>
        <div className="flex gap-16 whitespace-nowrap" style={{ animation: 'marquee 18s linear infinite' }}>
          {['原状回復工事', '立ち合い代行', 'リフォーム', '内装工事', '設備交換', '不用品回収', '清掃', '賃貸管理サポート'].concat(
            ['原状回復工事', '立ち合い代行', 'リフォーム', '内装工事', '設備交換', '不用品回収', '清掃', '賃貸管理サポート']
          ).map((t, i) => (
            <span key={i} className="text-xs font-bold tracking-[0.25em]" style={{ color: NAVY, fontFamily: 'Shippori Mincho' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ══════════════ 会社概要 ══════════════ */}
      <section id="about" className="py-24 lg:py-32" style={{ background: OFF }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHead en="COMPANY" jp="会社概要" />
            <Reveal delay={0}>
              <p className="text-sm leading-loose mb-10" style={{ color: MUTED, fontWeight: 300, maxWidth: '46ch' }}>
                株式会社OSRは、原状回復・リフォーム・内装設備・外構工事など、建物に関する幅広い施工を手掛けています。
                退去立ち合いから施工・設備交換・清掃・不用品回収まで一貫して対応し、確かな施工力と迅速な対応で、
                個人・法人を問わず多様なニーズにお応えします。
              </p>
            </Reveal>
            <Reveal delay={100}>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['会社名', '株式会社OSR'],
                    ['代表取締役', '大崎　純'],
                    ['設立', '2022年３月4日'],
                    ['資本金', '100万円'],
                    ['所在地', '埼玉県春日部市豊町6丁目1-2'],
                    ['TEL', '048-633-4952'],
                    ['事業内容', '原状回復・リフォーム・内装工事・清掃・重量鳶'],
                    ['対応エリア', '全国'],
                    ['建設業許可', '埼玉県知事許可（般-8）第79625号'],
                  ].map(([k, v]) => (
                    <tr key={k} style={{ borderBottom: `1px solid ${GRAY}` }}>
                      <td className="py-3 pr-8 text-xs font-medium w-32 shrink-0" style={{ color: GOLD }}>{k}</td>
                      <td className="py-3 text-xs" style={{ color: NAVY, fontWeight: 400 }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/hlmgcqgq/image/upload/f_auto,q_auto/697c0c4c-4988-43fc-8adc-7c1c3d670217_vynuep"
                alt="施工現場"
                className="w-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: GOLD }} />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: GOLD }} />
              <div className="absolute bottom-0 left-0 px-5 py-4" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY2} 100%)` }}>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Shippori Mincho' }}>Since 2022</div>
                <div className="text-xs mt-0.5" style={{ color: GOLD, fontWeight: 300 }}>埼玉県春日部市</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════ 業務内容 ══════════════ */}
      <section id="services" className="py-24 lg:py-32" style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHead en="SERVICES" jp="業務内容" light />
          <Reveal delay={50}>
            <p className="text-sm leading-loose -mt-8 mb-14 max-w-xl" style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>
              退去立ち合いから施工・清掃まで、建物に関する幅広い工事に対応します。
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(201,168,76,0.12)' }}>
            {SERVICES_DATA.map((s, i) => (
              <Reveal key={s.no} delay={i * 80}>
                <div
                  className="p-8 group cursor-default transition-colors duration-300"
                  style={{ background: NAVY }}
                  onMouseEnter={e => (e.currentTarget.style.background = NAVY2)}
                  onMouseLeave={e => (e.currentTarget.style.background = NAVY)}
                >
                  <div className="mb-5">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="text-xs tracking-[0.3em] mb-2 font-medium" style={{ color: GOLD, fontFamily: 'Shippori Mincho' }}>{s.no}</div>
                  <h3 className="text-base font-bold mb-3" style={{ color: WHITE, fontFamily: 'Shippori Mincho', letterSpacing: '0.05em' }}>{s.title}</h3>
                  <div className="w-6 h-px mb-4 transition-all duration-300 group-hover:w-12" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD2})` }} />
                  <p className="text-xs leading-loose" style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>{s.desc}</p>
                  <div className="mt-4 text-xs tracking-widest" style={{ color: 'rgba(201,168,76,0.4)', fontFamily: 'Shippori Mincho' }}>{s.en.toUpperCase()}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 施工実績 ══════════════ */}
      <section id="works" className="py-24 lg:py-32" style={{ background: WHITE }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-14">
            <SectionHead en="WORKS" jp="施工実績" />
            <Reveal delay={200}>
              <a href="#" className="hidden lg:flex items-center gap-2 text-xs tracking-widest transition-colors duration-200 pb-2"
                style={{ color: MUTED, borderBottom: `1px solid ${GRAY}` }}
                onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
                すべての実績を見る
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2"/></svg>
              </a>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKS_DATA.map((w, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="group cursor-pointer overflow-hidden" style={{ border: `1px solid ${GRAY}` }}>
                  <div className="overflow-hidden relative" style={{ aspectRatio: '16/9' }}>
                    <img
                      src={w.img}
                      alt={w.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium tracking-widest"
                      style={{ background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD2} 100%)`, color: NAVY, fontFamily: 'Shippori Mincho' }}>
                      {w.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-bold mb-2" style={{ color: NAVY, fontWeight: 700 }}>{w.title}</h3>
                    <div className="flex gap-4">
                      <span className="text-xs" style={{ color: MUTED, fontWeight: 300 }}>{w.area}</span>
                      <span className="text-xs" style={{ color: MUTED, fontWeight: 300 }}>{w.size}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 社長メッセージ（画像のみ）══════════════ */}
      <section id="message" className="relative overflow-hidden" style={{ minHeight:`100vh`}}>
        <Reveal delay={0} className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/hlmgcqgq/image/upload/f_auto,q_auto/image0_mueuju"
            alt="代表取締役メッセージ"
            className="w-full h-full object-cover object-center"
          />
        </Reveal>
        {/* Gold left bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(to bottom, transparent, ${GOLD}, ${GOLD2}, transparent)` }} />
        <div className="absolute bottom-10 left-10 lg:left-16">
          <Reveal delay={200}>
            <p className="text-xs tracking-[0.35em] mb-2" style={{ color: GOLD, fontFamily: 'Shippori Mincho' }}>MESSAGE</p>
            <p className="text-xl lg:text-3xl font-bold text-white" style={{ fontFamily: 'Shippori Mincho', letterSpacing: '0.08em' }}>代表取締役メッセージ</p>
            <div className="mt-3 w-16 h-px" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD2})` }} />
          </Reveal>
        </div>
      </section>

      {/* ══════════════ お知らせ ══════════════ */}
      <section id="news" className="py-24 lg:py-32" style={{ background: OFF }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <SectionHead en="NEWS" jp="お知らせ" />
          <div className="divide-y" style={{ borderTop: `1px solid ${GRAY}`, borderBottom: `1px solid ${GRAY}` }}>
            {NEWS_DATA.map((n, i) => (
              <Reveal key={n.title} delay={i * 60}>
              <a 
                href={n.link}
                target={n.link?.startsWith(`http`) ? `_blank`: undefined}
                rel={n.link?.startsWith(`http`) ? `noopener noreferrer` : undefined}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5 group transition-colors duration-200"
                  onMouseEnter={e => (e.currentTarget.style.background = GRAY)}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  style={{ paddingLeft: '12px', paddingRight: '12px', margin: '0 -12px' }}>
                  <span className="text-xs shrink-0" style={{ color: MUTED, fontFamily: 'Shippori Mincho', minWidth: '7rem' }}>{n.date}</span>
                  <span className="px-2 py-0.5 text-xs shrink-0" style={{ background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD2} 100%)`, color: NAVY, fontFamily: 'Shippori Mincho', minWidth: '6rem', textAlign: 'center' }}>{n.cat}</span>
                  <span className="text-sm group-hover:underline decoration-gold" style={{ color: NAVY, fontWeight: 400, textDecorationColor: GOLD }}>{n.title}</span>
                  <svg className="ml-auto shrink-0 hidden sm:block" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke={GOLD} strokeWidth="1.2"/>
                  </svg>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <div className="mt-8 text-center">
              <a href="#" className="inline-flex items-center gap-2 text-xs tracking-widest border px-6 py-3 transition-all duration-300"
                style={{ borderColor: GOLD, color: GOLD }}
                onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = NAVY }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = GOLD }}>
                お知らせ一覧
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2"/></svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════ 求人 ══════════════ */}
      <section id="recruit" className="py-24 lg:py-32" style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHead en="RECRUIT" jp="採用情報" light />
          <Reveal delay={50}>
            <p className="text-sm leading-loose -mt-8 mb-14 max-w-xl" style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>
              私たちと一緒に、全国の住まいを守る仕事をしませんか。
              未経験者・経験者歓迎。資格取得支援制度があります。
            </p>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-6">
            {RECRUIT_DATA.map((r, i) => (
              <Reveal key={r.position} delay={i * 100}>
                <div className="flex flex-col p-8 h-full transition-colors duration-300"
                  style={{ border: `1px solid ${BORDER}`, background: 'rgba(255,255,255,0.02)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.05)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}>
                  <span className="inline-block px-3 py-1 text-xs font-medium mb-4 self-start tracking-widest"
                    style={{ background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD2} 100%)`, color: NAVY, fontFamily: 'Shippori Mincho' }}>
                    {r.type}
                  </span>
                  <h3 className="text-base font-bold mb-3 text-white" style={{ fontFamily: 'Shippori Mincho', letterSpacing: '0.03em' }}>{r.position}</h3>
                  <div className="w-8 h-px mb-4" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD2})` }} />
                  <p className="text-xs leading-loose mb-6 flex-1" style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>{r.summary}</p>
                  <ul className="space-y-1.5 mb-6">
                    {r.conditions.map(c => (
                      <li key={c} className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
                        <span style={{ color: GOLD }}>—</span>{c}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact"
                    className="flex items-center justify-center gap-2 py-3 text-xs font-medium tracking-widest border transition-all duration-300 mt-auto"
                    style={{ borderColor: GOLD, color: GOLD }}
                    onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = NAVY }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = GOLD }}>
                    この求人に応募する
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2"/></svg>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 事業紹介 ══════════════ */}
      <section id="business" className="py-24 lg:py-32" style={{ background: WHITE }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHead en="GROUP" jp="事業紹介" />
          <div className="grid lg:grid-cols-3 gap-8">
            {RELATED_DATA.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <div
                  onClick={() => {
                    if (r.name.includes('重量')) {
                      window.open('https://www.osr0115.com/', '_blank');
                    }
                  }}
                  className="group p-8 cursor-pointer transition-all duration-300 relative overflow-hidden"
                  style={{ background: OFF, border: `1px solid ${GRAY}` }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.background = WHITE }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = GRAY; e.currentTarget.style.background = OFF }}>
                  <div className="absolute top-0 left-0 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD2})` }} />
                  <div className="text-2xl mb-5 font-bold" style={{ color: GOLD }}>{r.icon}</div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: NAVY, fontFamily: 'Shippori Mincho', letterSpacing: '0.05em' }}>{r.name}</h3>
                  <div className="w-8 h-px mb-4" style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD2})` }} />
                  <p className="text-xs leading-loose" style={{ color: MUTED, fontWeight: 300 }}>{r.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs transition-colors duration-200"
                    style={{ color: 'rgba(201,168,76,0.5)' }}>
                    <span className="group-hover:text-[#c9a84c] transition-colors duration-200" style={{ color: 'inherit' }}>詳しく見る</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke={GOLD} strokeWidth="1.2" opacity="0.5"/></svg>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ お問い合わせ ══════════════ */}
      <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: NAVY }}>
        {/* BG pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `repeating-linear-gradient(0deg, ${GOLD} 0px, ${GOLD} 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, ${GOLD} 0px, ${GOLD} 1px, transparent 1px, transparent 40px)` }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <SectionHead en="CONTACT" jp="お問い合わせ" light />
            <Reveal delay={100}>
              <p className="text-sm leading-loose mb-10 -mt-4" style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>
                見積もりは無料です。物件の状況やご要望をお知らせいただければ、
                翌営業日中にご連絡いたします。
              </p>
            </Reveal>
            <div className="space-y-6">
              {[
                { icon: '📞', label: 'TEL', value: '048-633-4952', sub: '平日 8:00〜19:00' },
                { icon: '📧', label: 'EMAIL', value: 'oosaki0115@outlook.jp', sub: '24時間受付' },
                { icon: '📍', label: 'ADDRESS', value: '埼玉県春日部市豊町6丁目1-2MOTOパラダイスビル', sub: '東部アーバンパークライン 豊春駅 徒歩15分' },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 80 + 150}>
                  <div className="flex items-start gap-5 p-5"
                    style={{ border: `1px solid ${BORDER}`, background: 'rgba(255,255,255,0.02)' }}>
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-xs tracking-[0.3em] mb-0.5 font-medium" style={{ color: GOLD, fontFamily: 'Shippori Mincho' }}>{item.label}</div>
                      <div className="text-sm font-medium text-white">{item.value}</div>
                      <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>{item.sub}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <Reveal delay={200}>
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-20"
                style={{ border: `1px solid ${BORDER}`, background: 'rgba(255,255,255,0.02)' }}>
                <div className="text-5xl mb-6">✅</div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Shippori Mincho' }}>送信が完了しました</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
                  内容を確認の上、翌営業日中にご連絡いたします。
                </p>
                <button className="mt-8 px-6 py-3 text-xs tracking-widest transition-all duration-300 border"
                  style={{ borderColor: GOLD, color: GOLD }}
                  onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = NAVY }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = GOLD }}
                  onClick={() => setSent(false)}>
                  別のお問い合わせ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {([
                  { id: 'name', label: 'お名前', placeholder: '山田 太郎', type: 'text', required: true },
                  { id: 'company', label: '会社名・屋号', placeholder: '株式会社〇〇（個人の方は不要）', type: 'text', required: false },
                  { id: 'tel', label: '電話番号', placeholder: '03-0000-0000', type: 'tel', required: true },
                  { id: 'email', label: 'メールアドレス', placeholder: 'example@mail.com', type: 'email', required: true },
                ] as const).map(f => (
                  <div key={f.id}>
                    <label className="block text-xs mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {f.label}{f.required && <span style={{ color: GOLD }}> *</span>}
                    </label>
                    <input
                      type={f.type}
                      name={f.id}
                      required={f.required}
                      placeholder={f.placeholder}
                      value={form[f.id]}
                      onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                      className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(201,168,76,0.2)`, color: WHITE }}
                      onFocus={e => (e.currentTarget.style.borderColor = GOLD)}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)')}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    お問い合わせ種別<span style={{ color: GOLD }}> *</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(201,168,76,0.2)`, color: form.service ? WHITE : 'rgba(255,255,255,0.3)' }}
                    onFocus={e => (e.currentTarget.style.borderColor = GOLD)}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)')}>
                    <option value="" disabled style={{ color: '#333' }}>選択してください</option>
                    {['原状回復工事の見積もり', 'リフォーム・内装工事の見積もり', '立ち合い代行の依頼', '清掃・不用品回収', '求人について', 'その他'].map(o => (
                      <option key={o} value={o} style={{ color: '#333' }}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    お問い合わせ内容
                  </label>
                  
                 <textarea
                  rows={4}
                  name="massege"
                  placeholder="物件の場所・広さ・現状など、詳しい情報があるとスムーズです。"
                  value={form.message}
                  onChange={(e) =>　setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm outline-none resize-none transition-all duration-200"
                  />
                </div>
　　　　　　　　　　 <button type="submit"
                  className="w-full py-4 text-sm font-bold tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3"
                  style={{ background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD2} 50%, ${GOLDDIM} 100%)`, color: NAVY }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                  送信する（無料）
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke={NAVY} strokeWidth="1.5"/></svg>
                </button>
                <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.2)', fontWeight: 300 }}>
                  ご記入いただいた情報は、お見積もり・ご連絡以外には使用しません。
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer style={{ background: '#080f1a', borderTop: `1px solid rgba(201,168,76,0.12)` }}>
        {/* Gold divider */}
        <div className="w-full h-px" style={{ background: `linear-gradient(90deg, transparent 0%, ${GOLD} 20%, ${GOLD2} 50%, ${GOLD} 80%, transparent 100%)` }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
      <img
        src="https://res.cloudinary.com/hlmgcqgq/image/upload/f_auto,q_auto/18BDE8B5-89D1-41CC-97FE-29F1D887EFB1_ks6hyl"
        alt="株式会社OSR"
        className="h-16 w-auto object-contain mb-5"
        />
        
              <div>
                <div className="text-xs font-bold tracking-[0.2em] text-white" style={{ fontFamily: 'Shippori Mincho' }}>株式会社OSR</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '9px', fontWeight: 300, letterSpacing: '0.1em' }}>RESTORATION &amp; RENOVATION</div>
              </div>
            </div>
            <p className="text-xs leading-loose" style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 300 }}>
              〒344-0066<br />埼玉県春日部市豊町6丁目1-2MOTOパラダイスビル<br />TEL: 048-633-4952<br />受付時間: 平日 8:00〜19:00
            </p>
          </div>

          <div>
            <div className="text-xs tracking-[0.3em] mb-5 font-medium" style={{ color: GOLD, fontFamily: 'Shippori Mincho' }}>MENU</div>
            <div className="space-y-3">
              {NAV_ITEMS.map(n => (
                <a key={n.label} href={n.href || undefined}
                  className="flex items-center gap-2 text-xs transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}
                  onMouseEnter={e => (e.currentTarget.style.color = GOLD2)}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}>
                  <span style={{ color: GOLD, opacity: 0.5 }}>›</span>{n.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.3em] mb-5 font-medium" style={{ color: GOLD, fontFamily: 'Shippori Mincho' }}>GROUP</div>
            <div className="space-y-3">
              
    {RELATED_DATA.map((r) => (
  <a
    key={r.name}
    href={r.url || '#'}
    target={r.url ? '_blank' : undefined}
    rel={r.url ? 'noopener noreferrer' : undefined}
    className="flex items-center gap-2 text-xs transition-colors duration-200"
    style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = GOLD2
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = 'rgba(255,255,255,0.3)'
    }}
  >
    <span style={{ color: GOLD, opacity: 0.5 }}>›</span>
    {r.name}
  </a>
))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.15)', fontWeight: 300 }}>© 2022 株式会社OSR. All rights reserved.</p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.15)', fontWeight: 300 }}>建設業許可 埼玉県知事許可（般-8）第79625号　</p>
        </div>
      </footer>

    </div>
  )
}
