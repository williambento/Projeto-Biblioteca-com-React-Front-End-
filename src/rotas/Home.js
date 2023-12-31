import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa';
import Recomendacao from '../components/Recomendacoes';
import Footer from '../components/Footer';

const ContainerApp = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(90deg, #002f52 35%, #0c75c6 100%);
`

function Home() {
  return (
    <ContainerApp>
      <Pesquisa/>
      <Recomendacao/>
      <Footer/>
    </ContainerApp>
  );
}

export default Home;
