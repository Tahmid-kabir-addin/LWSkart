import Ads from "../components/home/Ads";
import Arrivals from "../components/home/Arrivals";
import Banner from "../components/home/Banner";
import Catagories from "../components/home/Catagories";
import Features from "../components/home/Features";
import Trending from "../components/home/Trending";

// export async function generateStaticParams() {
//   return ["en", "bn"];
// }

export default function page() {
  return (
    <>
      <Banner />
      <Features />
      <Catagories />
      <Arrivals />
      <Ads />
      <Trending />
    </>
  );
}
