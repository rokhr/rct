import React from "react";
import SampleText from "../components/sampleText";

class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        ページ2
        <SampleText sampleMessage="こちらはページ2です！" />
      </React.Fragment>
    );
  }
}
export default Page;
