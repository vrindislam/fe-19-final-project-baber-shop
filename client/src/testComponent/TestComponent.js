import React from 'react';
import {Typography,Space} from 'antd';
const { Title } = Typography;

const TestComponent = () => (
  <>
    <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}>
      <Space align="start">
        <img
          style={{width: 40, height: 40 }}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="Ant Design"
        />
        <Title level={2} style={{ marginBottom: 0 }}>
          Ant Design
        </Title>
      </Space>
    </section>

  </>
);

export default TestComponent;