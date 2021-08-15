import facebook from './../images/facebook.png';
import instagram from './../images/instagram.png';
import twitter from './../images/twitter.png';
import youtube from './../images/youtube.png';
import red from './../images/red.png';
import green from './../images/green.png';

const data = {
    platforms: [
      { facebook: { name: "nathanf", followers: 1987, difference: 12 },
        twitter: { name: "nathanf", followers: 1044, difference: 99 },
        instagram: { name: "realnathanf", followers: 11012, difference: 1099 },
        youtube: { name: "Nathan F.", followers: 8239, difference: -144 } },
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

const Likes = (props) => {
    return (
        <div className = "downlikes">
            <div id = "uppertext">{data.events[props.counter].type}</div>{(() => {
            if (data.events[props.counter].platform == "facebook") {
          return (
            <div className = "upperimage">
            <img src={facebook} className="imagel"></img>
            </div>
          )}
          else if(data.events[props.counter].platform == "instagram") {
            return (
              <div className = "upperimage">
              <img src={instagram} className="imagel"></img>
              </div>
            )}
            else if(data.events[props.counter].platform == "twitter") {
                return (
                  <div className = "upperimage">
                  <img src={twitter} className="imagel"></img>
                  </div>
                )}
                else  {
                    return (
                      <div className = "upperimage">
                      <img src={youtube} className="imagel"></img>
                      </div>
                    )}
          })()}
          <br/>
          <div id="loweramount">
            {data.events[props.counter].amount}
            </div>
            <div id="modifieramount">
            {(() => {
            if ((data.events[props.counter].modifier) > 0) {
          return (
            <img src={green} className="arrow"></img>)}
                else  {
                    return (
                      <img src={red} className="arrow"></img>
                    )}
          })()}
          {(() => {
            if ((data.events[props.counter].modifier) > 0) {
          return (
            <div className = 'greencolor'>
            {data.events[props.counter].modifier}
            </div>)}
                else  {
                    return (
                        <div className = 'redcolor'>
                        {data.events[props.counter].modifier}
                        </div>
                    )}
          })()}
          </div>
        </div>
    )
}

export default Likes
