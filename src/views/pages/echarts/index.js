function getDataY() {
    var dataY = [180, 178, 196, 188, 156, 130, 130, 178, 166, 289];
    return dataY;
}

function getDataX() {
    var dataX = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    return dataX;
}

// 指定图表的配置项和数据
var option;
option = {
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: getDataX()
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '成交',
        type: 'line',
        smooth: true,
        label: {
            normal: {
                show: false,
                position: "top",
                textStyle: {
                    color: "#58B3F9",
                    fontWeight: "200"
                }
            }
        },
        itemStyle: {
            normal: {
                areaStyle: {
                    type: 'default'
                }
            }
        },
        data: getDataY()
    }]
}   //还不错