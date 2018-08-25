
function openModal() {
  document.getElementById('myModal').style.display = "block";
  showSlides();
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}


function showSlides() {
	var slide=document.getElementById("principal");
	var captionText = document.getElementById("caption");  
	slide.style.display = "block";
	captionText.innerHTML =e.alt;
}