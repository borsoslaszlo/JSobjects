function print_column (par_column_order,par_text)
{
var column ;
var max_column_number =0;

  if (par_text.substring (par_text.length-1)==="\n") {
	par_text = par_text.substring (0,par_text.length-1);
  }

var textarray = par_text.split ("\n");

if (par_column_order==="NF") {
	for (var i=0 ; i<textarray.length;i++){
			var line= textarray [i];
			var word_array = line.split (/\s+/);
			print (word_array[word_array.length-1]);
		}
} else {
	for (var i=0 ; i<textarray.length;i++){
		var line= textarray [i];
		var word_array = line.split (/\s+/);
		//column.push (word_array[par_column_order-1]);
	if  (word_array[par_column_order-1]==null)  {print ("<NA>");}
	else 
	{
	print (word_array[par_column_order-1]);
	}
	}
}
//return column;
}
