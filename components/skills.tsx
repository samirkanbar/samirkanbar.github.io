"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/animate-ui/components/radix/popover";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {skills.map(({ group, items }) => (
        <div key={group}>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {group}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <li key={skill.name}>
                {skill.usedIn ? (
                  <Popover>
                    <PopoverTrigger className="cursor-pointer rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
                      <Badge className="h-7 px-2.5 text-sm hover:bg-foreground">{skill.name}</Badge>
                    </PopoverTrigger>
                    <PopoverContent className="w-60">
                      <p className="mb-1 font-mono text-xs text-muted-foreground">Where I used it</p>
                      <ul className="space-y-1 text-sm">
                        {skill.usedIn.map((u) => (
                          <li key={u}>{u}</li>
                        ))}
                      </ul>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Badge variant="secondary" className="h-7 px-2.5 text-sm">
                    {skill.name}
                  </Badge>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
