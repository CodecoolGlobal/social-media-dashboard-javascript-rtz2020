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

const Followers = (props) => {
    return (
        <div className = {props.plats}>
          <div>
          <img src={props.platform} id="imagep"></img>
            <div id="names">
            {(() => {
        if (props.platform == "/static/media/instagram.80e598d8.png") {
          return (
            data.platforms.map((items) => items.instagram.name)
          )
        } else if (props.platform == "/static/media/youtube.145fc780.png") {
          return (
            data.platforms.map((items) => items.youtube.name)
          )
        } else {
          return (
            data.platforms.map((items) => items.twitter.name)
          )
        }
      })()}
      </div>
      <br/>
      <div id="numberfollow">
      {(() => {
        if (props.platform == "/static/media/instagram.80e598d8.png") {
          return (
            data.platforms.map((items) => items.instagram.followers)
          )
        } else if (props.platform == "/static/media/youtube.145fc780.png") {
          return (
            data.platforms.map((items) => items.youtube.followers)
          )
        } else if (props.platform == "/static/media/facebook.6c83ee5c.png"){
          return (
            data.platforms.map((items) => items.facebook.followers)
          )
        } else {
          return (
            data.platforms.map((items) => items.twitter.followers)
          )
        }
      })()}
      </div>
      <div id="followerword">
      {(() => {
        if (props.platform == "/static/media/instagram.80e598d8.png") {
          return (
            "FOLLOWERS"
          )
        } else if (props.platform == "/static/media/youtube.145fc780.png") {
          return (
            "SUBSCRIBERS"
          )
        } else if (props.platform == "/static/media/facebook.6c83ee5c.png"){
          return (
            "FOLLOWERS"
          )
        } else {
          return (
            "FOLLOWERS"
          )
        }
      })()}
      </div>
      <div id="modifierarrow">
      {(() => {
        if (props.platform == "/static/media/instagram.80e598d8.png") {
          if (data.platforms.map((items) => items.instagram.difference) > 0){
            return (
              <img src={green} className="arrow"></img>
            )
          }
          else {
            return (
              <img src={red} className="arrow"></img>
            )
          }
        } else if (props.platform == "/static/media/youtube.145fc780.png") {
          if (data.platforms.map((items) => items.youtube.difference) > 0){
            return (
              <img src={green} className="arrow"></img>
            )
          }
          else {
            return (
              <img src={red} className="arrow"></img>
            )
          }
        } else if (props.platform == "/static/media/facebook.6c83ee5c.png"){
          if (data.platforms.map((items) => items.facebook.difference) > 0){
            return (
              <img src={green} className="arrow"></img>
            )
          }
          else {
            return (
              <img src={red} className="arrow"></img>
            )
          }
        } else {
          if (data.platforms.map((items) => items.twitter.difference) > 0){
            return (
              <img src={green} className="arrow"></img>
            )
          }
          else {
            return (
              <img src={red} className="arrow"></img>
            )
          }
        }
      })()}
      {(() => {
        if (props.platform == "/static/media/instagram.80e598d8.png") {
          if (data.platforms.map((items) => items.instagram.difference) > 0){
            return (
              <div className = 'greencolor'>
              {data.platforms.map((items) => items.instagram.difference)}
              </div>
            )
          } else {
          return (
            <div className = 'redcolor'>
              {data.platforms.map((items) => items.instagram.difference) + " Today"}
            </div>
          )}}
        else if (props.platform == "/static/media/youtube.145fc780.png") {
            if (data.platforms.map((items) => items.youtube.difference) > 0){
              return (
                <div className = 'greencolor'>
                {data.platforms.map((items) => items.youtube.difference) + " Today"}
                </div>
              )
            } else {
            return (
              <div className = 'redcolor'>
                {data.platforms.map((items) => items.youtube.difference) + " Today"}
              </div>
            )}}
        else if (props.platform == "/static/media/facebook.6c83ee5c.png") {
              if (data.platforms.map((items) => items.facebook.difference) > 0){
                return (
                  <div className = 'greencolor'>
                  {data.platforms.map((items) => items.facebook.difference) + " Today"}
                  </div>
                )
              } else {
              return (
                <div className = 'redcolor'>
                  {data.platforms.map((items) => items.facebook.difference) + " Today"}
                </div>
              )}}
        else {
                if (data.platforms.map((items) => items.twitter.difference) > 0){
                  return (
                    <div className = 'greencolor'>
                    {data.platforms.map((items) => items.twitter.difference) + " Today"}
                    </div>
                  )
                } else {
                return (
                  <div className = 'redcolor'>
                    {data.platforms.map((items) => items.twitter.difference) + " Today"}
                  </div>
                )}}
          })()}
          </div>
          </div>
    </div>
    )
}

export default Followers
