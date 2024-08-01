import { Link } from "react-router-dom";
import Nav from "../components/section/Nav";
import {hero} from '../assets/images'
import {icon1, icon2, icon3, icon4, logo} from '../assets/icons'
import { location, logos, store, play, phone1, phone2 } from "../assets/images";
import routes from "../router/routes";
import Button from "../components/elements/Button";
import Features from "../components/section/Features";
import Testimonials from "../components/section/Testimonals";
import FAQ from "../components/section/FAQ";
import Partners from "../components/section/Partners";



const achievements = [
  { icon: icon1, count: "10,000+", description: "Event hosted" },
  { icon: icon2, count: "2 Million", description: "Attendees" },
  { icon: icon3, count: "500+", description: "Event Organisers" },
  { icon: icon4, count: "14", description: "Countries" },
];


const Home = () => {
  return (
    <main className=" overflow-x-hidden">
      <Nav />
      <section className="px-5 md:px-10 lg:px-28 pt-[96px]">
        <div className="font-bold grid xl:w-[688px] mx-auto items-center">
          <h2 className=" text-[40px] md:text-[60px]  text-center">
            Effortless Events. Engaged Audiences.
          </h2>
          <p className="text-xl text-center mt-14 md:mt-4 pb-4">
            Ditch the stress, focus on the magic. Our all-in-one platform
            empowers you to orchestrate unforgettable experiences
          </p>
          <Button
            className={"px-6 py-4 w-fit mx-auto mt-8 flex gap-1 flex-nowrap"}
          >
            Get Started <span className="hidden md:block">Now</span>
          </Button>
        </div>
        <div className="mt-20">
          <img src={hero} alt="hero-img" />
        </div>
      </section>

      <section>
        <Partners />
      </section>

      <section className="px-5 py-12">
        <Features />
      </section>
      <section>
        <Testimonials />
      </section>

      <section className=" py-12 px-5 md:px-10 lg:px-28 lg:flex  justify-center gap-8 ">
        <div className=" xl:w-1/2">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-2">
            Our 4 years of achievements
          </h2>
          <p className="text-gray-600 mb-8">
            With our superpowers we have reached this
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 xl:w-1/2  ">
          {achievements.map((item, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img src={item.icon} className="w-16 h-16 lg:w-10 lg:h-10 " />
              <div className=" ">
                <p className="text-2xl font-feather font-bold text-gray-900 text-nowrap">
                  {item.count}
                </p>
                <p className="text-sm text-gray-600 text-nowrap">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Integration Section */}
      <section className=" py-12 md:px-10 lg:px-28">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center ">
          <div className=" md:w-1/2 px-5 md:px-0  ">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2">
              Easy integrations with 170+ tools
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Connect Eventeev with your favourite tools that you use to keep
              things on track.
            </p>
          </div>
          <div className="place-self-start md:w-1/2 ">
            <img src={logos} alt="Integrations" className="" />
          </div>
        </div>
      </section>

      <section>
        <FAQ />
      </section>

      {/* Mobile Project Management Section */}
      <section className="px-5 md:px-10 lg:px-28 py-12 lg:pb-0 xl:flex justify-between">
        <section className="xl:w-1/2 place-self-center">
          <div className="mb-8 ">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-2">
              Manage all projects from your mobile
            </h2>
            <p className="text-gray-600 mb-12">
              Download the app to manage your projects, keep track of the
              progress and complete tasks without procrastinating. Stay on track
              and complete on time!
            </p>
          </div>
          <div className="">
            <h4 className="text-lg font-medium mb-2">Get the App</h4>
            <aside className="flex items-center space-x-4 mb-12 xl:mb-0">
              <a href="#" className="inline-block ">
                <img src={play} alt="Get it on Google Play" className="h-12 " />
              </a>
              <a href="#" className="inline-block">
                <img
                  src={store}
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
            </aside>
          </div>
        </section>
        <div className="flex flex-col md:flex-row md:h-[558px]  justify-center md:justify-between md:px-12 md:space-x-8 ">
          <img
            src={phone1}
            alt="App screen 1"
            className=" w-[232px] mx-auto h-[384px] md:mx-0    mb-4 md:mb-0 "
          />
          <img
            src={phone2}
            alt="App screen 2"
            className=" w-[232px] mx-auto h-[384px] md:mx-0 md:place-self-end  "
          />
        </div>
      </section>

      <footer className="bg-primary text-white py-10 px-5 md:px-10 md:py-16 lg:px-28">
        <div className=" container md:flex items-center justify-between">
          <section>
            <img src={logo} alt="Eventeev Logo" className="mb-6" />
            <div className="flex  items-center mb-3 ">
              <div className="flex gap-6">
                <a href="#download" className="hover:underline md:mr-4">
                  Download Now
                </a>
                <a href="#license" className="hover:underline">
                  License
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <a href="#about" className="hover:underline md:mx-2">
                About
              </a>
              <a href="#features" className="hover:underline md:mx-2">
                Features
              </a>
              <a href="#pricing" className="hover:underline md:mx-2">
                Pricing
              </a>
              <a href="#news" className="hover:underline md:mx-2">
                News
              </a>
              <a href="#help" className="hover:underline md:mx-2">
                Help
              </a>
              <a href="#contact" className="hover:underline md:mx-2">
                Contact
              </a>
            </div>
          </section>

          {/* Right Side */}
          <div className="flex flex-col md:items-center mt-8 md:mt-0 ">
            <span className="mb-4 text-[#D1D5DB] text-lg">Get the App</span>
            <div className="">
              <a href="#appstore" className="mr-2">
                <img src={store} alt="App Store" className="w-32" />
              </a>
              <a href="#playstore">
                <img src={play} alt="Google Play" className="w-32" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left mt-6 text-[#D1D5DB]">
          © 2024 Eventeev. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default Home;
