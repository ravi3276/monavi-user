import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Message from './Message';
import Post from './Post';
import Footer from './Footer';
import BitcoinGuide from './BitcoinGuide';
import Nasdaq from './Nasdaq';
import NasdaqGuide from './NasdaqGuide';
import Bitcoin from './Bitcoin';
import NasdaqGuideDes from './NasdaqGuideDes';
import View from './View';
import BitcoinGuideDes from './BitcoinGuideDes';
import BitcoinView from './BitcoinView';
import RankingBtns from './RankingBtns';
import Rankings from './Rankings';
import ItemShop from './ItemShop';
import ItemShopBuy from './ItemShopBuy';
import Community from './Community';
import CommunityDes from './CommunityDes';
import ServiceCenter from './ServiceCenter';
import InfoBtns from './InfoBtns';
import InfoAcc from './InfoAcc';
import InfoGame from './InfoGame';
import InfoMyItem from './InfoMyItem';
import ClubBtns from './ClubBtns';
import ClubBenefits from './ClubBenefits';
import ClubMember from './ClubMember';
import Login from './Login';

function App() {
  const user="null";
  return (
    <div className="app">
    {
      !user ? (
        <Login />
      ):(
        <>
        <Router>

        <Header />
    
        <div className="app__body">
        <div className="ap">
        <Post />
        <Switch>

        <Route path="/clubmember/benefits">
        <ClubBtns />
        <ClubBenefits />
        </Route>
    
        <Route path="/clubmember/member">
        <ClubBtns />
        <ClubMember />
        </Route>
    
        <Route path="/clubmember">
        <ClubBtns />
        <ClubMember />
        </Route>
    
        <Route path="/myinfo/myitems">
        <InfoBtns />
        <InfoMyItem />
        </Route>
    
        <Route path="/myinfo/gamepoint">
        <InfoBtns />
        <InfoGame />
        </Route>
    
        <Route path="/myinfo/info">
        <InfoBtns />
        <InfoAcc />
        </Route>
    
        <Route path="/myinfo">
        <InfoBtns />
        <InfoAcc />
        </Route>
    
        <Route path="/servicecenter">
        <ServiceCenter />
        <CommunityDes />
        </Route>
    
        <Route path="/community">
        <Community />
        <CommunityDes />
        </Route>
    
        <Route path="/itemshop">
        <ItemShop />
        <ItemShopBuy />
        </Route>
    
        <Route path="/ranking">
        <RankingBtns />
        <Rankings />
        </Route>
    
        <Route path="/nasdaq/mockinvestment">
        <NasdaqGuide />
        <View />
        </Route>
    
        <Route path="/nasdaq/guide">
        <NasdaqGuide />
        <View />
        </Route>
    
        <Route path="/nasdaq">
        <NasdaqGuide />
        <NasdaqGuideDes />
        <Nasdaq />
        </Route>
    
        <Route path="/bitcoin/mockinvestment">
        <BitcoinGuide />
        <BitcoinView />
        </Route>
    
        <Route path="/bitcoin/guide">
        <BitcoinGuide />
        <BitcoinView />
        </Route>
    
        <Route path="/bitcoin">
        <BitcoinGuide />
        <BitcoinGuideDes />
        <Bitcoin />
        </Route>
    
        <Route path="/">
        <NasdaqGuide />
        <NasdaqGuideDes />
        <Nasdaq />
        </Route>
    
        </Switch>
        </div>
    
        <Message />
        </div>

        </Router>
        <Footer />
        </>
      )
    }
    
    </div>
  );
}

export default App;
