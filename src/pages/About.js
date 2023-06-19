import { Box, Button, Center, Collapse, Heading, HStack, Image, ListItem, Spacer, Text, UnorderedList, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"
import React from "react";

function About() {
    const { colorMode } = useColorMode('dark');
    const recOnLinkedin = useColorModeValue('blue','#34ebde')

    const [showVolunteer, setShowVolunteer] = React.useState(false)
    const handleToggleVolunteer = () => setShowVolunteer(!showVolunteer)

    const [showV1, setShowV1] = React.useState(false)
    const handleToggleV1 = () => setShowV1(!showV1)

    const [showV2, setShowV2] = React.useState(false)
    const handleToggleV2 = () => setShowV2(!showV2)

    const [showV3, setShowV3] = React.useState(false)
    const handleToggleV3 = () => setShowV3(!showV3)

    const [showV4, setShowV4] = React.useState(false)
    const handleToggleV4 = () => setShowV4(!showV4)

  return (
    <Center>
        <VStack spacing={200} mb={10}>
        <HStack height={window.innerHeight}>
        <Image
            borderRadius='full'
            boxSize='xs'
            src='/About.svg'
            alt='About me'
            />
            <Spacer></Spacer>
            <Box   
                boxShadow="dark-lg"
                borderRadius="50px"
                alignSelf={'center'}
                mx={8}
                px={10} py={5}>
                     <VStack align={'flex-start'}>
                <Heading size={'2xl'}>About me</Heading>
                <Spacer></Spacer>
                <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                I love to work on projects where I can not only leverage my Machine Learning and 
                Software Development skills to build intelligent and accessible software solutions in 
                the form of websites and/or mobile apps but also learn something new and exciting.
                </Text>
                <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                Aside from empowering and mentoring my fellow students while being a Microsoft Learn 
                Student Ambassador, I enjoy writing songs as well as novels & tech articles and teaching 
                students how to play the piano.
                </Text>

                </VStack>
                </Box>
           
            
        </HStack>
        <VStack spacing={10}>
            <Center>
            <Heading size={'2xl'}>Education</Heading>
            </Center>
        <HStack>
        
            <VStack align={'flex-start'} spacing={10}>
            <Box   
                boxShadow="dark-lg"
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
                                <ListItem><Text fontWeight={'semibold'}>CGPA : 8.06</Text></ListItem>
                                <ListItem><Text fontWeight={'semibold'}>Minor Specialization : Big Data</Text></ListItem>
                            </UnorderedList>
                        
                        
                        </Text> 

                        </VStack>
                </Box>
                <Box   
                boxShadow="dark-lg"
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
                boxShadow="dark-lg"
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
        <VStack spacing={10}>
            <Center>
            <Heading size={'2xl'}>Volunteering</Heading>
            </Center>
        <HStack>
        
            <VStack align={'flex-start'} spacing={10}>
            <Box   
                boxShadow="dark-lg"
                borderRadius="50px"
                alignSelf={'center'}
                
                mx={8}
                px={10} py={5}>
                    <VStack align={'flex-start'} spacing={3}>
                    <Heading size = 'lg' maxWidth={['500']}>Microsoft Learn Student Ambassador - Beta</Heading>
                    <Heading size = 'md' maxWidth={['500']}>Microsoft Learn</Heading>
                        <Heading size={'md'} maxWidth={['400']} color={recOnLinkedin}>
                        08/20 - 05/23
                        </Heading>
                        <Text fontSize={'md'} maxWidth={['500']}>
                           
                            <Collapse in={showV1}>
                            <Text as={'i'} fontSize={'md'}>
                            Microsoft Learn Student Ambassadors are a global group of campus leaders who are 
                            eager to help fellow students, create robust tech communities and develop technical 
                            and career skills for the future.
                            </Text>
                            
                            <br/>
                            
                            
                            <Text fontSize={'md'}  fontWeight={'semibold'} maxWidth={['500']}>
                            As a Microsoft Learn Student Ambassador, I have
                            <UnorderedList>
                                <ListItem>Contributed to the Microsoft Docs website by co-authoring
                                     the 'Language Understanding in the Azure Health Bot' module in the Azure 
                                     Health Bot Learning Path.</ListItem>
                            <ListItem>Talked about Language Understanding in the Azure Health Bot in a 4 part 
                                video series on Microsoft Reactor. </ListItem>
                                <ListItem> Co-conducted the workshop, ' Microsoft Azure Core Services: Compute' which gave a brief introduction
                                     to Azure as well as Cloud Computing concepts and also included a demo on how to create a VM in Azure.
                                     </ListItem>
                                <ListItem>Co-conducted the workshop, ' Deploying Web Apps on the Cloud with Microsoft Azure' 
                                    which explained Cloud Computing concepts, and 
                                    included a demo on deploying a WordPress website on Azure and also a demo on how to 
                                    create a Movie Recommendation Web App on Azure. </ListItem>
                            </UnorderedList>
                            </Text>
                            </Collapse>
                            
                        <Button size='sm' onClick={handleToggleV1}
                        border={colorMode === 'light' ? '2px' : 'none'}
                        backgroundColor={colorMode==='light'? 'transparent': 'dark-lg'}
                        mt='1rem'>
                                    Show {showV1 ? 'less' : 'more'}
                                </Button>
                            
                        </Text> 

                        </VStack>
                </Box>
            <Box   
                boxShadow="dark-lg"
                borderRadius="50px"
                alignSelf={'center'}
                w={['400']}
                mx={8}
                px={10} py={5}>
                    <VStack align={'flex-start'} spacing={3}>
                    <Heading size = 'lg' 
                    w={['600']}
                    // maxWidth={['500']}
                    >Core Team Member</Heading>
                    <Heading size = 'md' 
                    // maxWidth={['500']}
                    w={['600']}
                    >Developer Student Clubs, MIT Manipal</Heading>
                        <Heading size={'md'} 
                        // maxWidth={['400']} 
                        w={['400']}
                        color={recOnLinkedin}>
                        10/20 - 05/21
                        </Heading>
                        <Text fontSize={'md'} 
                        // maxWidth={['500']}
                        w={['500']}
                        >
                            <Collapse in={showV2}>
                            <Text as='i' fontSize={'md'}>Google Developer Student Clubs (GDSC) are community 
                            groups for college and university students interested in Google developer technologies.
                            </Text>
                            
                            <br/>

                            
                            <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                            As a part of DSC, I have
                            <UnorderedList>
                                <ListItem>Co-conducted a workshop explaining Cloud Computing and VM Creation 
                            in GCP as part of the 30 days of GCP program during October, 2020</ListItem>
                            <ListItem>Established 
                            a partnership with Univ Ai to conduct a talk by Geoffrey Hinton on "Part-whole hierarchies 
                            in neural networks" as well as a series of AI hackathons.</ListItem>
                            </UnorderedList>
                            </Text>
                            </Collapse>
                        <Button size='sm' 
                        border={colorMode === 'light' ? '2px' : 'none'}
                        backgroundColor={colorMode==='light'? 'transparent': 'dark-lg'}
                        onClick={handleToggleV2} mt='1rem'>
                                    Show {showV2 ? 'less' : 'more'}
                                </Button>
                            
                        </Text> 

                        </VStack>
                </Box>
                
                <Collapse in={showVolunteer} animateOpacity>
                <Box   
                boxShadow="dark-lg"
                borderRadius="50px"
                alignSelf={'center'}
                mx={8}
                px={10} py={5}>
                    <VStack align={'flex-start'} spacing={3} width={['1000']}>
                    <Heading size = 'lg' maxWidth={['500']}>Star Volunteer</Heading>
                    <Heading size = 'md' maxWidth={['500']}>Revels, MIT Manipal</Heading>
                        <Heading size={'md'} maxWidth={['400']} color={recOnLinkedin}>
                        03/20
                        </Heading>
                        <Text fontSize={'md'} maxWidth={['500']}>
                        <Collapse in={showV3}>
                            <Text as='i' fontSize={'md'}>Revels is Manipal Institute of 
                            Technology's annual national-level Sports and Cultural festival.
                            </Text><br/>
                            
                            <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                            At Revels, I was able to generate a sevenfold increase in participation to 
                           events of the Animania category through a dedicated and target-based marketing strategy.
                           </Text>
                            </Collapse>
                           
                            <Button size='sm' 
                            border={colorMode === 'light' ? '2px' : 'none'}
                            backgroundColor={colorMode==='light'? 'transparent': 'dark-lg'}
                            onClick={handleToggleV3} mt='1rem'>
                                    Show {showV3 ? 'less' : 'more'}
                                </Button>
                           
                        </Text> 
                        </VStack>
                </Box>
                <Box   
                boxShadow="dark-lg"
                borderRadius="50px"
                alignSelf={'center'}
                mx={8}
                mt={8}
                mb={12}
                px={10} py={5}>
                    <VStack align={'flex-start'} spacing={3} width={['1000']}>
                    <Heading size = 'lg' maxWidth={['500']}>Volunteer</Heading>
                    <Heading size = 'md' maxWidth={['500']}>IOSD, MIT Manipal</Heading>
                        <Heading size={'md'} maxWidth={['400']} color={recOnLinkedin}>
                        03/20
                        </Heading>
                        <Text fontSize={'md'} maxWidth={['500']}>
                        <Collapse in={showV4}>
                        <Text as='i' fontSize={'sm'}>
                        IOSD is an innovative collective of like-minded folks making useful and enduring 
                        technology products
                            </Text>
                            <br/>
                            <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                            As a part of IOSD, I helped conduct an event that included talks from tech industry greats 
                            Miri Rodrigues (Head of Global Internships, Microsoft) and Tanay Pratap (Software Engineer, 
                            Microsoft) and also assisted participants with technical difficulties/doubts that they had 
                            regarding OpenCV, Object Detection and Linux during a technical ML workshop at the same.
                            </Text>
                            </Collapse>
                            
                            <Button size='sm'
                            border={colorMode === 'light' ? '2px' : 'none'}
                            backgroundColor={colorMode==='light'? 'transparent': 'dark-lg'}
                             onClick={handleToggleV4} mt='1rem'>
                                    Show {showV4 ? 'less' : 'more'}
                                </Button>
                           
                        </Text> 
                        </VStack>
                </Box>
                </Collapse>
                <Button alignSelf={'center'}
                border={colorMode === 'light' ? '2px' : 'none'}
                backgroundColor={colorMode==='light'? 'transparent': 'dark-lg'}
                 onClick={handleToggleVolunteer}>Show {showVolunteer ? 'less' : 'more'}</Button>
                </VStack>
                <Spacer/>
                <Image
            borderRadius='full'
            boxSize='xs'
            src='/Volunteering.svg'
            alt='Volunteering'
            />
            
        </HStack>
        </VStack>
        
        </VStack>
    </Center>
  );
}

export default About;
