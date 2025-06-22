import React from 'react'
import Nav from 'app/components/nav'

export default function index() {
  return (
    <>
      {/*APPELLE DE LA NAV BARRE  */}
      <Nav/>

      {/* CONSTRUCTION DE LA PREMIERE SECTION (HERO-SECTION) */}
      <div className='flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row px-22 py-13 bg-gradient-to-t from-pink-700 to-red-500 flex gap-6'>
      <div>
        <img src="Images/hero.png" alt="" className='W-[600px] h-[600px]' />
      </div>
      <div>
        <div className='text-white pt-40'>
          <h1 className='font-bold text-4xl pb-5'>Découvrez Baziks APP,</h1>
          <h6 className='pb-5'>Le temple de la rumba congolaise</h6>
          <p>Toutes les nouveautés du moment dans les deux Congo. Les merveilles du <br />passé et des morceaux encore méconnus qui seront probablement les hits de <br />demain, le tout dans une seule et même application.</p>
        </div>
        <div>
        <img src="Images/herobuttun.png" alt="" className=''/>
        </div>
      </div>
      </div>
      {/* DEUXIEME SECTION */}
      <div className='flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row px-22 py-0 flex'>
      <div className='pt-5'>
        <h1 className='text-4xl text-black font-bold '>Grâce à l'appli Baziks,</h1>
        <p className='text-lg pt-5'>embarque tes sons préférés partout avec toi! <span className='text-red-500'>En savoir plus</span></p>
        <h1 className='text-4xl text-black font-bold pt-5' >Chaque semaine,</h1>
        <p className='text-lg pt-5'>nous proposons des nouveaux titres à découvrir!</p>
      </div>
      <div >
        <img src="Images/ecouteurs.png" alt="" className=''/>
      </div>
    </div>
    {/* TROISIEME SECTION */}
    <div className='flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row px-22 py-50'style={{
    backgroundImage: "url('Images/man.jpg')"}}>

        <h1 className='text-3xl text-white font-bold pb-5'>Pourquoi Baziks ?</h1>
      <div className='flex gap-10'>
        <div>
          <img src="Images/ecouteursbis.png" alt="" className='' />
        </div>
        <div>
          <h1 className='font-bold text-white' >Obtiens plus de liberté…</h1>
           <p className=' text-white'>N’attend plus qu’on te propose ton disque <br /> préféré,<br />
             écoute-le comme tu veux… Et laisse toi vibrer !</p>
        </div>
      </div>

      <div className='flex gap-15 pt-10'>
        <div>
          <img src="Images/thermo.png" alt="" className='' />
        </div>
        <div>
          <h1 className='font-bold text-white'>Donne du rythme et de la chaleur à ta <br /> journée…</h1>
           <p className=' text-white'>Des journées longues, des moments de <br /> concentration,<br />de stress, de solitude, de détente, ou pendant le <br />
            sport... Baziks t’accompagne partout !</p>
        </div>
      </div>

      <div className='flex gap-5 pt-10'>
        <div>
          <img src="Images/mains.png" alt="" className='' />
        </div>
        <div>
          <h1 className='font-bold text-white' >Soutien les artistes locaux…</h1>
           <p className=' text-white'>Consomme légalement leurs œuvres pour <br /> promouvoir <br />
            l’industrie musicale africaine !</p>
        </div>
      </div>

      <div className='flex gap-5 pt-10'>
        <div>
          <img src="Images/men.png" alt="" className='' />
        </div>
        <div>
          <h1 className='font-bold text-white'>Contribue en retour à aider la <br /> communauté…</h1>
           <p className=' text-white'>Avec ton abonnement, tu participe automatique <br /> au <br />
            programme Baziks4Dev.</p>
        </div>
      </div>
    </div>

    {/* QUATRIEME SECTION */}
    <div className='flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row px-22 py-5 bg-orange-600 flex gap-20'>
      <div className='pb-20'><img src="Images/phone.png" alt="" className='w-[400px] h-[500px]'/></div>
      <div className='text-white'>
        <h1 className='text-2xl font-bold'>Bienvenu dans un autre univers…</h1>
        <p className='pt-5'>Un univers hors du commun ou les pepites sonors longtemps negligées constituent plus <br /> que jamais une valeur inestimable pour toute une nation. Oubliez le cobalt, l'or, le coltan,<br /> le diament...</p>
        <p className='pt-5'>La veritable richesse et là, l'âme de tout le peuple !</p>
        <p className='pt-5'>Baziks, c’est ce nouvel univers qui regorge pour vous des pépites sonores issues de <br /> toutes les provinces d’une nation mosaïque !</p>
        <p className='pt-5'>Un univers rythmé, coloré, et sans cesse en mouvement centré sur la rumba congolaise !</p>
        <p className='pt-5'>Un son… et la rue est à vos pieds !</p>
        <p className='pt-5'>Un style… et le monde entier se met à danser sur les battements de vos téléphones grâce <br /> à une ambitieuse application !</p>
        <p className='pt-5'>L’énergie, le rythme de tout un continent depuis le cœur de l’Afrique sont désormais <br /> accessible au bout de vos doigts !</p>
        <p className='pt-5'>Baziks, l’unique application de streaming 100% musique locale !</p>
      </div>
    </div>

      {/* CINQUIEME SECTION */}
    <div className='flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row px-22 py-10 flex gap-40 bg-black'>
      <div>
        <img src="Images/afrique.png" alt="" className='' />
      </div>
        <div className='text-white'>
          <h1 className='font-bold'>Des genres musicaux variés, reflet de la <br />
             diversité des deux Congo</h1>
          <p>Baziks propose une variété de titres, répartis selon les <br />
          genres les plus prisés dans les deux Congo.</p>
        
          <div className='flex gap-5 pt-10'>
          <div>
            <img src="Images/puces.png" alt="" className='' />
          </div>
          <div>
            <ul>
              <li>Hiphop/rnb</li>
              <li className='pt-5'>Ndombolo</li>
              <li className='pt-5'>Ndombolo</li>
              <li className='pt-5'>Gospel</li>
              <li className='pt-5'>Afro-Urban</li>
              <li className='pt-5'>Musique folklorique</li>
              <li className='pt-5'>Afro-Fusion</li>
            </ul>
            </div>
          </div>
          </div>
          
      </div>
      
      {/*SIXIEMME SECTION  */}

        {/* PREMIERE PARTIE */}

      <div className='flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row px-22 py-20 flex gap-20 bg-gray-200'>
        <div>
          <h1 className='text-pink-700 text-2xl font-bold'>Des offres exceptionnelles !</h1>
            <p className='text-xl pb-10'>Laisses la musique congolaise s’exprimer en toi en <br />
                #ILLIMITEETNONSTOP avec un plan tarifaire unique !</p>
                <div className='border border-blue-800 rounded w-130 h-80  bg-blue-400 px-5 py-5'>
                  <h1 className='text-2xl text-white font-bold'>Ya Ofélé</h1>
                  <div className='flex gap-5 pt-5'>
                    <div>
                      <img src="Images/lignebleu.png" alt="" className='' />
                    </div>
                    <div>
                      <ul className='text-white'>
                        <li>Music non Stop</li>
                        <li className='pt-4 gap-5'>Playlist illimitée</li>
                        <li className='pt-4 gap-5'>Publicité</li>
                        <li className='pt-4 gap-5'>Pérsonalisation</li>
                      </ul>
                    </div>
                    <div>
                         <img src="Images/zero$.png" alt="" className='h-[25px]'/>
                      </div>
                    </div>
                </div>
        </div>
              {/* DEUXIEME PARTIE */}
              <div>
          <h1 className='text-pink-700 text-2xl font-bold'>Choisir le plan le plus adapté</h1>
            <p className='text-lg pb-3'>Des packages abonnement d’écoute de musique <br /> #ILLIMITEETNONSTOP (Abonnement accessible uniquement via <br />
                          nos Pass Miziki dans nos points de vente).</p>
                <div className='border border-blue-800 rounded w-130 h-80 bg-pink-600 px-5 py-5'>
                  <h1 className='text-lg text-white font-bold'>Ya</h1>
                  <h1 className='text-lg text-white fnt-bold'>VIP</h1>
                  <div className='flex gap-5 pt-2'>
                    <div>
                      <img src="Images/lignerose.png" alt="" className='' />
                    </div>
                    <div>
                      <ul className='text-white'>
                        <li className='pb-1'>Music non Stop</li>
                        <li className='pt-3 gap-5'>Playlist illimitée</li>
                        <li className='pt-4 gap-5'>Non Pub</li>
                        <li className='pt-4 gap-5'>Pérsonalisation</li>
                        <li className='pt-4 gap-5'>Des bonus</li>
                        <li className='pt-4 gap-5'>Des récompenses</li>
                      </ul>
                    </div>
                    <div className='text-white'>
                         <h1 className='font-bold'>$1,49</h1>
                         <p>pour 1 mois d'abonnement + 10 <br />
                           jours gratuits offerts</p>
                         <h1 className='font-bold'>$14,99</h1>
                         <p>pour 12 mois d'abonnement + 1 <br />
                           mois gratuit offert</p>
                      </div>
                    </div>
                </div>
        </div>
      </div>

      {/* SEPTIEMME SECTION */}
      <div className='flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row px-22 py-15 flex gap-40'>
          <div>
              <img src="Images/baziks-pass2.png" alt="" className='rotate-129'/>
              <img src="Images/baziks-pass3.png" alt="" className='rotate-110'/>
              <img src="Images/baziks-pass1.png" alt="" className='rotate-100'/>
          </div>
          <div>
              <h1 className='text-red-600 text-3xl font-bold pb-5'>Qu’est-ce qu’est le Pass Miziki ?</h1>
              <h6 className='font-bold pb-5'>Le Pass Miziki est une innovation Baziks en Partenariat avec MaxiCash !</h6>
              <p>Le « Pass Miziki », c’est la carte qui te permet d’accéder à l’offre VIP de Baziks.</p>
              <h6 className='font-bold pt-5'>Comment ca marche ?</h6>
              <p className='pt-5'>Après avoir acheté ton « Pass Miziki » chez nos revendeurs. Gratte sur la partie cachée,<br /> récupère le code pin, puis tape le dans le menu abonnement <br />
                 sur Baziks. Et profite à fond de ton accès VIP. Puis localise le point de vente le plus proche :</p>
              <h6 className='pt-5 font-bold'>Quel avantage ?</h6>
              <p className='pt-5'>Véritable outil de monétisation, le « Pass Miziki » te permet d’accéder librement à un max <br />de musique dans Baziks quelque soit ton opérateur mobile. <br />
                Tu peux écouter ta musique sans publicité. Ou même offrir un « Pass Miziki » en cadeau à <br /> des proches. Il en existe pour 0,10 cents, de 0,70 cents et 2,99$, le tout avec des bonus.</p>
              <h6 className='pt-5 font-bold'>Comment obtenir ton « Pass Miziki » ?</h6>
              <p className='pt-5'>Il suffit de contacter notre service client à <a href='commercial@baziks-pulse.com'>commercial@baziks-pulse.com</a>  ou par WhatsApp 0904088973.</p>
    
          </div>
      </div>
      {/* HUITIEMME SECTION */}
      <div className='flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row justify-center  px-22 py-20 bg-linear-to-t from- bg-[#470927] to-black '>
      <div className='text-center '>
        <h1 className='text-3xl text-white font-bold'>Obtenir un Pass Miziki</h1> 
        <h1 className='text-white '>Pour obtenir ton Pass Miziki c’est très facile, il suffit de choisir celui qui convient à ton budget.</h1> 
        <h1 className='text-white '>Puis localise le point de vente le plus proche :</h1> 
        
      <div className='flex gap-5 justify-center items-center'>
        <img src="Images/ballers.png" alt="" className=''/>
        <img src="Images/surprise-tropicale.png" alt="" className=''/>
      </div>
      <h1 className='text-white'>Puis localise le point de vente le plus proche :</h1> 
      </div>
      </div>
      {/*  NEUVIEMME SECTION */}
      <div className='flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row bg-gradient-to-b from-red-600 to bg-pink-400 flex gap-5'>
         <div className='text-white py-4 sm:text-center sm:w-full px-4 md:text-right md:w-1/2 md:px-0 '> 
         <h1 className='font-bold text-3xl text-center'>À propos</h1> 
         <p className='text-center'>Baziks, c’est l’application de streaming musical qui <br />
            Baziks, c’est l’application de streaming musical qui <br />
            permet d’écouter en exclusivité le meilleur de la <br />
            musique congolaise gratuitement ou par abonnement,<br />
            avec un accès instantané à des <br />
            centaines de milliers de titres disponibles partout <br />
            et à tout moment. <br />
            Baziks App fait partie de Baziks Partners SAS, l’un <br />
            des précurseurs du streaming musical en Afrique. <br />
            Baziks App a été lancée fin juillet 2016. Sa société <br />
            mère, Baziks Partners, fondée par Baya Ciamala <br />
            est opérationnelle depuis Janvier 2019, avec des <br />
            équipes à Kinshasa et Lubumbashi en République <br />
            Démocratique du Congo, à Libreville au Gabon, à <br />
            Johannesburg en Afrique du Sud et des ingénieurs <br />
            congolais basés notamment à Newcastle <br />
            et Londres au Royaume-Uni. <br />
            Souvent surnommé le "Deezer" africain par la <br />
            presse du continent, Baziks est l’un des principaux <br />
            services de musique en ligne africain au monde.</p> 
         </div>
              <div className='w-1/2 mx-auto'>
                <img src="Images/aproposnoir.jpeg" alt="" className='h-full '/>
              </div>
      </div>
      {/* DIXIEMME SECTION */}
      <div className='flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row'>
        <div className='z-40 ...'>
          <img src="Images/youngman.jpeg" alt="" className='h-full w-full'/>
        </div>
      </div>
      {/* ONZIEMME SECTION */}
      <div className='flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row px-22 py-5'>
            <img src="Images/baziks.png" alt="" className=''/>
      </div>

        {/* DOUZIEME SECTION */}
        <div className='flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row'>
              <div className='relative'>
                <img src="Images/youngwoman.jpeg" alt="" className='h-full w-full'/>
                <div className='absolute inset-0 flex justify-center'>
                  <div>
                    <h1 className='text-white text-4xl font-bold px-25 py-10'> Notre ADN : <br />La proximité</h1>
                    <p className='text-white px-22'>
                      La proximité pour Baziks, c’est plus qu’un simple ciblage géographique !
                      Au-delà du catalogue 100% musique africaine, la notion de proximité  trouve son sens <br />
                      dans la complicité développée entre nous et notre audience. Et en permettant aux artistes <br />
                      de se connecter à leurs fans afin d’interagir ensemble. <br /> Car nous croyons  fortement que ces 
                      sont les créateurs qui font l'industrie de la musique. <br /> Nous voulons garantir  le pluralisme et la diversité de contenus avec des offres accessibles, 
                      tout en se constituant en indicateur d’une industrie musicale dynamique,  indépendante <br />
                      et viable sur l’ensemble du continent africain. Véritable alternative aux <br /> plateformes mainstream, Baziks App se veut être une vitrine pour 
                      les artistes africains, garantissant une rémunération convenable et en  les impliquant en <br />
                      tant qu’acteur de développement pour les communautés. Nous sommes définitivement tourné vers une valorisation différente de nos musiques. Nous sommes 100% local !
                    </p>
                    </div>
                  <div>
                    <p className='text-white py-10 px-22'>
                      Nous sommes une Start-Up en pleine croissance dont l’ambition
                      est de proposer une expérience musicale mobile, connectée et
                      lifestyle, tout en étant ancré sur les questions d’intérêt du marché
                      local de la musique. <br />
                      Jeunes, motivés et dynamique, nous sommes également attaché de
                      façon forte dans l’atteinte objectifs de développement durable
                      comme l’éducation et la lutte contre la pauvreté via les
                      programmes #Baziks4Dev et #Baziks4Good. <br />
                    </p>
                    </div>
                </div>
              </div>
        </div>

        {/* TREIZIEMME SECTION */}
        <div className='flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row px-22 py-20'>
              <h1 className='text-4xl font-bold text-black text-center'>Il nous font confiance</h1>
              <img src="Images/icones.png" alt="" className='pt-10'/>
        </div>

        {/* QUARTOZIEMME SECTION */}
        <div className='flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row px-22 py-20 bg-black'>
              <div className='flex gap-20 pb-20'>
                <div><img src="/Images/logo.png" alt="" className='' /></div>
                <div className='text-white'>
                  <p>848 Avenue Haut Congo, Gombe <br />Kinshasa, RDC <br /> info@baziks-pulse.com</p>
                </div>
                <div className='text-white'>
                  <p>A propos <br />Presse <br /> Proposer votre contenu <br />Nous contacter</p>
                </div>
                <div className='text-white'>
                  <p>Blog <br />Conditions d'utilisation <br />Politique de confidentialité</p>
                </div>
                </div>
                  <div className='border'></div>
                  <div className='flex gap-150 pt-5'>
                  <div className='text-white '>
                    <p><span className='text-red-600'>Copyright © 2022. All Rights Reserved by Baziks</span><br />DEVELOPED BY KASAÏ CONNECT</p>
                  </div>
                  <div className='flex gap-5'>
                    <img src="Images/twiter.svg" alt="" className='h-[15px]' />
                    <img src="Images/facebook_icon.svg" alt="" className='h-[15px]' />
                    <img src="Images/instagram.svg" alt="" className='h-[15px]' />
                    <img src="Images/LINKEDIN.svg" alt="" className='h-[15px]' />
                  </div>
                  </div>
        </div>
    </>
  )
}
