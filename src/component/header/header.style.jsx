import styled from "styled-components";

export const MainContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Header = styled.header`
  max-width: 80%;
  margin:0 auto;
  background-color: #fff;
  padding: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const Logo = styled.img`
  max-width: 150px;
  max-height: 60px;
  border-radius: 5px 0 0 0;
`;

export const Navigation = styled.nav`
  ul {
      list-style-type: none;
      display: flex;
    }

    ul li {
      margin-right: 1rem;
      cursor: pointer;
      font-size: 1.2rem;
    }
`;






