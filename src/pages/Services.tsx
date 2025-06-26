import React from 'react';
import { Heart, Baby, Users, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Women's Health Physiotherapy",
      description: "Specialized care for pelvic floor dysfunction, incontinence, pelvic pain, and women's musculoskeletal health.",
      features: [
        "Pelvic floor assessment and treatment",
        "Prenatal and postnatal care",
        "Incontinence management",
        "Pelvic pain relief",
        "Core strengthening programs",
        "Postural correction"
      ],
      duration: "60-90 minutes",
      price: "From $150",
      color: "bg-soft-pink",
      image: "https://images.pexels.com/photos/5473184/pexels-photo-5473184.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Baby,
      title: "Childbirth Education",
      description: "Comprehensive preparation for labor and delivery, empowering you with knowledge and confidence for your birth experience.",
      features: [
        "Labor stages and what to expect",
        "Breathing and relaxation techniques",
        "Pain management strategies",
        "Birth positions and movement",
        "Partner support guidance",
        "Newborn care basics"
      ],
      duration: "2-3 hour sessions",
      price: "From $200",
      color: "bg-peach",
      image: "https://images.pexels.com/photos/1556663/pexels-photo-1556663.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Users,
      title: "Perinatal Fitness Instruction",
      description: "Safe and effective exercise programs designed specifically for pregnancy and postpartum recovery phases.",
      features: [
        "Prenatal fitness assessments",
        "Customized exercise programs",
        "Core and pelvic floor training",
        "Safe modifications for pregnancy",
        "Postpartum recovery programs",
        "Return to sport guidance"
      ],
      duration: "45-60 minutes",
      price: "From $120",
      color: "bg-lavender",
      image: "https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Shield,
      title: "Lactation Counselling",
      description: "Expert guidance and support for successful breastfeeding, addressing common challenges and promoting bonding.",
      features: [
        "Breastfeeding preparation",
        "Latch assessment and correction",
        "Supply management strategies",
        "Addressing feeding challenges",
        "Pumping and storage guidance",
        "Return to work planning"
      ],
      duration: "60-90 minutes",
      price: "From $130",
      color: "bg-sage-beige",
      image: "https://images.pexels.com/photos/3985244/pexels-photo-3985244.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const additionalService = {
    icon: Heart,
    title: "Hypnobirthing Classes",
    description: "Learn deep relaxation techniques and positive birth preparation through hypnobirthing methods.",
    features: [
      "Self-hypnosis techniques",
      "Fear release and confidence building",
      "Visualization practices",
      "Partner involvement and support",
      "Positive birth affirmations",
      "Relaxation and breathing methods"
    ],
    duration: "4-session course",
    price: "From $350",
    color: "bg-soft-pink",
    image: "https://images.pexels.com/photos/3985254/pexels-photo-3985254.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-sage-beige to-peach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-soft-brown mb-6">
              Comprehensive Maternal Wellness Services
            </h1>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Supporting you through every stage of your maternal journey with specialized, 
              evidence-based care tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className={`${service.color} p-3 rounded-xl`}>
                      <service.icon className="h-8 w-8 text-soft-brown" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-soft-brown">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-warm-gray leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-soft-brown">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-soft-brown flex-shrink-0" />
                          <span className="text-warm-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center space-x-6 pt-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-soft-brown" />
                      <span className="text-warm-gray">{service.duration}</span>
                    </div>
                    <div className="text-xl font-semibold text-soft-brown">{service.price}</div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-soft-brown text-white font-semibold rounded-full hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Book This Service
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-soft-brown">{service.price.split(' ')[1]}</div>
                      <div className="text-sm text-warm-gray">Starting Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Service - Hypnobirthing */}
      <section className="py-20 bg-gradient-to-r from-lavender to-soft-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white bg-opacity-80 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className={`${additionalService.color} p-3 rounded-xl`}>
                    <additionalService.icon className="h-8 w-8 text-soft-brown" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-soft-brown">{additionalService.title}</h2>
                </div>
                
                <p className="text-lg text-warm-gray leading-relaxed">
                  {additionalService.description}
                </p>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-soft-brown">Course Includes:</h3>
                  <ul className="space-y-2">
                    {additionalService.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-soft-brown flex-shrink-0" />
                        <span className="text-warm-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center space-x-6 pt-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-soft-brown" />
                    <span className="text-warm-gray">{additionalService.duration}</span>
                  </div>
                  <div className="text-xl font-semibold text-soft-brown">{additionalService.price}</div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-soft-brown text-white font-semibold rounded-full hover:bg-opacity-90 transition-colors duration-300"
                >
                  Book Hypnobirthing Course
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>

              <div className="relative">
                <img
                  src={additionalService.image}
                  alt={additionalService.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-soft-brown">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-peach mb-8 max-w-2xl mx-auto">
            Let's discuss which services are right for you and create a personalized care plan 
            that supports your unique needs and goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-4 bg-white text-soft-brown text-lg font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            Schedule Your Consultation
            <ArrowRight className="h-6 w-6 ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;