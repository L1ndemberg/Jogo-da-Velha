let tabuleiro = document.getElementById("tabuleiro");

let context = tabuleiro.getContext("2d");

context.moveTo(150,0);
context.lineTo(150, 450);
context.strokeStyle = "rgba(0, 0, 0, 0.0)";
context.lineWidth = 8;
context.stroke();

context.moveTo(300,0);
context.lineTo(300, 450);
context.lineWidth = 8;
context.stroke();

context.moveTo(0,300);
context.lineTo(450, 300);
context.lineWidth = 8;
context.stroke();

context.moveTo(0,147);
context.lineTo(450, 147);
context.strokeStyle = "rgba(0, 0, 0, 0.3)";
context.lineWidth = 8;
context.stroke();


