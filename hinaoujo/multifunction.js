//code improvised from https://benfrain.com/automatically-play-and-pause-video-as-it-enters-and-leaves-the-viewport-screen

function playPause() {
  let autoplay = document.getElementById("redebut");
  autoplay.for((vi) => {
    vi.muted = true;
    let playPromise = vi.play();
    if (playPromise !== undefined) {
      playPromise.then((_) => {
        let observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.intersectionRatio !== 1 && !vi.paused) {
                vi.pause();
              } else if (vi.paused) {
                vi.play();
              }
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(vi);
      });
    }
  });
}

playPause();

///////////////////////////////////////////////

//finally I figured it out how this works, I just have to put the function in its PARENT DIV-

function unmutePlayer() {
  document.getElementById("unmute").remove();
  document.getElementById("redebut").muted = false;
};

///////////////////////////////////////////////