
function rnd(x){
	var alea = Math.round(Math.random()*x);
	return alea;
}

var classe = ["Assault","Engineer","Support","Reccon"];
var classChoice=0;
//class specific weapons	
var rifles = ["AK-12","SCAR-H","M416","SAR-21","AEK-971","FAMAS","AUG A3","M16A4","CZ-805","QBZ-95-1","ACE 23","AN-94"];//12 for Assault

var lmgs = ["U-100 MK5","TYPE 88 LMG","LSAT","PKP PECHENEG","QBB-95-1","M240B","MG4","M249","RPK-12","L86A2"];//10 for Support

var pdws = ["MX4","PP-2000","UMP-45","CBJ-MS","PDW-R","CZ-3A1","JS2","P90","GROZA-4"];//9 for Engineer

var snipers =["CS-LR4","M40A5","SCOUT ELITE","SV-98","JNG-90","338-RECON","M98B","SRR-61","FY-JS"];//9 for Reccon

//all class weapons
var carabines = ["AK 5C","ACW-R","SG553","AKU-12","A-91","ACE 52 CQB","G36C","M4","ACE 21 CQB","TYPE-95B-1","GROZA-1"];//11

var dmr = ["RFB","MK11 MOD 0","SKS","SVD-12","QBU-88","M39 EMR","ACE 53 SV","SCAR-H SV"];//8

var shotguns =["QBS-09","870 MCS","M1014","HAWK 12G","SAIGA 12K","SPAS-12","UTS 15","DBV-12"];//8


//attachments
//sights
var shortSight=["IRON","RDS","COYOTE","KOBRA","HOLO x1","HD-33","PKA-S x1","IRNV x1","FLIR x2"];

var middleSight=["M145(x3.4)","PRISMA(x3.4)","PK-A(x3.4)","ACOG(x4)","JGM-4(x4)","PSO-1(x4)"];

var longSight=["CL6X x6","PKS-07 x7","HUNTER x20","BALLISTIQUE x40"]//4
//accessory
var rifleAcc=[];
var carabinesAcc=[];
var lmgAcc=[];
var snipperAcc=[];
var pdwAcc=[];
var dmrAcc=[];
var shotgunAcc=[];
//barrels
var rifleBarrel=[];
var pdwBarrel=[];
var lmgBarrel=[];
var sniperBarrel=[];
var shotgunBarrel=[];
var dmrBarrel=[];
var carabineBarrel=[];
//under barrel
var underBarrel=[];
var sniperUnder=[];



var pistol=["P226","M9","QSZ-92","MP443","SHORTY cal. 12","G18","FN57","M1911","93R","CZ-75",".44 MAGNUM","COMPACT 45","M412 REX","MARE'S LEG"];//14

var grenade = ["M67","V40 MINI","RGO IMPACT","M34 INCENDIARY","M18 SMOKE","M84 FLASH","FLARE"];//7

var gadgetAssault =[];
var gadgetEngineer=[];
var gadgetSupport=[];
var gadgetReccon=[];

var camoGun=[];
var camoPerso=[];
var knife=[];

function randomGenerate(){

	classChoice=classe[rnd(3)];
	if(classChoice===classe[0]){
		randomAssault();
		randomNormalSight();
		randomGrenKnifCamoPistol();		
	}else if(classChoice===classe[1]){
		randomEngineer();
		randomNormalSight();
		randomGrenKnifCamoPistol();		
	}else if(classChoice===classe[2]){
		randomSupport();
		randomNormalSight();
		randomGrenKnifCamoPistol();
	}else if(classChoice===classe[3]){
		randomReccon();
		randomSniperSight();
		randomGrenKnifCamoPistol();
	}

}

function randomAssault(){
	console.log(classChoice);
	return classChoice;

		randomAssaultGun();
		var gadget1=gadgetAssault[rnd()];
		var gadget2=gadgetAssault[rnd()];
		randomGrenKnifCamoPistol();		
}
function randomEngineer(){
	console.log(classChoice);
		randomEngineerGun();
		var gadget1=gadgetEngineer[rnd()];//algo qui trie les gadget est place 
		var gadget2=gadgetEngineer[rnd()];
		randomGrenKnifCamoPistol();
		
}
function randomSupport(){
	console.log(classChoice);
		randomSupportGun();
		var gadget1=gadgetSupport[rnd()];
		var gadget2=gadgetSupport[rnd()];
		randomGrenKnifCamoPistol();
}
function randomReccon(){
	console.log(classChoice);
		randomRecconGun();
		randomSniperSight();
		var gadget1=gadgetReccon[rnd()];
		var gadget2=gadgetReccon[rnd()];
		randomGrenKnifCamoPistol();
}

///////////
function rndRifles(){
	var randomRifle=rifles[rnd(11)];
	return randomRifle;
}
function randomAssaultGun(){
	
	var Assault=[rndRifles(),randomAllClass()];
	var principal=Assault[rnd(1)];
	console.log(principal);
	return principal;
}
function randomEngineerGun(){
	var randomPdw=pdws[rnd(8)];
	var Engineer=[randomPdw,randomAllClass()];
	var principal=Engineer[rnd(1)];
	console.log(principal);
	return principal;
}
function randomSupportGun(){
	var randomLmg=lmgs[rnd(9)];
	var Support=[randomLmg,randomAllClass()];
	var principal=Support[rnd(1)];
	console.log(principal);
	return principal;
}
function randomRecconGun(){
	var randomSniper=snipers[rnd(7)];
	var Sniper=[randomSniper,randomAllClass()];
	var principal=Sniper[rnd(1)];
	console.log(principal);
	return principal;
}
function randomAllClass(){
	var randomCarabine=carabines[rnd(10)];
	var randomDmr=dmr[rnd(7)];
	var randomShotgun=shotguns[rnd(7)];
	var randomAll=[randomShotgun,randomDmr,randomCarabine];
	var allClass=randomAll[rnd(2)];
	return allClass;
}
////////////////////////////////////
function randomNormalSight(){
	var randomShortSight=shortSight[rnd(8)];
	var randomMiddleSight=middleSight[rnd(5)];
	var randomSight=[randomShortSight,randomMiddleSight];
	var normalSight=randomSight[rnd(1)];
	console.log(normalSight);
	return normalSight;
}
function randomSniperSight(){
	randomNormalSight();
	var randomLongSight=longSight[rnd(3)];
	var sniperSight=[randomNormalSight,randomLongSight];
	return sniperSight;
}
///////////////////////////////////////
function randomGrenKnifCamoPistol(){
	var greEquip=grenade[rnd(6)];
	var knifEquip=knife[rnd()];
	var camoEquip=camoPerso[rnd()];
	var pistolEquip=pistol[rnd(13)];
	console.log(greEquip,knifEquip,camoEquip,pistolEquip);
	return greEquip,knifEquip,camoEquip,pistolEquip;
	
}
