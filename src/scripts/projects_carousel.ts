let sliderContainer = document.getElementById("sliderContainer");
let slider = document.getElementById("slider");
let cards = slider?.getElementsByClassName(
    "carousel",
) as HTMLCollectionOf<HTMLElement>;
let sliderContainerWidth = sliderContainer?.clientWidth;
let elementToShow = 3;
let cardWidth: any;

if (document.body.clientWidth < 1000) {
    elementToShow = 1;
} else if (document.body.clientWidth < 1200) {
    elementToShow = 2;

}

if (cards != undefined) {

    if (sliderContainerWidth != undefined) {
        cardWidth = sliderContainerWidth / elementToShow;
    }

    if (slider != null) {
        slider.style.width = cards.length * cardWidth! + "px";
    }

    if (cards != null) {
        for (let index = 0; index < cards.length; index++) {
            const element = cards[index];
            element.style.width = cardWidth + "px";
        }
    }
}
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

prev?.addEventListener("click", () => {
    if (slider != null) {
        if (Math.ceil(+slider.style.marginLeft.slice(0, -2)) != 0) {
            slider.style.marginLeft =
                +slider.style.marginLeft.slice(0, -2) + cardWidth + "px";
        }
    }

});

next?.addEventListener("click", () => {
    if (slider != null) {

        if (
            Math.ceil(+slider.style.marginLeft.slice(0, -2)) !=
            Math.ceil(-cardWidth * (cards!.length - elementToShow))
        ) {
            slider.style.marginLeft =
                +slider.style.marginLeft.slice(0, -2) - cardWidth + "px";
        }
    }
});
