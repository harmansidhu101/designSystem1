import React from 'react';
import Table from '../index';
import Columns from '../columns'
import TableBody from '../tableData'

export default {
	title: 'TableV2/Deafult',
	component: Table,
	argTypes: {},
};

const Template = (args) => <Table {...args} />;
export const DeafultTable = Template.bind({});
DeafultTable.args = {
	disabled: false,
	Columns: Columns,
	TableBody: TableBody,
};