import { ArrowUpRight } from "lucide-react";

import { links } from "@/lib/content";

type Repo = {
  name: string;
  html_url: string;
  language: string | null;
  pushed_at: string;
  fork: boolean;
};

/**
 * Public repos only, unauthenticated. On GitHub Pages this runs at build time, so the list
 * refreshes whenever the deploy workflow runs (on push and daily). Returns [] if GitHub is unreachable.
 */
async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/samirkanbar/repos?sort=pushed&per_page=12",
      { headers: { Accept: "application/vnd.github+json" } },
    );
    if (!res.ok) return [];
    const repos: Repo[] = await res.json();
    return repos.filter((r) => !r.fork).slice(0, 6);
  } catch {
    return [];
  }
}

const month = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });

export async function GithubFeed() {
  const repos = await getRepos();
  if (repos.length === 0) {
    return (
      <p className="text-muted-foreground">
        See my latest work on{" "}
        <a className="underline underline-offset-4" href={links.github}>
          GitHub
        </a>
        .
      </p>
    );
  }
  return (
    <ul>
      {repos.map((repo) => (
        <li key={repo.name} className="border-t border-border last:border-b">
          <a
            href={repo.html_url}
            className="group flex items-center justify-between gap-4 py-3 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <span className="min-w-0 truncate font-mono text-sm group-hover:text-primary">
              {repo.name}
            </span>
            <span className="flex shrink-0 items-center gap-3 font-mono text-xs text-muted-foreground">
              <span className="hidden sm:inline">{repo.language}</span>
              <span>{month(repo.pushed_at)}</span>
              <ArrowUpRight className="size-3.5" aria-hidden />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
