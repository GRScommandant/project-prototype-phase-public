import s from "../test_list/test_list.module.css";
import React from "react";
import {Link} from "react-router-dom";
import config from "../../config/index.js";
import * as PropTypes from "prop-types";

export function TableHeader({columns}) {
	const headers = columns.map(col => col.header);
	return (
		<th className={s.table_header}>
			{headers.map((header) => (
				<td className={s.testlist_row}>{header}</td>
			))}
		</th>
	);
}

TableHeader.propTypes = {columns: PropTypes.array};

export function TableBody({data, columns, error, isLoading, onCreate, onDelete, onUpdate}) {
	if (error)
		return <div>Failed to load</div>;


	if (isLoading)
		return <div>Loading...</div>;


	if (data.length === 0)
		return <div>Empty list</div>;


	return (
		<>
			{data.map((row, row_id) => (
				<tr className={s.table_row}>
					{columns.map((col, col_id) => (
						<td className={s.testlist_row}>
							{col.Cell?.({row, data, row_id, col_id, onCreate, onDelete, onUpdate}) ?? row?.[col.key]}
						</td>
					))}
				</tr>
			))}
		</>);

}

TableBody.propTypes = {
	data: PropTypes.array,
	columns: PropTypes.array,
	error: PropTypes.string,
	isLoading: PropTypes.bool,
	onCreate: PropTypes.oneOf([PropTypes.func, PropTypes.any]),
	onDelete: PropTypes.oneOf([PropTypes.func, PropTypes.any]),
	onUpdate: PropTypes.oneOf([PropTypes.func, PropTypes.any])
};

export function Table({data = [], columns = [], error, isLoading, onCreate, onDelete, onUpdate}) {
	return (
		<>
			<div className={s.testlist_search}>
				<td className={s.testlist_search_input}>
					<input type="text" name="test_name" id="test_name" placeholder="جستجو"/>
				</td>
				<td className={s.testlist_search_btn}>
					<input type="button" value="جستجو"/>
				</td>
			</div>
			<table className={s.testlist_table}>
				<TableHeader columns={columns}/>
				<TableBody {...{data, columns, error, isLoading, onCreate, onDelete, onUpdate}}/>
			</table>
		</>
	);
}

Table.propTypes = {
	data: PropTypes.array,
	columns: PropTypes.array,
	error: PropTypes.string,
	isLoading: PropTypes.bool,
	onCreate: PropTypes.oneOf([PropTypes.func, PropTypes.any]),
	onDelete: PropTypes.oneOf([PropTypes.func, PropTypes.any]),
	onUpdate: PropTypes.oneOf([PropTypes.func, PropTypes.any])
};
