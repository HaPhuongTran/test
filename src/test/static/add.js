
function add(){
	
	var xhr = new XMLHttpRequest();
	var url = "http://127.0.0.1:8000/add";
	xhr.open("POST", url, false);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
	alert(this.status);
	};
	var data = JSON.stringify({"nameOfStock": document.getElementById("namestock").value, "data": document.getElementById("data").value});
	xhr.send(data);
}
