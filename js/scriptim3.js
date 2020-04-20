function konuEkle()
{
    var yeniH3 = document.createElement("H3");
    var yeniP = document.createElement("P");
    
    yeniH3.innerHTML = document.getElementById("ornekBaslik").value;
    yeniP.innerHTML = document.getElementById("ornekIcerik").value;
    
    yeniH3.style.borderBottom = "solid 2px black";
    yeniP.style.wordSpacing = "5px";
    
    var konuCerc = document.getElementById("ornekDiv");
    
    konuCerc.appendChild(yeniH3);   
    konuCerc.appendChild(yeniP);
}
