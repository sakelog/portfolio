// style
import { FiUser, FiMail } from 'react-icons/fi';
import { HiStar } from 'react-icons/hi';
import { MdOutlineWorkOutline } from 'react-icons/md';

const NavItem = ({
  id,
  title,
  icon,
}: {
  id: string;
  title: string;
  icon: JSX.Element;
}) => (
  <div className="flex flex-col items-center p-2">
    <a
      href={`#${id}`}
      className="text-white hidden md:inline-block"
    >
      {title}
    </a>
    <a
      href={`#${id}`}
      className="text-white"
      aria-label={`${id} icon`}
    >
      {icon}
    </a>
  </div>
);

const NavMenu = () => (
  <nav className="grid grid-cols-4 bg-gray-600 divide-x">
    <NavItem
      id="profile"
      title="プロフィール"
      icon={<FiUser size="24" />}
    />
    <NavItem
      id="skill"
      title="スキル"
      icon={<HiStar size="24" />}
    />
    <NavItem
      id="works"
      title="作成したもの"
      icon={<MdOutlineWorkOutline size="24" />}
    />
    <NavItem
      id="contact"
      title="お問い合わせ"
      icon={<FiMail size="24" />}
    />
  </nav>
);

export default NavMenu;
