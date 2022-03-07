// TechZara Javascript
while(true){
    var nombre = prompt("entrez un nombre (ou taper T pour terminer)");
    let tech = "";
    let js = "";
    let resultat="";

    if(nombre > 0 ){
        for(let i = 1;i <nombre ; i++){
            js += "Javascript";
        }
        resultat = "TechZara" + tech +"Javascript"+ js;
    }else if(nombre < 0 ){

        for(let i=1;i < Math.abs(nombre);i++){
            tech += "TechZara";
        }        
        resultat = "TechZara" + tech +"Javascript"+ js;
    }else if(nombre == "T"){
       alert("Merci et Au revoir")      
        break;
    }else{
        resultat = "Vous avez saisi une chaine de caractère"
    }
    alert(resultat);
}
