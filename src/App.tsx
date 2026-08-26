import type { ReactNode } from 'react'
import { GrainGradient } from '@paper-design/shaders-react'
import avatarAya from './assets/avatar-aya.jpg'
import avatarJin from './assets/avatar-jin.jpg'
import avatarMara from './assets/avatar-mara.jpg'
import './App.css'

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="arrow-icon">
    {diagonal ? <path d="M4 12 12 4M6 4h6v6" /> : <path d="M3 8h10M9 4l4 4-4 4" />}
  </svg>
)

function MunaMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
}

function PhoneDemo() {
  return (
    <div className="phone-wrap" aria-label="An example conversation with Muna">
      <div className="phone-glow" />
      <div className="phone">
        <div className="phone-screen">
          <div className="phone-status"><span>9:41</span><div className="dynamic-island" /><span>⌁ ▰</span></div>
          <div className="contact">
            <div className="contact-avatar"><MunaMark /></div>
            <div><strong>Muna</strong><span>Always here</span></div>
          </div>
          <div className="conversation">
            <p className="message outgoing">I have a packed Friday. Can you make it feel less chaotic?</p>
            <div className="typing"><span /><span /><span /></div>
            <div className="message incoming">
              <p>On it. I moved your focus block, found the dinner thread, and kept 6–7pm clear.</p>
              <div className="mini-plan"><span>FRI · 6:00 PM</span><strong>A little room to breathe</strong><small>Calendar updated</small></div>
            </div>
            <p className="message outgoing short">You get me.</p>
          </div>
          <div className="composer"><span>Message Muna</span><button aria-label="Send message"><Arrow /></button></div>
        </div>
      </div>
      <div className="floating-note note-one"><span className="note-icon">✓</span><span><strong>Friday, sorted.</strong><small>3 things handled</small></span></div>
      <div className="floating-note note-two"><span className="pulse" /><span><strong>Muna remembered</strong><small>You prefer quiet tables</small></span></div>
    </div>
  )
}

function PrincipleVisual({ kind }: { kind: 'memory' | 'action' | 'presence' }) {
  if (kind === 'memory') return (
    <svg className="principle-visual" viewBox="0 0 220 150" role="img" aria-label="Useful memories gathering into context">
      <defs><linearGradient id="memoryGlow" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#D8CAFF"/><stop offset="1" stopColor="#7757E9"/></linearGradient></defs>
      <circle className="visual-orbit dashed" cx="110" cy="75" r="58" />
      <circle className="visual-orbit" cx="110" cy="75" r="39" />
      <path className="visual-thread" d="M59 52C78 43 82 29 94 19M148 49c16-8 22-3 32-15M81 104c-12 5-18 14-20 26" />
      <g className="memory-node node-one"><circle cx="55" cy="53" r="9"/><circle cx="55" cy="50" r="2.5"/><path d="M50 58c1.8-4 8.2-4 10 0"/></g>
      <g className="memory-node node-two"><circle cx="181" cy="34" r="8"/><path d="m177 34 2.5 2.5 5-5"/></g>
      <g className="memory-node node-three"><circle cx="60" cy="131" r="8"/><path d="M56 131h8M60 127v8"/></g>
      <circle className="core-ring" cx="110" cy="75" r="24" />
      <circle cx="110" cy="75" r="17" fill="url(#memoryGlow)" />
      <g className="core-muna-mark"><path d="M110 64v22M100.5 69.5l19 11M119.5 69.5l-19 11"/></g>
      <rect className="visual-chip" x="137" y="106" width="55" height="20" rx="10"/><circle className="chip-dot" cx="149" cy="116" r="3"/><path className="chip-line" d="M157 113h22M157 119h15"/>
    </svg>
  )

  if (kind === 'action') return (
    <svg className="principle-visual" viewBox="0 0 220 150" role="img" aria-label="A thought becoming a completed action">
      <defs><linearGradient id="actionGlow" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#E4D9FF"/><stop offset="1" stopColor="#7657E9"/></linearGradient></defs>
      <rect className="action-card back" x="31" y="38" width="74" height="61" rx="14" transform="rotate(-7 31 38)"/>
      <rect className="action-card" x="35" y="31" width="78" height="64" rx="14"/>
      <circle className="thought-dot" cx="55" cy="53" r="4"/><path className="thought-line" d="M67 49h27M67 57h19M51 74h43"/>
      <path className="action-route" d="M112 67c19 0 18 27 35 27h14"/>
      <circle className="route-dot" cx="128" cy="76" r="3"/><circle className="route-dot second" cx="143" cy="91" r="3"/>
      <rect className="done-card" x="158" y="72" width="43" height="43" rx="13" fill="url(#actionGlow)"/>
      <path className="done-check" d="m171 93 7 7 12-15"/>
      <path className="motion-line" d="M147 51h39M154 43h21M151 59h29"/>
      <rect className="visual-chip action-chip" x="64" y="111" width="92" height="21" rx="10.5"/><circle className="chip-dot" cx="78" cy="121.5" r="3"/><path className="chip-line" d="M87 118.5h51M87 124.5h33"/>
    </svg>
  )

  return (
    <svg className="principle-visual" viewBox="0 0 220 150" role="img" aria-label="A natural conversation across familiar messages">
      <defs><linearGradient id="presenceGlow" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#DCCFFF"/><stop offset="1" stopColor="#7454E5"/></linearGradient></defs>
      <path className="signal-ring ring-one" d="M49 92c0-34 27-61 61-61s61 27 61 61"/>
      <path className="signal-ring ring-two" d="M66 92c0-24 20-44 44-44s44 20 44 44"/>
      <rect className="message-bubble left" x="25" y="46" width="58" height="34" rx="12"/>
      <path className="bubble-tail" d="M35 78 31 88l14-9"/><path className="bubble-line" d="M39 57h29M39 65h20"/>
      <rect className="message-bubble right" x="145" y="26" width="50" height="31" rx="11"/>
      <path className="bubble-tail" d="m185 55 5 8-13-7"/><circle className="bubble-dot" cx="159" cy="41.5" r="2.5"/><circle className="bubble-dot" cx="170" cy="41.5" r="2.5"/><circle className="bubble-dot" cx="181" cy="41.5" r="2.5"/>
      <circle className="presence-core" cx="110" cy="98" r="27" fill="url(#presenceGlow)"/>
      <g className="presence-mark"><path d="M110 84v28M98 91l24 14M122 91l-24 14"/></g>
      <circle className="online-dot" cx="129" cy="80" r="5"/><circle className="online-pulse" cx="129" cy="80" r="9"/>
      <path className="base-line" d="M76 132h68"/>
    </svg>
  )
}

