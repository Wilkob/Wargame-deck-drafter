//var Dicts = new Dictionaries();
function init() {
    window.Deck = new DeckAssembly();
    window.CardsDB = new Array(1024);
    window.Matrix = new matrix();
    for (var i = 0; i < 1025; i++) {
    CardsDB[i]=Array(2);
    }
    initMainDB();
    window.selectedCards = [];
    GUIDisplay();
}

function btDecode()
{
    debugClear();
    DeckDisAssembly();
    GUIDisplay();
    DeckExport();
}

function btClear()
{
    Deck = new DeckAssembly();
    GUIDisplay();
    DeckExport();
}

function listUnits() //get units for display
{
    var tables = ["log", "inf", "sup", "tnk", "rec", "veh", "hel", "air", "nav"]
    for(var i=0; i<9; i++){        
        var body = document.getElementById(tables[i] + "Body");
        var blankBody = document.createElement('tbody');
        blankBody.setAttribute("id",tables[i] + "Body");
        body.parentNode.replaceChild(blankBody, body);
    }
    
    if(Deck.sNation == "ANZAC" || Deck.sNation == "BRD" || Deck.sNation == "CAN" || Deck.sNation == "DEN" || Deck.sNation == "FRA" || Deck.sNation == "JAP" || Deck.sNation == "NED" || Deck.sNation == "NOR" || Deck.sNation == "ROK" || Deck.sNation == "SWE" || Deck.sNation == "UK" || Deck.sNation == "USA" || Deck.sNation == "CZS" || Deck.sNation == "DDR" || Deck.sNation == "DPRK" || Deck.Nation == "POL" || Deck.sNation == "PRC" || Deck.sNation == "USSR" || Deck.sNation == "ISR" || Deck.sNation == "FIN" || Deck.sNation == "YU")
    {
       UnitLookup(Deck.sNation);
    }
    else if (Deck.sNation == "NATO")
    {
        UnitLookup("ANZAC");
        UnitLookup("BRD");
        UnitLookup("CAN");
        UnitLookup("DEN");
        UnitLookup("FRA");
        UnitLookup("JAP");
        UnitLookup("NED");
        UnitLookup("NOR");
        UnitLookup("ROK");
        UnitLookup("SWE");
        UnitLookup("UK");
        UnitLookup("USA");
        UnitLookup("ISR");
    }
    else if (Deck.sNation == "REDFOR")
    {
        UnitLookup("CZS");
        UnitLookup("DDR");
        UnitLookup("DPRK");
        UnitLookup("POL");
        UnitLookup("PRC");
        UnitLookup("USSR");
        UnitLookup("FIN");
        UnitLookup("YU");
    }
    else if (Deck.sNation == "BD")
    {
        UnitLookup("ROK");
        UnitLookup("JAP");
    }
    else if (Deck.sNation == "CW")
    {
        UnitLookup("ANZAC");
        UnitLookup("CAN");
        UnitLookup("UK");
    }
    else if (Deck.sNation == "EU")
    {
        UnitLookup("BRD");
        UnitLookup("FRA");
    }
    else if (Deck.sNation == "LJUT")
    {
        UnitLookup("BRD");
        UnitLookup("FRA");
    }
    else if (Deck.sNation == "BDRNL")
    {
        UnitLookup("BRD");
        UnitLookup("NED");
    }
    else if (Deck.sNation == "NORAD")
    {
        UnitLookup("CAN");
        UnitLookup("USA");
    }
    else if (Deck.sNation == "SCA")
    {
        UnitLookup("DEN");
        UnitLookup("NOR");
        UnitLookup("SWE");
    }
    else if (Deck.sNation == "NSWP")
    {
        UnitLookup("CZS");
        UnitLookup("DDR");
        UnitLookup("POL");
    }
    else if (Deck.sNation == "RD")
    {
        UnitLookup("DPRK");
        UnitLookup("PRC");
    }
    else if (Deck.sNation == "SOVKOR")
    {
        UnitLookup("DPRK");
        UnitLookup("USSR");
    }
}

