import { useToast } from "@chakra-ui/react";


const useShowToast = () => {
    
        const toast= useToast()
    const showToast= (title, description, status) => {
        toast({
            title: 'Error',
            description: description,
            status:status,
            duration: 3000,
            isClosable:true,
        })
    }
  return showToast;
    
  
}

export default useShowToast;