import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faCar, faTaxi, faMagnet, faBed } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
	return (
		<div className="header">
			<div className="headerList">
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
					{/* /.headerTitle */}
					<p className="headerDesc">
						Get rewarded for your travels - unlock instant savings of 10% or more with a free Koko Bookings account
					</p>
					<button className="headerBtn">Sign in / Register</button>
					{/* /.headerBtn */}
					{/* /.headerDesc */}
				</div>


			</div>
			{/* /.headerList */}
		</div>
	)
}

export default Header;