console.log('isthisthingon');

// HTML5 DRAG AND DROP API
///Drag'n Drop functions
const allowDrop = ev => {
    ev.preventDefault();
  };
  
  const drag = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.effectAllowed = "copy";
  };
  
  const drop = event => {
    event.preventDefault();
    const x1 = event.clientX - 76; //getBoundingClientRect().width / 2
    const y1 = event.clientY - 51; //getBoundingClientRect().height / 2
    //var data = event.dataTransfer.getData("text");
    //var copyimg = document.createElement("img");
    const target = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //var original = document.getElementById(data);
    //copyimg.src = original.src;
    target.innerHTML = document.querySelector(".testSVG").innerHTML;
    event.target.appendChild(target);
  
    const bbox = target.getBBox();
    target.setAttribute("height", `${bbox.height}`);
    target.setAttribute("width", `${bbox.width}`);
    target.setAttribute(
      "viewBox",
      `${bbox.x}, ${bbox.y}, ${bbox.width}, ${bbox.height}`
    );
    target.classList.add("draggable");
    target.setAttribute(
      "style",
      `position: absolute; top: ${y1}px; left:${x1}px;`
    );
    cloneSymbol(event);
  };


  