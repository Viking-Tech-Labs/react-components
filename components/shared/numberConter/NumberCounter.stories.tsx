import type { Meta, StoryObj } from "@storybook/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import NumberCounter from "./NumberCounter";

const Container = () => {
  return (
    <div className="grid aspect-square w-[200px] place-content-center shadow-lg">
      <NumberCounter end={100} className="bold text-xl" />
    </div>
  );
};

const SwipeContainer = () => {
  return (
    <section className="max-w-[400px] pb-[2rem] pt-[7rem] shadow-lg">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="grid aspect-square w-[400px] place-content-center">
            <NumberCounter end={100} className="bold text-xl" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid aspect-square w-[400px] place-content-center">
            <NumberCounter end={200} className="bold text-xl" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/NumberCounter",
  component: Container,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof NumberCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Swipe: Story = {
  render: (data) => {
    return <SwipeContainer />;
  },
};
