import styled from 'styled-components';
import { Preloader } from '../public/views/preloader/preloader';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Preloader />
    </StyledPage>
  );
}

export default Index;
