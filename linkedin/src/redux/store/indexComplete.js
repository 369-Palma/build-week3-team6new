// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { encryptTransform } from "redux-persist-transform-encrypt";

// import usersReducer from "../reducers/usersReducer";
// import profileReducer from "../reducers/profileReducer";
// import experienceReducer from "../reducers/experienceReducer";
// import postsReducer from "../reducers/postsReducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   transforms: [
//     encryptTransform({
//       secretKey: process.env.REACT_APP_PERSIST_KEY,
//     }),
//   ],
// };

// const wholeReducer = combineReducers({
//   users: usersReducer,
//   profile: profileReducer,
//   experience: experienceReducer,
//   posts: postsReducer,
// });

// const persReducer = persistReducer(persistConfig, wholeReducer);

// export const store = configureStore({
//   reducer: persReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);