const examples = [
  { time: '08:12', from: 'You', text: 'What does my day look like?', response: 'Two meetings, one deadline, and a gap at 4. Want me to protect it?', meta: 'CALENDAR · CHECKED' },
  { time: '13:46', from: 'You', text: 'Find that thing Priya sent me.', response: 'The Lisbon list from March? Found it — I saved the four places she starred.', meta: 'MEMORY · FOUND' },
  { time: '18:03', from: 'You', text: 'Dinner somewhere calm, not fussy.', response: 'I found three nearby. Luma has the quietest room and a table at 8:15.', meta: 'SEARCH · SHORTLISTED' },
]

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="legal-section"><h2>{title}</h2><div>{children}</div></section>
}

function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const privacy = kind === 'privacy'
  return <main className="legal-page"><nav className="legal-nav"><a href="/" className="wordmark"><MunaMark />muna</a><a href="/">Back home</a></nav><article className="legal-article"><p className="eyebrow">Runic Lab · Muna</p><h1>{privacy ? 'Privacy, in plain language.' : 'The ground rules for using Muna.'}</h1><p className="legal-intro">{privacy ? 'How Runic Lab collects, uses, and protects information when you use Muna.' : 'These terms explain the agreement between you and Runic Lab when you use Muna.'}</p><p className="legal-date">Effective date: August 20, 2026</p><div className="legal-content">{privacy ? <PrivacyContent /> : <TermsContent />}</div></article><footer className="legal-footer"><a href="/privacy">Privacy</a><span>·</span><a href="/terms">Terms</a></footer></main>
}

