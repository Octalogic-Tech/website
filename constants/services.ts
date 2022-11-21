import MobileDevCard from "../public/images/mobile_dev_card.svg";
import WebDevCard from "../public/images/website_webapp_card.svg";
import DigitalMarketingCard from "../public/images/digital_marketing_card.svg";
import RemoteDevCard from "../public/images/remote_dev_card.svg";

export const Services = [
  {
    title: "Mobile Apps",
    desc: "We craft apps for Android and iOS designed with the latest UI trends, while delivering the best in class UX for your end users",
    actionLink: "/mobile-development",
    illustration: MobileDevCard,
  },
  {
    title: "Websites & Apps",
    desc: "From customised sites to Wordpress blogs and Shopify stores, we do it all using consistent and clean architecture code",
    actionLink: "/web-development",
    illustration: WebDevCard,
  },
  {
    title: "Digital Marketing",
    desc: "We help increase your business presence online through social media campaigns and influencer marketing",
    actionLink: "/digital-marketing",
    illustration: DigitalMarketingCard,
  },
  {
    title: "Remote Resources",
    desc: "Hire remote resources and get exclusive, undivided attention on your projects. We offer monthly and hourly billing plans",
    actionLink: "/contact",
    illustration: RemoteDevCard,
  },
];
