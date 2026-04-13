import { profile } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><GithubIcon size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><LinkedinIcon size={18} /></a>
          <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-primary"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
