if (document.getElementById('thepic') != null) {
  var d = new Date();
  var n = d.getMonth();
  n = n % 4;
  document.getElementById('thepic').src = 'img/banner0' + n + '.png';
  }

document.write("\
<DIV id='foottext'><A class='footleft more' HREF='docs/privacy.pdf'>[privacy]</A>\
<A HREF='http://www.bsms.be/contact.htm'><IMG  class='footright' SRC='img/ml.png'></A>\
<A HREF='http://facebook.com/bsmsnews' TARGET='_top'><IMG  class='footright' SRC='img/fb.png'></A>\
<A HREF='http://twitter.com/bsmsnews' TARGET='_top'><IMG class='footright' SRC='img/tw.png'></A>\
<A HREF='http://bsmsnews.bsms.be' TARGET='_top'><IMG  class='footright' SRC='img/rss.png'></A>\
<A HREF='http://www.bsms.be'><IMG class='footright' SRC='img/home.png'></A>\
</DIV>\
<DIV class='copy'>this is a cookiefree website</DIV>\
");


