function addOpt()
{
 var opt = document.createElement("option");
 document.getElementById("konular").options.add(opt);
 opt.text = document.getElementById('urun').value;
 opt.value = document.getElementById('urun').value;
}
function removeOpt()
{
 var silSelect=document.getElementById("konular");
 silSelect.remove(silSelect.selectedIndex);
}
function optNumber()
{
 alert(document.getElementById("konular").options.length);
}