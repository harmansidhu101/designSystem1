import React from 'react';
import Input from '../index';

export default {
	title: 'Input/Default',
	component: Input,
	argTypes: {},
};

const Template3 = (args) => <Input {...args} />;
export const DefaultInput = Template3.bind({});
DefaultInput.args = {
	placeholder:'Enter Name',
	disabled: false,
};