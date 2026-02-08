const modal = document.getElementById('myModal');
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

if(btn){
  btn.onclick = function(){
    modal.style.display ="block";
  }
}
if(span){
  span.onclick = function(){
    modal.style.display ="none";
  }
}

window.onclick = function(event){
  if(event.target == modal){
    modal.style.display ="none";
  }
}

const detailModal = document.getElementById('detailModal');
const detailClose = document.getElementsByClassName("close-detail")[0];
const openBtn = document.querySelectorAll('.open-btn');

openBtn.forEach(btn => {
  btn.onclick = function(e){
    e.preventDefault();
    
    const user = this.getAttribute('data-user');
    const text = this.getAttribute('data-text');
    const date = this.getAttribute('data-date');

    document.getElementById('detailUser').innerText = user;
    document.getElementById('detailText').innerText = text;
    document.getElementById('detailDate').innerText = date;

    detailModal.style.display = "block"

  }
});

if(detailClose){
  detailClose.onclick = function(){
    detailClose.onclick = function(){
      detailModal.style.display = "none";
    }
  }

  window.onclick = function(event){
    if(event.target == writeModal){
      writeModal.style.display = "none";
    }
    if(event.target == detailModal) {
      detailModal.style.display ="none";
    }
  }
}