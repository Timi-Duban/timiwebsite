interface ITitleProps {title: string}
export function TitleL (props: ITitleProps) {
  return (
    <div className='flex justify-center pt-2'>
      <h1 className='text-violet-700 text-2xl font-semibold'>{props.title}</h1>
    </div>
  );
}

export function TitleLd(props: ITitleProps) {
  return (
    <div className='flex justify-center pt-2'>
      <h1 className='text-violet-700 md:text-violet-500 text-2xl font-semibold'>{props.title}</h1>
    </div>
  );
}

export function TitleDl(props: ITitleProps) {
  return (
    <div className='flex justify-center pt-2'>
      <h1 className='text-violet-500 md:text-violet-700 text-2xl font-semibold'>{props.title}</h1>
    </div>
  );
}