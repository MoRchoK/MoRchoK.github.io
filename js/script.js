let disabeleSelect1 = $('.select1').val();
let disabeleSelect2 = $('.select2').val();
let disabeleSelect3 = $('.select3').val();

if (disabeleSelect1 === "1") {
    $('.select1').css({
        "color": "#717171",
    })
}
else {
    $('.select1').css({
        "color": "black",
    })
}

if (disabeleSelect2 === "1") {
    $('.select2').css({
        "color": "#717171",
    })
}
else {
    $('.select2').css({
        "color": "black",
    })
}

if (disabeleSelect3 === "1") {
    $('.select3').css({
        "color": "#717171",
    })
}
else {
    $('.select3').css({
        "color": "black",
    })
}

$('.select1').change(function () {
    let disabeleSelect1 = $('.select1').val();

    if (disabeleSelect1 === "1") {
        $('.select1').css({
            "color": "#717171",
        })
    }
    else {
        $('.select1').css({
            "color": "black",
        })
    }
});

$('.select2').change(function () {
    let disabeleSelect2 = $('.select2').val();

    if (disabeleSelect2 === "1") {
        $('.select2').css({
            "color": "#717171",
        })
    }
    else {
        $('.select2').css({
            "color": "black",
        })
    }
});

$('.select3').change(function () {
    let disabeleSelect3 = $('.select3').val();

    if (disabeleSelect3 === "1") {
        $('.select3').css({
            "color": "#717171",
        })
    }
    else {
        $('.select3').css({
            "color": "black",
        })
    }
});