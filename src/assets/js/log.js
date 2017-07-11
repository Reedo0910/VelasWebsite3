// 元素固定
export function autoFixed(element, eTop) {
    var T1 = 350;
    var T2 = 50;
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var fE = document.getElementById(element);
    var ll = document.getElementById('updatelog-list').firstChild.scrollHeight;
    if (top <= T1) {
        fE.style.position = 'absolute';
        fE.style.top = eTop + 'px';
    } else {
        fE.style.position = 'fixed';
        fE.style.top = eTop + T2 + 'px';
    }
}

// 定位动画
export function scrollAnimate(obj, dis) {
    clearInterval(obj.timer);
    var view = document.documentElement.scrollTop || document.body.scrollTop;
    var diff;
    if (view - dis !== 0) {
        obj.timer = setInterval(function () {
            diff = (dis - view) / 10;
            diff = diff > 0 ? Math.ceil(diff) : Math.floor(diff);
            if (view === dis) {
                clearInterval(obj.timer);
            } else {
                view += diff;
                window.scrollTo(0, view);
            }
        }, 10);
    }
}

// 自动导航
export function autoNavigation() {
    var noteList = document.querySelectorAll('.notecard');
    var headerHeight = document.querySelector('header').offsetHeight;
    var view = document.documentElement.scrollTop || document.body.scrollTop;
    var index = -1;
    for (var i = 0; i < noteList.length; i++) {
        if (view >= (noteList[i].offsetTop + headerHeight - 100)) {
            index = i;
        }
    }
    return index;
}

// 获取样式
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}

// 列表动画
export function listAction(obj, tarValue) {
    clearInterval(obj.timer);
    if (tarValue === 'auto') {
        tarValue = obj.scrollHeight;
    }
    obj.timer = setInterval(function() {
        var cur = parseInt(getStyle(obj, 'height')); // 获取实时高度
        var speed = (tarValue - cur) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (tarValue === cur) {
            clearInterval(obj.timer);
            obj.timer = null;
        } else {
            obj.style.height = cur + speed + 'px';
        }
    }, 10);
}

function YItem (year, mitem) {
    this.Year = year;
    this.Months = mitem;
}

function MItem (month, ditem) {
    this.Month = month;
    this.Days = ditem;
}

function DItem (day, content) {
    this.Day = day;
    this.Content = content;
}

export function YMFilter() {
    let objArray = [];
    this.logs.forEach(function (element) {
        let y = parseInt(element.date.split('-')[0]);
        let m = parseInt(element.date.split('-')[1]);
        let d = parseInt(element.date.split('-')[2]);
        if (objArray.length === 0 || y !== objArray[objArray.length - 1].Year) {
            let mArray = [];
            mArray.push(m);
            objArray.push(new YItem(y, mArray));
        } else {
            let arr = objArray[objArray.length - 1].Months;
            if (m !== arr[arr.length - 1]) {
                arr.push(m);
            }
        }
    }, this);
    return objArray;
}

export function TotalFilter() {
    let totalArr = [];
    this.logs.forEach(function (element) {
        let y = parseInt(element.date.split('-')[0]);
        let m = parseInt(element.date.split('-')[1]);
        let d = parseInt(element.date.split('-')[2]);
        let logItem = new DItem(d, element.content);

        if (totalArr.length === 0 || y !== totalArr[totalArr.length - 1].Year) {
            let dayArr = [];
            dayArr.push(logItem);
            let monthArr = [];
            let monthItem = new MItem(m, dayArr);
            monthArr.push(monthItem);
            let yearItem = new YItem(y, monthArr)
            totalArr.push(yearItem);
        } else {
            let ArrM = totalArr[totalArr.length - 1].Months;
            if (m !== ArrM[ArrM.length - 1].Month) {
                let dayArr = [];
                dayArr.push(logItem);
                let monthItem = new MItem(m, dayArr);
                ArrM.push(monthItem);
            } else {
                let ArrD = ArrM[ArrM.length - 1].Days;
                ArrD.push(logItem);
            }
        }
    }, this);
    return totalArr;
}
