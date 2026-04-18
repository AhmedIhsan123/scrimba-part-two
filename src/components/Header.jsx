import "../styles/Header.css";
import ChefLogo from "../assets/chef.svg";

export default function () {
	return (
		<>
			<section className="header-container">
				<img className="chef-logo" src={ChefLogo}></img>
				<h1 className="header-title">Chef Claude</h1>
			</section>
		</>
	);
}
