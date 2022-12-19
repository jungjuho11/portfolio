import '../../images/spongebob-profile.jpeg'

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <img src="../../images/spongebob-profile.jpeg" alt="" />
                    <div>photo</div>
                    <div>name</div>
                </div>
                <div className="col-sm-6">
                    <div>job title</div>
                    <div>job descriptions</div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;