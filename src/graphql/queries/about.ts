export const ABOUT_PAGE_QUERY = `
  query {
    allAboutPages {
      sectionTag
      heroTitle
      heroDescription
      workWithUsButton {
        buttonLabel
        buttonUrl
      }
      imageCarousel {
        url
        alt
      }
      missionTitle
      missionDescription
      testimonial {
        cardLogo {
          url
          alt
        }
        cardDescription
        profileImage {
          alt
          url
        }
        profileName
        profilePosition
      }
      banner {
        url
        alt
      }
      purposeTitle
      purposeDescription
      purposeCards {
        customLogo {
          alt
          url
        }
        title
        description
      }
    }
  }
`;
