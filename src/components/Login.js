import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/logo1.png" alt=""></CTALogoOne>
          <SingUp>Iniciar la aventura</SingUp>
          <Description>
            Las mas grandes historias, en un solo lugar.
          </Description>
        </CTA>
        <BgVideo>
          <video autoPlay loop muted>
            <source src="/images/DisneyPlus.mp4" type="video/mp4" />
          </video>
        </BgVideo>
      </Content>
    </Container>
  );
};

const BgVideo = styled.div`
height: 100%;
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;
opacity: 0.3;
overflow: hidden;

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 15px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const SingUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #7828ff;
  margin-bottom: 12px;
  width: 100%;

  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 70px;

  &:hover {
    background-color: #5e26bf;
  }
`;
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 100%;
  height: auto;
  display: block;
  width: 150%;
  @media (max-width: 700px) {
    width: 100%; /* Cambia el ancho al 100% en pantallas más pequeñas que 700px */
  }
`;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 100vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

export default Login;
