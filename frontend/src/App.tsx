import { Layout } from "antd";
import "./assets/App.css";

import Referral from "./components/referral"

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  minHeight: '100vh',
  lineHeight: '80vh',
  color: 'black',
  padding: '50px'
}

function App() {
  return (
    <Layout>
      <Content style={contentStyle}>
        <Referral></Referral>
      </Content>
    </Layout>
  );
}

export default App;