function UnitLookup(nation){
    var card;
    var year = 0;
    if(Deck.sEra == "B"){ year = 1986;}//I think FOBs are "year 0". Should be "-7500"
    if(Deck.sEra == "C"){ year = 1981;}
    var spec = -1;
    if(Deck.sSpec == "MAR"){spec=0;}
    else if (Deck.sSpec == "AIR"){spec=0;}
    else if (Deck.sSpec == "MECH"){spec=1;}
    else if (Deck.sSpec == "ARM"){spec=3;}
    else if (Deck.sSpec == "MOTO"){spec=4;}
    else if (Deck.sSpec == "SUP"){spec=5;}
    
    for (var i=0; i<1024;i++){
        card = CardsDB[i][Deck.iSide];
        if(card.sUnitData.charAt(4) != '1'){ //transports don't get their own card
            if (card.sNation == nation && card.iYear >= year){
                if((Deck.sNation != "NATO" && Deck.sNation != "REDFOR") || card.iIsProto == '0'){
                    if (card.sSpecDeck.charAt(spec) != '1' || Deck.sSpec == "GEN"){  
                        var transport = 0;
                        if (card.sUnitData.charAt(7) == '1'){
                            for (var j=0; j<TransportLinker.length; j++){
                                if (card.iUnitID == TransportLinker[j].uID){
                                    var pair = new VehicleCard("000", card, CardsDB[TransportLinker[j].vID][Deck.iSide], 0);
                                    if (pair.iYear >= year) {
                                        if((Deck.sNation != "NATO" && Deck.sNation != "REDFOR") || pair.iIsProto == '0'){
                                            if (pair.sSpec.charAt(spec) != '1' || Deck.sSpec == "GEN"){  
                                                toList(pair);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else{
                            var single = new VehicleCard("000", card, 0, 0);
                            toList(single);                        
                        }
                    }
                }
            }
        }
    }
}

function toList(card){ 
    var type;
    if (card.Unit.sUnitData.charAt(17) == '1'){ type = "logTable";}//logi
    else if (card.Unit.sUnitData.charAt(18) == '1'){type = "infTable";}//inf
    else if (card.Unit.sUnitData.charAt(19) == '1'){type = "supTable";}//sup
    else if (card.Unit.sUnitData.charAt(20) == '1'){type = "tnkTable";}//tnk
    else if (card.Unit.sUnitData.charAt(21) == '1'){type = "recTable";}//rec
    else if (card.Unit.sUnitData.charAt(22) == '1'){type = "vehTable";}//veh
    else if (card.Unit.sUnitData.charAt(23) == '1'){type = "helTable";}//hel
    else if (card.Unit.sUnitData.charAt(24) == '1'){type = "airTable";}//air
    else {type = "navTable";}//nav
    
    var table = document.getElementById(type);
    var row = table.insertRow(table.rows.length);
    var nation = row.insertCell(0);
    var unit = row.insertCell(1);
    var cardsU = row.insertCell(2);
    var trans = row.insertCell(3);
    var cardsT = row.insertCell(4);
    var btn = row.insertCell(5);
    nation.innerHTML = card.sNation;
    unit.innerHTML = card.Unit.sNameU;
    cardsU.innerHTML = card.Unit.iCards;    
    if(card.Transport !=0){
        trans.innerHTML = card.Transport.sNameU;
        cardsT.innerHTML = card.Transport.iCards;    
    }
    
    let elem = document.createElement('input');
    elem.type = 'button';
    elem.value = '>';
    elem.onclick = function(){ShowCard(card);}; //closure escape via math. FML
    btn.appendChild(elem); 
}

function btNATO_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "NATO";
    Deck.iNation = 202;
    GUIDisplay();
    DeckExport();
}        

function btREDFOR_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "REDFOR";
    Deck.iNation = 362;
    GUIDisplay();
    DeckExport();
}
function btBD_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "BD";
    Deck.iNation = 195;
    GUIDisplay();
    DeckExport();
}
function btCOM_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "CW";
    Deck.iNation = 194;
    GUIDisplay();
    DeckExport();
}
function btEU_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "EU";
    Deck.iNation = 192;
    GUIDisplay();
    DeckExport();
}
function btLJ_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "LJUT";
    Deck.iNation = 198;
    GUIDisplay();
    DeckExport();
}
function btBRDNL_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "BDRNL";
    Deck.iNation = 201;
    GUIDisplay();
    DeckExport();
}
function btNORAD_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "NORAD";
    Deck.iNation = 200;
    GUIDisplay();
    DeckExport();
}
function btSCA_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "SCA";
    Deck.iNation = 193;
    GUIDisplay();
    DeckExport();
}
function btNSWP_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "NSWP";
    Deck.iNation = 357;
    GUIDisplay();
    DeckExport();
}
function btRD_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "RD";
    Deck.iNation = 356;
    GUIDisplay();
    DeckExport();
}
function btRKA_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "SOVKOR";
    Deck.iNation = 359;
    GUIDisplay();
    DeckExport();
}
function btANZAC_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "ANZAC";
    Deck.iNation = 138;
    GUIDisplay();
    DeckExport();
}
function btBRD_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "BRD";
    Deck.iNation = 58;
    GUIDisplay();
    DeckExport();
}
function btCAN_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "CAN";
    Deck.iNation = 74;
    GUIDisplay();
    DeckExport();
}
function btDEN_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "DEN";
    Deck.iNation = 90;
    GUIDisplay();
    DeckExport();
}
function btFRA_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "FRA";
    Deck.iNation = 42;
    GUIDisplay();
    DeckExport();
}
function btJAP_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "JAP";
    Deck.iNation = 154;
    GUIDisplay();
    DeckExport();
}
function btNED_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "NED";
    Deck.iNation = 186;
    GUIDisplay();
    DeckExport();
}
function btNOR_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "NOR";
    Deck.iNation = 122;
    GUIDisplay();
    DeckExport();
}
function btROK_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "ROK";
    Deck.iNation = 170;
    GUIDisplay();
    DeckExport();
}
function btSWE_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "SWE";
    Deck.iNation = 106;
    GUIDisplay();
    DeckExport();
}
function btUK_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "UK";
    Deck.iNation = 26;
    GUIDisplay();
    DeckExport();
}
function btUSA_Click() {
    Deck.sSide = "BLU";
    Deck.iSide = 0;
    Deck.sNation = "USA";
    Deck.iNation = 10;
    GUIDisplay();
    DeckExport();
}
function btCZS_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "CZS";
    Deck.iNation = 314;
    GUIDisplay();
    DeckExport();
}
function btDDR_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "DDR";
    Deck.iNation = 266;
    GUIDisplay();
    DeckExport();
}
function btDPRK_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "DPRK";
    Deck.iNation = 346;
    GUIDisplay();
    DeckExport();
}
function btPOL_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "POL";
    Deck.iNation = 298;
    GUIDisplay();
    DeckExport();
}
function btPRC_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "PRC";
    Deck.iNation = 330;
    GUIDisplay();
    DeckExport();
}

function btUSSR_Click() {
    Deck.sSide = "RED";
    Deck.iSide = 1;
    Deck.sNation = "USSR";
    Deck.iNation = 282;
    GUIDisplay();
    DeckExport();
}

