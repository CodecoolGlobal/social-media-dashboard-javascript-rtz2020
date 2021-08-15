import './App.css'
import './social-media.css';
import Followers from './components/Followers';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
import youtube from './images/youtube.png';
import Likes from './components/Likes';
import Toggle from './components/Toggle';

const data = {
  platforms: [
    { facebook: { name: "nathanf", followers: 1987, difference: 12 } },
    { twitter: { name: "nathanf", followers: 1044, difference: 99 } },
    { instagram: { name: "realnathanf", followers: 11012, difference: 1099 } },
    { youtube: { name: "Nathan F.", followers: 8239, difference: -144 } },
  ],
  events: [
    { platform: "facebook", type: "Page views", amount: 87, modifier: 3 },
    { platform: "facebook", type: "Likes", amount: 52, modifier: -2 },
    { platform: "instagram", type: "Likes", amount: 5462, modifier: 2257 },
    { platform: "instagram", type: "Profile Views", amount: 52150, modifier: 1375 },
    { platform: "twitter", type: "Retweets", amount: 117, modifier: 303 },
    { platform: "twitter", type: "Likes", amount: 507, modifier: 553 },
    { platform: "youtube", type: "Likes", amount: 107, modifier: -19 },
    { platform: "youtube", type: "Total Views", amount: 1407, modifier: -12 },
  ],
};

function App() {
  return (
    <div className="App">
      <h1>Social Media Dashboard</h1>
      <p>Total Followers:{data.platforms[0].facebook.followers + data.platforms[1].twitter.followers + data.platforms[2].instagram.followers + data.platforms[3].youtube.followers}</p>
      <Toggle />
      <Followers platform={facebook} plats={'facebook'}/>
      <Followers platform={twitter} plats={'twitter'}/>
      <Followers platform={instagram} plats={'instagram'}/>
      <Followers platform={youtube} plats={'youtube'}/>
      <h2>Overview - Today</h2>
      <Likes counter = {0}/>
      <Likes counter = {1}/>
      <Likes counter = {2}/>
      <Likes counter = {3}/>
      <Likes counter = {4}/>
      <Likes counter = {5}/>
      <Likes counter = {6}/>
      <Likes counter = {7}/>
    </div>
  );
}

export default App;
