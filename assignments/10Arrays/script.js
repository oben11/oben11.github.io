document.addEventListener("DOMContentLoaded", () => {
  const Genres = {
    happy: [
      {
        title: "Happy",
        artist: "Pharrell Williams",
        url: "https://www.youtube.com/embed?v=ZbZSe6N_BXs",
      },
      {
        title: "CAN'T STOP THE FEELING!",
        artist: "Justin Timberlake",
        url: "https://www.youtube.com/embed?v=ru0K8uYEZWw",
      },
      {
        title: "I Gotta Feeling",
        artist: "Black Eyed Peas",
        url: "https://www.youtube.com/embed?v=uSD4vsh1zDA",
      },
      {
        title: "Rock Your Body",
        artist: "Justin Timberlake",
        url: "https://www.youtube.com/embed?v=TSVHoHyErBQ",
      },
      {
        title: "Walking On Sunshine",
        artist: "Katrina & The Waves",
        url: "https://www.youtube.com/embed?v=iPUmE-tne5U",
      },
    ],
    sad: [
      {
        title: "Someone Like You",
        artist: "Adele",
        url: "https://www.youtube.com/embed?v=hLQl3WQQoQ0",
      },
      {
        title: "Fix You",
        artist: "Coldplay",
        url: "https://www.youtube.com/embed?v=k4V3Mo61fJM",
      },
      {
        title: "Hurt",
        artist: "Johnny Cash",
        url: "https://www.youtube.com/embed?v=8AHCfZTRGiI",
      },
      {
        title: "Say Something",
        artist: "A Great Big World & Christina Aguilera",
        url: "https://www.youtube.com/embed?v=-2U0Ivkn2Ds",
      },
      {
        title: "Make You Feel My Love",
        artist: "Adele",
        url: "https://www.youtube.com/embed?v=0put0_a--Ng",
      },
    ],
  };

  const selection = document.getElementById("selection");
  const links = document.getElementById("links");
  const videoFrame = document.getElementById("frame");

  function renderLinks(chosenGenre) {
    links.replaceChildren(); // destroy prev links

    const genre = Genres[chosenGenre] ?? []; // associative array
    for (const song of genre) {
      const li = document.createElement("li");
      const a = document.createElement("a");

      a.href = song.url;
      a.textContent = `${song.artist}: ${song.title}`;
      a.classList.add("link");
      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        videoFrame.src = song.url;
      });

      li.appendChild(a);
      links.appendChild(li);
    }
  }

  // Initialize: render the default selection (match option values)
  renderLinks(selection.value.toLowerCase());

  // Update when user changes selection
  selection.addEventListener("change", () => {
    renderLinks(selection.value.toLowerCase());
  });
});
