import React from 'react';
import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import {
  AiOutlineSend,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'}>
          <Heading size="md" textTransform="uppercase" textAlign={["center", 'left']}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom="2px solid white" py="2">
            <Input
              placeholder="Enter Email Here"
              border="none"
              borderRadius="none"
              outline="none"
              focusBorderColor="none"
            />
            <Button
              p="0"
              color="purple"
              variant="ghost"
              borderRadius="0 20px 20px 0"
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w="full"
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textAlign="center" textTransform="uppercase">
            Video Hub
          </Heading>
          <Text>@All right Reserved 2023</Text>
        </VStack>

        <VStack w="full">
          <Heading size="md" textTransform="uppercase">
            Social Media
          </Heading>
          <Button variant="link" colorScheme="purple">
            <a href="https://www.linkedin.com/in/avijit-dam-a45814208/" target="_blank">
              <AiFillLinkedin size={24} />
            </a>
          </Button>

          <Button variant="link" colorScheme="purple">
            <a href="https://www.instagram.com/static_shock01/" target="_blank">
              <AiFillInstagram size={24} />
            </a>
          </Button>

          <Button variant="link" colorScheme="purple">
            <a href="https://github.com/Avijitdam98" target="_blank">
              <AiFillGithub size={24} />
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
