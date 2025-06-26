import React from 'react';
import { Star, Quote, Heart, Baby, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      service: "Women's Health Physiotherapy",
      text: "Sarah's expertise and compassionate care made my recovery journey so much smoother. After struggling with pelvic floor issues postpartum, she helped me regain my confidence and strength. Her personalized approach and genuine care made all the difference.",
      rating: 5,
      image: "https://images.pexels.com/photos/3985254/pexels-photo-3985254.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Lisa Chen",
      service: "Childbirth Education",
      text: "The childbirth education classes were incredibly informative and helped me feel prepared and confident for delivery. Sarah's calm presence and thorough explanations eased my anxieties. I felt empowered and ready for birth.",
      rating: 5,
      image: "https://images.pexels.com/photos/1556663/pexels-photo-1556663.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Amanda Rodriguez",
      service: "Perinatal Fitness",
      text: "Professional, knowledgeable, and truly caring. Sarah goes above and beyond for her patients. The prenatal fitness program helped me stay strong throughout pregnancy and bounce back quickly after delivery.",
      rating: 5,
      image: "https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Jennifer Kim",
      service: "Lactation Counselling",
      text: "I was struggling with breastfeeding and felt overwhelmed. Sarah's lactation counselling gave me the tools and confidence I needed. Her patient guidance made all the difference in our nursing journey.",
      rating: 5,
      image: "https://images.pexels.com/photos/3985244/pexels-photo-3985244.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sarah Mitchell",
      service: "Hypnobirthing",
      text: "The hypnobirthing course transformed my perspective on childbirth. I went from being terrified to feeling excited and confident. The relaxation techniques were invaluable during labor.",
      rating: 5,
      image: "https://images.pexels.com/photos/5473184/pexels-photo-5473184.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Maria Santos",
      service: "Women's Health Physiotherapy",
      text: "After my second baby, I thought incontinence was just something I'd have to live with. Sarah proved me wrong! Her treatment plan was effective and her approach was so understanding and professional.",
      rating: 5,
      image: "https://images.pexels.com/photos/1560159/pexels-photo-1560159.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Rachel Thompson",
      service: "Perinatal Fitness",
      text: "Sarah helped me maintain my fitness throughout pregnancy and guided my return to exercise postpartum. Her knowledge of the female body and pregnancy-specific needs is exceptional.",
      rating: 5,
      image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Priya Patel",
      service: "Childbirth Education",
      text: "As a first-time mom, I had so many questions and fears. Sarah's childbirth education classes addressed everything with patience and expertise. I felt so much more prepared and confident.",
      rating: 5,
      image: "https://images.pexels.com/photos/3985254/pexels-photo-3985254.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Nicole Brown",
      service: "Hypnobirthing",
      text: "The hypnobirthing techniques Sarah taught me helped me have the calm, positive birth experience I dreamed of. I highly recommend her classes to any expecting mother.",
      rating: 5,
      image: "https://images.pexels.com/photos/1556663/pexels-photo-1556663.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const stats = [
    {
      icon: Heart,
      number: "500+",
      label: "Happy Mothers"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Rating"
    },
    {
      icon: Baby,
      number: "98%",
      label: "Success Rate"
    },
    {
      icon: Users,
      number: "8+",
      label: "Years Experience"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-sage-beige to-peach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-soft-brown mb-6">
              What Mothers Are Saying
            </h1>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Real experiences from the wonderful women I've had the privilege to support 
              throughout their maternal wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-soft-pink p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-soft-brown mx-auto" />
                </div>
                <div className="text-3xl font-bold text-soft-brown mb-2">{stat.number}</div>
                <div className="text-warm-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-sage-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-soft-brown">{testimonial.name}</h3>
                    <p className="text-sm text-warm-gray">{testimonial.service}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-soft-pink absolute -top-2 -left-2" />
                  <p className="text-warm-gray leading-relaxed pl-6">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-soft-pink to-peach rounded-3xl p-8 md:p-12 text-center">
            <Quote className="h-16 w-16 text-soft-brown mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-serif text-soft-brown leading-relaxed mb-8">
              "Sarah didn't just treat my symptoms; she empowered me to understand my body and 
              take control of my health. Her holistic approach and genuine care transformed my 
              entire experience of motherhood."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://images.pexels.com/photos/3985254/pexels-photo-3985254.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Featured testimonial"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-soft-brown text-lg">Catherine Walsh</div>
                <div className="text-warm-gray">Mother of Two</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-soft-brown">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Join Our Community of Empowered Mothers
          </h2>
          <p className="text-xl text-peach mb-8 max-w-2xl mx-auto">
            Experience the same compassionate, expert care that has helped hundreds of women 
            feel confident and supported throughout their maternal journey.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-4 bg-white text-soft-brown text-lg font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your Journey Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;