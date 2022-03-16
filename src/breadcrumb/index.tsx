import React from 'react';
import { Breadcrumb as AntdBreadcrumb, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './index.less';

interface Ipath {
  label: string;
  url: string;
}

export interface IBreadcrumb {
  pathList: Ipath[];
  title?: string;
  extra?: JSX.Element;
  children?: React.ReactNode;
}

const Breadcrumb = (props: IBreadcrumb) => {
  const filling = (path: Ipath) =>
    (typeof path.url === 'string' ? <Link to={path.url}>{path.label}</Link> : <>{path.label}</>);

  function title() {
    // @ts-ignore
    const realTitle = props.title ? props.title : [...props.pathList].pop().label;

    return <h2>{realTitle}</h2>;
  }

  console.log('extra', props.extra);
  return (
    <div className="jt-breadcrumb-wrapper">
      <div className="breadcrumb-container">
        <AntdBreadcrumb>
          {props.pathList &&
            props.pathList instanceof Array &&
            props.pathList.map(path => (
              <AntdBreadcrumb.Item key={path.url}>{filling(path)}</AntdBreadcrumb.Item>
            ))}
        </AntdBreadcrumb>
        <Row style={{ marginTop: '24px' }}>
          <Col span={12}>{title()}</Col>
          <Col span={12} className="ta-r">
            {props.extra}
          </Col>
        </Row>
        {props.children}
      </div>
    </div>
  );
};

export default Breadcrumb;
