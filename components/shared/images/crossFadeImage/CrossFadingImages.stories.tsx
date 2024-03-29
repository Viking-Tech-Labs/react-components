import type { Meta, StoryObj } from "@storybook/react";

import { Demo2 } from "./CrossFadingImages";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Images/ImageCrossFade",
  component: Demo2,
  decorators: [
    (Story) => (
      <div className="aspect-square w-[500px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Demo2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
