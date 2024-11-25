function updateTime() {
    var d = new Date();

    //0
    var UTC_Hour = d.getUTCHours();
    var UTC_Minute = d.getUTCMinutes();
    var UTC_Second = d.getUTCSeconds();

    //x11
    var x11_Hour = xH(UTC_Hour, -11);
    var x11_Minute = UTC_Minute;
    var x11_Second = UTC_Second;
    var x11_IsDST = isDST(x11_Hour, "Mar", "Nov");

    //x10
    var x10_Hour = xH(UTC_Hour, -10);
    var x10_Minute = UTC_Minute;
    var x10_Second = UTC_Second;
    var x10_IsDST = isDST(x10_Hour, "Mar", "Nov");

    //x9
    var x9_Hour = xH(UTC_Hour, -9);
    var x9_Minute = UTC_Minute;
    var x9_Second = UTC_Second;
    var x9_IsDST = isDST(x9_Hour, "Mar", "Nov");

    //x8
    var x8_Hour = xH(UTC_Hour, -8);
    var x8_Minute = UTC_Minute;
    var x8_Second = UTC_Second;
    var x8_IsDST = isDST(x8_Hour, "Mar", "Nov");

    //x7
    var x7_Hour = xH(UTC_Hour, -7);
    var x7_Minute = UTC_Minute;
    var x7_Second = UTC_Second;
    var x7_IsDST = isDST(x7_Hour, "Mar", "Nov");

    //x6
    var x6_Hour = xH(UTC_Hour, -6);
    var x6_Minute = UTC_Minute;
    var x6_Second = UTC_Second;
    var x6_IsDST = isDST(x6_Hour, "Mar", "Nov");

    //x5
    var x5_Hour = xH(UTC_Hour, -5);
    var x5_Minute = UTC_Minute;
    var x5_Second = UTC_Second;
    var x5_IsDST = isDST(x5_Hour, "Mar", "Nov");

    //x4
    var x4_Hour = xH(UTC_Hour, -4);
    var x4_Minute = UTC_Minute;
    var x4_Second = UTC_Second;
    var x4_IsDST = isDST(x4_Hour, "Mar", "Nov");

    //x3
    var x3_Hour = xH(UTC_Hour, -3);
    var x3_Minute = UTC_Minute;
    var x3_Second = UTC_Second;
    var x3_IsDST = isDST(x3_Hour, "Mar", "Nov");

    //x2
    var x2_Hour = xH(UTC_Hour, -2);
    var x2_Minute = UTC_Minute;
    var x2_Second = UTC_Second;
    var x2_IsDST = isDST(x2_Hour, "Mar", "Nov");

    //x1
    var x1_Hour = xH(UTC_Hour, -1);
    var x1_Minute = UTC_Minute;
    var x1_Second = UTC_Second;
    var x1_IsDST = isDST(x1_Hour, "Mar", "Nov");

    //d1
    var d1_Hour = xH(UTC_Hour, 1);
    var d1_Minute = UTC_Minute;
    var d1_Second = UTC_Second;
    var d1_IsDST = isDST(d1_Hour, "Mar", "Nov");

    //d2
    var d2_Hour = xH(UTC_Hour, 2);
    var d2_Minute = UTC_Minute;
    var d2_Second = UTC_Second;
    var d2_IsDST = isDST(d2_Hour, "Mar", "Nov");

    //d3
    var d3_Hour = xH(UTC_Hour, 3);
    var d3_Minute = UTC_Minute;
    var d3_Second = UTC_Second;
    var d3_IsDST = isDST(d3_Hour, "Mar", "Nov");

    //d4
    var d4_Hour = xH(UTC_Hour, 4);
    var d4_Minute = UTC_Minute;
    var d4_Second = UTC_Second;
    var d4_IsDST = isDST(d4_Hour, "Mar", "Nov");

    //d5
    var d5_Hour = xH(UTC_Hour, 5);
    var d5_Minute = UTC_Minute;
    var d5_Second = UTC_Second;
    var d5_IsDST = isDST(d5_Hour, "Mar", "Nov");

    //d6
    var d6_Hour = xH(UTC_Hour, 6);
    var d6_Minute = UTC_Minute;
    var d6_Second = UTC_Second;
    var d6_IsDST = isDST(d6_Hour, "Mar", "Nov");

    //d7
    var d7_Hour = xH(UTC_Hour, 7);
    var d7_Minute = UTC_Minute;
    var d7_Second = UTC_Second;
    var d7_IsDST = isDST(d7_Hour, "Mar", "Nov");

    //d8
    var d8_Hour = xH(UTC_Hour, 8);
    var d8_Minute = UTC_Minute;
    var d8_Second = UTC_Second;
    var d8_IsDST = isDST(d8_Hour, "Mar", "Nov");

    //d9
    var d9_Hour = xH(UTC_Hour, 9);
    var d9_Minute = UTC_Minute;
    var d9_Second = UTC_Second;
    var d9_IsDST = isDST(d9_Hour, "Mar", "Nov");

    //d10
    var d10_Hour = xH(UTC_Hour, 10);
    var d10_Minute = UTC_Minute;
    var d10_Second = UTC_Second;
    var d10_IsDST = isDST(d10_Hour, "Mar", "Nov");

    //d11
    var d11_Hour = xH(UTC_Hour, 11);
    var d11_Minute = UTC_Minute;
    var d11_Second = UTC_Second;
    var d11_IsDST = isDST(d11_Hour, "Mar", "Nov");

    //d12
    var d12_Hour = xH(UTC_Hour, 12);
    var d12_Minute = UTC_Minute;
    var d12_Second = UTC_Second;
    var d12_IsDST = isDST(d12_Hour, "Mar", "Nov");

    // 判断夏令时
    if (x11_IsDST) {
        x11_Hour += 1;
    }
    if (x10_IsDST) {
        x10_Hour += 1;
    }
    if (x9_IsDST) {
        x9_Hour += 1;
    }
    if (x8_IsDST) {
        x8_Hour += 1;
    }
    if (x7_IsDST) {
        x7_Hour += 1;
    }
    if (x6_IsDST) {
        x6_Hour += 1;
    }
    if (x5_IsDST) {
        x5_Hour += 1;
    }
    if (x4_IsDST) {
        x4_Hour += 1;
    }
    if (x3_IsDST) {
        x3_Hour += 1;
    }
    if (x2_IsDST) {
        x2_Hour += 1;
    }
    if (x1_IsDST) {
        x1_Hour += 1;
    }
    if (d1_IsDST) {
        d1_Hour += 1;
    }
    if (d2_IsDST) {
        d2_Hour += 1;
    }
    if (d3_IsDST) {
        d3_Hour += 1;
    }
    if (d4_IsDST) {
        d4_Hour += 1;
    }
    if (d5_IsDST) {
        d5_Hour += 1;
    }
    if (d6_IsDST) {
        d6_Hour += 1;
    }
    if (d7_IsDST) {
        d7_Hour += 1;
    }
    if (d8_IsDST) {
        d8_Hour += 1;
    }
    if (d9_IsDST) {
        d9_Hour += 1;
    }
    if (d10_IsDST) {
        d10_Hour += 1;
    }
    if (d11_IsDST) {
        d11_Hour += 1;
    }
    if (d12_IsDST) {
        d12_Hour += 1;
    }

    var x11 = x11_Hour + ":" + formatTime(x11_Minute) + ":" + formatTime(x11_Second);
    var x10 = x10_Hour + ":" + formatTime(x10_Minute) + ":" + formatTime(x10_Second);
    var x9 = x9_Hour + ":" + formatTime(x9_Minute) + ":" + formatTime(x9_Second);
    var x8 = x8_Hour + ":" + formatTime(x8_Minute) + ":" + formatTime(x8_Second);
    var x7 = x7_Hour + ":" + formatTime(x7_Minute) + ":" + formatTime(x7_Second);
    var x6 = x6_Hour + ":" + formatTime(x6_Minute) + ":" + formatTime(x6_Second);
    var x5 = x5_Hour + ":" + formatTime(x5_Minute) + ":" + formatTime(x5_Second);
    var x4 = x4_Hour + ":" + formatTime(x4_Minute) + ":" + formatTime(x4_Second);
    var x3 = x3_Hour + ":" + formatTime(x3_Minute) + ":" + formatTime(x3_Second);
    var x2 = x2_Hour + ":" + formatTime(x2_Minute) + ":" + formatTime(x2_Second);
    var x1 = x1_Hour + ":" + formatTime(x1_Minute) + ":" + formatTime(x1_Second);
    var UTC = UTC_Hour + ":" + formatTime(UTC_Minute) + ":" + formatTime(UTC_Second);
    var d1 = d1_Hour + ":" + formatTime(d1_Minute) + ":" + formatTime(d1_Second);
    var d2 = d2_Hour + ":" + formatTime(d2_Minute) + ":" + formatTime(d2_Second);
    var d3 = d3_Hour + ":" + formatTime(d3_Minute) + ":" + formatTime(d3_Second);
    var d4 = d4_Hour + ":" + formatTime(d4_Minute) + ":" + formatTime(d4_Second);
    var d5 = d5_Hour + ":" + formatTime(d5_Minute) + ":" + formatTime(d5_Second);
    var d6 = d6_Hour + ":" + formatTime(d6_Minute) + ":" + formatTime(d6_Second);
    var d7 = d7_Hour + ":" + formatTime(d7_Minute) + ":" + formatTime(d7_Second);
    var d8 = d8_Hour + ":" + formatTime(d8_Minute) + ":" + formatTime(d8_Second);
    var d9 = d9_Hour + ":" + formatTime(d9_Minute) + ":" + formatTime(d9_Second);
    var d10 = d10_Hour + ":" + formatTime(d10_Minute) + ":" + formatTime(d10_Second);
    var d11 = d11_Hour + ":" + formatTime(d11_Minute) + ":" + formatTime(d11_Second);
    var d12 = d12_Hour + ":" + formatTime(d12_Minute) + ":" + formatTime(d12_Second);

    document.getElementById("x11").innerHTML = x11;
    document.getElementById("x10").innerHTML = x10;
    document.getElementById("x9").innerHTML = x9;
    document.getElementById("x8").innerHTML = x8;
    document.getElementById("x7").innerHTML = x7;
    document.getElementById("x6").innerHTML = x6;
    document.getElementById("x5").innerHTML = x5;
    document.getElementById("x4").innerHTML = x4;
    document.getElementById("x3").innerHTML = x3;
    document.getElementById("x2").innerHTML = x2;
    document.getElementById("x1").innerHTML = x1;
    document.getElementById("0").innerHTML = UTC;
    document.getElementById("d1").innerHTML = d1;
    document.getElementById("d2").innerHTML = d2;
    document.getElementById("d3").innerHTML = d3;
    document.getElementById("d4").innerHTML = d4;
    document.getElementById("d5").innerHTML = d5;
    document.getElementById("d6").innerHTML = d6;
    document.getElementById("d7").innerHTML = d7;
    document.getElementById("d8").innerHTML = d8;
    document.getElementById("d9").innerHTML = d9;
    document.getElementById("d10").innerHTML = d10;
    document.getElementById("d11").innerHTML = d11;
    document.getElementById("d12").innerHTML = d12;
}

