function addRedSquare() {    

  var cc1 = document.getElementById('c1');
  var conR = cc1.getContext("2d");
  
  conR.clearRect(0, 0, cc1.width, cc1.height);
  
  conR.fillStyle="#e52d27";
  conR.fillRect(10,20,80,80);
  conR.fillRect(110,20,80,80);
  conR.fillRect(210,20,80,80);
  
  conR.textAlign = "center";
  conR.fillStyle = "black";
  conR.font= "16px sans-serif";
  conR.fillText("These are RED squares.", cc1.width / 2, 130);
  
}

function addBlueSquare() {    
  
  var cc1 = document.getElementById('c1');
  var conB= cc1.getContext("2d");
  
  conB.clearRect(0, 0, cc1.width, cc1.height);
  
  conB.fillStyle="#3399FF";
  conB.fillRect(10,20,80,80);
  conB.fillRect(110,20,80,80);
  conB.fillRect(210,20,80,80);
  
  conB.textAlign = "center";
  conB.fillStyle = "black";
  conB.font= "16px sans-serif";
  conB.fillText("These are BLUE squares.", cc1.width / 2, 130);
  
}

function addYellowSquare() {  
  
  var cc1 = document.getElementById('c1');
  var conY= cc1.getContext("2d");
  
  conY.clearRect(0, 0, cc1.width, cc1.height);
  
  conY.fillStyle="#FFD700";
  conY.fillRect(10,20,80,80);
  conY.fillRect(110,20,80,80);
  conY.fillRect(210,20,80,80);
  
  conY.textAlign = "center";
  conY.fillStyle = "black";
  conY.font= "16px sans-serif";
  conY.fillText("These are YELLOW squares.", cc1.width / 2, 130);
  
}

function addYellowSquare() {  
  
  var cc1 = document.getElementById('c1');
  var conY= cc1.getContext("2d");
  
  conY.clearRect(0, 0, cc1.width, cc1.height);
  
  conY.fillStyle="#FFD700";
  conY.fillRect(10,20,80,80);
  conY.fillRect(110,20,80,80);
  conY.fillRect(210,20,80,80);
  
  conY.textAlign = "center";
  conY.fillStyle = "black";
  conY.font= "16px sans-serif";
  conY.fillText("These are YELLOW squares.", cc1.width / 2, 130);
  
}

function addPurpleSquare() {   
  
  var cc1 = document.getElementById('c1');
  var conP= cc1.getContext("2d");
  
  conP.clearRect(0, 0, cc1.width, cc1.height);

  conP.fillStyle="#e52d27";
  conP.fillRect(10,20,80,80);
  conP.fillStyle="#3399FF";
  conP.fillRect(110,20,80,80);
  conP.fillStyle="#8A2BE2";
  conP.fillRect(210,20,80,80);
  
  conP.textAlign = "center";
  conP.fillStyle = "black";
  conP.font= "16px sans-serif";
  conP.fillText("red + blue = PURPLE", cc1.width / 2, 130);
  
  conP.fillStyle = "black";
  conP.font= "bold 28px sans-serif";
  conP.fillText("+", 100, 75);
  
  conP.fillStyle = "black";
  conP.font= "bold 28px sans-serif";
  conP.fillText("=", 200, 75);
  
}

function addGreenSquare() {    
  
  var cc1 = document.getElementById('c1');
  var conG= cc1.getContext("2d");
  
  conG.clearRect(0, 0, cc1.width, cc1.height);
  
  conG.fillStyle="#FFD700";
  conG.fillRect(10,20,80,80);
  conG.fillStyle="#3399FF";
  conG.fillRect(110,20,80,80);
  conG.fillStyle="#2E8B57";
  conG.fillRect(210,20,80,80);
  
  conG.textAlign = "center";
  conG.fillStyle = "black";
  conG.font= "16px sans-serif";
  conG.fillText("yellow + blue = GREEN", cc1.width / 2, 130);
  
  conG.fillStyle = "black";
  conG.font= "bold 28px sans-serif";
  conG.fillText("+", 100, 75);
  
  conG.fillStyle = "black";
  conG.font= "bold 28px sans-serif";
  conG.fillText("=", 200, 75);
  
}

