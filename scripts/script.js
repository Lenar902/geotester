window.onload = function() {
    let openmdbtn = document.querySelector("#open-modal-company");
    let openbtn = document.querySelector("#open-modal"); 
    let closebtn = document.querySelector("#close");
    let modalwindow = document.querySelector("#modal-dialog");
    let lock = document.getElementsByTagName("body")[0];

    let modalwindowcert = document.querySelector("#modal-dialog-cert");
    let closecert = document.querySelector("#close-cert");
    let cert_overlay = document.getElementsByClassName("overlay");
    for (let i = 0; i < cert_overlay.length; i++) {
        cert_overlay[i].onclick = function() {
			modalwindowcert.style.display = 'block';
            lock.classList.add("lock");
		}
    }
    closecert.onclick = function() {
        modalwindowcert.style.display = 'none';
        lock.classList.remove("lock");
    }

    openmdbtn.addEventListener("click", function(event){
        event.preventDefault();
        modalwindow.style.display = 'block';
        lock.classList.add("lock");
    });	
    openbtn.addEventListener("click", function(event){
        event.preventDefault();
        modalwindow.style.display = 'block';
        lock.classList.add("lock");
    });	
    closebtn.addEventListener("click", function(event){
        event.preventDefault();
        modalwindow.style.display = 'none';
        lock.classList.remove("lock");
    });


    let preloader = document.getElementById("preloader");
    let timerPr = setTimeout(function() {       
        preloader.style.display = 'none';
        clearTimeout(timerPr);       
        
    }, 1000);
    
}