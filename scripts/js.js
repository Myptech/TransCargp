var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("more_bbbtn");

function read_moreee() {
  moreText.style.transition ="1.5s";
  if (dots.style.display == "none"){
        dots.style.display = "inline";
    btnText.innerHTML = "Читать больше";
    moreText.style.display = "none";
  } 
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Читать меньше";
    btnText.style.background="orange";
    moreText.style.transition="5s";
    moreText.style.display = "inline";
    btnText.style.background="green";
  moreText.style.transition ="1.5s";

  }

}



function oplata(){
  document.getElementById('ocard_submit2').textContent='Спасибо за заказ';
  document.getElementById('ocard_submit2').style.transition="3s";
  document.getElementById('ocard_submit2').style.color="white";
  document.getElementById('ocard_submit2').style.background="green";
}


document.getElementById('ocard_submit').onclick=function(){
  this.textContent='Спасибо за заказ';
  this.style.transition="3s";
  this.style.color="white";
  this.style.background="green";
}



