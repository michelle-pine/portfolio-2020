import WritingSamplesImg from '../media/project-media/advanced-writing.svg';
import C3POR3Img from '../media/project-media/c3po.png';
import CardiacFitnessImg from '../media/project-media/cf.png';
import DaylightThemeImg from '../media/project-media/daylightTheme.gif';
import EasyAnimatorImg from '../media/project-media/easy-animator.svg';
import BlanketsForBostonImg from '../media/project-media/blanketsForBoston.png';
import RibbonsImg from '../media/project-media/ribbons.png';
import MazeGameImg from '../media/project-media/mazeGame.png';
import ForbiddenIslandImg from '../media/project-media/forbiddenIsland.png';
import FearlessFlightImg from '../media/project-media/fearless_flight.png';
import PJLibraryVideosImg from '../media/project-media/pjLibraryVideos.jpeg';
import WonderImg from '../media/project-media/wonder.png';
import WindyWeatherImg from '../media/project-media/windyWeather.png';
import StarborneImg from '../media/project-media/starborne.png';
import PhasesImg from '../media/project-media/phases.png';
import PJGraphicsImg from '../media/project-media/grinspoonGraphics.jpg';
import TumblrGraphicsImg from '../media/project-media/tumblrGraphics.gif';
import EmotiquoteImg from '../media/project-media/emotiquote.png';

import {
	WritingSamples,
	C3Po,
	CardiacFitness,
	Emotiquote,
	Daylight,
	EasyAnimator,
	BlanketsForBoston,
	Ribbons,
	MazeGame,
	ForbiddenIsland,
	FearlessFlight,
	PjLibraryVideos,
	Wonder,
	WindyWeather,
	Starborne,
	Phases,
	PjGraphics,
} from '../projects'

const projects = [
  {
    title: "Writing Samples",
    description: "Documents created for Northeastern's Interdisciplinary Advanced Writing class.",
    image: WritingSamplesImg,
    page: WritingSamples,
    url: "writing-samples",
    year: 2019,
    type: ["writing"],
  },
  {
    title: "C3PO-R3",
    description: "The front-end of a cardiac catheterization risk registry, developed and designed by me for Boston Children's Hospital's renowned Heart Center",
    image: C3POR3Img,
    page: C3Po,
    url: "c3po-r3",
    year: 2018,
    type: ["coding", "design"],
  },
  {
    title: "Cardiac Fitness App",
    description: "A responsive application developed for Boston Children Hospital, intended to help children with heart problems track their fitness",
    image: CardiacFitnessImg,
    page: CardiacFitness,
    url: "cardiac-fitness",
    year: 2018,
    type: ["coding", "design"],
  },
  {
    title: "Emotiquote",
    description: "A ReactJS application for analyzing the emotions of famous (and not-so-famous) people, books, movies, and TV shows. A big winner at HackBeanpot 2018.",
    image: EmotiquoteImg,
    page: Emotiquote,
    url: "emotiquote",
    year: 2018,
    type: ["coding", "design"],
  },
  {
    title: "Daylight Theme",
    description: "My first responsive tumblr theme, featuring (of course) gradients, the newly released Bootstrap 4, and FontAwesome icons.",
    image: DaylightThemeImg,
    page: Daylight,
    url: "daylight-theme",
    year: 2018,
    type: ["coding", "design"],
  },
  {
    title: "Easy Animator",
    description: "A Java software that converts textual instructions into descriptive, interactive or svg file animations",
    image: EasyAnimatorImg,
    page: EasyAnimator,
    url: "easy-animator",
    year: 2017,
    type: ["coding"],
  },
  {
    title: "Blankets for Boston",
    description: "A concept website made for the Mayor's Office of New Urban Mechanics, intended as a winter public activation activity.",
    url: "blankets-for-boston",
    year: 2017,
    page: BlanketsForBoston,
    image: BlanketsForBostonImg,
    type: ["coding", "design"],
  },
  {
    title: "Ribbons Theme",
    description: "A simple but colorful Tumblr theme.",
    url: "ribbons",
    image: RibbonsImg,
    page: Ribbons,
    year: 2017,
    type: ["coding", "design"],
  },
  {
    title: "Maze Game",
    description: "A desktop Java game which uses Kruskal's Algorithm to create complex mazes, and also uses depth first and breadth first search to solve them.",
    url: "maze-game",
    image: MazeGameImg,
    page: MazeGame,
    year: 2017,
    type: ["coding"],
  },
  {
    title: "The Forbidden Island",
    description: "An animated desktop Java game involving a race against time to rescue yourself from a sinking island.",
    url: "forbidden-island",
    image: ForbiddenIslandImg,
    page: ForbiddenIsland,
    year: 2017,
    type: ["coding"],
  },
  {
    title: "Fearless Flight",
    description: "A javascript arcade game, developed using Illustrator and the p5 library. Play here and now!",
    url: "fearless-flight",
    image: FearlessFlightImg,
    page: FearlessFlight,
    year: 2017,
    type: ["coding", "design"],
  },
  {
    title: "PJ Library Videos",
    description: "A series of video editing projects, used for marketing by the Harold Grinspoon Foundation's social media.",
    url: "pj-library-videos",
    image: PJLibraryVideosImg,
    page: PjLibraryVideos,
    year: 2017,
    type: ["design", "video"],
  },
  {
    title: "Wonder",
    description: "An extremely colorful and dynamic tumblr theme for your blog, created with HTML and CSS.",
    url: "wonder",
    image: WonderImg,
    page: Wonder,
    year: 2017,
    type: ["coding", "design"],
  },
  {
    title: "Windy Weather",
    description: "An animated wind speed visualizer, created using the APIXU API, Illustrator, and p5",
    url: "windy-weather",
    image: WindyWeatherImg,
    page: WindyWeather,
    year: 2017,
    type: ["coding", "design"],
  },
  {
    title: "Starborne",
    description: "A minimalistic but still colorful tumblr theme for bloggers, created with HTML and CSS.",
    url: "starborne",
    page: Starborne,
    image: StarborneImg,
    year: 2016,
    type: ["coding", "design"],
  },
  {
    title: "Phases",
    description: "My first foray into gradients and HTML, used to create this sunset-inspired tumblr theme.",
    url: "phases",
    page: Phases,
    image: PhasesImg,
    year: 2016,
    type: ["coding", "design"],
  },
  {
    title: "PJ Graphics",
    description: "A series of promotional graphics, each designed for the social media accounts of the Harold Grinspoon Foundation's PJ Library program.",
    url: "pj-graphics",
    page: PjGraphics,
    image: PJGraphicsImg,
    year: 2016,
    type: ["design"],
  },
  {
    title: "Tumblr Graphics",
    description: "Just a collection of entertainment-related graphics that I made for fun!",
    url: "https://chelle-designs.tumblr.com/",
    redirect: true,
    image: TumblrGraphicsImg,
    year: 2016,
    type: ["design"],
  }
];

export default projects;