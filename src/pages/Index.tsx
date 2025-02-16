
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-texture">
      {/* Hero Section */}
      <section className="container max-w-6xl mx-auto pt-12 pb-24 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-block bg-book-red/10 text-book-red font-medium px-4 py-2 rounded-full text-sm">
              New Release
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-book-red">
              The Good No
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Master the art of setting boundaries and protect your most valuable asset - your time.
            </p>
            <Button 
              className="group bg-book-red hover:bg-book-red/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("#", "_blank")}
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="animate-fade-in">
            <img
              src="/lovable-uploads/ad1ae17a-d49c-4ecc-ba3e-fba0fc677922.png"
              alt="The Good No Book Cover"
              className="w-full max-w-md mx-auto shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Book Description */}
      <section className="bg-white py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-8 animate-fade-up">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              The problem with being known as a "go-to" person? Everyone goes to you.
            </h2>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                You're the person people count on to deliver, solve, and manage the important stuff. 
                But when the requests never stop, even the most capable and committed person hits a breaking point.
              </p>
              <p>
                If saying "no" feels risky and you fear letting people down or jeopardizing your 
                hard-earned reputation, the cycle gets even more challenging to break.
              </p>
              <p className="text-xl font-medium text-book-red">
                <span className="italic">The Good No</span> is a practical guide to setting boundaries in a world that doesn't seem 
                to understand the concept.
              </p>
              <p>
                With clearly defined techniques and real-world examples, it shows you how to stop 
                drowning in demands and start protecting your time as if it's the most valuable 
                thing in the world (which it is).
              </p>
              <p>
                Perfect for people who are stretched too thin but still weirdly attracted to the 
                idea of building a "do or die" reputation. <span className="italic">The Good No</span> helps you master the art of 
                prioritizing the right stuff, at the right time, for the right people. Especially for yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-book-red transition-colors"
            >
              About the Author
            </Link>
            <a 
              href="mailto:contact@oomiyasa.com"
              className="text-gray-600 hover:text-book-red transition-colors"
            >
              contact@oomiyasa.com
            </a>
            <div className="text-center text-gray-600 text-sm">
              © {new Date().getFullYear()} Oomiyasa LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
