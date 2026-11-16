import { ArrowUpRight, FileText, Mail } from "lucide-react";
import Image from "next/image";

import { GithubFeed } from "@/components/github-feed";
import {
  HeroName,
  HeroPhoto,
  Reveal,
  ScrollBand,
  ScrollProgress,
  StorySection,
} from "@/components/scroll-effects";
import { Skills } from "@/components/skills";
import { Timeline } from "@/components/timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { leadership, links, projects } from "@/lib/content";
import kompWordmark from "@/public/logos/komp-wordmark-white.png";
import heroPhoto from "@/public/photos/hero-national-archives.jpg";
import kompChat from "@/public/photos/komp/chat.webp";
import kompMap from "@/public/photos/komp/map.webp";
import kompNewPlan from "@/public/photos/komp/new-plan.webp";
import kompProfile from "@/public/photos/komp/profile.webp";
import kompPulse from "@/public/photos/komp/pulse.webp";
import kompPhoto from "@/public/photos/komp-samir-javi.jpg";

const kompScreens = [
  { src: kompPulse, label: "Pulse", alt: "Komp Pulse screen showing people, communities, and busy courts near you" },
  { src: kompMap, label: "Map", alt: "Komp map of courts around FSU with a live busyness chart" },
  { src: kompNewPlan, label: "New plan", alt: "Komp screen for planning a game by sport, place, and time" },
  { src: kompChat, label: "Group chat", alt: "Komp group chat for a game" },
  { src: kompProfile, label: "Profile", alt: "Komp profile with upcoming and recent games" },
];

const wrap = "mx-auto w-full max-w-6xl px-4 sm:px-6";
const h2 = "font-heading text-4xl font-bold uppercase tracking-wide sm:text-5xl";

