

import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <div className='flex border-b-2 justify-between items-center max-w-7xl mx-auto'>
      <h1 className="text-6xl">Knowledge Cafe</h1>
      <img src={profile} alt="" />
  
    </div>
    
  );
};

export default Header;