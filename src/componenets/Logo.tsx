import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const Logo = () => {
  const logoColor = useColorModeValue('brown.800', 'brown.200');
  const secondaryColor = useColorModeValue('gray.600', 'gray.300');
  const logoShadow = useColorModeValue('2px 2px 4px rgba(0, 0, 0, 0.5)', '2px 2px 4px rgba(255, 255, 255, 0.3)');
  const hoverColor = useColorModeValue('blue.600', 'blue.300');
  const hoverShadow = useColorModeValue('4px 4px 6px rgba(0, 0, 0, 0.7)', '4px 4px 6px rgba(255, 255, 255, 0.5)');

  return (
    <Box textAlign="center">
      <Text
        fontFamily="'Cinzel', serif"
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="widest"
        color={logoColor}
        textShadow={logoShadow}
        transition="all 0.3s"
        _hover={{
          color: hoverColor,
          textShadow: hoverShadow,
          transform: 'scale(1.05)',
        }}
      >
        BRAC Uni-Verse
      </Text>
      <Text
        fontFamily="'Caveat', cursive"
        fontSize="lg"
        fontWeight="medium"
        letterSpacing="wide"
        color={secondaryColor}
        textShadow={logoShadow}
        transition="all 0.3s"
        _hover={{
          color: hoverColor,
          textShadow: hoverShadow,
        }}
      >
        Your Cosmic Companion
      </Text>
    </Box>
  );
};

export default Logo;
