import { profileData } from '@/content/profile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
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
          <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {personal.name}
          </h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Enhanced Hero Section with Banner */}
        <section className="relative overflow-hidden">
          {/* Premium Gradient Banner Background */}
          <div className="absolute inset-0">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-background" />

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

            {/* Grid pattern */}
            <div className="absolute inset-0 grid-pattern opacity-20" />

            {/* Subtle animated gradient orbs */}
            <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container relative">
            <div className="flex flex-col items-center text-center py-20 md:py-32 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary backdrop-blur-sm">
                <Briefcase className="h-4 w-4" />
                <span>Open to Opportunities</span>
              </div>

              {/* Main Heading with enhanced styling */}
              <div className="space-y-6 max-w-4xl">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    {personal.name}
                  </span>
                </h2>
                <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">
                  {personal.title}
                </p>
              </div>

              {/* Bio with subtle backdrop */}
              <div className="relative">
                <div className="absolute inset-0 bg-background/40 blur-xl rounded-full" />
                <p className="relative text-lg text-muted-foreground max-w-2xl leading-relaxed px-6">
                  {personal.bio[0]}
                </p>
              </div>

              {/* CTAs with enhanced shadow */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="/cv.pdf" download="Adrian_Chatto_CV.pdf">
                  <Button variant="primary" size="lg" className="group w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow">
                    Download CV
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <a href={`mailto:${personal.email}`}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto backdrop-blur-sm">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Button>
                </a>
              </div>

              {/* Quick Links with backdrop */}
              <div className="flex items-center gap-6 pt-8 px-6 py-3 rounded-full bg-background/30 backdrop-blur-sm border border-primary/10">
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
                <div className="flex items-center gap-2 text-sm text-muted-foreground border-l border-primary/20 pl-6">
                  <MapPin className="h-4 w-4" />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
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
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-3">
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
              Recent roles and key achievements
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {experience.slice(0, 2).map((exp, index) => (
              <Card
                key={exp.id}
                className="group hover:shadow-strong transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {exp.company}
                      </CardTitle>
                      <p className="text-base font-medium text-foreground">
                        {exp.title}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                      <span className="font-medium">{exp.dates}</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="pt-2">
                    <p className="text-sm font-semibold text-foreground mb-2">Key Achievements:</p>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 3).map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">▪</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        size="sm"
                        className="border-primary/30 text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More CTA */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group">
              View Full Experience
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        {/* Enhanced Status Banner */}
        <section className="container py-20">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 p-10 md:p-16">
            <div className="absolute inset-0 grid-pattern opacity-20" />

            <div className="relative space-y-6 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-sm font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Live Development
              </div>

              <h3 className="text-3xl md:text-4xl font-bold">
                Building Something Special
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                This is the foundational architecture for an interactive, animated CV experience.
                The design system is complete and ready for the remaining components.
              </p>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Project structure & configuration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">TypeScript types & content model</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Premium theme system (toggle above!)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Responsive UI component library</span>
                </div>
                <div className="flex items-center gap-3 opacity-50">
                  <div className="h-5 w-5 rounded-full border-2 border-primary/30" />
                  <span className="text-sm">Animation & scroll effects</span>
                </div>
                <div className="flex items-center gap-3 opacity-50">
                  <div className="h-5 w-5 rounded-full border-2 border-primary/30" />
                  <span className="text-sm">Navigation with scroll spy</span>
                </div>
                <div className="flex items-center gap-3 opacity-50">
                  <div className="h-5 w-5 rounded-full border-2 border-primary/30" />
                  <span className="text-sm">8 interactive sections</span>
                </div>
                <div className="flex items-center gap-3 opacity-50">
                  <div className="h-5 w-5 rounded-full border-2 border-primary/30" />
                  <span className="text-sm">Docker deployment setup</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t bg-muted/30 mt-20">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="text-lg font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
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
