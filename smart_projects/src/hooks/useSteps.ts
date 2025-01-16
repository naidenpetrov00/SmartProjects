import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

export const useSteps = () => {
  const { t, i18n } = useTranslation();

  const steps = useMemo(() => {
    return [
      t('steps.contactUs'),
      t('steps.inspection'),
      t('steps.offer'),
      t('steps.building'),
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return steps;
};
