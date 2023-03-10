import { ComponentMeta, ComponentStory } from '@storybook/react';
import Hero from '../components/Hero';

export default {
	title: 'Hero',
	component: Hero,
	parameters: {
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof Hero>;

export const Default: ComponentStory<typeof Hero> = () => <Hero />;
