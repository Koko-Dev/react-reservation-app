import  './list.css';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";

const List = () => {
	const location = useLocation();
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
							<label htmlFor="">Destination</label>
							<input type="text"/>
						</div>
						{/* /.lsItem */}
						<div className="lsItem">
							<label htmlFor="">Check-in Date</label>
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