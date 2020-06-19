import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.2s;

    &:hover {
      color: #666;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex; /** ficar ao lado do elemento anterior */
    align-items: center; /** ficar ao lado do elemento anterior */
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  div {
    margin-left: 24px; /**distanciar */

    strong {
      font-size: 36px;
      color: #3d3d4d;
    }
    p {
      font-size: 18px;
      color: #737380;
      margin-top: 4px;
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      /** usar esstilização apartir do segundo li  */
      & + li {
        margin-left: 80px; /**distanciar as margens */
      }
      strong {
        display: block; /**quebrar linha */
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%; /*largura do elemento*/
    padding: 24px; /*margen interna do elemento*/
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;
    /** espaço entre os elementos dp mesmo tip0 */

    &:hover {
      transform: translateX(10px);
    }
    & + a {
      margin-top: 16px;
    }
  }

  div {
    margin-left: 0 16px; /*distanciar de algum elemento */
    flex: 1;
    strong {
      font-size: 20px;
      color: #3d3d4d;
    }
    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
