import axios from "axios";

export const axiosWithAuth = () => {
	const token = window.localStorage.getItem("token");

	return axios.create({
		headers: {
			Authorization: `Bearer ${token}`,
		},
		baseURL: "YOUR BASE ENDPOINT HERE",
	});
};
