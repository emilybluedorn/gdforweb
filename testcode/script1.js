console.log('isthisthingon');

// document.getElementById("b").addEventListener('click', function () {  document.getElementById("p").innerHTML = "See";
// document.getElementById("p").style.color="red";                                            
// })

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
  // END HTML5 DRAG AND DROP API
  
  // MOVEABLE.JS
  const moveableoptions = {
    // Set the target as null until someone moves and clones it onto the yellow background
    target: null,
    // If the container is null, the position is fixed. (default: parentElement(document.body))
    container: document.body,
    draggable: true,
    resizable: true,
    scalable: true,
    rotatable: true,
    warpable: false,
    pinchable: true,
    origin: false,
    keepRatio: true,
    edge: true,
    throttleDrag: 0,
    throttleScale: 0,
    throttleRotate: 0
  };
  
  const moveable = new Moveable(document.body, moveableoptions);
  
  function cloneSymbol(event) {
    // All "targets" will be symbols with the draggable class
    var tgt = document.querySelectorAll(".draggable");
    // Create the array for the targets
    var arr = Array.from(tgt);
    // Now push the targets on the yellow board to an arry
    tgt.forEach(e => {
      arr.push(e);
    });
    // Get the last target in the array and set it
    moveable.target = arr.slice(-1)[0];
    /* draggable */
    moveable
      .on("dragStart", ({ target, clientX, clientY }) => {
        //console.log('onDragStart', target);
      })
      .on(
        "drag",
        ({
          target,
          transform,
          left,
          top,
          right,
          bottom,
          beforeDelta,
          beforeDist,
          delta,
          dist,
          clientX,
          clientY
        }) => {
          //console.log('onDrag left, top', left, top);
          target.style.left = `${left}px`;
          target.style.top = `${top}px`;
        }
      )
      .on("dragEnd", ({ target, isDrag, clientX, clientY }) => {
        //console.log('onDragEnd', target, isDrag);
      });
  
    /* scalable */
    moveable
      .on("scaleStart", ({ target, clientX, clientY }) => {
        //console.log('onScaleStart', target);
      })
      .on(
        "scale",
        ({ target, scale, dist, delta, transform, clientX, clientY }) => {
          //console.log('onScale scale', scale);
          target.style.transform = transform;
        }
      )
      .on("scaleEnd", ({ target, isDrag, clientX, clientY }) => {
        //console.log('onScaleEnd', target, isDrag);
      });
  
    /* rotatable */
    moveable
      .on("rotateStart", ({ target, clientX, clientY }) => {
        //console.log('onRotateStart', target);
      })
      .on(
        "rotate",
        ({ target, beforeDelta, delta, dist, transform, clientX, clientY }) => {
          //console.log('onRotate', dist);
          target.style.transform = transform;
        }
      )
      .on("rotateEnd", ({ target, isDrag, clientX, clientY }) => {
        //console.log('onRotateEnd', target, isDrag);
      });
  
    /* pinchable */
    moveable
      .on("pinchStart", ({ target, clientX, clientY }) => {
        // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
        //console.log('onPinchStart');
      })
      .on("pinch", ({ target, clientX, clientY, datas }) => {
        // pinch event occur before drag, rotate, scale, resize
        //console.log('onPinch');
      })
      .on("pinchEnd", ({ isDrag, target, clientX, clientY, datas }) => {
        // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
        //console.log('onPinchEnd');
      });
  
    /* resizable */
    //! Keep this enabled in order to disable resizing... idk man
    moveable
      .on("resizeStart", ({ target, clientX, clientY }) => {
        //console.log('onResizeStart', target);
      })
      .on(
        "resize",
        ({ target, width, height, dist, delta, clientX, clientY }) => {
          //console.log('onResize', target);
          delta[0] && (target.style.width = `${width}px`);
          delta[1] && (target.style.height = `${height}px`);
        }
      )
      .on("resizeEnd", ({ target, isDrag, clientX, clientY }) => {
        //console.log('onResizeEnd', target, isDrag);
      });
  }
  
  // This toggles the control box on whatever element you click on
  function backgroundTest(event) {
    document.querySelectorAll(".draggable").forEach(key => {
      //https://stackoverflow.com/questions/24183286/drag-and-drop-to-div-behind-absolutely-positioned-div
      let elements = document.elementsFromPoint(event.clientX, event.clientY);
      let chosenTarget = elements.find(key => key.matches(".draggable"));
      // If you click a symbol on the yellow background, it will set it as the Moveable target
      // If you click the yellow background it will de-select the symbol so you can get that annoying control box out of view
      chosenTarget
        ? (moveable.target = chosenTarget)
        : (moveable.target = undefined);
    });
  }
  