import { gsap } from "gsap";

export const handleMenuAnimation = (isNavigationOpen) => {
  if (isNavigationOpen) {
    const tl = gsap.timeline();
    tl.to(
      ".menu__line-top",
      { rotation: 45, y: 7.5, ease: "power2.inOut", duration: 0.3 },
      0
    )
      .to(".menu__line-middle", { autoAlpha: 0, duration: 0.3 }, 0)
      .to(
        ".menu__line-bottom",
        { rotation: 135, y: -8, ease: "power2.inOut", duration: 0.3 },
        0
      );
  }

  if (!isNavigationOpen) {
    const tl = gsap.timeline();
    tl.to(
      ".menu__line-top",
      { rotation: 0, y: 0, ease: "power2.inOut", duration: 0.3 },
      0
    )
      .to(".menu__line-middle", { autoAlpha: 1, duration: 0.3 }, 0)
      .to(
        ".menu__line-bottom",
        { rotation: 0, y: 0, ease: "power2.inOut", duration: 0.3 },
        0
      );
  }
};
