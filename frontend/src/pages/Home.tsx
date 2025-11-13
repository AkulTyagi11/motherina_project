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
      text: "Shalinta's expertise and compassionate care made my recovery journey so much smoother. I couldn't have asked for better support.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      text: "The childbirth education classes were incredibly informative and helped me feel prepared and confident for delivery.",
      rating: 5
    },
    {
      name: "Amanda Rodriguez",
      text: "Professional, knowledgeable, and truly caring. Shalinta goes above and beyond for her patients.",
      rating: 5
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-screen bg-gradient-to-br from-sage-beige via-peach to-soft-pink">
        <div className="absolute inset-0 bg-white bg-opacity-40"></div>
        <div className="relative px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-soft-brown">
                  Nurturing Your Journey to 
                  <span className="text-soft-pink"> Maternal Wellness</span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed md:text-xl text-warm-gray">
                  Compassionate, evidence-based physiotherapy care for women throughout pregnancy, 
                  childbirth, and beyond. Supporting your body's incredible journey with expertise and empathy.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform rounded-full bg-soft-brown hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-1"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold transition-all duration-300 border-2 rounded-full border-soft-brown text-soft-brown hover:bg-soft-brown hover:text-white"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>

              <div className="flex items-center pt-4 space-x-8">
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
              <div className="relative p-8 bg-white shadow-2xl rounded-3xl">
                <img
                  src="https://images.pexels.com/photos/1560159/pexels-photo-1560159.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Maternal wellness consultation"
                  className="object-cover w-full h-80 rounded-2xl"
                />
                <div className="absolute p-4 rounded-full shadow-lg -top-4 -right-4 bg-soft-pink">
                  <Heart className="w-8 h-8 text-soft-brown" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl text-soft-brown">
              Comprehensive Maternal Care Services
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-warm-gray">
              From pregnancy preparation to postpartum recovery, I offer specialized care 
              tailored to support you through every stage of your maternal journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2"
              >
                <div className={`${service.color} p-4 rounded-xl mb-4 inline-block group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-soft-brown" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-soft-brown">{service.title}</h3>
                <p className="leading-relaxed text-warm-gray">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 font-semibold transition-colors duration-300 rounded-full bg-soft-pink text-soft-brown hover:bg-peach"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-sage-beige">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold md:text-4xl text-soft-brown">
                Meet Shalinta Tyagi, PT
              </h2>
              <p className="text-lg leading-relaxed text-warm-gray">
                With over 8 years of specialized experience in women's health physiotherapy, 
                I'm passionate about providing personalized, evidence-based care that empowers 
                women throughout their maternal journey.
              </p>
              <p className="leading-relaxed text-warm-gray">
                My approach combines clinical expertise with genuine compassion, ensuring that 
                every woman feels supported, understood, and confident in her care.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Award className="w-5 h-5 text-soft-brown" />
                  <span className="text-sm text-warm-gray">Licensed PT Ontario</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-5 h-5 text-soft-brown" />
                  <span className="text-sm text-warm-gray">Women's Health Certified</span>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 font-semibold text-white transition-colors duration-300 rounded-full bg-soft-brown hover:bg-opacity-90"
              >
                Learn More About Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Shalinta Tyagi, Maternal Wellness Instructor"
                className="object-cover w-full shadow-xl h-96 rounded-2xl"
              />
              <div className="absolute p-6 bg-white shadow-lg -bottom-6 -left-6 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-soft-pink">
                    <Heart className="w-6 h-6 text-soft-brown" />
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl text-soft-brown">
              What Mothers Are Saying
            </h2>
            <p className="text-lg text-warm-gray">
              Real experiences from the wonderful women I've had the privilege to support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 transition-shadow duration-300 bg-sage-beige rounded-2xl hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4 leading-relaxed text-warm-gray">"{testimonial.text}"</p>
                <div className="font-semibold text-soft-brown">{testimonial.name}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center px-8 py-3 font-semibold transition-colors duration-300 rounded-full bg-soft-pink text-soft-brown hover:bg-peach"
            >
              Read More Stories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-soft-pink via-peach to-lavender">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl text-soft-brown">
            Ready to Begin Your Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-warm-gray">
            Take the first step towards optimal maternal wellness. Book your consultation 
            today and let's create a personalized care plan just for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-4 text-lg font-semibold text-white transition-all duration-300 transform rounded-full bg-soft-brown hover:bg-opacity-90 hover:shadow-xl hover:-translate-y-1"
          >
            <Calendar className="w-6 h-6 mr-3" />
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;