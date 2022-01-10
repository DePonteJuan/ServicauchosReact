import styled from "styled-components";

const Wrapper = styled.nav`
  background: red;
  max-height: 4rem;
  padding: 1rem 5rem;
  .logo {
    color: gray;
  }
  .navbar {
    float: right;

    a {
      margin: auto 0.3rem;
    }
  }
`;

export default Wrapper;
