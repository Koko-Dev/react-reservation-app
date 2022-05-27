import  './list.css';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.options);
	
	console.log(location);
	
	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="lsTitle">Search</h1>
						{/* /.lsTitle */}
						<div className="lsItem">
							<label>Destination</label>
							<input placeholder={destination} type="text" />
						</div>
						{/* /.lsItem */}
						<div className="lsItem">
							<label htmlFor="">Check-in Date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								date[0].startDate,
								"MM/dd/yyyy"
							)} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
						</div>
						{/* /.lsItem */}
					</div>
					{/* /.listSearch */}
					<div className="listResult"></div>
					{/* /.listResult */}
				</div>
				{/* /.listWrapper */}
			</div>
			{/* /.listContainer */}
		</div>
	)
}

export default List;