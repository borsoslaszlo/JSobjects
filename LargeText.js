


var LargeText= function  (strParText)
{
	this.strText = strParText;
	this.Grep = function (strParMethod,strParPattern){
			// strParMethod  :i:  Ignores upper/lower case distinction during  comparisons.
			//				v: Prints all lines except those that  contain  the  pattern.
			// strParPattern : pattern
			
		var arrTextArray = this.strText.split ("\n");
		var strReturnString='';

		for (var i=0 ; i<arrTextArray.length;i++){
					//print (textarray[i]);
					switch  (strParMethod)
					{
					case "i":
						var strUpperLine=arrTextArray[i].toUpperCase();
						var strUpperPattern = strParPattern.toUpperCase();
						//print (typeof (upper_line));
						if (strUpperLine.indexOf (strUpperPattern)!=-1)
						{
							strReturnString = strReturnString + arrTextArray [i] + "\n";	
						}
					break;
					case "v":
						if (arrTextArray[i].indexOf (strParPattern)==-1)
						{
							
							strReturnString = strReturnString + arrTextArray [i] +"\n";	
						}

					break;	
					}
				}
		return  strReturnString ;
	}



	this.LineCount = function (strParText)
	{
		if (typeof (strParText)!=="undefined"){ 
		var arrTextArray = strParText.split ("\n");
		return arrTextArray.length;
		}
		else {
		var arrTextArray = this.strText.split ("\n");
		return arrTextArray.length;
		}
	}



	this.Trim = function (strParText)
	{
		if (typeof (strParText)!=="undefined"){ 
			while (strParText.substring(0,1) == ' ') // check for white spaces from beginning
			{
				strParText = strParText.substring(1, strParText.length);
			}
			while (strParText.substring(strParText.length-1, strParText.length) == ' ') // check white space from end
			{
				strParText = strParText.substring(0,strParText.length-1);
			}
			return strParText;
			}
			else  {
			var strResultText=this.strText;;
			
			while (strResultText.substring(0,1) == ' ') // check for white spaces from beginning
			{
				strResultText = strResultText.substring(1, strResultText.length);
			}
			while (strResultText.substring(strResultText.length-1, strResultText.length) == ' ') // check white space from end
			{
				strResultText = strResultText.substring(0,strResultText.length-1);
			}
			return strResultText;
			}
	}



	this.PrintColumn = function (intParColNumber){
		var column ;
		var intMaxColumnNumber =0;
		var strResultText ='';
		if (this.strText.substring (this.strText.length-1)==="\n") {
			this.strText = this.strText.substring (0,this.strText.length-1);
		  }
		var arrTextArray = this.strText.split ("\n");
		if (intParColNumber==="NF") {
			for (var i=0 ; i<arrTextArray.length;i++){
					var strLine= arrTextArray [i];
					var arrWordArray = strLine.split (/\s+/);
					strResultText = strResultText+arrWordArray [arrWordArray.length-1]+'\n';
					//print (word_array[word_array.length-1]);
			}
		} else {
			for (var i=0 ; i<arrTextArray.length;i++){
				var strLine= arrTextArray [i];
				var arrWordArray = strLine.split (/\s+/);
				//column.push (word_array[par_column_order-1]);
				if  (arrWordArray[intParColNumber-1]==null)  {
					strResultText = strResultText + '<NA>';
					//print ("<NA>\n");
					}
					else 
					{
					strResultText = strResultText + arrWordArray[intParColNumber-1]+'\n';
					//print (word_array[par_column_order-1]);
					}
			}
		}
			return strResultText;
		}

	this.ToJSON=function (strKeyValueSeparator,strFieldSeparator) {
	strLines = this.strText.split (strFieldSeparator);
	strJSON = '{';
	for (var i=0 ; i<strLines.length-1  ; i++){
		arLine = strLines [i].split (strKeyValueSeparator);
		strKey = '"'+this.Trim (arLine[0])+'"';
		strValue = this.Trim (arLine [1]);
		if (isNaN (strValue) ){ 
			strValue = '"' + strValue +'"' ;
			}
			strJSON = strJSON+strKey+':'+strValue;
			if (i!=strLines.length -2) {
				strJSON = strJSON +',';
				}
		}
		strJSON = strJSON +'}';
		return strJSON;
	}
}


//testing part


var testText= new LargeText('				ez egy szöveg első sora\nez meg a második sora   \nez meg a harmadik sora');
print (testText.Grep ('v','GG'));

print (testText.PrintColumn (3)); 
print (testText.PrintColumn (10)); 

print (testText.LineCount());
print (testText.LineCount('ez csak egy sor lesz'));

print (testText.Trim());
print (testText.Trim('                   kjjkjk        k      '));


var jsonTextTest = new LargeText ('key1:value1\nkey2:value2\nkey3:value3');
print (jsonTextTest.ToJSON (':','\n'));

