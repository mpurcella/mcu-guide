import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from '../components/Footer';

export default {
	title: 'Footer',
	component: Footer,
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof Footer>;

export const Default: ComponentStory<typeof Footer> = () => <Footer />;
