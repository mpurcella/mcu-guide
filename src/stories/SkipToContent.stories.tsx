import { ComponentMeta, ComponentStory } from '@storybook/react';
import SkipToContent from '../components/SkipToContent';

export default {
    title: 'Skip to Content',
    component: SkipToContent,
    decorators: [
        (Story) => (
            <div className="flex flex-col gap-20">
                <p className="text-14 text-white">Only visible on focus and screen &gt; 1023px</p>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof SkipToContent>;

export const Default: ComponentStory<typeof SkipToContent> = () => <SkipToContent />;
