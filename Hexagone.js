/*Ming-Xia Delvas
14-02-18
Le programme permet de dessiner une cible de n anneaux hexagonaux
et dont ils sont espacés les uns des autres par la taille d'un hexagone*/

//Faire un polygone selon x nbrs de cotés désirés
var polygoneReg = function (cote, nbCotes) {
    for(var i = 1; i <= nbCotes; i++) {
        fd(cote);
        rt(360/nbCotes);
    }
};


//Fonction permettant de dessiner un hexagone
var hexagone = function (cote, n) {
    polygoneReg(cote,6);
};


var angle = 60; //Positionner ma tortue selon l'angle

//Fonction permettant de faire mon espace entre les hexagones
var espace = function (cote, n) {
    pu();
    fd(cote*3);
    pd();
};

//Dessine deux hexagones peu importe la position de ma tortue
var deuxHexagone = function (cote, n){

    for(var i=1; i<=2; i++){
        hexagone(cote);
        lt(angle*2);     
    }
    rt(angle*4);
};


//Permet la répétition de mes 2 hexagones sur la même ligne, n fois désiré
var nHexa = function(cote, n){

    for(var j=0; j<n; j++){
        
        deuxHexagone(cote);

//Ma tortue se positionne entre les deux prochain hexagones        
        pu();
        rt(angle*2); fd(cote); lt(angle); fd(cote); rt(angle); fd(cote);
        lt(angle); fd(cote); lt(angle);
        pd();
    }    
};

//Permet de répéter le nombre de ligne d'hexagone voulu
var repetition = function (cote, n){
    for (var i = 0; i<6; i++){
        nHexa(cote,n);

//Change l'angle de ma tortue pour passer à la prochaine ligne
        pu(); rt(angle); bk(cote); pd();
    }   
};


var cible = function (cote, n) {

    for(var cercle=0; cercle<n; cercle++){

        if(cercle == 0){
            hexagone(cote);
            espace(cote);
        } else {
            repetition(cote, cercle);
            espace(cote);
            
//Positionne ma tortue à gauche de la prochaine ligne
            pu(); lt(angle*2); fd(cote); rt(angle); fd(cote);
            rt(angle);
            pd();
        }
    }
};


cible(10,3);
