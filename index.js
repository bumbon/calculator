var Dial = document.getElementById("Dial");

function addToDial(x)
{
Dial.value += x;
	if(x=="C")
	{
		Dial.value= " ";
	}
}

function result()
{
	x = Dial.value;
	x = eval(x);
	Dial.value = x;
}

function backspace()
{
var number = Dial.value;
var length = number.length - 1;
var newNumber = number.substring(0, length);
Dial.value = newNumber;
}

function Sqrt(x)
{
	x = Dial.value;
	x = Math.sqrt(x);
	Dial.value = x;

}