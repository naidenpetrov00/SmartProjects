import { useTranslation } from 'react-i18next';

export const useSteps = () => {
  const { t } = useTranslation();

  return [
    // t('steps.askAI'),
    t('steps.contactUs'),
    t('steps.inspection'),
    t('steps.offer'),
    t('steps.building'),
  ];
};
