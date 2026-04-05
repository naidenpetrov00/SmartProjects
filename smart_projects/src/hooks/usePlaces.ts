import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export interface Place {
  getImages: () => string[];
  title: string;
  subtitle: string;
  description: string;
}

interface PlacesFolder {
  [key: string]: Place;
}

export const usePlaces = () => {
  const { t, i18n } = useTranslation();

  const data: PlacesFolder = useMemo(
    () => ({
      NedelchoApart: {
        getImages: () => {
          //@ts-ignore
          const context = require.context(
            '../assets/images/places/NedelchoApart',
            false,
            /\.(png|jpe?g|svg|webp)$/,
          );
          const images = context.keys().map(context);
          return images;
        },
        title: t('places.NedelchoApart.title'),
        subtitle: t('places.NedelchoApart.subtitle'),
        description: t('places.NedelchoApart.description'),
      },
      2024002: {
        getImages: () => {
          //@ts-ignore
          const context = require.context(
            '../assets/images/places/2024002',
            false,
            /\.(png|jpe?g|svg|webp)$/,
          );
          const images = context.keys().map(context);
          return images;
        },
        title: t('places.2024002.title'),
        subtitle: t('places.2024002.subtitle'),
        description: t('places.2024002.description'),
      },
      2024003: {
        getImages: () => {
          //@ts-ignore
          const context = require.context(
            '../assets/images/places/2024003',
            false,
            /\.(png|jpe?g|svg|webp)$/,
          );
          const images = context.keys().map(context);
          return images;
        },
        title: t('places.2024003.title'),
        subtitle: t('places.2024003.subtitle'),
        description: t('places.2024003.description'),
      },
      2025012: {
        getImages: () => {
          //@ts-ignore
          const context = require.context(
            '../assets/images/places/2025012',
            false,
            /\.(png|jpe?g|svg|webp)$/,
          );
          const images = context.keys().map(context);
          return images;
        },
        title: t('places.2025012.title'),
        subtitle: t('places.2025012.subtitle'),
        description: t('places.2025012.description'),
      },
      2025015: {
        getImages: () => {
          //@ts-ignore
          const context = require.context(
            '../assets/images/places/2025015',
            false,
            /\.(png|jpe?g|svg|webp)$/,
          );
          const images = context.keys().map(context);
          return images;
        },
        title: t('places.2025015.title'),
        subtitle: t('places.2025015.subtitle'),
        description: t('places.2025015.description'),
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language],
  );

  return data;
};
