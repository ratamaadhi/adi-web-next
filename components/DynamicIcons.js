import { useEffect } from 'react';
import * as Icons from 'react-icons/fa';

export const ListIcon = Object.keys(Icons);

function DynamicIcons({ code = 'FaGlobe', size = 16, ...props }) {
  useEffect(() => {
    console.log('code', code);
    console.log('Icons ' + code, Icons[code] !== undefined);
    const filterIcons = Object.keys(Icons).filter((key) => key.includes(code));
    console.log('filterIcons', filterIcons);
  }, [code]);
  if (!(code in Icons))
    return <div {...props}>{Icons['FaGlobe']({ size })}</div>;

  return <div {...props}>{Icons[code]({ size })}</div>;
}

export default DynamicIcons;
