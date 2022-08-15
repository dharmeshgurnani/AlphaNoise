import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
      <chakra.button
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          rounded={'full'}
          w={8}
          h={8}
          cursor={'pointer'}
          as={'a'}
          href={href}
          display={'inline-flex'}
          alignItems={'center'}
          justifyContent={'center'}
          transition={'background 0.3s ease'}
          _hover={{
              bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
          }}>
          <VisuallyHidden>{label}</VisuallyHidden>
          {children}
      </chakra.button>
  );
};

export default function Footer() {
    return (
      <Box
      bg={useColorModeValue('lightGray', 'rgba(66, 153, 225, 0.6)')}
      color={useColorModeValue('black', 'black')}>
      <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>dharmeshgurnani</Text>
          <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'twitter.com/dharmeshgurnani'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'Github'} href={'github.com/dharmeshgurnani'}>
                  <FaGithub />
              </SocialButton>
          </Stack>
      </Container>
  </Box>
    );
}