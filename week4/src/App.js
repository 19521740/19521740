import logo from './logo.svg';
import './App.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MyComponent from "./MyComponent";
import { FadeLoader } from "react-spinners";
import MyPage from "./MyPage";


// function fetchUser() {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve({ id: 19521740, name: "Nguyen Thi Chi Lam" });
// 		}, 1000);
// 	});
// }


// function App() {
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(
  //   <Router>
  //   <Routes>
  //   <Route path="/" element={<MyComponent />} />
  //   </Routes>
  //   </Router>
  // );
  
//   const [MyComponent, setMyComponent] = React.useState(() => () => null);
// React.useEffect(() => {
// 	import("./MyComponent").then((module) => {
// 		setMyComponent(() => module.default);
// 	});
// }, []);

// return <MyComponent />;

    
// const [id, setId] = React.useState("loading...");
// 	const [name, setName] = React.useState("loading...");
	
// 	React.useEffect(() => {
// 		fetchUser().then((user) => {
// 			setId(user.id);
// 			setName(user.name);
// 		});
// 	});

// 	return (
// 		<>
// 			<p>ID: {id}</p>
// 			<p>Name: {name}</p>
// 		</>
// 	);


// return(
//   <React.Suspense fallback={<FadeLoader color={"lightblue"} size={150} />}>
//     <MyPage />
//   </React.Suspense>
//  );

// }

// export default App;


import “typeface-roboto”;
import React from “react”;
import FormGroup from “@mui/material/FormGroup”;
import MyTextInput from “./MyTextInput”;
import MySelect from “./MySelect”;

export default function App(){
	return (
		<FormGroup style={{ width:200, margin: 10}}>
		<MyTextInput />
		<MySelect />
		</FormGroup>
);
}
