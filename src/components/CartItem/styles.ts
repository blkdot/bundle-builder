import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;

  h4 {
    text-align: center;
  }

  .title {
    color: #000;
  }

  .disabled-title {
    color: #756e6e;
  }

  .price-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 16px;
    p {
      margin: 0
    }
  }

  .price {
    display: inline;
    font-weight: 700;
    color: #000;
    margin-left: 8px;
    margin-right: 0;
  }

  .disabled-price {
    display: inline;
    font-weight: 700;
    color: #756e6e;
    margin-left: 8px;
    margin-right: 0;
  }

  button {
    border-radius: 50%;
    border: none;
    width: 30px;
    height: 30px;
    color: #8e8e8e;
    font-size: 16px;
    @media (max-width: 959px) {
      width: 24px;
      height: 24px;
    }
  }

  .img {
    max-height: 200px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
    height: 100%;
  }

  .disabled-img {
    max-height: 200px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
    height: 100%;
    opacity: 0.3;
  }

  .amount-spin {
    display: flex;
    align-items: center;
    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;
  }

  span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-left: 16px;
    margin-right: 16px;
    @media (max-width: 959px) {
      width: 32px;
      height: 32px;
      margin-left: 8px;
      margin-right: 8px;
    }
  }

  .no-amount {
    background: #50b4a0;
  }
  .amount {
    background: #e23d2e;
  }
  .disabled-amount {
    background: #ebebeb;
  }
`;
