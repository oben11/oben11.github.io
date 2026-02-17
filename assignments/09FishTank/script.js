document.addEventListener("DOMContentLoaded", async () => {
  const spawnBubble = async () => {
    let water = document.getElementsByClassName("water")[0];
    let element = document.getElementsByClassName("bowl")[0];
    let left = element.getBoundingClientRect().left;
    let right = element.getBoundingClientRect().right;
    let randomX = Math.random() * (right - left);
    let randomSize = Math.random() * 30;

    let bubble = document.createElement("div");
    bubble.classList.add("bubble");

    bubble.style.left = randomX + "px";
    bubble.style.width = randomSize + "px";
    bubble.style.height = randomSize + "px";

    water.append(bubble);

    await new Promise((resolve) => setTimeout(resolve, 5000));
    bubble.remove();
  };

  for (let i = 0; i >= -1; i++) {
    spawnBubble();
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
});
