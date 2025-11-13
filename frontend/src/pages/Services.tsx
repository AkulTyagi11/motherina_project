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
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="animate-slide-up">
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl text-soft-brown">
              Comprehensive Maternal Wellness Services
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-warm-gray">
              Supporting you through every stage of your maternal journey with specialized, 
              evidence-based care tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
                      <service.icon className="w-8 h-8 text-soft-brown" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-soft-brown">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-warm-gray">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-soft-brown">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="flex-shrink-0 w-5 h-5 text-soft-brown" />
                          <span className="text-warm-gray">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center pt-4 space-x-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-soft-brown" />
                      <span className="text-warm-gray">{service.duration}</span>
                    </div>
                    <div className="text-xl font-semibold text-soft-brown">{service.price}</div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 font-semibold text-white transition-colors duration-300 rounded-full bg-soft-brown hover:bg-opacity-90"
                  >
                    Book This Service
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full shadow-xl h-80 rounded-2xl"
                  />
                  <div className="absolute p-4 bg-white shadow-lg -bottom-4 -right-4 rounded-xl">
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="p-8 bg-white bg-opacity-80 rounded-3xl md:p-12">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className={`${additionalService.color} p-3 rounded-xl`}>
                    <additionalService.icon className="w-8 h-8 text-soft-brown" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-soft-brown">{additionalService.title}</h2>
                </div>
                
                <p className="text-lg leading-relaxed text-warm-gray">
                  {additionalService.description}
                </p>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-soft-brown">Course Includes:</h3>
                  <ul className="space-y-2">
                    {additionalService.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="flex-shrink-0 w-5 h-5 text-soft-brown" />
                        <span className="text-warm-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center pt-4 space-x-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-soft-brown" />
                    <span className="text-warm-gray">{additionalService.duration}</span>
                  </div>
                  <div className="text-xl font-semibold text-soft-brown">{additionalService.price}</div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 font-semibold text-white transition-colors duration-300 rounded-full bg-soft-brown hover:bg-opacity-90"
                >
                  Book Hypnobirthing Course
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="relative">
                <img
                  src={additionalService.image}
                  alt={additionalService.title}
                  className="object-cover w-full shadow-xl h-80 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-soft-brown">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 font-serif text-3xl font-bold text-white md:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-peach">
            Let's discuss which services are right for you and create a personalized care plan 
            that supports your unique needs and goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-4 text-lg font-semibold transition-all duration-300 transform bg-white rounded-full text-soft-brown hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-1"
          >
            Schedule Your Consultation
            <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;