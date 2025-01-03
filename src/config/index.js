const Host = "http://localhost:3000";
const API = "/api";
const API_URL = Host + API;
export const config = {
	apiURL: {
		auth: {
			/*register: "/api/auth/register",
			login:"/api/auth/login",*/
			// register: "http://localhost:3000/users",
			// profile: "http://localhost:3000/users:id",
			// login:"http://localhost:3000/users",
			// request:"/api/auth/request",
			// verify:"/api/auth/verify",
			// reset:"/api/auth/reset",
			register: `${API_URL}/auth/register`,
			login: `${API_URL}/auth/login`,
			profile: `${API_URL}/auth/profile`,
			request: `${API_URL}/auth/request`
			// verify: `${API_URL}/auth/verify`,
			// reset: `${API_URL}/auth/reset`,
			// change: `${API_URL}/auth/change`
		},
		test: {
			test: `${API_URL}/test`,
			test_remove: `${API_URL}/test/:id/remove`,
			test_create: `${API_URL}/test/create`,
			test_update: `${API_URL}/test/:id/update`,
			test_question_edit: `${API_URL}/test/:id/question/:question_id`,
			test_detail: `${API_URL}/test/:id`
		}
	},
	ROUTE: {
		dashboard: "/dashboard",
		login: "/login",
		register: "/register",
		profile: "/profile",
		request: "/request",
		// verify: "/verify",
		// reset: "/reset",
		// change: "/change",
		home: "/",
		aboutus: "/aboutus",
		user_panel: "/user_panel",
		get test() {
			return `${this.dashboard}/test`;
		},
		get test_update() {
			return `${this.dashboard}/test/:id/update`;
		},
		get test_question_edit() {
			return `${this.dashboard}/test/:id/question/:question_id`;
		},
		get test_create() {
			return `${this.dashboard}/test/create`;
		},
		get test_detail() {
			return `${this.dashboard}/test/:id`;
		}

	}
};
export default config;