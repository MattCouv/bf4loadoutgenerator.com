function rnd(x){
	var alea = Math.round(Math.random()*x);
	return alea;
}
var pd;
$("#sub").click(function(){
	var soldier=$("#soldiername").val();
	console.log(soldier);

	var plat=$("#platform").val();
	console.log(plat);
	if(!soldier&&!plat){
		$("#error").css('display','block');
	}else{
		$.getJSON("http://api.bf4stats.com/api/playerInfo?plat="+plat+"&name="+soldier+"&opt=assignments,imagePaths,names,upcomingUnlocks,weapons,details,kititems&output=json",function(json){
		pd=json;
		console.log(pd);
		});
		$("#error").css('display','none');
		$("#login").css('display','none');
		$("#loadout").css('display','block');
	}
	
});
var kits = ["assault","engineer","support","recon"];
var kit;
var gadget=[];
var cat;
var cats=[];
$(".gen").click(function(){
	kit=kits[rnd(3)];
	console.log(kit);
	if(kit==="assault"){
		cats=["ASSAULT RIFLE","CARBINE","SHOTGUN","DMR"];
	}else if(kit==="engineer"){
		cats=["PDW","CARBINE","SHOTGUN","DMR"];
	}else if(kit==="support"){
		cats=["LMG","CARBINE","SHOTGUN","DMR"];
	}else if(kit==="recon"){
		cats=["SNIPER RIFLE","CARBINE","SHOTGUN","DMR"];
	}
	cat=cats[rnd(cats.length)];
	console.log(cat);
	var pre=rndPrimary (gunAssign,cat);
	var hand=rndPrimary (handgunAssignments,"SIDEARM");
	$('.picture').css('background','url(bf4/kits/'+kit+'.png) no-repeat');
	$('.primaryW').css('background','url('+pre.imgLineart+') no-repeat');
	$('.handgunW').css('background','url('+hand.imgLineart+') no-repeat');
});
$(".primaryW").click(function(){
	var pre=rndPrimary (gunAssign,cat);
	$('.primaryW').css('background','url('+pre.imgLineart+') no-repeat');
});
$(".handgunW").click(function(){
	var hand=rndPrimary (handgunAssignments,"SIDEARM");
	$('.handgunW').css('background','url('+hand.imgLineart+') no-repeat');
});

//list chosen gun

var sideharm=[];
var grenade=[];

function listGUns(a,x){//a=variables above and x="GRENADE","ASSAULT RIFLE","CARBINE","LMG","PDW","DMR","SNIPER RIFLE","SIDEARM","SHOTGUN"
	var y=0;
	
	for(var i=0;i<pd.weapons.length;i++){
		if(pd.weapons[i].detail.category===x){
			a[y]=pd.weapons[i];
			y++;
		}else{
			y=y;
		}
	}
	console.log(a);
	console.log(a.length);
	return a;
}

//list Gadgets
//var Gadget=[];

function listGadgets(a, b, c){//a=array of the specific class,b=the class, c=just for engineers, support or recon , it consist of "CARBINE","SHOTGUN","DMR"
	var y=0;
	var item=[];
	for(var i=0;i<pd.kititems.length;i++){
	if(pd.kititems[i].detail.category==="GADGET"&&pd.kititems[i].detail.kit===b&&pd.kititems[i].detail.name!=c){
			item[y]=pd.kititems[i];
			y++;
	}else{
			y=y;
	}			
	}
	for(i=0;i<pd.weapons.length;i++){
	if(pd.weapons[i].detail.category==="GADGET"&&pd.weapons[i].detail.kits[0]===b){
			item[y]=pd.weapons[i];
			y++;
	}else{
			y=y;
	}			
	}
	
	$.each(item, function(i, el){
    if($.inArray(el, a) === -1) a.push(el);
	});
	
	console.log(a.length);
	return a;
}



// this function fides in the json array the objects with the desired type
function unlockItem(x){//have to receive the category of the item for instance weapon or weaponUnlock
	var y=0;
	var item=[];
	for(var i=0;i<pd.upcomingUnlocks.length;i++){
		if(pd.upcomingUnlocks[i].type===x){
			item[y]=pd.upcomingUnlocks[i];
			y++;
		}else{
			y=y;
		}
	}
	return item; 
}

