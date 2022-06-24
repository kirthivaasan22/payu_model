import React from "react";
import * as Router from "react-router-dom";
import { Link } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import * as Mui from "@mui/material";
import RestApi, { METHOD } from "../../services/RestApi";

const Home = () => {
	const navigate = Router.useNavigate();

	// const createPayment = (e) => {
	// 	e.preventDefault();
	// 	document.getElementById("payUbtn").click();
	// };

	return (
		<>
			<Mui.Typography>It's working</Mui.Typography>
			<form action="https://test.payu.in/_payment" method="post">
				<label>
					Key: <input type="text" name="key" value="gtKFFx" />
				</label>
				<label>
					Order Id:
					<input type="text" name="txnid" value="oaOkw8wbiYFd9R" />
				</label>
				<label>
					Product Info: <input type="text" name="productinfo" value="iPhone" />
				</label>
				<label>
					Amount: <input type="text" name="amount" value="10.00" />
				</label>
				<label>
					Email: <input type="text" name="email" value="test@gmail.com" />
				</label>
				<label>
					First Name: <input type="text" name="firstname" value="PayU User" />
				</label>
				<label>
					Surl:{" "}
					<input
						type="text"
						name="surl"
						value="http://localhost:3000/dashbaord"
					/>
				</label>
				<label>
					Furl:{" "}
					<input
						type="text"
						name="furl"
						value="http://localhost:3000/dashbaord"
					/>
				</label>
				<label>
					Phone: <input type="text" name="phone" value="9876543210" />
				</label>
				<label>
					Hash:{" "}
					<input
						type="text"
						name="hash"
						value="8a64d730326bfffd78116983376f1d61b618ffd80b142ca82275a19d62e38dfafb05edd2954403f3fff1740d4aed35a958241aab6c11052b0be4aa29379c8e0e"
					/>
				</label>
				<input type="submit" value="Submit" id="payUbtn" />
			</form>
		</>
	);
};

export default Home;
