function rnd(x){
	var alea = Math.round(Math.random()*x);
	return alea;
}
var pd;
$("#click").click(function(){
	$.getJSON("http://api.bf4stats.com/api/playerInfo?plat=pc&name=Matt_-FK2-_&opt=imagePaths,names,upcomingUnlocks,weapons,details&output=json",function(json){
		pd=json;
	});
});

var classe = ["Assault","Engineer","Support","Reccon"];
var classChoice=0;
//class specific weapons	
var rifles = ["AK-12","SCAR-H","M416","SAR-21","AEK-971","FAMAS","AUG A3","M16A4","CZ-805","QBZ-95-1","ACE 23","AN-94"];//12 for Assault

var lmgs = ["U-100 MK5","TYPE 88 LMG","LSAT","PKP PECHENEG","QBB-95-1","M240B","MG4","M249","RPK-12","L86A2"];//10 for Support

var pdws = ["MX4","PP-2000","UMP-45","CBJ-MS","PDW-R","CZ-3A1","JS2","P90","GROZA-4"];//9 for Engineer

var snipers =["CS-LR4","M40A5","SCOUT ELITE","SV-98","JNG-90","338-RECON","M98B","SRR-61","FY-JS"];//9 for Reccon

//all class weapons
var carabines = ["AK 5C","ACW-R","SG553","AKU-12","A-91","ACE 52 CQB","G36C","M4","ACE 21 CQB","TYPE-95B-1","GROZA-1"];//11

var dmrs = ["RFB","MK11 MOD 0","SKS","SVD-12","QBU-88","M39 EMR","ACE 53 SV","SCAR-H SV"];//8

var shotguns =["QBS-09","870 MCS","M1014","HAWK 12G","SAIGA 12K","SPAS-12","UTS 15","DBV-12"];//8


//attachments
//sights
var shortSight=["IRON","RDS","COYOTE","KOBRA","HOLO x1","HD-33","PKA-S x1","IRNV x1","FLIR x2"];

var middleSight=["M145(x3.4)","PRISMA(x3.4)","PK-A(x3.4)","ACOG(x4)","JGM-4(x4)","PSO-1(x4)"];

var longSight=["CL6X x6","PKS-07 x7","HUNTER x20","BALLISTIQUE x40"];//4



/*var pd={weapons: 
   [ { stat: { id: 'ucav', shots: 65, hits: 0, hs: 0, kills: 0, time: 381 },
       name: 'UCAV',
       detail: 
        { id: 'ucav',
          category: 'GADGET',
          name: 'UCAV',
          type: 'Gadgets Explosives',
          desc: 'A small reconnaissance unmanned combat aerial vehicle armed with an explosive warhead that allows the support class to use it as guided munitions.',
          image: 'ucav',
          weaponData: null,
          code: 'wX',
          kits: [ 'support' ],
          unlockLicense: null,
          unlock: null },
       imgFancy: 'bf4/weapons_fancy/ucav.png',
       imgLineart: 'bf4/weapons_lineart/ucav.png' },
       { stat: 
        { id: 'v40-mini',
          shots: 1960,
          hits: 758,
          hs: 0,
          kills: 226,
          time: 3397 },
       name: 'V40 MINI',
       detail: 
        { id: 'v40-mini',
          category: 'GRENADE',
          name: 'V40 MINI',
          type: 'Hand Grenades',
          desc: 'Mini hand grenade that can be thrown further than the standard M67 but with reduced blast yield. 2 of these grenades can be carried.',
          image: 'v40_mini',
          weaponData: null,
          code: 'wG',
          kits: [ 'recon', 'assault', 'engineer', 'support' ],
          unlockLicense: null,
          unlock: { code: 'sc_handgrenades', name: 'Grenade Score', needed: 500 } },
       imgFancy: 'bf4/weapons_fancy/v40_mini.png',
       imgLineart: 'bf4/weapons_lineart/v40_mini.png' },
     { stat: 
        { id: '338-recon',
          shots: 464,
          hits: 252,
          hs: 52,
          kills: 114,
          time: 3338 },
       name: '338-RECON',
       detail: 
        { id: '338-recon',
          category: 'SNIPER RIFLE',
          name: '338-RECON',
          type: 'Sniper Rifles',
          image: 'srs_338recon',
          weaponData: 
           { statHandling: 0.2353,
             fireModeBurst: false,
             statDamage: 0.8833,
             statMobility: 0.0507,
             fireModeSingle: true,
             fireModeAuto: false,
             statRange: 1,
             range: 'VERY LONG',
             rateOfFire: 'BOLT ACTION',
             altAmmoName: null,
             ammoType: '.338 Magnum',
             statAccuracy: 1,
             ammo: '5' },
          code: 'wSR',
          kits: [ 'recon' ],
          unlockLicense: null,
          unlock: 
           { code: 'sc_sniperrifles',
             name: 'Sniper Rifle Score',
             needed: 27000 } },
       imgFancy: 'bf4/weapons_fancy/srs_338recon.png',
       imgLineart: 'bf4/weapons_lineart/srs_338recon.png' },
     { stat: { id: 'as-val', shots: 802, hits: 157, hs: 5, kills: 21, time: 755 },
       name: 'AS VAL',
       detail: 
        { id: 'as-val',
          category: 'PDW',
          name: 'AS VAL',
          type: 'PDWs',
          image: 'asval',
          weaponData: 
           { statHandling: 0.241,
             fireModeBurst: false,
             statDamage: 0.23,
             statMobility: 0.6496,
             fireModeSingle: true,
             fireModeAuto: true,
             statRange: 0.3206,
             range: 'MEDIUM',
             rateOfFire: '900',
             altAmmoName: null,
             ammoType: '9x39mm',
             statAccuracy: 0.5028,
             ammo: '20' },
          code: 'waPDW',
          kits: [ 'engineer' ],
          unlockLicense: null,
          unlock: null },
       imgFancy: 'bf4/weapons_fancy/asval.png',
       imgLineart: 'bf4/weapons_lineart/asval.png' },],
	upcomingUnlocks: 
   [ { type: 'weaponUnlock',
       name: 'COMPENSATOR',
       subname: 'RFB',
       image: 'compensator',
       subimage: 'rfb',
       needed: 160,
       format: 'nf',
       nname: 'Kills',
       curr: 159,
       prog: 99.375,
       left: 1 },
     { type: 'weaponStar',
       name: '17. Service Star',
       subname: 'SCAR-H',
       image: 'servicestar',
       subimage: 'scarh',
       needed: 100,
       format: 'nf',
       nname: 'Kills',
       curr: 99,
       prog: 99,
       left: 1 },
       { type: 'weapon',
       name: 'LOL',
       subname: 'DMR',
       image: 'scarhsv',
       subimage: null,
       needed: 82000,
       format: 'nf',
       nname: 'DMR Score',
       curr: 67990,
       prog: 82.91463414634146,
       left: 14010 },
     { type: 'weaponUnlock',
       name: 'LASER SIGHT',
       subname: 'M9',
       image: 'laser_pistollaser',
       subimage: 'm9',
       needed: 60,
       format: 'nf',
       nname: 'Kills',
       curr: 59,
       prog: 98.33333333333333,
       left: 1 },
       { type: 'weapon',
       name: 'SCAR-H SV',
       subname: 'DMR',
       image: 'scarhsv',
       subimage: null,
       needed: 82000,
       format: 'nf',
       nname: 'DMR Score',
       curr: 67990,
       prog: 82.91463414634146,
       left: 14010 },
     { type: 'weaponStar',
       name: '2. Service Star',
       subname: 'AKU-12',
       image: 'servicestar',
       subimage: 'aku12',
       needed: 100,
       format: 'nf',
       nname: 'Kills',
       curr: 98,
       prog: 98,
       left: 2 },
       { type: 'weapon',
       name: 'DBV-12',
       subname: 'DMR',
       image: 'scarhsv',
       subimage: null,
       needed: 82000,
       format: 'nf',
       nname: 'DMR Score',
       curr: 67990,
       prog: 82.91463414634146,
       left: 14010 }
       ]};*/

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
var upcoming=pd.upcomingUnlocks;
var readty=pd.weapons;
var item=[];
var gun=[];