function ExternalButton({
  href,
  children,
  variant = "outline",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}) {
  return (
    <Button
      variant={variant}
      size="lg"
      nativeButton={false}
      className={className}
      render={<a href={href} />}
    >
      {children}
    </Button>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <section className="overflow-x-clip">
        <div className={`${wrap} flex min-h-[85svh] flex-col py-6`}>
          <nav className="flex items-center justify-between font-mono text-sm">
            <span>SK</span>
            <div className="flex gap-4 sm:gap-6">
              <a className="hover:underline underline-offset-4" href="#timeline">Timeline</a>
              <a className="hover:underline underline-offset-4" href="#work">Work</a>
              <a className="hover:underline underline-offset-4" href="#contact">Contact</a>
            </div>
          </nav>
          <div className="grid flex-1 items-center gap-10 py-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <HeroName />
              <p className="mt-6 max-w-xl text-lg sm:text-xl">
                Class of 2028. Computer Science and Marketing dual major. Presidential Scholar &amp; Honors at FSU.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <ExternalButton href={links.resume} variant="default">
                  <FileText /> Resume
                </ExternalButton>
                <ExternalButton href={links.github}>
                  GitHub <ArrowUpRight />
                </ExternalButton>
                <ExternalButton href={links.linkedin}>
                  LinkedIn <ArrowUpRight />
                </ExternalButton>
              </div>
            </div>
            <HeroPhoto>
              <Image
                src={heroPhoto}
                alt="Samir walking down the stone steps of the National Archives"
                fill
                preload
                placeholder="blur"
                sizes="(min-width: 768px) 320px, 288px"
                className="object-cover object-[52%_0%]"
              />
            </HeroPhoto>
          </div>
        </div>
      </section>

      <section id="timeline" className={`${wrap} scroll-mt-6 py-16 sm:py-24`}>
        <Reveal>
          <h2 className={h2}>Timeline</h2>
          <p className="mt-3 mb-8 max-w-2xl text-lg text-muted-foreground">
            Everything I&apos;ve worked on since 2023. Click a row for the details.
          </p>
        </Reveal>
        <Timeline />
      </section>

      <StorySection
        id="work"
        paragraphs={[
          "Komp started at a park, where I played soccer with friends every week. I built the first version alone and kept it on my laptop for months, because there was always one more thing to fix.",
          "Then my co-founder Javi rethought how it should work. Instead of a community feed that may or may not be active, a group chat spins up the moment a game is planned.",
          "We tested it by playing basketball every week, which taught us more than the hours I had spent coding alone. Two is a team.",
        ]}
        aside={
          <>
            <p className="mb-3 font-mono text-sm opacity-70">Founder · Aug 2023 – Present</p>
            <h2>
              <Image src={kompWordmark} alt="Komp" className="h-9 w-auto sm:h-11" />
            </h2>
            <p className="mt-3 text-lg">A pickup sports app that helps FSU students find and organize games.</p>
            <ExternalButton href={links.komp} variant="secondary" className="mt-4">
              kompsports.co <ArrowUpRight />
            </ExternalButton>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React Native", "Expo Router", "Python", "AWS Lambda", "RDS"].map((t) => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
            <figure className="mt-6">
                <Image
                  src={kompPhoto}
                  alt="Samir and Javi sitting side by side on chairs on an indoor sports court, smiling"
                  placeholder="blur"
                  sizes="(min-width: 768px) 520px, 100vw"
                  className="w-full rounded-md"
                />
              <figcaption className="mt-2 font-mono text-xs opacity-70">Javi and me</figcaption>
            </figure>
          </>
        }
      >
        <div className={`${wrap} mt-12 sm:mt-16`}>
          <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0">
            {kompScreens.map((screen) => (
              <li key={screen.label} className="w-[62vw] max-w-60 shrink-0 snap-center lg:w-auto lg:max-w-none">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  sizes="(min-width: 1024px) 215px, 240px"
                  className="w-full rounded-2xl"
                />
                <p className="mt-2 font-mono text-xs opacity-70">{screen.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </StorySection>

      <section className={`${wrap} py-16 sm:py-24`}>
        <Reveal>
          <h2 className={h2}>More work</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12} className="flex">
            <Card className="flex w-full flex-col">
              <CardHeader>
                <p className="font-mono text-xs text-muted-foreground">{p.tag}</p>
                <CardTitle className="font-heading text-3xl font-semibold uppercase tracking-wide">
                  {p.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="flex-1 leading-relaxed">{p.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Badge key={s} variant="secondary">{s}</Badge>
                  ))}
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {p.hrefLabel} <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                )}
              </CardContent>
            </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <ScrollBand text="React Native · TypeScript · Python · AWS · SwiftUI ·" />

      <section className={`${wrap} pt-8 pb-16 sm:pb-24`}>
        <Reveal>
          <h2 className={h2}>Stack</h2>
          <p className="mt-3 mb-8 text-lg text-muted-foreground">
            Red ones open to show where I used them.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Skills />
        </Reveal>
      </section>

      <section className="border-y border-border bg-card py-16 sm:py-24">
        <div className={wrap}>
          <Reveal>
            <h2 className={h2}>Campus involvement</h2>
          </Reveal>
          <ul className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((l, i) => (
              <li key={l.title}>
                <Reveal delay={(i % 3) * 0.1}>
                  <p className="font-heading text-2xl font-semibold uppercase tracking-wide">{l.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {l.org}
                    {l.dates && ` · ${l.dates}`}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${wrap} py-16 sm:py-24`}>
        <Reveal>
          <h2 className={`${h2} mb-8`}>Latest on GitHub</h2>
          <GithubFeed />
        </Reveal>
      </section>

      <footer id="contact" className="scroll-mt-6 bg-primary py-16 text-primary-foreground">
        <Reveal className={wrap}>
          <h2 className={h2}>Let&apos;s talk</h2>
          <p className="mt-3 max-w-xl text-lg">
            Florida State, Presidential Scholars, class of 2028. Based in Miami and Tallahassee.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <ExternalButton href={`mailto:${links.email}`} variant="secondary">
              <Mail /> {links.email}
            </ExternalButton>
            <ExternalButton href={links.linkedin} variant="secondary">
              LinkedIn <ArrowUpRight />
            </ExternalButton>
            <ExternalButton href={links.github} variant="secondary">
              GitHub <ArrowUpRight />
            </ExternalButton>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}
