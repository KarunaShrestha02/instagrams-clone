import { Box, Flex } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar";


const PageLayout = ({children}) => {
    const {pathname}= useLocation();
    const [user, loading, error] = useAuthState(auth);
    const canRenderSidebar =pathname !== "/auth" && user;
    const canRenderNavbar= !user && !loading && pathname!== "/auth";
  return (
    <Flex flexDir={canRenderNavbar ? "column" :" row"}>
        {/*sidebar on the left */}
        {canRenderSidebar ? (
            <Box w={{base: "70px" , md:"240px"}}>
                <Sidebar/>
            </Box>
        ):null} 
        {/*Navbar */}
        {canRenderNavbar ? <Navbar /> :null}
        {/*the page content on the right */}
        <Box flex={1}  mx={"auto"}>
            {children}
        </Box>
    </Flex>
  );
};

export default PageLayout;
