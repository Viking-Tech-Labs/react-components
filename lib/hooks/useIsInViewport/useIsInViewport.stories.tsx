import { useRef, useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import useIsInViewport from "./useIsInViewport";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Hooks/useIsInViewport",
  component: BoxList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof BoxList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};

function BoxList() {
  return (
    <div className="h-[100dvh] overflow-y-auto">
      <Box />
      <Box2 />
      <Box />
    </div>
  );
}

const Box = () => {
  return (
    <div className="h-[100dvh] w-[300px] bg-red-200 p-8">
      Without Interseptor
    </div>
  );
};

const Box2 = () => {
  const ref = useRef(null);
  const isInViewport = useIsInViewport({ ref, config: { threshold: 0.5 } });
  return (
    <div
      ref={ref}
      className="grid h-[100dvh] w-[300px] place-content-start gap-6 bg-green-200 p-8"
    >
      With Interseptor
      <p>{isInViewport && "This is now in the view port and is shown"}</p>
    </div>
  );
};
