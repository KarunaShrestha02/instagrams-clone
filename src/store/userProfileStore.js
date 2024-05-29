import {create} from "zustand";

const useUserProfileStore = create((set) => ({
  userProfile:null,
  setUserProfile:(userProfile)=> set({userProfile}),
    addpost: (post) => set(state => ({
      userProfile:{...state.userProfile,ppsts:[post.id,...state.user.userProfile.posts]}
    })),
    deletePost: (postId)=>
      set((state)=>({
        userProfile:{
          ...state.userProfile,
          posts: state.userProfile.posts.filter((id)=>id !== postId),

        },
      })),

  
}));

export default useUserProfileStore;