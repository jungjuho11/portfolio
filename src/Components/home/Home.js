import './home.css'

const Home = () => {
    return (
        <>



            <div className="container pt-5 mt-5 home">
                <div className="row">
                    <div className="col-sm-6 d-flex justify-content-center">
                        <img src={require('../../images/spongebob-profile.jpeg')} className='profile-picture animate__animated animate__bounceIn' alt="" />
                    </div>
                    <div className="col-sm-6">
                        <div className="row h4 pb-3">HI! I'M</div>
                        <div className="row h1 pb-4">JUHO JUNG</div>
                        <div className="row h5">A Jr. Web Developer working at Milan Laser Hair Removal that is passionate about creating interactive applications and expericnes on the web.</div>
                        <div className="row col-6 mx-auto">
                            {/* Resume, linkedin, github */}
                            <button type='button' className='btn'>Resume</button>
                        </div>
                    </div>

                </div>

            </div>
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