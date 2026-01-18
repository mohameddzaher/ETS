import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Energize Tech Solutions',
    short_name: 'ETS',
    description: 'Premier software development company with 24+ years of experience providing cutting-edge solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/images/white-logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
