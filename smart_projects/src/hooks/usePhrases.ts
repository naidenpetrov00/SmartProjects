import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const usePhrases = () => {
  const { t, i18n } = useTranslation();

  return useMemo(
    () => [
      t('phrases.apartmentRenovations'),
      t('phrases.homeTransformations'),
      t('phrases.qualityRepairs'),
      t('phrases.modernUpgrades'),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language],
  );
};
