# Creating + Customizing your own

So you've seen the code for the demo above - great!

But chances are you want to take what you see here and use it to create your own custom cross-fading images.

If this is the case, then you're going to need to understand a little bit more about how the demo above was made.

To recreate your own cross-fading images animation, there are a few key steps (and simple formulas) you'll need to follow:

## 1. Images and timing

First, choose how many images you will be using. This number is n in the formulas below.

Then, for n images, you must define:

a = presentation time for one image

b = duration for cross-fading

Therefore...

animation-duration = t = (a + b) \* n

animation-delay = t/n or a + b

If you're not exactly sure how to use any of this yet, don't worry. We will be walking through a full example at the end.

## 2. Keyframe calculations

No matter how many images you are using, you will always have 5 keyframes in your fade animation.

But the percentage value of each keyframe must change depending on how many images you are using (n), how long you want each image to display for (a), and how long you want each fade transition to last (b).

Luckily, the formulas for each keyframe do not change. And since the first keyframe is always 0%, and the fifth is always 100%, you only need to calculate values for the middle three:

0%
a/t _ 100%
(a + b) / t _ 100% = 1/n _ 100%
100% - (b/t _ 100%)
100%

## 3. Putting it all together

This final step will just be taking the previous 2 steps and walking through a full example with them.

So let's say we have 4 images, and we want each image to display for 3 seconds. And let's also say that we want the transition for each fade to last 2 seconds.

In other words:

n = 4
a = 3
b = 2
With these values we can quickly find out total animation-duration (t) and what our animation-delay should be:

t = (a + b) _ n = (3 + 2) _ 4 = 20 seconds

animation-delay = a + b = 3 + 2 = 5 seconds

With all of this figured out, we now know a few things about what our CSS will look like.

Since we know we'll have 4 images, and that our animation duration is 20 seconds, and our animation delay is 5 seconds, we now can do this:

```css
.container {
  position: relative;
  display: block;
  width: 100%;
  max-width: 400px;
  height: 280px;
  margin: 0 auto;
}
.pic {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-animation: fade 20s infinite;
  animation: fade 20s infinite;
}
#pic1 {
  animation-delay: 0s;
  background-image: url("1.png");
}
#pic2 {
  background-image: url("2.png");
  animation-delay: 5s;
}
#pic3 {
  background-image: url("3.png");
  animation-delay: 10s;
}
#pic4 {
  background-image: url("4.png");
  animation-delay: 15s;
}
```

All that's left is to create the actual fade animation, which we can do by calculating the middle three keyframes we'll need using the formulas we mentioned:

0%
a/t _ 100% = 3/20 _ 100% = 15%
(a + b) / t _ 100% = 1/n _ 100% = 1/4 _ 100% = 25%
100% - (b/t _ 100%) = 100% - (2/20 \* 100%) = 100% - 10% = 90%
100%
So without the formulas we can see our five keyframe values are:

0%
15%
25%
90%
100%

To apply this directly to the fade animation in our CSS would look like this:

```css
@keyframes fade {
  0% {
    opacity: 1;
  }
  15% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

Awesome! That's it, we've now created a whole new cross-fading images component based on new parameters.

Altogether the markup and CSS should now look like this:
