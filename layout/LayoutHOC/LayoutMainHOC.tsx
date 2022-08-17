import React, { FunctionComponent } from 'react';
import { LayoutMain } from '../LayoutMain';

export const withLayoutMain = <T extends Record<string, unknown>> (Component: FunctionComponent<T>): FunctionComponent<T> => {
    
  const withLayoutMainComponent = (props: T): JSX.Element => {
      return (
        <LayoutMain>
          <Component { ...props }/>
        </LayoutMain>
      );
  };

  return withLayoutMainComponent;
};

/* export function withExtraInfo<P>(
  
  WrappedComponent: React.ComponentType<P>
): React.ComponentType<P> {

  const ComponentWithExtraInfo = (props: P): JSX.Element => {
    // At this point, the props being passed in are the original props the component expects.
    return <WrappedComponent
      { ...props }
    />;
  };
  return ComponentWithExtraInfo;
} */