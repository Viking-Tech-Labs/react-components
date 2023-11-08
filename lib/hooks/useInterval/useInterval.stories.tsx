import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import useInterval from "./useInterval";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Hooks",
  component: CounterWithToggle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof CounterWithToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};

export const OnlyHook: Story = {
  args: {
    //@ts-ignore
    isRunning: false,
    delay: 1000,
  },
  render: (data) => {
    //@ts-ignore
    const { isRunning, delay } = data;
    return <Counter isRunning={isRunning} delay={delay} />;
  },
};

function CounterWithToggle() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(
    () => {
      // Your custom logic here
      setCount(count + 1);
    },
    isRunning ? delay : null,
  );

  function handleDelayChange(e: any) {
    setDelay(Number(e.target.value));
  }

  function handleIsRunningChange(e: any) {
    setIsRunning(e.target.checked);
  }

  return (
    <>
      <h1>{count}</h1>
      <input
        type="checkbox"
        checked={isRunning}
        onChange={handleIsRunningChange}
      />{" "}
      Running
      <br />
      <input value={delay} onChange={handleDelayChange} />
    </>
  );
}

function Counter({
  isRunning,
  delay,
}: {
  isRunning?: boolean;
  delay?: number | null;
}) {
  const [count, setCount] = useState(0);

  useInterval(
    () => {
      // Your custom logic here
      setCount(count + 1);
    },
    isRunning ? delay ?? 0 : null,
  );

  return (
    <>
      <h1>Counting</h1>
      <h1>{count}</h1>
    </>
  );
}
