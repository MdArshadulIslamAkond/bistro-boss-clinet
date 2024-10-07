import Cover from "../../pages/Shared/Cover/Cover";
import Location from "../Location/Location";
import img from '../../../src/assets/contact/banner.jpg';
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
    return (
        <div>
            <Cover img={img} title={'CONTACT US'} height='550' />
            <Location />
            <ContactForm />
        </div>
    );
};

export default Contact;