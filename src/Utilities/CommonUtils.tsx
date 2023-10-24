import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Resume from "../PortfolioContainer/Resume/Resume";

export type ScreenProps = {
  screen_name: string
}

export type Screen = {
  component: (props: ScreenProps) => JSX.Element,
  alreadyRendered: boolean
  props: ScreenProps
}


export const TOTAL_SCREENS = new Array<Screen>(
  {
    component: Home,
    alreadyRendered: false,
    props: {
      screen_name: "About Me"
    }
  }, {
  component: AboutMe,
  alreadyRendered: false,
  props: {
    screen_name: "About Me"
  }
},
  {
    component: Resume,
    alreadyRendered: false,
    props: {
      screen_name: "Resume"
    }
  }
);

export const GET_SCREEN_INDEX = (screen_name: string) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].props.screen_name === screen_name) return i;
  }

  return -1;
};