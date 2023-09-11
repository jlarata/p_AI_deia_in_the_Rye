
let explica = true;

function spoilers()
    {
        if (explica)
        {
        document.getElementById("spoilers").innerHTML = "explicación explicativa explicando pues se explica la explicada explicación explicativa explicando pues se explica la explicada";
        explica = false;
        }
        else
        {
            document.getElementById("spoilers").innerHTML = ""
            explica = true;
        }
    }
