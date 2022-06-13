import "./MainPage.css";

import Container from "../PageElements/PortfolioCard";
import TextCard from "../PageElements/TextCard";
import ServiceCard from "../PageElements/ServiceCard";
import ContactForm from "../ContactForm/ContactForm";
import PageFill from "../PageElements/PageFill";

export default function Nav() {
  return (
    <div className="outerpage">
      <div className="mainPage">
        {/* <PortfolioCard /> */}

        {/* other bits */}

        <TextCard id="about" name="Welcome">
          {/* <h2>What do we do</h2> */}
          <p>
            test Cras ut sagittis nulla. Curabitur vel feugiat nibh. Aenean
            viverra viverra tempus. Quisque tincidunt feugiat leo quis sodales.
            Praesent viverra posuere velit, quis laoreet est varius vel. Duis et
            cursus nisi. Integer ultrices sed augue eget imperdiet. Pellentesque
            eu euismod lacus.
          </p>
        </TextCard>
        <Container />

        {/* <PortfolioCard /> */}

        <PageFill>
          <TextCard id="sevices" name="Our Services">
            <p>
              Morbi pretium varius nisi eu bibendum. Nam vulputate erat quam.
              Suspendisse vehicula ipsum tristique, dictum turpis ac, vestibulum
              ex. Aliquam quis ornare nunc. Sed consequat tellus in lacus
              lobortis volutpat. Sed semper ante et turpis congue ullamcorper.
              Morbi sit amet elit sed odio tempus aliquam. Aliquam sed pulvinar
              nunc.
            </p>
          </TextCard>

          <ServiceCard
            head="Stills"
            img="http://cdn.home-designing.com/wp-content/uploads/2018/05/white-interior-design.jpg"
          >
            <p>
              Ut ornare urna id mi dapibus malesuada. Aenean sit amet ultrices
              mauris, nec ornare lectus. Nulla non dolor eros. Phasellus eget
              neque eget odio condimentum cursus.
            </p>
          </ServiceCard>
          <ServiceCard
            head="VR"
            img="https://immersionvr.co.uk/wp-content/uploads/2019/07/bathroom-1-1024x512.jpg"
          >
            <p>
              Ut ornare urna id mi dapibus malesuada. Aenean sit amet ultrices
              mauris, nec ornare lectus. Nulla non dolor eros. Phasellus eget
              neque eget odio condimentum cursus.
            </p>
          </ServiceCard>
        </PageFill>

        <TextCard id="contact" name="Contact us">
          <ContactForm />
        </TextCard>

        {/* end page body */}
      </div>
    </div>
  );
}
