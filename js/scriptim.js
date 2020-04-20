function degistir() {

        var elementler  =  document.getElementsByTagName("h3");
        var i=0;
        for (; i< elementler.length; i++) {
            var ozellik= document.createAttribute("class");
            ozellik.value = "kirmizi";
            elementler[i].setAttributeNode(ozellik);
        }
}

