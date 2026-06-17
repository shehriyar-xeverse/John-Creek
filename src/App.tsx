/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page Imports
import Home from './pages/Home';
import { 
  AboutOverview, OurHospital, WhyTrustUs, OurVet, OurTeam 
} from './pages/AboutPages';
import { 
  WellnessBenefits, CatsPlanPage, SmallDogPlanPage, 
  MediumDogPlanPage, LargeDogPlanPage, ExtraLargeDogPlanPage, GiantDogPlanPage 
} from './pages/WellnessPages';
import { 
  RoutineExams, Vaccinations, ExoticPets, DentalCare, 
  GeriatricCare, InternalMedicine, PetGrooming, PetBoarding, EmergencyCare 
} from './pages/CoreCarePages';
import SurgeryPage from './pages/SurgeryPage';
import LabPage from './pages/LabPage';
import { 
  PatientsHub, NewPatientForm, PetAdviceBlog, CurrentPromotions, 
  BoardingRequirements, FinancingOptions 
} from './pages/PatientsPages';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Dynamic structural page container */}
      <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#2E2A26] font-sans overflow-x-hidden antialiased">
        <Navbar />
        
        {/* Main route output wrapper */}
        <main className="flex-1 flex flex-col">
          <Routes>
            {/* 1. Main Home */}
            <Route path="/" element={<Home />} />

            {/* 2. About section routes */}
            <Route path="/about" element={<AboutOverview />} />
            <Route path="/about/hospital" element={<OurHospital />} />
            <Route path="/about/why-trust-us" element={<WhyTrustUs />} />
            <Route path="/about/our-vet" element={<OurVet />} />
            <Route path="/about/our-team" element={<OurTeam />} />

            {/* 3. Wellness bundle section routes */}
            <Route path="/wellness-plans/benefits" element={<WellnessBenefits />} />
            <Route path="/wellness-plans/cats" element={<CatsPlanPage />} />
            <Route path="/wellness-plans/small-dog" element={<SmallDogPlanPage />} />
            <Route path="/wellness-plans/medium-dog" element={<MediumDogPlanPage />} />
            <Route path="/wellness-plans/large-dog" element={<LargeDogPlanPage />} />
            <Route path="/wellness-plans/extra-large-dog" element={<ExtraLargeDogPlanPage />} />
            <Route path="/wellness-plans/giant-dog" element={<GiantDogPlanPage />} />

            {/* 4. Core specialty medical routes */}
            <Route path="/core-care/routine-exams" element={<RoutineExams />} />
            <Route path="/core-care/vaccinations" element={<Vaccinations />} />
            <Route path="/core-care/exotic-pets" element={<ExoticPets />} />
            <Route path="/core-care/dental" element={<DentalCare />} />
            <Route path="/core-care/geriatric" element={<GeriatricCare />} />
            <Route path="/core-care/internal-medicine" element={<InternalMedicine />} />
            <Route path="/core-care/grooming" element={<PetGrooming />} />
            <Route path="/core-care/boarding" element={<PetBoarding />} />
            <Route path="/core-care/emergency" element={<EmergencyCare />} />

            {/* 5. Surgery & Lab core screens */}
            <Route path="/surgery" element={<SurgeryPage />} />
            <Route path="/lab" element={<LabPage />} />

            {/* 6. Patient Services cluster */}
            <Route path="/patients" element={<PatientsHub />} />
            <Route path="/patients/new-form" element={<NewPatientForm />} />
            <Route path="/patients/blog" element={<PetAdviceBlog />} />
            <Route path="/patients/promotions" element={<CurrentPromotions />} />
            <Route path="/patients/requirements" element={<BoardingRequirements />} />
            <Route path="/patients/financing" element={<FinancingOptions />} />

            {/* 7. Career recruitment and Contact bookings */}
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* 8. Comprehensive Catch All Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
