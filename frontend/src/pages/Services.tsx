import React, { useState } from 'react';
import { 
  Heart, 
  Baby, 
  Sparkles, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Activity, 
  Apple, 
  Smile, 
  BookOpen, 
  ShieldCheck, 
  Users,
  Video,
  Home as HomeIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'consultation' | 'therapy' | 'education' | 'daimaa'>('all');

  const consultationServices = [
    {
      id: "lactation",
      icon: Heart,
      title: "Lactation Consultation",
      subtitle: "Professional Breastfeeding Guidance & Solutions",
      description: "Even though breastfeeding should come naturally to both the mother and the baby, some new moms may run into difficulties. Numerous concerns, such as tender breasts, latching troubles, and insufficient milk production, can make breastfeeding difficult and make you want to give up.",
      details: "Our certified lactation consultation assists you in overcoming such difficulties by offering knowledgeable clinical advice on latching techniques, ergonomic feeding positions, and supply enhancement to make breastfeeding a comfortable, joyful bonding experience.",
      highlights: [
        "Latching assessment, positioning & pain-free latch guidance",
        "Addressing tender, cracked nipples & engorgement",
        "Low or over-supply milk management strategies",
        "Pumping protocols, storage & return-to-work plans"
      ],
      duration: "45-60 min",
      mode: "Online or In-Person (Gurgaon / Home Visits)"
    },
    {
      id: "diet",
      icon: Apple,
      title: "Diet Planning",
      subtitle: "Post-Pregnancy & Lactation Nutritional Care",
      description: "It can be quite challenging to take care of the newborn baby, get used to being a new mother, and heal from the procedure at the same time. While you might feel like shedding those extra kilos and getting back to shape, it's equally important to take care of your nutritional requirements.",
      details: "We formulate balanced post-pregnancy and lactation diets tailored to your metabolic recovery so that you lose weight healthily without depleting your energy reserves or compromising the quality and quantity of your breastmilk.",
      highlights: [
        "Postpartum tissue healing & cellular recovery diets",
        "Lactation-boosting superfoods & hydration tracking",
        "Safe, steady postpartum weight management without energy dips",
        "Gut health, digestion, and micronutrient repletion"
      ],
      duration: "45 min",
      mode: "Online or In-Person"
    },
    {
      id: "physiotherapy",
      icon: Activity,
      title: "Women's Health Physiotherapy",
      subtitle: "Pelvic Floor, Core & Musculoskeletal Alignment",
      description: "While childbirth and pregnancy are incredibly joyful experiences, they also have deep effects on each body. Post-pregnancy your body changes: your muscles, especially those in your pelvic floor and abdomen, stretch significantly. Additionally, pregnancy hormones soften your ligaments.",
      details: "Doing targeted exercises and forming healthy movement habits under Dr. Shalinta Tyagi's guidance helps you strengthen core muscles, realign your posture, protect your joints, and resolve postpartum back, hip, and pelvic discomfort.",
      highlights: [
        "Pelvic floor rehabilitation (incontinence, prolapse risk, pelvic pain)",
        "Diastasis Recti (abdominal muscle separation) assessment & repair",
        "Postpartum back, neck, and sacroiliac joint pain relief",
        "Ergonomic guidance for baby holding, nursing, and lifting"
      ],
      duration: "60 min",
      mode: "In-Person Clinic / Delhi NCR Home Visits / Online"
    },
    {
      id: "emotional",
      icon: Smile,
      title: "Psychiatric & Emotional Wellness Support",
      subtitle: "Overcoming 'Baby Blues' & Postpartum Depression (PPD)",
      description: "Post childbirth, a woman experiences many physical and emotional difficulties including lack of sleep, new responsibilities, and physical weakness—commonly known as 'Baby Blues'. For new mothers, experiencing Baby Blues is common and typically passes after a week or two.",
      details: "Without empathetic support, these feelings can trigger more powerful emotions leading to Postpartum Depression. Although PPD is intense, it can be treated and overcome. 'Pain is inevitable, but suffering is optional. Choose Health, not suffering.' We provide compassionate, focused emotional support.",
      highlights: [
        "Identification & early screening for Baby Blues vs. PPD",
        "Compassionate emotional debriefing & birth reflection",
        "Stress reduction, sleep hygiene, and coping strategies",
        "Partner and family communication support"
      ],
      duration: "45-60 min",
      mode: "Online Video Consultation"
    }
  ];

  const therapyServices = [
    {
      id: "yoga",
      icon: Sparkles,
      title: "Post-Natal Yoga",
      subtitle: "Gentle Healing, Core Strength & Mind-Body Restoration",
      description: "One of the finest ways to hasten your recovery and regain your pre-pregnancy strength is through postnatal yoga. It is proven to restore physical tone, boost self-confidence, and properly heal the postpartum body.",
      details: "Our specialized postnatal yoga sessions are designed to gently address postpartum challenges including lower backaches, postural fatigue, physical weakness, and shallow breathing, guiding you into holistic rejuvenation.",
      highlights: [
        "Gentle restorative asanas for core and pelvic floor rebuilding",
        "Pranayama and breathwork for nervous system calming",
        "Relief from nursing neck tension and shoulder tightness",
        "Mindful relaxation and stress dissipation"
      ],
      duration: "60 min",
      mode: "Online Live & In-Person Sessions"
    },
    {
      id: "massages",
      icon: Heart,
      title: "Therapeutic Postpartum Massages",
      subtitle: "Circulation, Pain Relief & Hormonal Rebalancing",
      description: "Massages after childbirth are deeply therapeutic. They provide profound physical relaxation, ease muscle soreness, reduce stress levels, and induce better quality sleep during demanding nights.",
      details: "Postpartum massages relieve both physical and emotional discomfort by relaxing tense muscles, boosting lymphatic circulation, and lowering cortisol. Hormones like estrogen rise during pregnancy and drop sharply after delivery; therapeutic massage helps smoothen this hormonal and mood transition.",
      highlights: [
        "Full-body muscular relaxation and joint tension relief",
        "Lymphatic drainage to clear postpartum fluid retention & swelling",
        "Hormonal stabilization & oxytocin enhancement for mood boost",
        "Promoting restorative sleep and maternal wellbeing"
      ],
      duration: "60-90 min",
      mode: "Home Visits in Delhi NCR"
    },
    {
      id: "rehab-therapy",
      icon: Activity,
      title: "Postnatal Physical Rehabilitation",
      subtitle: "Abdominal Core Restructuring & Pelvic Floor Stability",
      description: "After childbirth, it is crucial to regain the strength of your deep abdominal muscles. Strong muscles prevent lower back injuries, avert the 'dropping forward' of abdominal organs due to lack of support, and help you restore your waistline safely.",
      details: "The pelvic floor muscles are negatively impacted by pregnancy and delivery, yet they are essential for urinary continence, pelvic stability, and intimacy. At Motherina, we provide evidence-based postnatal physiotherapy at our clinic or in the comfort of your home for maximum safety and comfort.",
      highlights: [
        "Gradual, safe progressive core loading",
        "Pelvic floor muscle tone re-education",
        "Correction of pregnancy-induced compensatory postures",
        "Safe return to high-impact activities and sports"
      ],
      duration: "60 min",
      mode: "Clinic / Home Visit"
    }
  ];

  const educationalServices = [
    {
      title: "Postpartum Bleeding (Lochia) Guide",
      subtitle: "Understanding Normal Recovery Stages",
      description: "Postpartum bleeding after delivery is completely natural. During days 1 to 3, flow is typically bright or dark red with small clots. Between days 4 and 7, it turns pinkish or brownish. By the second week, discharge becomes yellowish-white. We educate you on normal progression, red flags, and hygiene practices.",
      tag: "Clinical Education"
    },
    {
      title: "Postpartum Incontinence & Bladder Health",
      subtitle: "Overcoming Bladder Leaks & Strengthening",
      description: "Has it become difficult to manage your bladder or control urine after childbirth? You are not alone. Postpartum incontinence is common for 4 to 6 weeks while hormones adjust. We guide you through targeted pelvic floor contractions and bladder retraining to completely regain control.",
      tag: "Pelvic Health"
    },
    {
      title: "Postpartum Contractions (Afterpains)",
      subtitle: "Natural Uterine Involution Support",
      description: "During pregnancy, the uterus expands substantially; post delivery, it naturally contracts back to its pre-pregnancy size. These contractions can cause painful cramping, especially while breastfeeding. We provide breathing techniques, heat therapy, and positioning to ease discomfort.",
      tag: "Postpartum Physiology"
    },
    {
      title: "Postpartum Swelling (Edema) & Body Recovery",
      subtitle: "Fluid Balance & Hormonal Normalization",
      description: "Pregnancy increases blood volume by up to 50%, leading to significant postpartum fluid retention and swollen feet. We explain the physiological timeline of hormone rebalancing, along with gentle elevation, hydration, and circulation techniques to reduce edema.",
      tag: "Body Rebirth"
    }
  ];

  const daimaaServices = [
    {
      title: "Dedicated 40-Day Mother & Newborn Care",
      desc: "Our Japa and Nannies/Daimaas are professionally trained and take joy in caring for the mother and baby during the initial 40 crucial days following delivery.",
      icon: Baby
    },
    {
      title: "Skilled Postpartum Mother Massages",
      desc: "Experienced Daimaas provide gentle, skilled traditional massages for the new mother to ease physical stiffness, fatigue, and muscle pain.",
      icon: Heart
    },
    {
      title: "Comprehensive Newborn Handling",
      desc: "Well-trained in infant bathing, diaper changing, swaddling, burping, and soothing with patience, trust, and positive nurturing energy.",
      icon: ShieldCheck
    },
    {
      title: "Customizable Daycare on Demand",
      desc: "Tailored care packages according to family preferences, including mother's nutrition prep, daytime assistance, or round-the-clock support.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-beige/30 via-white to-sage-beige/20 animate-fade-in">
      {/* Top Banner Notice */}
      <div className="bg-soft-brown text-white py-2.5 px-4 text-center text-xs md:text-sm font-medium tracking-wide">
        "Customized guidance for postpartum care tailored to your unique needs and preferences"
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xs uppercase tracking-widest font-semibold text-soft-brown">Clinical Services & Specialized Care</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-soft-brown">
            Comprehensive Maternal Wellness Services
          </h1>
          <p className="text-lg text-warm-gray leading-relaxed">
            Led by <strong>Dr. Shalinta Tyagi</strong> (16+ years clinical experience), Motherina provides evidence-based clinical consultations, therapeutic rehabilitation, and birth preparation designed for the mother's complete physical and emotional recovery.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'consultation', label: 'Consultation Services' },
            { id: 'therapy', label: 'Therapy Services' },
            { id: 'education', label: 'Educational Guides' },
            { id: 'daimaa', label: 'Dai-Maa 40-Day Care' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-soft-brown text-white shadow-md'
                  : 'bg-white text-warm-gray hover:bg-peach/30 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Services Container */}
      <div className="px-4 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-20">
        
        {/* SECTION 1: CONSULTATION SERVICES */}
        {(activeTab === 'all' || activeTab === 'consultation') && (
          <section className="space-y-8">
            <div className="border-b border-peach/50 pb-4">
              <span className="text-xs uppercase tracking-widest font-bold text-soft-brown">Clinical Expertise</span>
              <h2 className="font-serif text-3xl font-bold text-soft-brown">Consultation Services</h2>
              <p className="text-warm-gray mt-1">Personalized clinical evaluations and treatment plans with Dr. Shalinta Tyagi.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultationServices.map((service) => (
                <div key={service.id} className="bg-white rounded-3xl p-8 border border-peach/30 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-2xl bg-peach/30 text-soft-brown">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-soft-brown">{service.title}</h3>
                        <p className="text-xs font-semibold text-warm-gray uppercase tracking-wider">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-warm-gray text-sm leading-relaxed">{service.description}</p>
                    <p className="text-warm-gray text-sm leading-relaxed italic bg-sage-beige/20 p-3 rounded-xl border-l-2 border-soft-brown">
                      {service.details}
                    </p>

                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-soft-brown">Key Highlights:</p>
                      <ul className="space-y-1.5">
                        {service.highlights.map((h, i) => (
                          <li key={i} className="flex items-start space-x-2 text-xs md:text-sm text-warm-gray">
                            <CheckCircle className="w-4 h-4 text-soft-brown flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-1.5 text-xs text-warm-gray">
                        <Clock className="w-3.5 h-3.5 text-soft-brown" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs text-warm-gray">
                        <Video className="w-3.5 h-3.5 text-soft-brown" />
                        <span>Online / In-Person</span>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-bold text-white bg-soft-brown hover:bg-opacity-90 shadow-sm"
                    >
                      Book Consultation
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: THERAPY SERVICES */}
        {(activeTab === 'all' || activeTab === 'therapy') && (
          <section className="space-y-8">
            <div className="border-b border-peach/50 pb-4">
              <span className="text-xs uppercase tracking-widest font-bold text-soft-brown">Physical Healing</span>
              <h2 className="font-serif text-3xl font-bold text-soft-brown">Therapy Services</h2>
              <p className="text-warm-gray mt-1">Holistic body rehabilitation, pelvic toning, and restorative therapies.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {therapyServices.map((service) => (
                <div key={service.id} className="bg-white rounded-3xl p-8 border border-peach/30 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="p-3 w-fit rounded-2xl bg-lavender/40 text-soft-brown">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-soft-brown">{service.title}</h3>
                    <p className="text-xs font-semibold text-warm-gray uppercase tracking-wider">{service.subtitle}</p>
                    <p className="text-warm-gray text-sm leading-relaxed">{service.description}</p>
                    <p className="text-warm-gray text-sm leading-relaxed bg-peach/10 p-3 rounded-xl">
                      {service.details}
                    </p>

                    <ul className="space-y-1.5 pt-2">
                      {service.highlights.map((h, i) => (
                        <li key={i} className="flex items-start space-x-2 text-xs text-warm-gray">
                          <CheckCircle className="w-3.5 h-3.5 text-soft-brown flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-warm-gray">{service.duration}</span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold text-white bg-soft-brown hover:bg-opacity-90 shadow-sm"
                    >
                      Book Session
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: EDUCATIONAL SERVICES */}
        {(activeTab === 'all' || activeTab === 'education') && (
          <section className="space-y-8">
            <div className="border-b border-peach/50 pb-4">
              <span className="text-xs uppercase tracking-widest font-bold text-soft-brown">Knowledge & Reassurance</span>
              <h2 className="font-serif text-3xl font-bold text-soft-brown">Educational Services & Guides</h2>
              <p className="text-warm-gray mt-1">Understanding the profound physical changes of the postpartum phase.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationalServices.map((edu, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-soft-brown bg-peach/30 rounded-full">
                      {edu.tag}
                    </span>
                    <BookOpen className="w-4 h-4 text-soft-brown" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-soft-brown mb-1">{edu.title}</h3>
                  <p className="text-xs font-semibold text-warm-gray mb-3">{edu.subtitle}</p>
                  <p className="text-sm text-warm-gray leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-peach/30 via-lavender/30 to-soft-pink/30 p-8 rounded-3xl text-center space-y-4">
              <h3 className="font-serif text-2xl font-bold text-soft-brown">Having Questions About Your Postpartum Symptoms?</h3>
              <p className="text-warm-gray text-sm md:text-base max-w-2xl mx-auto">
                Every woman's postpartum recovery is unique. Dr. Shalinta Tyagi offers dedicated educational and clinical consultation sessions to answer every question you have in a safe, compassionate setting.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 font-semibold text-white bg-soft-brown rounded-full hover:bg-opacity-90 shadow-md text-sm"
              >
                Schedule an Educational Consult
              </Link>
            </div>
          </section>
        )}

        {/* SECTION 4: DAI-MAA SERVICES */}
        {(activeTab === 'all' || activeTab === 'daimaa') && (
          <section className="space-y-8">
            <div className="border-b border-peach/50 pb-4">
              <span className="text-xs uppercase tracking-widest font-bold text-soft-brown">40-Day Care Ecosystem</span>
              <h2 className="font-serif text-3xl font-bold text-soft-brown">Dai-Maa & Japa Postnatal Care</h2>
              <p className="text-warm-gray mt-1">Professional, traditional, and trained home assistance for mother and newborn.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 border border-peach/30 shadow-sm space-y-8">
              <div className="max-w-3xl space-y-4">
                <p className="text-warm-gray text-base md:text-lg leading-relaxed">
                  Our Japa and Nannies/Daimaas are professionally trained and take joy in taking care of the mom and the baby in the initial 40 days of delivery. They are experienced in addressing every need of a newborn and a new mother during this recovery phase post-delivery.
                </p>
                <p className="text-warm-gray text-base md:text-lg leading-relaxed">
                  They provide skilled massages to new mothers to ease stiffness and pain in their bodies. They are also well-trained to take full responsibility for newborn care with patience, trust, and positive energy—from changing diapers and bathing to clothing and soothing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {daimaaServices.map((d, i) => (
                  <div key={i} className="p-6 bg-sage-beige/20 rounded-2xl border border-peach/20 space-y-3">
                    <div className="p-3 bg-white w-fit rounded-xl text-soft-brown shadow-sm">
                      <d.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-soft-brown">{d.title}</h4>
                    <p className="text-xs text-warm-gray leading-relaxed">{d.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-peach/20 p-6 rounded-2xl">
                <div>
                  <h4 className="font-bold text-soft-brown">Customizable Daycare & In-Home Packages</h4>
                  <p className="text-xs text-warm-gray">Rates and schedules are customized to your family's needs in Gurgaon and Delhi NCR.</p>
                </div>
                <Link
                  to="/contact"
                  className="px-6 py-2.5 bg-soft-brown text-white text-xs font-bold rounded-full hover:bg-opacity-90 shadow-sm flex-shrink-0"
                >
                  Inquire for Dai-Maa Care
                </Link>
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default Services;
