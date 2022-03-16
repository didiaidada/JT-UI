import React from 'react';
import SearchInput, { ISearchInput } from '../search-input';
import Breadcrumb, { IBreadcrumb } from '../breadcrumb';
import './index.less';

interface ITopDownLayout {
  title?: string;
  showSearch?: ISearchInput;
  breadcrumb?: IBreadcrumb;
  topInnerComponent?: JSX.Element;
  downInnerComponents?: JSX.Element[] | JSX.Element;
}

const EmptyComponent = () => <div className="empty"></div>;

const TopComponent = (props: Omit<ITopDownLayout, 'downInnerComponentList'>) => {
  if (props.breadcrumb) {
    return (
      <div className="jt-top-wrapper">
        <div className="jt-top-breadcrumb">
          <Breadcrumb {...props.breadcrumb}>
            {props.showSearch && (
              <div className="jt-top-search">
                <SearchInput {...props.showSearch} />
              </div>
            )}
            {props.topInnerComponent}
          </Breadcrumb>
        </div>
      </div>
    );
  }
  return (
    <div className="jt-top-wrapper">
      <div className="jt-top-inner">
        {props.title && <div className="jt-top-title">{props.title}</div>}
        {props.showSearch && <SearchInput {...props.showSearch} />}
        {props.topInnerComponent}
      </div>
    </div>
  );
};

const DownInnerComponent = (props: Pick<ITopDownLayout, 'downInnerComponents'>) => {
  if (!props.downInnerComponents) {
    return (
      <div className="jt-down-wrapper">
        <EmptyComponent />
      </div>
    );
  }
  if (!Array.isArray(props.downInnerComponents)) {
    return <div className="jt-down-wrapper">{props.downInnerComponents}</div>;
  }
  return (
    <React.Fragment>
      {props.downInnerComponents.map(component => (
        <div className="jt-down-wrapper">{component}</div>
      ))}
    </React.Fragment>
  );
};

const TopDownLayout = (props: ITopDownLayout) => (
  <div className="jt-updown-component">
    <TopComponent
      title={props.title}
      showSearch={props.showSearch}
      breadcrumb={props.breadcrumb}
      topInnerComponent={props.topInnerComponent}
    />
    <DownInnerComponent downInnerComponents={props.downInnerComponents} />
  </div>
);

export default TopDownLayout;
