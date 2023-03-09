export const GET_USERS = "GET_USERS";
export const GET_PROFILE = "GET_PROFILE";
export const GET_EXP = "GET_EXP";
export const DELETE_EXP = "DELETE_EXP";
export const GET_POSTS = "GET_POSTS";
export const GET_COMM = "GET_COMM";
export const POST_POSTS = "POST_POSTS";
export const GET_DATA_LOADING_ON = "GET_DATA_LOADING_ON";
export const GET_DATA_LOADING_OFF = "GET_DATA_LOADING_OFF";

// const carlosCommKey =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U1MDVjYmEyNDc4ZDAwMTNhMDU4MjYiLCJpYXQiOjE2NzgxMTUwOTgsImV4cCI6MTY3OTMyNDY5OH0.dtkqts9v7fRlKAildn8gdlZAJssjYpLxahUDCmdzKv8";

const baseline = "https://striveschool-api.herokuapp.com/api/profile/";
const postBaseline = "https://striveschool-api.herokuapp.com/api/posts/";

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
          Authorization: process.env.REACT_APP_API_KEY,
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
          Authorization: process.env.REACT_APP_API_KEY,
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
          Authorization: process.env.REACT_APP_API_KEY,
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
        `https://striveschool-api.herokuapp.com/api/profile/6409fa9c61fa770013a78e42/experiences/` + expid,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
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

// COMMENTS FETCH
export const fetchComm = (comm) => {
  // const commId = ""
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_DATA_LOADING_ON,
      });
      const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + comm, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_API_KEY_COMMENT,
        },
      });
      if (res.ok) {
        const dataComm = await res.json();

        dispatch({
          type: GET_COMM,
          payload: dataComm,
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
// COMMENTS FETCH

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
          Authorization: process.env.REACT_APP_API_KEY,
        },
      });
      if (res.ok) {
        const dataPosts = await res.json();

        dispatch({
          type: GET_POSTS,
          payload: dataPosts.reverse().slice(0, 30),
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
          Authorization: process.env.REACT_APP_API_KEY,
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
