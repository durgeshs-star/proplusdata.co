import './App.css';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import TechnographicsData from './pages/TechnographicsData';
import ContactData from './pages/ContactData';
import IntentData from './pages/IntentData';
import NextTechPurchase from './pages/NextTechPurchase';
import EventAudienceAcquisition from './pages/EventAudienceAcquisition';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Must be bundle!
import DemandGen from './pages/DemandGen';
import ContactUs from './pages/ContactUs';
import ThankYou from './pages/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PressReleases from './pages/PressReleases';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import Blogs from './pages/Blogs';
import Conferences from './pages/Conferences';
import Blog1Details from './pages/Blog1Details';
import VoiceSpecialist from './pages/VoiceSpecialist';
import WebTechResearcher from './pages/WebTechResearcher';
import OperationsManager from './pages/OperationsManager';
import UseCases from './pages/UseCases';
import AdminExecutive from './pages/AdminExecutive';
import ExecutiveAssistant from './pages/ExecutiveAssistant';
import Blog2Details from './pages/Blog2Details';
import Blog3Details from './pages/Blog3Details';
import Blog4Details from './pages/Blog4Details';
import Blog5Details from './pages/Blog5Details';
import BookMeeting from './pages/BookMeeting';
import ScrollToSection from './components/ScrollToSection';
import PlayBook from './pages/PlayBook';
import FlipbookViewers from './pages/FlipbookViewers';
import FlipbookPage from './pages/FlipbookPage';
import PlaybookIcon from './components/PlaybookIcon';
import AwsCaseStudy from './pages/AwsCaseStudy';
import ProPlusIntelligenceDataSuite from './pages/ProPlusIntelligenceDataSuite';
import RenewalIntelligence from './pages/RenewalIntelligence';
import BuyingGroup from './pages/BuyingGroup';
import ApacCxTransformationSuccess from './pages/ApacCxTransformationSuccess';
import AcceleratingAseanMarketPenetration from './pages/AcceleratingAseanMarketPenetration';
import ThePowerOfProplusDataDashboard from './pages/ThePowerOfProplusDataDashboard';
import ProplusDataCloudSuccess from './pages/ProplusDataCloudSuccess';
import ProPlusRenewalIntelligenceBoostsCloudEnterprisePipleline3X from './pages/ProPlusRenewalIntelligenceBoostsCloudEnterprisePipleline3X';
import ProPlusRenewalIntelligenceBoostsCloudEnterprise from './pages/ProPlusRenewalIntelligenceBoostsCloudEnterprise';
import HowaFortune500ManufacturerTransformedGtmWithProplus from './pages/HowaFortune500ManufacturerTransformedGtmWithProPlus';
import Fortune500GtmSuccessProplus from './pages/Fortune500GtmSuccessProplus';
import StrategicImperativeOfRenewalTimingsMasteringThe100DayAdvantage from './pages/StrategicImperativeOfRenewalTimingsMasteringThe100DayAdvantage';
import HowRenewalIntelligenceWinsAgainstTheOdds from './pages/HowRenewalIntelligenceWinsAgainstTheOdds';
import RenewalsAreTheArr4SmartWaystoBuildDriveGrowthWithRenewalIntelligence from './pages/RenewalAreTheArr4SmartWaystoBuildDriveGrowthWithRenewalIntelligence';
import TurningYourCompetitorsCustomersIntoYourGrowthEngine from './pages/TurningYourCompetitorsCustomersIntoYourGrowthEngine';
import HowTechnographicsDriveSmarterGtmAbmAndCompetitiveAdvantage from './pages/HowTechnographicsDriveSmarterGtmAbmAndCompetitiveAdvantage';
import WhyTechnographicsIsTheSecretIngredientToPrecisionMessaging from './pages/WhyTechnographicsIsTheSecretIngredientToPrecisionMessaging';
import RenewalsLP from './pages/RenewalsLP';
import ScrollToTop from './ScrollToTop';
import HowEnterprisesWillBuildPredictableGrowthInAnUncertainMarket from './pages/HowEnterprisesWillBuildPredictableGrowthInAnUncertainMarket';
import TheNewRulesOfB2BAudiencePenetrationFor2026 from './pages/TheNewRulesOfB2BAudiencePenetrationFor2026';
import GTMAssessmentTool from './pages/GTMAssessmentTool';
import ThankYouGtm from './pages/ThankYouGtm';
import FinanceExecutive from './pages/FinanceExecutive';
import EmailMarketingSpecialist from './pages/EmailMarketingSpecialist';
import WillExpansionRevenueOvertakNetNewAcquisitionIn2026 from './pages/WillExpansionRevenueOvertakeNetNewAcquisitionIn2026';
import GtmLandingPage from './pages/GtmLandingPage';
import ThankYouGtmIntelligence from './pages/ThankYouGtmIntelligence';
import B2BIntentDataVsTraditionalLeadScoring from './pages/B2BIntentDataVsTraditionalLeadScoring';
import RenewalLandingPage from './pages/RenewalLandingPage';
import ForresterPlaybook116 from './pages/ForresterPlaybook116';
import ConnectCmoPlaybook from './pages/ConnectCmoPlaybook';
import CmoPlaybook2026 from './pages/CmoPlaybook2026';
import ForresterB2BSummit2025 from './pages/ForresterB2BSummit2025';
import GartnerMarketingSymposiumXpo2025 from './pages/GartnerMarketingSymposiumXpo2025';
import DmwfEuropeAmsterdam2025 from './pages/DmwfEuropeAmsterdam2025.';
import NewYorkWinterDataSummit2025 from './pages/NewYorkWinterDataSummit2025';
import CrackingTheApacCxCode from './pages/CrackingTheApacCxCode';
import SeeYourGtmTruthIn60Sec from './pages/SeeYourGtmTruthIn60Sec';
import CmoLeadershipSummit2026 from './pages/CmoLeadershipSummit2026';
import HowPredictiveIntelligenceIsTransformingB2BDemandGeneration from './pages/HowPredictiveIntelligenceIsTransformingB2BDemandGeneration';
import Pricing from './pages/Pricing';
// import GTMAssessment from './pages/GtmAssessment';
import GTMAssessmentQuestions from './pages/GtmAssessmentQuestions';
import GTMAssessmentResult from './pages/GtmAssessmentResults';



