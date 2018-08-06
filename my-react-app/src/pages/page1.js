import React from "react";
import SampleText from "../components/sampleText";

class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        ページ1
        <SampleText sampleMessage="こちらはページ1です。" />
      </React.Fragment>
    );
  }
}
export default Page;
