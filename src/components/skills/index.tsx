import initTranslations from "@/i18n";
import reactLogo from '@/assets/skills/react.svg'
import mySqlLogo from '@/assets/skills/mysql.svg'
import mongoDbLogo from '@/assets/skills/mongodb.svg'
import nextJsLogo from '@/assets/skills/next-js.svg'
import nestLogo from '@/assets/skills/nest.svg'
import nodeJsLogo from '@/assets/skills/nodejs.svg'
import reduxLogo from '@/assets/skills/redux.svg'
import { TitleLd } from "../title";
import LabeledImage, { SecondaryImage } from "./labeledImage";

interface ISkillsProps {locale: string}
export default async function Skills (props: ISkillsProps) {
  const { locale } = props;
  const { t } = await initTranslations(locale, ['common']);
  return (
    <div className='card rounded bg-neutral-200 md:bg-neutral-700 md:text-neutral-50 pb-2' id="skills">
      <TitleLd title={t('skills')} />
      <div className='flex justify-evenly flex-wrap p-4'>
        <LabeledImage alt='MySQL logo' image={mySqlLogo} label="SQL" />
        <LabeledImage alt='MongoDB logo' image={mongoDbLogo} label="NoSQL" />
        <LabeledImage alt='Next.js Logo' image={nextJsLogo} label="Next.js" />
        <LabeledImage alt='React logo' image={reactLogo} label={'React\nNative\nWeb'} opacity={93}/>
        <div>
          <LabeledImage alt='Nest logo' image={nestLogo} label="Nest" />
          <SecondaryImage alt='Nodejs logo' image={nodeJsLogo} label="Including" />
        </div>
        <LabeledImage alt='Redux logo' image={reduxLogo} label="Redux" />
      </div>
    </div>
  );
}
