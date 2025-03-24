document.write("\
<DIV id='logos'><A HREF='http://www.bsms.be'><IMG class='logoimg' SRC='img/logo1.png'></A><IMG class='logoimg' SRC='img/logo2.png'>\
<A HREF='javascript:switchmenu()'><IMG id='hambimg' class='gsmonly' SRC='img/hamburger.png'></A></DIV>\
<DIV id='navbar'>\
<UL>\
<LI class='hmenuitem'><A class='menulink' HREF='about.htm' id='about'>about us</A>\
<LI class='hmenuitem'><A class='menulink' HREF='meeting.htm' id='meeting'>meetings</A>\
<LI class='hmenuitem'><A class='menulink' HREF='bsmsnews.htm' id='bsmsnews'>bsmsnews</A>\
<LI class='hmenuitem'><A class='menulink' HREF='links.htm' id='links'>links</A>\
<LI class='hmenuitem'><DIV class='row2'><A HREF='contact.htm'><IMG class='social' SRC='img/ml.png'></A>\
<A HREF='http://facebook.com/bsmsnews/' TARGET='_top'><IMG class='social' SRC='img/fb.png'></A>\
<A HREF='http://twitter.com/bsmsnews/' TARGET='_top'><IMG class='social' SRC='img/tw.png'></A>\
<A HREF='bsmsnews.htm' TARGET='_top'><IMG  class='social' SRC='img/rss.png'></A>\
<A HREF='http://www.bsms.be/' TARGET='_top'><IMG class='social' SRC='img/home.png'></A></DIV>\
<UL>\
</DIV>\
");

function switchmenu() {
  if (document.getElementById('navbar').style.display == 'block') {
    document.getElementById('navbar').style.display = '';
    }
  else {
    document.getElementById('navbar').style.display = 'block';
    }
}

function update(what) {
  var we = what.name + window.atob('QGJzbXMuYmU=');
  we = window.atob('bWFpbHRvOg==') + we;
  window.open(we, null);
}
