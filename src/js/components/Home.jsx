import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Card from './Card.jsx';

//create your first component
const Home = () => {
	let Gatitos =["persia","montaña","callejero"]
	
	return (
	<>
	<Navbar/>
    <Jumbotron/>
    {Gatitos.map((raza,index) => (
<Card key={index} raza={raza}/>
	))}
	</>
	);

};



export default Home;