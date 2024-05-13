import React, { useEffect, useState } from 'react'
import useShowToast from './useShowToast';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useGetUserProfileByUsername = () => {
  const [isLoading,setIsLoading] =useState(true);
  const showToast=useShowToast;

  useEffect(() =>{
    const getUserProfile = async()=> {
      setIsLoading(true)
      try{
        const g=query(collection(firestore,"users"),where("username","==",username));
        const querySnapshot =await getDocs(q);

        if(querySnapshot.empty) return setUserP(null);

      }
      catch(error)
      {
        showToast('Error',error.message,'error');
      }
    }
      getUserProfile()
  },[])

  }
 

export default useGetUserProfileByUsername;