function PrivacyContent() {
  return <><LegalSection title="What Muna is"><p>Muna is an AI assistant from Runic Lab. You can talk to Muna through connected messaging channels and connect services so Muna can help you with tasks.</p></LegalSection><LegalSection title="Information we collect"><p>We collect the information needed to operate Muna, including your account details, display name, email address, connected channel identities, messages sent to or from Muna, saved memories, and connected integration details.</p><p>When you connect Google services, we receive the permissions and account information you approve through Google OAuth. We store the credentials needed to keep the connection working, encrypted at rest.</p></LegalSection><LegalSection title="How we use information"><p>We use information to authenticate you, keep your channels connected, respond to your messages, run requested integrations, personalize responses, maintain memories you ask Muna to keep, prevent abuse, and improve reliability.</p><p>We do not sell your personal information. We do not use your Gmail or Calendar data for advertising.</p></LegalSection><LegalSection title="Google data"><p>Muna only accesses Google data after you explicitly connect a Google service and approve the requested permissions. Gmail and Calendar access is used to provide the features you request. You can disconnect either service from your Muna dashboard at any time.</p></LegalSection><LegalSection title="Sharing and service providers"><p>We share information with service providers only when needed to operate Muna, such as infrastructure, database, messaging, authentication, AI model, and connected integration providers.</p></LegalSection><LegalSection title="Retention and control"><p>We retain account and message information while your account is active or as needed to provide Muna. You can disconnect integrations, delete saved memories, or ask us to delete your account and associated data.</p></LegalSection><LegalSection title="Security"><p>We use reasonable safeguards, including encrypted storage for integration credentials. No online service can promise absolute security, so please do not send passwords, private keys, or other secrets to Muna.</p></LegalSection><LegalSection title="Contact"><p>Questions or deletion requests can be sent to <a href="mailto:privacy@muna.so">privacy@muna.so</a>.</p></LegalSection></>
}

function TermsContent() {
  return <><LegalSection title="Using Muna"><p>You may use Muna if you can legally enter into this agreement. You are responsible for the messages, instructions, and connected accounts you use with Muna.</p></LegalSection><LegalSection title="AI-generated responses"><p>Muna uses AI models and connected services to respond to you. Responses can be incomplete or incorrect, so review important information before relying on it. Muna is not a substitute for professional legal, medical, financial, or other expert advice.</p></LegalSection><LegalSection title="Connected services"><p>When you connect a service, you authorize Muna to use the permissions you approve. You are responsible for reviewing actions before they are taken, especially actions that send messages, create events, change records, or place orders.</p></LegalSection><LegalSection title="Acceptable use"><p>Do not use Muna to break the law, impersonate another person, abuse connected services, access accounts without permission, transmit malicious code, or interfere with Muna or its providers.</p></LegalSection><LegalSection title="Your content"><p>You keep ownership of the content you send to Muna. You give Runic Lab the limited permission needed to process that content, operate the service, provide requested features, and maintain the security and reliability of Muna.</p></LegalSection><LegalSection title="Availability and changes"><p>Muna is provided while we continue developing the service. Features, integrations, and availability may change. We may update these terms when the service changes.</p></LegalSection><LegalSection title="Contact"><p>Questions about these terms can be sent to <a href="mailto:hello@muna.so">hello@muna.so</a>.</p></LegalSection></>
}

