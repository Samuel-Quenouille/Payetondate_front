import React from 'react';
import '../index.css';

export default function Letterlove() {

  return (
    <>

    <h3 className='top-title'>Vos lettres d'amour</h3>

        <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
        <div className="card h-100">
        <div className="card-body">
        <p className="card-loveletter">"Quand j'ai décidé de planifier un date avec Laura, j'ai cherché quelque chose de romantique. La catégorie 'spots à bisous' sur 'Paye Ton Date' m'a tout de suite sauté aux yeux. J'ai réservé une journée au Parc des Amoureux, et c'était absolument parfait ! Nous avons pique-niqué près du lac, marché main dans la main, et avons partagé notre premier bisou sous les arbres."</p>
        <p className="card-firstname">Emma, 25 ans</p>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card h-100">
        <div className="card-body">
            <p className="card-loveletter">"J'ai toujours été un grand fan de magie, alors quand j'ai découvert le site 'Paye Ton Date' et vu la catégorie 'insolite', j'ai été intriguée. J'ai trouvé un lieu parfait pour mon date avec Louise. Nous avons choisi le Musée de la Magie, et ce fut incroyable ! C'était un endroit vraiment unique, et cela a rendu notre soirée spéciale. De quoi repartir avec des étoiles plein les yeux."</p>
            <h5 className="card-firstname">Ismael, 37 ans</h5>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card h-100">
        <div className="card-body">
            <p className="card-loveletter">"Après quelques échanges sur un site de rencontre, nous voulions échanger un verre avec Sarah, “histoire de” ;), avant de sauter le pas. Nous sommes tombés sous le charme des faïences de l’As de Trèfle, mon conjoint et moi. L’ambiance était convivial, nous avons passé un chouette moment tous les 3."</p>
            <h5 className="card-firstname">Carla, 28 ans & Bruno 32 ans</h5>
        </div>
        </div>
    </div>
    </div>
    </>
  )
} 