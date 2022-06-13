import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="contactForm">
      <form class="form">
        <p type="Name:">
          {/* <input placeholder="Write your name here.."></input> */}
          <input></input>
        </p>
        <p type="Email:">
          {/* <input placeholder="Let us know how to contact you back.."></input> */}
          <input></input>
        </p>
        <p type="Message:">
          {/* <input placeholder="What would you like to tell us.."></input> */}
          {/* <input></input> */}
          <textarea name="Text1" cols="40" rows="5"></textarea>
        </p>
        <button className="send">Send Message</button>
        {/* <div>
          <span class="fa fa-phone"></span>001 1023 567
          <span class="fa fa-envelope-o"></span> contact@company.com
        </div> */}
      </form>
    </div>
  );
}
