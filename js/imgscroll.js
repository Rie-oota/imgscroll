// スクロール操作した時の処理を指定
$(window).on('scroll', function () {
  // クラス名【content】が付与されている、全ての要素に対して処理を実行
  $('.content').each(function() {
    // ブラウザの最上部から要素までの位置を取得
    const targetPosition = $(this).offset().top;
    // ブラウザの最上部からのスクロール量を取得
    const scroll = $(window).scrollTop();
    // ウィンドウの高さを取得
    const windowHeight = $(window).height();
    // ブラウザの最上部からのスクロール量 > (要素の位置 - ウィンドウの高さ)+50 の場合
    if (scroll > ( targetPosition - windowHeight ) + 50) {
      // クラス名【show】を追加
      $(this).addClass('show');
    }
  });
});