/*Esta función crea dos variables, la variable hoy que recoge la fecha del sistema 
y la variable dia que recoge el dia exacto de la variable hoy,los días coinciden con números
del 0 al 6,resaltando en el html el correspondiente al dia que es en rojo*/
function muestraDia(){
	
	var hoy = new Date();
	
	var dia= hoy.getDay();
	
		if(dia==1){
			document.getElementById("p15").style.color="red";
	}
		if(dia==2){
			document.getElementById("p16").style.color="red";
	}
		if(dia==3){
			document.getElementById("p17").style.color="red";
	}
		if(dia==4){
			document.getElementById("p18").style.color="red";
	}
		if(dia==5){
			document.getElementById("p19").style.color="red";
	}
		if(dia==6){
			document.getElementById("p20").style.color="red";
	}
		if(dia==0){
			document.getElementById("p21").style.color="red";
	}
}
/*Esta función crea dos variables, la variable mesActual que recoge la fecha del sistema 
y la variable mes que recoge el mes exacto de la variable mesActual,los meses coinciden con números
del 0 al 11,cambiando el mensaje interior de una tabla al correspondiente con el mes*/
function muestraMes(){
	
	var mesActual = new Date();
	
	var mes= mesActual.getMonth();
	
	if(mes==0){
			document.getElementById("div1").innerHTML="Enero";
	}
	if(mes==1){
			document.getElementById("div1").innerHTML="Febrero";
	}
	if(mes==2){
			document.getElementById("div1").innerHTML="Marzo";
	}
	if(mes==3){
			document.getElementById("div1").innerHTML="Abril";
	}
	if(mes==4){
			document.getElementById("div1").innerHTML="Mayo";
	}
	if(mes==5){
			document.getElementById("div1").innerHTML="Junio";
	}
	if(mes==6){
			document.getElementById("div1").innerHTML="Julio";
	}
	if(mes==7){
			document.getElementById("div1").innerHTML="Agosto";
	}
	if(mes==8){
			document.getElementById("div1").innerHTML="Septiembre";
	}
	if(mes==9){
			document.getElementById("div1").innerHTML="Octubre";
	}
	if(mes==10){
			document.getElementById("div1").innerHTML="Noviembre";
	}
	if(mes==11){
			document.getElementById("div1").innerHTML="Diciembre";
	}
}
/*Estas funciones activadas por botones en el html cambian el color de fondo de unas celdas en el html dependiendo
del botón que presiones,para ello usa el identificador único de cada celda*/
function Dibujo(){
	document.getElementById("30").style.background="yellow";
	document.getElementById("13").style.background="yellow";
	document.getElementById("12").style.background="yellow";
	document.getElementById("9").style.background="yellow";
}
function Fisica(){
	document.getElementById("1").style.background="yellow";
	document.getElementById("15").style.background="yellow";
	document.getElementById("17").style.background="yellow";
	document.getElementById("24").style.background="yellow";
}
function Ingles(){
	document.getElementById("7").style.background="yellow";
	document.getElementById("10").style.background="yellow";
	document.getElementById("26").style.background="yellow";
}
function Historia(){
	document.getElementById("29").style.background="yellow";
	document.getElementById("23").style.background="yellow";
	document.getElementById("22").style.background="yellow";
	document.getElementById("21").style.background="yellow";
}
function Lengua(){
	document.getElementById("27").style.background="yellow";
	document.getElementById("20").style.background="yellow";
	document.getElementById("16").style.background="yellow";
	document.getElementById("3").style.background="yellow";
}
function TIC(){
	document.getElementById("25").style.background="yellow";
	document.getElementById("19").style.background="yellow";
	document.getElementById("18").style.background="yellow";
}
function TecnologiaIndustrial(){
	document.getElementById("14").style.background="yellow";
	document.getElementById("8").style.background="yellow";
	document.getElementById("6").style.background="yellow";
	document.getElementById("5").style.background="yellow";
}
function Matematicas(){
	document.getElementById("28").style.background="yellow";
	document.getElementById("11").style.background="yellow";
	document.getElementById("4").style.background="yellow";
	document.getElementById("2").style.background="yellow";
}
/*Esta función da la media de las notas que escribes en las propuestas que te salen al pulsar el botón correspondiente en
el html,en cada respuesta se define el valor de cada variable y la variable p recoge todos los valores y los divide entre 8
asi halla la media general de esas asignaturas y mediante una alerta te devuelve el valor de p*/
function media(){
	var vr1 = prompt("Ingrese su nota de Tecnología industrial");
	var vr2 = prompt("Ingrese su nota de Inglés");
	var vr3 = prompt("Ingrese su nota de TIC");
	var vr4 = prompt("Ingrese su nota de Lengua");
	var vr5 = prompt("Ingrese su nota de Historia de España");
	var vr6 = prompt("Ingrese su nota de Física");
	var vr7 = prompt("Ingrese su nota de Dibujo técnico");
	var vr8 = prompt("Ingrese su nota de Matemáticas");
	var p = (parseFloat(vr1)+parseFloat(vr2)+parseFloat(vr3)+parseFloat(vr4)+parseFloat(vr5)+parseFloat(vr6)+parseFloat(vr7)+parseFloat(vr8))/8;
				alert("Su promedio es: "+p)
}
	

	
	
		