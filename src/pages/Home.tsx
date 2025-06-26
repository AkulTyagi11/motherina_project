import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Calendar, ArrowRight, Baby, Users, Award, Shield } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: "Women's Health Physiotherapy",
      description: "Specialized care for pelvic floor dysfunction, prenatal and postnatal recovery, and women's specific health needs.",
      color: "bg-soft-pink"
    },
    {
      icon: Baby,
      title: "Childbirth Education",
      description: "Comprehensive preparation for labor and delivery, including breathing techniques and pain management strategies.",
      color: "bg-peach"
    },
    {
      icon: Users,
      title: "Perinatal Fitness",
      description: "Safe and effective exercise programs designed for pregnancy and postpartum recovery stages.",
      color: "bg-lavender"
    },
    {
      icon: Shield,
      title: "Lactation Counselling",
      description: "Expert guidance and support for successful breastfeeding, addressing common challenges and concerns.",
      color: "bg-sage-beige"
    }
  ];

  const testimonials = [
    {
      name: "Emily Johnson",
      text: "Sarah's expertise and compassionate care made my recovery journey so much smoother. I couldn't have asked for better support.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      text: "The childbirth education classes were incredibly informative and helped me feel prepared and confident for delivery.",
      rating: 5
    },
    {
      name: "Amanda Rodriguez",
      text: "Professional, knowledgeable, and truly caring. Sarah goes above and beyond for her patients.",
      rating: 5
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-beige via-peach to-soft-pink min-h-screen flex items-center">
        <div className="absolute inset-0 bg-white bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-soft-brown leading-tight">
                  Nurturing Your Journey to 
                  <span className="text-soft-pink"> Maternal Wellness</span>
                </h1>
                <p className="text-lg md:text-xl text-warm-gray leading-relaxed max-w-2xl">
                  Compassionate, evidence-based physiotherapy care for women throughout pregnancy, 
                  childbirth, and beyond. Supporting your body's incredible journey with expertise and empathy.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-soft-brown text-white text-lg font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Your Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-soft-brown text-soft-brown text-lg font-semibold rounded-full hover:bg-soft-brown hover:text-white transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-soft-brown">500+</div>
                  <div className="text-sm text-warm-gray">Happy Mothers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-soft-brown">8+</div>
                  <div className="text-sm text-warm-gray">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-soft-brown">98%</div>
                  <div className="text-sm text-warm-gray">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1560159/pexels-photo-1560159.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Maternal wellness consultation"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-soft-pink p-4 rounded-full shadow-lg">
                  <Heart className="h-8 w-8 text-soft-brown" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-brown mb-4">
              Comprehensive Maternal Care Services
            </h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              From pregnancy preparation to postpartum recovery, I offer specialized care 
              tailored to support you through every stage of your maternal journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`${service.color} p-4 rounded-xl mb-4 inline-block group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-soft-brown" />
                </div>
                <h3 className="text-xl font-semibold text-soft-brown mb-3">{service.title}</h3>
                <p className="text-warm-gray leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-soft-pink text-soft-brown font-semibold rounded-full hover:bg-peach transition-colors duration-300"
            >
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-sage-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-brown">
                Meet Shalinta Tyagi, PT
              </h2>
              <p className="text-lg text-warm-gray leading-relaxed">
                With over 8 years of specialized experience in women's health physiotherapy, 
                I'm passionate about providing personalized, evidence-based care that empowers 
                women throughout their maternal journey.
              </p>
              <p className="text-warm-gray leading-relaxed">
                My approach combines clinical expertise with genuine compassion, ensuring that 
                every woman feels supported, understood, and confident in her care.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Award className="h-5 w-5 text-soft-brown" />
                  <span className="text-sm text-warm-gray">Licensed PT Ontario</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-5 w-5 text-soft-brown" />
                  <span className="text-sm text-warm-gray">Women's Health Certified</span>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-soft-brown text-white font-semibold rounded-full hover:bg-opacity-90 transition-colors duration-300"
              >
                Learn More About Me
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sarah Chen, Physical Therapist"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-soft-pink p-2 rounded-full">
                    <Heart className="h-6 w-6 text-soft-brown" />
                  </div>
                  <div>
                    <div className="font-semibold text-soft-brown">500+ Mothers</div>
                    <div className="text-sm text-warm-gray">Successfully Treated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-brown mb-4">
              What Mothers Are Saying
            </h2>
            <p className="text-lg text-warm-gray">
              Real experiences from the wonderful women I've had the privilege to support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-sage-beige rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-warm-gray leading-relaxed mb-4">"{testimonial.text}"</p>
                <div className="font-semibold text-soft-brown">{testimonial.name}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center px-8 py-3 bg-soft-pink text-soft-brown font-semibold rounded-full hover:bg-peach transition-colors duration-300"
            >
              Read More Stories
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-soft-pink via-peach to-lavender">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-soft-brown mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-warm-gray mb-8 max-w-2xl mx-auto">
            Take the first step towards optimal maternal wellness. Book your consultation 
            today and let's create a personalized care plan just for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-4 bg-soft-brown text-white text-lg font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            <Calendar className="h-6 w-6 mr-3" />
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;