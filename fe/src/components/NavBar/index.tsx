import {
  Bars3Icon,
  BellIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default function NavBar() {
  return (
    <>
      <div className="navbar p-2  bg-brown	">
        <ul className="grid gap-4 justify-center justify-items-center	 grid-cols-3 ">
          <li>
            <a href="#" className="text-center">
              <Bars3Icon className="h-8 w-8" color="#FDF9DD" />
            </a>
          </li>
          <li className="text-white">LOGO</li>
          <li className="flex gap-4">
            <a href="#" className="text-center">
              <BellIcon className="h-8 w-8" color="#FDF9DD" />
            </a>
            <a href="#" className="text-center">
              <UserIcon className="h-8 w-8 fill-current " color="#FDF9DD" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