function addOrangeSquare() {    
  
  var cc1 = document.getElementById('c1');
  var conO= cc1.getContext("2d");
  
  conO.clearRect(0, 0, cc1.width, cc1.height);
  
  conO.fillStyle="#e52d27";
  conO.fillRect(10,20,80,80);
  conO.fillStyle="#FFD700";
  conO.fillRect(110,20,80,80);
  conO.fillStyle="#ef9700";
  conO.fillRect(210,20,80,80);
  
  conO.textAlign = "center";
  conO.fillStyle = "black";
  conO.font= "16px sans-serif";
  conO.fillText("red + yellow = ORANGE", cc1.width / 2, 130);
  
  conO.fillStyle = "black";
  conO.font= "bold 28px sans-serif";
  conO.fillText("+", 100, 75);
  
  conO.fillStyle = "black";
  conO.font= "bold 28px sans-serif";
  conO.fillText("=", 200, 75);
  
}

function addRedCircles() {
    var cc2 = document.getElementById('c2');
    var conR = cc2.getContext("2d");
    var radius = 40;
  
    conR.clearRect(0, 0, cc2.width, cc2.height);

    conR.beginPath();
    conR.arc(50, 60, radius, 0, 2 * Math.PI, false);
    conR.fillStyle = '#e52d27';
    conR.fill();
  
    conR.beginPath();
    conR.arc(150, 60, radius, 0, 2 * Math.PI, false);
    conR.fillStyle = '#e52d27';
    conR.fill();
  
    conR.beginPath();
    conR.arc(250, 60, radius, 0, 2 * Math.PI, false);
    conR.fillStyle = '#e52d27';
    conR.fill();
  
    conR.textAlign = "center";
    conR.fillStyle = "black";
    conR.font= "16px sans-serif";
    conR.fillText("These are RED circles.", cc2.width / 2, 130);

}

function addBlueCircles() {
    var cc2 = document.getElementById('c2');
    var conB = cc2.getContext("2d");
    var radius = 40;
  
    conB.clearRect(0, 0, cc2.width, cc2.height);

    conB.beginPath();
    conB.arc(50, 60, radius, 0, 2 * Math.PI, false);
    conB.fillStyle = '#3399FF';
    conB.fill();
  
    conB.beginPath();
    conB.arc(150, 60, radius, 0, 2 * Math.PI, false);
    conB.fillStyle = '#3399FF';
    conB.fill();
  
    conB.beginPath();
    conB.arc(250, 60, radius, 0, 2 * Math.PI, false);
    conB.fillStyle = '#3399FF';
    conB.fill();
  
    conB.textAlign = "center";
    conB.fillStyle = "black";
    conB.font= "16px sans-serif";
    conB.fillText("These are BLUE circles.", cc2.width / 2, 130);

}

function addYellowCircles() {
    var cc2 = document.getElementById('c2');
    var conY = cc2.getContext("2d");
    var radius = 40;
  
    conY.clearRect(0, 0, cc2.width, cc2.height);

    conY.beginPath();
    conY.arc(50, 60, radius, 0, 2 * Math.PI, false);
    conY.fillStyle = '#FFD700';
    conY.fill();
  
    conY.beginPath();
    conY.arc(150, 60, radius, 0, 2 * Math.PI, false);
    conY.fillStyle = '#FFD700';
    conY.fill();
  
    conY.beginPath();
    conY.arc(250, 60, radius, 0, 2 * Math.PI, false);
    conY.fillStyle = '#FFD700';
    conY.fill();
  
    conY.textAlign = "center";
    conY.fillStyle = "black";
    conY.font= "16px sans-serif";
    conY.fillText("These are YELLOW circles.", cc2.width / 2, 130);

}

function addPurpleCircles() {
    var cc2 = document.getElementById('c2');
    var conP = cc2.getContext("2d");
    var radius = 40;
  
    conP.clearRect(0, 0, cc2.width, cc2.height);

    conP.beginPath();
    conP.arc(50, 60, radius, 0, 2 * Math.PI, false);
    conP.fillStyle = '#e52d27';
    conP.fill();
  
    conP.beginPath();
    conP.arc(150, 60, radius, 0, 2 * Math.PI, false);
    conP.fillStyle = '#3399FF';
    conP.fill();
  
    conP.beginPath();
    conP.arc(250, 60, radius, 0, 2 * Math.PI, false);
    conP.fillStyle = '#8A2BE2';
    conP.fill();
  
    conP.textAlign = "center";
    conP.fillStyle = "black";
    conP.font= "16px sans-serif";
    conP.fillText("red + blue = PURPLE", cc2.width / 2, 130);
    
    conP.fillStyle = "black";
    conP.font= "bold 28px sans-serif";
    conP.fillText("+", 100, 75);
  
    conP.fillStyle = "black";
    conP.font= "bold 28px sans-serif";
    conP.fillText("=", 200, 75);

}

