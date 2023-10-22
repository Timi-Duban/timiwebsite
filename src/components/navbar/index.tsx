import NavClient from "./navClient";
import NavBody from "./navBody";

interface INavbarProps {locale: string}
export default async function Navbar (props: INavbarProps) {
  const { locale } = props;
  
  return (
    <NavClient>
      <NavBody locale={locale} />
    </NavClient>
  );
}
