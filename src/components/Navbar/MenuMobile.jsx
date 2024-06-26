import data from "../../data.json";
import MyLink from "../ui/MyLink";

const MenuMobile = ({ isOpen, onClick }) => {
  const { links } = data["section-nav"];

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } bg-black-900/20 w-full h-screen fixed inset-0 lg:hidden
        backdrop-blur-sm
      `}
      onClick={onClick}
    >
      <ul
        className={`
        fixed  left-0 top-0 px-2 py-5 h-screen
        w-[50vw] min-w-[220px] flex flex-col gap-4  items-start text-black-900 bg-[#DDF7E3] shadow-md
         *:p-2 *:w-full *:text-center
        `}
      >
        {links.map((link) =>
          link.isExternal ? (
            <li key={link.id}>
              <MyLink
                href={link.href}
                text={link.text}
                title={link.title}
                target='_blank'
                rel='noreferrer'
              />
            </li>
          ) : (
            <li key={link.id}>
              <MyLink href={link.href} text={link.text} title={link.title} />
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default MenuMobile;