function isError(Card) {
    var isUnavailable = false;
    if (Deck.sNation == "NATO")
    {
        if (
        Card.sNation != "ANZAC" &&
        Card.sNation != "BRD" &&
        Card.sNation != "CAN" &&
        Card.sNation != "DEN" &&
        Card.sNation != "FRA" &&
        Card.sNation != "JAP" &&
        Card.sNation != "NED" &&
        Card.sNation != "NOR" &&
        Card.sNation != "ROK" &&
        Card.sNation != "SWE" &&
        Card.sNation != "UK" &&
        Card.sNation != "USA")
        { isUnavailable = true; }
        if (Card.iIsProto == 1) { isUnavailable = true; }
    }
    else if (Deck.sNation == "REDFOR")
    {
        if (
        Card.sNation != "CZS" &&
        Card.sNation != "DDR" &&
        Card.sNation != "DPRK" &&
        Card.sNation != "POL" &&
        Card.sNation != "PRC" &&
        Card.sNation != "USSR")
        { isUnavailable = true; }
        if (Card.iIsProto == 1) { isUnavailable = true; }
    }
    else if (Deck.sNation == "BD")
    {
        if (
        Card.sNation != "JAP" &&
        Card.sNation != "ROK") { isUnavailable = true; }
    }
    else if (Deck.sNation == "CW")
    {
        if (
        Card.sNation != "ANZAC" &&
        Card.sNation != "CAN" &&
        Card.sNation != "UK") { isUnavailable = true; }
    }
    else if (Deck.sNation == "EU")
    {
        if (
        Card.sNation != "BRD" &&
        Card.sNation != "FRA") { isUnavailable = true; }
    }
    else if (Deck.sNation == "LJUT")
    {
        if (
        Card.sNation != "BRD" &&
        Card.sNation != "DEN") { isUnavailable = true; }
    }
    else if (Deck.sNation == "NORAD")
    {
        if (
        Card.sNation != "CAN" ||
        Card.sNation != "USA") { isUnavailable = true; }
    }
    else if (Deck.sNation == "SCA")
    {
        if (
        Card.sNation != "DEN" &&
        Card.sNation != "NOR" &&
        Card.sNation != "SWE") { isUnavailable = true; }
    }
    else if (Deck.sNation == "NSWP")
    {
        if (
        Card.sNation != "CZS" &&
        Card.sNation != "DDR" &&
        Card.sNation != "POL") { isUnavailable = true; }
    }
    else if (Deck.sNation == "RD")
    {
        if (
        Card.sNation != "DPRK" &&
        Card.sNation != "PRC") { isUnavailable = true; }
    }
    else if (Deck.sNation == "SOVKOR")
    {
        if (
        Card.sNation != "DPRK" &&
        Card.sNation != "USSR") { isUnavailable = true; }
    }
    else if (Deck.sNation == "BDRNL")
    {
        if (
        Card.sNation != "BRD" &&
        Card.sNation != "NED") { isUnavailable = true; }
    }
    else
    {
        if (Card.sNation != Deck.sNation)
        { isUnavailable = true; }
    }
    if (Deck.sEra == "B" && Card.iYear > 1985){ isUnavailable = true; }
    else if (Deck.sEra == "C" && Card.iYear > 1980){ isUnavailable = true; }
    if (Deck.sSpec == "MAR" && Card.sSpec.charAt(0) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "AIR" && Card.sSpec.charAt(1) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "MECH" && Card.sSpec.charAt(2) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "ARM" && Card.sSpec.charAt(3) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "MOTO" && Card.sSpec.charAt(4) != '1') { isUnavailable = true; }
    else if (Deck.sSpec == "SUP" && Card.sSpec.charAt(5) != '1') { isUnavailable = true; }
    return isUnavailable;
}

function ShowCard(Card)
{
    var type, btn;
    if (Card.Unit.sUnitData.charAt(17) == '1'){ type = "log"; btn = 0;}//logi
    else if (Card.Unit.sUnitData.charAt(18) == '1'){type = "inf"; btn = 1;}//inf
    else if (Card.Unit.sUnitData.charAt(19) == '1'){type = "sup"; btn = 2;}//sup
    else if (Card.Unit.sUnitData.charAt(20) == '1'){type = "tnk"; btn = 3;}//tnk
    else if (Card.Unit.sUnitData.charAt(21) == '1'){type = "rec"; btn = 4;}//rec
    else if (Card.Unit.sUnitData.charAt(22) == '1'){type = "veh"; btn = 5;}//veh
    else if (Card.Unit.sUnitData.charAt(23) == '1'){type = "hel"; btn = 6;}//hel
    else if (Card.Unit.sUnitData.charAt(24) == '1'){type = "air"; btn = 7;}//air
    else {type = "navTable";}//nav
    
    document.getElementById("add"+btn+"0").innerHTML = Card.iaAvailability[0];
    document.getElementById("add"+btn+"1").innerHTML = Card.iaAvailability[1];
    document.getElementById("add"+btn+"2").innerHTML = Card.iaAvailability[2];
    document.getElementById("add"+btn+"3").innerHTML = Card.iaAvailability[3];
    document.getElementById("add"+btn+"4").innerHTML = Card.iaAvailability[4];
    
    document.getElementById("D" + type).innerHTML = "";       
    var uText = document.createElement("p");
    uText.innerHTML = Card.Unit.sNameU;
    document.getElementById("D" + type).appendChild(uText); 
    uText = document.createElement("p");
    uText.innerHTML = "HP:" + Card.Unit.iHP;
    document.getElementById("D" + type).appendChild(uText); 
    uText = document.createElement("p");
    uText.innerHTML = InterpretSize(Card.Unit);
    document.getElementById("D" + type).appendChild(uText); 
    uText = document.createElement("p");
    uText.innerHTML = InterpretOptics(Card.Unit);
    document.getElementById("D" + type).appendChild(uText); 
    uText = document.createElement("p");
    uText.innerHTML = InterpretStealth(Card.Unit);
    document.getElementById("D" + type).appendChild(uText); 
    uText = document.createElement("p");
    uText.innerHTML = "Ground Speed:" + Card.Unit.iSpeed + "km/h";
    document.getElementById("D" + type).appendChild(uText); 
    uText = document.createElement("p");
    uText.innerHTML = "Road Speed:" + Card.Unit.iRSpeed + "km/h";
    document.getElementById("D" + type).appendChild(uText); 
    uText = document.createElement("p");
    uText.innerHTML = "Amphibious Speed:" + Card.Unit.iASpeed + "km/h";
    document.getElementById("D" + type).appendChild(uText); 
    uText = document.createElement("p");
    uText.innerHTML = InterpretTraining(Card);
    document.getElementById("D" + type).appendChild(uText); 
    uText = document.createElement("p");
    uText.innerHTML = "Autonomy" + Card.Unit.iAutonomy;
    document.getElementById("D" + type).appendChild(uText); 
    uText = document.createElement("p");
    uText.innerHTML = Card.Unit.iYear;
    document.getElementById("D" + type).appendChild(uText); 
    uText = document.createElement("p");
    uText.innerHTML = "Road Speed:" + Card.Unit.iRSpeed + "km/h";
    document.getElementById("D" + type).appendChild(uText); 
    
    showWeapon(Card.Unit.W1, type, 1);
    showWeapon(Card.Unit.W2, type, 2);
    showWeapon(Card.Unit.W3, type, 3);
}
/*
            //lLOGunitProto.Content = Card.Unit.iIsProto;
            //lLOGunitDeck.Content = Card.Unit.
            lLOGunitFAV.Content = Card.Unit.iaArmor[0];
            lLOGunitBAV.Content = Card.Unit.iaArmor[1];
            lLOGunitSAV.Content = Card.Unit.iaArmor[2];
            lLOGunitTAV.Content = Card.Unit.iaArmor[3];
    }*/

 function InterpretTraining(Card)
 {
     switch (Card.Unit.iTraining)
     {
         case 1:
             return "Training: Militia";
         case 2:
             return "Training: Line";
         case 3:
             return "Training: Shock";
         case 4:
             return "Training: Elite";
         default:
             return "";
     }
 }

 function InterpretStealth( Card)
 {
     switch (Card.iStealth)
     {
         case 1: return "Stealth: Poor";
         case 2: return "Stealth: Medium";
         case 3: return "Stealth: Good";
         case 4: return "Stealth: Very good";
         case 5: return "Stealth: Exceptional";
         default: return "Stealth: none";
     }
 }

 function InterpretOptics( Card)
 {
     var optika;
     if (Card.sUnitData.charAt(24) == '1') { optika = "Air Detection"; } else { optika = "Optics"; }
     switch (Card.iOptics)
     {
         case 1:
             return optika + ": Poor";
         case 2:
             return optika + ": Medium";
         case 3:
             return optika + ": Good";
         case 4:
             return optika + ": Very good";
         case 5:
             return optika + ": Exceptional";
     }
     return "Steevie Wonder";
 }

 function InterpretSize(Card)
 {
     switch (Card.iSize)
     {
         case 1: return "Size: Very small";
         case 2: return  "Size: Small";
         case 3: return  "Size: Medium";
         case 4: return  "Size: Big";
         case 5: return "Size: Very big";
         default: return "ECM:" + Card.iSize + "%";
     }
 }

