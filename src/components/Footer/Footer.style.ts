import styled from "styled-components";

export const SCFooter = styled.div`
  position: relative;
  z-index: 100;

  background-color: ${(props) => props.theme.colors.footerBgc};
  color: ${(props) => props.theme.colors.invertedTextColor};
  padding: 100px;

  flex: 0 1 auto;

  display: flex;
  gap: 100px;

  .supportService {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .phoneNumbers {
    p:not(:last-child) {
      margin-bottom: 35px;
    }
  }

  .footerLinks {
    display: flex;
    gap: 100px;
    flex-wrap: wrap;
  }

  .footerLink {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  .linksHeading {
    color: ${(props) => props.theme.colors.gray};
    text-transform: uppercase;
    font-weight: 600;
  }
`;
