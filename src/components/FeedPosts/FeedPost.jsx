import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";


const FeedPost = ({post}) => {
  return (
    <>
   { /*<PostHeader post={post}  />*/}
    <Box my={2} borderRadius={4}
    overflow={"hidden"}> 
        <Image src={post.imgURL} alt={"FEED POST IMG"} />
        </Box>
         {/*<PostFooter username={username} />*/}
    </>
  ) ;
};

export default FeedPost;
