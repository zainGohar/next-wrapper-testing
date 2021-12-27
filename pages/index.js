import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Page from "../components/Page";
// import { addCount } from '../store/count/action'
import { wrapper } from "../store/configureStore";
// import { serverRenderClock, startClock } from '../store/tick/action'
import { insertFromServer, getFromclient } from "./../store/transactionData";

const Index = (props) => {
  let account_id = "";
  useEffect(() => {
    account_id = props.getFromclient();
  }, [props]);
console.log("account_id"+ account_id);
  return <Page AccountId={account_id} />;
};

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(insertFromServer("123"));
});

const mapDispatchToProps = (dispatch) => {
  return {
    getFromclient: bindActionCreators(getFromclient, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Index);
