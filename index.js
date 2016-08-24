(function() {
    var start;
    var countdown;
    var button = document.getElementById('start-btn'),
        showTime = document.getElementById('show-time');
    var leftTime = function() {
        var year = document.getElementById('year').value,
            month = document.getElementById('month').value,
            day = document.getElementById('day').value,
            hour = document.getElementById('hour').value,
            minute = document.getElementById('minute').value,
            second = document.getElementById('second').value,
            now = new Date().getTime();
        var targetTime = new Date(year, month - 1, day, hour, minute, second).getTime();
        var time = parseInt((targetTime - now) / 1000, 10);
        return time;
    };

    function Timer(time) {
        return {
            day: parseInt(time / 60 / 60 / 24, 10),
            hour: parseInt(time / 60 / 60 % 24, 10),
            minute: parseInt(time / 60 % 60, 10),
            second: parseInt(time % 60, 10)
        }
    }

    function checkTime(time) {
        if (time < 10) {
            time = '0' + time;
        }
        return time;
    }
    button.onclick = function() {
        var t = leftTime();
        var time ;
        if (t < 0) {
            alert('请写入未来时间');
        } else {
            if (start) {
                clearInterval(countdown);
            }
            time = Timer(t);
            showTime.innerText = checkTime(time.day) + '天' + checkTime(time.hour) + '小时' + checkTime(time.minute) + '分钟' + checkTime(time.second) + '秒';
            countdown = setInterval(function() {
                start = true;
                t--;
                time = Timer(t);
                showTime.innerText = checkTime(time.day) + '天' + checkTime(time.hour) + '小时' + checkTime(time.minute) + '分钟' + checkTime(time.second) + '秒';
                if (t == 0) {
                    clearInterval(countdown);
                    start = false;
                }
            }, 1000);
        }

    }

})();