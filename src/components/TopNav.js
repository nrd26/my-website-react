import { Text, Flex, useColorMode, Button, Image, Stack, Spacer, Link, useDisclosure, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalOverlay  } from "@chakra-ui/react"
import { useEffect } from "react";
import { FaMoon, FaSun, FaDownload } from "react-icons/fa"
import { Outlet } from "react-router-dom";

function TopNav() {
    const { colorMode, toggleColorMode } = useColorMode();
    useEffect(() => {
      onOpen()
     });

   const { isOpen, onOpen} = useDisclosure()
    return (
      <>
      <Modal size={'xl'} isCentered isOpen={isOpen}>
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px)'
        />
        <ModalContent>
          <ModalHeader>Under Development</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>This site is currently under development. Please click on 
            the button below to be redirected to the previous version</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>{window.location.replace("https://diasnihal-v1.netlify.app/");}}>Go to site</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
      position={'sticky'}
      top={'0'}
      backdropFilter='blur(20px)'
      bgColor={"dark-lg"}
      boxShadow={colorMode === 'light' ? "none" : "dark-lg"} 
      // borderRadius="80px"
      >
        {/* <Text>Nihal</Text> */}
        <Image
          boxSize='50px'
          objectFit='cover'
          src={colorMode === 'light' ? '/1.png' : '2.png'}
          alt='logo'
        />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Spacer/>
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem>
          <Button 
          // borderColor={colorMode==='light' ? 'black' : 'white'} 
          leftIcon={<FaDownload />} 
          // variant='outline'
          >
          <a href='/NihalRianDias.pdf' download>Resume</a>   
            </Button>
          </MenuItem>
          <MenuItem><Link to="/">Home</Link></MenuItem>
          <MenuItem to="about">About</MenuItem>
          <MenuItem to="workshops">Workshops</MenuItem>
          <MenuItem to="contact">Contact</MenuItem>
          <Button mr = {'10'} onClick={toggleColorMode}>{colorMode === 'dark' ?  <FaSun /> : <FaMoon />}</Button>
          ...
        </Stack>
      </Flex>

      {/* Renders the current selected component */}
      <Outlet />
      </>
    );
  }

  export default TopNav;

  const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    )
  }