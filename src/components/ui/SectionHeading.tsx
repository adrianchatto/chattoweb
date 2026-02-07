import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ title, subtitle, centered = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mb-12',
          {
            'text-center': centered,
          },
          className
        )}
        {...props}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = 'SectionHeading';

export { SectionHeading };
