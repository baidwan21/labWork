var txtList = new Array()

//txtList[txtList.length]="<img src=\"images/bacilli_02.jpg\" width=\"84\" height=\"94\" alt=\"\">";
//txtList[txtList.length]="<img src=\"images/banthracis_02.jpg\" width=\"84\" height=\"94\" alt=\"\">";
//txtList[txtList.length]="<img src=\"images/ebola_02.jpg\" width=\"84\" height=\"94\" alt=\"\">";
//txtList[txtList.length]="<img src=\"images/ebolasem_02.jpg\" width=\"84\" height=\"94\" alt=\"\">";
//txtList[txtList.length]="<img src=\"images/sem-telemorph_02.jpg\" width=\"84\" height=\"94\" alt=\"\">";
//txtList[txtList.length]="<img src=\"images/simonson_02.jpg\" width=\"84\" height=\"94\" alt=\"\">";
//txtList[txtList.length]="<img src=\"images/smallpox_02.jpg\" width=\"84\" height=\"94\" alt=\"\">";
//txtList[txtList.length]="<img src=\"images/sporothrix_02.jpg\" width=\"84\" height=\"94\" alt=\"\">";
//txtList[txtList.length]="<img src=\"images/trypanthinbloodfilm_02.jpg\" width=\"84\" height=\"94\" alt=\"\">";
//txtList[txtList.length]="<img src=\"images/vchoeraevolvox_02.jpg\" width=\"84\" height=\"94\" alt=\"\">";
//txtList[txtList.length]="<img src=\"images/ypestiswright_02.jpg\" width=\"84\" height=\"94\" alt=\"\">";



txtList[txtList.length]="<a href=\"http//www.microbelibrary.org/ASMOnly/details.asp?id=1079&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"84\" height=\"94\" src=\"images/bacilli_02.jpg\" alt=\"(Bacili) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1420&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"84\" height=\"94\" src=\"images/banthracis_02.jpg\" alt=\"(Banthracis) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1424&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"84\" height=\"94\" src=\"images/ebola_02.jpg\" alt=\"(Ebola) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1424&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"84\" height=\"94\" src=\"images/ebolasem_02.jpg\" alt=\"(EbolaSEM) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1969&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"84\" height=\"94\" src=\"images/sem-telemorph_02.jpg\" alt=\"(SEM Telemorph) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=374&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"84\" height=\"94\" src=\"images/simonson_02.jpg\" alt=\"(Simonson) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1421&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"84\" height=\"94\" src=\"images/smallpox_02.jpg\" alt=\"(Smallpox) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=380&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"84\" height=\"94\" src=\"images/sporothrix_02.jpg\" alt=\"(Sporothrix) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1259&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"84\" height=\"94\" src=\"images/trypanthinbloodfilm_02.jpg\" alt=\"(Trypanthin) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1131&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"84\" height=\"94\" ssrc=\"images/vchoeraevolvox_02.jpg\" alt=\"(Vcholerae Volvox) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1423&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"84\" height=\"94\" src=\"images/ypestiswright_02.jpg\" alt=\"(Ypestiswright) The Center for Advancing Microbial Risk Assessment\"></a>";


j=parseInt(Math.random()*txtList.length);
j=(isNaN(j))?0:j;

document.write(txtList[j]);
