import { Center, Heading, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";

function Workshops() {
  return (
    <Center>
        <HStack>
        <Image
            borderRadius='full'
            boxSize='xs'
            src='/Workshops.svg'
            alt='Workshops'
            />
            <Spacer></Spacer>
            <VStack align={'flex-start'}>
                <Heading size={'2xl'}>Workshops</Heading>
                <Spacer></Spacer>
                <Text maxWidth={['500']}>
                I love to work on projects where I can not only leverage my Machine Learning and 
                Software Development skills to build intelligent and accessible software solutions in 
                the form of websites and/or mobile apps but also learn something new and exciting.
                Aside from empowering and mentoring my fellow students while being a Microsoft Learn 
                Student Ambassador, I enjoy writing songs as well as novels & tech articles and teaching 
                students how to play the piano.
                </Text>

                </VStack>
            
        </HStack>
    </Center>
  );
}

export default Workshops;