function addGreenCircles() {
    var cc2 = document.getElementById('c2');
    var conG = cc2.getContext("2d");
    var radius = 40;
  
    conG.clearRect(0, 0, cc2.width, cc2.height);

    conG.beginPath();
    conG.arc(50, 60, radius, 0, 2 * Math.PI, false);
    conG.fillStyle = '#FFD700';
    conG.fill();
  
    conG.beginPath();
    conG.arc(150, 60, radius, 0, 2 * Math.PI, false);
    conG.fillStyle = '#3399FF';
    conG.fill();
  
    conG.beginPath();
    conG.arc(250, 60, radius, 0, 2 * Math.PI, false);
    conG.fillStyle = '#2E8B57';
    conG.fill();
  
    conG.textAlign = "center";
    conG.fillStyle = "black";
    conG.font= "16px sans-serif";
    conG.fillText("yellow + blue = GREEN", cc2.width / 2, 130);
    
    conG.fillStyle = "black";
    conG.font= "bold 28px sans-serif";
    conG.fillText("+", 100, 75);
  
    conG.fillStyle = "black";
    conG.font= "bold 28px sans-serif";
    conG.fillText("=", 200, 75);

}

function addOrangeCircles() {
    var cc2 = document.getElementById('c2');
    var conO = cc2.getContext("2d");
    var radius = 40;
  
    conO.clearRect(0, 0, cc2.width, cc2.height);

    conO.beginPath();
    conO.arc(50, 60, radius, 0, 2 * Math.PI, false);
    conO.fillStyle = '#e52d27';
    conO.fill();
  
    conO.beginPath();
    conO.arc(150, 60, radius, 0, 2 * Math.PI, false);
    conO.fillStyle = '#FFD700';
    conO.fill();
  
    conO.beginPath();
    conO.arc(250, 60, radius, 0, 2 * Math.PI, false);
    conO.fillStyle = '#ef9700';
    conO.fill();
  
    conO.textAlign = "center";
    conO.fillStyle = "black";
    conO.font= "16px sans-serif";
    conO.fillText("red + yellow = ORANGE", cc2.width / 2, 130);
    
    conO.fillStyle = "black";
    conO.font= "bold 28px sans-serif";
    conO.fillText("+", 100, 75);
  
    conO.fillStyle = "black";
    conO.font= "bold 28px sans-serif";
    conO.fillText("=", 200, 75);

}

function addRedTriangles(coordinatesArray) {
    var cc3 = document.getElementById('c3');
    var conR = cc3.getContext('2d');
    var sideLength = 80;
    var triangleHeight = sideLength * Math.sqrt(3) / 2;
  
    conR.clearRect(0, 0, cc3.width, cc3.height);

    for (var i = 0; i < coordinatesArray.length; i++) {
      var x = coordinatesArray[i][0];
      var y = coordinatesArray[i][1];

    conR.beginPath();
    conR.moveTo(x, y - triangleHeight / 2); // Top vertex
    conR.lineTo(x - sideLength / 2, y + triangleHeight / 2); // Bottom-left vertex
    conR.lineTo(x + sideLength / 2, y + triangleHeight / 2); // Bottom-right vertex
    conR.closePath(); // Connects the last point to the first point to close the path
    conR.fillStyle = '#e52d27';
    conR.fill();
      
    conR.textAlign = "center";
    conR.fillStyle = "black";
    conR.font= "16px sans-serif";
    conR.fillText("These are RED triangles.", cc3.width / 2, 130);
              
 }
}