function xH(utcHour, offset) {
    var hour = utcHour + offset;
    if (hour < 0) {
        hour += 24;
    } else if (hour >= 24) {
        hour -= 24;
    }
    return hour;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function isDST(hour, startMonth, endMonth) {
    var year = new Date().getFullYear();
    var start = new Date(year, getMonthIndex(startMonth), getDSTStartDay(year, startMonth));
    var end = new Date(year, getMonthIndex(endMonth), getDSTEndDay(year, endMonth));
    var startUTC = start.getTime() / 1000 - 3600;
    var endUTC = end.getTime() / 1000 - 3600;
    var currentUTC = new Date().getTime() / 1000;
    return currentUTC >= startUTC && currentUTC < endUTC && hour >= 1 && hour <= 12;
}

function getMonthIndex(month) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months.indexOf(month);
}

function getDSTStartDay(year, month) {
    var dayOfWeek = new Date(year, getMonthIndex(month), 1).getDay();
    if (dayOfWeek === 0) {
        return 8;
    } else {
        return 15 - dayOfWeek;
    }
}

function getDSTEndDay(year, month) {
    var dayOfWeek = new Date(year, getMonthIndex(month), 1).getDay();
    if (dayOfWeek === 0) {
        return 1;
    } else {
        return 8 - dayOfWeek;
    }
}

setInterval(updateTime, 1000);