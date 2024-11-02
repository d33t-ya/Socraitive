import React from 'react';

interface Props {
  children: string;
}

export const AccentText: React.FunctionComponent<Readonly<Props>> = ({ children }): JSX.Element => {
  return <span className="font-semibold text-[#3a63ff]">{children}</span>;
};
