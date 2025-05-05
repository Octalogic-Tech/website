export const HEADER_QUERY = `
  query {
    header(fallbackLocales: en) {
      logo {
        alt
        url
      }
      navlinks {
        label
        url
      }
      language
      button {
        buttonLabel
        buttonUrl
      }
    }
  }
`;