function showWeapon( wep, type, place)
{
    document.getElementById("W" + type + place).innerHTML = "";       
    if (wep != 0)
    {
        var uText = document.createElement("p");
        uText.innerHTML = wep.sName;
        document.getElementById("W" + type + place).appendChild(uText);
        uText = document.createElement("p");
        uText.innerHTML = wep.iAmmo + wep.sRoundType;
        document.getElementById("W" + type + place).appendChild(uText); 
        uText = document.createElement("p");
        uText.innerHTML = wep.sTags;
        document.getElementById("W" + type + place).appendChild(uText); 
        uText = document.createElement("p");
        uText.innerHTML = "Ground " + wep.rGround + "m";
        document.getElementById("W" + type + place).appendChild(uText); 
        uText = document.createElement("p");
        uText.innerHTML = "Helo " + wep.rHelo + "m";
        document.getElementById("W" + type + place).appendChild(uText); 
        uText = document.createElement("p");
        uText.innerHTML = "Plane " + wep.rAir + "m";
        document.getElementById("W" + type + place).appendChild(uText); 
        uText = document.createElement("p");
        uText.innerHTML = "ACC " + wep.iAccuracy + "%";
        document.getElementById("W" + type + place).appendChild(uText); 
        uText = document.createElement("p");
        uText.innerHTML = "STAB " + wep.iStab + "%";
        document.getElementById("W" + type + place).appendChild(uText); 
        uText = document.createElement("p");
        uText.innerHTML = "AP "+wep.AP;
        document.getElementById("W" + type + place).appendChild(uText); 
        uText = document.createElement("p");
        uText.innerHTML = "HE "+wep.HE;
        document.getElementById("W" + type + place).appendChild(uText); 
        uText = document.createElement("p");
        uText.innerHTML = "ROF" + wep.ROF;
        document.getElementById("W" + type + place).appendChild(uText); 
        uText = document.createElement("p");
        uText.innerHTML = "Supp. "+wep.iSuppression;
        document.getElementById("W" + type + place).appendChild(uText); 
        uText = document.createElement("p");
    }
}

/*
        function DisplayAvailability(VehicleCard Card)
        {
            double temp = 0;
            try
            {
                temp = (Card.iaAvailability[Card.iVet] * MainMatrix.getCoeff(Deck.sNation));
            }
            catch (Exception)
            {
                MessageBox.Show("Availability error: debug 0x0000");
                //throw;
            }
            temp = Math.Round(temp / 100);
            int iAv = (int)temp;

            switch (Card.iArrayIndex)
            {
            }
        }
        */
