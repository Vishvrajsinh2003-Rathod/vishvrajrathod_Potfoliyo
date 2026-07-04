import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Vishvraj Rathod`,
    description: project.solution,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

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

      <section className="project-detail-hero">
        <Link href="/#projects" className="project-back-link">← Back to Projects</Link>
        <div className="section-tag">// {project.tagline}</div>
        <h1>{project.title}</h1>
        <div className="tag-row" style={{ marginTop: "16px" }}>
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </section>

    <section className="project-detail-image-wrap">
  <div
    className={
      project.slug === "client-project-tracker"
        ? "project-gallery client-gallery"
        : "project-gallery"
    }
  >
    {project.images.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`${project.title} screenshot ${i + 1}`}
        className="project-detail-image"
      />
    ))}
  </div>
</section>

      <section className="project-detail-body">
        <div className="project-detail-content">
          <div className="project-detail-block">
            <div className="mini-label">Problem</div>
            <p>{project.problem}</p>
          </div>
          <div className="project-detail-block">
            <div className="mini-label">Solution</div>
            <p>{project.solution}</p>
          </div>
          {project.result && (
            <div className="project-detail-block">
              <div className="mini-label">Result</div>
              <p>{project.result}</p>
            </div>
          )}
        </div>

        <aside className="project-detail-sidebar">
          <div className="project-detail-links-card">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-btn">
              ⌥ View on GitHub
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: "block", textAlign: "center" }}>
                Live Demo →
              </a>
            )}
          </div>
        </aside>
      </section>

      <footer>© 2026 Vishvraj Rathod. Built with intent, line by line.</footer>
    </>
  );
}
