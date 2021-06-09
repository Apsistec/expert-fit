export interface Phase {
  id: number;
  title: string;
  image: string;
  content: string;
}

export const Phases: Phase[] = [
  {
    id: 1,
    title: 'Aim',
    image: '../../assets/lazy/images/upward-dog-pose.jpg',
    content: `Set up access to the X Fitness Studio App then notate assessment measurements so you can create a plan, shedule sessions and make commitments`
  },
  {
    id: 2,
    title: 'Achieve',
    image: '../../assets/lazy/images/core-strength-workout.jpg',
    content: `Update your exercises, nutrition, sleep and other data you want to track in the App. Connect Google Fit, Apple Health or other fitness tracking database`
  },
  {
    id: 3,
    title: 'Analyze',
    image: '../../assets/lazy/images/core-strength-fitness.jpg',
    content: `Put the plan into action, safely and on a consistent basis`
  },
  {
    id: 4,
    title: 'Align',
    image: '../../assets/lazy/images/platinum.png',
    content: `Review your progress with your trainer and acknowledge your achievments then make any needed adjustments`
  }
];
