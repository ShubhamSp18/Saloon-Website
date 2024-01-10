var menu = document.getElementById('menu');
var navigation = document.getElementById('navigation');
var menu = document.getElementById('menu');

menu.onclick = funtion()
{
    if(navigation.style.right == "-200px")
    {
        navigation.style.right = "0";
    }
    else{
        navigation.style.right = "-200px";
    }
}