import React from "react";
import Nav from "../components/nav";

export default function index() {
  return (
    <>
      <Nav />
      <div className="flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row sm:gap-2 flex py-20 px-36 gap-5 bg-gradient-to-t from-pink-500 to-red-600">
        <div>
          <img className="h-[550px] " src="./public/images/hero.png" alt="" />
        </div>
        <div className="pt-36 text-white">
          <h1>
            {" "}
            <span className="font-bold text-4xl">Découvrez Baziks APP, </span>
            <br />
            <br />{" "}
            <span className="text-xl text-white">
              Le temple de la rumba congolaise
            </span>
            <br />
            <br />
          </h1>
          <p className="">
            Toutes les nouveautés du moment dans les deux Congo. Les merveilles
            du <br /> passé et des morceaux encore méconnus qui seront
            probablement les hits <br /> de demain, le tout dans une seule et
            même application. <br />
          </p>
          <br />
          <img className="h-16" src="./public/images/herobuttun.png" alt="" />
        </div>
      </div>

      <div className="">
        <h1 className="font-bold text-4xl">Grâce à l'appli Baziks,</h1>
        <p className="font-bold">
          embarque tes sons préférés partout avec toi!{" "}
          <span>En savoir plus</span>
        </p>
        <br />
        <br />
        <h1 className="font-bold text-4xl">Chaque semaine,</h1>
        <p className="font-bold">
          nous proposons des nouveaux titres à découvrir!
        </p>
      </div>
      <div className="">
        <img className="" src="./image/headset.png" alt="" />
      </div>
      <h1 className="font-bold text-4xl py-5">Pourquoi Baziks ?</h1>
      <div className-="">
        <div className="flex gap-5 ">
          <div>
            <img src="./image/heardset.png" alt="" />
          </div>
          <div>
            <h1 className="pb-3 font-bold text-xl">Obtiens plus de liberté…</h1>
            <p className="text-lg">
              N’attend plus qu’on te propose ton disque préféré,
              <br /> écoute-le comme tu veux… Et laisse toi vibrer ! <br />{" "}
              <br />
            </p>
          </div>
        </div>
        <div className="flex gap-5 py-5">
          <div>
            <img src="./image/thermometer.png" alt="" />
          </div>
          <div>
            <h1 className="pb-3 font-bold text-xl">
              Donne du rythme et de la chaleur à ta journée...
            </h1>
            <p className="text-lg">
              Des journées longues, des moments de concentration,
              <br /> de stress, de solitude, de détente, ou pendant le <br />{" "}
              sport... Baziks t’accompagne partout ! <br />
              <br />
            </p>
          </div>
        </div>
        <div className="flex gap-5 py-5">
          <div>
            <img src="./image/help_poster.png" alt="" />
          </div>
          <div>
            <h1 className="pb-3 font-bold text-xl">
              Soutien les artistes locaux…
            </h1>
            <p className="text-lg">
              Consomme légalement leurs œuvres pour promouvoir <br />{" "}
              l’industrie musicale africaine ! <br /> <br />
            </p>
          </div>
        </div>
        <div className="flex gap-5 py-5">
          <div>
            <img src="./image/groupe_44_poster.png" alt="" />
          </div>
          <div>
            <h1 className="pb-3 font-bold text-xl ">
              Contribue en retour à aider la communauté…
            </h1>
            <p className="text-lg">
              Avec ton abonnement, tu participe automatique au <br /> programme
              Baziks4Dev.
            </p>
          </div>
        </div>
      </div>
      <div className="px-36 py-16 bg-red-500">
        <div className="flex gap-7   flex-col-reverse flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row ">
          <div>
            <img className="h-[500px] w-[350px]" src="./image/3.png" alt="" />
          </div>
          <div className="text-white py-5">
            <h1 className="text-4xl font-bold">
              Bienvenu dans un autre univer: c'est mon premier site en ligne
            </h1>
            <br />
            <p className="text-lg">
              Un univers hors du commun ou les pepites sonors longtemps
              negligées constituent plus que <br /> jamais une valeur
              inestimable pour toute une nation. Oubliez le cobalt, l'or, le
              coltan, le diamant...
            </p>{" "}
            <br />
            <p className="text-lg">
              La veritable richesse et là, l'âme de tout le peuple !
            </p>{" "}
            <br />
            <p className="text-lg">
              Baziks, c’est ce nouvel univers qui regorge pour vous des pépites
              sonores issues de toutes <br /> les provinces d’une nation
              mosaïque !
            </p>{" "}
            <br />
            <p className="text-lg">
              Un univers rythmé, coloré, et sans cesse en mouvement centré sur
              la rumba congolaise!{" "}
            </p>
            <p className="text-lg">Un son… et la rue est à vos pieds !</p>{" "}
            <br />
            <p className="text-lg">
              Un style… et le monde entier se met à danser sur les battements de
              vos téléphones grâce à <br />
              une ambitieuse application !
            </p>
            <p className="text-lg">
              L’énergie, le rythme de tout un continent depuis le cœur de
              l’Afrique sont désormais <br /> accessible au bout de vos doigts !
            </p>{" "}
            <br />
            <p className="text-lg">
              Baziks, l’unique application de streaming 100% musique locale !
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src="./image/groupe_168.png" alt="" />
          </div>
          <div>
            <h1>
              Des genres musicaux variés, reflet de la diversité des deux Congo
            </h1>
            <p>
              Baziks propose une variété de titres, répartis selon les genres
              les plus prisés dans les deux Congo.
            </p>
          </div>
          <div>
            <div className="check-box">
              <img src="./image/" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
