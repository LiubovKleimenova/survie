import React, {Component} from "react";

class Header extends Component {
  render() {
    return (
			<nav>
				<div className="nav-wrapper">
					<a className="left brand-logo">
						Survie
					</a>

					<ul id="nav-mobile" className="right">
						<li>
							<a href="#">Login with Google</a>
						</li>
						
					</ul>
				</div>
			</nav>
		);
  }
}

export default Header;