import Image from 'next/image';
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getStrapiMedia, myLoader } from '../../lib/media';
import { shimmer, toBase64 } from '../../util/toBase64';
import { Badge } from '../ui/badge';
import Link from 'next/link';

function ProjectCard({ project }) {
  return (
    <Card className="group relative h-auto w-full overflow-hidden rounded-xl border-accent backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] md:w-72 bg-muted pt-0">
      <div className="relative w-full overflow-hidden bg-linear-to-br from-muted/50 to-muted/30">
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Image
          loader={myLoader}
          src={getStrapiMedia(project.thumbnail.formats.thumbnail)}
          alt={project.thumbnail.hash}
          width={project.thumbnail.formats.thumbnail.width}
          height={project.thumbnail.formats.thumbnail.height}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(
              project.thumbnail.formats.thumbnail.width,
              project.thumbnail.formats.thumbnail.height
            )
          )}`}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="flex w-full flex-col items-start justify-center p-4">
        <h3 className="w-full bg-muted text-xl font-bold text-card-foreground transition-colors duration-200 group-hover:text-primary">
          {project.name}
        </h3>
        <p className="mt-2 line-clamp-3 w-full bg-muted text-sm leading-relaxed text-muted-foreground">
          {project.descriptions}
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-start gap-2">
          {project.technologies &&
            project.technologies.map((tech) => (
              <Badge
                variant="secondary"
                key={tech.id}
                className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
              >
                {tech.name}
              </Badge>
            ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link
          // target="_blank"
          href={`/projects/${project.slug}`}
          rel="noreferrer"
          className="w-full "
        >
          <Button
            variant="secondary"
            className="w-full cursor-pointer font-semibold"
          >
            View Project
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
