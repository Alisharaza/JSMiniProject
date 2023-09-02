let apiKey = "AIzaSyBHRa3PHTbwwV2aT270RVIs6pQ0U9JdbUk";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";
let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let videoMaker = document.querySelector(".video-container");
menuIcon.addEventListener("click", function () {
  sidebar.classList.toggle("small-sidebar");
});
fetch(
  video_http +
    new URLSearchParams({
      key: apiKey,
      part: "snippet",
      chart: "mostPopular",
      maxResult: 50,
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.items.forEach((item) => {
      getChannelIcon(item);
    });
  });

const getChannelIcon = (video_data) => {
  fetch(
    channel_http +
      new URLSearchParams({
        key: apiKey,
        part: "snippet",
        id: video_data.snippet.channelId,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      video_data.channelThumbnail =
        data.items[0].snippet.thumbnails.default.url;
      makeVideoCard(video_data);
    });
};
const makeVideoCard = (data) => {
  videoMaker.innerHTML += `<div class="video" onclick="location.href='https://youtube.com/watch?v=${data.id}'">
  <img src="${data.snippet.thumbnails.high.url}" alt="thumbnail" />
  <div class="content">
    <img src="${data.channelThumbnail}" class="channel_icon" alt="channel"/>
    <div class="info">
      <h4 class="title">${data.snippet.title}</h4>
      <p class="channel-name">${data.snippet.channelTitle}</p>
    </div>
  </div>
</div>`;
};
