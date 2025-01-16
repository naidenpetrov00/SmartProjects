import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

export const useTypesOfWork = () => {
  const { t, i18n } = useTranslation();

  const typesOfWork = useMemo(
    () => ({
      wetProcesses: {
        title: t('typesOfWork.wetProcesses.title'),
        details: [
          t('typesOfWork.wetProcesses.details.0'),
          t('typesOfWork.wetProcesses.details.1'),
          t('typesOfWork.wetProcesses.details.2'),
          t('typesOfWork.wetProcesses.details.3'),
          t('typesOfWork.wetProcesses.details.4'),
        ],
      },
      dryConstruction: {
        title: t('typesOfWork.dryConstruction.title'),
        details: [
          t('typesOfWork.dryConstruction.details.0'),
          t('typesOfWork.dryConstruction.details.1'),
          t('typesOfWork.dryConstruction.details.2'),
        ],
      },
      flooringAndCladding: {
        title: t('typesOfWork.flooringAndCladding.title'),
        details: [
          t('typesOfWork.flooringAndCladding.details.0'),
          t('typesOfWork.flooringAndCladding.details.1'),
          t('typesOfWork.flooringAndCladding.details.2'),
          t('typesOfWork.flooringAndCladding.details.3'),
        ],
      },
      roofSystems: {
        title: t('typesOfWork.roofSystems.title'),
        details: [
          t('typesOfWork.roofSystems.details.0'),
          t('typesOfWork.roofSystems.details.1'),
          t('typesOfWork.roofSystems.details.2'),
          t('typesOfWork.roofSystems.details.3'),
          t('typesOfWork.roofSystems.details.4'),
          t('typesOfWork.roofSystems.details.5'),
        ],
      },
      installations: {
        title: t('typesOfWork.installations.title'),
        details: [
          t('typesOfWork.installations.details.0'),
          t('typesOfWork.installations.details.1'),
        ],
      },
      design: {
        title: t('typesOfWork.design.title'),
        details: [
          t('typesOfWork.design.details.0'),
          t('typesOfWork.design.details.1'),
        ],
      },
      cleaning: {
        title: t('typesOfWork.cleaning.title'),
        details: [t('typesOfWork.cleaning.details.0')],
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language],
  );

  return typesOfWork;
};
