import React from 'react';
import { Award, Heart, Users, BookOpen } from 'lucide-react';

const About = () => {
  const qualifications = [
    'Certified Prenatal & Postnatal Exercise Specialist',
    'Licensed Pelvic Floor Physical Therapist',
    'Certified Lactation Consultant (IBCLC)',
    'Certified Birth Doula',
    'Masters in Exercise Science'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-beige to-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-soft-brown mb-6 animate-fade-in">
            About Shalinta
          </h1>
          <p className="text-xl text-warm-gray mb-8 animate-slide-up">
            Passionate about empowering mothers through their wellness journey
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Shalinta Tyagi"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Content */}
          <div className="animate-slide-up animation-delay-200">
            <h2 className="text-3xl font-serif font-bold text-soft-brown mb-6">My Story</h2>
            <div className="prose prose-lg text-warm-gray space-y-4">
              <p>
                Hi, I'm Shalinta Tyagi, a dedicated Maternal Wellness Instructor with over 8 years 
                of experience supporting mothers through their pregnancy, postpartum, and beyond. 
                My journey began when I experienced my own challenges during pregnancy and realized 
                the gap in comprehensive maternal care.
              </p>
              <p>
                I believe that every mother deserves personalized support that honors both her 
                physical and emotional needs. Through evidence-based practices and compassionate 
                care, I help women build strength, confidence, and connection during this 
                transformative time.
              </p>
              <p>
                My approach combines my extensive training in pelvic floor therapy, prenatal 
                fitness, and lactation support with a deep understanding of the unique challenges 
                modern mothers face.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-soft-brown mb-2">500+</div>
                <div className="text-warm-gray">Mothers Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-soft-brown mb-2">8</div>
                <div className="text-warm-gray">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-soft-brown mb-4">Qualifications & Certifications</h2>
            <p className="text-xl text-warm-gray">Committed to ongoing education and evidence-based practice</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualifications.map((qual, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                <Award className="h-8 w-8 text-soft-brown mb-4" />
                <h3 className="font-semibold text-soft-brown">{qual}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-20 bg-lavender rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-soft-brown mb-6">My Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="animate-slide-up">
                <Heart className="h-12 w-12 text-soft-brown mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-soft-brown mb-2">Compassionate Care</h3>
                <p className="text-warm-gray">Every mother's journey is unique and deserves individualized, empathetic support.</p>
              </div>
              <div className="animate-slide-up animation-delay-200">
                <BookOpen className="h-12 w-12 text-soft-brown mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-soft-brown mb-2">Evidence-Based</h3>
                <p className="text-warm-gray">All recommendations are grounded in the latest research and best practices.</p>
              </div>
              <div className="animate-slide-up animation-delay-400">
                <Users className="h-12 w-12 text-soft-brown mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-soft-brown mb-2">Holistic Approach</h3>
                <p className="text-warm-gray">Addressing physical, emotional, and social aspects of maternal wellness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;