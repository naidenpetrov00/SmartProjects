import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const usePaths = () => {
  const { t, i18n } = useTranslation();

  const paths = useMemo(
    () => ({
      home: {
        label: t('navBar.homeNavBarLink'),
        path: '/',
      },
      contacts: {
        label: t('navBar.contactsNavBarLink'),
        path: '/contacts',
      },
      ourWork: {
        label: t('navBar.ourWorkNavBarLink'),
        path: '/ourWork',
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language, t],
  );

  return paths;
};
