import React from 'react';
import './mainPage.css';
import mainStartImage from '../assets/img/mainPage/girl_main.png';
import logo from '../assets/img/mainPage/logo.png';
import instagram from '../assets/img/socialIco/ico_soc_instagram.svg';
import telegram from '../assets/img/socialIco/ico_soc_telegram.svg';
import youtube from '../assets/img/socialIco/ico_soc_youtube.svg';
import patreon from '../assets/img/socialIco/ico_soc_patreon.svg';
import facebook from '../assets/img/socialIco/ico_soc_facebook.svg';
import photoMe from '../assets/img/mainPage/photo_ulia_circl.png';
import mail from '../assets/img/socialIco/ico_soc_mail.svg'
import speechBubble from'../assets/img/mainPage/speech_bubble.svg'

const MainPage = () => {
    return (
        <>
            <header className='header'>
                <section className='section'>
                    <div className='sectionContent'>
                        <div className='header__content'>
                            <div className='header__logo'><img className='header__logoImg' src={logo}/></div>
                            <div className='header__boxLink'>
                                <nav className='header__navigation'>
                                    <a className='header__navLink'>Free materials</a>
                                    <a className='header__navLink'>Lessons</a>
                                    <a className='header__navLink'>About</a>
                                    <a className='header__navLink'>Contact</a>
                                </nav>
                                <div className='header__social'>
                                    <div className='social'>
                                        <a className='social__link'>
                                            <img alt='' src={instagram} className='social__ico'/>
                                        </a>
                                        <a className='social__link'>
                                            <img alt='' src={telegram} className='social__ico'/>
                                        </a>
                                        <a className='social__link'>
                                            <img alt='' src={youtube} className='social__ico'/>
                                        </a>
                                        <a className='social__link'>
                                            <img alt='' src={patreon} className='social__ico'/>
                                        </a>
                                        <a className='social__link'>
                                            <img alt='' src={facebook} className='social__ico'/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            <main>
                <section className='section section_topMain'>
                    <div className='sectionContent'>
                        <div className='mainFirstSection'>
                            <div className='mainFirstSection__content'>
                                <h1 className='mainFirstSection__title'>Russian,<br/>
                                    From&nbsp;zero to&nbsp;hero</h1>
                                <p className='mainFirstSection__text'>
                                    Hi! My name is Yulia. I am a professional teacher
                                    of
                                    Russian and I am here to help you learn Russian in a way
                                    that is most suitable for you. Let’s go!</p>
                                <div className='mainFirstSection__buttons'>
                                    <a className='button button_white'>Book a lesson</a>
                                    <a className='button button_transparent'>Free consultation</a>
                                </div>

                            </div>
                            <img className='mainFirstSection__img' src={mainStartImage}/>
                        </div>
                    </div>
                </section>
                <section className='section section_backDots'>
                    <h2 className="section__title">About Me</h2>
                    <div className='sectionContent'>
                        <div className='aboutMe'>
                            <div className='aboutMe__content'>
                                <div className='aboutMe__colLeft'>
                                    <img className='aboutMe__photo' src={photoMe}/>
                                </div>
                                <div className='aboutMe__colRight'>
                                    <div className='aboutMe__text'>
                                        <p>My name is Yulia Kovalenko, I am a teacher of Russian language with 18
                                            years of experience. I know! It’s a lot, right? In my 18 years of
                                            teaching I worked in
                                            universities, in language courses as well as had my own private practice
                                            – with serious corporate clients and individaulas who wanted to study
                                            Russian for fun. Young students to top managers of big organizations. I
                                            know how to help you set up your goals,
                                            work out your own unique strategy for learning Russian, and get there.
                                            With your dedication and persistence and my knowledge
                                            and skills, you are garanteed to reach your goals. Book your free
                                            consultation and let’s get started!</p>
                                    </div>
                                    <a className='button button_blue'>Free consultation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section'>
                    <h2 className="section__title section__title_white">You’re getting</h2>
                    <div className='sectionBackground'>
                        <div className='sectionContent'>
                            <div className='getting'>
                                <div className='getting__colLeft'>
                                    Highly personalised lessons<br/>
                                    Comfortable setting<br/>
                                    Challenging tasks<br/>
                                    Language skills for use in the real world<br/>
                                </div>
                                <div className='getting__colRight'>
                                    Ability to communicate in a new language<br/>
                                    Better cross cultural communication skills<br/>
                                    Better memory and overall brain function<br/>
                                    Something to brag about<br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section'>
                    <h2 className="section__title section__title_noAfter section__title_green">Price</h2>
                    <div className='sectionContent'>
                        <div className='pricing'>
                            <div className='pricing__content'>
                                <div className='pricing__text'>
                                    <p>All lessons are one-on-one 60 minute sessions and include free learning
                                        materials.<br/>
                                        An introductory / discovery meeting is always free.</p>
                                </div>
                                <div className='pricing__cardsBox'>
                                    <div className='cardPrice'>
                                        <div className='cardPrice__colLeft'>
                                            <h3 className='cardPrice__title'>Beginner 0-A1-A2</h3>
                                            <span>4-lesson bundle,<br/>
                                                    $25 per lesson </span>
                                        </div>
                                        <div className='cardPrice__colRight'>
                                            <a className='cardPrice__button'>$100</a>
                                        </div>
                                    </div>
                                    <div className='cardPrice'>
                                        <div className='cardPrice__colLeft'>
                                            <h3 className='cardPrice__title'>Speaking practice</h3>
                                            <span>4-lesson bundle,<br/>
                                                    $25 per lesson </span>
                                        </div>
                                        <div className='cardPrice__colRight'>
                                            <a className='cardPrice__button'>$100</a>
                                        </div>
                                    </div>
                                    <div className='cardPrice'>
                                        <div className='cardPrice__colLeft'>
                                            <h3 className='cardPrice__title'>Intermediate B1</h3>
                                            <span>4-lesson bundle,<br/>
                                                    $30 per lesson </span>
                                        </div>
                                        <div className='cardPrice__colRight'>
                                            <a className='cardPrice__button'>$120</a>
                                        </div>
                                    </div>
                                    <div className='cardPrice'>
                                        <div className='cardPrice__colLeft'>
                                            <h3 className='cardPrice__title'>Pronunciation</h3>
                                            <span>4-lesson bundle,<br/>
                                                    $30 per lesson </span>
                                        </div>
                                        <div className='cardPrice__colRight'>
                                            <a className='cardPrice__button'>$120</a>
                                        </div>
                                    </div>
                                    <div className='cardPrice'>
                                        <div className='cardPrice__colLeft'>
                                            <h3 className='cardPrice__title'>Advanced B2-C1</h3>
                                            <span>4-lesson bundle,<br/>
                                                    $40 per lesson </span>
                                        </div>
                                        <div className='cardPrice__colRight'>
                                            <a className='cardPrice__button'>$160</a>
                                        </div>
                                    </div>
                                    <div className='cardPrice'>
                                        <div className='cardPrice__colLeft'>
                                            <h3 className='cardPrice__title'>Grammar/Syntax</h3>
                                            <span>4-lesson bundle,<br/>
                                                    $30 per lesson </span>
                                        </div>
                                        <div className='cardPrice__colRight'>
                                            <a className='cardPrice__button'>$120</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='pricing__buttonBox'>
                                    <a className='button button_blue'>Free assessment</a>
                                </div>
                                <div>
                                    <h4>Do you have a specific request?</h4>
                                    Fill out the form, and I will get back to you within 24 hours.
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className='section'>
                    <h2 className="section__title section__title_noAfter">Contact Me</h2>
                    <div className='sectionContent'>
                        <div className='contactMe'>
                            <div className='contactMe__colLeft'>
                                <form className='contactForm'>
                                    <label className='contactForm__titleInput'>Your name</label>
                                    <input className='contactForm__inputText' type='text'/>
                                    <label className='contactForm__titleInput'>Your email</label>
                                    <input className='contactForm__inputText' type='text'/>
                                    <label className='contactForm__titleInput'>Message</label>
                                    <textarea className='contactForm__textarea'></textarea>
                                    <div className='contactForm__boxButton'>
                                        <button className='button button_blueBg button_small' type='submit'>Send</button>
                                    </div>


                                </form>
                            </div>
                            <div className='contactMe__colRight'>
                                <span className='contactMe__text'>
                                    You can also contact me<br/>
                                    via email or Telegram:
                                </span>
                                <div  className='contactMe__links'>
                                    <a className='contactMe__link' href='mailto:yulia@rusclass.pro'>
                                        <img alt='mail icon' src={mail} className='contactMe__ico'/>
                                        <span className='contactMe__linkText'>yulia@rusclass.pro</span>
                                    </a>
                                    <a className='contactMe__link' href='https://t.me/kovalenkoyulia'>
                                        <img alt='telegram icon' src={telegram} className='contactMe__ico'/>
                                        <span className='contactMe__linkText'>@kovalenkoyulia</span>
                                    </a>
                                </div>
                                <img alt='' src={speechBubble} className='contactMe__imgBg'/>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <footer className='footer'>
                <section className='section'>
                    <div className='sectionContent'>
                        <div className='footer'>
                            <div className='gridRow'>
                                <div className='col-2'>
                                    <div className='footer__logo'><img className='footer__logoImg' src={logo}/></div>
                                </div>
                                <div className='col-2'>
                                    <div className='footer__linkCol'>
                                        <a className='footer__navLink'>Home</a>
                                        <a className='footer__navLink'>Lessons</a>
                                        <a className='footer__navLink'>Consultation</a>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <div className='footer__linkCol'>
                                        <a className='footer__navLink'>Free Materials</a>
                                        <a className='footer__navLink'>Beginner Course</a>
                                        <a className='footer__navLink'>Refresher Course</a>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <div className='footer__linkCol'>
                                        <a className='footer__navLink'>Email: yulia@rusclass.pro</a>
                                        <a className='footer__navLink'>Telegram: @kovalenkoyuli</a>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='footer__social'>
                                        <div className='social'>
                                            <a className='social__link'>
                                                <img alt='' src={instagram} className='social__ico'/>
                                            </a>
                                            <a className='social__link'>
                                                <img alt='' src={telegram} className='social__ico'/>
                                            </a>
                                            <a className='social__link'>
                                                <img alt='' src={youtube} className='social__ico'/>
                                            </a>
                                            <a className='social__link'>
                                                <img alt='' src={patreon} className='social__ico'/>
                                            </a>
                                            <a className='social__link'>
                                                <img alt='' src={facebook} className='social__ico'/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='footerCopyright'>
                                Copyright Rusclass.Pro &nbsp; 2022 Privacy Policy
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
};
export default MainPage;