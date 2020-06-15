const initialState = {
  loading: false,
  posts: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "add_posts":
      return { ...state, 
        posts: [...state.posts, ...payload],
        loading: false };
   
        // payload here is {
        //   postName: bla bla,
        //   postContent: bla bal ,
        //   postLikes: 200,
        //   postComments: [blablabla]
        // }



   
      case "loading":
      return { 
        ...state, loading: payload
      };

    default:
      return state;
  }
};
