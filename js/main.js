var zIndex = 1;

function drawRect(x, y) {
	var canvas = document.querySelector("#main-canvas");
  var box1 = document.createElement("div");
	box1.className = "box";
	console.log("in anotherDrawRect() : x = " + x + " y = " + y);
	box1.style = "z-index: " + zIndex++ + ";" + "left:" + x + "px; top:" + y + "px;";
	box1.innerHTML = "<div class=\"box-text\">Hello</div>";
	canvas.append(box1);
}

const canvas = document.querySelector("#main-canvas");
const rect = canvas.getBoundingClientRect();

canvas.addEventListener('click', e => {
	console.log("e.clientX = " + e.clientX + " e.clientY = " + e.clientY);
	console.log("rect.left = " + rect.left + " rect.top = " + rect.top);
	if (e.clientX != undefined && e.clientY != undefined) {
		const x = e.clientX - rect.left;
	  const y = e.clientY - rect.top;
		console.log("x = " + x + " y = " + y);
		drawRect(x, y);
	}
});
