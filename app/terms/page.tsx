import Link from "next/link";

const sections = [
  ["01", "Orders and payment", "Orders are prepared after payment is received and verified. Please submit accurate contact and room details so our team can reach you without delay."],
  ["02", "Menu and availability", "Menu items, prices, and delivery availability may change based on the day's stock and kitchen capacity. We will let you know about any changes to your order."],
  ["03", "Cancellations", "Please contact Hotel Krishna as soon as possible if you need to change or cancel an order. Once preparation has started, cancellation may not be possible."],
  ["04", "Questions", "For help with an order or any question about these terms, contact the Hotel Krishna team at +91 98765 43210."],
];

export default function TermsPage() {
  return <div className="legal-page"><header className="site-header page-header"><Link href="/" className="brand-mark"><span className="brand-icon">HK</span><span><strong>HOTEL KRISHNA IN</strong><small>Family Restaurant &amp; Banquet</small></span></Link><nav className="desktop-nav"><Link href="/menu">Menu</Link><Link href="/about">Our story</Link><Link href="/contact">Contact</Link></nav><Link href="/menu" className="header-order">Order online <span>→</span></Link></header><main><section className="legal-hero"><div><p className="eyebrow">The fine print</p><h1>Terms of<br /><em>use.</em></h1><p>Simple, clear guidelines for ordering from Hotel Krishna IN.</p></div><div className="legal-stamp">HK<br /><small>Est. 2011</small></div></section><section className="legal-content"><aside><span className="legal-label">Hotel Krishna IN</span><p>Last updated<br /><strong>September 2026</strong></p><Link href="/privacy">Read privacy policy →</Link></aside><article>{sections.map(([number, title, text]) => <section className="legal-section" key={number}><span>{number}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}</article></section></main><footer className="legal-footer">© 2026 Hotel Krishna IN <span>Designed and developed by Aditya</span></footer></div>;
}
