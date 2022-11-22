import { Tabs } from 'antd';
import React from 'react';

function TabsComponent() {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="МАССАЖ" key="1">
          Content of Tab Pane 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="СПА" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
export default TabsComponent;