function App() {

  return (
    <div className="App">
       <HelmetProvider> {/* ✅ Wrap everything inside HelmetProvider */}
     <BrowserRouter>
     <ScrollToSection/>
     <ScrollToTop/>
     <Routes>
        {/* English Pages */}
       <Route path ="/" element = {<Home/>} />
       <Route path ="/technographics" element = {<TechnographicsData/>} />
       <Route path ="/contact-data" element = {<ContactData/>} />
       <Route path ="/intent-data" element = {<IntentData/>} />
       <Route path ="/next-tech-purchase" element = {<NextTechPurchase/>} />
       <Route path ="/renewal-intelligence" element = {<RenewalIntelligence/>} />
       <Route path ="/event-audience-acquisition" element = {<EventAudienceAcquisition/>} />
       <Route path ="/buying-group" element = {<BuyingGroup/>} />
       <Route path ="/demand-gen" element = {<DemandGen/>} />
       <Route path ="/contact-us" element = {<ContactUs/>} />
       <Route path ="/thankyou" element = {<ThankYou/>} />
       <Route path ="/privacy-policy" element = {<PrivacyPolicy/>} />
       <Route path ="/press-releases" element = {<PressReleases/>} />
       <Route path ="/about-us" element = {<AboutUs/>} />
       <Route path ="/careers" element = {<Careers/>} />
       <Route path ="/blogs" element = {<Blogs/>} />
       <Route path ="/blog1details" element = {<Blog1Details/>} />
       <Route path ="/blog2details" element = {<Blog2Details/>} />
       <Route path ="/blog3details" element = {<Blog3Details/>} />
       <Route path ="/blog4details" element = {<Blog4Details/>} />
       <Route path ="/blog5details" element = {<Blog5Details/>} />
       <Route path ="/conferences" element = {<Conferences/>} />
       <Route path ="/voice-specialist" element = {<VoiceSpecialist/>} />
       <Route path ="/web-tech-researcher" element = {<WebTechResearcher/>} />
       <Route path ="/operations-manager" element = {<OperationsManager/>} />
       <Route path ="/finance-executive" element = {<FinanceExecutive/>} />
       <Route path ="/forrester-b2b-summit-2025" element = {<ForresterB2BSummit2025/>} />
       <Route path ="/use-cases" element = {<UseCases/>} />
       <Route path ="/apac-cx-transformation-success" element = {<ApacCxTransformationSuccess/>} />
       <Route path ="/accelerating-asean-market-penetration" element = {<AcceleratingAseanMarketPenetration/>} />
       <Route path ="/the-power-of-proplus-data-dashboard" element = {<ThePowerOfProplusDataDashboard/>} />
       <Route path ="/proplus-data-cloud-success" element = {<ProplusDataCloudSuccess/>} />
       <Route path ="/admin-executive" element = {<AdminExecutive/>} />
       <Route path ="/executive-assistant" element = {<ExecutiveAssistant/>} />
       <Route path='/book-meeting' element = {<BookMeeting/>}/>
      <Route path='/playbook' element = {<PlayBook/>}/>
      <Route path='/flipbook-viewers' element = {<FlipbookViewers/>}/>
      <Route path='/flipbook-page' element = {<FlipbookPage/>}/>
      <Route path='/playbook-icon' element = {<PlaybookIcon/>}/>
      <Route path ="/gartner-marketing-symposium-xpo-2025" element = {<GartnerMarketingSymposiumXpo2025/>} />
      <Route path ="/aws-case-study" element = {<AwsCaseStudy/>} />
      <Route path ="/proplus-intelligence-data-suite" element = {<ProPlusIntelligenceDataSuite/>} />
      <Route path ="/how-a-fortune-500-manufacturer-transformed-gtm-with-proplus" element = {<HowaFortune500ManufacturerTransformedGtmWithProplus/>} />
      <Route path ="/proplus-renewal-intelligence-boosts-cloud-enterprise-pipeline-3x" element = {<ProPlusRenewalIntelligenceBoostsCloudEnterprisePipleline3X/>} />
      <Route path ="/proplus-renewal-intelligence-boosts-cloud-enterprise" element = {<ProPlusRenewalIntelligenceBoostsCloudEnterprise/>} />
      <Route path ="/fortune-500-gtm-success-proplus" element = {<Fortune500GtmSuccessProplus/>} />
      <Route path ="/strategic-imperative-of-renewal-timings-mastering-the-100-day-advantage" element = {<StrategicImperativeOfRenewalTimingsMasteringThe100DayAdvantage/>} />
      <Route path ="/renewal-are-the-arr-4-smart-ways-to-build-drive-growth-with-renewal-intelligence" element = {<RenewalsAreTheArr4SmartWaystoBuildDriveGrowthWithRenewalIntelligence/>} />
      <Route path ="/how-renewal-intelligence-win-against-the-odd" element = {<HowRenewalIntelligenceWinsAgainstTheOdds/>} />
      <Route path ="/turning-your-competitors-customers-into-your-growth-engine" element = {<TurningYourCompetitorsCustomersIntoYourGrowthEngine/>} />
      <Route path ="/how-technographics-drive-smarter-gtm-abm-and-competitive-advantage" element = {<HowTechnographicsDriveSmarterGtmAbmAndCompetitiveAdvantage/>} />
      <Route path ="/why-technographics-is-the-secret-ingredient-to-precision-messaging" element = {<WhyTechnographicsIsTheSecretIngredientToPrecisionMessaging/>} />
      <Route path ="/renewals-lp" element = {<RenewalsLP/>} />
      <Route path ="/how-enterprise-will-build-predictable-growth-in-an-uncertain-market" element = {<HowEnterprisesWillBuildPredictableGrowthInAnUncertainMarket/>} />
      <Route path ="/the-new-rules-of-b2b-audience-penetration-for-2026" element = {<TheNewRulesOfB2BAudiencePenetrationFor2026/>} />
      <Route path ="/unlock-your-gtm-truth-in-a-minute" element = {<GTMAssessmentTool/>} />
      <Route path ="/thank-you-gtm" element = {<ThankYouGtm/>} />
      <Route path ="/email-marketing-specialist" element = {<EmailMarketingSpecialist/>} />
      <Route path ="/will-expansion-revenue-overtake-net-new-acquisition-in-2026" element = {<WillExpansionRevenueOvertakNetNewAcquisitionIn2026/>} />
      <Route path ="/dmwf-europe-amsterdam-2025" element = {<DmwfEuropeAmsterdam2025/>} />
      <Route path ="/new-york-winter-data-summit-2025" element = {<NewYorkWinterDataSummit2025/>} />
      <Route path ="/gtm-intelligence" element = {<GtmLandingPage/>} />
      <Route path ="/thank-you-gtm-intelligence" element = {<ThankYouGtmIntelligence/>} />
      <Route path ="/b2b-intent-data-vs-traditional-lead-scoring" element = {<B2BIntentDataVsTraditionalLeadScoring/>} />
      <Route path ="/renewal-intelligence-lp" element = {<RenewalLandingPage/>} />
      <Route path='/forrester-playbook-116' element = {<ForresterPlaybook116/>}/>
      <Route path='/connect-cmo-playbook' element = {<ConnectCmoPlaybook/>}/>
      <Route path='/cmo-playbook-2026' element = {<CmoPlaybook2026/>}/>
      <Route path='/cracking-the-code-apac-transformation-success' element = {<CrackingTheApacCxCode/>}/>
      <Route path='/see-your-gtm-truth-in-60-sec' element = {<SeeYourGtmTruthIn60Sec/>}/>
      <Route path='/cmo-leadership-summit-2026' element = {<CmoLeadershipSummit2026/>}/>
      <Route path='/how-predictive-intelligence-is-transforming-b2b-demand-generation' element = {<HowPredictiveIntelligenceIsTransformingB2BDemandGeneration/>}/>
      <Route path='/nexora-pricing' element = {<Pricing/>}/>
      <Route path='/gtm-assessment-questions' element = {<GTMAssessmentQuestions/>}/>
      <Route path='/gtm-assessment-results' element = {<GTMAssessmentResult/>}/>
      
     
     



      </Routes>
     </BrowserRouter>
     </HelmetProvider>
    </div>
  );
}

export default App;
