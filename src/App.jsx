import './App.css';
import { Header } from './components';
import {
  MainSection,
  RoomsSection,
  MapSection,
  PopularSection,
  ReviewsSection,
} from './containers';

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <RoomsSection />
      <MapSection />
      <PopularSection />
      <ReviewsSection />
    </>
  );
}

export default App;
