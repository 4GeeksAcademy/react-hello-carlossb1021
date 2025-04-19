import React from "react";
import NavBar from "./NavBar"
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";



let cards = [
	{
		image:"https://th.bing.com/th/id/OIP.hTohJITrIVziX8BF7QmwCAHaHa?w=155&h=180&c=7&r=0&o=5&pid=1.7",
		title:"titulo 1",
		description:"Xyz"
	},
	{
		image:"https://th.bing.com/th/id/OIP.KhmYcr1snMTUmbrhxQACWwHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7",
		title:"titulo 2",
		description:"Xyz"
	},
	{
		image:"https://th.bing.com/th/id/OIP.-WBYW68xdr4wy43Yc3N_cgHaEM?w=282&h=180&c=7&r=0&o=5&pid=1.7",
		title:"titulo 3",
		description:"Xyz"
	},
];


//create your first component
const Home = () => {
	
	//JSX -> 1 elemto
	return (
		<div>

			<NavBar></NavBar>
	
			<Jumbotron></Jumbotron>
			
			

			<div className="row align-items-center justify-content-center mt-4 container-fluid">
				

				{
					cards.map((item,index)=>(
						<div className="col-xl-3 col-lg-3 col-12 mb-3" key={index}>
							<Card image={item.image} title={item.title} description={item.description}></Card>
						</div>
					))
				}
	

			</div>
			<Footer></Footer>

		</div>
	);
};


export default Home;