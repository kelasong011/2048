//定义格子生成动画的函数

function showNumberWithAnimation(i,j,randomNumber) {
    var numberCell = $('#number-cell-'+i+'-'+j)
    numberCell.css('background-color',getNumberBackgroundColor(randomNumber))
    numberCell.css('color',getNumberColor(randomNumber))
    numberCell.text(randomNumber)

    numberCell.animate({
        width:'100px',
        height:'100px',
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
    })
  }

//定义格子移动动画函数
function showMoveAnimation(fromx,fromy,tox,toy) {
    var numberCell = $('number-cell-'+fromx+'-'+fromy)
    numberCell.animate({
        left:getPosLeft(tox,toy),
        top:getPosTop(tox,toy)
    },200)
  }