/*
        function TallyPoints(VehicleCard Card)
        {
            try
            {

                switch (Card.iArrayIndex)
                {
                    case 0: { P200.Visibility = Visibility.Hidden; P100.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P200.Content.ToString()); break; }
                    case 1: { P201.Visibility = Visibility.Hidden; P101.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P201.Content.ToString()); break; }
                    case 2: { P202.Visibility = Visibility.Hidden; P102.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P202.Content.ToString()); break; }
                    case 3: { P203.Visibility = Visibility.Hidden; P103.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P203.Content.ToString()); break; }
                    case 4: { P204.Visibility = Visibility.Hidden; P104.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P204.Content.ToString()); break; }
                    case 5: { P205.Visibility = Visibility.Hidden; P105.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P205.Content.ToString()); break; }
                    case 6: { P206.Visibility = Visibility.Hidden; P106.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P206.Content.ToString()); break; }
                    case 7: { P207.Visibility = Visibility.Hidden; P107.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P207.Content.ToString()); break; }
                    case 8: { P208.Visibility = Visibility.Hidden; P108.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P208.Content.ToString()); break; }
                    case 10: { P210.Visibility = Visibility.Hidden; P110.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P210.Content.ToString()); break; }
                    case 11: { P211.Visibility = Visibility.Hidden; P111.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P211.Content.ToString()); break; }
                    case 12: { P212.Visibility = Visibility.Hidden; P112.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P212.Content.ToString()); break; }
                    case 13: { P213.Visibility = Visibility.Hidden; P113.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P213.Content.ToString()); break; }
                    case 14: { P214.Visibility = Visibility.Hidden; P114.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P214.Content.ToString()); break; }
                    case 15: { P215.Visibility = Visibility.Hidden; P115.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P215.Content.ToString()); break; }
                    case 16: { P216.Visibility = Visibility.Hidden; P116.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P216.Content.ToString()); break; }
                    case 17: { P217.Visibility = Visibility.Hidden; P117.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P217.Content.ToString()); break; }
                    case 18: { P218.Visibility = Visibility.Hidden; P118.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P218.Content.ToString()); break; }
                    case 20: { P220.Visibility = Visibility.Hidden; P120.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P220.Content.ToString()); break; }
                    case 21: { P221.Visibility = Visibility.Hidden; P121.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P221.Content.ToString()); break; }
                    case 22: { P222.Visibility = Visibility.Hidden; P122.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P222.Content.ToString()); break; }
                    case 23: { P223.Visibility = Visibility.Hidden; P123.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P223.Content.ToString()); break; }
                    case 24: { P224.Visibility = Visibility.Hidden; P124.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P224.Content.ToString()); break; }
                    case 25: { P225.Visibility = Visibility.Hidden; P125.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P225.Content.ToString()); break; }
                    case 26: { P226.Visibility = Visibility.Hidden; P126.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P226.Content.ToString()); break; }
                    case 27: { P227.Visibility = Visibility.Hidden; P127.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P227.Content.ToString()); break; }
                    case 28: { P228.Visibility = Visibility.Hidden; P128.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P228.Content.ToString()); break; }
                    case 30: { P230.Visibility = Visibility.Hidden; P130.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P230.Content.ToString()); break; }
                    case 31: { P231.Visibility = Visibility.Hidden; P131.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P231.Content.ToString()); break; }
                    case 32: { P232.Visibility = Visibility.Hidden; P132.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P232.Content.ToString()); break; }
                    case 33: { P233.Visibility = Visibility.Hidden; P133.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P233.Content.ToString()); break; }
                    case 34: { P234.Visibility = Visibility.Hidden; P134.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P234.Content.ToString()); break; }
                    case 35: { P235.Visibility = Visibility.Hidden; P135.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P235.Content.ToString()); break; }
                    case 36: { P236.Visibility = Visibility.Hidden; P136.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P236.Content.ToString()); break; }
                    case 37: { P237.Visibility = Visibility.Hidden; P137.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P237.Content.ToString()); break; }
                    case 38: { P238.Visibility = Visibility.Hidden; P138.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P238.Content.ToString()); break; }
                    case 40: { P240.Visibility = Visibility.Hidden; P140.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P240.Content.ToString()); break; }
                    case 41: { P241.Visibility = Visibility.Hidden; P141.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P241.Content.ToString()); break; }
                    case 42: { P242.Visibility = Visibility.Hidden; P142.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P242.Content.ToString()); break; }
                    case 43: { P243.Visibility = Visibility.Hidden; P143.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P243.Content.ToString()); break; }
                    case 44: { P244.Visibility = Visibility.Hidden; P144.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P244.Content.ToString()); break; }
                    case 45: { P245.Visibility = Visibility.Hidden; P145.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P245.Content.ToString()); break; }
                    case 46: { P246.Visibility = Visibility.Hidden; P146.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P246.Content.ToString()); break; }
                    case 47: { P247.Visibility = Visibility.Hidden; P147.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P247.Content.ToString()); break; }
                    case 48: { P248.Visibility = Visibility.Hidden; P148.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P248.Content.ToString()); break; }
                    case 50: { P250.Visibility = Visibility.Hidden; P150.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P250.Content.ToString()); break; }
                    case 51: { P251.Visibility = Visibility.Hidden; P151.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P251.Content.ToString()); break; }
                    case 52: { P252.Visibility = Visibility.Hidden; P152.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P252.Content.ToString()); break; }
                    case 53: { P253.Visibility = Visibility.Hidden; P153.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P253.Content.ToString()); break; }
                    case 54: { P254.Visibility = Visibility.Hidden; P154.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P254.Content.ToString()); break; }
                    case 55: { P255.Visibility = Visibility.Hidden; P155.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P255.Content.ToString()); break; }
                    case 56: { P256.Visibility = Visibility.Hidden; P156.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P256.Content.ToString()); break; }
                    case 57: { P257.Visibility = Visibility.Hidden; P157.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P257.Content.ToString()); break; }
                    case 58: { P258.Visibility = Visibility.Hidden; P158.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P258.Content.ToString()); break; }
                    case 60: { P260.Visibility = Visibility.Hidden; P160.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P260.Content.ToString()); break; }
                    case 61: { P261.Visibility = Visibility.Hidden; P161.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P261.Content.ToString()); break; }
                    case 62: { P262.Visibility = Visibility.Hidden; P162.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P262.Content.ToString()); break; }
                    case 63: { P263.Visibility = Visibility.Hidden; P163.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P263.Content.ToString()); break; }
                    case 64: { P264.Visibility = Visibility.Hidden; P164.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P264.Content.ToString()); break; }
                    case 65: { P265.Visibility = Visibility.Hidden; P165.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P265.Content.ToString()); break; }
                    case 66: { P266.Visibility = Visibility.Hidden; P166.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P266.Content.ToString()); break; }
                    case 67: { P267.Visibility = Visibility.Hidden; P167.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P267.Content.ToString()); break; }
                    case 68: { P268.Visibility = Visibility.Hidden; P168.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P268.Content.ToString()); break; }
                    case 70: { P270.Visibility = Visibility.Hidden; P170.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P270.Content.ToString()); break; }
                    case 71: { P271.Visibility = Visibility.Hidden; P171.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P271.Content.ToString()); break; }
                    case 72: { P272.Visibility = Visibility.Hidden; P172.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P272.Content.ToString()); break; }
                    case 73: { P273.Visibility = Visibility.Hidden; P173.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P273.Content.ToString()); break; }
                    case 74: { P274.Visibility = Visibility.Hidden; P174.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P274.Content.ToString()); break; }
                    case 75: { P275.Visibility = Visibility.Hidden; P175.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P275.Content.ToString()); break; }
                    case 76: { P276.Visibility = Visibility.Hidden; P176.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P276.Content.ToString()); break; }
                    case 77: { P277.Visibility = Visibility.Hidden; P177.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P277.Content.ToString()); break; }
                    case 78: { P278.Visibility = Visibility.Hidden; P178.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P278.Content.ToString()); break; }
                }
            }
            catch
            {

            }
        }
*/


