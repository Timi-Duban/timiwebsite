import { ReactNode } from 'react';

const CenterBar = () => <div className='h-full w-1 bg-cyan-800 pointer-events-none' />;
const CenterPoint = () => <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-cyan-700 shadow' />;

const LeftTimeLine = () => <div className='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
  <div className='h-full w-6 flex items-center justify-center'><CenterBar /></div>
  <CenterPoint />
</div>;

const RightTimeLine = () => <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
  <div className='h-full w-6 flex items-center justify-center'><CenterBar /></div>
  <CenterPoint />
</div>;


interface ITimeLineCardProps {
  side: 'left' | 'right';
  title: string;
  body: string;
  date?: string;
}
const TimeLineCard = (props: ITimeLineCardProps) => {
  const cardClass = 'bg-cyan-700 p-3 rounded-xl my-3 shadow-md ' + 
    (props.side === 'left' ? 'col-start-1 col-end-5 ml-auto' : 'col-start-6 col-end-10 mr-auto');

  return (
    <div className={cardClass}>
      <div className='flex w-full justify-between items-center'>
        <h3 className='font-semibold mb-1 mr-1'>{props.title}</h3>
        <p className='italic text-sm' >{props.date}</p>
      </div>
      <p className='leading-4 text-sm text-justify'>{props.body}</p>
    </div>
  );
};


interface ISidedCardTLProps {
  title: string;
  body: string;
  date?: string;
}
export const LeftCardTL = (props: ISidedCardTLProps) => {
  return (
    <div className='flex flex-row-reverse md:contents'>
      <TimeLineCard side={'left'} title={props.title} body={props.body} date={props.date} />
      <RightTimeLine />
    </div>
  );
};

export const RightCardTL = (props: ISidedCardTLProps) => {
  return (
    <div className='flex md:contents'>
      <LeftTimeLine />
      <TimeLineCard side={'right'} title={props.title} body={props.body} date={props.date} />
    </div>
  );
};

export const TimeLineContainer = ({ children }: { children: ReactNode; }) => (
  <div className='container'>
    <div className='flex flex-col md:grid grid-cols-9 mx-auto p-6 text-neutral-200'>
      {children}
    </div>
  </div>
);
