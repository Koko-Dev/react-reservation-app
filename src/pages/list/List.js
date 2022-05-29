import './list.css';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {useLocation} from "react-router-dom";
import {useState} from "react";
import {format} from "date-fns";
import {DateRange} from "react-date-range";

const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.options);
	console.log(options);
	
	return (
		<div>
			<Navbar/>
			<Header type="list"/>
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="lsTitle">Search</h1>
						{/* /.lsTitle */}
						<div className="lsItem">
							<label>Destination</label>
							<input placeholder={destination}
							       type="text"/>
						</div>
						{/* /.lsItem */}
						<div className="lsItem">
							<label htmlFor="">Check-in Date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								date[0].startDate,
								"MM/dd/yyyy"
							)} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDate([item.selection])}
									minDate={new Date()}
									ranges={date}
								/>
							)}
						</div>
						{/* /.lsItem */}
						<div className="lsItem">
							<label htmlFor="">Options</label>
							<div className="lsOptions">
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Min price <small>per night</small>
									</span>
									{/* /.lsOptionText */}
									<input type="number"
									       className="lsOptionInput"/>
									{/* /.lsOptionInput */}
								</div>
								{/* /.lsOptionItem */}
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Max price <small>per night</small>
									</span>
									{/* /.lsOptionText */}
									<input type="number"
									       className="lsOptionInput"/>
									{/* /.lsOptionInput */}
								</div>
								{/* /.lsOptionItem */}
								<div className="lsOptionItem">
									<span className="lsOptionText">Adult</span>
									{/* /.lsOptionText */}
									<input type="number"
									       min={1}
									       placeholder={`${Number(options.adult)}`}
									       className="lsOptionInput"/>
									{/* /.lsOptionInput */}
								</div>
								{/* /.lsOptionItem */}
								<div className="lsOptionItem">
									<span className="lsOptionText">Children</span>
									{/* /.lsOptionText */}
									<input type="number"
									       min={0}
									       placeholder={`${Number(options.children)}`}
									       className="lsOptionInput"/>
									{/* /.lsOptionInput */}
								</div>
								{/* /.lsOptionItem */}
								<div className="lsOptionItem">
									<span className="lsOptionText">Room</span>
									{/* /.lsOptionText */}
									<input type="number"
									       min={1}
									       placeholder={`${Number(options.room)}`}
									       className="lsOptionInput"/>
									{/* /.lsOptionInput */}
								</div>
								{/* /.lsOptionItem */}
							</div>
							{/* /.lsOptions */}
						</div>
						{/* /.lsItem */}
						<button>Search</button>
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