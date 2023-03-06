import React from "react";

import Section from '../components/Section';
import ListItem from '../components/ListItem';


const gamesListData = [

    { url:"https://www.twitch.tv/directory/game/League%20of%20Legends", 
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg"  ,
    alt:"Imagem do jogo League of Legends" ,
    
    },
    
    {
    url:"https://www.twitch.tv/directory/game/VALORANT",
        imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
         alt:"Imagem do jogo Valorant",
    
    },
    
    
    {
    url:"https://www.twitch.tv/directory/game/Minecraft",
        imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg" ,
        alt:"Imagem do jogo Minecraft",
    
    },
    
    
    {
    url:"https://www.twitch.tv/directory/game/Teamfight%20Tactics",
        imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
         alt:"Imagem do jogo TFT",
    
    },
    {
    url:"https://www.twitch.tv/directory/game/FIFA%2023",
        imageUrl:"https://www.imagemhost.com.br/images/2023/03/05/FIFA.jpg",
         alt:"Imagem do jogo Fifa",
    
    },
    {
    url:"https://www.twitch.tv/directory/game/Grand%20Theft%20Auto%20V",
        imageUrl:"https://www.imagemhost.com.br/images/2023/03/05/GTA.jpg",
         alt:"Imagem do jogo GTA",
    
    },
    ]
    
    const chanelListData =[
    
    
                              
                              {
                              url:"https://www.twitch.tv/maykbrito",
                                  imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png" ,
                                  alt:"Imagem de Mayk Brito",
                              
    },
                          
    {
                              
                              url:"https://www.twitch.tv/gaules",
                                  imageUrl: "https://www.imagemhost.com.br/images/2023/03/04/Gaules536647331b29dd12.png" ,
                                  alt:"Imagem do Gaules",
    },
                         
                          
                              {
                              
                              url:"https://www.twitch.tv/cellbit",
                                  imageUrl: "https://www.imagemhost.com.br/images/2023/03/04/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-70x70ce8bff04a3b556d0.png", 
                                  alt:"Imagemd de Cellbit",
                              
                              },
    ]
    
    
    const socialListData = [
    
                             {
                              
                              url:"https://www.twitch.tv/dgcarioca",
                              imageUrl:"/assets/twitch.svg",                         
                              alt:"Canal do Twitch",
                             },
    
                          
                             {
                              
                              url:"https://twitter.com/douglasnil",
                              imageUrl:"/assets/twitter.svg",                         
                              alt:"Canal do twitter",
                             },
    
                          {
                             
                              
                              url:"https://www.instagram.com/douglas_021/",
                              imageUrl:"/assets/instagram.svg",                         
                              alt:"Canal do Instagram",
                          },
                         
    
                          
                             {
                              
                              url:"https://www.youtube.com/channel/UC1r8sTQE0ALzWqy8-H1Noew",
                              imageUrl:"/assets/youtube.svg",                         
                              alt:"Canal do Twitch",
                             
                             },
    ]

const Home = () => {

    return (
        <div>


<main>
  <Section title="Meus Jogos" 
  subtitle="Os games que eu mais curto jogar!"
  className ="games-list"
  >

    {


  gamesListData.map(function(item) {
return(
<ListItem
url={item.url}
imageUrl={item.imageUrl}
alt={item.alt}
/>
)

})

    }


</Section>

    <Section title="Canais e Streamers" 
  subtitle="Lista de canais e transmissões que eu não perco"
  className="channel-list"
  >
{
  chanelListData.map(function(item) {

return(

  <ListItem
  url={item.url}
  imageUrl={item.imageUrl}
  alt={item.alt}/>


)

  })

}




</Section>


    <Section title="Minhas redes" 
  subtitle="Se conecte comigo agora mesmo"
  className="socials-list"
  >

{

socialListData.map(function(item){

  return(

    <ListItem
    url={item.url}
    imageUrl={item.imageUrl}
    alt={item.alt}
    />
  );

})

}

</Section>
</main>
          </div>
    );
}

export default Home;