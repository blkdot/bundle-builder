import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-left: 80px;
  border: 1px solid lightblue;
  border-radius: 20px;

  @media (max-width: 959px) {
    margin-left: 40px;
  }

  @media (max-width: 767px) {
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
  }

  .pack {
    padding: 16px;
    background: rgb(14,151,125);
    border-radius: 20px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    p {
      font-size: 16px;
      font-weight: 400;
    }
  }

  .bundle {
    display: flex;
    justify-content: center;
    margin-top: 12px;
    margin-bottom: 12px;
    .bundle-img {
      width: 32px;
      height: 32px;
      border: 1px solid #8e8e8e;
      margin-left: 8px;
      margin-right: 8px;
      border-radius: 4px;
      padding: 4px;
      box-sizing: border-box;

      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .add-cart {
    margin: 12px;
    border-radius: 4px;
    border: none;
    background: #8e8e8e;
    padding: 6px;
    color: #fff;
    font-size: 12px;
  }

  .add-cart-red {
    margin: 12px;
    border-radius: 4px;
    border: none;
    padding: 6px;
    color: #fff;
    font-size: 12px;
    background: #e23d2e;
  }
`;
