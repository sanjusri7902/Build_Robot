function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}
 
function add_row()
{
 var r_type =document.getElementById("robot_type").value;
 var r_color =document.getElementById("robot_color").value;
      
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id=r_type"+table_len+"'>"+ r_type +"</td><td id='c_row"+table_len+"'>"+r_color+"</td><td> <input type='button' value='Remove' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
 
 document.getElementById("robot_type").value="";
 document.getElementById("robot_color").value="";
}

