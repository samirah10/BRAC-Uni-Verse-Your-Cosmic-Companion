import { HStack } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import Logo from './Logo';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Logo />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
