var adam = new Array("___\n", " |\n", " O\n", " /", "|", "\\\n", " /", " \\\n", "___");
var kelimeler= ["KAPI","ÇEKMECE","ANAHTARLIK","BİLGİSAYAR","TERZİ","TERAZİ","YOKARTIK","BULMACA","AZLIK",
,"AZMAK","AZMAN","AZNİF","AZOİK","AZVAY","ABUJA","ACCRA","AMMAN","ATİNA","HİPOPOTAM","AYGIR","SU","TUZ","BİBER","KURABİYE",
"FISTIK","ANNE","FİL","YILAN","SOLUCAN","TIRTIL","HADİSE","TÜRKİYE","TÜRK","RECEP","BERFİN"];
var kelime;
var hak=0;
 
//nesnelerin oluşturulması
var kelimeUret= document.getElementById("kelime-uret");
var daragaci= document.getElementById("daracagi");
var cikanHarf= document.getElementById("cikan-harf");
var harfler= document.querySelectorAll(".harf");
 
//bootstrap(otomatik çalışacak kodlar)
(function(){
harfler.forEach(function(gelen) {
gelen.onclick=function(olay){
 
this.setAttribute("disabled","disabled");
var durum= harfKontrol(kelime,this.textContent);
harfEkle(this.textContent);
if(durum)
{
harfYerlestir(kelime,this.textContent);
 
}
else
{
daragaci.textContent+= adam[hak];
hak++;
}
 
var tireDurum=tireKontrol();
if(!tireDurum)
{
window.alert("TEBRİKLER");
tumHarflerPasif();
 
}
if(adam.length<=hak)
{
window.alert("ÖLDÜNÜZ");
tumHarfleriYaz(kelime);
tumHarflerPasif();
 
}
}
});
harfSec();
 
})();
 
// olayların atanaması
kelimeUret.onclick=harfSec;
 
//fonksiyonlar
 
function harfSec()
{
var sira=Math.round(Math.random()*kelimeler.length);
kelime=new String(kelimeler[sira]);
kelime=kelime.split("");
 
/*kelime= kelime.map(function(gelen){
return gelen+"_";
});*/
 
yertutucu(kelime);
}
 
//gizli harflerin yerine gösterlicek butonlar
function yertutucu(kelime)
{
var yertutucu=document.getElementById("yertutucu");
yertutucu.innerHTML="";
daragaci.innerHTML="";
tumHarflerAktif();
hak=0;
 
for(var i=0;i<kelime.length;i++)
{
var harf = document.createElement("button");
harf.setAttribute("type","button")
harf.classList.add("btn", "btn-primary", "bharf");
harf.textContent="_";
yertutucu.appendChild(harf);
}
}
 
function harfKontrol(kelime,harf){
return kelime.some(x => x ==harf );
}
 
function harfYerlestir(kelime,harf){
var bharfler= document.querySelectorAll(".bharf");
for(sira in kelime)
{
if(harf==kelime[sira])
{
bharfler[sira].textContent=harf;
}
}
}
 
function tumHarfleriYaz(kelime)
{
var bharfler= document.querySelectorAll(".bharf");
for(sira in kelime)
{
harfYerlestir(kelime,kelime[sira]);
}
}
 
function tumHarflerPasif()
{
harfler.forEach(function(eleman){
eleman.setAttribute("disabled","disabled");
});
 
}
function tumHarflerAktif()
{
harfler.forEach(function(eleman){
eleman.removeAttribute("disabled");
});
 
}
function tireKontrol()
{
var durum= false;
var bharfler= document.querySelectorAll(".bharf");
 
for(sira in bharfler)
{
 
if(bharfler[sira].textContent=="_")
{
durum=true;
}
}
return durum;
 
}
 
function harfEkle(harf)
{
cikanHarf.textContent=cikanHarf.textContent+" "+harf;
}