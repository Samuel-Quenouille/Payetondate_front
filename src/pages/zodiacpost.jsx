import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sagittarius from '../assets/img/sagittarius.png'
import Capricorn from '../assets/img/capricorn.png'
import Aquarius from '../assets/img/aquarius.png'
import Pisces from '../assets/img/pisces.png'

export default function Zodiacpost() {
  return (
    <div>
      <h1 className='title_post'>Où emmener son date selon son signe astro ?</h1>
      <p className='content_post p-5'>Céline a accepté votre rendez-vous. La date et l’heure sont fixées, youpi ! Oui, mais pour aller où ?! Ah, qu’est-ce que vous feriez sans nous ? Comme on est sympas, on vous propose cette semaine, quelques idées de lieux selon le signe astro de votre date.</p>
      <br></br>
      <br></br>
      <img src={Sagittarius} alt="Sagittarius" className="zodiac-icon" style={{ width: '8%', position: 'absolute', marginLeft: '50px', marginTop: '-20px' }} />
      <h3 className='subtitle_post px-5'>Votre date est Sagittaire ?</h3>
      <p className='content_post px-5'>Le Sagittaire est chaleureux et joyeux. Toutefois, il peut vite se montrer impatient. Il faut donc un date qui pulse ! Montrez-lui en de toutes les couleurs en l'emmenant vous envoyer en l'air dans un simulateur de chute libre avec Ifly (catégorie "Insolite"). Enfin, pour pimenter ce date, vous pouvez aller manger au Kodawari Ramen (date "On sort le grand jeu").
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>le Sagittaire aime rendre service, n'hésitez pas à lui faire le coup du "Ô ciel ! Je défaille !" pour lui faire plaisir.</p>
    <br></br>
    <br></br>
    <br></br>
      <h3 className='subtitle_post px-5'>Votre date est Capricorne ?</h3>
      <p className='content_post px-5'>Le Capricorne est sérieux, réfléchi, introverti et tranquille. Pour suivre son flow, emmenez-le boire un cocktail au Rosalie pour qu'il profite de l'ambiance chill du bar (rubrique "Histoire de") pour prolonger votre date, proposez-lui d'aller manger au Tripletta Belleville (rubrique "On sort le grand jeu") et terminer votre soirée en promenade au Butte Chaumont (date "gratuit c'est encore mieux").
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>proposez-lui un plan de vie sur 20 ans minimum, vous êtes sûr(e) de remporter son coeur.</p>
    <br></br>
    <br></br>
    <br></br>
    <h3 className='subtitle_post px-5'>Votre date est Verseau ?</h3>
      <p className='content_post px-5'>Le Verseau a tendance à fuir toute forme d'attachement. Il déteste la routine et l'amour pour lui doit être un véritable feu d'artifice. Sa plus grande peur ? L'ennui ! Alors pour le faire frissoner, emmenez-le visiter les Catacombes (date "Insolite") et continuer votre date autour d'un cocktail sur le rooftop du Perchoir (date "Histoire de"). Il/Elle est toujours là ? Parfait, mettez-lui des étoiles dans les yeux en allant manger au Stellart (date "On sort le grand jeu").
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>si votre Verseau semble s'ennuyer, lancez lui un défi ! Il va A-DO-RER ! Par contre, à vous de trouver le défi en question, on va pas dater à votre place non plus :) 
      </p>
    <br></br>
    <br></br>
    <br></br>
    <h3 className='subtitle_post px-5'>Votre date est Poissons ?</h3>
      <p className='content_post px-5'>Le Poissons est LE grand romantique du zodiaque. Rêveur, fleur bleue et créatif, une multitude d'activité devraient ravir votre date Poissons : vous pouvez lui proposer de la peinture dans le noir au Paint Me up (date "Insolite") et enchaîner avec un dîner à la Grande Cascade (date "On sort le grand jeu) pour le faire rêver dans un cadre romantique.
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>parlez lui de vos tracas quotidien, il se fera un plaisir de vous écouter et vous réconforter (n'hésitez pas à aller voir notre rubrique "spot à bisou(s)" pour un baiser féérique après l'avoir fait craquer ;) ). 
      </p>
    <br></br>
    <br></br>
    <br></br>
    </div>
  );
}