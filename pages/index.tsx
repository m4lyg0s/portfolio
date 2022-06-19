import type { NextPage } from 'next'
import { Breadcrumb, Card, Descriptions, PageHeader, Tabs, Timeline } from 'antd';
import { Content } from 'antd/lib/layout/layout';

const Home: NextPage = () => {
  const { TabPane } = Tabs;
  return (
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="About me" key="1">
            <PageHeader title='About me' />
            <Descriptions title="User Info" layout="vertical">
              <Descriptions.Item label="Name">M4LYG0S</Descriptions.Item>
              <Descriptions.Item label="Skill">ここにスキルセット</Descriptions.Item>
            </Descriptions>
          </TabPane>
          <TabPane tab="Work" key="2">
            <PageHeader title='Work' />
            <div className="site-layout-content">
              <Timeline mode='alternate'>
                <Timeline.Item>
                  <Card title="2018">
                    <div>C#を用いたWindowsアプリ開発に携わる</div>
                    <div>C#の基礎,.NET Framework,Unitテストを経験</div>
                  </Card>
                </Timeline.Item>
                <Timeline.Item>
                  <Card title="2019">
                    <div>ASP.NETを用いたWebアプリケーション開発チームに異動</div>
                    <div>C#を用いたビジネスロジック部分,多言語化対応</div>
                    <div>jQuery,javascript,html,cssによるフロント実装</div>
                  </Card>
                </Timeline.Item>
                <Timeline.Item>
                  <Card title="2020">
                    <div>ASP.NETアプリケーションをリプレース</div>
                    <div>AWS一部サービスを使用し,社内業務改善（lambda,eventbriage,stepfunctions,SNS,）</div>
                  </Card>
                </Timeline.Item>
                <Timeline.Item>
                  <Card title="2021">
                    <div>クレジットカード決済機能の実装</div>
                    <div>Stripeを用いたフロントエンド実装</div>
                    <div>swagger editor,openapi generator,ASP.NEt Coreを用いたAPI実装</div>
                    <div>実現に向け関連部門との社内折衝業務</div>
                  </Card>
                </Timeline.Item>
              </Timeline>
            </div>
          </TabPane>
          <TabPane tab="App" key="3">
            <PageHeader title='App' />
          </TabPane>
        </Tabs>
      </Breadcrumb>
    </Content>
  )
}

export default Home
