var szoveg;
var szoveg1;
var csunya = ["fasz", "bazdmeg","kurva","geci","fasszopó", "kurvára", "pöcs", "segg", "faszom", "faszomat", "szopd", "szopj", "szopjál"];
var igaz=true;
var darabolt1 = [];
var darabolt = [];
var j;
szoveg = document.getElementsByTagName("body");
for (var i = 0; i < szoveg.length; i++)
    {
        console.log(szoveg[i].innerHTML);
        darabolt = szoveg[i].innerHTML.split(" ");
        j = "";
        for (var k = 0; k < darabolt.length; k++)
        {
            for(var x=0; x<csunya.length; x++)
            {
            if(darabolt[k]==csunya[x])
            {
                igaz=false;
                darabolt1=darabolt[k].split("");
                j+=darabolt1[0];
                for(y=1; y<darabolt1.length; y++)
                {
                    j+="*"
                }
                j+=" "
            }
            }
            if(igaz==true) j+=darabolt[k]+" ";
            igaz=true;
        }
        szoveg[i].innerHTML = j;
    }

