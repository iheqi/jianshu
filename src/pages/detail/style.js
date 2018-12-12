import styled from 'styled-components';

export const DetailWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 100px;
`;

export const Header = styled.div`
  margin: 50px 0 20px 0;
  font-size: 34px;
  font-weight: bold;
  color: #333;
  line-height: 44px;
`;

export const Content = styled.div`
  color: #2f2f2f;
  text-align: center;

  img {
    max-width: 100%;
  }
  p {
    text-align: left;
    margin: 25px 0;
    font-size: 16px;
    line-height: 30px;
  }
`;