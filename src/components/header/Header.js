import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faCar, faTaxi, faMagnet, faBed } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
	return (
		<div className="header">
			<div className="headerList">
				<div className="headerListItem">
					<FontAwesomeIcon icon={faBed} />
					<span>Stays</span>
				</div>
				<div className="headerListItem">
					<FontAwesomeIcon icon={faPlane} />
					<span>Flights</span>
				</div>
				<div className="headerListItem">
					<FontAwesomeIcon icon={faCar} />
					<span>Car rentals</span>
				</div>
				<div className="headerListItem">
					<FontAwesomeIcon icon={faMagnet} />
					<span>Attractions</span>
				</div>
				<div className="headerListItem">
					<FontAwesomeIcon icon={faTaxi} />
					<span>Airport taxis</span>
				</div>

			</div>
			{/* /.headerList */}
		</div>
	)
}

export default Header;