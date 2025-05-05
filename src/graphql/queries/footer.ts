export const FOOTER_QUERY = `
  query {
    footer {
      logo {
        alt
        url
      }
      locations {
        name
      }
      socialMediaLinks {
        socialMediaLogo {
          alt
          url
        }
        socialMediaLinks
      }
      navlinks {
        label
        url
      }
      copyrightText
      creditsText
      creditLogo {
        alt
        url
      }
    }
  }
`;
