var txtList = new Array()

txtList[txtList.length]="<a href=\"http//www.microbelibrary.org/ASMOnly/details.asp?id=1079&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"175\" height=\"205\" src=\"images/bacilli_03.jpg\" alt=\"(Bacili) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1420&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"175\" height=\"205\" src=\"images/banthracisgramstain_03.jpg\" alt=\"(Banthracis) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1424&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"175\" height=\"205\" src=\"images/ebola_03.jpg\" alt=\"(Ebola) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1424&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"175\" height=\"205\" src=\"images/ebolasem_03.jpg\" alt=\"(EbolaSEM) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1969&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"175\" height=\"205\" src=\"images/teleomorph_03.jpg\" alt=\"(SEM Telemorph) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=374&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"175\" height=\"205\" src=\"images/simonson_03.jpg\" alt=\"(Simonson) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1421&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"175\" height=\"205\" src=\"images/smallpox_03.jpg\" alt=\"(Smallpox) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=380&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"175\" height=\"205\" src=\"images/sporothrix_03.jpg\" alt=\"(Sporothrix) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1259&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"175\" height=\"205\" src=\"images/trypanthin_03.jpg\" alt=\"(Trypanthin) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1131&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"175\" height=\"205\" src=\"images/vcholeraevolvox_03.jpg\" alt=\"(Vcholerae Volvox) The Center for Advancing Microbial Risk Assessment\"></a>";
txtList[txtList.length]="<a href=\"http://www.microbelibrary.org/ASMOnly/details.asp?id=1423&Lang=English\" target=\"_blank\"><img border=\"0\" width=\"175\" height=\"205\" src=\"images/ypestiswright_03.jpg\" alt=\"(Ypestiswright) The Center for Advancing Microbial Risk Assessment\"></a>";


j=parseInt(Math.random()*txtList.length);
j=(isNaN(j))?0:j;

document.write(txtList[j]);
