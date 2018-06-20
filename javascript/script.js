$(document).ready(function () {

    $('.every').on({
        "mouseover": function () {
            $('img', this).css("opacity", "0");
            $('p', this).css("opacity", "1");
        },
        "mouseout": function () {
            $('img', this).css("opacity", "1");
            $('p', this).css("opacity", "0");
        }
    });

    $(".imgSlide .next").click(function () {
        if ($('.coll').filter('.currr').is(':last-child')) {
            var lColl = $('.coll:first-child');
            $('.coll').filter('.currr').removeClass('currr');
            lColl.addClass('currr');
            var tempy = $('img', lColl).attr('src');
            $(".imgSlide img").attr("src", tempy);
        } else {
            var nColl = $('.coll').filter('.currr').next();
            $('.coll').filter('.currr').removeClass('currr');
            nColl.addClass('currr');
            var temp = $('img', nColl).attr('src');
            $(".imgSlide img").attr("src", temp);
        }
    });

    $(".imgSlide .prev").click(function () {

        if ($('.coll').filter('.currr').is(':first-child')) {
            var lColl = $('.coll:last-child');
            $('.coll').filter('.currr').removeClass('currr');
            lColl.addClass('currr');
            var tempy = $('img', lColl).attr('src');
            $(".imgSlide img").attr("src", tempy);
        } else {
            var pColl = $('.coll').filter('.currr').prev();
            $('.coll').filter('.currr').removeClass('currr');
            pColl.addClass('currr');
            var temp = $('img', pColl).attr('src');
            $(".imgSlide img").attr("src", temp);
        }
    });

    $(".imgSlide img").click(function () {
        $(".imgSlide .next").trigger('click');
    })

    $(".coll").click(function () {
        $('.coll').filter('.currr').removeClass("currr");
        $(this).addClass("currr");
        $(".imgSlide img").attr("src", $('img', this).attr('src'));
        $('.imgSlide').fadeIn(500);
    });
    $(".modals, .closes").click(function () {
        $('.imgSlide').fadeOut(500);
    });

    var temporary = $(".rowww .coll:first-child img").attr('src');
    $(".imgSlide img").attr("src", temporary);

    $('.coll img').click(function () {
        $('.imgSlide img').attr('src', $(this).attr('src'));
    });

    //////////////////////////////
    $('input[type="number"]').bind('keyup mouseup', function () {
        if ($(this).val() > 24) {
            $('input[type="number"]').val("24");
        } else
        if ($(this).val() < 1) {
            $('input[type="number"]').val("");
        }
        var valu = $(this).val();
        $('#summ p').empty();
        $('#summ p').append(valu * 25 + " zl");
    });

    /////////////////////////////////////
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var monthMax = ("0" + (now.getMonth() + 2)).slice(-2);
    var hour = now.getHours();
    var minutes = now.getMinutes();

    if (minutes > 30) {
        minutes = "00";
        hour++;
    } else {
        minutes = 30;
    };

    $('input[type="date"]').attr({
        "value": now.getFullYear() + "-" + month + "-" + day,
        "min": now.getFullYear() + "-" + month + "-" + day,
        "max": now.getFullYear() + "-" + monthMax + "-" + day
    });

    $('input[type="time"]').attr({
        "value": hour + ":" + minutes
    });

    $('input[type="time"]').on('focusout', function () {
        var tmp1 = $('input[type="time"]').val().slice(0, 2);
        var tmp2 = $('input[type="time"]').val().slice(3, 5);


        if (($('input[type="date"]').val().slice(8, 10) == day)) {
            if ((tmp1 < hour) || ((tmp1 == hour) && (tmp2 < minutes))) {
                $('input[type="time"]').css("border", "2px solid red");
            } else $('input[type="time"]').css("border", "1px solid black");
        } else {
            $('input[type="time"]').css("border", "1px solid black");
        }

        if ((tmp2 != "30") && (tmp2 != "00")) {
            $('input[type="time"]').val(tmp1 + ":" + minutes);
        }
    });

    ////////////////////////////////////////

    var com;
    $('.computer').click(function () {
        com = $("h1", this).text();
        $('input[type="number"]').val("1");
        $('#summ p').empty();
        $('#summ p').append($('input[type="number"]').val() * 25 + " zl");
        $('#id01').fadeIn(600);
        $('.modalshadow').show();
        console.log($("h1", this).text());
        $("h6").text("You are going reserve computer №" + $("h1", this).text() + " on " + $('input[type="number"]').val() + " Hour");
    });

    $('input[type="number"]').on("keyup", function () {
        $("h6").text("You are going reserve computer №" + com + " on " + $('input[type="number"]').val() + " Hours")
    });

    $('input[type="number"]').click(function () {
        $("h6").text("You are going reserve computer №" + com + " on " + $('input[type="number"]').val() + " Hours")
    });

    $('.modalshadow').click(function () {
        $('#id01').fadeOut(600);
        $('.modalshadow').fadeOut(600);

    });

    $('.close').click(function () {
        $('#id01').fadeOut(600);
        $('.modalshadow').fadeOut(600);

    });

    $('#navigate li').click(function () {
        var currentIndex = $('.img.current').index();
        var thisIndex = $(this).index();

        $('#navigate li').eq(currentIndex).removeClass('yBack');
        $('.img.current').fadeOut(3000);
        $('.img.current').removeClass('current');

        $(this).addClass('yBack');
        $('.img').eq(thisIndex).fadeIn(3000);
        $('.img').eq(thisIndex).addClass('current');
    });

    $('.slider .next').click(function () {
        var currentImg = $('.img.current');
        var currentImgIndex = $('.img.current').index();
        var nextImgIndex = currentImgIndex + 1;
        var nextImg = $('.img').eq(nextImgIndex);
        currentImg.fadeOut(3000);
        currentImg.removeClass('current');
        $('#navigate li').eq(currentImgIndex).removeClass('yBack');

        if (nextImgIndex != ($('.img:last').index() + 1)) {
            nextImg.fadeIn(3000);
            nextImg.addClass('current');
            $('#navigate li').eq(nextImgIndex).addClass('yBack');
        } else {
            $('.img').eq(0).fadeIn(3000);
            $('.img').eq(0).addClass('current');
            $('#navigate li').eq(0).addClass('yBack');

        };
    });

    $('.slider .prev').click(function () {
        var currentImg = $('.img.current');
        var currentImgIndex = $('.img.current').index();
        var prevImgIndex = currentImgIndex - 1;
        var prevImg = $('.img').eq(prevImgIndex);

        currentImg.fadeOut(3000);
        currentImg.removeClass('current');
        $('#navigate li').eq(currentImgIndex).removeClass('yBack');
        prevImg.fadeIn(3000);
        prevImg.addClass('current');
        $('#navigate li').eq(prevImgIndex).addClass('yBack');
    });

    //    setInterval(function () {
    //        $('.next').trigger('click')
    //    }, 6000);

    $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });

});
