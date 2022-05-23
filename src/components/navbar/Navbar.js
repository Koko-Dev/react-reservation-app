import './navbar.css';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navContainer">
				<span className="logo">Koko Reservations</span>
				{/* /.logo */}
				<div className="navItems">
					<button className="navButton">Register</button>
					{/* /.navButton */}
					<button className="navButton">Login</button>
					{/* /.navButton */}
				</div>
				{/* /.navItems */}
			</div>
			{/* /.navContainer */}
		</div>
	)
}

export default Navbar;