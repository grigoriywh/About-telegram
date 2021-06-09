
function Validate (valueX,valueY) {

	let para = document.getElementById('result1');
	var valueX = Number(document.getElementById("x").value);
	var valueY = Number(document.getElementById("y").value);
	var valueZ = 0;

	if (valueY > 3) {
		para.innerHTML += "	<br> Y не может быть больше трёх, иначе будет извлечение корня из отрицательного числа!"
	} else {
		valueZ = ((-valueX/3)/(3*Math.abs(2*valueX-valueY)))+Math.sqrt((3-valueY)/Math.pow(Math.abs(valueY),3));
		para.innerHTML += "	<br> Вы ввели числа  x = " + valueX;
		para.innerHTML += " и y = " +valueY; 	
		para.innerHTML += " <br><br> Результат  Z = " + valueZ;
	}
	}


function array (x0,x1,x2,x3,x4,x5,x6,x7) {

	let para = document.getElementById('result2');
	var x0 = Number(document.getElementById("arr0").value);
	var x1 = Number(document.getElementById("arr1").value);
	var x2 = Number(document.getElementById("arr2").value);
	var x3 = Number(document.getElementById("arr3").value);
	var x4 = Number(document.getElementById("arr4").value);
	var x5 = Number(document.getElementById("arr5").value);
	var x6 = Number(document.getElementById("arr6").value);
	var x7 = Number(document.getElementById("arr7").value);
	var arr = [x0,x1,x2,x3,x4,x5,x6,x7];
	
	var index = 0;
	var temp = 0;
	var last;
	para.innerHTML += "	<br><br> Дан целочисленный массив из 7-ми элементов: <br>";
	para.innerHTML += "	<br> Вы ввели массив чисел : [ " + x0 + ", " + x1 + ", " + x2 + ", " + x3 + ", " + x4 + ", " + x5 + ", " + x6 + ", " + x7 + "]";


	for (index = 0; index <= 7; ++index) {
		if (arr[index] < 0) {
			temp++;
			last = arr[index];
		}
	}
		para.innerHTML += "	<br><br> Количество отрицательных элементов в массиве = " + temp;
		if (last != undefined) {
			para.innerHTML += "	<br> Последнее отрицательное число в массиве = " + last;
		}
}