
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-texture">
      <div className="container max-w-3xl mx-auto px-4 py-16">
        <Link 
          to="/" 
          className="inline-flex items-center text-book-red hover:text-book-red/80 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Book
        </Link>
        
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About David Warren</h1>
          
          <p className="text-xl text-gray-700 mb-8">
            David works as a strategy consultant, software seller, speaker, and facilitator.
          </p>
          
          <p className="text-gray-700 mb-6">
            At one time or another he was a data entry doer, a non-profit nobody, a whimsical writer of training films, 
            a bad tempered bartender, a delivery driver, a sun-kissed sailboat mate, and a good-for-nothing golf caddie.
          </p>
          
          <p className="text-gray-700 mb-6">
            He is a capable cook, a slow cyclist, an insular introvert, a pernicious putterer, a desultory drinker, 
            a hellacious handyman, an alliteration addict, and a drab dresser.
          </p>
          
          <p className="text-gray-700 mb-6">
            Most importantly, he is a fond father, a steadfast spouse, a supportive son, a stalwart sibling, 
            a fierce friend, a non-judgmental neighbor and more often than not, a law-abiding local.
          </p>
          
          <p className="text-gray-700">
            He lives in Richmond, Virginia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
