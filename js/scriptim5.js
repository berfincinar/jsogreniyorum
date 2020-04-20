function divYap_Test()
{
    var alan = document.getElementById("ornekAlan");
    
    alan.appendChild( divYap(20,10, 'blue') );
    alan.appendChild( divYap(30,30, 'green') );
    alan.appendChild( divYap(40,20, 'red') );
    alan.appendChild( divYap(50,10, '#F0A000') );
    alan.appendChild( divYap(40,40, '#A0F000') );
    alan.appendChild( divYap(15,15, '#00A0F0') );
    alan.appendChild( divYap(10,10, '#00F090') );
}