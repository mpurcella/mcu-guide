import { ComponentMeta, ComponentStory } from '@storybook/react';
import HamburgerButton from '../components/HamburgerButton';

export default {
    title: 'Hamburger Button',
    component: HamburgerButton,
    decorators: [
        (Story) => (
            <div className="flex flex-col gap-20">
                <p className="text-14 text-white">Screen must be &lt; 1024px to show button.</p>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof HamburgerButton>;

const Template: ComponentStory<typeof HamburgerButton> = (args) => <HamburgerButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    isNavOpen: false,
    onClick: () => undefined,
};
