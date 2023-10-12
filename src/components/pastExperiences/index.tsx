import initTranslations from '@/i18n';
import { TitleDl } from '../title';
import { TimeLineContainer, LeftCardTL, RightCardTL } from './TimeLineComponents';

interface IPastExperiencesProps {locale: string}
export default async function PastExperiences (props: IPastExperiencesProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);

  return (
    <div className='card bg-neutral-700 md:bg-neutral-200 flex flex-col items-center' id='pastExperiences'>
        <TitleDl title={t('pastExperiences')} />

        <TimeLineContainer>
          <LeftCardTL title={t('exp5Title')} date='10/2022 - 06/2023'
            body={t('exp5Body')} />
          <RightCardTL title={t('exp4Title')} date='2022'
            body={t('exp4Body')} />
          <LeftCardTL title={t('exp3Title')} date='2021 - 2022'
            body={t('exp3Body')} />
          <RightCardTL title={t('exp2Title')} date='06/2021 - 07/2021'
            body={t('exp2Body')} />
          <LeftCardTL title={t('exp1Title')} date='2017 - 2019'
            body={t('exp1Body')} />
        </TimeLineContainer>
      </div>
    );
}
