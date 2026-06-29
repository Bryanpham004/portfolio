import Link from "next/link";
import { HeroSection } from "@/components/ui/hero-section-2";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";

const skills = [
  { title: "Languages", items: ["Python", "SQL", "JavaScript", "C++", "C#", "R"] },
  { title: "Machine Learning & Data", items: ["ML Modeling", "Image Classification", "Statistics", "Data Analysis"] },
  { title: "Pipelines & Reporting", items: ["Data Pipelines", "Dashboards", "Excel", "Data Cleaning"] },
  { title: "Tools", items: ["Git", "GitHub", "Unity", "Visual Studio"] },
];

const projects = [
  {
    tech: "PYTHON · MACHINE LEARNING",
    title: "Vehicle Detection & Image Classification",
    desc: "HOG + Linear SVM pipeline that detects vehicles vs. non-vehicles on the full CIFAR-10 set — 85.7% accuracy and 0.925 ROC AUC, with a per-class error analysis (ships easiest, airplanes hardest).",
    link: "https://github.com/Bryanpham004/vehicle-detection",
  },
  {
    tech: "PYTHON · SQL",
    title: "Automated Data Pipeline & Dashboard",
    desc: "End-to-end ETL that validates and cleans a messy 20K-row order feed (quarantining 12% of bad rows with reasons), loads it into a SQLite warehouse, and renders a SQL-driven dashboard — surfacing $7.5M revenue and a top-20%-of-customers = 59% Pareto.",
    link: "https://github.com/Bryanpham004/data-pipeline",
  },
  {
    tech: "UNITY · C#",
    title: "Physics-Based Fighting Game",
    desc: "Shipped an interactive game with real-time UI, physics-based movement, and game logic. Built error handling to keep it stable and iterated with a small team on how it felt to play.",
    link: "https://github.com/Bryanpham004",
  },
];

const experience = [
  {
    date: "Oct 2023 — Sep 2025",
    role: "Course Director",
    org: "AI at UCR (AIR)",
    points: [
      "Designed presentations and course curriculum on AI/ML implementation and emerging tech for club members.",
      "Built reusable learning materials and onboarding content that helped technical and non-technical students contribute to applied AI projects.",
    ],
  },
  {
    date: "Jun 2023 — Sep 2023",
    role: "Data Analytics Intern",
    org: "Bright Analytics",
    points: [
      "Built pipelines and dashboards in Python and SQL so the team could self-serve metrics.",
      "Analyzed datasets to surface trends and support data-driven decisions.",
      "Cleaned and validated raw data to keep reporting accurate and trustworthy.",
    ],
  },
  {
    date: "High School",
    role: "Instructor & Program Lead",
    org: "Computer Engineers of the Next Generation",
    points: [
      "Taught Python, Java, and programming fundamentals to students each week.",
      "Led staff planning and adapted curriculum based on measured progress.",
    ],
  },
  {
    date: "High School",
    role: "Volunteer Technician",
    org: "EqOpTech",
    points: [
      "Refurbished and configured Chromebooks for students who couldn't afford them.",
      "Diagnosed hardware issues with strong attention to detail and quality.",
    ],
  },
  {
    date: "2022 — Jun 2026",
    role: "B.S. Data Science",
    org: "University of California, Riverside",
    points: [
      "GPA 3.51 · Dean's List.",
      "Coursework: Computer Science I & II, Data Structures & Algorithms, AI Programming, Statistics, Linear Algebra.",
    ],
  },
];

function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-12 flex items-baseline gap-4">
      <span className="text-primary font-mono text-sm">{num}</span>
      <h2 className="text-3xl font-bold uppercase tracking-tight md:text-5xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <DottedSurface className="overflow-hidden" />
      <HeroSection />

      {/* STORY */}
      <section id="story" className="bg-background relative border-t py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-primary mb-7 font-mono text-sm uppercase tracking-[0.18em]">
            01 — The person behind the data
          </p>
          <h2 className="mb-12 text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl md:text-6xl">
            Hey, I&apos;m <span className="text-primary">Bryan</span>.
            <br />
            <span className="text-muted-foreground">Nice to meet you.</span>
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <p className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
              I didn&apos;t fall in love with data because of the math. I fell for the moment a messy spreadsheet finally tells you something true.
            </p>
            <div className="space-y-5 text-lg text-muted-foreground">
              <p>
                I&apos;m a Data Science student at <strong className="text-foreground">UC Riverside</strong> (Class of 2026), based in San Jose. My path started with curiosity — taking apart problems, writing small programs, and asking &quot;what is this data actually saying?&quot;
              </p>
              <p>
                That curiosity turned into real work: a <strong className="text-foreground">machine-learning model</strong> that recognizes vehicles, <strong className="text-foreground">data pipelines</strong> that replaced hours of manual reporting, and an interactive game built from scratch with a team.
              </p>
              <p>
                In my free time, I&apos;m into <strong className="text-foreground">investing</strong>. My hands-on start came earlier though — back in high school I taught kids to code and refurbished old computers to bring them back to life. That chapter&apos;s behind me now, but it&apos;s where my build-and-fix instinct first took root.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-background relative border-t py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading num="02" title="Skills" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {skills.map((s) => (
              <div
                key={s.title}
                className="hover:border-primary min-w-0 overflow-hidden rounded-2xl border bg-card p-7 transition-colors"
              >
                <h3 className="mb-4 text-lg font-semibold">{s.title}</h3>
                <Marquee duration={18} pauseOnHover fadeAmount={6}>
                  {s.items.map((i) => (
                    <span
                      key={i}
                      className="mx-1.5 whitespace-nowrap rounded-full border px-3 py-1 font-mono text-xs text-foreground"
                    >
                      {i}
                    </span>
                  ))}
                </Marquee>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-background relative border-t py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading num="03" title="Projects" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="hover:border-primary group flex min-w-0 flex-col rounded-2xl border bg-card p-7 transition-colors"
              >
                <span className="text-primary font-mono text-xs tracking-wide">{p.tech}</span>
                <h3 className="mb-3 mt-3 text-xl font-bold tracking-tight">{p.title}</h3>
                <p className="flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <Link
                  href={p.link}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-xs"
                >
                  View on GitHub →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-background relative border-t py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading num="04" title="Experience" />
          <div className="flex flex-col">
            {experience.map((e) => (
              <div
                key={e.role}
                className="grid gap-4 border-t py-7 first:border-t-0 md:grid-cols-[180px_1fr] md:gap-8"
              >
                <div className="pt-1 font-mono text-sm text-muted-foreground">{e.date}</div>
                <div>
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <div className="text-primary mb-3 mt-1 font-mono text-sm">{e.org}</div>
                  <ul className="space-y-2">
                    {e.points.map((pt) => (
                      <li key={pt} className="relative pl-5 text-muted-foreground">
                        <span className="bg-primary absolute left-0 top-[0.6rem] size-1.5 rounded-sm" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-background relative border-t py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl md:text-6xl">
            Let&apos;s
            <br />
            Work Together
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Open to data science, analytics, and software roles. The fastest way to reach me is email.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-xl text-base">
              <a href="mailto:bryanpham004@gmail.com">Email</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl text-base">
              <a href="tel:+16509188151">Phone</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background relative border-t py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 font-mono text-xs text-muted-foreground">
          <span>© 2026 Bryan Pham — Built with Next.js.</span>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/bryan-pham-5775671a3/" target="_blank" rel="noopener" className="hover:text-primary">LinkedIn</Link>
            <Link href="https://github.com/Bryanpham004" target="_blank" rel="noopener" className="hover:text-primary">GitHub</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
