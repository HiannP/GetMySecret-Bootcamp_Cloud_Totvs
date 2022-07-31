var callPOST = (Mensagem)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"Mensagem":Mensagem});
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    if (confirm("Deseja enviar sua mensagem? | DICA: Certifique-se de que não haja ninguem olhando.") != true) {
      window.location.reload()
    } else {
      fetch("https://4l9ok3lsbe.execute-api.us-east-2.amazonaws.com/send", requestOptions)
      .then(response => response.text())
      .then(alert("Mensagem Enviada!"))
      .then(window.location.reload())
      .catch(error => console.log('error', error));
    }
    }
/*----------------------------------------------------------------------------*/

function load_messages() {
    fetch("https://q9kxada089.execute-api.us-east-2.amazonaws.com/messa",{
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
})
.then((response)=>response.json())
.then((response) => {  
    document.getElementById("message_view").innerHTML = response.body;
});
    }
/*----------------------------------------------------------------------------*/

function del_messages() {
    fetch("https://rvaa95k5a9.execute-api.us-east-2.amazonaws.com/del",{
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
    })
    .then(alert("Mensagens Apagadas!"))
    .then(window.location.reload());
    }
/*----------------------------------------------------------------------------*/      

function showMes() {
  var mes = document.getElementById("message");
  if(mes.type == "password") {
    mes.type = "text";
  } else {
    mes.type = "password";
  }
}