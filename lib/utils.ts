import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { notFound } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getBlogPostMetadata(slug: string) {
  try {
    const file = await import(`../../../markdown/${slug}.mdx`);
    if (file.metadata) {
      return { metadata: file.metadata };
    } else {
      throw new Error(`Metadata missing for ${slug}`);
    }
  } catch (error) {
    console.error(error);
    return notFound();
  }
}