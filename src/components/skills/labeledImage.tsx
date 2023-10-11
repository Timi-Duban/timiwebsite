import Image from 'next/image'

interface ILabeledImageProps {
    alt: string,
    image: any
    label: string,
    opacity?: number
}
export default function LabeledImage (props: ILabeledImageProps) {
    const { alt, image, label, opacity } = props;

    return (
        <div className={'flex flex-col items-center mx-3'}>
            <div className='bg-neutral-400 md:bg-neutral-200 justify-center items-center flex  w-[60px] h-[60px] rounded-full'>
                <div className={`opacity-${opacity ?? 100}`}>
                    <Image
                        alt={alt}
                        src={image}
                        width={40}
                        height={40}
                    />
                </div>
            </div>
            <p className='whitespace-pre-wrap text-sm/4 text-center mt-2'>{label}</p>
        </div>
    );
}

export function SecondaryImage (props: ILabeledImageProps) {
    const { alt, image, label } = props;
    return (
        <div className='flex flex-col items-center mt-0.5'>
            <p className='whitespace-pre-wrap text-[0.55rem]/3 -mb-0.4 text-center'>{label}</p>
            <div className='bg-neutral-400 md:bg-neutral-200 justify-center items-center flex  w-[35px] h-[35px] rounded-full'>
            <Image
                alt={alt}
                src={image}
                width={30}
                height={30}
            />
            </div>
        </div>
    );
}