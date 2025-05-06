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
      responsiveImage(imgixParams: { fit: clip, w: 200, h: 100, auto: format }) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
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
          responsiveImage(imgixParams: { fit: clip, w: 600, h: 800, auto: format }) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }
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
          responsiveImage(imgixParams: { fit: clip, w: 200, h: 40, auto: format }) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }
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
      responsiveImage(imgixParams: { fit: clip, w: 600, h: 800, auto: format }) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
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
          responsiveImage(imgixParams: { fit: clip, w: 400, h: 300, auto: format }) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }
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
