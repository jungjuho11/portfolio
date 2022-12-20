import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faReact, faJs, faGitAlt } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return (
        <>
            <section className="container vcenterfull d-flex align-items-center">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img src={require('../../images/spongebob-profile.jpeg')} className='profile-picture animate__animated animate__bounceIn' alt="Profile Picture" />
                    </div>
                    <div className="col-lg-6 px-4">
                        <div className="row h4 pb-3">HI! I'M</div>
                        <div className="row h1 pb-4">JUHO JUNG</div>
                        <div className="row fs-4">A Jr. Web Developer working at Milan Laser Hair Removal that is passionate about creating interactive applications and expericnes on the web.</div>
                        <div className="row pt-3">
                            <div className="col-lg-6 px-0 d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type='button' className='btn home-btn btn-lg'>Resume</button>
                            </div>
                            <div className="col-lg-6 px-0 d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type='button' className='btn home-btn btn-lg'><i className="bi-linkedin"></i></button>
                                <button type='button' className='btn home-btn btn-lg'><i className="bi-github"></i></button>
                            </div>
                            {/* Resume, linkedin, github */}
                        </div>
                    </div>
                </div>

            </section>
            <section className="container vcentermid aboutme d-flex align-items-center px-4 px-lg-1">
                <div className="row">
                    <span>SOME INFO</span>
                    <h2>ABOUT ME</h2>
                    <article>
                        <p className='fs-4 p-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam sint maiores, expedita, deserunt vitae culpa quam temporibus unde, veritatis porro neque nesciunt. Ad culpa voluptas cupiditate harum alias, consectetur nobis
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam sint maiores, expedita, deserunt vitae culpa quam temporibus unde, veritatis porro neque nesciunt. Ad culpa voluptas cupiditate harum alias, consectetur nobis?</p>
                    </article>
                </div>
            </section>
            <section className="container vcentermid aboutme d-flex align-items-center px-4 px-lg-1">
                <div className="row">
                    <span>CHECK OUT MY</span>
                    <h2>SKILLS</h2>
                    <div className="col">

                    </div>
                    <article className='w-auto skills'>
                        <div className='p-4'>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <div class="card">
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <FontAwesomeIcon className='flex-fill' icon={faHtml5} size="7x"></FontAwesomeIcon>
                                        <div class="card-body">
                                            <p class="card-text text-center">HTML</p>
                                        </div>
                                </div>
                                <div class="card">
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <FontAwesomeIcon className='flex-fill' icon={faCss3Alt} size="7x"></FontAwesomeIcon>
                                        <div class="card-body">
                                            <p class="card-text text-center">CSS</p>
                                        </div>
                                </div>
                                <div class="card">
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <FontAwesomeIcon className='flex-fill' icon={faReact} size="7x"></FontAwesomeIcon>
                                        <div class="card-body">
                                            <p class="card-text text-center">React</p>
                                        </div>
                                </div>
                                <div class="card">
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <FontAwesomeIcon className='flex-fill' icon={faJs} size="7x"></FontAwesomeIcon>
                                        <div class="card-body">
                                            <p class="card-text text-center">JavaScript</p>
                                        </div>
                                </div>
                                <div class="card">
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <FontAwesomeIcon className='flex-fill' icon={faGitAlt} size="7x"></FontAwesomeIcon>
                                        <div class="card-body">
                                            <p class="card-text text-center">Git</p>
                                        </div>
                                </div>


{/*                                 <FontAwesomeIcon className='flex-fill' icon={faHtml5} size="7x"></FontAwesomeIcon>
                                <FontAwesomeIcon className='flex-fill' icon={faCss3Alt} size="7x"></FontAwesomeIcon>
                                <FontAwesomeIcon className='flex-fill' icon={faReact} size="7x"></FontAwesomeIcon>
                                <FontAwesomeIcon className='flex-fill' icon={faJs} size="7x"></FontAwesomeIcon>
                                <FontAwesomeIcon className='flex-fill' icon={faGitAlt} size="7x"></FontAwesomeIcon> */}
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <section className="container vcentermid aboutme d-flex align-items-center px-4 px-lg-1">
                <div className="row">
                    <span>TAKE A LOOK AT MY</span>
                    <h2>PROJECTS</h2>
                    <article>
                        <p className='fs-4 p-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam sint maiores, expedita, deserunt vitae culpa quam temporibus unde, veritatis porro neque nesciunt. Ad culpa voluptas cupiditate harum alias, consectetur nobis?</p>
                    </article>
                </div>
            </section>
            <section className="container vcentermid aboutme d-flex align-items-center px-4 px-lg-1">
                <div className="row">
                    <span>SAY HELLO</span>
                    <h2>CONTACT</h2>
                    <article>
                        <p className='fs-4 p-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam sint maiores, expedita, deserunt vitae culpa quam temporibus unde, veritatis porro neque nesciunt. Ad culpa voluptas cupiditate harum alias, consectetur nobis?</p>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Home;





/*         <div className="container">
            <div className="row">
                <div className="col-sm-6 d-flex justify-content-center pt-2">
                    <div>
                        <div className="d-flex justify-content-center mb-3">
                            <img src={require('../../images/spongebob-profile.jpeg')} className='profile-picture animate__animated animate__bounceIn pb-5' alt="" />
                        </div>
                        <div className="h2 text-center">Juho Jung</div><hr />
                        <div className="row">
                            <p className='text-center mb-0'>10305 Prairie Rd</p>
                            <p className='text-center'>Omaha, NE 68134</p><hr />
                        </div>
                        <div className="row">
                            <p className='text-center mb-0'>402-201-3678</p>
                            <p className='text-center'>jungjuho@yahoo.com</p>
                        </div>
                    </div>

                </div>
                <div className="col-sm-6">

                    <h3>Jr. Web Developer</h3>
                    <h5 className='pb-2'>September 2022 - Present</h5>
                    <div>Job Description</div>
                    <ul>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores nostrum id nesciunt, possimus pariatur iusto, maiores porro placeat magnam non, aspernatur earum reiciendis in quod numquam molestias ab iure recusandae!</li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus tempora laborum repudiandae, perspiciatis id dolores explicabo debitis dolorum corporis quas ut architecto. Deleniti explicabo tempora, sapiente mollitia velit deserunt ipsum!</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestias quisquam ea beatae tenetur? Ex, aspernatur in. Dolorem qui laborum doloremque. Quod odit illo neque voluptatem molestias reiciendis quam tenetur?</li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <div className='d-flex justify-content-center'>
                        <div>skills</div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className='d-flex justify-content-center'>
                        <div>education</div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className='d-flex justify-content-center'>
                        <div>Previous work experiences</div>
                    </div>
                </div>
            </div>
        </div> */