function divYap(genislik, yukseklik, arkaplan)
{
    var yeni = document.createElement("DIV");
    
    yeni.style.width = genislik + "px";
    yeni.style.height = yukseklik + "px";
    yeni.style.backgroundColor = arkaplan;
    yeni.style.cssFloat = "left";
    yeni.style.styleFloat = "left";
    return yeni;
}
