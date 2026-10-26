import React from 'react';
import { Star, Heart, Baby, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FemaleAvatar from '../components/FemaleAvatar';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Poonam, 31 Years",
      location: "Gurgaon",
      service: "Lactation & Postnatal Healing",
      text: "Dr. Shalinta Tyagi's lactation consultation was an absolute blessing. In the initial two weeks after delivery, I had painful latching and felt hopeless. Within just two sessions, she adjusted our positioning, relieved the breast engorgement, and gave me complete confidence. I cannot recommend her enough!",
      rating: 5,
    },
    {
      name: "Deepali, 34 Years",
      location: "Delhi NCR",
      service: "Pelvic Floor & Incontinence Physiotherapy",
      text: "After delivering my second child, I was suffering from bladder leaks whenever I sneezed or laughed. Dr. Shalinta's postpartum physiotherapy and pelvic rehabilitation program restored my core and pelvic stability completely within 6 weeks. She is so thorough, gentle, and medically knowledgeable.",
      rating: 5,
    },
    {
      name: "Mehak, 29 Years",
      location: "Online Consultation",
      service: "Baby Blues & Emotional Support",
      text: "The first 40 days after giving birth were deeply overwhelming. I felt like nobody understood the emotional roller coaster I was on. Dr. Shalinta gave me compassionate, focused care and practical steps to heal emotionally while nursing my newborn. Her sessions truly saved my mental wellness.",
      rating: 5,
    },
    {
      name: "Ritika M., 32 Years",
      location: "Gurgaon",
      service: "Postpartum Rehabilitation & Diastasis Recti",
      text: "I had significant abdominal separation (diastasis recti) and chronic lower back pain. Dr. Shalinta designed a custom exercise progression for me at home. My core is stronger now than it was before pregnancy, and my posture has improved dramatically.",
      rating: 5,
    },
    {
      name: "Ananya S., 28 Years",
      location: "Delhi NCR",
      service: "Lamaze Childbirth Preparation & Hypnobirthing",
      text: "Dr. Shalinta's birth education classes took away all the fear I had about labor. The breathing techniques and partner support exercises she taught my husband and me made my delivery a calm and empowering experience.",
      rating: 5,
    },
    {
      name: "Sneha G., 33 Years",
      location: "Gurgaon",
      service: "Postnatal Yoga & Therapeutic Massage",
      text: "The combination of postpartum therapeutic massage and restorative yoga sessions helped relieve all the muscle stiffness from night-time nursing and sleep deprivation. It gave me the self-care break I desperately needed.",
      rating: 5,
    }
  ];

  const stats = [
    {
      icon: Heart,
      number: "1000+",
      label: "Mothers Supported"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Rating"
    },
    {
      icon: Award,
      number: "16+",
      label: "Years Experience"
    },
    {
      icon: Baby,
      number: "100%",
      label: "Dedicated Care"
    }
  ];

  return (
    <div className="animate-fade-in bg-gradient-to-b from-sage-beige/40 via-white to-sage-beige/30 min-h-screen">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-motherina-pink to-motherina-pink-dark text-white py-2.5 px-4 text-center text-xs md:text-sm font-medium tracking-wide shadow-sm">
        "Customized guidance for postpartum care tailored to your unique needs and preferences"
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-sage-beige/50 via-peach/40 to-motherina-pink/10">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-motherina-pink mb-2">Patient Feedback</p>
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl text-soft-brown">
            Stories of Maternal Healing
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-warm-gray leading-relaxed font-normal">
            Real experiences from mothers who found physical strength, healing, and peace of mind under the clinical care of <strong>Dr. Shalinta Tyagi</strong>.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-peach/50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="p-3 bg-motherina-pink/10 rounded-2xl w-fit mx-auto mb-3 text-motherina-pink">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-soft-brown font-serif">{stat.number}</div>
                <div className="text-xs uppercase tracking-wider font-semibold text-motherina-pink mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-3xl border border-peach/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <span className="px-3 py-1 bg-motherina-pink/10 text-motherina-pink rounded-full text-[11px] font-bold uppercase tracking-wider">
                      {testimonial.location}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-warm-gray italic">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-peach/30 flex items-center space-x-3.5">
                  <FemaleAvatar className="w-12 h-12" />
                  <div>
                    <h3 className="font-serif font-bold text-soft-brown text-base">{testimonial.name}</h3>
                    <p className="text-xs font-medium text-motherina-pink">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-white p-8 md:p-12 rounded-3xl border border-peach/60 max-w-3xl mx-auto shadow-sm space-y-4">
            <span className="px-3 py-1 bg-motherina-pink/10 text-motherina-pink rounded-full text-xs font-bold uppercase tracking-wider">
              Start Your Journey
            </span>
            <h2 className="font-serif text-3xl font-bold text-soft-brown">Ready to Experience Personalized Postpartum Care?</h2>
            <p className="text-sm text-warm-gray leading-relaxed max-w-xl mx-auto">
              Book a consultation with Dr. Shalinta Tyagi online worldwide or at our partner clinics and home visits in Gurgaon/Delhi NCR.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-motherina-pink hover:bg-motherina-pink-dark text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Schedule Your Session Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
