import React from "react";
import Greeting from "./components/Greeting";
import ProfileCard from "./components/ProfileCard";
import StatusMessage from "./components/StatusMessage";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";
function App() {
  return (
    <div>
       <Greeting name={"Yash"} /> 
      <ProfileCard name={"Yash"} age={"21"} location={"Udaipur"}/>
      <ProfileCard name={"Yash"} age={"20"} location={"Udaipur"}/>
      <ProfileCard name={"Yash"} age={"22"} location={"Udaipur"}/>
      <StatusMessage status={"success"}/>
      <Counter />
      <LikeButton />
    </div>
  );
}

export default App;
 