function addBlueTriangles(coordinatesArray) {
    var cc3 = document.getElementById('c3');
    var conB = cc3.getContext('2d');
    var sideLength = 80;
    var triangleHeight = sideLength * Math.sqrt(3) / 2;
  
    conB.clearRect(0, 0, cc3.width, cc3.height);

    for (var i = 0; i < coordinatesArray.length; i++) {
      var x = coordinatesArray[i][0];
      var y = coordinatesArray[i][1];

    conB.beginPath();
    conB.moveTo(x, y - triangleHeight / 2); // Top vertex
    conB.lineTo(x - sideLength / 2, y + triangleHeight / 2); // Bottom-left vertex
    conB.lineTo(x + sideLength / 2, y + triangleHeight / 2); // Bottom-right vertex
    conB.closePath(); // Connects the last point to the first point to close the path
    conB.fillStyle = '#3399FF';
    conB.fill();
      
    conB.textAlign = "center";
    conB.fillStyle = "black";
    conB.font= "16px sans-serif";
    conB.fillText("These are BLUE triangles.", cc3.width / 2, 130);
              
 }
}

function addYellowTriangles(coordinatesArray) {
    var cc3 = document.getElementById('c3');
    var conY = cc3.getContext('2d');
    var sideLength = 80;
    var triangleHeight = sideLength * Math.sqrt(3) / 2;
  
    conY.clearRect(0, 0, cc3.width, cc3.height);

    for (var i = 0; i < coordinatesArray.length; i++) {
      var x = coordinatesArray[i][0];
      var y = coordinatesArray[i][1];

    conY.beginPath();
    conY.moveTo(x, y - triangleHeight / 2); // Top vertex
    conY.lineTo(x - sideLength / 2, y + triangleHeight / 2); // Bottom-left vertex
    conY.lineTo(x + sideLength / 2, y + triangleHeight / 2); // Bottom-right vertex
    conY.closePath(); // Connects the last point to the first point to close the path
    conY.fillStyle = '#FFD700';
    conY.fill();
      
    conY.textAlign = "center";
    conY.fillStyle = "black";
    conY.font= "16px sans-serif";
    conY.fillText("These are YELLOW triangles.", cc3.width / 2, 130);
              
 }
}

function addPurpleTriangles(coordinatesArray) {
    var cc3 = document.getElementById('c3');
    var conP = cc3.getContext('2d');
    var sideLength = 80;
    var triangleHeight = sideLength * Math.sqrt(3) / 2;
  
    conP.clearRect(0, 0, cc3.width, cc3.height);

    for (var i = 0; i < coordinatesArray.length; i++) {
        var x = coordinatesArray[i][0];
        var y = coordinatesArray[i][1];

        conP.beginPath();
  // Top vertex
        conP.moveTo(x, y - triangleHeight / 2); 
  // Bottom-left vertex      
        conP.lineTo(x - sideLength / 2, y + triangleHeight / 2); 
  // Bottom-right vertex
      conP.lineTo(x + sideLength / 2, y + triangleHeight / 2); 
  // Connects the last point to the first point to close the path 
        conP.closePath();

        switch (i) {
            case 0:
                conP.fillStyle = '#e52d27';
                break;
            case 1:
                conP.fillStyle = '#3399FF';
                break;
            case 2:
                conP.fillStyle = '#8A2BE2';
                break;
        }

        conP.fill();
    }

    conP.textAlign = "center";
    conP.fillStyle = "black";
    conP.font = "16px sans-serif";
    conP.fillText("red + blue = PURPLE", cc3.width / 2, 130);
  
    conP.fillStyle = "black";
    conP.font= "bold 28px sans-serif";
    conP.fillText("+", 100, 65);
  
    conP.fillStyle = "black";
    conP.font= "bold 28px sans-serif";
    conP.fillText("=", 200, 65);
}

function addGreenTriangles(coordinatesArray) {
    var cc3 = document.getElementById('c3');
    var conG = cc3.getContext('2d');
    var sideLength = 80;
    var triangleHeight = sideLength * Math.sqrt(3) / 2;
  
    conG.clearRect(0, 0, cc3.width, cc3.height);

    for (var i = 0; i < coordinatesArray.length; i++) {
        var x = coordinatesArray[i][0];
        var y = coordinatesArray[i][1];

        conG.beginPath();
        conG.moveTo(x, y - triangleHeight / 2);     
        conG.lineTo(x - sideLength / 2, y + triangleHeight / 2); 
      conG.lineTo(x + sideLength / 2, y + triangleHeight / 2);  
        conG.closePath();

        switch (i) {
            case 0:
                conG.fillStyle = '#FFD700';
                break;
            case 1:
                conG.fillStyle = '#3399FF';
                break;
            case 2:
                conG.fillStyle = '#2E8B57';
                break;
        }

        conG.fill();
    }

    conG.textAlign = "center";
    conG.fillStyle = "black";
    conG.font = "16px sans-serif";
    conG.fillText("yellow + blue = GREEN", cc3.width / 2, 130);
  
    conG.fillStyle = "black";
    conG.font= "bold 28px sans-serif";
    conG.fillText("+", 100, 65);
  
    conG.fillStyle = "black";
    conG.font= "bold 28px sans-serif";
    conG.fillText("=", 200, 65);
}

