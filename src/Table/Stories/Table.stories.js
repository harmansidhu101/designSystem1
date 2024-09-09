import React from 'react';
import Table from '../index';
import Columns from '../columns'
import TableBody from '../mockData'
import { OptionButtons } from '../optionsButtons';

export default {
	title: 'Table/Deafult',
	component: Table,
	argTypes: {},
};

const Template = (args) => <Table {...args} />;
export const DeafultTable = Template.bind({});
DeafultTable.args = {
	Columns: Columns,
	TableBody: TableBody,
	EditDeleteButtons: OptionButtons,
};