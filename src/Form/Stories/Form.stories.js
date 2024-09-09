import React from "react";
import Form from "../index";

export default {
  title: "Form/Default",
  component: Form,
  argTypes: {},
};

const Template3 = (args) => <Form {...args} />;
export const Defaultform = Template3.bind({});
Defaultform.args = {
  disabled: false,
  Name:"Enter same",
};
