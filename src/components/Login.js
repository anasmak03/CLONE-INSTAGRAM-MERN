import React, { Component } from 'react';
import './Login.css';
import playstore from '../images/play-store.png';
import appstore from '../images/app-store.png';
import ins from '../images/insta.PNG';
import app from '../images/app.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import auth from '../images/authentication.png';

function Login () {
   
        return (
            <div>
                <div className="parent1">
                <div className="box11">
                <img src={auth} alt="authentication"/>
                </div>
                <div className='box22'>
                <div className='form1'>
                        <form>
                            <img src={ins} className="insta"/>
                            <input  type='text' placeholder="numéro de mobile or email"/><br />
                            <input type='password' placeholder="mot de passe"/><br />
                            <button type='submit'>Login</button><br />
                            <a href='#' className='aa'>Login with facebook</a><br />
                            <a className='forget'>forgot your passwor</a>

                        </form>
                        
                    </div>
                    <div className='compte'>
                            <span>D'ont have an account ? <a href='./Register.js'>Sign up</a></span>
                         </div>
                         <div className='download'>
                             <span>Get the app.</span>
                         </div>
                         <div className='store'>
                             <ul>
                             <li><img src={app} alt="app-store"/></li>
                                 <li><img src={playstore} alt="play-store"/></li>
                                
                                 
                             </ul>
                         </div>

                </div>
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
        );
    
}

export default Login;