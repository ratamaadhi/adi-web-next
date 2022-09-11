import * as Icons from 'react-icons/fa';

export const ListIcon = Object.keys(Icons);

function DynamicIcons({ code = 'FaGlobe', size = 16, ...props }) {
  if (!(code in Icons))
    return <div {...props}>{Icons['FaGlobe']({ size })}</div>;

  return <div {...props}>{Icons[code]({ size })}</div>;
}

export default DynamicIcons;
