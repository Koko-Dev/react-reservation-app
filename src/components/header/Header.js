import './header.css';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
	faPlane,
	faCar,
	faTaxi,
	faMagnet,
	faBed,
	faCalendarDays,
	faPerson,
} from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRange} from 'react-date-range';
import {format} from "date-fns";


const Header = () => {
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1
	});

	return (
		<div className="header">
			<div className="headerContainer">
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faBed}/>
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faPlane}/>
						<span>Flights</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar}/>
						<span>Car rentals</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faMagnet}/>
						<span>Attractions</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faTaxi}/>
						<span>Airport taxis</span>
					</div>
				</div>
				<h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
				<p className="headerDesc">
					Get rewarded for your travels - unlock instant savings of 10% or more with a free Koko Bookings
					account
				</p>
				<button className="headerBtn">Sign in / Register</button>
				<div className="headerSearch">
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faBed}
						                 className="headerIcon"/>
						<input type="text"
						       placeholder="Where are you going?"
						       className="headerSearchInput"/>
					</div>
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faCalendarDays}
						                 className="headerIcon"/>
						<span
							className="headerSearchText"
							onClick={() => setOpenDate(!openDate)}>
							{`${format(date[0].startDate, "MM/dd/yyyy")}
							 to ${format(
								date[0].endDate,
								"MM/dd/yyyy"
							)}`}
						</span>
						{/* /.headerSearchText */}
						{openDate && <DateRange
							editableDateInputs={true}
							onChange={item => setDate([item.selection])}
							moveRangeOnFirstSelection={false}
							ranges={date}
							className="date"
						/>}
					</div>
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faPerson}
						                 className="headerIcon"/>
						<span
							className="headerSearchText"
							onClick={() => setOpenOptions(!openOptions)}>
								{`
									${options.adult} adult · 
									${options.children} children · 
									${options.room} room`
								}
						</span>
						<div className="options">
							<div className="optionsItem">
								<span className="optionText">Adult</span>
								{/* /.optionText */}
								<div className="optionCounter">
									<button className="optionCounterButton">-</button>
									{/* /.optionCounterButton */}
									<span className="optionCounterNumber">1</span>
									{/* /.optionCounterNumber */}
									<button className="optionCounterButton">+</button>
									{/* /.optionCounterButton */}
								</div>
							</div>
							{/* /.optionsItem */}

							<div className="optionsItem">
								<span className="optionText">Children</span>
								{/* /.optionText */}
								<div className="optionCounter">
									<button className="optionCounterButton">-</button>
									{/* /.optionCounterButton */}
									<span className="optionCounterNumber">0</span>
									{/* /.optionCounterNumber */}
									<button className="optionCounterButton">+</button>
									{/* /.optionCounterButton */}
								</div>
							</div>
							{/* /.optionsItem */}

							<div className="optionsItem">
								<span className="optionText">Room</span>
								{/* /.optionText */}
								<div className="optionCounter">
									<button className="optionCounterButton">-</button>
									{/* /.optionCounterButton */}
									<span className="optionCounterNumber">1</span>
									{/* /.optionCounterNumber */}
									<button className="optionCounterButton">+</button>
									{/* /.optionCounterButton */}
								</div>
							</div>
							{/* /.optionsItem */}
						</div>
						{/* /.options */}
					</div>
					<div className="headerSearchItem">
						<button className="headerBtn">Search</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header;