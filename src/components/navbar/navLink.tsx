import Link from "next/link";

interface INavLinkProps {
  href: string,
  label: string
}
export function NavLink (props: INavLinkProps) {
  return (
    <div className='px-2 border-r-2 last:border-r-0 border-cyan-700 h-[55%] flex items-center'>
      <Link href={props.href}>{props.label}</Link>
    </div>
  );
}