/*

        #region Unit add buttons, stats display
        #region LOG
        function dgDeckLog_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckLog.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckLog.SelectedCells[0].Item;
                VehicleCard selCard;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {
                    Datacard dcUnit = Deck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = Deck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 0);

                    btLOGRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = Deck.dbLookup(row.TID);
                        selectedCards[0] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[0] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btLOGRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btLOGRookieAdd.IsEnabled = false;
                    }
                    btLOGTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btLOGTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btLOGTrainedAdd.IsEnabled = false;
                    }
                    btLOGHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btLOGHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btLOGHardenedAdd.IsEnabled = false;
                    }
                    btLOGVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btLOGVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btLOGVeteranAdd.IsEnabled = false;
                    }
                    btLOGEliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btLOGEliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btLOGEliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btLOGRookieAdd.IsEnabled = false;
                    btLOGTrainedAdd.IsEnabled = false;
                    btLOGHardenedAdd.IsEnabled = false;
                    btLOGVeteranAdd.IsEnabled = false;
                    btLOGEliteAdd.IsEnabled = false;
                }
            }
        }

        function btLOGRookieAdd_Click()
        {
            Deck.AddCard("000", selectedCards[0].Unit.iUnitID, selectedCards[0].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btLOGTrainedAdd_Click()
        {
            Deck.AddCard("001", selectedCards[0].Unit.iUnitID, selectedCards[0].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btLOGHardenedAdd_Click()
        {
            Deck.AddCard("010", selectedCards[0].Unit.iUnitID, selectedCards[0].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btLOGVeteranAdd_Click()
        {
            Deck.AddCard("011", selectedCards[0].Unit.iUnitID, selectedCards[0].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btLOGEliteAdd_Click()
        {
            Deck.AddCard("100", selectedCards[0].Unit.iUnitID, selectedCards[0].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }
        #endregion LOG
        #region INF
        function dgDeckInf_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckInf.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckInf.SelectedCells[0].Item;
                VehicleCard selCard;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {
                    Datacard dcUnit = Deck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = Deck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 1);

                    btINFRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = Deck.dbLookup(row.TID);
                        selectedCards[1] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[1] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btINFRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btINFRookieAdd.IsEnabled = false;
                    }
                    btINFTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btINFTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btINFTrainedAdd.IsEnabled = false;
                    }
                    btINFHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btINFHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btINFHardenedAdd.IsEnabled = false;
                    }
                    btINFVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btINFVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btINFVeteranAdd.IsEnabled = false;
                    }
                    btINFEliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btINFEliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btINFEliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btINFRookieAdd.IsEnabled = false;
                    btINFTrainedAdd.IsEnabled = false;
                    btINFHardenedAdd.IsEnabled = false;
                    btINFVeteranAdd.IsEnabled = false;
                    btINFEliteAdd.IsEnabled = false;
                }
            }
        }

        function btINFRookieAdd_Click()
        {
            Deck.AddCard("000", selectedCards[1].Unit.iUnitID, selectedCards[1].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btINFTrainedAdd_Click()
        {
            Deck.AddCard("001", selectedCards[1].Unit.iUnitID, selectedCards[1].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btINFHardenedAdd_Click()
        {
            Deck.AddCard("010", selectedCards[1].Unit.iUnitID, selectedCards[1].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btINFVeteranAdd_Click()
        {
            Deck.AddCard("011", selectedCards[1].Unit.iUnitID, selectedCards[1].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btINFEliteAdd_Click()
        {
            Deck.AddCard("100", selectedCards[1].Unit.iUnitID, selectedCards[1].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }
        #endregion INF
        #region SUP
        function dgDeckSup_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckSup.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckSup.SelectedCells[0].Item;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {
                    VehicleCard selCard;
                    Datacard dcUnit = Deck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = Deck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 2);

                    btSUPRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = Deck.dbLookup(row.TID);
                        selectedCards[2] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[2] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btSUPRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btSUPRookieAdd.IsEnabled = false;
                    }
                    btSUPTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btSUPTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btSUPTrainedAdd.IsEnabled = false;
                    }
                    btSUPHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btSUPHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btSUPHardenedAdd.IsEnabled = false;
                    }
                    btSUPVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btSUPVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btSUPVeteranAdd.IsEnabled = false;
                    }
                    btSUPEliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btSUPEliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btSUPEliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btSUPRookieAdd.IsEnabled = false;
                    btSUPTrainedAdd.IsEnabled = false;
                    btSUPHardenedAdd.IsEnabled = false;
                    btSUPVeteranAdd.IsEnabled = false;
                    btSUPEliteAdd.IsEnabled = false;
                }
            }
        }

        function btSUPRookieAdd_Click()
        {
            Deck.AddCard("000", selectedCards[2].Unit.iUnitID, selectedCards[2].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btSUPTrainedAdd_Click()
        {
            Deck.AddCard("001", selectedCards[2].Unit.iUnitID, selectedCards[2].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btSUPHardenedAdd_Click()
        {
            Deck.AddCard("010", selectedCards[2].Unit.iUnitID, selectedCards[2].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btSUPVeteranAdd_Click()
        {
            Deck.AddCard("011", selectedCards[2].Unit.iUnitID, selectedCards[2].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btSUPEliteAdd_Click()
        {
            Deck.AddCard("100", selectedCards[2].Unit.iUnitID, selectedCards[2].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }
        #endregion SUP
        #region TNK
        function dgDeckTnk_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckTnk.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckTnk.SelectedCells[0].Item;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {
                    VehicleCard selCard;
                    Datacard dcUnit = Deck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = Deck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 3);

                    btTNKRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = Deck.dbLookup(row.TID);
                        selectedCards[3] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[3] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btTNKRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btTNKRookieAdd.IsEnabled = false;
                    }
                    btTNKTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btTNKTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btTNKTrainedAdd.IsEnabled = false;
                    }
                    btTNKHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btTNKHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btTNKHardenedAdd.IsEnabled = false;
                    }
                    btTNKVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btTNKVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btTNKVeteranAdd.IsEnabled = false;
                    }
                    btTNKEliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btTNKEliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btTNKEliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btTNKRookieAdd.IsEnabled = false;
                    btTNKTrainedAdd.IsEnabled = false;
                    btTNKHardenedAdd.IsEnabled = false;
                    btTNKVeteranAdd.IsEnabled = false;
                    btTNKEliteAdd.IsEnabled = false;
                }
            }
        }

        function btTNKRookieAdd_Click()
        {
            Deck.AddCard("000", selectedCards[3].Unit.iUnitID, selectedCards[3].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btTNKTrainedAdd_Click()
        {
            Deck.AddCard("001", selectedCards[3].Unit.iUnitID, selectedCards[3].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btTNKHardenedAdd_Click()
        {
            Deck.AddCard("010", selectedCards[3].Unit.iUnitID, selectedCards[3].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btTNKVeteranAdd_Click()
        {
            Deck.AddCard("011", selectedCards[3].Unit.iUnitID, selectedCards[3].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btTNKEliteAdd_Click()
        {
            Deck.AddCard("100", selectedCards[3].Unit.iUnitID, selectedCards[3].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }
        #endregion TNK
        #region REC
        function dgDeckRec_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckRec.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckRec.SelectedCells[0].Item;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {
                    VehicleCard selCard;
                    Datacard dcUnit = Deck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = Deck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 4);

                    btRECRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = Deck.dbLookup(row.TID);
                        selectedCards[4] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[4] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btRECRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btRECRookieAdd.IsEnabled = false;
                    }
                    btRECTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btRECTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btRECTrainedAdd.IsEnabled = false;
                    }
                    btRECHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btRECHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btRECHardenedAdd.IsEnabled = false;
                    }
                    btRECVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btRECVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btRECVeteranAdd.IsEnabled = false;
                    }
                    btRECEliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btRECEliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btRECEliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btRECRookieAdd.IsEnabled = false;
                    btRECTrainedAdd.IsEnabled = false;
                    btRECHardenedAdd.IsEnabled = false;
                    btRECVeteranAdd.IsEnabled = false;
                    btRECEliteAdd.IsEnabled = false;
                }
            }
        }

        function btRECRookieAdd_Click()
        {
            Deck.AddCard("000", selectedCards[4].Unit.iUnitID, selectedCards[4].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btRECTrainedAdd_Click()
        {
            Deck.AddCard("001", selectedCards[4].Unit.iUnitID, selectedCards[4].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btRECHardenedAdd_Click()
        {
            Deck.AddCard("010", selectedCards[4].Unit.iUnitID, selectedCards[4].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btRECVeteranAdd_Click()
        {
            Deck.AddCard("011", selectedCards[4].Unit.iUnitID, selectedCards[4].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btRECEliteAdd_Click()
        {
            Deck.AddCard("100", selectedCards[4].Unit.iUnitID, selectedCards[4].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }
        #endregion REC
        #region VEH
        function dgDeckVeh_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckVeh.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckVeh.SelectedCells[0].Item;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {
                    VehicleCard selCard;
                    Datacard dcUnit = Deck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = Deck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 5);

                    btVEHRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = Deck.dbLookup(row.TID);
                        selectedCards[5] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[5] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btVEHRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btVEHRookieAdd.IsEnabled = false;
                    }
                    btVEHTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btVEHTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btVEHTrainedAdd.IsEnabled = false;
                    }
                    btVEHHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btVEHHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btVEHHardenedAdd.IsEnabled = false;
                    }
                    btVEHVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btVEHVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btVEHVeteranAdd.IsEnabled = false;
                    }
                    btVEHEliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btVEHEliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btVEHEliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btVEHRookieAdd.IsEnabled = false;
                    btVEHTrainedAdd.IsEnabled = false;
                    btVEHHardenedAdd.IsEnabled = false;
                    btVEHVeteranAdd.IsEnabled = false;
                    btVEHEliteAdd.IsEnabled = false;
                }
            }
        }

        function btVEHRookieAdd_Click()
        {
            Deck.AddCard("000", selectedCards[5].Unit.iUnitID, selectedCards[5].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btVEHTrainedAdd_Click()
        {
            Deck.AddCard("001", selectedCards[5].Unit.iUnitID, selectedCards[5].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btVEHHardenedAdd_Click()
        {
            Deck.AddCard("010", selectedCards[5].Unit.iUnitID, selectedCards[5].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btVEHVeteranAdd_Click()
        {
            Deck.AddCard("011", selectedCards[5].Unit.iUnitID, selectedCards[5].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btVEHEliteAdd_Click()
        {
            Deck.AddCard("100", selectedCards[5].Unit.iUnitID, selectedCards[5].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }
        #endregion VEH
        #region HEL
        function dgDeckHel_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckHel.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckHel.SelectedCells[0].Item;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {

                    VehicleCard selCard;
                    Datacard dcUnit = Deck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = Deck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 6);

                    btHELRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = Deck.dbLookup(row.TID);
                        selectedCards[6] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[6] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btHELRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btHELRookieAdd.IsEnabled = false;
                    }
                    btHELTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btHELTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btHELTrainedAdd.IsEnabled = false;
                    }
                    btHELHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btHELHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btHELHardenedAdd.IsEnabled = false;
                    }
                    btHELVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btHELVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btHELVeteranAdd.IsEnabled = false;
                    }
                    btHELEliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btHELEliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btHELEliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btHELRookieAdd.IsEnabled = false;
                    btHELTrainedAdd.IsEnabled = false;
                    btHELHardenedAdd.IsEnabled = false;
                    btHELVeteranAdd.IsEnabled = false;
                    btHELEliteAdd.IsEnabled = false;
                }
            }
        }

        function btHELRookieAdd_Click()
        {
            Deck.AddCard("000", selectedCards[6].Unit.iUnitID, selectedCards[6].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btHELTrainedAdd_Click()
        {
            Deck.AddCard("001", selectedCards[6].Unit.iUnitID, selectedCards[6].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btHELHardenedAdd_Click()
        {
            Deck.AddCard("010", selectedCards[6].Unit.iUnitID, selectedCards[6].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btHELVeteranAdd_Click()
        {
            Deck.AddCard("011", selectedCards[6].Unit.iUnitID, selectedCards[6].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }

        function btHELEliteAdd_Click()
        {
            Deck.AddCard("100", selectedCards[6].Unit.iUnitID, selectedCards[6].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);

        }
        #endregion HEL
        #region AIR
        function dgDeckAir_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckAir.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckAir.SelectedCells[0].Item;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {

                    VehicleCard selCard;
                    Datacard dcUnit = Deck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = Deck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 7);

                    btAIRRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = Deck.dbLookup(row.TID);
                        selectedCards[7] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[7] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btAIRRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btAIRRookieAdd.IsEnabled = false;
                    }
                    btAIRTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btAIRTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btAIRTrainedAdd.IsEnabled = false;
                    }
                    btAIRHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btAIRHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btAIRHardenedAdd.IsEnabled = false;
                    }
                    btAIRVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btAIRVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btAIRVeteranAdd.IsEnabled = false;
                    }
                    btAIREliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btAIREliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btAIREliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btAIRRookieAdd.IsEnabled = false;
                    btAIRTrainedAdd.IsEnabled = false;
                    btAIRHardenedAdd.IsEnabled = false;
                    btAIRVeteranAdd.IsEnabled = false;
                    btAIREliteAdd.IsEnabled = false;
                }
            }
        }

        function btAIRRookieAdd_Click()
        {
            Deck.AddCard("000", selectedCards[7].Unit.iUnitID, selectedCards[7].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);
        }

        function btAIRTrainedAdd_Click()
        {
            Deck.AddCard("001", selectedCards[7].Unit.iUnitID, selectedCards[7].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);
        }

        function btAIRHardenedAdd_Click()
        {
            Deck.AddCard("010", selectedCards[7].Unit.iUnitID, selectedCards[7].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);
        }

        function btAIRVeteranAdd_Click()
        {
            Deck.AddCard("011", selectedCards[7].Unit.iUnitID, selectedCards[7].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);
        }

        function btAIREliteAdd_Click()
        {
            Deck.AddCard("011", selectedCards[7].Unit.iUnitID, selectedCards[7].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = Deck.DeckExport(MasterDeck);
        }
        #endregion AIR
        #endregion Unit add buttons
*/
function btA()
{
    Deck.sEra = "A";
    Deck.iEra = 2;
    GUIDisplay();
    DeckExport();
}

