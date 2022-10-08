var displaying = temp = "" , ans = 0, op = "add";
$('#display').html("0");
$('#clear').click(function () {
    ans = 0;
    op = "add";
    displaying = "";
    $('#display').html("0");
    actions();
});
$('#0').click(function () {
    if (parseInt(displaying) < 100000000000 || displaying == "") {
        displaying += "0";
        $('#display').html(displaying);
    }
});
$('#1').click(function () {
    if (parseInt(displaying) < 100000000000 || displaying == "") {
        displaying += "1";
        $('#display').html(displaying);
    }
});
$('#2').click(function () {
    if (parseInt(displaying) < 100000000000 || displaying == "") {
        displaying += "2";
        $('#display').html(displaying);
    }
});
$('#3').click(function () {
    if (parseInt(displaying) < 100000000000 || displaying == "") {
        displaying += "3";
        $('#display').html(displaying);
    }
});
$('#4').click(function () {
    if (parseInt(displaying) < 100000000000 || displaying == "") {
        displaying += "4";
        $('#display').html(displaying);
    }
});
$('#5').click(function () {
    if (parseInt(displaying) < 100000000000 || displaying == "") {
        displaying += "5";
        $('#display').html(displaying);
    }
});
$('#6').click(function () {
    if (parseInt(displaying) < 100000000000 || displaying == "") {
        displaying += "6";
        $('#display').html(displaying);
    }
});
$('#7').click(function () {
    if (parseInt(displaying) < 100000000000 || displaying == "") {
        displaying += "7";
        $('#display').html(displaying);
    }
});
$('#8').click(function () {
    if (parseInt(displaying) < 100000000000 || displaying == "") {
        displaying += "8";
        $('#display').html(displaying);
    }
});
$('#9').click(function () {
    if (parseInt(displaying) < 100000000000 || displaying == "") {
        displaying += "9";
        $('#display').html(displaying);
    }
});
$('#equal').click(function () {
    if ( displaying != "" ) {
        temp = displaying;
    }
    displaying = '';
    $('#display').html(ans);
    if (op == "add") {
        ans += parseInt(temp);
    }
    else if (op == "sub") {
        ans -= parseInt(temp);
    }
    else if (op == "time") {
        ans *= parseInt(temp);
    }
    else if (op == "div") {
        ans /= parseInt(temp);
    }
    $('#display').html(ans);
});
$('#add').click(function () {
    temp = displaying;
    op = "add";
    displaying = '';
});
$('#subtractc').click(function () {
    temp = displaying;
    op = "sub";
    displaying = '';
});
$('#time').click(function () {
    temp = displaying;
    op = "time";
    displaying = '';
});
$('#divide').click(function () {
    temp = displaying;
    op = "div";
    displaying = '';
});