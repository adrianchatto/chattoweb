import Image from 'next/image';
import { profileData } from '@/content/profile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ExperienceList } from '@/components/ExperienceList';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { ArrowRight, Briefcase, MapPin, Mail, Linkedin, Github } from 'lucide-react';

export default function Home() {
  const { personal, highlights, skills, experience } = profileData;

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-lg font-bold text-foreground">
            {personal.name}
          </h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Enhanced Hero Section with Banner */}
        <section className="relative overflow-hidden">
          <div className="container relative">
            <div className="flex flex-col items-center text-center py-10 md:py-20 space-y-8">
              {/* Professional Headshot */}
              <div className="relative group">
                {/* Image container with ring */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-background shadow-2xl ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                  <Image
                    src={personal.headshot}
                    alt={`${personal.name} - Professional Headshot`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
              </div>

              {/* Main Heading with enhanced styling */}
              <div className="space-y-6 max-w-4xl">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                  {personal.name}
                </h2>
                <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">
                  {personal.title}
                </p>
              </div>

              {/* Bio */}
              <div className="max-w-2xl px-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {personal.bio[0]}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/cv.pdf" download="Adrian_Chatto_CV.pdf">
                  <Button variant="primary" size="lg" className="group w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow bg-primary text-primary-foreground hover:bg-primary/90">
                    Download CV
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <a href={`mailto:${personal.email}`}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 hover:bg-secondary/50">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Button>
                </a>
              </div>

              {/* Quick Links */}
              <div className="flex items-center gap-6 px-6 py-3 mt-4">
                <a
                  href={personal.links.linkedin}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={personal.links.github}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground border-l border-border pl-6">
                  <MapPin className="h-4 w-4" />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Highlights */}
        <section className="container py-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Impact at a Glance</h3>
            <p className="text-muted-foreground text-lg">
              Proven track record of delivering results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="relative p-8 text-center group hover:shadow-strong transition-all duration-300 border-primary/10 hover:border-primary/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                    {highlight.value}
                    {highlight.suffix}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {highlight.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Skills */}
        <section className="w-full py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Specialized skills developed through years of hands-on experience
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  size="lg"
                  className="px-6 py-3 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default shadow-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Experience Preview */}
        <section className="container py-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Career Journey</h3>
            <p className="text-muted-foreground text-lg">
              Full professional history and key achievements
            </p>
          </div>

          <ExperienceList experience={experience} />
        </section>

      </main>

      {/* Enhanced Footer */}
      <footer className="border-t bg-muted/30 mt-20">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="text-lg font-bold text-foreground">
                {personal.name}
              </h4>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                Building exceptional digital experiences
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={personal.links.linkedin}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={personal.links.github}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} {personal.name}. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
