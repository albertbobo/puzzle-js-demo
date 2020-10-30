window.onload = function () {
    puzzle();
};

function puzzle() {
    var sourceImg = document.getElementsByClassName("source-img");
    for (var i = 0; i < sourceImg.length; i++) {
        // dragstart事件，在开始拖动元素时触发
        sourceImg[i].addEventListener("dragstart", function (event) {
            // dataTransfer.setData()方法设置数据类型(Text)和拖动的数据(source-img的id)
            event.dataTransfer.setData("Text", event.target.id);
        })
    }

    var targetBox = document.getElementsByClassName("target-box");
    for (j = 0; j < targetBox.length; j++) {
        // dragover事件，被拖动的对象在另一对象容器范围内拖动时触发
        targetBox[j].addEventListener("dragover", function (event) {
            // 默认情况下，数据/元素不能在其他元素中被拖放。对于drop必须阻止元素的默认处理
            event.preventDefault();
        });

        // drop事件，在拖动过程中，释放鼠标键时触发此事件
        targetBox[j].addEventListener("drop", function (event) {
            event.preventDefault();
            // 取得source-img的id
            var data = event.dataTransfer.getData("Text");

            // 匹配source-img的id和target-box的id中的数字，判断拼图是否正确
            if (data.match(/\d/g)[0] === event.target.id.match(/\d/g)[0]) {
                // 将被拖动的元素放入目标区域
                event.target.appendChild(document.getElementById(data));
            } else {
                alert("再考虑一下吧！");
            }
        });
    }
}
