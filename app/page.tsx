import { ArrowUpRight, ArrowRight, Plus, Sparkle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="announcement">SMALL RITUAL. EVERYDAY POSSIBILITY. <Sparkle size={13} aria-hidden="true" /></div>
      <header className="header">
        <a className="wordmark" href="#" aria-label="Mellowdrop home">mellowdrop<span>™</span></a>
        <nav aria-label="Main navigation"><a href="#range">Our range</a><a href="#approach">Our approach</a></nav>
        <a className="nav-cta" href="#range">Find your daily <ArrowUpRight size={18} aria-hidden="true" /></a>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="little-dot" /> MEET YOUR NEW DAILY RITUAL</div>
            <h1 id="hero-title">Good things.<br />Small <span className="serif">scoops.</span></h1>
            <p>A fresh take on everyday creatine. Thoughtfully simple powders, made to fit the way you move through life.</p>
            <a className="button lime" href="#range">Explore the collection <ArrowUpRight size={21} aria-hidden="true" /></a>
            <div className="hero-note"><span>01 / DAILY CREATINE</span><span>MAKE A LITTLE ROOM FOR YOU.</span></div>
          </div>
          <div className="hero-visual">
            <img src="/images/hero.jpg" alt="Mellowdrop daily creatine collection: a lime green pouch, individual stick pack, and carton on a blue studio background" width="1536" height="1024" fetchPriority="high" />
            <div className="image-caption"><span>ONE DAILY RITUAL.<br />THREE WAYS TO MAKE IT YOURS.</span><ArrowUpRight size={28} aria-hidden="true" /></div>
          </div>
        </section>
        <div className="ribbon" aria-label="Collection formats"><span>AT HOME</span><Plus aria-hidden="true" /><span>ON THE GO</span><Plus aria-hidden="true" /><span>EVERY DAY</span><Plus aria-hidden="true" /><span>YOUR KIND OF ROUTINE</span><Plus className="last-plus" aria-hidden="true" /></div>
        <section className="collection section" id="range" aria-labelledby="collection-title">
          <div className="section-heading"><div><p className="eyebrow">THE MELLOWDROP COLLECTION</p><h2 id="collection-title">Your daily. <span className="serif">Your way.</span></h2></div><p>Countertop staple or bag essential.<br />Find a format that feels like you.</p></div>
          <div className="products">
            <article className="product" id="pouch">
              <div className="product-photo photo-blue"><span className="product-tag">THE AT-HOME ESSENTIAL</span><img src="/images/hero.jpg" alt="Lime Mellowdrop resealable creatine pouch with its matching collection" width="1536" height="1024" loading="lazy" /></div>
              <div className="product-heading"><h3>The Daily Pouch</h3><span className="format">01 / POUCH</span></div>
              <p>Your countertop companion. A resealable pouch for the daily ritual you make your own.</p><div className="product-bottom"><span>Unflavored</span><span>Resealable pouch</span></div>
            </article>
            <article className="product" id="sticks">
              <div className="product-photo photo-pink"><span className="product-tag">A LITTLE TAKE-ANYWHERE</span><img src="/images/sticks.jpg" alt="Three coral pink Mellowdrop berry creatine stick packs" width="1024" height="1024" loading="lazy" /></div>
              <div className="product-heading"><h3>The Daily Sticks</h3><span className="format">02 / STICK PACK</span></div>
              <p>Big plans, small packets. Individually packed creatine for your desk, gym bag, or next getaway.</p><div className="product-bottom"><span>Berry</span><span>Individual stick packs</span></div>
            </article>
            <article className="product" id="box">
              <div className="product-photo photo-lime"><span className="product-tag">YOUR ROUTINE, ALL TOGETHER</span><img src="/images/box.jpg" alt="Mellowdrop Daily Set carton with colorful creatine stick packs" width="1024" height="1024" loading="lazy" /></div>
              <div className="product-heading"><h3>The Daily Set</h3><span className="format">03 / BOX</span></div>
              <p>A box of little possibilities. An organized set of daily sticks, ready for wherever the week goes.</p><div className="product-bottom"><span>Mixed selection</span><span>Boxed stick packs</span></div>
            </article>
          </div>
        </section>
        <section className="approach section" id="approach" aria-labelledby="approach-title">
          <div className="approach-intro"><p className="eyebrow">A LITTLE LESS COMPLICATED</p><h2 id="approach-title">Life is a lot.<br />Your routine<br /><span className="serif">doesn’t have to be.</span></h2><p>We like small rituals that leave room for real life. Mellowdrop brings a lighter attitude to the everyday supplement shelf, with familiar ingredients and formats that fit right in.</p><a className="text-link" href="#range">Meet your daily essentials <ArrowRight size={19} aria-hidden="true" /></a></div>
          <div className="principles"><div><span className="principle-number">01</span><h3>Keep it simple.</h3><p>Creatine at the center. A considered collection without an overwhelming lineup.</p></div><div><span className="principle-number">02</span><h3>Make it fit.</h3><p>A pouch for home. Sticks for your bag. A box to bring your routine together.</p></div><div><span className="principle-number">03</span><h3>Enjoy the everyday.</h3><p>A bright spot on your counter. A little moment that belongs to you.</p></div></div>
        </section>
        <section className="closing"><p className="eyebrow">HERE’S TO THE LITTLE THINGS.</p><h2>A little daily.<br /><span className="serif">A lot of possibility.</span></h2><a className="button dark" href="#range">Find your format <ArrowUpRight size={22} aria-hidden="true" /></a></section>
      </main>
      <footer className="footer"><div className="footer-top"><a className="wordmark" href="#">mellowdrop<span>™</span></a><span>YOUR EVERYDAY, A LITTLE BRIGHTER.</span><a href="#main">Back to top ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Mellowdrop</span><p>Brand concept. Product imagery and formats are illustrative; products are not available for purchase.</p></div></footer>
    </>
  );
}
