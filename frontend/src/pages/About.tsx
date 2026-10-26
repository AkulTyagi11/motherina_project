import React from 'react';
import { Award, Heart, BookOpen, Clock, CheckCircle, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const credentials = [
    {
      title: "Women's Health Physiotherapist",
      desc: "Specialized in pelvic floor rehabilitation, posture correction, and musculoskeletal recovery.",
      icon: Award
    },
    {
      title: "Childbirth Educator (Lamaze)",
      desc: "Certified through Lamaze International, guiding parents through physiological birth preparation.",
      icon: BookOpen
    },
    {
      title: "Hypnobirthing Educator",
      desc: "Certified by the Hypnobirthing Institute for deep relaxation and fear-release techniques.",
      icon: Sparkles
    },
    {
      title: "Lactation Counsellor",
      desc: "Expert guidance for latching, gentle positioning, milk supply optimization, and breastfeeding comfort.",
      icon: Heart
    },
    {
      title: "Postnatal Rehab Specialist",
      desc: "Dedicated to helping newly delivered mothers overcome physical discomforts and abdominal separation.",
      icon: Shield
    },
    {
      title: "16+ Years Clinical Experience",
      desc: "Over 16 years of dedicated practice supporting hundreds of mothers throughout pregnancy and beyond.",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-beige/40 via-white to-sage-beige/30 animate-fade-in">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-motherina-pink to-motherina-pink-dark text-white py-2.5 px-4 text-center text-xs md:text-sm font-medium tracking-wide shadow-sm">
        "Customized guidance for postpartum care tailored to your unique needs and preferences"
      </div>

      {/* Hero Section */}
      <div className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-motherina-pink mb-2">Founder & Specialist</p>
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl text-soft-brown">
            Dr. Shalinta Tyagi
          </h1>
          <p className="text-lg md:text-xl text-warm-gray leading-relaxed max-w-2xl mx-auto font-normal">
            Women's Health Physiotherapist, Lamaze & Hypnobirthing Childbirth Educator, and Lactation Counsellor
          </p>
        </div>
      </div>

      {/* Main Founder Profile & Bio */}
      <div className="px-4 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-peach/60">
          {/* Image Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-2xl shadow-xl aspect-[4/5] bg-peach/30 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1594824813583-059a93649514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Shalinta Tyagi"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-lg border border-peach/40 flex items-center space-x-3">
                <div className="p-2.5 rounded-full bg-motherina-pink/10 text-motherina-pink">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-soft-brown font-serif">16+ Years</div>
                  <div className="text-xs text-motherina-pink font-semibold">Clinical Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-motherina-pink bg-motherina-pink/10 rounded-full">
              Meet Our Founder
            </div>
            <h2 className="font-serif text-3xl font-bold text-soft-brown">
              Supporting Mothers Through Every Stage of Parenthood
            </h2>
            <div className="space-y-4 text-warm-gray text-base md:text-lg leading-relaxed">
              <p>
                <strong>Dr. Shalinta Tyagi</strong> is a Women's Health Physiotherapist, Childbirth Educator (certified through Lamaze International and the Hypnobirthing Institute), and a certified Lactation Counsellor.
              </p>
              <p>
                She brings over <strong>16 years of hands-on clinical experience</strong> working directly with pregnant and postnatal mothers, guiding them with warmth, empathy, and scientific expertise throughout their pregnancy and new motherhood weeks.
              </p>
              <p>
                From advising on posture, musculoskeletal alignment, and therapeutic exercises during pregnancy to conducting birth preparation and lactation classes, Dr. Shalinta assists would-be parents at every milestone.
              </p>
              <p>
                As a dedicated <strong>postnatal rehabilitation specialist</strong>, she empowers newly delivered mothers to heal core muscles, resolve pelvic floor issues, and overcome physical and emotional discomforts during the crucial recovery window.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-3.5 font-semibold text-white transition-all duration-300 rounded-full bg-motherina-pink hover:bg-motherina-pink-dark shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-7 py-3.5 font-semibold transition-colors duration-300 border-2 border-soft-brown text-soft-brown rounded-full hover:bg-soft-brown hover:text-white text-sm"
              >
                Explore Specialized Services
              </Link>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-motherina-pink">Proven Expertise</span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-soft-brown">Areas of Specialization</h2>
            <p className="text-base md:text-lg text-warm-gray max-w-2xl mx-auto">
              Comprehensive clinical qualifications dedicated exclusively to maternal wellness, physiological birth, and postpartum healing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {credentials.map((cred, index) => (
              <div key={index} className="p-7 bg-white rounded-3xl shadow-sm border border-peach/50 hover:shadow-md hover:border-motherina-pink/30 transition-all group">
                <div className="p-3 bg-peach rounded-2xl w-fit text-motherina-pink mb-4 group-hover:scale-110 transition-transform">
                  <cred.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-soft-brown mb-2">{cred.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{cred.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story / Motherina Ecosystem Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-14 shadow-sm border border-peach/60">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <p className="text-xs uppercase tracking-widest font-bold text-motherina-pink">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-soft-brown">
                Childbirth, Uncertainty, & The Birth of Motherina
              </h2>
            </div>

            <div className="prose prose-lg text-warm-gray leading-relaxed space-y-6">
              <p>
                One of the most exciting times in a woman's life comes with many unknowns and uncertainties:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="flex items-center space-x-3 p-4 bg-peach/30 rounded-2xl border border-peach/60">
                  <CheckCircle className="w-5 h-5 text-motherina-pink flex-shrink-0" />
                  <span className="text-sm font-semibold text-soft-brown">What is the best for healing my body?</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-peach/30 rounded-2xl border border-peach/60">
                  <CheckCircle className="w-5 h-5 text-motherina-pink flex-shrink-0" />
                  <span className="text-sm font-semibold text-soft-brown">Will I be able to breastfeed my baby?</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-peach/30 rounded-2xl border border-peach/60">
                  <CheckCircle className="w-5 h-5 text-motherina-pink flex-shrink-0" />
                  <span className="text-sm font-semibold text-soft-brown">How will I regain strength & pre-pregnancy fitness?</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-peach/30 rounded-2xl border border-peach/60">
                  <CheckCircle className="w-5 h-5 text-motherina-pink flex-shrink-0" />
                  <span className="text-sm font-semibold text-soft-brown">How can I best support my baby and be a good Mom?</span>
                </div>
              </div>
              <p>
                <strong>That's where Motherina comes in.</strong> During pregnancy and after birth, a mother is constantly researching, reading, and asking family and friends for reassurance. She wants to know what guidance, care, and services she will need for an easy transition into parenthood.
              </p>
              <p>
                Motherina creates an ecosystem where she can attain all the advice, clinical consultations, educational guidance, and specialized therapies she needs—all designed by experienced healthcare professionals and industry veterans.
              </p>
              <div className="p-6 bg-peach/40 border-l-4 border-motherina-pink rounded-r-2xl my-6">
                <p className="italic text-soft-brown font-serif text-lg md:text-xl font-bold">
                  "Postpartum is as important as pregnancy—it's about the Mom as much as it's about the baby."
                </p>
              </div>
              <p>
                This 40-day postpartum period is a time of profound physical and emotional changes that every mother and baby goes through. Lots of feelings exist simultaneously: she feels attached and longing for space, optimistic and wary, proud and lonely all at once while adjusting to a new way of life and a changed body.
              </p>
              <p className="font-semibold text-soft-brown text-lg">
                We want women to feel in their hearts and their lives that they are not alone, and that this amazing transformation into becoming a mother is celebrated.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-gradient-to-br from-peach/60 to-motherina-pink/10 rounded-3xl border border-peach/60">
            <span className="text-xs font-bold uppercase tracking-wider text-motherina-pink mb-2 block">Our Vision</span>
            <h3 className="font-serif text-2xl font-bold text-soft-brown mb-3">Trust & Compassionate Healing</h3>
            <p className="text-warm-gray leading-relaxed text-base">
              To create a brand and supportive clinical ecosystem that loving mommies trust unconditionally with taking care of them throughout pregnancy and postpartum recovery.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-br from-lavender/60 to-motherina-pink/10 rounded-3xl border border-peach/60">
            <span className="text-xs font-bold uppercase tracking-wider text-motherina-pink mb-2 block">Our Mission</span>
            <h3 className="font-serif text-2xl font-bold text-soft-brown mb-3">Re-defining Postpartum Care</h3>
            <p className="text-warm-gray leading-relaxed text-base">
              To change the way new Moms and Babies experience postpartum recovery by providing evidence-based services that help heal the body, connect moms, and offer ongoing clinical support.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
