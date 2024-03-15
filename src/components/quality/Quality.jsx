import './quality.css'; 
import { FaClipboardCheck, FaUsers, FaBuilding } from 'react-icons/fa';

const Quality = () => {
    return (
        <div>
            <section className="section">
                <FaClipboardCheck />
                <div>
                    <h2>Quality Construction</h2>
                    <p>We deliver high-quality construction services with precision and excellence, ensuring the satisfaction of our clients.</p>
                </div>
            </section>
            <section className="section">
                <FaUsers />
                <div>
                    <h2>Professionalism</h2>
                    <p>Our team operates with utmost professionalism, guaranteeing reliability and trustworthiness in every project we undertake.</p>
                </div>
            </section>
            <section className="section">
                <FaBuilding />
                <div>
                    <h2>Client Dedication</h2>
                    <p>We are deeply committed to our clients' success, working closely and collaboratively to achieve their goals and exceed their expectations.</p>
                </div>
            </section>
        </div>
    );
}

export default Quality;
