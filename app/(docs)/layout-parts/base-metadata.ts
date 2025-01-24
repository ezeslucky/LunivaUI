import { Metadata } from 'next';

interface BaseMetadataProps {
  title?: string;
  description?: string;
}
export function baseMetadata({ title, description }: BaseMetadataProps): Metadata {
  return {
    title: `${title} Luniva UI -Arihant Jain`,
    description: `Luniva UI: ${description}`,
    authors: [{ name: 'Arihant Jain' }, { url: 'https://arihant.us/', name: 'Arihant' }],
  };
}
