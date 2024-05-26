import {create} from "zustand";

const useUserProfileStore = create((set) => ({
  userProfile:null,
  setUserProfile:(userProfile)=> set({userProfile}),
    addpost: (post) => set(state => ({
      userProfile:{...state.userProfile,ppsts:[post.id,...state.user.userProfile.posts]}
    }))
  
}));

export default useUserProfileStore;