document.addEventListener("DOMContentLoaded", () => {
  const SPACING = 30; // pixels between generated trail elements
  const MAX_TRAILS = 20;

  // style (or put in your stylesheet)
  const style = document.createElement("style");
  style.textContent = `
    #trail-container { position: fixed; left:0; top:0; pointer-events:none; width:100%; height:100%; }
    .trail {
      position: absolute;
      width: 20px;
      height: 6px;
      background: rgba(0,0,0,0.8);
      border-radius: 3px;
      transform: translate(-50%, -50%); /* we'll rotate after translating */
      will-change: transform, opacity;
    }
  `;
  document.head.appendChild(style);

  // container keeps things simple and makes removal cheap & predictable
  const container = document.createElement("div");
  container.id = "trail-container";
  document.body.appendChild(container);

  let lastPos = null;

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    if (!lastPos) {
      addTrail(x, y, 0);
      lastPos = { x, y };
      return;
    }

    const dx = x - lastPos.x;
    const dy = y - lastPos.y;
    const dist = Math.hypot(dx, dy);

    if (dist >= SPACING) {
      const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
      addTrail(x, y, angleDeg);
      lastPos = { x, y };

      // remove oldest while container has too many children
      while (container.children.length > MAX_TRAILS) {
        container.removeChild(container.firstElementChild);
      }
    }
  });

  function addTrail(x, y, angleDeg) {
    const el = document.createElement("div");
    el.className = "trail";
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    // note: translate first (centering), then rotate
    el.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg)`;
    container.appendChild(el);

    // optional: fade out and remove after 2s instead of immediate removal (if you prefer)
    // el.style.transition = "opacity 1.5s linear";
    // setTimeout(() => { el.style.opacity = "0"; }, 50);
    // setTimeout(() => { if (el.parentElement) el.remove(); }, 1600);
  }
});
