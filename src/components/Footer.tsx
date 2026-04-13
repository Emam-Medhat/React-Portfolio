import { profile } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold gradient-text">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">Full-Stack Developer • Laravel & Vue.js</p>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"><GithubIcon size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"><LinkedinIcon size={18} /></a>
          <a href={`mailto:${profile.email}`} className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
