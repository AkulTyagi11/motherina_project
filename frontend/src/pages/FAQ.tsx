import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle, Baby, Heart, Activity, Calendar } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleAccordion = (id: string) => {
    setOpenIndex(prev => prev === id ? null : id);
  };

  const faqCategories = [
    {
      category: "General & Practice Questions",
      icon: HelpCircle,
      color: "bg-soft-pink",
      questions: [
        {
          question: "Who is Dr. Shalinta Tyagi?",
          answer: "Dr. Shalinta Tyagi is a Women's Health Physiotherapist, Childbirth Educator certified with Lamaze International and the Hypnobirthing Institute, and a certified Lactation Counsellor. She has over 16 years of clinical experience specializing in pregnancy exercises, birth preparation, lactation difficulties, and postpartum physical rehabilitation."
        },
        {
          question: "Where are consultations conducted?",
          answer: "We offer both Online Consultations (conducted worldwide via Google Meet, Zoom, and video tools) and In-Person Consultations (available at selected partner clinics in Gurgaon, or through comfortable home visits across Delhi NCR)."
        },
        {
          question: "Do I need a doctor's prescription or referral to consult?",
          answer: "No referral is needed to schedule an initial consultation or educational session with Dr. Shalinta Tyagi. If you have medical reports, ultrasound scans, or notes from your gynecologist/obstetrician, you are welcome to share them so we can tailor your care plan seamlessly."
        },
        {
          question: "How do I book an appointment?",
          answer: "You can book directly through the live Cal.com scheduler on our Contact page. Select your consultation type, pick an available slot that works for you, and you will receive instant confirmation."
        }
      ]
    },
    {
      category: "Lactation & Postpartum Recovery",
      icon: Heart,
      color: "bg-peach",
      questions: [
        {
          question: "When should I seek help from a lactation counsellor?",
          answer: "You should seek lactation guidance whenever breastfeeding feels painful, if you experience tender/cracked nipples, latching difficulty, concerns about insufficient or overabundant milk supply, or if you need guidance on pumping and returning to work. Early guidance prevents nipple trauma and ensures your baby gains weight smoothly."
        },
        {
          question: "What is the 'first 40 days' recovery concept at Motherina?",
          answer: "The initial 40 days following childbirth are a critical physiological and emotional transition. While family attention naturally shifts to the baby, the mother's body has undergone a major physical event and hormonal drop. Motherina's ecosystem provides dedicated postnatal physical rehab, pelvic health support, diet planning, and emotional reassurance so the mother heals comprehensively."
        },
        {
          question: "Can physiotherapy help with postpartum urinary incontinence?",
          answer: "Yes, absolutely. Bladder leaks when coughing, sneezing, or jumping are common after pregnancy due to stretched pelvic floor muscles and hormonal changes, but they are treatable. Targeted pelvic floor physical therapy and biofeedback exercises safely restore muscular continence and pelvic stability."
        },
        {
          question: "What is Diastasis Recti and how is it repaired?",
          answer: "Diastasis Recti is the separation of the rectus abdominis muscles caused by the expanding uterus during pregnancy. Traditional crunches or sit-ups can worsen this separation. Dr. Shalinta evaluates the depth and width of separation and prescribes safe, progressive transverse abdominis and core rehabilitation exercises."
        }
      ]
    },
    {
      category: "Birth Education & Therapies",
      icon: Baby,
      color: "bg-lavender",
      questions: [
        {
          question: "What is Lamaze Childbirth Education?",
          answer: "Lamaze education empowers expecting parents with evidence-based information about normal physiological labor, stages of birth, non-pharmacological pain management, relaxation techniques, and partner support strategies so you approach labor with confidence rather than anxiety."
        },
        {
          question: "How do therapeutic postpartum massages differ from regular salon massages?",
          answer: "Postpartum therapeutic massages are tailored specifically for a healing postpartum body. They focus on relieving musculoskeletal fatigue from nursing, increasing circulation, promoting lymphatic drainage of pregnancy fluid retention (edema), and lowering stress hormones without putting undue pressure on healing abdominal or pelvic areas."
        },
        {
          question: "What are Dai-Maa / Japa care services?",
          answer: "Our Dai-Maa and Japa services provide trained, compassionate in-home care for the mother and newborn during the 40-day postpartum window. They assist with infant handling, bathing, diapering, traditional mother massages, and customized daycare support across Gurgaon and Delhi NCR."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-beige/30 via-white to-sage-beige/20 animate-fade-in">
      {/* Top Tagline Banner */}
      <div className="bg-soft-brown text-white py-2 px-4 text-center text-xs md:text-sm font-medium tracking-wide">
        "Customized guidance for postpartum care tailored to your unique needs and preferences"
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-sage-beige/40 to-peach/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-soft-brown mb-2">Got Questions?</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-soft-brown mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our maternal health consultations, pelvic floor therapy, lactation counselling, and home visits with Dr. Shalinta Tyagi.
          </p>
        </div>
      </section>

      {/* Accordion Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqCategories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <div className="flex items-center space-x-3 pb-2 border-b border-peach/50">
                <div className={`p-2 rounded-xl ${cat.color} text-soft-brown`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-soft-brown">{cat.category}</h2>
              </div>

              <div className="space-y-3">
                {cat.questions.map((q, qIdx) => {
                  const itemId = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === itemId;

                  return (
                    <div
                      key={qIdx}
                      className="bg-white rounded-2xl border border-peach/30 overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        onClick={() => toggleAccordion(itemId)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between space-x-4 hover:bg-peach/10 transition-colors"
                      >
                        <span className="font-serif font-bold text-base md:text-lg text-soft-brown">
                          {q.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-soft-brown flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-warm-gray flex-shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-sm md:text-base text-warm-gray leading-relaxed border-t border-gray-100">
                          {q.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Bottom Card */}
          <div className="p-8 bg-white rounded-3xl border border-peach/40 text-center shadow-sm space-y-4">
            <h3 className="font-serif text-2xl font-bold text-soft-brown">Have a Specific Health Question?</h3>
            <p className="text-sm text-warm-gray max-w-xl mx-auto leading-relaxed">
              Dr. Shalinta Tyagi is here to answer any questions regarding your postpartum recovery, pelvic health, or breastfeeding journey.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-soft-brown text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-opacity-90 shadow-md"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
