import type { Meta, StoryObj } from "@storybook/react";

import { ImageModalDemo } from "./ImageModal";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Images/ImageModal",
  component: ImageModalDemo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ImageModalDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
