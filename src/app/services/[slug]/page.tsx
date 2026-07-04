import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";

// TODO: replace with your real WhatsApp number, country code first, no + or spaces.
// Example: for +91 98765 43210 -> "919876543210"
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Vishvraj Rathod`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const message = `Hi Vishvraj, I'm interested in your "${service.title}" service. Could you share a quote based on my requirements?`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <nav>
        <Link href="/" className="logo">VISHVRAJ<span>RATHOD.</span></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <a href="mailto:rathodvishvrajsinh2003@gmail.com" className="cta-btn">Get In Touch</a>
      </nav>

      <section className="service-detail-hero">
        <Link href="/services" className="service-back-link">← Back to Services</Link>
        <div className="section-tag">// {service.category}</div>
        <h1>{service.title}</h1>
        <p className="service-detail-subtitle">{service.subtitle}</p>
      </section>

      <section className="service-detail-body">
        <div className="service-detail-content">
          <p>{service.longDescription}</p>
        </div>

        <aside className="service-detail-sidebar">
          <div className="service-detail-price-card">
            <span className="label">Pricing</span>
            <span className="price">Get a Custom Quote</span>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              💬 Chat on WhatsApp
            </a>
            <a href="mailto:rathodvishvrajsinh2003@gmail.com" className="btn-outline">
              Email Instead
            </a>
          </div>
        </aside>
      </section>

      <footer>© 2026 Vishvraj Rathod. Built with intent, line by line.</footer>
    </>
  );
}
