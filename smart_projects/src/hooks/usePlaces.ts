import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

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
      Gard: {
        getImages: () => {
          //@ts-ignore
          const context = require.context(
            '../assets/images/places/Gard',
            false,
            /\.(png|jpe?g|svg|webp)$/,
          );
          const images = context.keys().map(context);
          return images;
        },
        title: t('places.Gard.title'),
        subtitle: t('places.Gard.subtitle'),
        description: t('places.Gard.description'),
      },
      Gost: {
        getImages: () => {
          //@ts-ignore
          const context = require.context(
            '../assets/images/places/Gost',
            false,
            /\.(png|jpe?g|svg|webp)$/,
          );
          const images = context.keys().map(context);
          return images;
        },
        title: t('places.Gost.title'),
        subtitle: t('places.Gost.subtitle'),
        description: t('places.Gost.description'),
      },
      Gostinyata: {
        getImages: () => {
          //@ts-ignore
          const context = require.context(
            '../assets/images/places/Gostinyata',
            false,
            /\.(png|jpe?g|svg|webp)$/,
          );
          const images = context.keys().map(context);
          return images;
        },
        title: t('places.Gostinyata.title'),
        subtitle: t('places.Gostinyata.subtitle'),
        description: t('places.Gostinyata.description'),
      },
      Spa: {
        getImages: () => {
          //@ts-ignore
          const context = require.context(
            '../assets/images/places/Spa',
            false,
            /\.(png|jpe?g|svg|webp)$/,
          );
          const images = context.keys().map(context);
          return images;
        },
        title: t('places.Spa.title'),
        subtitle: t('places.Spa.subtitle'),
        description: t('places.Spa.description'),
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language],
  );

  return data;
};
