//得到每个格子的top值
function getPosTop(i,j) {
    return 20 + i*120
  }

//得到每个格子的Left值
function getPosLeft(i,j) {
    return 20 + j*120
  }

//得到每个数字的背景色
function getNumberBackgroundColor(number) {
    switch (number) {
      case 2: return '#eee4da'; break;
      case 4: return '#ede0c8'; break;
      case 8: return '#f2b179'; break;
      case 16: return 'f59563'; break;
      case 32: return '#f67c5f'; break;
      case 64: return '#f65e3b'; break;
      case 128: return '#edcf72'; break;
      case 256: return '#edcc61'; break;
      case 512: return '#9c0'; break;
      case 1024: return '#33b5e5'; break;
      case 2048: return '#09c'; break;
      case 4098: return '#a6c'; break;
      case 8192: return '#93c'; break;
    }

    return 'black'
  }

  //得到每个数字的前景色
  function getNumberColor(number) { 
    if(number<=4){
      return '#776e65'
    }

    return 'white'
   }