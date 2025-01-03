import s from "./test_list.module.css";
import {Link, useNavigate} from "react-router-dom";
import React from 'react';
import useSWR from "swr";
import config from "../../config/index.js";
import {Table} from "../Table/Table.jsx";

export const tests_raw = [
	{
		id: 1,
		name: "test 1",
		questions: [
			{
				id: 1,
				title: "test 1 question 1?",
				options: ["test 1 question 1 option 1", "test 1 question 1 option 2", "test 1 question 1 option 3", "test 1 question 1 option 4"]
			}
		]
	},
	{
		id: 2,
		name: "test 2",
		questions: [
			{
				id: 1,
				title: "test 2 question 1?",
				options: ["test 2 question 1 option 1", "test 2 question 1 option 2", "test 2 question 1 option 3", "test 2 question 1 option 4"]
			},
			{
				id: 2,
				title: "test 2 question 2?",
				options: ["test 2 question 2 option 1", "test 2 question 2 option 2", "test 2 question 2 option 3", "test 2 question 2 option 4"]
			}
		]
	},
	{
		id: 3,
		name: "test 3",
		questions: [
			{
				id: 1,
				title: "test 3 question 1?",
				options: ["test 3 question 1 option 1", "test 3 question 1 option 2", "test 3 question 1 option 3", "test 3 question 1 option 4"]
			},
			{
				id: 2,
				title: "test 3 question 2?",
				options: ["test 3 question 2 option 1", "test 3 question 2 option 2", "test 3 question 2 option 3", "test 3 question 2 option 4"]
			},
			{
				id: 3,
				title: "test 3 question 3?",
				options: ["test 3 question 3 option 1", "test 3 question 3 option 2", "test 3 question 3 option 3", "test 3 question 3 option 4"]
			}
		]
	},
	{
		id: 4,
		name: "test 4",
		questions: [
			{
				id: 1,
				title: "test 4 question 1?",
				options: ["test 4 question 1 option 1", "test 4 question 1 option 2", "test 4 question 1 option 3", "test 4 question 1 option 4"]
			},
			{
				id: 2,
				title: "test 4 question 2?",
				options: ["test 4 question 2 option 1", "test 4 question 2 option 2", "test 4 question 2 option 3", "test 4 question 2 option 4"]
			},
			{
				id: 3,
				title: "test 4 question 3?",
				options: ["test 4 question 3 option 1", "test 4 question 3 option 2", "test 4 question 3 option 3", "test 4 question 3 option 4"]
			},
			{
				id: 4,
				title: "test 4 question 4?",
				options: ["test 4 question 4 option 1", "test 4 question 4 option 2", "test 4 question 4 option 3", "test 4 question 4 option 4"]
			}
		]
	}
];

const columns = [
	{
		key: "id",
		header: "شناسه",
		Cell({row}) {
			return (
				<div className={s.testlist_row}>{row.id}</div>
			);
		}
	},

	{
		key: "name",
		header: "نام آزمون",
		Cell({row}) {
			return (
				<div className={s.testlist_name}>{row.name}</div>
			);
		}
	},
	{
		key: "questions",
		header: "تعداد سوالات",
		Cell({row}) {
			return (
				<div className={s.testlist_row}>{row.questions.length}</div>
			);
		}
	},
	{
		key: "manage",
		header: "مدیریت",
		Cell({row, onDelete}) {
			return (
				<div className={s.testlist_manage}>
					<Link to={config.ROUTE.test_update.replace(":id", row.id)}>
						<button>{"ویرایش"}</button>
					</Link>
					<button onClick={() => onDelete(row.id)}>{"حذف"}</button>
				</div>
			);
		}
	}
];

async function testListFetcher(url) {
	return tests_raw;
	// const response = await fetch(url);
	// if (!response.ok) {
	// 	throw new Error('Failed to fetch data');
	// }
	// return response.json();
}


export function Test_lists() {
	const navigate = useNavigate();
	const {data: tests, error, isLoading} = useSWR(config.apiURL.test.test, testListFetcher);

	// function onCreate(data) {
	// 	console.log("onCreate", data);
	// }

	// function onUpdate(data) {
	// 	console.log("onUpdate", data);
	// }

	function onDelete(data) {
		if (confirm("آیا از حذف کردن خود مطمئن هستید ؟")) {
			console.log("onDelete", data);
			/// todo: remove this add api fetcher
			tests_raw.splice(tests_raw.findIndex(test => test.id === data), 1);
			// window.location.reload()
			navigate(config.ROUTE.test)
		}
	}

	return (
		<div className={s.container}>
			<h1>فهرست آزمون ها</h1>
			<div>
				<td className={s.testlist_search_btn}>
					<Link to={config.ROUTE.test_update.replace(":id", 'new')}>
						<input type="button" value="ایجاد آزمون جدید"/>
					</Link>
				</td>
			</div>
			<Table {...{data: tests, columns, error, isLoading, onDelete}}/>
		</div>
	);
}

export default Test_lists;