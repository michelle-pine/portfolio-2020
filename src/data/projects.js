import WritingSamples from '../media/project-media/advanced-writing.svg';
import C3POR3 from '../media/project-media/c3po.png';
import CardiacFitness from '../media/project-media/cf.png';
import DaylightTheme from '../media/project-media/daylightTheme.gif';

const projects = [
  {
    title: "Writing Samples",
    description: "Documents created for Northeastern's Interdisciplinary Advanced Writing class.",
    image: WritingSamples,
    url: "writing-samples",
  },
  {
    title: "C3PO-R3",
    description: "The front-end of a cardiac catheterization risk registry, developed and designed by me for Boston Children's Hospital's renowned Heart Center",
    image: C3POR3,
    url: "c3po-r3"
  },
  {
    title: "Cardiac Fitness App",
    description: "A responsive application developed for Boston Children Hospital, intended to help children with heart problems track their fitness",
    image: CardiacFitness,
    url: "cardiac-fitness",
  },
  {
    title: "Daylight Theme",
    description: "My first responsive tumblr theme, featuring (of course) gradients, the newly released Bootstrap 4, and FontAwesome icons.",
    image: DaylightTheme,
    url: "daylight-theme",
  }
];

export default projects;