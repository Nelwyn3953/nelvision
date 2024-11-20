document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.querySelector('.gallery-container');

    // Example video data (use your own URLs from Dropbox or other services)
    const videos = [
    { title: 'NelVision', url: 'https://drive.google.com/uc?export=download&id=13qqHNNu-g9jrv55No7jKytaRPGR_4ykB', thumbnail: 'Screenshot_20241120-214319.jpg' }
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