function addOrangeTriangles(coordinatesArray) {
    var cc3 = document.getElementById('c3');
    var conO = cc3.getContext('2d');
    var sideLength = 80;
    var triangleHeight = sideLength * Math.sqrt(3) / 2;
  
    conO.clearRect(0, 0, cc3.width, cc3.height);

    for (var i = 0; i < coordinatesArray.length; i++) {
        var x = coordinatesArray[i][0];
        var y = coordinatesArray[i][1];

        conO.beginPath();
        conO.moveTo(x, y - triangleHeight / 2);     
        conO.lineTo(x - sideLength / 2, y + triangleHeight / 2); 
      conO.lineTo(x + sideLength / 2, y + triangleHeight / 2);  
        conO.closePath();

        switch (i) {
            case 0:
                conO.fillStyle = '#e52d27';
                break;
            case 1:
                conO.fillStyle = '#FFD700';
                break;
            case 2:
                conO.fillStyle = '#ef9700';
                break;
        }

        conO.fill();
    }

    conO.textAlign = "center";
    conO.fillStyle = "black";
    conO.font = "16px sans-serif";
    conO.fillText("red + yellow = ORANGE", cc3.width / 2, 130);
  
    conO.fillStyle = "black";
    conO.font= "bold 28px sans-serif";
    conO.fillText("+", 100, 65);
  
    conO.fillStyle = "black";
    conO.font= "bold 28px sans-serif";
    conO.fillText("=", 200, 65);
}

function docolor() {
  
  var cc4 = document.getElementById("c4");
  var colorinput = document.getElementById("clr");
  var color = colorinput.value;
  
  cc4.style.backgroundColor = color;
  
}

function dosquare() {
  
  var cc4 = document.getElementById("c4");
  var sizeinput = document.getElementById("sldr");
  var size = sizeinput.value
  var sqr = cc4.getContext("2d");
  
  sqr.clearRect(0,0,cc4.width,cc4.height);
  
  var startX = (cc4.width - size) / 2;
  var startY = (cc4.height - size) / 2;
  
  sqr.fillStyle = "#509BDF";
  sqr.strokeStyle = "#333333";
  sqr.fillRect(startX,startY,size,size);
  sqr.strokeRect(startX,startY,size, size);
  
}

function docircle() {
    var cc4 = document.getElementById("c4");
    var sizeinput = document.getElementById("circleSldr");
    var size = sizeinput.value;
    var crl = cc4.getContext("2d");

    crl.clearRect(0, 0, cc4.width, cc4.height);

    var centerX = cc4.width / 2;
    var centerY = cc4.height / 2;
    var radius = size;

    crl.strokeStyle = "#333333";
    crl.fillStyle = "#509BDF"; 
    crl.beginPath();
    crl.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    crl.closePath();
    crl.fill();
    crl.stroke();
}

function dotriangle() {
    var cc4 = document.getElementById("c4");
    var sizeinput = document.getElementById("triangleSldr");
    var size = sizeinput.value;
    var tria = cc4.getContext("2d");

    tria.clearRect(0, 0, cc4.width, cc4.height);

    var centerX = cc4.width / 2;
    var centerY = cc4.height / 2;
    var height = Math.sqrt(3) * size / 2; // Height of equilateral triangle
    var halfBase = size / 2; // Half of the base length
    
    tria.strokeStyle = "#333333";
    tria.fillStyle = "#509BDF";
    tria.beginPath();
    tria.moveTo(centerX - halfBase, centerY + height / 2); // Bottom left corner
    tria.lineTo(centerX + halfBase, centerY + height / 2); // Bottom right corner
    tria.lineTo(centerX, centerY - height / 2); // Top corner
    tria.closePath();
    tria.fill();
    tria.stroke();
}