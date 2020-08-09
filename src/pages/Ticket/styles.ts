import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    transition: color 0.2s;

    &:hover {
      color: #00a6f4;
    }
  }

  svg {
    margin-right: 4px;
  }
`;
export const TicketInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #00a6f4;
      }

      p {
        font-size: 18px;
        color: #fff;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #00a6f4;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #fff;
      }
    }
  }
`;
