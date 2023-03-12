

const imgBox= document.querySelector("#imgBox");
const qrImage= document.querySelector("#qrImage");
const qrText= document.querySelector("#qrText");
const button = document.querySelector('button');

button.addEventListener("click", function (){
   let baseUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
   let baseUrlwithEndPoint =baseUrl+qrText.value
   if(qrText.value){
        qrImage.src=baseUrlwithEndPoint
    }
    qrText.value=''
});


