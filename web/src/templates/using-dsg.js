import * as React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import Seo from '../components/seo';
import '../index.scss';

const UsingDSG = () => {

    return (
        <Layout>
            <Header data={data} />
            <Main />
            <Footer />
        </Layout>
    )
}

export const Head = () => <Seo title="Home" />

export default UsingDSG;