function rndRifles(){
	var randomRifle=rifles[rnd(11)];
	return randomRifle;
}
function rndCarabines(){
	var randomCarabine=carabines[rnd(10)];
	return randomCarabine;
}
function rndShotguns(){
	var randomShotgun=shotguns[rnd(7)];
	return randomShotgun;
}
function rndDmr(){
	var randomDmr=dmrs[rnd(7)];
	return randomDmr;
}
function rndGre(x){
	var randomGrenade=x[rnd(x.length-1)];
	return randomGrenade;
}
function listGrenade(){//pd.weapons[0].detail.category
	var y=0;
	var gre=[];
	for(var i=0;i<pd.weapons.length;i++){
		if(pd.weapons[i].detail.category==="GRENADE"){
			gre[y]=pd.weapons[i].name;
			y++;
		}else{
			y=y;
		}
	}
	return gre;
}
// this function fides in the json array the objects with the desired type
function unlockItem(x){//have to receive the category of the item for instance weapon or weaponUnlock
	var y=0;
	for(var i=0;i<upcoming.length;i++){
		if(upcoming[i].type===x){
			item[y]=upcoming[i];
			y++;
		}else{
			y=y;
		}
	}
}

//this function creates an array with guns not yet unlocked to compare with the selected category to then substracte them
function unlockGun(x){//have to receive the category of the gun for instance RIFLE or DMR
	var y=0;
	for(var i=0;i<item.length;i++){
		if(item[i].subname===x){
			gun[y]=item[i].name;
			y++;
		}else{
			y=y;
		}
	}
	return gun;
}
function concat(x,y){
	var children = x.concat(y);
	var uniqueNames = [];
	console.log(children);
	$.each(children, function(i, el){
    if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
	});
	return uniqueNames;
}


function weaponCategory(){
	var category=["RIFLE","CARABINE","SHOTGUN","DMR"];
	var weaponCat=category[rnd(3)];
	return weaponCat;
}
$("#click").click(function(){
	afficher(weaponCategory());
});
function afficher(x){
	$(".gun").html(weapon(x));
	$(".scope").html(scopes(x));
}
function weapon(cat){
	console.log(cat);
	var gun=0;
	var scope=0;
	if(cat=="RIFLE"){
		gun=rndRifles();
		
		return gun;
	}else if(cat=="CARABINE"){
		gun=rndCarabines();
		
		return gun;
	}else if(cat=="SHOTGUN"){
		gun=rndShotguns();
		
		return gun;
	}else{
		gun=rndDmr();		
		return gun;
	}

}
function scopes(cat){
	if(cat=="dmrs"){
		return randomSniperSight;
	}else{
		return randomNormalSight();
	}

}
function randomNormalSight(){
	var randomShortSight=shortSight[rnd(8)];
	var randomMiddleSight=middleSight[rnd(5)];
	var randomSight=[randomShortSight,randomMiddleSight];
	var normalSight=randomSight[rnd(1)];
	console.log(normalSight);
	return normalSight;
}
function randomSniperSight(){
	var randomLongSight=longSight[rnd(3)];
	var sniperSight=[randomNormalSight(),randomLongSight];
	return sniperSight;
}