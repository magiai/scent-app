import { ComponentMeta } from '@storybook/react';
import { Form } from '../components/form/Forms';

export default {
    title: 'Example/Form',
    component: Form,
} as ComponentMeta<typeof Form>;

const Template = args => <Form {...args} />;

export const Default = Template.bind({});

Default.args = {
    name: 'form--exemplary',
    method: 'get',
    className: 'form--exemplary'
};