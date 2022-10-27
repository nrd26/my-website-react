import { Box, Center, Heading, HStack, Image, ListItem, Spacer, Text, UnorderedList, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"

function About() {
    const { colorMode } = useColorMode('dark');
    const recOnLinkedin = useColorModeValue('blue','#34ebde')

  return (
    <Center>
        <VStack spacing={10}>
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
        <VStack spacing={10}>
            <Center>
            <Heading size={'2xl'}>Education</Heading>
            </Center>
        <HStack>
        
            <VStack align={'flex-start'} spacing={10}>
            <Box   
                boxShadow={colorMode === 'light' ? "1px 3px 5px 2px #dddddd" : "dark-lg"}
                borderRadius="50px"
                alignSelf={'center'}
                mx={8}
                px={10} py={5}>
                    <VStack align={'flex-start'} spacing={3}>
                    <Heading size = 'lg' maxWidth={['500']}>B. Tech, Computer and Communication Engineering</Heading>
                    <Heading size = 'md' maxWidth={['500']}>Manipal Institute of Technology, Manipal</Heading>
                        <Heading size={'md'} maxWidth={['400']} color={recOnLinkedin}>
                        07/19 - Present
                        </Heading>
                        <Text fontSize={'md'} maxWidth={['500']}>
                            <UnorderedList>
                                <ListItem><Text as={'b'}>CGPA</Text>: 8.06</ListItem>
                                <ListItem><Text as={'b'}>Minor Specialization</Text>: Big Data</ListItem>
                            </UnorderedList>
                        
                        
                        </Text> 

                        </VStack>
                </Box>
                <Box   
                boxShadow={colorMode === 'light' ? "1px 3px 5px 2px #dddddd" : "dark-lg"}
                borderRadius="50px"
                alignSelf={'center'}
                mx={8}
                px={10} py={5} pr={'200'}>
                    <VStack align={'flex-start'} spacing={3} width={['1000']}>
                    <Heading size = 'lg' maxWidth={['500']}>Classes 1-12</Heading>
                    <Heading size = 'md' maxWidth={['500']}>St. Aloysius Institutions, Mangalore</Heading>
                        <Heading size={'md'} maxWidth={['400']} color={recOnLinkedin}>
                        2007 - 2019
                        </Heading>
                        </VStack>
                </Box>

                </VStack>
                <Spacer/>
                <Image
            borderRadius='full'
            boxSize='xs'
            src='/Education.svg'
            alt='Education'
            />
            
        </HStack>
        </VStack>
        <VStack spacing={6}>
            <Center>
            <Heading size={'2xl'}>Research</Heading>
            </Center>
        <HStack>
        <Image
            borderRadius='full'
            boxSize='xs'
            src='/Research.svg'
            alt='Research'
            />
            <Spacer></Spacer>
            <VStack align={'flex-start'}>
            <Box   
                boxShadow={colorMode === 'light' ? "1px 3px 5px 2px #dddddd" : "dark-lg"}
                borderRadius="50px"
                alignSelf={'center'}
                mx={8}
                px={10} py={5}>
                    <VStack align={'flex-start'} spacing={3}>
                    <Heading size = 'lg' maxWidth={['500']}>Grow-IoT (smart analytics app 
                    for comprehensive plant health analysis and remote farm monitoring using smart sensors)
                    </Heading>
                        <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                        Published in 'Journal of Physics: Conference Series' under licence by IOP Publishing Ltd
                        </Text>
                        <Text fontSize={'md'} color={recOnLinkedin} fontWeight={'semibold'} maxWidth={['500']}>
                        <Link href='https://iopscience.iop.org/article/10.1088/1742-6596/2161/1/012059' isExternal>
                        <HStack>
                            <Text fontSize={'md'} color={recOnLinkedin} fontWeight={'semibold'} maxWidth={['500']}>
                            View the Research Paper
                                </Text> 
                            <FaArrowRight/>
                                </HStack>
                        </Link>
                        </Text>
                        </VStack>
                </Box>

                </VStack>
            
        </HStack>
        </VStack>
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
