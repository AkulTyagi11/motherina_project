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
      <div className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold md:text-6xl text-soft-brown animate-fade-in">
            About Shalinta
          </h1>
          <p className="mb-8 text-xl text-warm-gray animate-slide-up">
            Passionate about empowering mothers through their wellness journey
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Shalinta Tyagi"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="animate-slide-up animation-delay-200">
            <h2 className="mb-6 font-serif text-3xl font-bold text-soft-brown">My Story</h2>
            <div className="space-y-4 prose prose-lg text-warm-gray">
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
                <div className="mb-2 text-3xl font-bold text-soft-brown">500+</div>
                <div className="text-warm-gray">Mothers Supported</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-soft-brown">8</div>
                <div className="text-warm-gray">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-soft-brown">Qualifications & Certifications</h2>
            <p className="text-xl text-warm-gray">Committed to ongoing education and evidence-based practice</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {qualifications.map((qual, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                <Award className="w-8 h-8 mb-4 text-soft-brown" />
                <h3 className="font-semibold text-soft-brown">{qual}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="p-8 mt-20 bg-lavender rounded-2xl md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold text-soft-brown">My Philosophy</h2>
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
              <div className="animate-slide-up">
                <Heart className="w-12 h-12 mx-auto mb-4 text-soft-brown" />
                <h3 className="mb-2 text-xl font-semibold text-soft-brown">Compassionate Care</h3>
                <p className="text-warm-gray">Every mother's journey is unique and deserves individualized, empathetic support.</p>
              </div>
              <div className="animate-slide-up animation-delay-200">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-soft-brown" />
                <h3 className="mb-2 text-xl font-semibold text-soft-brown">Evidence-Based</h3>
                <p className="text-warm-gray">All recommendations are grounded in the latest research and best practices.</p>
              </div>
              <div className="animate-slide-up animation-delay-400">
                <Users className="w-12 h-12 mx-auto mb-4 text-soft-brown" />
                <h3 className="mb-2 text-xl font-semibold text-soft-brown">Holistic Approach</h3>
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