import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import './UpperNav.css';

function UpperNav() {
  const iconStyle = {  color: 'var(--primary-color)', fontSize: '1.5rem' }; 

  return (
    <div className="upper-nav flex justify-around items-center  border-yellow-500 pt-2 p-1">
      <div className="contact-address text-white">
        <p><FaEnvelope style={iconStyle} className="mr-3" />Email Us: info@koutsventures.com</p>
        <p><FaPhone style={iconStyle} className="mr-3" />Phone: +254 456 7890</p>
        <p><FaClock style={iconStyle} className="mr-3" />Open Hours:<br/> Monday - Friday: 8:00 AM - 5:00 PM</p>
      </div>
      <div className="social-media">
        <h3 className="text-white mb-2">Follow Us</h3>
        <div className="flex items-center">
          <a href="https://www.facebook.com" className="text-white mr-4 "><FaFacebook className='text-white hover:text-yellow-500' /></a>
          <a href="https://www.twitter.com" className="text-white mr-4" ><FaTwitter className='text-white hover:text-yellow-500'/></a>
          <a href="https://www.instagram.com" className="text-white mr-4 "><FaInstagram className='text-white hover:text-yellow-500' /></a>
        </div>
      </div>
    </div>
  );
}

export default UpperNav;
