import s from "../test_edit/test_edit.module.css";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import React, {useState} from 'react';
import {tests_raw} from "../test_list/test_list.jsx";
import config from "../../config/index.js";
import useSWR from "swr";
import {Table} from "../Table/Table.jsx";

const columns = [
	{
		key: "id",
		header: "ردیف",
		Cell: ({row_id}) => (
			<div className={s.testlist_row}>{row_id + 1}</div>
		)
	},

	{
		key: "title",
		header: "گزینه",
		Cell: ({row, data, row_id, col_id}) => {
			console.log({row_id, col_id, row, data});
			return (
				<div>
					<input
						type={"text"}
						placeholder={"گزینه را وارد"}
						defaultValue={row}
						style={{width: '100%'}}
						onChange={e => {
							data[row_id] = e.target.value;
						}}
					/>
				</div>
			);
		}
	}

	// {
	// 	key: "action",
	// 	header: "عملیات",
	// 	Cell: ({row_id}) => (
	// 		<div className={s.testlist_manage}>
	// 			<button>ثبت</button>
	// 		</div>
	// 	)
	// }
];

async function testQuestionEditFetcher(url) {
	const index = config.apiURL.test.test_update.split("/").indexOf(":id");
	const test_id = url.split("/")[index];
	const test = tests_raw.find(test => test.id === +test_id);
	console.log(index, test_id, test);
	return {...test} ?? [];
	// const response = await fetch(url);
	// if (!response.ok) {
	// 	throw new Error('Failed to fetch data');
	// }
	// return response.json();
}

export default function Test_question() {
	const {id: test_id = 'new', question_id = 'new'} = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	const {data: test, error, isLoading} = useSWR(
		config.apiURL.test.test_question_edit.replace(":id", test_id).replace(":question_id", question_id),
		testQuestionEditFetcher
	);

	const test_question = test?.questions?.find(question => question.id === +question_id) ?? {};
	const options = [...(test_question?.options ?? [])];

	function onUpdate(data) {
		if (confirm("آیا از ثبت تغییرات مطمئن هستید ؟")) {
			console.log("onUpdate", data);
			/// todo: remove this add api fetcher
			const index = tests_raw.findIndex(test => test.id === +test_id);
			const test = tests_raw[index];
			const test_question = test.questions.find(question => question.id === +question_id);
			test_question.options = data;
			tests_raw[index] = test;
			navigate(location.href);
		}
	}


	return (
		<div className={s.container}>
			<h1>
				{'ویرایش'}
				{' آزمون '}
				{test_id === 'new' ? 'جدید' : `#${test_id}`}
				{' سوال '}
				{question_id === "new" ? 'جدید' : `#${question_id}`}
			</h1>
			<div className={s.testlist_testname}>
				<td className={s.testlist_testname_input}>
					<input type="text" name="test_name" id="test_name" placeholder="نام آزمون"
						   value={test_question.title}/>
				</td>
				<div>
					<td className={s.testlist_search_btn}>
						<Link to={config.ROUTE.test_create}>
							<input type="button" value="ایجاد جدید"/>
						</Link>
					</td>
				</div>
			</div>
			<br/>
			<Table {...{data: options, columns, error, isLoading, onUpdate}} />

			<td className={s.testlist_testname_btn}><input type="button" value="ثبت" onClick={() => onUpdate(options)}/>
			</td>
		</div>
	);
}