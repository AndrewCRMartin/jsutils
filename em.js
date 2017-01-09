// JavaScript to generate a clickable EMail address without the
// HTML page containing the actual address.
// Call it with printem('user', 'somewhere#com', '#') where
// 'user' is the username 'somewhere#com' is the address but
// with # replacing the full stops. You can specify whatever
// character you want to replace the full stops.
// V1.0 (c) Andrew Martin, UCL, 11.05.05

function printem(name,addr,chr)
{
   var faddr = name + "@" + addr;

   faddr = strsubs(faddr, chr, ".");

   document.write("<span class='email'>");
   document.write("<a href='mailto:" + faddr +"'>" + faddr + "</a>");
   document.writeln("</span>");
}

function strsubs(str, old, rep)
{
   var offset = 0;
   var newstr = "";
   var off2;
   while((off2=str.indexOf(old,offset)) > -1)
   {
      newstr += str.substring(offset, off2) + rep; 
      offset = off2+1; 
   }
   newstr += str.substring(offset); 
   return(newstr); 
}
