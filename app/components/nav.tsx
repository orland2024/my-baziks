import React from 'react'

export default function nav() {
  return (
    <>
       {/* Section Navigation(NAV BARRE)  */}
   <nav className="bg-red-500 flex justify-between px-36">
    <img className="w-[150px]" src="./image/logo.svg" alt=""/>
    <ul className="hidden  md:flex flex gap-3 pt-3 text-white font-bold">
        <li><a href="index.html">Accueil</a></li>
        <li><a href="leconcept.html">Le Concept</a></li>
        <li><a href="baziksapp.html">Baziks App</a></li>
        <li><a href="sabonner.html">S'abonner</a></li>
        <li><a href="lesoffres.html">Les offres</a></li>
        <li><a href="obtenirson.html">Obtenir son pass</a></li>
        <li><a href="apropos.html">A propos</a></li>
    </ul>
   </nav>
    </>
  )
}
