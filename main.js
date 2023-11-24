const scoreCircles = document.getElementsByClassName("score-circle");
const yourRating = document.querySelector(".your-rating");

// HTMLCollectionに対してforEachを使うためにArray.fromを使用
Array.from(scoreCircles).forEach((scoreCircle) => {
  scoreCircle.addEventListener("click", function () {
    // まずすべてのボタンのクラスをリセット
    Array.from(scoreCircles).forEach((sCircle) => {
      sCircle.classList.remove("score-active");
    });
    // クリックされたボタンにのみクラスを追加
    this.classList.add("score-active");
    // ボタンの中の <span> 要素からテキストを取得
    const number = this.querySelector("span").textContent;
    // 選択された番号をテキスト要素に表示
    yourRating.textContent = number;
  });
});

// 'myButton' クラスを持つボタン要素を取得
const button = document.querySelector(".submit-button");
const rating = document.querySelector(".rating");
const thankYou = document.querySelector(".thank-you");

// クリックイベントリスナーを追加
button.addEventListener("click", function () {
  // 'active' クラスをトグル
  this.classList.toggle("active");
  // loadingアニメーションを追加
  button.innerHTML = `<div class="loading"></div>`;
  // 疑似的に画面遷移を再現
  setTimeout(() => {
    rating.style.display = "none";
    thankYou.style.display = "flex";
  }, 3000);
});
