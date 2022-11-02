import './App.css';
import ProfileImg from "./ProfileImg";
// import Alerts from "./Alerts";
import { FaSlack } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import Footer from './Footer';

function App() {
  return (
    <div id="all">
    <ProfileImg />
    {/* <Alerts /> */}
    <a href="twitter.com" id="twitter">Twitter Link</a>
    {/* <a href="Slack.com" id="slack"> Slack Link</a> */}
    <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
    <a href="http://books.zuri.team" id="books">Zuri Books</a>
    <a href="https://books.zuri.team/python-for-beginners?ref_id=Radiostranger" id="book__python">Python Books</a>
    <a href="https://background.zuri.team" id="pitch">Backgound check for coders</a>
    <a href="https://books.zuri.team/design-rules" id="book__design">Design Books</a>
    <h3 id="socials">
      <FaSlack />
      <DiGithubBadge />
    </h3>
    <Footer />
    </div>
   
  )
}

export default App;
