function data() {
    // 입력된 값을 가져옴
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // 서버로 보낼 데이터를 JSON 형식으로 만듦
    var data = {
      username: username,
      email: email,
      password: password
    };
  
    // axios 라이브러리를 사용하여 서버에 데이터 전송
    axios.post('http://10.80.163.184:9190/auth/singup', data)
      .then(function(response) {
        // 성공적으로 데이터가 전송된 경우의 처리
        console.log(response);
      })
      .catch(function(error) {
        // 데이터 전송이 실패한 경우의 처리
        console.log(error);
      });
  }
  