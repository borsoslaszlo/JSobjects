/*

var str_message =  '{"result":"##Result##:\\n ","reason":"##Reason:##\\n ","achievement":"##How to possibly achieve remediation by the automaton:##\\n"}';


var json_messsage = JSON.parse (str_message);


//print (JSON.stringify(json_messsage));

print (json_messsage.result);
print (json_messsage.reason);
print (json_messsage.achievement);
*/

/*
class  Message {
	constructor (){
		this.result="##Result##:\n";
		this.reason="##Reason##:\n";
		this.achievement="##How to possibly achieve remediation by the automaton:##\n";
	}
	get getarea (){
		return this.result ;
		}
	
	get getreason (){
		return this.reason ;
		}
	get getachievement (){
		return this.achievement;
		}
	}


*/



/*
 * Osztályok használata IPCenterben:
 * 1.  Egy javascript state létrehozás a process component_input után 
 * 2.  A függvény (osztály) tárolása egy lokális változóban , majd kiexportálni globális válozóba . 
 * Példa :
 * 
 *   var str_myjscreatejsonstring_local = "(function (source_text,key_value_separator,fields_separator){lines = source_text.split (fields_separator);json = \'{\';for (var i=0 ; i<lines.length-1  ; i++)  {line_as_array = lines [i].split (key_value_separator);key = \'\"\'+myjstrim (line_as_array[0])+\'\"\';value = myjstrim (line_as_array [1]);if (isNaN (value) )   { value = \'\"\' + value +\'\"\' ;   }json = json+key+\':\'+value;if (i!=lines.length -2) { json = json +\',\';}}json = json +\'}\';return json;})";
 *	lib.setvar  ("str_myjscreatejsonstring_global", str_myjscreatejsonstring_local);
 * 
 * 3. Abban state-ben ahol használni akarjuk a függvényt, Lokális változó készítése és eval (globális változó) , majd lehet használni függvényként
 * Példa:
 * var myjscreatejsonstring = eval ( str_myjscreatejsonstring_global);
 * var local_phys_adapter_props =  myjscreatejsonstring  ();
 * 
 * Példa a használatra :
 * GEN:UNIX:GEN:R:C:FSCSI adapter check-V1.0.1.0    a testszerveren  
 * 
 */





function Message () {
		this.result="##Result##:\n";
		this.reason="##Reason##:\n";
		this.achievement="##How to possibly achieve remediation by the automaton:##\n";
	this.getResult  =  function (){
		return this.result ;
		};
	this.getReason = function (){
		return this.reason ;
		};
	this.getAllVars = function (){
		return this.getResult() + this.getReason() +this.getAchievement();
		
		
	}
		
	this.getAchievement=function (){
		return this.achievement;
		};
	this.resetResult  = function (){
		this.result="##Result##:\n"; 
	};
	this.resetReason = function () {
		this.reason="##Reason##:\n";
	}
	this.resetAchievement = function () {
		this.achievement="##How to possibly achieve remediation by the automaton:##\n";
	}
	this.resetAllVar = function () {
		this.resetResult();
		this.resetReason();
		this.resetAchievement();
		}
	
	this.addToResult  = function (str_to_be_added){
		this.result=this.result+str_to_be_added;
	};
	this.addToReason = function (str_to_be_added){
		this.reason = this.reason +  str_to_be_added;
		}
	this.addToAchievement = function (str_to_be_added){
		this.achievement = this.achievement + str_to_be_added;
	}

	
	}

var myMessage = new Message ();

print (myMessage.getResult());
myMessage.addToResult ('this is an addition to result\n');
print (myMessage.getAllVars ());
myMessage.resetAllVar();
myMessage.addToResult ('this is an  other addition to result\n');

print (myMessage.getAllVars ());

