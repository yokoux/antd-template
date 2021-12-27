import { FC } from "react";
import {Layout as ProLayout} from 'antd'


const { Header, Content, Footer } = ProLayout

const Layout: FC = ({ children }) => {
    return (
       <ProLayout>
           <Header>Header</Header>
           <Content>
               { children }
           </Content>
           <Footer>Footer</Footer>
       </ProLayout>
    )
}

export default Layout