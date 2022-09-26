import { Center, Heading, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";

function About() {
  return (
    <Center>
        <VStack>
        <HStack>
        <Image
            borderRadius='full'
            boxSize='xs'
            src='/About.svg'
            alt='About me'
            />
            <Spacer></Spacer>
            <VStack align={'flex-start'}>
                <Heading size={'2xl'}>About me</Heading>
                <Spacer></Spacer>
                <Text maxWidth={['500']}>
                I love to work on projects where I can not only leverage my Machine Learning and 
                Software Development skills to build intelligent and accessible software solutions in 
                the form of websites and/or mobile apps but also learn something new and exciting.
                </Text>
                <Text maxWidth={['500']}>
                Aside from empowering and mentoring my fellow students while being a Microsoft Learn 
                Student Ambassador, I enjoy writing songs as well as novels & tech articles and teaching 
                students how to play the piano.
                </Text>

                </VStack>
            
        </HStack>
        <HStack>
        
            <VStack align={'flex-start'}>
                <Heading size={'2xl'}>Education</Heading>
                <Spacer></Spacer>
                <Text maxWidth={['500']}>
                I love to work on projects where I can not only leverage my Machine Learning and 
                Software Development skills to build intelligent and accessible software solutions in 
                the form of websites and/or mobile apps but also learn something new and exciting.
                Aside from empowering and mentoring my fellow students while being a Microsoft Learn 
                Student Ambassador, I enjoy writing songs as well as novels & tech articles and teaching 
                students how to play the piano.
                I'm also skilled in French with a DELF A1 Certification awarded by CIEP.
                </Text>

                </VStack>
                <Spacer></Spacer>
                <Image
            borderRadius='full'
            boxSize='xs'
            src='/Education.svg'
            alt='Education'
            />
            
            
        </HStack>
        <HStack>
        <Image
            borderRadius='full'
            boxSize='xs'
            src='/Research.svg'
            alt='About me'
            />
            <Spacer></Spacer>
            <VStack align={'flex-start'}>
                <Heading size={'2xl'}>Research</Heading>
                <Spacer></Spacer>
                <Text maxWidth={['500']}>
                I love to work on projects where I can not only leverage my Machine Learning and 
                Software Development skills to build intelligent and accessible software solutions in 
                the form of websites and/or mobile apps but also learn something new and exciting.
                </Text>
                <Text maxWidth={['500']}>
                Aside from empowering and mentoring my fellow students while being a Microsoft Learn 
                Student Ambassador, I enjoy writing songs as well as novels & tech articles and teaching 
                students how to play the piano.
                </Text>

                </VStack>
            
        </HStack>
        <HStack>
        
            
            <VStack align={'flex-start'}>
                <Heading size={'2xl'}>Volunteering</Heading>
                <Spacer></Spacer>
                <Text maxWidth={['500']}>
                I love to work on projects where I can not only leverage my Machine Learning and 
                Software Development skills to build intelligent and accessible software solutions in 
                the form of websites and/or mobile apps but also learn something new and exciting.
                </Text>
                <Text maxWidth={['500']}>
                Aside from empowering and mentoring my fellow students while being a Microsoft Learn 
                Student Ambassador, I enjoy writing songs as well as novels & tech articles and teaching 
                students how to play the piano.
                </Text>

                </VStack>
                <Spacer></Spacer>
                <Image
            borderRadius='full'
            boxSize='xs'
            src='/Volunteering.svg'
            alt='Volunteering'
            />
            
        </HStack>
        </VStack>
    </Center>
  );
}

export default About;
