// スクロール操作した時の処理を指定
$(window).on('scroll', function () {
  // クラス名【img_area】が付与されている、全ての要素に対して処理を実行
  $('.img_area').each(function() {
    // ブラウザの最上部から要素までの位置を取得
    const targetPosition = $(this).offset().top;
    // ブラウザの最上部からのスクロール量を取得
    const scroll = $(window).scrollTop();
    // ウィンドウの高さを取得
    const windowHeight = $(window).height();
    // ブラウザの最上部からのスクロール量 > 要素の位置 - ウィンドウの高さ の場合
    if (scroll > targetPosition - windowHeight) {
      // クラス名【show】を追加
      $(this).addClass('show');
    }
  });
});