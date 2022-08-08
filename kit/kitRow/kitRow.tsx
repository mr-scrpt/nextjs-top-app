import { KitRowProps } from './kitRow.props';

export const KitRow = ({ children, name }: KitRowProps):JSX.Element =>{

  return(
      <div className="">
          <div className="">{name}</div>
          <div className="">{children}</div>
      </div>
  );
};