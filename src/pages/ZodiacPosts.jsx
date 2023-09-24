import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sagittarius from '../assets/img/sagittarius.png'
import Capricorn from '../assets/img/capricorn.png'
import Aquarius from '../assets/img/aquarius.png'
import Pisces from '../assets/img/pisces.png'

export default function ZodiacPosts() {
  return (
    <div>
      <h1 className='title_post'>Où emmener son date selon son signe astro ?</h1>
      <p className='content_post p-5'>Céline a accepté votre rendez-vous. La date et l’heure sont fixées, youpi ! Oui, mais pour aller où ?! Ah, qu’est-ce que vous feriez sans nous ? Comme on est sympas, on vous propose cette semaine, quelques idées de lieux selon le signe astro de votre date.</p>
    <br></br>
    <br></br>
      <h3 className='subtitle_post px-5'>Votre date est Bélier ?</h3>
      <p className='content_post px-5'>Ambitieux et courageux, le Bélier n’a pas le time et surtout il aime l’action ! Pour un date ultra vitaminé, commencer par une session dans l’une des nombreuses salles d’escalade Arkose disponibles dans la ville (date « Insolite ») ou si la météo est avec vous, rendez-vous au Parc de Vincennes pour une séance d’accrobranche (date « Insolite »). Prolongez ce moment intense avec une (ou plusieurs) pause(s) cocktails au Cocktails POP (date « Histoire de »).
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>si vous n’avez pas froid aux yeux, challengez votre date Bélier et faites une course contre la montre pour votre activité sportive.</p>
    <br></br>
    <br></br>
    <br></br>
    <h3 className='subtitle_post px-5'>Votre date est Taureau ?</h3>
      <p className='content_post px-5'>Fiable et Stable, le Taureau aime le confort et les plaisirs simple comme l’art et la bonne nourriture. Alors pour lui faire plaisir, commencez par l’exposition « Life’s Beach » au Quai de la photo (date « gratuit c’est encore mieux ») et profiter d’un bon repas dans des fauteuils cocooning au Rigoletto (date « On sort le grand jeu »).
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>retenez bien ce programme ou celui que vous aurez choisi et répétez-le pour votre prochain date, votre date Taureau sera ravi de ce nouveau petit rituel.</p>
    <br></br>
    <br></br>
    <br></br>
    <h3 className='subtitle_post px-5'>Votre date est Gémeaux ?</h3>
      <p className='content_post px-5'>Cérébral et ouvert d’esprit, le Gémeaux est intuitif et aime découvrir de nouvelles choses. Pour le séduire, débutez votre date avec une session dans l’une des Quiz Room parisienne (date « Insolite ») et emmenez lui boire une potion… euh un cocktail au bar Potions & Co (date « Histoire de »). 
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>posez-lui une question dont vous êtes sûr(e) qu’il n’aura pas la réponse, vous êtes garanti qu’il vous proposera un deuxième date.</p>
    <br></br>
    <br></br>
    <br></br>
    <h3 className='subtitle_post px-5'>Votre date est Cancer ?</h3>
      <p className='content_post px-5'>Attentionné et sensible, le Cancer a besoin de se sentir en confiance pour montrer sa réelle joie de vivre. Vous pouvez l’emmener vous promener au Butte-Chaumont pour commencer tranquillement (date « gratuit c’est encore mieux ») et profiter ensuite du cadre intimiste du Yard Cave autour d’un (ou plusieurs) verre(s) de vin (date « Histoire de »).
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>n’oubliez pas de toquer avant de vouloir rentrer dans sa bulle au risque d’effrayer votre date Cancer.</p>
    <br></br>
    <br></br>
    <br></br>
    <h3 className='subtitle_post px-5'>Votre date est Lion ?</h3>
      <p className='content_post px-5'>Courageux et honnête, le Lion aime les belles choses et les personnalités franches. Rendez vous au Palais Royal pour une visite de la cour d’honneur et admirer les colonnes de Buren (date « gratuit c’est encore mieux ») et terminer votre soirée au Gabriel à la Réserve (date « On sort le grand jeu »).
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>n’hésitez pas à faire de beaux compliments à votre date Lion pour le caresser dans le sens du poil.</p>
    <br></br>
    <br></br>
    <br></br>
    <h3 className='subtitle_post px-5'>Votre date est Vierge ?</h3>
      <p className='content_post px-5'>Posé et calme, le Vierge n’est pas du genre à se dévoiler comme ça car de nature réservé et timide. Pour commencer en douceur, aller voir un film au Grand Rex (date « Insolite »), longer ensuite les Grands Boulevards et puis aller prendre un apéritif au Imago Resto (date « Histoire de »).
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>commencer en douceur avec une proximité d’un mètre. Pour les 80 cm, vous verrez au prochain date ;).</p>
    <br></br>
    <br></br>
    <br></br>
    <h3 className='subtitle_post px-5'>Votre date est Balance ?</h3>
      <p className='content_post px-5'>Courtois et Conciliant, le Balance aime la bonne humeur et ont eux-mêmes toujours le sourire. Pour égayer votre date commencer par une vue imprenable de Paris grâce au Ballon Generali au Parc André Citroën (rendez-vous « Insolite » et rendez-vous enfin au Karaoké des noctambules (rendez-vous « Insolite »).
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>envoyez la carte de l’endroit où vous voulez emmener votre date Balance la veille du JOUR-J. Il fera peut-être une insomnie mais vous n’aurez pas à attendre une éternité avant d’appeler le serveur pour commander.</p>
    <br></br>
    <br></br>
    <br></br>
    <h3 className='subtitle_post px-5'>Votre date est Scorpion ?</h3>
      <p className='content_post px-5'>Enigmatique et franc, le Scorpion sait s’affirmer et obtenir ce qu’il désire. Pourquoi directement attaquer avec un dîner à l’Alcazar (date « On sort le grand jeu ») et continuer cette soirée avec une promenade le long des quais de Seine (date « gratuit c’est encore mieux »).
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>dites-lui une vérité, mais pas salé au risque de se faire piquer. Dire le temps qu’il fait dehors est une très bonne idée.</p>
    <br></br>
    <br></br>
    <br></br>
      <img src={Sagittarius} alt="Sagittarius" className="zodiac-icon" style={{ width: '8%', position: 'absolute', marginRight: '-50px', marginTop: '-130px' }} />
      <h3 className='subtitle_post px-5'>Votre date est Sagittaire ?</h3>
      <p className='content_post px-5'>Le Sagittaire est chaleureux et joyeux. Toutefois, il peut vite se montrer impatient. Il faut donc un date qui pulse ! Montrez-lui en de toutes les couleurs en l'emmenant vous envoyer en l'air dans un simulateur de chute libre avec Ifly (catégorie "Insolite"). Enfin, pour pimenter ce date, vous pouvez aller manger au Kodawari Ramen (date "On sort le grand jeu").
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>le Sagittaire aime rendre service, n'hésitez pas à lui faire le coup du "Ô ciel ! Je défaille !" pour lui faire plaisir.</p>
    <br></br>
    <br></br>
    <br></br>
    <img src={Capricorn} alt="Sagittarius" className="zodiac-icon" style={{ width: '8%', position: 'absolute', marginRight: '-50px', marginTop: '-130px' }} />
      <h3 className='subtitle_post px-5'>Votre date est Capricorne ?</h3>
      <p className='content_post px-5'>Le Capricorne est sérieux, réfléchi, introverti et tranquille. Pour suivre son flow, emmenez-le boire un cocktail au Rosalie pour qu'il profite de l'ambiance chill du bar (rubrique "Histoire de") pour prolonger votre date, proposez-lui d'aller manger au Tripletta Belleville (rubrique "On sort le grand jeu") et terminer votre soirée en promenade au Butte Chaumont (date "gratuit c'est encore mieux").
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>proposez-lui un plan de vie sur 20 ans minimum, vous êtes sûr(e) de remporter son coeur.</p>
    <br></br>
    <br></br>
    <br></br>
    <img src={Aquarius} alt="Sagittarius" className="zodiac-icon" style={{ width: '8%', position: 'absolute', marginRight: '-50px', marginTop: '-130px' }} />
    <h3 className='subtitle_post px-5'>Votre date est Verseau ?</h3>
      <p className='content_post px-5'>Le Verseau a tendance à fuir toute forme d'attachement. Il déteste la routine et l'amour pour lui doit être un véritable feu d'artifice. Sa plus grande peur ? L'ennui ! Alors pour le faire frissoner, emmenez-le visiter les Catacombes (date "Insolite") et continuer votre date autour d'un cocktail sur le rooftop du Perchoir (date "Histoire de"). Il/Elle est toujours là ? Parfait, mettez-lui des étoiles dans les yeux en allant manger au Stellart (date "On sort le grand jeu").
      </p>
      <p className='content_post px-5'><strong>TIPS : </strong>si votre Verseau semble s'ennuyer, lancez lui un défi ! Il va A-DO-RER ! Par contre, à vous de trouver le défi en question, on va pas dater à votre place non plus :) 
      </p>
    <br></br>
    <br></br>
    <br></br>
    <img src={Pisces} alt="Sagittarius" className="zodiac-icon" style={{ width: '8%', position: 'absolute', marginRight: '-50px', marginTop: '-130px' }} />
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