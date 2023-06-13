// 이미지 파일 목록
var images = ["machi.jpg", "tower.jpg", "yaeki.jpg"];

var currentImageIndex = 0; // 현재 이미지 인덱스

// 왼쪽 버튼 클릭 시
document.getElementById("leftButton").addEventListener("click", function () {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // 이전 이미지 인덱스 계산
  var imageUrl = images[currentImageIndex];
  document.body.style.backgroundImage = "url('" + imageUrl + "')"; // 배경 이미지 변경
});

// 오른쪽 버튼 클릭 시
document.getElementById("rightButton").addEventListener("click", function () {
  currentImageIndex = (currentImageIndex + 1) % images.length; // 다음 이미지 인덱스 계산
  var imageUrl = images[currentImageIndex];
  document.body.style.backgroundImage = "url('" + imageUrl + "')"; // 배경 이미지 변경
});
