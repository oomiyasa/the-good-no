
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container max-w-6xl mx-auto pt-20 pb-24 px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block text-book-red text-sm">
              New Release
            </div>
            <h1 className="text-5xl font-bold text-book-red">
              The Good No
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
              Master the art of setting boundaries and protect your most valuable asset - your time.
            </p>
            <Button 
              className="bg-book-red hover:bg-book-red/90 text-white px-6 py-2 rounded-md text-base"
              onClick={() => window.open("#", "_blank")}
            >
              Order Now
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div>
            <img
              src="/lovable-uploads/ad1ae17a-d49c-4ecc-ba3e-fba0fc677922.png"
              alt="The Good No Book Cover"
              className="w-full max-w-md mx-auto transform rotate-6 hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Book Description */}
      <section className="py-24">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="space-y-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              The problem with being known as a "go-to" person?<br />
              Everyone goes to you.
            </h2>
            <div className="space-y-6 text-left text-gray-700 text-lg leading-relaxed">
              <p>
                You're the person people count on to deliver, solve, and manage the important stuff. But when the requests 
                never stop, even the most capable and committed person hits a breaking point.
              </p>
              <p>
                If saying "no" feels risky and you fear letting people down or jeopardizing your 
                hard-earned reputation, the cycle gets even more challenging to break.
              </p>
              <p>
                <span className="text-book-red font-medium">The Good No</span> is a practical guide to setting boundaries in a world that doesn't seem 
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
      <footer className="py-8 border-t border-gray-100">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center space-y-3">
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
            <div className="text-center text-gray-500 text-sm">
              © 2025 Oomiyasa LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
