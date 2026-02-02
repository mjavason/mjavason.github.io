import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id='contact'>
      <div className='items-container'>
        <div className='contact_wrapper'>
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>

          <div className='contact-info'>
            <p>
              <strong>Email:</strong>{' '}
              <a href='mailto:orjimichael4886@gmail.com'>
                orjimichael4886@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href='tel:+2348148863871'>+234 814 886 3871</a>
            </p>
            <p>
              <strong>Address:</strong> 1 Old Akwuke Road Opp Mtd Police Station
              Awkunanaw, Enugu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
