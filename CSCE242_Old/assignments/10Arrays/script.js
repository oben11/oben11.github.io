document.addEventListener("DOMContentLoaded", () => {
  const Genres = {
    happy: [
      {
        title: "Happy",
        artist: "Pharrell Williams",
        url: "https://www.youtube.com/embed/ZbZSe6N_BXs",
      },
      {
        title: "CAN'T STOP THE FEELING!",
        artist: "Justin Timberlake",
        url: "https://www.youtube.com/embed/ru0K8uYEZWw",
      },
      {
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        url: "https://www.youtube.com/embed/OPf0YbXqDm0",
      },
      {
        title: "Shake It Off",
        artist: "Taylor Swift",
        url: "https://www.youtube.com/embed/nfWlot6h_JM",
      },
      {
        title: "Walking On Sunshine",
        artist: "Katrina & The Waves",
        url: "https://www.youtube.com/embed/iPUmE-tne5U",
      },
    ],
    sad: [
      {
        title: "Someone Like You",
        artist: "Adele",
        url: "https://www.youtube.com/embed/hLQl3WQQoQ0",
      },
      {
        title: "Fix You",
        artist: "Coldplay",
        url: "https://www.youtube.com/embed/k4V3Mo61fJM",
      },
      {
        title: "Hurt",
        artist: "Johnny Cash",
        url: "https://www.youtube.com/embed/8AHCfZTRGiI",
      },
      {
        title: "Say Something",
        artist: "A Great Big World & Christina Aguilera",
        url: "https://www.youtube.com/embed/-2U0Ivkn2Ds",
      },
      {
        title: "All I Want",
        artist: "Kodaline",
        url: "https://www.youtube.com/embed/mtf7hC17IBM",
      },
    ],
  };

  const selection = document.getElementById("selection");
  const links = document.getElementById("links");
  const videoFrame = document.getElementById("frame");

  function populateLinks(chosenGenre) {
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
        videoFrame.classList.remove("hidden");
      });

      li.appendChild(a);
      links.appendChild(li);
    }
  }


  // Update when user changes selection
  selection.addEventListener("change", () => {
    populateLinks(selection.value.toLowerCase());
  });
});
