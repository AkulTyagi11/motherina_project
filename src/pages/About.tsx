import React from 'react';
import { Award, BookOpen, Users, Heart, GraduationCap, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Master of Physical Therapy",
      institution: "University of Toronto",
      year: "2016"
    },
    {
      icon: Award,
      title: "Women's Health Physiotherapy Certification",
      institution: "Canadian Physiotherapy Association",
      year: "2018"
    },
    {
      icon: BookOpen,
      title: "Perinatal Exercise Specialist",
      institution: "Prenatal & Postpartum Corrective Exercise Institute",
      year: "2019"
    },
    {
      icon: Heart,
      title: "Lactation Counselling Certificate",
      institution: "International Childbirth Education Association",
      year: "2020"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every woman deserves to feel heard, understood, and supported throughout her journey."
    },
    {
      icon: Star,
      title: "Evidence-Based Practice",
      description: "Using the latest research and proven techniques to deliver the most effective treatments."
    },
    {
      icon: Users,
      title: "Individualized Approach",
      description: "Recognizing that every woman's experience is unique and tailoring care accordingly."
    },
    {
      icon: CheckCircle,
      title: "Holistic Wellness",
      description: "Addressing not just physical symptoms, but overall well-being and quality of life."
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-sage-beige to-peach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-soft-brown">
                About Sarah Chen, PT
              </h1>
              <p className="text-xl text-warm-gray leading-relaxed">
                Passionate about empowering women through specialized physiotherapy care 
                during the most transformative time in their lives.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sarah Chen, Physical Therapist"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <Heart className="h-8 w-8 text-soft-brown" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-brown mb-6">
              My Journey & Philosophy
            </h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-warm-gray leading-relaxed">
            <p className="text-xl mb-6">
              My passion for maternal wellness began during my own pregnancy journey, where I experienced 
              firsthand the physical and emotional challenges that women face during this transformative time.
            </p>
            
            <p className="mb-6">
              After completing my Master's in Physical Therapy at the University of Toronto, I knew I wanted 
              to specialize in women's health. I've dedicated the past 8 years to advancing my expertise in 
              maternal wellness, earning specialized certifications and working with over 500 women throughout 
              their pregnancy, birth, and postpartum experiences.
            </p>
            
            <p className="mb-6">
              What drives me every day is witnessing the incredible strength and resilience of the women I work with. 
              My approach combines evidence-based treatment with genuine empathy, creating a safe space where women 
              can heal, grow, and thrive during one of life's most significant transitions.
            </p>
            
            <p>
              I believe that every woman deserves personalized, compassionate care that honors her unique experience 
              and supports her individual goals. Whether you're preparing for birth, recovering postpartum, or 
              navigating any aspect of maternal wellness, I'm here to guide and support you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-sage-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-brown mb-4">
              Education & Certifications
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              Committed to continuous learning and staying current with the latest research 
              and best practices in maternal wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualifications.map((qual, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-soft-pink p-3 rounded-xl">
                    <qual.icon className="h-6 w-6 text-soft-brown" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-soft-brown mb-1">{qual.title}</h3>
                    <p className="text-warm-gray mb-1">{qual.institution}</p>
                    <p className="text-sm text-warm-gray font-medium">{qual.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-brown mb-4">
              My Core Values
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              These principles guide every interaction and treatment, ensuring you receive 
              the highest quality of care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-lavender p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-soft-pink transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-soft-brown mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-soft-brown mb-3">{value.title}</h3>
                <p className="text-warm-gray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20 bg-gradient-to-r from-peach to-soft-pink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-brown mb-6">
            Beyond the Clinic
          </h2>
          <div className="bg-white bg-opacity-70 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-warm-gray leading-relaxed mb-6">
              When I'm not in the clinic, you'll find me spending time with my own family, 
              practicing yoga, or exploring Toronto's beautiful parks. As a mother myself, 
              I understand the joys and challenges of this journey on a personal level.
            </p>
            <p className="text-lg text-warm-gray leading-relaxed">
              I'm also passionate about community education and regularly speak at prenatal 
              classes and women's health workshops, sharing knowledge and empowering women 
              to take an active role in their health and wellness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;