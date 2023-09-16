import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "./Skeleton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Skeleton",
  component: Skeleton,
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
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Header: Story = {
  args: {
    type: "header",
  },
};

export const HeaderParagraph: Story = {
  argTypes: {
    //@ts-ignore
    propertyA: {
      options: ["header", "paragraph", "paragraph-s"],
      control: { type: "select" },
    },
    propertyB: {
      options: ["header", "paragraph", "paragraph-s"],
      control: { type: "select" },
    },
    propertyC: {
      options: ["header", "paragraph", "paragraph-s"],
      control: { type: "select" },
    },
  },
  args: {
    //@ts-ignore
    propertyA: "header",
    propertyB: "paragraph",
    propertyC: "paragraph-s",
    disableMargins: false,
  },
  render: (data) => {
    //@ts-ignore
    const { propertyA, propertyB, propertyC, disableMargins } = data;

    return (
      <div>
        <Skeleton type={propertyA} disableMargins={disableMargins} />
        <Skeleton type={propertyB} disableMargins={disableMargins} />
        <Skeleton type={propertyC} disableMargins={disableMargins} />
      </div>
    );
  },
};
