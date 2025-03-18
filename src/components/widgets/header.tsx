import { Logo } from './logo';
import { LocaleSwitch } from "./locale-switch";
import { Navbar } from './navbar';
import { DropMenu } from './drop-menu';

export const Header = () => {
  return (
    <header className="bg-[#fafafa] p-[12px] sm:p-[20px]">
      <nav className="flex items-center justify-between mx-auto w-[760px] max-w-full">
        <Logo />
        <div className="flex items-center gap-2 sm:gap-8">
          <Navbar />
          <LocaleSwitch />
          <DropMenu />
        </div>
      </nav>
    </header>
  );
};

