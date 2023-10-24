import { TOTAL_SCREENS, Screen } from "./CommonUtils";
import { Subject } from "rxjs";

export type ScreenBroadcasterSubject = {
  screenInView: string
}

export type ScreenFadeInSubject = {
  fadeInScreen: string
}

export default class ScrollService {
  static scrollHandler = new ScrollService();
  static currentScreenBroadCaster = new Subject<ScreenBroadcasterSubject>();
  static currentScreenFadeIn = new Subject<ScreenFadeInSubject>();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }
  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("Contact Me");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  scrollToHome = () => {
    let homeScreen = document.getElementById("Home");
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
  };
  isElementInView = (elem: Element, type: string) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;

    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;

      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };

  checkCurrentScreenUnderViewport = (event: Event): any => {
    console.log(event)
    if (!event || Object.keys(event).length < 1) return;
    for (let screen of TOTAL_SCREENS) {
      let screenFromDom = document.getElementById(screen.props.screen_name);
      if (!screenFromDom) continue;

      let fullyVisible = this.isElementInView(screenFromDom, "complete");
      let partiallyVisible = this.isElementInView(screenFromDom, "partial");

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.props.screen_name,
          });
          screen.alreadyRendered = true;
          break;
        }
        if (fullyVisible) {
          ScrollService.currentScreenBroadCaster.next({
            screenInView: screen.props.screen_name,
          });
          break;
        }
      }
    }
  };
}