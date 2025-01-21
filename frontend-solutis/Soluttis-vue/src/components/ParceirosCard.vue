<template>
    <div id="card">
        <img 
        v-for="(item, index) in imagens"
        :key="index"
        :src="item.src"
        :alt="item.descricao"
    />
    </div>
</template>

<script>
export default {
data(){
    return{
        imagens: [
            { src:'https://orioncomplex.com.br/wp-content/uploads/2023/07/MISSMAKE-LOGOMARCA-COMPLETA-1024x760.png', descricao: 'Logo MissMake' }, 
            { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrALMD0x51LDhCgrewjpZLCUojVBHe22cigw&s', descricao: 'Logo SouBasica'},
            { src: "/images/dommani.jpg", descricao: 'Logo Dommani' },
            { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-5mrWk7N_OdgQB79YEDHhEojcYnLz3OHPA&s', descricao: 'Logo Construction Connection'}
            ]
        };
    }
};
</script>

<style>
    #card {
    display: flex;
    margin: auto;
    justify-content: center;
    font-size: 2rem;
}
#card img {
    width: 250px;
    margin: 10vh;
}
</style>