import avatar from "../assets/image-avatar.png";
import logo from "../assets/logo.svg";
import { useStore } from "../store";
import Basket from "./Basket";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { MenuIcon } from "./icons";

export default function Header() {
    let setIsMenuOpen = useStore.use.setIsMenuOpen();

    return (
        <header className="relative mx-auto flex h-[68px] max-w-6xl px-6 md:h-[113px] md:border-b-2 md:px-0">
            <button
                className="mr-4 mt-1.5 md:hidden"
                onClick={() => setIsMenuOpen(true)}
            >
                <MenuIcon />
            </button>

            <a href="#" className="flex items-center md:mr-14" >
                <img src={logo} alt="Sneakers" />
            </a>

            <MobileNavigation />

            <DesktopNavigation />

            <Basket />

            <button className="flex items-center">
                <img
                    src={avatar}
                    alt="avatar"
                    className=" w-6 md:w-[3.25rem] rounded-full border-4 border-transparent hover:border-[hsl(26,100%,55%)]"
                />
            </button>
        </header>
    );
}
