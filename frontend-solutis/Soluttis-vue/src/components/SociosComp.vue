<template>
    <section id="socios" style ="color:white">
        <h2>Sócios</h2>
        <div id="SociosBox">
            <div class="socios">
                <img src="/images/dominik.jpg" alt="Dominik">
                <h3 id="name">Dominik Maureen - Gerente Comercial</h3>
                <div class="textSocio">
                    <p>Instrutora experiente em treinamento de Técnicas de Vendas, Conversão e Comportamento, com uma trajetória de 10 anos na área comercial. Atualmente, sou responsável por um crescimento notável de 176% no faturamento da empresa em que atuo, destacando-me pela habilidade em desenvolver estratégias de alto impacto e capacitar equipes para alcançar resultados extraordinários.</p>
                </div>
                
                
          
            </div>
            <div class="socios">
                <img src="/images/Anderson.jpg" alt="Anderson">
                <h3 id="name">Anderson Vitor - Sócio Administrativo</h3>
                <div class="textSocio">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur nostrum dolor voluptates deleniti error veniam. Expedita quia consectetur ipsum, assumenda officiis itaque, dolores tempore excepturi, odio accusantium impedit facilis?</p>
                </div>
          
            </div>
            <div class="socios">
                <img src="/images/Ricardo.jpeg" alt="Dominik">
                <h3 id="name">Ricardo - Gerente Comercial</h3>
                <div class="textSocio">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur nostrum dolor voluptates deleniti error veniam. Expedita quia consectetur ipsum, assumenda officiis itaque, dolores tempore excepturi, odio accusantium impedit facilis?</p>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    

</script>

<style>
#socios h2{
    margin-bottom: 10vh;
}
    #name{
        margin: 2vh;
    }
    #SociosBox{
        display: flex;
    }
    .socios img{
        border-radius: 100%;
        width: 400px;        
        padding: 1vh;
    }
    .socios {
        flex-direction: row;
        justify-items: center;
        justify-content: center;
        width: 100%;
        padding-bottom: 15vh;
    }
    .textSocio{
        width: 40vh;
        text-align: center;
    }
    
    a{
        margin: 1rem;
    }
    html, body {
    height: 100%;
    margin: 0;
    background-color: black;
    color: white; /* Opcional, para garantir que o texto seja visível */
}
</style>