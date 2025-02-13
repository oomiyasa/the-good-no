
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
            At one time or another he was a data entry hack, a non-profit program coordinator, 
            a writer and director of training films, a restaurant laborer, a pizza delivery driver, 
            a charter sailboat mate, and a golf caddie.
          </p>
          
          <p className="text-gray-700 mb-6">
            He is an above-average cook, a slow cyclist, a loud talker, an inveterate putterer, 
            a former smoker, a light drinker, a wannabe handyperson, and a boring dresser. 
            Most importantly, he is a proud father, an adoring spouse, an attentive son, 
            a supportive sibling, a fierce friend, a mindful neighbor and more often than not, 
            a law-abiding citizen.
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
