import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Card from './Card.jsx';
import  Footer  from './Footer.jsx';

//create your first component
const Home = () => {
	let Gatitos =["Lucky🐱","Ojon👁️","Eliorcini💖"]
	
	return (
	<>
	<Navbar/>
    <Jumbotron/>
	
	

	<div className="container">
		<div className="row">

    {Gatitos.map((raza,index) => (
<Card key={index} raza={raza}/>
	))}
		</div>

	</div>

	<Footer/>

	</>
	);

};



export default Home;