import "./App.css";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import {Login} from "./pages/Login";
import {Home} from "./pages/home";
import {Aboutus} from "./pages/Aboutus";
import {Register} from "./pages/register.jsx";
import {default as UserPanel} from "./pages/userpanel.jsx";
import {Layout} from "./components/layout/layout.jsx";
import {Dashboard} from "./pages/dashboard.jsx";
import Test_list from "./components/test_list/test_list.jsx";
import Test_edit from "./components/test_edit/test_edit.jsx";
import Test_question from "./components/test_question/test_question.jsx";
import {config} from "./config/index.js";

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Layout/>}>
					<Route path={config.ROUTE.home} element={<Home/>}/>
					<Route path={config.ROUTE.login} element={<Login/>}/>
					<Route path={config.ROUTE.aboutus} element={<Aboutus/>}/>
					<Route path={config.ROUTE.register} element={<Register/>}/>
					<Route path={config.ROUTE.user_panel} element={<UserPanel/>}/>
					<Route path={config.ROUTE.dashboard} element={<Dashboard/>}/>
				</Route>
				<Route element={<Dashboard/>}>
					<Route path={config.ROUTE.test} element={<Test_list/>}/>
					<Route path={config.ROUTE.test_update} element={<Test_edit/>}/>
					<Route path={config.ROUTE.test_create} element={<Test_edit/>}/>
					<Route path={config.ROUTE.test_question_edit} element={<Test_question/>}/>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