//this function creates an array with guns not yet unlocked to compare with the selected category to then substracte them
function unlockGun(x,a){//have to receive the category of the primary for instance RIFLE or DMR
	var y=0;
	var primary=[];
	for(var i=0;i<a.length;i++){
		if(a[i].subname===x){
			primary[y]=a[i];
			y++;
		}else{
			y=y;
		}
	}
	return primary;
}
var gunAssign=[
{id:'F2000',name:"Express Train"},
{id:'AS VAL',name:"CO-PILOT"},
{id:'DAO-12',name:"DEAD STOP"},
{id:'M60-E4',name:"DUST DEVIL"},
{id:'BULLDOG',name:"Lions and Tigers and Bears"},
{id:'ACE 23',name:"Assault Expert"},
{id:"UMP-9",name:"Engineer Expert"},
{id:"FY-JS",name:"Recon Expert"},
{id:"RPK-12",name:"Support Expert"},
{id:"GOL Magnum",name:"Eagle\'s Nest"},
{id:"L85A2",name:"Open Fire"},
{id:"MP7",name:"Make a dent"},
{id:"RPK",name:"Powder Keg"},
{id:"L115",name:"Need Only One"},
{id:"AR160",name:"Spare time Sniper"},
{id:"SR-2",name:"Packing a Punch"},
{id:"AWS",name:"Swiss Cheese"},
{id:"SR338",name:"Always Deadly"},
{id:"MPX",name:"Not the Weakest Link"},
{id:"CS5",name:"The \'I\' in Team"},
{id:"QBZ-95-1",name:"To Valhalla (Campaign)"},
{id:"P90",name:"Peace Maker (Campaign)"},
{id:"M249",name:"Final Duty (Campaign)"}
];
var handgunAssignments=[
{id:"UNICA 6",name:"Big Splash"},
{id:"M412 REX",name:"Tombstone Actual (Campaign)"}
];
var gadgetAssignments=[
{id:"SUAV",name:"Safe Raiding"},
{id:"UCAV",name:"Eyes in the Sky"},
{id:"BALLISTIC SHIELD",name:"Vanguard"},
{id:"DS-3 DECOY",name:"Disinformation"},
{id:"TARGET DETECTOR",name:"Eye Spy"},
];
var knifeAssignments=[
{id:"SHANK",name:"Fang of the Underworld (Campaign)"},
{id:"MACHETE",name:"A Trapped Wolf Will (Campaign)"},
];

function rndPrimary (x,a) {//x=one of the tables above a=wich weapon category
	var Gun=[];
	listGUns(Gun,a);	
	var pre;
	var gun=true;	
	do{
		var tocheck=[];
		pre=Gun[rnd(Gun.length-1)];		
		for(var i=0;i<x.length;i++){
			if(x[i].id===pre.name){
				tocheck[0]=x[i];				
			}
		}
		if(!tocheck[0]){
			console.log(pre.name);
			
			gun=gunUnlock(pre.name,unlockGun(a,unlockItem("weapon")));
			console.log(gunUnlock(pre.name,unlockGun(a,unlockItem("weapon"))));
		}else{
			gun=gunAssignments(tocheck[0].name);
		}
	}		
	while(gun===false);
	return pre;
}

function gunAssignments(x){
	var assignment=[];
	var checked=0;
	for(var i=0;i<pd.assignments.length;i++){
		if(pd.assignments[i].name===x){
			assignment[0]=pd.assignments[i];
		}
	}
	console.log(assignment[0]);
	for(i=0;i<assignment[0].criterias.length;i++){
		if(assignment[0].criterias[i].curr===assignment[0].criterias[i].needed){
			checked++;	
		}else{checked=checked;}
	}
	console.log(checked);
	console.log(assignment[0].criterias.length);
	if(checked===assignment[0].criterias.length){
		gun=true;
	}else{
		gun=false;
	}
	return gun; 
}
function gunUnlock(x,y){//x=pre.name
	var not=false;
	
	for(var i=0;i<y.length;i++){
		
		if(y[i].name===x){
			not=true;
		}
	}	
	if(not===true){
		gun=false;
	}else{gun=true;}console.log(gun);
	return gun;
}