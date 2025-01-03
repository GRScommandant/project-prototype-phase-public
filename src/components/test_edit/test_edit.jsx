import s from "./test_edit.module.css";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import React, {useEffect} from 'react';
import {tests_raw} from "../test_list/test_list.jsx";
import config from "../../config/index.js";
import useSWR from "swr";
import {Table} from "../Table/Table.jsx";

const columns = [
	{
		key: "id",
		header: "ردیف",
		Cell: ({row, row_id}) => (
			<div className={s.testlist_row}>{row.questions[row_id].id}</div>
		)
	},

	{
		key: "title",
		header: "سوال",
		Cell: ({row, row_id}) => (
			<div className={s.testlist_name}>{row.questions[row_id].title}</div>
		)
	},

	{
		key: "manage",
		header: "مدیریت",
		Cell: ({row, row_id, onDelete}) => (
			<div className={s.testlist_manage}>
				<Link
					to={config.ROUTE.test_question_edit.replace(":id", row.id).replace(":question_id", row.questions[row_id].id)}>
					<button className={s.testlist_manage_btn}>ویرایش</button>
				</Link>
				<button onClick={() => onDelete(row.questions[row_id].id)}>{"حذف"}</button>
			</div>
		)
	}
];

const temp_test = {
	id: 0,
	name: "",
	questions: []
};

async function testEditFetcher(url) {
	const index = config.apiURL.test.test_update.split("/").indexOf(":id");
	const test_id = url.split("/")[index];
	if (test_id === "new") {
		const new_test = localStorage.getItem('new_test');
		return new_test ? JSON.parse(new_test) : {...temp_test};
	}
	const test = tests_raw.find(test => test.id === +test_id);
	console.log(index, test_id, test);
	return {...test} ?? {};
	// const response = await fetch(url);
	// if (!response.ok) {
	// 	throw new Error('Failed to fetch data');
	// }
	// return response.json();
}

export default function Test_edit() {
	const {id: test_id = 'new'} = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	const {data: test, error, isLoading} = useSWR(
		config.apiURL.test.test_update.replace(":id", test_id),
		testEditFetcher
	);
	const questions = Array.from({length: test?.questions.length}).map(() => test);


	useEffect(() => {
		if (test_id === 'new' && test)
			localStorage.setItem('new_test', JSON.stringify(test));
	}, [test, test?.name]);


	// function onCreate(data) {
	// 	console.log("onCreate", data);
	// }

	function onUpdate(data) {
		if (confirm("آیا از ثبت تغییرات مطمئن هستید ؟")) {
			console.log("onUpdate", data);
			/// todo: remove this add api fetcher
			const index = tests_raw.findIndex(test => test.id === data.id);
			tests_raw[index] = data;
			navigate(location.href);
		}
	}

	function onDelete(data) {
		if (confirm("آیا از حذف کردن خود مطمئن هستید ؟")) {
			console.log("onDelete", data);
			/// todo: remove this add api fetcher
			const test = tests_raw.find(test => test.id === +test_id);
			test.questions = test.questions.filter(question => question.id !== data);
			console.log(test);
			navigate(location.href);
		}
	}


	return (
		<div className={s.container}>
			<h1>
				{test_id === 'new' ? 'ایجاد' : 'ویرایش'}
				{' آزمون '}
				{test_id === "new" ? 'جدید' : `#${test_id}`}
			</h1>
			<div className={s.testlist_testname}>
				<td className={s.testlist_testname_input}>
					<label className={s.testlist_testname_label}>نام آزمون</label>
					<input type="text" name="test_name" id="test_name" placeholder="نام آزمون" defaultValue={test?.name}
						   onChange={e => test && (test.name = e.target.value)}
					/>
				</td>
			</div>
			<br/>
			<td className={s.testlist_search_btn}>
				<Link to={config.ROUTE.test_question_edit.replaceAll(/:(id|question_id)/gim, 'new')}>
					<input type="button" value="ایجاد سوال جدید"/>
				</Link>
			</td>
			<Table {...{data: questions, columns, error, isLoading, onUpdate, onDelete}} />

			<td className={s.testlist_testname_btn}><input type="button" value="ثبت" onClick={() => onUpdate(test)}/>
			</td>

		</div>
	);
}