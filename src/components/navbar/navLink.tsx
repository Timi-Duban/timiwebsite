import Link from "next/link";

interface INavLinkProps {
  href: string,
  label: string,
}
export function NavLink (props: INavLinkProps) {
  const className = 'px-1 md:px-2 border-l-2 first:border-l-0 border-cyan-700 h-[55%] flex justify-center items-center hover:font-bold' + 
    (props.href === '#contact' ? ' border-r-2 md:border-r-0 -mr-[2px]' : '') +
    (props.href === '#pastExperiences' ? ' border-l-0 md:border-l-2' : '');
  return (
    <Link href={props.href} className={className}>
        {props.label}
    </Link>
  );
}