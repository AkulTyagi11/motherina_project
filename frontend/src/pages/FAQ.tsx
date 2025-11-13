import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Baby, Heart, Users, Shield } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: "General Questions",
      icon: HelpCircle,
      color: "bg-soft-pink",
      questions: [
        {
          question: "What is women's health physiotherapy?",
          answer: "Women's health physiotherapy is a specialized area of physiotherapy that focuses on the unique health needs of women throughout their lives. This includes pregnancy, childbirth, postpartum recovery, pelvic floor dysfunction, and other women-specific health issues. Our treatments are evidence-based and tailored to each woman's individual needs."
        },
        {
          question: "Do I need a referral to see you?",
          answer: "In Ontario, you do not need a referral to see a physiotherapist. You can book directly with me for an assessment and treatment. However, if you have extended health benefits, check with your insurance provider as some may require a doctor's referral for coverage."
        },
        {
          question: "What should I expect during my first visit?",
          answer: "Your first visit will include a comprehensive assessment where we'll discuss your health history, current concerns, and goals. I'll perform appropriate physical examinations and work with you to develop a personalized treatment plan. Please wear comfortable clothing and bring any relevant medical information."
        },
        {
          question: "How many sessions will I need?",
          answer: "The number of sessions varies depending on your individual condition and goals. Some women see improvement in 2-3 sessions, while others may benefit from ongoing care over several months. I'll regularly assess your progress and adjust your treatment plan accordingly."
        }
      ]
    },
    {
      category: "Pregnancy & Prenatal Care",
      icon: Baby,
      color: "bg-peach",
      questions: [
        {
          question: "When should I start prenatal physiotherapy?",
          answer: "You can start prenatal physiotherapy at any stage of pregnancy. Many women benefit from starting in the first trimester to address early symptoms like nausea, fatigue, and postural changes. However, it's never too late to start, and care can be beneficial right up until delivery."
        },
        {
          question: "Is exercise safe during pregnancy?",
          answer: "Yes, exercise is generally safe and beneficial during pregnancy when done appropriately. I'll assess your individual situation and create a safe, effective exercise program tailored to your pregnancy stage, fitness level, and any specific conditions you may have."
        },
        {
          question: "Can physiotherapy help with pregnancy-related pain?",
          answer: "Absolutely! Physiotherapy can effectively address common pregnancy discomforts including back pain, pelvic girdle pain, sciatica, carpal tunnel syndrome, and other musculoskeletal issues. Treatment includes manual therapy, exercise, and education on posture and movement."
        },
        {
          question: "What is pelvic floor preparation for birth?",
          answer: "Pelvic floor preparation involves learning about your pelvic floor muscles, how to coordinate them during labor, and techniques for optimal positioning during delivery. This can help reduce the risk of complications and support recovery after birth."
        }
      ]
    },
    {
      category: "Postpartum Care",
      icon: Heart,
      color: "bg-lavender",
      questions: [
        {
          question: "When can I start postpartum physiotherapy?",
          answer: "You can start gentle postpartum physiotherapy as early as 24-48 hours after delivery, depending on your birth experience. We'll begin with breathing exercises and gentle movement, gradually progressing as you heal. A comprehensive assessment is typically done around 6-8 weeks postpartum."
        },
        {
          question: "Will physiotherapy help with postpartum depression or anxiety?",
          answer: "While I don't treat mental health conditions directly, exercise and physical activity can be beneficial for mood and well-being. If you're experiencing postpartum depression or anxiety, please speak with your healthcare provider. I can work as part of your support team to help you feel stronger physically."
        },
        {
          question: "How long does postpartum recovery take?",
          answer: "Recovery is highly individual and depends on factors like your birth experience, overall health, and whether this is your first baby. Physical recovery typically takes 6-12 months, but some changes may be permanent. The good news is that targeted physiotherapy can help optimize your recovery at any stage."
        },
        {
          question: "Can I exercise while breastfeeding?",
          answer: "Yes, exercise is safe while breastfeeding and can actually help with energy levels and mood. I'll help you choose appropriate exercises and timing around feeding schedules. It's important to stay well-hydrated and fuel your body properly for both exercise and milk production."
        }
      ]
    },
    {
      category: "Specific Treatments",
      icon: Users,
      color: "bg-sage-beige",
      questions: [
        {
          question: "What is pelvic floor dysfunction?",
          answer: "Pelvic floor dysfunction occurs when the muscles of the pelvic floor don't work properly. This can result in incontinence, pelvic organ prolapse, pelvic pain, or difficulty with bowel movements. These issues are common but not normal, and physiotherapy can be very effective in treating them."
        },
        {
          question: "How effective is pelvic floor physiotherapy?",
          answer: "Pelvic floor physiotherapy is highly effective, with success rates of 80-90% for many conditions. Research shows it's often more effective than surgery for certain conditions and should be the first line of treatment for most pelvic floor issues."
        },
        {
          question: "What is diastasis recti and can it be treated?",
          answer: "Diastasis recti is the separation of the abdominal muscles that commonly occurs during pregnancy. With proper assessment and targeted exercises, the function of the abdominal wall can be significantly improved, even if some separation remains."
        },
        {
          question: "Do you provide internal pelvic floor examinations?",
          answer: "Yes, internal pelvic floor examinations are often an important part of assessment and treatment. However, this is always done with your full consent, and I'll explain the process thoroughly. Some conditions can be effectively treated without internal examination if you prefer."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const globalIndex = categoryIndex * 1000 + questionIndex;
    setOpenIndex(openIndex === globalIndex ? null : globalIndex);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-sage-beige to-peach">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="animate-slide-up">
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl text-soft-brown">
              Frequently Asked Questions
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-warm-gray">
              Find answers to common questions about maternal wellness, women's health physiotherapy, 
              and what to expect from your care journey.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-8 space-x-3">
                <div className={`${category.color} p-3 rounded-xl`}>
                  <category.icon className="w-6 h-6 text-soft-brown" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-soft-brown">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 1000 + questionIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="overflow-hidden transition-shadow duration-300 border border-gray-200 rounded-xl hover:shadow-md"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors duration-300 bg-white hover:bg-sage-beige"
                      >
                        <h3 className="pr-4 text-lg font-semibold text-soft-brown">{faq.question}</h3>
                        {isOpen ? (
                          <ChevronUp className="flex-shrink-0 w-5 h-5 text-soft-brown" />
                        ) : (
                          <ChevronDown className="flex-shrink-0 w-5 h-5 text-soft-brown" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4 bg-sage-beige animate-slide-up">
                          <p className="leading-relaxed text-warm-gray">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gradient-to-r from-soft-pink to-peach">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <div className="p-8 bg-white bg-opacity-80 rounded-3xl md:p-12">
            <Shield className="w-16 h-16 mx-auto mb-6 text-soft-brown" />
            <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl text-soft-brown">
              Still Have Questions?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-warm-gray">
              I'm here to address any concerns or questions you may have about your maternal wellness journey. 
              Don't hesitate to reach out for personalized guidance.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 font-semibold text-white transition-colors duration-300 rounded-full bg-soft-brown hover:bg-opacity-90"
              >
                Schedule a Consultation
              </a>
              <a
                href="tel:+14165550123"
                className="inline-flex items-center px-8 py-3 font-semibold transition-colors duration-300 border-2 rounded-full border-soft-brown text-soft-brown hover:bg-soft-brown hover:text-white"
              >
                Call for Quick Questions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-soft-brown">
              Additional Resources
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-warm-gray">
              Helpful information to support your maternal wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 text-center bg-sage-beige rounded-2xl">
              <Baby className="w-12 h-12 mx-auto mb-4 text-soft-brown" />
              <h3 className="mb-3 text-xl font-semibold text-soft-brown">Pregnancy Guidelines</h3>
              <p className="text-warm-gray">
                Evidence-based recommendations for safe exercise and activity during pregnancy.
              </p>
            </div>
            
            <div className="p-6 text-center bg-soft-pink rounded-2xl">
              <Heart className="w-12 h-12 mx-auto mb-4 text-soft-brown" />
              <h3 className="mb-3 text-xl font-semibold text-soft-brown">Postpartum Recovery</h3>
              <p className="text-warm-gray">
                Timeline and expectations for physical recovery after childbirth.
              </p>
            </div>
            
            <div className="p-6 text-center bg-lavender rounded-2xl">
              <Users className="w-12 h-12 mx-auto mb-4 text-soft-brown" />
              <h3 className="mb-3 text-xl font-semibold text-soft-brown">Support Networks</h3>
              <p className="text-warm-gray">
                Local resources and support groups for mothers in the Toronto area.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;