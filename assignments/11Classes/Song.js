class Song {
  constructor(title, artist, album, year, genre, coverArt, ytCode) {
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.genre = genre;
    this.coverArt = coverArt;
    this.ytCode = ytCode;
  }
  
  // Create a div with the song's info and cover art, and append it to the container
  create(container, mediaFolder) {
    const div = document.createElement("div");
    div.classList.add("song");

    const h1 = document.createElement("h1");
    h1.textContent = this.title;

    const p = document.createElement("p");
    p.textContent = "by " + this.artist;

    const img = document.createElement("img");
    img.src = `${mediaFolder}/${this.coverArt}`;

    // Append elements to div
    div.append(h1, p, img);

    // Append div to container
    container.append(div);

    this.createModal();
    div.onclick = () => this.openModal();

  }


    // Create Modal Function
    createModal() {
    // Modal wrapper
    const modal = document.createElement("div");
    modal.id = this.title + "-modal";
    modal.className = "w3-modal";

    // Modal content
    const modalContent = document.createElement("div");
    modalContent.className = "w3-modal-content";





    //  Body 
    const body = document.createElement("div");
    body.className = "w3-container row";
        
    // Close button
    const closeBtn = document.createElement("span");
    closeBtn.className = "w3-button w3-display-topright";
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = () => this.closeModal();
    body.appendChild(closeBtn);

    // Text
    const text = document.createElement("div");
    
    const title = document.createElement("h2");
    title.textContent = this.title;
    const p1 = document.createElement("p");
    p1.textContent = "by " + this.artist;

    const p2 = document.createElement("p");
    p2.textContent = this.album + ", " + this.year + "\n" + this.genre;

    const p3 = document.createElement("p");
    p3.textContent = this.genre;

    text.appendChild(title);
    text.appendChild(p1);
    text.appendChild(p2);
    text.appendChild(p3);
    body.appendChild(text);


    // Add iframe
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${this.ytCode}`;
    iframe.width = "100%";
    iframe.height = "315";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    body.appendChild(iframe);

    // Assemble modal
    modalContent.appendChild(body);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    }

    // Open modal
    openModal() {
    document.getElementById(this.title + "-modal").style.display = "block";
    }

    // Close modal
    closeModal() {
    document.getElementById(this.title + "-modal").style.display = "none";
    }
}

let songContainer = document.getElementById("song-container");
let Songs = [];
let media = "./media";

let song1 = new Song(
  "Let It Happen",
  "Tame Impala",
  "Currents",
  "2015",
  "alternative",
  "currents.png",
  "pFptt7Cargc",
);

let song2 = new Song(
  "Can't get enough",
  "Jcole",
  "Cole World: The Sideline Story",
  "2011",
  "Hip Hop",
  "jcole.jpg",
  "zI1eLwVuSeI",
);

let song3 = new Song(
  "Moonlight On The River",
  "Mac Demarco",
  "This Old Dog",
  "2017",
  "Indie",
  "mac.jpg",
  "1VYbKamjB-4",
);

let song4 = new Song(
  "Subwoofer Lullaby",
  "C418",
  "Minecraft, Volume Alpha",
  "2011",
  "Ambient Electronic",
  "mc.jpeg",
  "Gpd85y_iTxY",
);

let song5 = new Song(
  "Time To Pretend",
  "MGMT",
  "Oracular Spectacular",
  "2007",
  "Indie Electronic",
  "mgmt.jpg",
  "B9dSYgd5Elk",
);

Songs.push(song1, song2, song3, song4, song5);

for (const song of Songs) {
  song.create(songContainer, media);
}