function btB()
{
    Deck.sEra = "B";
    Deck.iEra = 1;
    GUIDisplay();
    DeckExport();
}

function btC()
{
    Deck.sEra = "C";
    Deck.iEra = 0;
    GUIDisplay();
    DeckExport();
}

function btMarine() {
    Deck.sSpec = "MAR";
    Deck.iSpec = 3;
    GUIDisplay();
    DeckExport();
}

function btAirborne() {
    Deck.sSpec = "AIR";
    Deck.iSpec = 5;
    GUIDisplay();
    DeckExport();
}

function btMechanized() {
    Deck.sSpec = "MECH";
    Deck.iSpec = 4;
    GUIDisplay();
    DeckExport();
}

function btArmoured() {
    Deck.sSpec = "ARM";
    Deck.iSpec = 1;
    GUIDisplay();
    DeckExport();
}

function btMotorized() {
    Deck.sSpec = "MOTO";
    Deck.iSpec = 0;
    GUIDisplay();
    DeckExport();
}

function btSupport() {
    Deck.sSpec = "SUP";
    Deck.iSpec = 2;
    GUIDisplay();
    DeckExport();
}

function btGeneral() {
    Deck.sSpec = "GEN";
    Deck.iSpec = 7;
    GUIDisplay();
    DeckExport();
}

