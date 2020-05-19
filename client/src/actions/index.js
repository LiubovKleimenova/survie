import axios from "axios";
import { FETCH_USER } from "./types";

const fetchUser = () => {
	return function (dispatch) {
		axios
			.get("/api/currect_user")
			.then((res) => dipatch({ type: FETCH_USER, payload: res }));
	};
};
