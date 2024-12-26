export default class Animations {
  static animations = new Animations();

  fadeInScreen = (screen_name: string) => {
    let element = document.getElementById(screen_name);
    if (!screen_name || !element) return;

    element.style.opacity = "5";
    element.style.transform = "translateY(1px)";
  };
}
