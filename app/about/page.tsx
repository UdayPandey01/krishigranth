import { Navbar } from "@/components/Navbar";
import Social from "@/components/Social";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className=" py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold text-black mb-10">About Us</h2>
            <p className="text-lg text-black mb-10 max-w-3xl mx-auto">
              Welcome to{" "}
              <span className="font-bold text-xl text-black">KrishiGranth</span>
              —your trusted partner in agricultural growth and innovation. We
              are dedicated to empowering farmers across India by providing the
              latest crop insights, weather forecasts, and access to government
              schemes.
            </p>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              We believe in the power of knowledge. Whether you need detailed
              crop descriptions, current market rates, or advice on the best
              farming practices, we’ve got you covered.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join us on this journey to modernize agriculture, one harvest at a
              time!
            </p>
          </div>
        </div>
        <Social />
      </div>
    </div>
  );
}
