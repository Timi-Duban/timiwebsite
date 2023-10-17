import { ReactNode } from 'react';

const CenterBar = () => <div className='h-full w-1 bg-cyan-600 md:bg-cyan-950 pointer-events-none' />;
const CenterPoint = () => <div className='w-6 h-6 absolute top-1/2 left-1/2 -mt-3 -ml-3 rounded-full bg-blue-200 border border-cyan-950' />;

interface ISideProps { side: 'left' | 'right' }
const HzLine = (props: ISideProps) => {
  const className = 'md:h-1 w-[calc(50%-0.75rem+2px)] bg-blue-200 absolute top-[calc(50%-0.125rem)] border-y border-cyan-950 z-10 ' +
  (props.side === 'left' ? '-left-[1px] ' : '-right-[1px] ')

  return (
    <div className={className} />
  );
}

const CentralColumn = (props: ISideProps) => <div className='col-start-5 col-end-6 mr-10 relative md:w-full'>
  <div className='h-full w-6 flex items-center justify-center mx-auto'><CenterBar /></div>
  <CenterPoint />
  <HzLine side={props.side} />
</div>;

interface ITimeLineCardProps {
  side: 'left' | 'right';
  title: string;
  body: string;
  date?: string;
}
const TimeLineCard = (props: ITimeLineCardProps) => {
  const cardClass = 'bg-blue-200 p-3 rounded-xl my-3 shadow-md border border-cyan-950 relative ' +
    (props.side === 'left' ? 'col-start-1 col-end-5 ml-auto' : 'col-start-6 col-end-10 mr-auto');

  return (
    <div className={cardClass}>
      <div className='flex w-full justify-between items-center'>
        <h2 className='font-semibold mb-1 mr-1'>{props.title}</h2>
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
      <CentralColumn side='left' />
    </div>
  );
};

export const RightCardTL = (props: ISidedCardTLProps) => {
  return (
    <div className='flex md:contents'>
      <CentralColumn side='right' />
      <TimeLineCard side={'right'} title={props.title} body={props.body} date={props.date} />
    </div>
  );
};

export const TimeLineContainer = ({ children }: { children: ReactNode; }) => (
  <div className='container'>
    <div className='flex flex-col md:grid grid-cols-9 mx-auto p-6 text-neutral-800'>
      {children}
    </div>
  </div>
);
