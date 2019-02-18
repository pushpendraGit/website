import React from 'react'
import { Link } from 'gatsby'

import bem from 'utils/bem'
import { Wrap, Space } from 'blocks'
import Layout from 'components/Layout';

import './support.sass'

const b = bem.lock('SupportPage')

class Support extends React.Component {
  handleOpenChat(e) {
    e.preventDefault();
    window.FrontChat('show');
  }

  render() {
    return (
      <Layout>
        <Space both="10">
          <Wrap>
            <div className={b()}>
              <div className={b('left')}>
                <div className={b('logo')}>
                  <img alt="Stefano Verna" src="https://www.cantierecreativo.net/images/members/stefano-verna-802ffcbd.jpg" className={b('person')} />
                  <img alt="Irene Oppo" src="https://www.cantierecreativo.net/images/members/irene-oppo-e048f9a8.jpg" className={b('person')} />
                  <img alt="David Librera" src="https://www.cantierecreativo.net/images/members/david-librera-22a232ef.jpg" className={b('person')} />
                  <img alt="Yoe Jates" src="https://www.cantierecreativo.net/images/members/joe-yates-146f33f4.jpg" className={b('person')} />
                </div>
                <div className={b('title')}>
                  We're here to help!
                </div>
                <div className={b('content')}>
                  Just write us using <button onClick={this.handleOpenChat.bind(this)}>the chat widget</button> or
                  send us a mail at <a href="mailto:support@datocms.com">support@datocms.com</a>, we'll get back to
                  you as soon as possible.<br/>You can also find help in our awesome <Link to="/slack/">Slack channel</Link>.
                </div>
                <div className={b('info')}>
                  Higher priority will be given to customers with plans with guarantees of faster response times.
                </div>
              </div>
              <div className={b('right')}>
              </div>
            </div>
          </Wrap>
        </Space>
      </Layout>
    );
  }
}

export default Support

