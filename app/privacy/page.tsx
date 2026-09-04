import Link from "next/link";

const sections = [
  ["01", "Information we receive", "When you place an order, we receive the name, hostel or room number, phone details, and payment screenshot that you choose to submit."],
  ["02", "How we use it", "We use these details only to verify payment, prepare your order, and contact you about delivery or collection."],
  ["03", "Keeping information safe", "Order details are used by the Hotel Krishna team for service purposes. We do not ask for passwords, card PINs, or other information that is not needed to fulfil your order."],
  ["04", "Your choices", "Do not submit information that is not needed for your order. Contact us if you have questions about your submitted details or want to discuss an order record."],
];

export default function PrivacyPage() {
  return <div className="legal-page"><header className="site-header page-header"><Link href="/" className="brand-mark"><span className="brand-icon">HK</span><span><strong>HOTEL KRISHNA IN</strong><small>Family Restaurant &amp; Banquet</small></span></Link><nav className="desktop-nav"><Link href="/menu">Menu</Link><Link href="/about">Our story</Link><Link href="/contact">Contact</Link></nav><Link href="/menu" className="header-order">Order online <span>→</span></Link></header><main><section className="legal-hero"><div><p className="eyebrow">Your information</p><h1>Privacy<br /><em>policy.</em></h1><p>How Hotel Krishna IN handles the information shared through your order.</p></div><div className="legal-stamp">HK<br /><small>Est. 2011</small></div></section><section className="legal-content"><aside><span className="legal-label">Hotel Krishna IN</span><p>Last updated<br /><strong>September 2026</strong></p><Link href="/terms">Read terms of use →</Link></aside><article>{sections.map(([number, title, text]) => <section className="legal-section" key={number}><span>{number}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}</article></section></main><footer className="legal-footer">© 2026 Hotel Krishna IN <span>Designed and developed by Aditya</span></footer></div>;
}
