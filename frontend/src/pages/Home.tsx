import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Star, 
  Calendar, 
  ArrowRight, 
  Baby, 
  Users, 
  Award, 
  Shield, 
  CheckCircle, 
  BookOpen, 
  Sparkles, 
  Activity, 
  ShoppingBag, 
  FileText 
} from 'lucide-react';

const Home = () => {
  const whatWeDo = [
    {
      icon: Heart,
      title: "Consultation",
      description: "Diet, Breastfeeding / Lactation, Emotional Wellness & Physical Assessment.",
      link: "/services"
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Postpartum recovery guides, birth preparation classes, seminars & downloads.",
      link: "/services"
    },
    {
      icon: Sparkles,
      title: "Therapies",
      description: "Self Care, Postpartum Therapeutic Massages, Postnatal Yoga & Physiotherapy.",
      link: "/services"
    },
    {
      icon: Baby,
      title: "Dai-Maa Care",
      description: "Trained 40-Day postpartum birth assistance, newborn handling & mother care.",
      link: "/services"
    },
    {
      icon: ShoppingBag,
      title: "Maternal Products",
      description: "Curated mother care, baby development essentials & postpartum fitness gear.",
      link: "/services"
    },
    {
      icon: FileText,
      title: "Health Check-Up",
      description: "Physical recovery assessments, pelvic examinations, and recovery monitoring.",
      link: "/services"
    }
  ];

  const testimonials = [
    {
      name: "Poonam, 31 Years",
      role: "First-time Mother (Gurgaon)",
      text: "Dr. Shalinta Tyagi's lactation and postpartum guidance was a lifesaver during my first month. Her exercises helped eliminate my debilitating back pain and gave me so much confidence.",
      rating: 5
    },
    {
      name: "Deepali, 34 Years",
      role: "Mother of Two (Delhi NCR)",
      text: "The pelvic floor and abdominal rehab program completely resolved my incontinence after delivery. Dr. Shalinta takes time to listen to every concern with utmost warmth and medical precision.",
      rating: 5
    },
    {
      name: "Mehak, 29 Years",
      role: "New Mother (Online Consult)",
      text: "I was struggling with baby blues and severe latching trouble. Dr. Shalinta's compassionate care and actionable advice turned our entire breastfeeding experience around.",
      rating: 5
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Top Tagline Banner */}
      <div className="bg-soft-brown text-white py-2 px-4 text-center text-xs md:text-sm font-medium tracking-wide">
        "Customized guidance for postpartum care tailored to your unique needs and preferences"
      </div>

      {/* Hero Section */}
      <section className="relative flex items-center min-h-[85vh] bg-gradient-to-br from-sage-beige/50 via-peach/30 to-soft-pink/30">
        <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-soft-brown bg-white/80 backdrop-blur-sm rounded-full border border-peach/50">
                Dr. Shalinta Tyagi • 16+ Years Clinical Excellence
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-soft-brown">
                One Stop for <span className="text-soft-pink">Postnatal Mother Care</span>
              </h1>
              <p className="font-serif text-xl sm:text-2xl text-soft-brown/90 italic">
                From Birth Preparation to Birth Recovery & Beyond
              </p>
              <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-warm-gray">
                Personalized maternal wellness, women's health physiotherapy, lactation counselling, and birth education designed to support, heal, and celebrate the mother's body and mind.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 rounded-full bg-soft-brown hover:bg-opacity-90 shadow-lg hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 border-2 rounded-full border-soft-brown text-soft-brown hover:bg-soft-brown hover:text-white"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-peach/40 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-soft-brown">16+</div>
                  <div className="text-xs text-warm-gray font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-soft-brown">1000+</div>
                  <div className="text-xs text-warm-gray font-medium">Mothers Healed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-soft-brown">100%</div>
                  <div className="text-xs text-warm-gray font-medium">Personalized Care</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="overflow-hidden rounded-3xl shadow-2xl bg-white border-4 border-white aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Postnatal Mother & Newborn Care"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-peach/30 max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-full bg-soft-pink">
                      <Heart className="w-5 h-5 text-soft-brown" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-soft-brown">Dr. Shalinta Tyagi</p>
                      <p className="text-[11px] text-warm-gray">Women's Health PT & Lactation Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Help Banner */}
      <section className="bg-gradient-to-r from-soft-pink/40 via-peach/30 to-lavender/40 py-8 px-4 text-center border-y border-peach/40">
        <div className="max-w-4xl mx-auto space-y-3">
          <h3 className="font-serif text-2xl font-bold text-soft-brown">Need Instant Help?</h3>
          <p className="text-warm-gray text-sm md:text-base max-w-2xl mx-auto">
            You're not alone in your postpartum journey. We're here to provide the personalized consultation and clinical support you need to heal and recover.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-soft-brown text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-opacity-90 shadow-md"
            >
              Book Consultation Now
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-soft-brown mb-2">Our Capabilities</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-soft-brown mb-4">
              What We Do
            </h2>
            <p className="text-base text-warm-gray">
              A complete ecosystem of clinical support, physical therapies, and compassionate guidance tailored for every stage of your motherhood journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 bg-white border border-peach/20 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3.5 bg-peach/30 rounded-2xl w-fit text-soft-brown group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-soft-brown">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-warm-gray">{item.description}</p>
                </div>
                <div className="pt-6 mt-4 border-t border-gray-100">
                  <Link
                    to={item.link}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-soft-brown group-hover:text-soft-pink transition-colors"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophy Section: Why Motherina? */}
      <section className="py-20 bg-gradient-to-br from-sage-beige/30 via-peach/20 to-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-14 border border-peach/40 shadow-sm">
            <div className="grid items-center grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-soft-brown bg-soft-pink/40 rounded-full">
                  Our Core Philosophy
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-soft-brown leading-tight">
                  Why Motherina?<br />
                  <span className="text-soft-pink">Because We Understand That SHE is as Important as HER BABY</span>
                </h2>
                <div className="space-y-4 text-warm-gray text-base leading-relaxed">
                  <p>
                    Pregnancy is one of the most thrilling yet challenging times in a woman's life, and what follows is even tougher. The <strong>first 40 days after giving birth</strong> are particularly demanding for the mother since she is still mentally and physically recovering from delivery while also caring for the baby as it adjusts to life outside the womb.
                  </p>
                  <p>
                    During this period of uncertainty, most mothers and those around her unintentionally forget that her body, like the baby, has undergone a rebirth, and all of her emotions and feelings are valid too. <strong>She is just as important as her baby.</strong>
                  </p>
                  <p>
                    At Motherina, we understand that she has a thousand questions racing through her mind:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-peach/20 rounded-xl text-xs font-medium text-soft-brown flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-soft-brown flex-shrink-0" />
                      <span>"When will I get back my pre-pregnancy body?"</span>
                    </div>
                    <div className="p-3 bg-peach/20 rounded-xl text-xs font-medium text-soft-brown flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-soft-brown flex-shrink-0" />
                      <span>"Am I lactating enough for my baby?"</span>
                    </div>
                    <div className="p-3 bg-peach/20 rounded-xl text-xs font-medium text-soft-brown flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-soft-brown flex-shrink-0" />
                      <span>"How do I heal my pelvic floor and core?"</span>
                    </div>
                    <div className="p-3 bg-peach/20 rounded-xl text-xs font-medium text-soft-brown flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-soft-brown flex-shrink-0" />
                      <span>"Am I being a good mother?"</span>
                    </div>
                  </div>
                  <p>
                    We are here to help her find the answers to them all under one roof. We provide compassionate and focused clinical care, educating and guiding mothers through every single stage of new motherhood.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl shadow-xl aspect-square border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Mother and Baby Wellness"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight Preview */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden shadow-xl rounded-3xl aspect-[4/3] max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1594824813583-059a93649514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Shalinta Tyagi"
                  className="object-cover w-full h-full object-top"
                />
              </div>
              <div className="absolute p-5 bg-white shadow-xl -bottom-6 -right-6 rounded-2xl border border-peach/30 max-w-xs">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-soft-brown" />
                  <div>
                    <div className="font-serif font-bold text-soft-brown">Dr. Shalinta Tyagi</div>
                    <div className="text-xs text-warm-gray">16+ Yrs Postnatal Rehab Specialist</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-soft-brown">Clinical Leadership</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-soft-brown">
                Meet Dr. Shalinta Tyagi
              </h2>
              <p className="text-base leading-relaxed text-warm-gray">
                Dr. Shalinta Tyagi is a Women's Health Physiotherapist, Childbirth Educator certified with <strong>Lamaze International</strong> and the <strong>Hypnobirthing Institute</strong>, and a certified Lactation Counsellor.
              </p>
              <p className="text-base leading-relaxed text-warm-gray">
                With 16 years of clinical experience, she specializes in assisting would-be and newly delivered mothers at all stages of parenthood—from posture and pregnancy exercises to childbirth education, lactation management, and postnatal physical rehabilitation.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 font-semibold text-white rounded-full bg-soft-brown hover:bg-opacity-90 shadow-md text-sm"
                >
                  Read Full Bio & Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 font-semibold border border-soft-brown text-soft-brown rounded-full hover:bg-soft-brown hover:text-white text-sm"
                >
                  Book with Dr. Shalinta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-sage-beige/30">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <h2 className="mb-3 font-serif text-3xl md:text-4xl font-bold text-soft-brown">
              What Mothers Are Saying
            </h2>
            <p className="text-base text-warm-gray">
              Heartfelt experiences from mothers guided and cared for by Dr. Shalinta Tyagi.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl border border-peach/30 shadow-sm flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-warm-gray italic">"{t.text}"</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-serif font-bold text-soft-brown text-base">{t.name}</div>
                  <div className="text-xs text-warm-gray">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center px-8 py-3 font-semibold rounded-full bg-white text-soft-brown hover:bg-peach/30 border border-peach/50 shadow-sm text-sm"
            >
              Read More Stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 bg-soft-brown text-white text-center">
        <div className="max-w-4xl px-4 mx-auto space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Take the First Step Toward Gentle Postpartum Recovery
          </h2>
          <p className="text-peach text-base md:text-lg max-w-2xl mx-auto">
            Online consultations available worldwide via Zoom & Google Meet, plus in-person consultations in Gurgaon & Delhi NCR.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-4 text-base font-bold transition-all duration-300 rounded-full bg-white text-soft-brown hover:bg-peach shadow-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
