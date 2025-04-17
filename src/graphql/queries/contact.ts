export const CONTACT_QUERY = `
  query {
    allContacts {
      id
      label
      bookACallButton {
        ... on ButtonRecord {
          buttonLabel
          buttonUrl
        }
      }
    }
  }
`;
