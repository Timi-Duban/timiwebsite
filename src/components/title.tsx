interface ITitleProps {title: string}
export function TitleL (props: ITitleProps) {
  return (
    <div className='flex justify-center pt-2 drop-shadow-light font-serif'>
      <h1 className='text-cyan-600 text-2xl font-semibold'>{props.title}</h1>
    </div>
  );
}

export function TitleLd(props: ITitleProps) {
  return (
    <div className='flex justify-center pt-2 font-serif'>
      <h1 className='text-cyan-600 md:text-cyan-500 text-2xl font-semibold drop-shadow-light md:drop-shadow-dark'>{props.title}</h1>
    </div>
  );
}

export function TitleDl(props: ITitleProps) {
  return (
    <div className='flex justify-center pt-2 font-serif'>
      <h1 className='text-cyan-500 md:text-cyan-600 text-2xl font-semibold drop-shadow-dark md:drop-shadow-light'>{props.title}</h1>
    </div>
  );
}