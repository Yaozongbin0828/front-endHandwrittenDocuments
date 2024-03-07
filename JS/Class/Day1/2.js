<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>九九乘法表正三角形</title>
    <style>
        /* .multiplication-table {
            text-align: center;
        } */
    </style>
</head>

<body>

    <div class="multiplication-table" id="multiplicationTable"></div>

    <script>
        const tableContainer = document.getElementById('multiplicationTable');

        //浏览器上
        // for (let i = 1; i <= 9; i++) {

        //     // 每一行开始的空格数等于9减去当前行数
        //     let spaces = ' '.repeat(9 - i);
        //     let rowHtml = spaces;

        //     // 每一行的乘法表达式
        //     for (let j = 1; j <= i; j++) {
        //         let product = i * j;

        //         // 拼接HTML字符串
        //         rowHtml += `<span>${j}*${i}=${product}</span>`;
        //     }

        //     // 将行内容添加到页面上
        //     tableContainer.innerHTML += `<div>${rowHtml}</div>`;
        // }

        //控制台
        // function printMultiplicationTable() {
        //     for (let i = 1; i <= 9; i++) {
        //         let row = '';
        //         for (let space = 1; space <= 9 - i; space++) {
        //             row += ' ';
        //         }
        //         for (let j = 1; j <= i; j++) {
        //             row += `${j}*${i}=${i * j} `;
        //         }
        //         console.log(row);
        //     }
        // }

        // printMultiplicationTable();

            
        var str = '';
        for (var i = 1; i <= 9; i++) {
            var line = '';

            for (var i = 1; i <= 9 - i; i++) {
                line += ' ';
            }

            for (var j = 1; j <= i; j++) {
                line += j + 'x' + i + '=' + (i * j) + ' ';
            }

            str += line + '\n';
        }
        console.log(str); 
    </script>

</body>

</html>
