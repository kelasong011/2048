//游戏数据
var board = new Array()
var score = 0

window.onload = function () {
  newgame()
}

function newgame() {
  //初始化棋盘格
  init()
  //在随机两个格子生成数字
  generateOneNumber()
  generateOneNumber()
}

//初始化棋盘格函数
function init() {
  //生成棋盘
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var gridcell = $("#grid-cell-" + i + "-" + j)
      // console.log(gridcell)
      gridcell.css('top', getPosTop(i, j))
      gridcell.css('left', getPosLeft(i, j))
    }
  }
  //初始化游戏数据
  for (var i = 0; i < 4; i++) {
    board[i] = new Array()
    for (var j = 0; j < 4; j++) {
      board[i][j] = 0
    }
  }
  // console.log(board)
  updateBoardView()
}

//定义 更新游戏界面函数（根据board里保存的数据）
function updateBoardView() {
  $('.number-cell').remove()

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      $('#grid-container').append('<div class="number-cell" id="number-cell-' + i + '-' + j + '"></div>')
      var theNumberCell = $('#number-cell-' + i + '-' + j)

      if (board[i][j] === 0) {
        theNumberCell.css('width', '0px')
        theNumberCell.css('height', '0px')
        theNumberCell.css('top', getPosTop(i, j) + 50)
        theNumberCell.css('left', getPosLeft(i, j) + 50)
      } else {
        theNumberCell.css('width', '100px')
        theNumberCell.css('height', '100px')
        theNumberCell.css('top', getPosTop(i, j))
        theNumberCell.css('left', getPosLeft(i, j))
        theNumberCell.css('background-color', getNumberBackgroundColor(board[i][j]))
        theNumberCell.css('color', getNumberColor(board[i][j]))
        theNumberCell.text(board[i][j])
      }
    }
  }
}

//定义随机在空位生成一个数字的函数
function generateOneNumber() {
  //如果没有空位，则返回false
  if (nospace(board)) {
    return false
  }
  //随机一个位置并判断位置是否可用
  var randomX = parseInt(Math.floor(Math.random() * 4))
  var randomY = parseInt(Math.floor(Math.random() * 4))
  while (true) {
    if (board[randomX][randomY] === 0) {
      break
    } else {
      randomX = parseInt(Math.floor(Math.random() * 4))
      randomY = parseInt(Math.floor(Math.random() * 4))
    }
  }
  //随机一个数字
  var randomNumber = Math.random() < 0.5 ? 2 : 4

  //在随机位置上显示这个随机生成的数字
  board[randomX][randomY] = randomNumber
  showNumberWithAnimation(randomX, randomY, randomNumber)
  return true
}

//绑定键盘事件
document.onkeydown = function(event) { 
  console.log(event.keyCode)
  switch (event.keyCode) {
    case 37://left
      if(moveLeft()){
        generateOneNumber()
        isgameover()
      }
      break;
    case 38://up
      if (moveUp()) {
        generateOneNumber()
        isgameover()
      }
      break;
    case 39://right
    if (moveRight()) {
      generateOneNumber()
      isgameover()
    }
      break;
    case 40://down
    if (moveDown()) {
      generateOneNumber()
      isgameover()
    }
      break;
    default:
      break;
  }
}

//定义向左移动的函数
function moveLeft() {

  //如果不能向左移动，则返回false
  if (!canMoveLeft(board)) {
    return false
  }
  //moveLeft
  for(var i=0;i<4;i++){
    for(var j=1;j<4;j++){
      if (board[i][j]!=0) {
        for(var k=0;k<j;k++){
          //对每个数字的左侧位置进行判断 判断条件 ： 落脚位置是否为空 && 落脚位置是否与带判定位置数值相等 && 数值之间是否有障碍物
          if (board[i][k]==0 && noBlockHorizontal(i,k,j,board)) {//i,k位置为空并且i.j与i，k之间没有障碍物
            //move
            showMoveAnimation(i,j,i,k)
            board[i][k]=board[i][j]
            board[i][j]=0
            continue
          }else if (board[i][j]===board[i][k] &&  noBlockHorizontal(i,k,j,board)) {
            //move
            showMoveAnimation(i,j,i,k)
            //两数相加
            board[i][k]+=board[i][j]
            board[i][j]=0
            continue
          }
        }
      }
    }
  }
  updateBoardView()
  return true
  }

 