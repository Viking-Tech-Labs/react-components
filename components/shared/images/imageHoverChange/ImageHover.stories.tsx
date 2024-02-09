import type { Meta, StoryObj } from "@storybook/react";

import { ImageHoverDemo } from "./ImageHover";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Images/ImageHover",
  component: ImageHoverDemo,
  tags: ["autodocs"],
} satisfies Meta<typeof ImageHoverDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
