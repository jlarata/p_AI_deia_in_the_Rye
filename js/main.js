
let explica = true;

function spoilers()
    {
        if (explica)
        {
            const explicacion =
            " \"¿Sueñan las alumnas con novelas eléctricas\" es un proyecto pedagógico y artístico"+
            " llevado a cabo por alumnas de segundo año del colegio paideia en el año 2023. El"+
            " objetivo es comparar y contastar de manera lúdica las estrategias literarias"+
            " estudiadas durante el año en curso contra las propias que utiliza el popular modelo de"+
            " lenguage por inteligencia artificial \"ChatGPT\". Uno de los textos expuestos en esta página"+
            " web fue compuesto por ChatGPT, mientras que los otros fueron producidos por las estudiantes, "+
            " quienes recibieron el mismo \"input\" o instrucciones. Debajo, en la sección documentación, se"+
            " puede acceder a la totalidad de la conversación con la AI, y se devela el nombre de las estudiantes"+
            " que participaron."; 
        document.getElementById("spoilers").innerHTML = explicacion;
        explica = false;
        }
        else
        {
            document.getElementById("spoilers").innerHTML = ""
            explica = true;
        }
    }