function App() {
  const path = window.location.pathname
  if (path === '/privacy') return <LegalPage kind="privacy" />
  if (path === '/terms') return <LegalPage kind="terms" />

  return (
    <main className="site-shell">
      <section className="hero" id="top">
        <div className="grain" aria-hidden="true">
          <GrainGradient width="100%" height="100%" colors={['#7c3cff', '#c066ff', '#ee8dcf', '#455cff']} colorBack="#090714" softness={0.58} intensity={0.72} noise={0.17} shape="corners" speed={0.18} scale={1.05} />
        </div>
        <div className="hero-vignette" />
        <nav className="main-nav">
          <a href="#top" className="wordmark light"><MunaMark />muna</a>
          <div className="nav-links"><a href="#why">Why Muna</a><a href="#possibilities">Possibilities</a><a href="#privacy">Privacy</a></div>
          <a href="mailto:hello@muna.so?subject=Early access to Muna" className="nav-cta">Get early access <Arrow diagonal /></a>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="availability"><span /> Private beta · iMessage first</p>
            <h1>Life moves fast.<br /><em>Muna keeps up.</em></h1>
            <p className="hero-sub">A personal assistant that remembers what matters, handles the follow-through, and is always one message away.</p>
            <div className="hero-actions"><a href="mailto:hello@muna.so?subject=Early access to Muna" className="button primary">Meet Muna <Arrow /></a><a href="#why" className="text-link">See what Muna can do <Arrow /></a></div>
            <div className="hero-trust"><div className="avatar-stack" aria-hidden="true"><img src={avatarAya} alt="" /><img src={avatarJin} alt="" /><img src={avatarMara} alt="" /></div><p><strong>Built for real life</strong><br />Not another app to manage.</p></div>
          </div>
          <PhoneDemo />
        </div>
        <div className="hero-foot"><span>Thoughtful by design</span><span>Scroll to meet Muna ↓</span></div>
      </section>

      <section className="intro" id="why">
        <div className="section-label"><span>01</span><p>Why Muna</p></div>
        <div className="intro-copy"><p className="kicker">Your life is not a dashboard.</p><h2>Less managing.<br /><em>More living.</em></h2><p>Muna turns the loose ends of everyday life into finished business — quietly, thoughtfully, and in the background.</p></div>
      </section>

      <section className="principles">
        <article><span className="principle-number">01</span><PrincipleVisual kind="memory" /><h3>It remembers<br />the right things.</h3><p>Your preferences, your people, your pace. Muna builds useful context over time, so every conversation starts a little further ahead.</p><span className="tiny-label">CONTEXT, NOT CLUTTER</span></article>
        <article><span className="principle-number">02</span><PrincipleVisual kind="action" /><h3>It moves things<br />forward.</h3><p>From finding the detail to making the plan, Muna helps with the part after “I should probably…” — and keeps you in control.</p><span className="tiny-label">THOUGHT INTO ACTION</span></article>
        <article><span className="principle-number">03</span><PrincipleVisual kind="presence" /><h3>It meets you<br />where you are.</h3><p>No new habits. No complicated setup. Talk to Muna where you already talk, in words that feel completely natural.</p><span className="tiny-label">ONE MESSAGE AWAY</span></article>
      </section>

      <section className="possibilities" id="possibilities">
        <div className="possibilities-head"><div className="section-label light-label"><span>02</span><p>In the everyday</p></div><h2>Small asks.<br /><em>Real relief.</em></h2><p>The best help does not make a show of itself. It just makes the day feel lighter.</p></div>
        <div className="chat-list">
          {examples.map((item, index) => <article className="chat-row" key={item.time}><div className="chat-index">0{index + 1}</div><div className="chat-time">{item.time}</div><div className="chat-exchange"><p className="ask"><span>{item.from}</span>{item.text}</p><p className="reply"><span className="reply-mark"><MunaMark /></span>{item.response}</p></div><div className="chat-meta">{item.meta}<span>DONE</span></div></article>)}
        </div>
      </section>

      <section className="privacy-section" id="privacy">
        <div className="privacy-visual"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="privacy-core"><MunaMark /><span>Yours stays yours.</span></div></div>
        <div className="privacy-copy"><p className="eyebrow">Private by default</p><h2>Helpful should never feel intrusive.</h2><p>Muna is designed around trust. Your information is used to help you — never sold, never turned into ads, and always under your control.</p><div className="privacy-points"><span><i>✓</i> You choose what Muna remembers</span><span><i>✓</i> Connected accounts stay in your control</span><span><i>✓</i> Your data is encrypted</span></div><a href="/privacy" className="text-link dark-link">Read our privacy promise <Arrow /></a></div>
      </section>

      <section className="final-cta">
        <div className="cta-grain" aria-hidden="true"><GrainGradient width="100%" height="100%" colors={['#8b45ff', '#d66ee8', '#545dff']} colorBack="#0b0815" softness={0.55} intensity={0.7} noise={0.2} shape="corners" speed={0.15} scale={1.15} /></div>
        <div className="cta-content"><p className="eyebrow">A little more room</p><h2>Let Muna take it<br /><em>from here.</em></h2><p>Join the private beta and bring a little more ease to every day.</p><a href="mailto:hello@muna.so?subject=Early access to Muna" className="button light-button">Get early access <Arrow diagonal /></a></div>
      </section>

      <footer><div className="footer-top"><a href="#top" className="wordmark"><MunaMark />muna</a><p>Your personal assistant,<br />one message away.</p><div className="footer-links"><a href="#why">Why Muna</a><a href="#possibilities">Possibilities</a><a href="mailto:hello@muna.so">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Runic Lab</span><span>Made thoughtfully, for real life.</span><span>Lagos · Everywhere</span></div></footer>
    </main>
  )
}

export default App
