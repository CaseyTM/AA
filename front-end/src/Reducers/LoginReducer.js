export default function(state = [], action) {
	// console.log(action.type);
	switch (action.type) {
		case "login":
		localStorage.setItem('token', action.payload.token);
			return action.payload
			default:
				return state;
	}
}