import './App.css'
import './social-media.css';
import Followers from './components/Followers';
import facebook from './images/facebook.png';
import instagram from './images/instagram.jpg';
import twitter from './images/twitter.jpg';
import youtube from './images/youtube.png';

function App() {
  return (
    <div className="App">
      <h1>Social Media Dashboard</h1>
      <p>Total Followers:</p>
      <Followers platform={facebook}/>
      <Followers platform={twitter}/>
      <Followers platform={instagram}/>
      <Followers platform={youtube}/>
      <h2>Overview - Today</h2>
    </div>
  );
}

export default App;
