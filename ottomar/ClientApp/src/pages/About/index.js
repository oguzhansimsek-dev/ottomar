//* node_modules
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

//* Components
import PageTitle from "../../components/PageTitle";

const About = () => {
  return (
    <section>
      <PageTitle title="Hakkımızda" />

      <Container className="page-container">
        <Row>
          <Col sm="12" md="3" lg="3"></Col>
          <Col sm="12" md="9" lg="9">
            <p>
              <i>
                <mark>
                  <b>
                    Sizin memnuniyetiniz, bizim sermayemiz, mutluluğunuz
                    kazancımızdır.
                    <br /> <br />
                    Your satisfaction, our capital, your happiness, our
                    earnings. <br />
                    <br />
                    &nbsp; &nbsp; &nbsp;Fatih ÖNCÜ &nbsp; &nbsp; &nbsp; <br />
                    <br />
                    Yönetim Kurulu Başkanı
                  </b>
                  <br />
                  <br />
                  OTTOMAR DOĞALTAŞ
                  <br />
                  <br />
                  Firmamız; ülkemizdeki doğal taşları, ilk imalatçıdan son
                  kullanıcıya güvenle ulaştırmayı kendisine amaç edinmiştir.
                  Ticareti, sadece kazanç odaklı değil, aynı zamanda ülkeler
                  arası dostluk köprüsü olarak görmekteyiz.
                  <br /> Emin adımlarla çıktığımız bu yolda, misyonumuz ticareti
                  ortak kazanca cevirme arzusudur. Vizyonumuz ise, doğal taş
                  sektöründe, en güvenilir global ticaret ağını oluşturmaktır.
                  Siz değerli müşterilerimizi/dostlarımızı bu işbirliğine ortak
                  etmekten onur duyacağız.
                  <br />
                  <br /> <b>İş birliğinize ve güveninize talibiz...</b>
                  <br />
                  <br /> Our company; aims to deliver the natural stones in our
                  contry safely from the first manufacturer to the end user.
                  Common trade is not only as profit oriented, but also as a
                  bridge of friendship between countries.
                  <br /> Based on this confidend way, our mission is to turn
                  trade into a common profit. Our vision is to create the most
                  reliable global trade network in the natural stone sector. We
                  will be honored to share this cooperation with our valuable
                  customers/friends.
                  <br />
                  <br />{" "}
                  <b>We are committed to your cooperation and trust...</b>
                </mark>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
