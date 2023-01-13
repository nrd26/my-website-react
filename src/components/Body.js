import { Text, useColorMode, Button, Image, Spacer, Link, Center, Box, HStack, Heading, VStack, SimpleGrid, useColorModeValue, UnorderedList, ListItem, Collapse } from "@chakra-ui/react"
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPenSquare, FaMicrosoft } from "react-icons/fa"

function Body() {
    const { colorMode } = useColorMode('dark');
    const recOnLinkedin = useColorModeValue('blue','#34ebde')
    const [show, setShow] = React.useState(false)

    const handleToggle = () => setShow(!show)
    
    const [showExp, setShowExp] = React.useState(false)

  const handleToggleExp = () => setShowExp(!showExp)
    // const timeLine = useColorModeValue('blue','#34ebde')
    // const githubButton = useColorModeValue('black', 'white')
    return (
      <Center pb={100} w = {'100%'} h={'100%'}>
        <VStack >
        <HStack height={window.innerHeight-50}>
        <Image
            borderRadius='full'
            boxSize='xs'
            src='/nihal.png'
            alt='Nihal Rian Dias'
            />
            <Spacer></Spacer>
            <VStack spacing={'50'} align={'flex-start'}>
                <VStack align={'flex-start'}>
                <Heading size={'4xl'}>Nihal Rian Dias</Heading>
                <Heading size='2xl'>
                    Software Developer
                </Heading>
                </VStack>
                <HStack spacing={'8'}>
                
                <Link href='mailto:nihaldias261@gmail.com' isExternal>
                <Button leftIcon={<FaEnvelope />}>
                    Email
                    </Button>
                </Link>
                
                
                <Link href='https://www.linkedin.com/in/nihal-dias/' isExternal>
                <Button  leftIcon={<FaLinkedin />}>
                    LinkedIn
                    </Button>
                    </Link>
                
                
                <Link href='https://www.github.com/nrd26' isExternal>
                <Button leftIcon={<FaGithub />}>
                    GitHub
                    </Button>
                    </Link>
                
                
                <Link href='https://www.medium.com/nihaldias' isExternal>
                <Button leftIcon={<FaPenSquare />}>
                    Blog
                    </Button>
                    </Link>
                
                
                <Link href='https://twitter.com/nekosenpai2601' isExternal>
                <Button leftIcon={<FaTwitter />}>
                    Twitter
                    </Button>
                    </Link>
                
                </HStack>

                </VStack>
            
        </HStack>
        <VStack spacing={200}>
        
        <VStack spacing={10}>
        <Box>
        <Center mb={'10'}>
            <Heading size={'2xl'}>
                What people say
            </Heading>
        </Center>
        <Box   
        boxShadow={colorMode === 'light' ? "dark-lg" : "dark-lg"}
        borderRadius="50px"
        // border={colorMode === 'light' ? '4px' : 'none'}
        // backgroundColor={colorMode === 'light' ? 'white' : 'dark-lg'}
        alignSelf={'center'}
        px={10} py={5}>
            <HStack>
                <VStack align={'center'}>
                    <Image
                        borderRadius='full'
                        boxSize='200px'
                        src='/lee_stot.jfif'
                        alt='Lee Stot'
                        />
                        <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                            Lee Stott
                            </Text>
                            <Text fontSize={'sm'} align={'center'} fontWeight={'semibold'} maxWidth={['500']}>
                            Principal Cloud Advocate Manager <br/> Microsoft
                            </Text>
                </VStack>
            <Spacer/> <Spacer/><Spacer/>
            <VStack align={'flex-start'}>
                <Text fontSize={'md'}  fontWeight={'semibold'} maxWidth={['500']}>
                "Nihal is a highly capable individual, able to tackle complex and demanding challenges.
                His ability to think on his feet whilst working in high pressure situations made him a 
                greatly valued member of the Microsoft Azure Health Bot, Microsoft Learn Module project 
                development team.
                </Text>
                <Text fontSize={'md'}  fontWeight={'semibold'} maxWidth={['500']}>
                Nihal's activity was to lead the development of content for the Microsoft Learn Module 
                and Learn Live Webinar. Nihal completed the work as a project within the Microsoft Learn 
                Ambassadors Program, whilst studying for his degree.
                </Text>
                <Text fontSize={'md'}  fontWeight={'semibold'} maxWidth={['500']}>
                I have no hesitation in recommending 
                him and wish him every success in his degree results."
                </Text>
                <Text fontSize={'md'} color={recOnLinkedin} fontWeight={'semibold'} maxWidth={['500']}>
                <Link href='https://www.linkedin.com/in/nihal-dias/' isExternal>
                (Recommendation given on LinkedIn)
                </Link>
                </Text>

                </VStack>
            
        </HStack>
        </Box>
        </Box>


        <SimpleGrid columns={2} spacing={10}>

        <Box   
        boxShadow={colorMode === 'light' ? "dark-lg": "dark-lg"}
        borderRadius="50px"
        // border={colorMode === 'light' ? '2px' : 'none'}
        alignSelf={'center'}
        px={10} py={5}>
            <HStack>
                <VStack align={'center'}>
                    <Image
                        borderRadius='full'
                        boxSize='180px'
                        src='/tarun_aggarwal.jpg'
                        alt='Tarun Aggarwal'
                        />
                        <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                            Tarun Aggarwal
                            </Text>
                            <Text fontSize={'sm'} align={'center'} fontWeight={'semibold'} maxWidth={['500']}>
                            CEO, 60mm
                            </Text>
                </VStack>
            <Spacer></Spacer>
            <VStack align={'flex-start'}>
                <Text fontSize={'md'}  fontWeight={'semibold'} maxWidth={['400']}>
                "Nihal is a dedicated, self motivated and hardworking individual. 
                He worked for a project at a very native stage and has proven to 
                be resourceful as an individual as well as in a team. 
                He is creative and knows his work well. I wish him all the best 
                for all of his future endeavors!"
                </Text>
                <Text fontSize={'md'} color={recOnLinkedin} fontWeight={'semibold'} maxWidth={['500']}>
                <Link href='https://www.linkedin.com/in/nihal-dias/' isExternal>
                (Recommendation given on LinkedIn)
                </Link>
                </Text>

                </VStack>
            
        </HStack>
        </Box>

        <Box   
        boxShadow={colorMode === 'light' ? "dark-lg" : "dark-lg"}
        borderRadius="50px"
        alignSelf={'center'}
        px={10} py={5}>
            <HStack>
                <VStack align={'center'}>
                    <Image
                        borderRadius='full'
                        boxSize='180px'
                        src='/arjun_hariharan.jfif'
                        alt='Arjun Hariharan'
                        />
                        <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                        Arjun Hariharan
                            </Text>
                            <Text fontSize={'sm'} align={'center'} fontWeight={'semibold'} maxWidth={['500']}>
                            COO,
                             ALLSKIER Solutions Pvt. Ltd.
                            </Text>
                </VStack>
            <Spacer></Spacer>
            <VStack align={'flex-start'}>
                <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['400']}>
                "A passionate learner and a hardworking member. Has a meticulous work ethic 
                and a systematic work plan. Was a great experience working with Nihal. 
                All the best for your future endeavors!"
                </Text>
                <Text fontSize={'md'} color={recOnLinkedin} fontWeight={'semibold'} maxWidth={['500']}>
                <Link href='https://www.linkedin.com/in/nihal-dias/' isExternal>
                (Recommendation given on LinkedIn)
                </Link>
                </Text>

                </VStack>
            
        </HStack>
        </Box>
        </SimpleGrid>
        </VStack>
        
        <VStack spacing={10}>
            <Center>
            <Heading size={'2xl'}>Experience</Heading>
            </Center>
            <HStack>
 
                <Image
                alignSelf={'center'}
            borderRadius='full'
            boxSize='md'
            src='/Experience.svg'
            alt='Experience'
            />
        
            <Spacer></Spacer>
            <VStack align={'flex-start'} spacing={6}>
            <Box   
                boxShadow="dark-lg"
                borderRadius="50px"
                alignSelf={'center'}
                mx={8}
                px={10} py={5}>
                    <VStack align={'flex-start'} spacing={3}>
                    <Heading size = 'lg'>SDE Intern, Groupot</Heading>
                        <Heading size={'md'} maxWidth={['400']} color={recOnLinkedin}>
                        06/22 - Present
                        </Heading>
                        <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                        As part of Groupot, I work on the full stack development of their software product
                        </Text> 

                        </VStack>
                </Box>
                <Box   
                boxShadow="dark-lg"
                borderRadius="50px"
                alignSelf={'center'}
                mx={8}
                px={10} py={5}>
                    <VStack align={'flex-start'} spacing={3}>
                    <Heading size = 'lg'>Intern - IT, 60mm</Heading>
                        <Heading size={'md'} maxWidth={['400']} color={recOnLinkedin}>
                        09/21 - 03/22
                        </Heading>
                        <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                        As a part of 60mm I worked on creating and testing scalable and 
                        accessible software designed using Flutter and given functionality 
                        through NodeJS and Firebase
                        </Text> 

                        </VStack>
                </Box>
                <Box   
                boxShadow="dark-lg"
                borderRadius="50px"
                alignSelf={'center'}
                mx={8}
                px={10} py={5}>
                    <VStack align={'flex-start'} spacing={3}>
                    <Heading size = 'lg' maxWidth={['400']}>Flutter UI Developer, ALLSKIER Solutions Pvt Ltd</Heading>
                        <Heading size={'md'} maxWidth={['400']} color={recOnLinkedin}>
                        07/21 - 09/21
                        </Heading>
                        <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                        <Collapse startingHeight={25} in={show}>
                        As a part of ALLSKIER I have,
                        
                        <UnorderedList>
                            <ListItem>
                            Worked on building cross-platform IoT based apps 
                            that interface with hardware to create fully-fledged 
                            Edge Computing solutions.
                            </ListItem>
                            <ListItem>
                            Conducted a webinar, "Fly with Flutter" where I explained 
                            the basics of Flutter and App Development.
                                </ListItem>
                            <ListItem>
                            Conducted a webinar, "Cloud Computing with Microsoft Azure" 
                            as part of their "7 days 7 stories" event
                            where I explained the basics of Cloud Computing and Creating 
                            a VM on Microsoft Azure.
                                </ListItem>
                            <ListItem>
                            Co-authored a research paper titled "Grow-IoT (smart analytics
                            app for comprehensive plant health analysis and remote farm 
                            monitoring using smart sensors)", which was presented at the 
                            International Conference on Artificial Intelligence, Computational 
                            Electronics and Communication System (AICECS 2021) and was 
                            published in IOP: Journal of Physics, a conference proceedings 
                            journal by the Institute of Physics, United Kingdom.
                                </ListItem>
                        </UnorderedList>
                        </Collapse>
                        <Button size='sm'
                        border={colorMode === 'light' ? '2px' : 'none'}
                        backgroundColor={colorMode==='light'? 'transparent': 'dark-lg'}
                        onClick={handleToggle} mt='1rem'>
                                    Show {show ? 'less' : 'more'}
                                </Button>
                        </Text> 

                        </VStack>
                </Box>
                
               
      <Collapse in={showExp} animateOpacity>
      <Box   
                boxShadow="dark-lg"
                borderRadius="50px"
                alignSelf={'center'}
                mx={8}
                mt={3}
                mb={12}
                px={10} py={5}>
                    <VStack align={'flex-start'} spacing={3}>
                    <Heading size = 'lg' maxWidth={['500']}>AI Team Member, RUGVED Systems</Heading>
                        <Heading size={'md'} maxWidth={['400']} color={recOnLinkedin}>
                        2019 - 2020
                        </Heading>
                        <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                        RUGVED is a Student Project recognized by MIT Manipal, that works on 
                        Autonomous Robotics. I worked on implementing Computer Vision as well as 
                        Mapping in autonomous robots.
                        </Text> 

                        </VStack>
                </Box>
      </Collapse>
                <Button alignSelf={'center'}
                border={colorMode === 'light' ? '2px' : 'none'}
                backgroundColor={colorMode==='light'? 'transparent': 'dark-lg'}
                 onClick={handleToggleExp}>Show {showExp ? 'less' : 'more'}</Button>
                </VStack>
            
        </HStack>
        </VStack>
        
        <HStack>
        
            <VStack align={'flex-start'}>
                <Heading size={'2xl'}>Skills</Heading>
                <Spacer></Spacer>
                <Text maxWidth={['500']}>
                I love to work on projects where I can not only leverage my Machine Learning and 
                Software Development skills to build intelligent and accessible software solutions in 
                the form of websites and/or mobile apps but also learn something new and exciting.{"\n"}
                Aside from empowering and mentoring my fellow students while being a Microsoft Learn 
                Student Ambassador, I enjoy writing songs as well as novels & tech articles and teaching 
                students how to play the piano.{'\n'}
                I'm also skilled in French with a DELF A1 Certification awarded by CIEP.
                </Text>

                </VStack>
                <Spacer></Spacer>
                <Image
            borderRadius='full'
            boxSize='xs'
            src='/Skills.svg'
            alt='Skills'
            />
            
            
        </HStack>

        <VStack spacing={10}>
            <Center>
            <Heading size={'2xl'}>Projects</Heading>
            </Center>
            <HStack>
 
                <Image
                alignSelf={'center'}
            borderRadius='full'
            boxSize='md'
            src='/Projects.svg'
            alt='Projects'
            />
        
            <Spacer></Spacer>
            <VStack align={'flex-start'} spacing={6}>
            <Box   
                boxShadow="dark-lg"
                borderRadius="50px"
                alignSelf={'center'}
                mx={8}
                px={10} py={5}>
                    <VStack align={'flex-start'} spacing={3}>
                    <Heading size = 'lg' maxWidth={['400']}>Microsoft Learn module for the Azure Health Bot</Heading>
                        <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                        I co-wrote the 'Language understanding in Azure Health Bot' module for the 'Create intelligent
                        health bots with Azure Health Bot' Learning path on the Microsoft Learn website
                        </Text>
                        <Text fontSize={'md'} color={recOnLinkedin} fontWeight={'semibold'} maxWidth={['500']}>
                        <Link href='https://docs.microsoft.com/learn/modules/health-bot-language-understanding/' isExternal>
                        <HStack>
                            <Text fontSize={'md'} color={recOnLinkedin} fontWeight={'semibold'} maxWidth={['500']}>
                            View the module on Microsoft Learn
                                </Text> 
                                <FaMicrosoft />
                                </HStack>
                        </Link>
                        </Text>
                        </VStack>
                </Box>
                <Box   
                boxShadow="dark-lg"
                borderRadius="50px"
                alignSelf={'center'}
                mx={8}
                px={10} py={5}>
                    <VStack align={'flex-start'} spacing={3}>
                    <Heading size = 'lg' maxWidth={['400']}>Donate Life</Heading>
                        <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                        Donate Life is a cross-platform mobile app built using Flutter that helps make 
                        blood donation an easier and more accessible experience. The flutter_tts library 
                        for text to speech conversion is used to make the app more accessible.
                        </Text>
                        <Text fontSize={'md'} color={recOnLinkedin} fontWeight={'semibold'} maxWidth={['500']}>
                        <Link href='https://github.com/nrd26/donate_life' isExternal>
                        <HStack>
                            <Text fontSize={'md'} color={recOnLinkedin} fontWeight={'semibold'} maxWidth={['500']}>
                                View the project on GitHub
                                </Text> 
                                <FaGithub />
                                </HStack>
                        </Link>
                        </Text>

                        </VStack>
                </Box>
                <Box   
                boxShadow="dark-lg"
                borderRadius="50px"
                alignSelf={'center'}
                mx={8}
                px={10} py={5}>
                    <VStack align={'flex-start'} spacing={3}>
                    <Heading size = 'lg' maxWidth={['400']}>Neko Eats</Heading>
                        <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                        A cross-platform, customizable mobile app built using Flutter that 
                        aims to prevent customers from paying extra and restaurant owners 
                        from earning less due to intermediary costs
                        </Text>
                        <Text fontSize={'md'} color={recOnLinkedin} fontWeight={'semibold'} maxWidth={['500']}>
                        <Link href='https://github.com/nrd26/Neko-Eats' isExternal>
                        <HStack>
                            <Text fontSize={'md'} color={recOnLinkedin} fontWeight={'semibold'} maxWidth={['500']}>
                                View the project on GitHub
                                </Text> 
                                <FaGithub />
                                </HStack>
                        </Link>
                        </Text>

                        </VStack>
                </Box>
                
               
      <Collapse in={showExp} animateOpacity>
      <Box   
                boxShadow="dark-lg"
                borderRadius="50px"
                alignSelf={'center'}
                mx={8}
                mt={3}
                mb={12}
                px={10} py={5}>
                    <VStack align={'flex-start'} spacing={3}>
                    <Heading size = 'lg' maxWidth={['400']}>Movie Recommendation System Web App</Heading>
                        <Text fontSize={'md'} fontWeight={'semibold'} maxWidth={['500']}>
                        I built a content-based movie recommendation system that implements a TF-IDF 
                        Vectorizer to predict related movies based on metadata and hosted it on Microsoft 
                        Azure as a web app using the Azure App Service. The web app is built using Flask 
                        for the backend, Python for prediction and HTML, CSS and Jinja for the frontend.
                        </Text>
                        <Text fontSize={'md'} color={recOnLinkedin} fontWeight={'semibold'} maxWidth={['500']}>
                        <Link href='https://github.com/nrd26/Recommender-Web-App' isExternal>
                        <HStack>
                            <Text fontSize={'md'} color={recOnLinkedin} fontWeight={'semibold'} maxWidth={['500']}>
                                View the project on GitHub
                                </Text> 
                                <FaGithub />
                                </HStack>
                        </Link>
                        </Text>

                        </VStack>
                </Box>
      </Collapse>
                <Button 
                alignSelf={'center'} 
                onClick={handleToggleExp}
                border={colorMode === 'light' ? '2px' : 'none'}
                        backgroundColor={colorMode==='light'? 'transparent': 'dark-lg'}
                >
                    Show {showExp ? 'less' : 'more'}
                </Button>
                </VStack>
            
        </HStack>
        </VStack>
        </VStack>
        </VStack>
      </Center>
    );
  }

  export default Body;