import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form } from './forms';

export default {
    title: 'Example/Form',
    component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => <Form></Form>;