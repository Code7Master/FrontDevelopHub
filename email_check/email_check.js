function moveNext(input, nextInputID) {
  if (input.value.length == input.maxLength) {
    document.getElementById(nextInputID).focus();
  }
}

function moveBack(input, backInputID) {
  if (input.value.length == 0 || !input.value || event.keyCode == 8) {
    document.getElementById(backInputID).focus();
  }
}

/*

moveBack 함수 실행 대안 

1. input 그냥 없애고 Backspace 키를 누르면 바로 이전 input 으로 넘김 
2. input 값의 길이를 맞는지 체크 
*/