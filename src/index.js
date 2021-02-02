// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function Hi() {
//      return <div>
//             <strong>
//                   Hello World!
//                        </strong>
//                               <ul>
//                                  <li className="abc">Owais Madni</li>
//                                  <li className="abc">Owais Akram</li>
//                                  <li className="abc">Muaaz Awan</li>
//                                  <li className="abc">Hasnain</li>
//                             </ul>
//                      <br />
//              {10 * 5}
//      </div>;
// }
// function Hi() {
//      return <div>
//             <strong>
//                   Hello World!
//                        </strong>
//                               <ul>
//                                  <li className="abc">Owais Madni</li>
//                                  <li className="abc">Owais Akram</li>
//                                  <li className="abc">Muaaz Awan</li>
//                                  <li className="abc">Hasnain</li>
//                             </ul>
//                      <br />
//              {10 * 5}
//      </div>;
// }


// ReactDOM.render(<Hi />, document.querySelector('#root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function MediaCard({ profilePic, title, time, body, imgUrl }) {
  return <div>
    <div className="f-card">
      <div className="start">
        <img className="file" src={profilePic} />
        <div className="co-name"><a href="#">{title}</a></div>
        <div className="time"><a href="#">{time}</a></div>
      </div>
      <div className="content">
        <p>{body}</p>
      </div>
      <div className="ref">
        <img className="ref1" src={imgUrl} />
      </div>
    </div>
  </div>
}
ReactDOM.render(
  <>
    <MediaCard profilePic="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.15752-9/133360258_406000124077161_5239676675981625264_n.jpg?_nc_cat=111&ccb=2&_nc_sid=ae9488&_nc_ohc=inCgjD_5oeAAX97Cq90&_nc_ht=scontent.fkhi17-1.fna&oh=24db81ea379cb44d54d1cc54f638fb98&oe=6037BB83"
      title="Naeem" time={new Date().toLocaleTimeString()} body="Ahmad Noorani was born in Meerut, British India (now India), into an Urdu-speaking family on 31 March 1926 (17 Ramadan 1344). ... He received his BA degree in Arabic language from the Allahabad University, and certified from the Darul-Uloom in Meerut in Islamic jurisprudence.
      Born: 1 October 1926
      Died: 11 December 2003."
      imgUrl="data:image/jpeg;base64,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" />

    <MediaCard profilePic="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-9/132654139_1288853834834881_4707961375508408842_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=0bXfVcBbR3kAX9l5jJM&_nc_ht=scontent.fkhi17-1.fna&oh=8f28264e999ba015e624158cb26bc331&oe=6039F140"
      title="Owais Madni" time={new Date().toLocaleTimeString()} body=""
      imgUrl="https://3.bp.blogspot.com/-QJCpQrqZBWo/VyN6QMN1k2I/AAAAAAAAEuQ/_3LYYUrOEiUnSgKBSd2U_m5-Wfnoolb-ACLcB/s1600/I%2BLove%2BYou%2BMom%2BImages%2B%2526%2BQuotes%2BDownload%2B2016%252C%2BMothers%2BDay%2BGraphics%2B%2526%2BPoems.jpg" />

    <MediaCard profilePic="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-9/68495023_675020652964852_3608193117607428096_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=hdxhccdSL80AX-ZrCJ7&_nc_ht=scontent.fkhi17-1.fna&oh=c8fdb01f2f504cb7572550341a725449&oe=603989EC"
      title="Muaaz Awan" time={new Date().toLocaleTimeString()} body="He is Sunni Scholar of Pakistan associated with Ahle Sunnat Wal Jamaat.. Mufti Muneeb-ur-Rehman was born on 8 February 1945. He completed his master's ."
      imgUrl="https://img.dunyanews.tv/news/2019/June/06-03-19/news_big_images/494610_57112132.jpg" />

<MediaCard profilePic="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-9/26167459_231110554097991_950601932049036102_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_ohc=1isyqlhLdpwAX8TsZMM&_nc_oc=AQlkLZ5mCbyP-6_Gbifhu9K8c7gfH-cZNZHmELgmNf0q9rPXFp6pBtIRek6lx_Rtgxk&_nc_ht=scontent.fkhi17-1.fna&oh=d466ad8682761270df04590ce63288e9&oe=6039BCFC"
      title="Owais Akram" time={new Date().toLocaleTimeString()} body="Khadim Hussain Rizvi (Urdu: خادم حسین رضوی‎; 22 May 1966 – 19 November 2020) was a Pakistani Islamic scholar and the founder of Tehreek-e-Labbaik Pakistan."
      imgUrl="https://pakobserver.net/wp-content/uploads/2020/11/3-152.jpg" />

<MediaCard profilePic="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-9/132945622_836094230511436_4170628400005218275_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=0DvFMKAjSG4AX8X9v4t&_nc_ht=scontent.fkhi17-1.fna&oh=1bbf776c145360132d7f7693220d9ce1&oe=6038349D"
      title="Hasnain Ul Hassan" time={new Date().toLocaleTimeString()} body="Saad Hussain Rizvi is an Islamic cleric and current Ameer of the Tehreek-e-Labbaik Pakistan,  He is the son of previous TLP  Ameer  Allama Hafiz Khadim Hussain Rizvi."
      imgUrl="https://i.brecorder.com/primary/2020/11/5fb8f4e48132f.jpg" />
  </>,
  document.getElementById('root')
)