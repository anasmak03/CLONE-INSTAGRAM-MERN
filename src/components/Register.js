import React, { Component } from 'react';
import auth from '../images/authentication.png';
import './Login.css';
import playstore from '../images/play-store.png';
import appstore from '../images/app-store.png';
import ins from '../images/insta.PNG';
import app from '../images/app.png';
import FacebookIcon from '@mui/icons-material/Facebook';

function  Register(){
        return (
            <div>
                <div className="parent">
                    <div className='form'>
                        <form>
                            <img src={ins} className="insta"/>
                            <p className='inscrivez'>Inscrivez-vous pour voir les photos et vidéos de vos amis.</p>
                            <a href='#' className='a'><FacebookIcon /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; se connecter avec facebook</a><br />
                            <input  type='text' placeholder="numéro de mobile or email"/><br />
                            <input  type='text' placeholder="nom complet"/><br />
                            <input type='text' placeholder="nom d'utilisateur"/><br />
                            <input type='password' placeholder="mot de passe"/><br />
                            <button type='submit'>inscription</button><br />
                            <span className="infos">En vous inscrivant, vous acceptez nos Conditions générales, notre Politique d’utilisation des données et notre Politique d’utilisation des cookies.</span>
                        </form>
                        
                    </div>
                    <div className='compte'>
                            <span>Vous avez un compte ? <a href='#'>Connectez-vous</a></span>
                         </div>
                         <div className='download'>
                             <span>Téléchargez l’application.</span>
                         </div>

                         <div className='store'>
                             <ul>
                             <li><img src={app} alt="app-store"/></li>
                                 <li><img src={playstore} alt="play-store"/></li>
                                
                                 
                             </ul>
                         </div>

                         <div className='list'>
                             <ul className='ul'>
                                 <li>Meta</li>
                                 <li>À propos</li>
                                 <li>Blog</li>
                                 <li>Emplois</li>
                                 <li>Aide</li>
                                 <li>API</li>
                                 <li>Confidentialité</li>
                                <li>Conditions</li> 
                                <li>Comptes principaux</li>
                                <li>Hashtags</li>
                                <li>Lieux</li>
                                <li>instagram Lite</li> <br />
                                <li>Francais</li>
                                <li>© 2022 Instagram par Meta</li>
                             </ul>
                         </div>
                </div>
            </div>
        );
    
}

export default Register;