import { useTranslation } from 'react-i18next';

export const usePhrases = () => {
  const { t } = useTranslation();

  return [
    t('phrases.apartmentRenovations'),
    t('phrases.homeTransformations'),
    t('phrases.qualityRepairs'),
    t('phrases.modernUpgrades'),
  ];
};
