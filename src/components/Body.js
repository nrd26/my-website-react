import { Text, useColorMode, Button, Image, Spacer, Link, Center, Box, HStack, Heading, VStack, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPenSquare } from "react-icons/fa"

function Body() {
    const { colorMode } = useColorMode('dark');
    const recOnLinkedin = useColorModeValue('blue','#34ebde')
    // const githubButton = useColorModeValue('black', 'white')
    return (
      <Center mt={'10'}>
        <VStack spacing={'100'}>
        <HStack>
        <Image
            borderRadius='full'
            boxSize='xs'
            src='/nihal.png'
            alt='Nihal Rian Dias'
            />
            <Spacer></Spacer>
            <VStack spacing={'10'} align={'flex-start'}>
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
        <Box>
        <Center mb={'10'}>
            <Heading>
                What people say
            </Heading>
        </Center>
        <Box   
        boxShadow={colorMode === 'light' ? "1px 3px 5px 2px #dddddd" : "dark-lg"}
        borderRadius="50px"
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
                            Principal Cloud Advocate Manager, Microsoft
                            </Text>
                </VStack>
            <Spacer></Spacer>
            <VStack align={'flex-start'}>
                <Text fontSize={'md'} fontStyle={'italic'} maxWidth={['500']}>
                "Nihal is a highly capable individual, able to tackle complex and demanding challenges.
                His ability to think on his feet whilst working in high pressure situations made him a 
                greatly valued member of the Microsoft Azure Health Bot, Microsoft Learn Module project 
                development team.
                </Text>
                <Text fontSize={'md'} fontStyle={'italic'} maxWidth={['500']}>
                Nihal's activity was to lead the development of content for the Microsoft Learn Module 
                and Learn Live Webinar. Nihal completed the work as a project within the Microsoft Learn 
                Ambassadors Program, whilst studying for his degree.
                </Text>
                <Text fontSize={'md'} fontStyle={'italic'} maxWidth={['500']}>
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
        boxShadow={colorMode === 'light' ? "1px 3px 5px 2px #dddddd" : "dark-lg"}
        borderRadius="50px"
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
                <Text fontSize={'md'} fontStyle={'italic'} maxWidth={['400']}>
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
        boxShadow={colorMode === 'light' ? "1px 3px 5px 2px #dddddd" : "dark-lg"}
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
                <Text fontSize={'md'} fontStyle={'italic'} maxWidth={['400']}>
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
        
        <HStack>
        <Image
            borderRadius='full'
            boxSize='xs'
            src='/Experience.svg'
            alt='Experience'
            />
            <Spacer></Spacer>
            <VStack align={'flex-start'}>
                <Heading size={'2xl'}>Experience</Heading>
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

        <HStack>
        <Image
            borderRadius='full'
            boxSize='xs'
            src='/Projects.svg'
            alt='Projects'
            />
            <Spacer></Spacer>
            <VStack align={'flex-start'}>
                <Heading size={'2xl'}>Projects</Heading>
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
        </VStack>
      </Center>
    );
  }

  export default Body;