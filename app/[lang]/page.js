import Ads from "../components/home/Ads";
import Arrivals from "../components/home/Arrivals";
import Banner from "../components/home/Banner";
import Catagories from "../components/home/Catagories";
import Features from "../components/home/Features";
import Trending from "../components/home/Trending";

export default function page({ params: { lang } }) {
  return (
    <>
      <Banner lang={lang} />
      <Features lang={lang} />
      <Catagories lang={lang} />
      <Arrivals lang={lang} />
      <Ads />
      <Trending lang={lang} />
    </>
  );
}
