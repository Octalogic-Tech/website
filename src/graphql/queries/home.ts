export const HOME_PAGE_QUERY = `
query {
  allHomepages {
    heroTitle
    description
    services {
      name
    }
    button {
      ... on ButtonRecord {
        buttonLabel
        buttonUrl
      }
    }
    clientLogos {
      url
      alt
    }
    aboutTitle
    aboutDescription
    stats {
      statNumber
      statDescription
    }
    portfolioTitle
    portfolioDescription
    startAProjectButton {
      ... on ButtonRecord {
        buttonLabel
        buttonUrl
      }
    }
    portfolioCarousel {
      ... on PortfolioCarouselRecord {
        carouselImage {
          url
          alt
        }
        carouselTitle
        carouselDescription
      }
    }
    caseStudyCards {
      ... on CaseStudyCardRecord {
        logo {
          url
          alt
        }
        description
        viewcasestudyButton {
          ... on ButtonRecord {
            buttonLabel
            buttonUrl
          }
        }
      }
    }
    servicesTitle
    servicesDescription
    startAProjectButton2 {
      ... on ButtonRecord {
        buttonLabel
        buttonUrl
      }
    }
    sideImage {
      url
      alt
    }
    serviceCard {
      ... on ServiceCardRecord {
        title
        servicesDescription
        chips
      }
    }
    blogsPageTitle
    blogPageDescription
    blogCards {
      ... on BlogCardRecord {
        image {
          url
          alt
        }
        date
        title
        description 
        tags
        button {
          ... on ButtonRecord {
            buttonLabel
            buttonUrl
          }
        }
      }
    }
    viewAllButton {
      ... on ButtonRecord {
        buttonLabel
        buttonUrl
      }
    }
  }
}
`;
