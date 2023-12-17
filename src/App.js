import React from 'react'
import {Switch, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space, Menu } from 'antd';

import {Navbar, Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails  } from './components';
import './App.css';
import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectFilled, MoneyCollectOutlined } from '@ant-design/icons';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Switch>
                        <Route exact path='/'>
                            <Homepage />
                        </Route>
                        <Route exact path='/exchanges'>
                            <Exchanges />
                        </Route>
                        <Route exact path='/cryptocurrencies'>
                            <Cryptocurrencies />
                        </Route>
                        <Route exact path='/crypto/:coinId'>
                            <CryptoDetails />
                        </Route>
                        <Route exact path='news'>
                            <News />
                        </Route>
                    </Switch>
                </div>
            </Layout>

        </div>
        <div className='footer'>

        </div>
        
    </div>
  );
}

export default App