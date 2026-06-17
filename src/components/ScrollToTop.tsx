import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Johns Creek Veterinary Clinic | Compassionate Pet Care',
  '/about': 'About Us | Johns Creek Veterinary Clinic',
  '/about/hospital': 'Our State-of-the-Art Hospital | Johns Creek Veterinary Clinic',
  '/about/why-trust-us': 'Why Trust Us | Johns Creek Veterinary Clinic',
  '/about/our-vet': 'Meet Dr. Evelyn Kim, Chief Medical Director | Johns Creek Veterinary Clinic',
  '/about/our-team': 'Meet Our Specialist Team | Johns Creek Veterinary Clinic',
  '/wellness-plans/benefits': 'Wellness Plan Benefits & Bundles | Johns Creek Veterinary Clinic',
  '/wellness-plans/cats': 'Feline Wellness Plans | Johns Creek Veterinary Clinic',
  '/wellness-plans/small-dog': 'Small Dog Wellness Plans | Johns Creek Veterinary Clinic',
  '/wellness-plans/medium-dog': 'Medium Dog Wellness Plans | Johns Creek Veterinary Clinic',
  '/wellness-plans/large-dog': 'Large Dog Wellness Plans | Johns Creek Veterinary Clinic',
  '/wellness-plans/extra-large-dog': 'Extra Large Dog Wellness Plans | Johns Creek Veterinary Clinic',
  '/wellness-plans/giant-dog': 'Giant Breed Wellness Plans | Johns Creek Veterinary Clinic',
  '/core-care/routine-exams': 'Routine Head-to-Tail Exams | Johns Creek Veterinary Clinic',
  '/core-care/vaccinations': 'Vaccinations & Biological Prevention | Johns Creek Veterinary Clinic',
  '/core-care/exotic-pets': 'Exotic Pocket Mammals Care | Johns Creek Veterinary Clinic',
  '/core-care/dental': 'Ultrasonic Dental Scaling & Polish | Johns Creek Veterinary Clinic',
  '/core-care/geriatric': 'Senior Geriatric Care & Pain Relief | Johns Creek Veterinary Clinic',
  '/core-care/internal-medicine': 'Endocrine & Hepatic Internal Medicine | Johns Creek Veterinary Clinic',
  '/core-care/grooming': 'Therapeutic Coat Washes & Grooming | Johns Creek Veterinary Clinic',
  '/core-care/boarding': 'Physician Supervised Boarding Hotel | Johns Creek Veterinary Clinic',
  '/core-care/emergency': 'Trauma & Urgent Emergency Care | Johns Creek Veterinary Clinic',
  '/surgery': 'Precision Sterile Surgical Suites | Johns Creek Veterinary Clinic',
  '/lab': 'In-House Diagnostics & IDEXX Laboratories | Johns Creek Veterinary Clinic',
  '/patients': 'Patient Portal & Resources | Johns Creek Veterinary Clinic',
  '/patients/new-form': 'New Patient Secured Intake Form | Johns Creek Veterinary Clinic',
  '/patients/blog': 'Evidence-Based Health Advice Blog | Johns Creek Veterinary Clinic',
  '/patients/promotions': 'Special Clinical Promotions & Credits | Johns Creek Veterinary Clinic',
  '/patients/requirements': 'Immunization & Boarding Requirements | Johns Creek Veterinary Clinic',
  '/patients/financing': 'Interest-Free Financing Assistance Plans | Johns Creek Veterinary Clinic',
  '/careers': 'Careers & Associate Veterinary Recruits | Johns Creek Veterinary Clinic',
  '/contact': 'Book Appointment Online & Hours | Johns Creek Veterinary Clinic',
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll window to top
    window.scrollTo({
      top: 0,
      behavior: 'instant' as ScrollBehavior // Instant scroll to prevent transition jumpiness
    });

    // 2. Dynamically set title based on current router path
    const title = ROUTE_TITLES[pathname];
    if (title) {
      document.title = title;
    } else {
      // General converter: /patients/new-form -> New Form | Johns Creek Veterinary Clinic
      const segments = pathname.split('/').filter(Boolean);
      if (segments.length > 0) {
        const pageName = segments[segments.length - 1]
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        document.title = `${pageName} | Johns Creek Veterinary Clinic`;
      } else {
        document.title = 'Johns Creek Veterinary Clinic | Compassionate Pet Care';
      }
    }
  }, [pathname]);

  return null;
}
