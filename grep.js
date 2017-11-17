function  grep (par_method , par_text, par_pattern  )
{
	// par_method  :   i:  Ignores upper/lower case distinction during  comparisons.
	//			v: Prints all lines except those that  contain  the  pattern.
	
	// par_text :  text in which look for the pattern 
	// par_pattern : pattern
	
var textarray = par_text.split ("\n");
var returnstring='';

for (var i=0 ; i<textarray.length;i++){
		//print (textarray[i]);
			switch  (par_method)
			{
			case "i":
				var upper_line=textarray[i].toUpperCase();
				var upper_pattern = par_pattern.toUpperCase();
				//print (typeof (upper_line));
				if (upper_line.indexOf (upper_pattern)!=-1)
				{
					returnstring = returnstring + textarray [i] + "\n";	
				}
			break;
			case "v":
				if (textarray[i].indexOf (par_pattern)==-1)
				{
					
					returnstring = returnstring + textarray [i] +"\n";	
				}

			break;	
			}
		}
		return  returnstring ;
}
