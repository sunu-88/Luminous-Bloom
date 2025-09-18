$(function () {
    /*=================================================
    スマホメニュー
    ===================================================*/
    // ハンバーガーメニューのクリックイベント
    // 解説は、「中級編：ストアサイト（インテリア）」参照
    $('.hamburger').on('click', function () {
        if ($('header').hasClass('open')) {
            $('header').removeClass('open');
        } else {
            $('header').addClass('open');
        }
    });

    // #maskのエリアをクリックした時にメニューを閉じる
    $('#mask').on('click', function () {
        $('header').removeClass('open');
    });

    // リンクをクリックした時にメニューを閉じる
    $('nav a').on('click', function () {
        $('header').removeClass('open');
    });

    /*=================================================
    スムーススクロール
    ===================================================*/
    // ページ内リンクのイベント
    $('a[href^="#"]').click(function () {
        // リンクを取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット
        let target = $(href == "#" || href == "" ? 'html' : href);
        // トップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う
        // 600はスクロール速度で単位はミリ秒
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false;
    });

    /*=================================================
    gsapフェードイン
    ===================================================*/
    gsap.fromTo(
        '.concept__item',
        {
            opacity: 0,
        },
        {
            opacity: 1,
            stagger: {
                each: 0.1,
                from: 'center',
            },
            scrollTrigger: {
                trigger: '.concept__text',
                start: 'top center',
            },
        }
    );

    // gsap.utils.toArray() で .service__item を配列化して 1つずつ処理
    gsap.utils.toArray('.service__item').forEach(item => {
        gsap.fromTo(
            // .querySelector('.service__text')→ その要素 の中から class="service__text" を持つ最初の要素を探して返す
            item.querySelector('.service__text'),
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                scrollTrigger: {
                    trigger: item,
                    start: 'top center',
                    // スクロール戻した時に非表示に戻すなら追加
                    // toggleActions: 'play none none reverse', 
                },
            }
        );
    });

    gsap.fromTo(
        '.strength__item',
        {
            opacity: 0,
            y: 30,
        },
        {
            opacity: 1,
            y: 0,
            // transitionの時間に当たる部分
            duration: 0.6,
            stagger: {
                each: 0.1,
                from: 'start',
            },
            scrollTrigger: {
                trigger: '.strength .sec-title',
                start: 'top center',
            },
        }
    );
});