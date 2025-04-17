export const JOIN_US_QUERY = `
  query {
    allJoinOurTeams {
      pageTitle
      description 
      weAreHiringButton {
        ... on ButtonRecord {
          buttonLabel
          buttonUrl
        }
      }
      sideImages {
        url
        alt
      }
    }
  }
`;
