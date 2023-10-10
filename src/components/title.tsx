interface ITitleProps {title: string}
export default async function Title (props: ITitleProps) {

  return (
    <div className='flex justify-center'>
      <h1 className='text-violet-700 text-2xl font-semibold'>{props.title}</h1>
    </div>
  );
}