import { Layout } from 'antd';
import { Sidebar } from '../Sidebar/Sidebar';
import 'antd/dist/antd.min.css';
const { Sider, Content } = Layout;

const AppContent = ({ children }) => {
    return (
        <Layout>
            <Sider width="100px">
                <Sidebar />
            </Sider>
            <Layout>
                <Content>{children}</Content>
            </Layout>
        </Layout>
    );
};

export default AppContent;
