import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer"; 
import React from "react";
// all information i will find  https://www.youtube.com/watch?v=pFHyZvVxce0&ab_channel=LamaDev
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,//#we use this to storing data inside application inside local storage inside the  Browser when we refresh the page we should fetch user from local storage so what  we 'll do we wills ay json.parse to fetch what we all ready set as a stringify as json 
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE); //this gonna use as provider inside the return 


// TODO: how we gonna reach this user inside any component I should create here context provider  an wrapp all component inside this wrapper and then we 'll be able to reach this initial  state 

// ! inside this for login page i talking now when i press the login button we are gonna have three main process |first we're gonna sending our user name  and passs and after sending our credentials we have two more actions is can be successful or failure  if it's successful we're gonna take response which  is are user information username email password and photo and after that we gonna update this state  is not gonna be null any more |if it's failure it's not username  or password  is wrong or some thing wrong inside our server or mongodb  it's gonna fail and its gonna be null again and we gonna change error to true 
// TODO: were gonna take all this actions inside action.js 


// # reducer is gonna update the initial state  ABOVE 
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
// to store data inside the local storage
  useEffect(() => {
    //# the key is user the value is state.user  but if i write it directly it's not gonna work so we need to convert it to JSON File
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        // dispatch is gonna dispatch succesful or Error 
      }}
    >
      {children}
    </Context.Provider>
  );
};
