// Define Events
m = new Array();
m.push(new eventdate(16, 10, 2016, "Eugene Cernan, The Last Man on the Moon"));
m.push(new eventdate(25, 10, 2016, "Young Arts and Literature Workshop (Booking required)"));
m.push(new eventdate( 6, 11, 2016, "The Ugly Animal Roadshow - NEW VENUE!!!"));
m.push(new eventdate(20, 11, 2016, "I'm no Bird Brain - NEW VENUE!!!"));
m.push(new eventdate( 4, 12, 2016, "Going to the Stars - NEW VENUE!!!"));
m.push(new eventdate(15,  1, 2017, "Dr Death and the Medi-Evil Medicine Show - NEW VENUE!!!"));


// Make the frame replace itself with the HTML which describes the
// next eventdate. The user will never know it was generated by
// JavaScript! (at least under Netscape, MIE seems to allow you to see
// the source :-( ...as does Netscape6/Mozilla - oh well!

displayNextEventdate();

function displayNextEventdate()
{
//   doc = open("","");

   // Find next eventdate
   var nextEvent = new nextEventdate();
   var simpledate = new simplifyDate(nextEvent.date);
   
   // And write it out
   document.writeln("<div id='nextevent'>");
   document.writeln("<span class='announce'>Next Event!</span>");
   document.writeln("<span class='eventdate'>");
   document.writeln(simpledate.text);
   document.writeln("</span>");
   document.writeln("<span class='eventtitle'>");
   document.writeln(nextEvent.title);
   document.writeln("</span>");
   document.writeln("</div>");
}

function eventdate(day, month, year, title)
{
   this.date = new Date(year, month-1, day, 18, 0, 0);
   this.title = title;
}

function simplifyDate(datestr)
{
   var month = new Array();
   month[0] = "Jan";
   month[1] = "Feb";
   month[2] = "Mar";
   month[3] = "Apr";
   month[4] = "May";
   month[5] = "Jun";
   month[6] = "Jul";
   month[7] = "Aug";
   month[8] = "Sep";
   month[9] = "Oct";
   month[10] = "Nov";
   month[11] = "Dec";

   if(datestr == "")
   {
      this.text = "";
   }
   else
   {
      var year = datestr.getYear();

      // Some MIE versions give a 2 digit year. Other versions of MIE
      // and older Netscapes give a 4 digit year while Netscape 4.70 gives
      // years since 1900 (i.e. 2000 ==> 100) !!!!
      if(year < 80)
      {
         year += 2000;
      }
      else
      {
         if(year < 1900)
         {
            year += 1900;
         }
      }
      this.text = datestr.getDate() + "-" + month[datestr.getMonth()] + "-" + year;
   }
}

function nextEventdate()
{
   var today = new Date();

   this.date = "";
   this.title = "Sorry, events for the new term have not yet been scheduled";

   for(var i in m)
   {
      if(m[i].date.getTime() >= today.getTime())
      {
         this.date = m[i].date;
         this.title = m[i].title;
         break;
      }
   }
}

