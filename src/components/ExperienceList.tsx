'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ChevronUp } from 'lucide-react';
import type { ExperienceItem } from '@/types/profile';

interface ExperienceListProps {
    experience: ExperienceItem[];
}

export function ExperienceList({ experience }: ExperienceListProps) {
    const [showAll, setShowAll] = useState(false);

    // Default to showing only the first 2 items unless expanded
    const displayedExperience = showAll ? experience : experience.slice(0, 2);
    const hasMore = experience.length > 2;

    const toggleShowAll = () => {
        setShowAll(prev => !prev);
    };

    return (
        <div className="space-y-12">
            <div className="space-y-6 max-w-5xl mx-auto">
                {displayedExperience.map((exp) => (
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
            {hasMore && (
                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        size="lg"
                        className="group"
                        onClick={toggleShowAll}
                    >
                        {showAll ? (
                            <>
                                Show Less
                                <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                            </>
                        ) : (
                            <>
                                View Full Experience
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </>
                        )}
                    </Button>
                </div>
            )}
        </div>
    );
}
