import { css } from "styled-components";
import {
  defaultComponentTextLarge,
  defaultComponentTextSmall,
  defaultHeadingLarge,
  defaultParagraphMedium,
  defaultParagraphSmall,
  defaultSubtitleMedium,
  defaultTitleLarge,
  defaultTitleMedium,
  defaultTitleSmall,
} from "./default";

export const typography = css`
  body {
    font-family: "Gambarino-Regular";
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span {
      color: ${({ theme }) => theme.colors.darkGray};
    }

    h1 {
      ${defaultHeadingLarge}
    }

    h2 {
      ${defaultTitleLarge}
    }

    h3 {
      ${defaultTitleMedium}

      span {
        ${defaultTitleSmall}
      }
    }

    h4 {
      ${defaultTitleSmall}
    }

    h5 {
      ${defaultSubtitleMedium}
    }

    h6 {
      ${defaultComponentTextSmall}
    }

    p {
      ${defaultParagraphMedium}
    }

    span {
      ${defaultParagraphMedium}
    }

    button {
      ${defaultComponentTextLarge}
    }

    label {
      ${defaultParagraphMedium}
    }

    input {
      ${defaultParagraphMedium}
    }

    a {
      ${defaultParagraphSmall}
    }
  }
`;
