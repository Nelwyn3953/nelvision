document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.querySelector('.gallery-container');

    // Example video data (use your own URLs from Dropbox or other services)
    const videos = [
    { title: 'Pangandoy v1', url: 'https://www.dropbox.com/scl/fi/zh9ff5caw2pvhvgeaia41/BulakanonHS-Makilala-West-District.mp4?rlkey=0rffh2biswtupdueh5moadk51&st=akxcjwd6&raw=1', thumbnail: 'a1.jpg' },
      { title: 'Pangandoy v2', url: 'https://www.dropbox.com/scl/fi/3fh1xdkthhzfvus70h6ym/BulakanonHS-Makilala-West-District-v2.mp4?rlkey=xk3eb7bmve1748k18kr53zeb1&st=6bgsm129&raw=1', thumbnail: 'a2.jpg' }  
];

    // Dynamically create video gallery items
    videos.forEach(video => {
        const videoDiv = document.createElement('div');
        const thumbnail = document.createElement('img');
        thumbnail.src = video.thumbnail;
        thumbnail.alt = video.title;

        // On hover, show "Watch Now"
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.textContent = 'Watch Now';

        videoDiv.appendChild(thumbnail);
        videoDiv.appendChild(overlay);
        galleryContainer.appendChild(videoDiv);

        // Open video player on click
        videoDiv.addEventListener('click', function () {
            openVideoPlayer(video.url);
        });
    });

    // Lightbox video player
    function openVideoPlayer(url) {
        // Create the lightbox overlay
        const videoPlayer = document.createElement('div');
        videoPlayer.classList.add('video-player-overlay');
        videoPlayer.innerHTML = `
            <div class="video-player-container">
                <video controls autoplay>
                    <source src="${url}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <button class="close-video">X</button>
            </div>
        `;
        document.body.appendChild(videoPlayer);

        // Close the video player when clicking the close button
        videoPlayer.querySelector('.close-video').addEventListener('click', function () {
            document.body.removeChild(videoPlayer);
        });

        // Close the video player if the overlay is clicked (outside of the video)
        videoPlayer.addEventListener('click', function (event) {
            if (event.target === videoPlayer) {
                document.body.removeChild(videoPlayer);
            }
        });
    }
});
