interface ButtonRecord {
  buttonLabel: string;
  buttonUrl: string;
}

export interface ContactQueryResponse {
  allContacts: {
    id: string;
    label: string;
    bookACallButton: ButtonRecord;
  }[];
}

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
