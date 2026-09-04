import './Contact.css';

const CONTACT_CARDS = [
  {
    heading: 'General inquiries',
    body: 'Questions about the label, partnerships, or anything else.',
    email: 'hello@evergracemusic.com',
  },
  {
    heading: 'A&R submissions',
    body: 'Artists and songwriters — tell us about your music.',
    email: 'az@evergracemusic.com',
  },
  {
    heading: 'Booking & press',
    body: 'Tour offers, interview requests, and media inquiries.',
    email: 'booking@evergracemusic.com',
  },
];

export function Contact() {
  return (
    <main className="eg-contact-page">
      <h1 className="eg-contact-page__heading">Contact</h1>
      <p className="eg-contact-page__note">Reach out — we read everything ourselves.</p>

      <div className="eg-contact-page__grid">
        {CONTACT_CARDS.map((card) => (
          <div key={card.heading} className="eg-contact-page__card">
            <h2 className="eg-contact-page__card-heading">{card.heading}</h2>
            <p className="eg-contact-page__card-body">{card.body}</p>
            <a href={`mailto:${card.email}`} className="eg-contact-page__card-email">
              {card.email}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
