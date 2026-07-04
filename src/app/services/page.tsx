import Link from "next/link";
import { services, categories, Service } from "@/data/services";

export const metadata = {
  title: "Services & Pricing | Vishvraj Rathod",
  description: "Web, mobile, and AI-readiness services offered by Vishvraj Rathod, with transparent starting prices.",
};

const categoryIcons: Record<string, string> = {
  "Websites & Platforms": "🖥",
  "Mobile Applications": "📱",
  "Design Services": "🎨",
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="service-card service-card-link">
      <h3>{service.title}</h3>
      <div className="service-subtitle">{service.subtitle}</div>
      <p>{service.description}</p>
      <div className="service-price-row">
        <span className="label">Starting from</span>
        <span className="price">{service.price}</span>
      </div>
      <div className="service-card-arrow">View details →</div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <>
      <nav>
        <Link href="/" className="logo">VISHVRAJ<span>RATHOD.</span></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <a href="mailto:rathodvishvrajsinh2003@gmail.com" className="cta-btn">Get In Touch</a>
      </nav>

      {/* HERO */}
      <section className="services-hero">
        <div className="section-tag">// Services & Pricing</div>
        <h1>Tailored Development <span>Services</span></h1>
        <p>
          From premium corporate websites to cross-platform mobile apps and AI-readiness
          consulting — here&apos;s what I build, and what it starts at. Click any service to see
          full details and get in touch directly on WhatsApp.
        </p>
      </section>

      {/* SERVICE CATEGORIES */}
      <div className="services-categories">
        {categories.map((category) => (
          <div key={category}>
            <div className="service-category-head">
              <div className="service-category-icon">{categoryIcons[category]}</div>
              <h2>{category}</h2>
            </div>
            {services
              .filter((s) => s.category === category)
              .map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="services-cta">
        <h2>Have a project in mind?</h2>
        <a href="mailto:rathodvishvrajsinh2003@gmail.com" className="btn-solid">Let&apos;s Talk →</a>
      </section>

      <footer>© 2026 Vishvraj Rathod. Built with intent, line by line.</footer>
    </>
  );
}