function btNaval() {
    Deck.sSpec = "NAV";
    Deck.iSpec = 6;
    GUIDisplay();
    DeckExport();
}

function toGen(Card)
{
    var sData = Card.Unit.sUnitData;
    if (sData.charAt(18) == '1' && (Deck.sSpec == "MOTO" || Deck.sSpec == "MECH" || Deck.sSpec == "MAR" || Deck.sSpec == "AIR")) // INF
    {
        Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(19) == '1' && (Deck.sSpec == "SUP")) // support
    {
         Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(20) == '1' && (Deck.sSpec == "ARM")) // tanks
    {
        Card.iVet0 = Card.iVet -2;
    }
    else if (sData.charAt(21) == '1' && (Deck.sSpec == "MOTO"))  //recon
    {
        Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(22) == '1' && (Deck.sSpec == "MECH" || Deck.sSpec == "MOTO")) // vehicles
    {
        Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(23) == '1' && (Deck.sSpec == "AIR"))
    {
        Card.iVet0 = Card.iVet -1;
    }
    else if (sData.charAt(24) == '1' && (Deck.sSpec == "MAR" || Deck.sSpec == "AIR"))
    {
        Card.iVet0 = Card.iVet -1;
    }
    else{
            Card.iVet0 = Card.iVet;
    }
    return Card;
}

function toSpec(Card)
{
    var sData = Card.Unit.sUnitData;
    if (sData.charAt(18) == '1' && (Deck.sSpec == "MOTO" || Deck.sSpec == "MECH" || Deck.sSpec == "MAR" || Deck.sSpec == "AIR")) // INF
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(19) == '1' && (Deck.sSpec == "SUP")) // support
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(20) == '1' && (Deck.sSpec == "ARM")) // tanks
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(21) == '1' && (Deck.sSpec == "MOTO"))  //recon
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(22) == '1' && (Deck.sSpec == "MECH" || Deck.sSpec == "MOTO")) // vehicles
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(23) == '1' && (Deck.sSpec == "AIR"))
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else if (sData.charAt(24) == '1' && (Deck.sSpec == "MAR" || Deck.sSpec == "AIR"))
    {
        Card.iVet = Card.iVet0 + 1;
    }
    else{
            Card.iVet = Card.iVet0;
    }
    if (Card.iVet == 5) { Card.sVeterancy = "100"; } else
    if (Card.iVet == 4) { Card.sVeterancy = "100"; } else
    if (Card.iVet == 3) { Card.sVeterancy = "011"; } else
    if (Card.iVet == 2) { Card.sVeterancy = "010"; } else
    if (Card.iVet == 1) { Card.sVeterancy = "001"; } else
    if (Card.iVet == 0) { Card.sVeterancy = "000"; }
    //note: iVet<0 or >5 is error, and honestly *should* break. iVet=5 is possible, for superheavies. Edge case, and coded around
    return Card;
}
