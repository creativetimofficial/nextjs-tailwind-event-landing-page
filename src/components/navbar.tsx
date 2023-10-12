import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
}

function NavItem({ children }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "Page",
    icon: RectangleStackIcon,
  },
  {
    name: "Account",
    icon: UserCircleIcon,
  },
  {
    name: "Blocks",
    icon: Squares2X2Icon,
  },
  {
    name: "Docs",
    icon: CommandLineIcon,
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      color="transparent"
      className="border-0 z-50 absolute"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography color="white" className="text-lg font-bold">
          Material Tailwind
        </Typography>
        <ul className="ml-10 hidden items-center gap-6 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon }) => (
            <NavItem key={name}>
              <Icon className="h-5 w-5 text-white" />
              <span className="text-white">{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <Button color="white" variant="text">
            Log in
          </Button>
          <Button color="white">button</Button>
        </div>
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <Button variant="text">Log in</Button>
            <Button color="gray">button</Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}


export default Navbar;
