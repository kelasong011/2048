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

  }
  
  //初始化棋盘格函数
  function init() {
      //生成棋盘
      for(var i=0;i<4;i++){
          for(var j=0;j<4;j++){
              var gridcell = $("#grid-cell-"+ i + "-" + j)
              // console.log(gridcell)
              gridcell.css('top',getPosTop(i,j))
              gridcell.css('left',getPosLeft(i,j))
          }
      }
      //初始化游戏数据
      for(var i=0;i<4;i++){
        board[i] = new Array()
        for(var j=0;j<4;j++){
          board[i][j] = 0
        }
      }
      // console.log(board)
      updateBoardView()
    }
    
    //定义 更新游戏界面函数
    function updateBoardView() {
      $('.number-cell').remove()

      for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
          $('#grid-container').append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>')
          var theNumberCell = $('.number-cel-l'+i+'-'+j)

          if (board[i][j]===0) {
            theNumberCell.css('width','0px')
            theNumberCell.css('height','0px')
            theNumberCell.css('top',getPosTop(i,j)+50)
            theNumberCell.css('left',getPosLeft(i,j)+50)
          } else {
            theNumberCell.css('width','100px')
            theNumberCell.css('height','100px')
            theNumberCell.css('top',getPosTop(i,j))
            theNumberCell.css('left',getPosLeft(i,j))
            theNumberCell.css('background-color',getNumberBackgroundColor(board[i][j]))
            theNumberCell.css('color',getNumberColor(board[i][j]))
            theNumberCell.text(board[i][j])
          }
        }
      }
    }        