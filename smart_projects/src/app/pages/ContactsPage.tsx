import React from 'react';
import { useTranslation } from 'react-i18next';

import { Hero } from '../../components/ui/Heros/Hero';
import Timeline from '../../components/ui/Timeline/Timeline';
import { ContactsCard } from '../../components/ui/Card/ContactsCard';
import { Helmet } from 'react-helmet-async';

export const ContactsPage = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet>
        <title>{t('metatags.contactsPage.title')}</title>
        <meta
          name="description"
          content={t('metatags.contactsPage.description')!}
        />
        <link rel="canonical" href="https://smart-projects.bg/contacts" />
      </Helmet>
      <h1 style={{ display: 'none' }}>...............................</h1>
      <Hero
        titleWhite={t('titles.contactUs.white').toString()}
        titleBlack={t('titles.contactUs.black').toString()}
        description={t('descriptions.contactUs').toString()}
      />
      <Timeline />
      <ContactsCard />
    </React.Fragment>
  );
};
