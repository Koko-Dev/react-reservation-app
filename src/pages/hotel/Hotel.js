import './hotel.css';
import {useState} from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

const Hotel = () => {
	const [open, setOpen] = useState('false');
	
	return (
		<div>
			<Navbar />
			<Header type="list"/>
			<div className="hotelContainer">
			
			</div>
			{/* /.hotelContainer */}
		</div>
	)
}

export default Hotel;