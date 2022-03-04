import treePage from "../parts/trees";
import randomInt from "./rendomInt";

function makeSnow(): void {
    const bgContainer = (treePage as HTMLTemplateElement).querySelector('.bigtree-container') as HTMLElement;
    const minLeft = 0;
    const maxLeft = bgContainer.offsetWidth;
    const containerHight = bgContainer.offsetHeight;
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${randomInt(minLeft,maxLeft)}px`;
    bgContainer.append(snowflake);

    const start = Date.now();

    const timer = setInterval(() => {
      const timePassed = Date.now() - start;
       snowflake.style.transform= `translate(${timePassed/randomInt(53,59)}px, ${timePassed/5}px) rotateY(${timePassed/randomInt(2,7)}deg)`;
       snowflake.style.opacity = `${randomInt(10, 96)/100}`;
      if (timePassed > containerHight*5) {
        clearInterval(timer);
        snowflake.remove()}
    },65);
}

export {makeSnow}
