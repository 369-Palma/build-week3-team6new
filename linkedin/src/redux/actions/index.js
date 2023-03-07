export const GET_USERS = "GET_USERS";
export const GET_PROFILE = "GET_PROFILE";
export const GET_EXP = "GET_EXP";
export const DELETE_EXP = "DELETE_EXP";
export const GET_POSTS = "GET_POSTS";
export const POST_POSTS = "POST_POSTS";
export const GET_DATA_LOADING_ON = "GET_DATA_LOADING_ON";
export const GET_DATA_LOADING_OFF = "GET_DATA_LOADING_OFF";

const baseline = "https://striveschool-api.herokuapp.com/api/profile/";
const postBaseline = "https://striveschool-api.herokuapp.com/api/posts/";

// const REACT_APP_API_KEY_PALMA = process.env.REACT_APP_API_KEY_PALMA;
const REACT_APP_API_KEY_GIACOMO = process.env.REACT_APP_API_KEY_GIACOMO;
/* const REACT_APP_API_KEY_MICHELA = process.env.REACT_APP_API_KEY_MICHELA;
const REACT_APP_API_KEY_FELICIANO = process.env.REACT_APP_API_KEY_FELICIANO;
const REACT_APP_API_KEY_CARLOS = process.env.REACT_APP_API_KEY_CARLOS; */

export const fetchProfiles = (query) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_DATA_LOADING_ON,
      });

      const res = await fetch(baseline + query, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: REACT_APP_API_KEY_GIACOMO,
        },
      });
      if (res.ok) {
        const dataUsers = await res.json();

        dispatch({
          type: GET_USERS,
          payload: dataUsers,
        });
      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: GET_DATA_LOADING_OFF,
      });
    }
  };
};

export const fetchUser = (query) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_DATA_LOADING_ON,
      });
      const res = await fetch(baseline + query, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: REACT_APP_API_KEY_GIACOMO,
        },
      });
      if (res.ok) {
        const dataUsers = await res.json();
        dispatch({
          type: GET_PROFILE,
          payload: dataUsers,
        });
      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: GET_DATA_LOADING_OFF,
      });
    }
  };
};

export const fetchExp = (exp) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_DATA_LOADING_ON,
      });
      const res = await fetch(baseline + "63fc702df193e60013807f5a/" + exp, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: REACT_APP_API_KEY_GIACOMO,
        },
      });
      if (res.ok) {
        const dataUsers = await res.json();

        dispatch({
          type: GET_EXP,
          payload: dataUsers,
        });
      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: GET_DATA_LOADING_OFF,
      });
    }
  };
};

export const deleteExp = (expid) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/63fc702df193e60013807f5a/experiences/` + expid,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: REACT_APP_API_KEY_GIACOMO,
          },
        }
      );

      if (res.ok) {
        const dataUsers = await res.json();

        dispatch({
          type: DELETE_EXP,
          payload: dataUsers,
        });
      } else {
        console.log("Badoglio!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// export const postExp = (post) => {
//   return async (dispatch) => {
//     dispatch.preventDefault();
//     try {
//       const res = await fetch(baseline + "63fc702df193e60013807f5a/" + post, {
//         method: "POST",
//         body: "",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNzAyZGYxOTNlNjAwMTM4MDdmNWEiLCJpYXQiOjE2Nzc0ODgxNzMsImV4cCI6MTY3ODY5Nzc3M30.v4RvPvwPrNqMf1jT8g6IRxX0XpB361UjIv66UzPhULY",
//         },
//       });
//       if (res.ok) {
//         const dataUsers = await res.json();

//         dispatch({
//           type: POST_EXP,
//           payload: dataUsers,
//         });

//       } else {
//         console.log("Badoglio!");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_DATA_LOADING_ON,
      });
      const res = await fetch(postBaseline, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: REACT_APP_API_KEY_GIACOMO,
        },
      });
      if (res.ok) {
        const dataPosts = await res.json();

        dispatch({
          type: GET_POSTS,
          payload: dataPosts.reverse().slice(0, 20),
        });
      } else {
        console.log("Error fetching posts!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: GET_DATA_LOADING_OFF,
      });
    }
  };
};

export const fetchPostsSearch = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(postBaseline, {
        method: "POST",
        /* body: JSON.stringify(newPostToSend) */
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: REACT_APP_API_KEY_GIACOMO,
        },
      });
      if (res.ok) {
        const dataPosts = await res.json();

        dispatch({
          type: POST_POSTS,
          payload: dataPosts,
        });
      } else {
        console.log("Error fetching posts!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// FETCH COMMENTI
const REACT_APP_API_KEY_COMMENT = process.env.REACT_APP_API_KEY_COMMENT;
