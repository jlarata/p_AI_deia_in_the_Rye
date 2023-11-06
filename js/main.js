
let explica = true;
let spoilersChatBoolean = true;
let talentosBoolean = true;

    


    

function spoilers()
    {
    
        let ventanaExplicativa = document.getElementById("spoilers");
        let botonSpoilers = document.getElementById("buttonSpoilers");

        if (explica)
        {
            
            let explicacion =
            " <p>\"¿Sueñan las alumnas con novelas eléctricas\" es un proyecto pedagógico y artístico"+
            " llevado a cabo por alumnas de segundo año del colegio paideia en el año 2023. El"+
            " objetivo es comparar y contastar de manera lúdica las estrategias literarias"+
            " estudiadas durante el año en curso contra las propias que utiliza el popular modelo de"+
            " lenguage por inteligencia artificial \"ChatGPT\". Uno de los textos expuestos en esta página"+
            " web fue compuesto por ChatGPT, mientras que los otros fueron producidos por las estudiantes, "+
            " quienes recibieron el mismo \"input\" o instrucciones. Se trata de imitar el estilo literario de J. D. Salinger"+
            ", en su novela <span style=\"font-style: italic; font-size: larger; font-weight: bold;\">The Catcher in the Rye</span>, tomando el modelo de traducción clásico de Carmen Criado.</p>"+
            " <p>Más abajo, en la sección documentación, se"+
            " puede acceder a la totalidad de la conversación con la AI, y se devela el nombre de las estudiantes"+
            " que participaron.</p>"; 
        ventanaExplicativa.innerHTML = explicacion;
        botonSpoilers.innerHTML = '↑ cerrar ↑';
        explica = false;
        window.location.href = '#title';
        }
        else
        {
            ventanaExplicativa.innerHTML = ""
            botonSpoilers.innerHTML = '↓ spoilers ↓'
            explica = true;
        }
    };

    function spoilersChatGPT(){

        let buttonSpoilersChatGPT = document.getElementById("buttonSpoilersChatGPT");
        let spoilersChatWindow = document.getElementById("chatGPT");

        if(spoilersChatBoolean)
        {
            let chatwithchat =
            "<ul>"+
            "<li>hi</li>"+
            "<li><h5>Hello! How can I assist you today?</h5></li>"+
            "<li>I would like to try a literary exercise with you</li>"+
            "<li><h5>Of course, I'd be happy to help you with a literary exercise! Please let me know what kind of exercise you have in mind or provide me with more details so I can assist you effectively. Whether it's writing, brainstorming, character development, or anything else related to literature, I'm here to help!</h5></li>"+
            "<li>it is a writing exercise. I want you to try to write a short fragment imitating the style of an author in a specific work that I mention to you.</li>"+
            "<li><h5>Absolutely, I'd be delighted to give it a shot! Please go ahead and mention the author and the specific work you'd like me to emulate, and I'll do my best to write a short fragment in that style for you.</h5></li>"+
            "<li>the author is Salinger and the style is that of his novel \"the catcher in the rye\". the plot is as follows: in this fragment, Holden, the narrator and protagonist, recalls an anecdote that happened to him when he was a few years younger. In this anecdote he went by bike to see his brother Allie who was playing a baseball game. He left his bike in the park unattended, and when the game ended he discovered his bike had been stolen. The text should include reflections, descriptions, and classic Holden-style opinions, whether it's about other kids, burglars, riding bikes, or even playing baseball. If you need more details, please ask me.</li>"+
            "<li><h5>I remember that time, a couple years back, when I was just a kid, not as old as I am now, that's for sure. It was a warm day, the kind of day that makes you feel like summer's gonna stick around forever. Allie was playing in this baseball game, and I figured I'd bike down to the park to catch the last few innings.</h5></li>"+
            "<li><h5> You know, just to show some support for the little guy.So there I was, riding my bike down the street, wind in my hair, feeling like I owned the whole damn world. I chained up my bike to a tree near the field, not that I thought there'd be any vultures waiting to swoop in and snatch it up. I mean, who would be heartless enough to steal a kid's bike? But you never know, people can be phony as hell sometimes.Allie was up to bat, swinging that bat like he meant business. He was good at that stuff, not like me. I could never really get the hang of it. But I guess that's what made him unique, in his own little way. He'd hit that ball so hard,</h5></li>"+
            "<li><h5> you'd think it was gonna sail all the way to Timbuktu. And me, standing there, trying not to be a complete moron, cheering him on like a crazy person.The game ended, and we were all clapping and hollering. Allie's team won, and he had that big grin on his face. But then I turned around, and my stomach dropped like I'd just lost a million bucks. My bike was gone, just vanished into thin air. Someone had swiped it, right from under my nose.I felt like such a moron, you know? Like I should've known better. Who leaves their bike unattended, even for a minute? But that's the thing about kids, we're innocent. We trust, we believe in the goodness of people.</h5></li>"+
            "<li><h5> And then, reality smacks us right in the face, teaching us that not everyone's on the up-and-up.I stood there, seething with anger and frustration. Kids were running around, their laughter cutting through the air like sharp knives. And I couldn't help but think, \"What a bunch of phonies. They're all just playing their little games, not a care in the world.\" I felt like a part of me had been stolen along with that bike, a piece of my childhood innocence, swiped by some two-bit thief.So there I was, stuck in that moment, watching the sun go down, feeling like a goddamn idiot for leaving my bike unattended. But you know what? Life's like that sometimes.</h5></li>"+
            "<li><h5> It throws you curveballs, makes you question everything. And even though I was mad as hell, deep down, I couldn't help but think about Allie's grin when he hit that home run. Maybe life's not so bad after all. Just gotta keep your eyes open for those damn phonies, that's all.</h5></li>"+
            "<li><h5></h5></li>"+
            "<li>thank you chatgtp.</li>"+
            "<li><h5>You're welcome! If you have any more questions or need further assistance in the future, feel free to ask. Happy writing and exploring the world of literature! hi again</h5></li>"+
            "<li>Hello again! </li>"+
            "<li><h5>How can I assist you today? Is there something specific you'd like to ask or discuss? </h5></li>"+
            "<li>can we follow this conversation from where we left it?</li>"+
            "<li><h5>Of course, we can continue our conversation from where we left off. If you have any more questions or if there's something you'd like to discuss, feel free to let me know! </h5></li>"+
            "<li>remember the fragment you wrote imitating salinger style?</li>"+
            "<li><h5>Absolutely, I remember the fragment I wrote in the style of J.D. Salinger's \"The Catcher in the Rye.\" If you have any further questions about it or if you'd like to continue working on that exercise, just let me know!</h5></li>"+
            "<li> first, i want to make a question to you: are you aware of carmen criado's translation to spanish of Salinger's novel, entitled \"El guardián entre el centeno\"?</li>"+
            "<li><h5>Yes, I'm aware of Carmen Criado's translation of J.D. Salinger's novel \"The Catcher in the Rye\" into Spanish, titled \"El guardián entre el centeno.\" If you have any questions or discussions related to this translation or the novel itself, feel free to ask!</h5></li>"+
            "<li>if you can, i would like you to translate to spanish the same fragment you wrote, trying to imitate the translation style of Carmen Criado.</li>"+
            "<li><h5>Por supuesto, puedo intentar imitar el estilo de traducción de Carmen Criado. Aquí tienes el fragmento traducido al español en ese estilo:Recuerdo aquella vez, hace un par de años, cuando era apenas un crío, no tan viejo como soy ahora, eso seguro. Era un día cálido, de esos que te hacen sentir que el verano se quedará para siempre. Allie estaba jugando en un partido de béisbol, y pensé en ir en bicicleta al parque para atrapar las últimas entradas. Sabes, solo para mostrar un poco de apoyo al pequeño.Así que allí estaba, pedaleando por la calle, el viento en mi cabello, sintiéndome como si fuera el dueño del mundo entero. Aseguré mi bicicleta a un árbol cerca del</h5></li>"+
            "<li><h5> campo, no es que pensara que habría buitres esperando para abalanzarse y llevársela. Quiero decir, ¿quién podría ser tan desalmado como para robarle la bicicleta a un chico? Pero nunca se sabe, la gente puede ser tan falsa como el infierno a veces.Allie estaba en el plato, balanceando ese bate como si fuera asunto serio. Era bueno en esas cosas, no como yo. Nunca realmente pude entenderlo. Pero supongo que eso es lo que lo hacía único, a su manera. Golpeaba la pelota tan fuerte que pensarías que iba a volar hasta Timbuktu. Y yo, parado allí, tratando de no ser un completo idiota, vitoreándolo como un loco.El partido terminó y todos estábamos aplaudiendo</h5></li>"+
            "<li><h5> y vociferando. El equipo de Allie ganó y tenía esa gran sonrisa en su rostro. Pero luego me di la vuelta y mi estómago cayó como si acabara de perder un millón de dólares. Mi bicicleta había desaparecido, simplemente se esfumó en el aire. Alguien la había agarrado, justo bajo mis narices.Me sentí como un completo idiota, ¿sabes? Como si debiera haber sabido mejor. ¿Quién deja su bicicleta desatendida, ni siquiera por un minuto? Pero esa es la cosa de los chicos, somos inocentes. Confiamos, creemos en la bondad de las personas. Y luego, la realidad nos golpea en plena cara, enseñándonos que no todos son sinceros.Permanecí allí, hirviendo de rabia y</h5></li>"+
            "<li><h5> frustración. Los niños corrían por ahí, sus risas cortaban el aire como cuchillos afilados. Y no pude evitar pensar, \"Qué grupo de falsos. Todos están jugando sus pequeños juegos, sin preocuparse por nada en el mundo.\" Sentí como si una parte de mí hubiera sido robada junto con la bicicleta, un pedazo de mi inocencia infantil, arrebatada por algún ladrón de pacotilla.Así que allí estaba, atrapado en ese momento, viendo cómo el sol se ponía, sintiéndome como un maldito idiota por dejar mi bicicleta desatendida. Pero ¿sabes qué? A veces la vida es así. Te lanza curvas, te hace cuestionarlo todo. Y aunque estaba enojado como el infierno, en lo</h5></li>"+
            "<li><h5> profundo, no pude evitar pensar en la sonrisa de Allie cuando conectó ese jonrón. Tal vez la vida no sea tan mala después de todo. Solo tienes que mantener los ojos abiertos para esos malditos falsos, eso es todo. </h5></li>"+
            "<li><h5></h5></li>"+
            "<li>that's very nice. thank you</li>"+
            "<li><h5>You're welcome! I'm glad you liked it. If you have any more questions or if there's anything else I can assist you with, feel free to ask.</h5></li>"+
            "<li></li>"+
            "<li><h5> ¡Estoy aquí para ayudar!</h5></li>"+
            "<li>is there any way of download this chat we had?</li>"+
            "<li><h5>I apologize for any inconvenience, but currently, there isn't a way to download the entire chat conversation. However, you can copy and paste the conversation into a document or text file on your device to save it for future reference. If you have any specific questions or need assistance with anything else, please feel free to ask, and I'll be happy to help!</h5></li>"+
            "</ul>"+
            
            "<div class=\"bcscgptContainer\"><button id=\"buttonCerrarSpoilersChatGPT\" type=\"button\" class=\"btn btn-outline-danger bcscgpt\" onclick=\"spoilersChatGPT()\">cerrar</button></div>"
            ; 
            spoilersChatWindow.innerHTML = chatwithchat;
            buttonSpoilersChatGPT.innerHTML = '↑ cerrar ↑';
            spoilersChatBoolean = false;
        } else {
            spoilersChatWindow.innerHTML = ""
            buttonSpoilersChatGPT.innerHTML = '↓ conversación completa chat GPT ↓'
            spoilersChatBoolean = true;
        }

        
    }


    