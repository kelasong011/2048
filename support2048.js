/* 工具函数模块 */

//得到每个格子的top值
function getPosTop(i, j) {
  return 20 + i * 120
}

//得到每个格子的Left值
function getPosLeft(i, j) {
  return 20 + j * 120
}

//得到每个数字的背景色
function getNumberBackgroundColor(number) {
  switch (number) {
    case 2:
      return '#eee4da';
      break;
    case 4:
      return '#ede0c8';
      break;
    case 8:
      return '#f2b179';
      break;
    case 16:
      return 'f59563';
      break;
    case 32:
      return '#f67c5f';
      break;
    case 64:
      return '#f65e3b';
      break;
    case 128:
      return '#edcf72';
      break;
    case 256:
      return '#edcc61';
      break;
    case 512:
      return '#9c0';
      break;
    case 1024:
      return '#33b5e5';
      break;
    case 2048:
      return '#09c';
      break;
    case 4098:
      return '#a6c';
      break;
    case 8192:
      return '#93c';
      break;
  }

  return 'black'
}

//得到每个数字的前景色
function getNumberColor(number) {
  if (number <= 4) {
    return '#776e65'
  }
  return 'white'
}

//判断棋盘格有没有空位，有则返回false,没有返回true
function nospace(board) {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (board[i][j] === 0) {
        return false
      }
    }
  }
  return true
}

//判断能否向左移动  判断条件：左边是否有数字 || 左边数字是否和自己相等
function canMoveLeft(board) {
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
      if (board[i][j] != 0) {
        if (board[i][j-1] == 0 || board[i][j-1] == board[i][j]) {
          return true
        } 
      }
    }
  }
  return false
}

//判断每一行的指定两列之间有没有数字,有则返回false,无返回true
function noBlockHorizontal(row, col1, col2, board) {
  for (var i = col1 + 1; i < col2; i++) {
    if (board[row][i] != 0) {
      return false
    } 
  }
  return true
}