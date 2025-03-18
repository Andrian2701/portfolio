import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MdMenu } from 'react-icons/md';
import { Navbar } from './navbar';

export const DropMenu = () => {
  return (
    <span className="sm:hidden flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MdMenu className="text-[22.5px] text-primary cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#fafafa] p-4 mt-2 sm:mt-4">
          <Navbar isDrop />
        </DropdownMenuContent>
      </DropdownMenu>
    </span>
  );
};
