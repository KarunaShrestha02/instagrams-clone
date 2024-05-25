 import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';
import useGetSuggestedUsers from '../../hooks/usegetSuggestedUsers';
 
 const SuggestedUsers = () => {
    const {isLoading,suggestedUsers} =useGetSuggestedUsers();

    if(isLoading) return null;
   return ( <VStack py={8} px={6} gap={4}>
    <SuggestedHeader/>
    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
            See All
        </Text>
    </Flex>
    <SuggestedUser  name="Luke Davis" followers={2100} avatar='https://bit.ly/dan-baramov'/>
    <SuggestedUser name="Andy Gray" followers={540} avatar='https://bit.ly/ryan-florence' />
    <SuggestedUser name="Psikh Bogandov" followers={4000} avatar='https://bit.ly/code-beast'/>

    <Box fontSize={12} color={"gray.500"} mt={5} >
    @ 2024 Built By{" "}
    <Link href='https://www.youtube.com/@asaprogrammer' target='_blank' color="blue.500" fontSize={14}>
        Karuna Shrestha
    </Link>
    </Box>
    </VStack>
    
   );
 };
 
 export default SuggestedUsers;