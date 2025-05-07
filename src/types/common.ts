export interface ContactUsSectionProps {
  data: {
    label: string;
    bookACallButton: {
      buttonLabel: string;
      buttonUrl: string;
    };
  };
}

export interface JoinOurTeamSectionProps {
  data: {
    pageTitle: string;
    description: string;
    weAreHiringButton: {
      buttonLabel: string;
      buttonUrl: string;
    };
    sideImages: {
      responsiveImage: any;
      url: string;
      alt: string;
    }[];
  };
}
