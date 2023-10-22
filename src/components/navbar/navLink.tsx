import Link from "next/link";

interface INavLinkProps {
  href: string,
  label: string,
  last?: boolean
}
export function NavLink (props: INavLinkProps) {
  const className = 'px-1 md:px-2 border-l-2 md:first:border-l-0 border-cyan-700 h-[55%] flex justify-center items-center' + 
    (props.last ? ' border-r-2 md:border-r-0 -mr-[2px]' : '');
  return (
    <div className={className}>
      <Link href={props.href}>{props.label}</Link>
    </div>
  );
}