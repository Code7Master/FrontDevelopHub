function moveNext(input, nextInputID) { // 매개변수 input nextinputid 선언
    if (input.value.length == input.maxLength) { // input의 값의 길이가 최대일때
      document.getElementById(nextInputID).focus(); // 포커스를 다음 input id를 전환
    }
  }
function moveBack(input,BackInputID) {
    if(input.value.length === 0 ){
        document.getElementById(BackInputID).focus();
    }
}
/*function moveBack(input, inputId) {
    if (input.value.length === 0) {
      document.getElementById(inputId).focus();
    }
  }
  */