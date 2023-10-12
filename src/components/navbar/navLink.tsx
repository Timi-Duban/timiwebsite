import Link from "next/link";

interface INavLinkProps {
  href: string,
  label: string
}
export function NavLink (props: INavLinkProps) {
  return (
    <div className='px-1'>
      <Link href={props.href}>{props.label}</Link>
    </div>
  );
}