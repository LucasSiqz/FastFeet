import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 34px 120px;
  flex-direction: column;
`;

export const InitialContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  strong {
    font-size: 24px;
    text-align: left;
    margin-bottom: 34px;
  }
`;

export const ProblemList = styled.table`
  margin-top: 22px;
  border-collapse: collapse;
  width: 100%;
`;

export const ItemsTitles = styled.tr`
  th:last-child {
    padding-right: 13px;
    text-align: right;
  }

  th:first-child {
    padding-left: 13px;
    width: 237px;
  }

  th {
    font-size: 16px;
    text-align: left;
    color: #444;
    padding-bottom: 14px;
  }
`;
