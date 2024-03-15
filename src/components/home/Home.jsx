import './Home.css';
import HERO_IMAGE from '../../assets/home.png';

export default function Home() {
  return (
    <div className='home-container'>
      <div className="heroSection">
        <div className="heroContent">
          <h1>Welcome to Kouts Ventures Ltd</h1>
          <p>Leading construction company in Kenya</p>
          <div className="flex">
            <div className="btn-group">
              <a href="#" className="btn btn-primary">Learn More</a>
              <a href="#" className="btn btn-secondary">Get Started</a>
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src={HERO_IMAGE} alt="Hero" />
        </div>
      </div>
    </div>
  );
}
