import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';

const CountryDropdown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const context = useContext(MyContext);

  useEffect(() => {
    if (context?.countryList) {
      setCountryList(context.countryList);
      setFilteredList(context.countryList);
    }
  }, [context?.countryList]);

  const selectCountry = (index, country) => {
    setSelectedTab(index);
    setIsOpenModal(false);
    context.setselectedCountry(country);
  };

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    const list = countryList.filter((item) =>
      item.country.toLowerCase().includes(keyword)
    );
    setFilteredList(list);
  };

  return (
    <>
      <Button className='countryDrop' onClick={() => setIsOpenModal(true)}>
        <div className='info d-flex flex-column'>
          <span className='label'>Your location</span>
          <span className='name'>
            {context.selectedCountry ? context.selectedCountry : 'SelectLocation'}
          </span>
        </div>
        <span className='ml-auto'><FaAngleDown /></span>
      </Button>

      <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className='LocationModel'>
        <h4 className='mb-0'>Choose your Delivery location</h4>
        <p className='mb-6'>Enter your address and we will specify the offer for your area.</p>
        <Button className='close_' onClick={() => setIsOpenModal(false)}><MdClose /></Button>

        <div className='headerSearch w-100' style={{ marginBottom: '24px' }}>
          <input type='text' placeholder="Search for your area..." onChange={filterList} />
          <Button className="searchBtn">
            <IoIosSearch />
          </Button>
        </div>

        <ul className='countryList mt-3'>
          {filteredList?.length !== 0 && filteredList?.map((item, index) => (
            <li key={index}>
              <Button
                onClick={() => selectCountry(index, item.country)} 
                className={selectedTab === index ? 'active' : ''}
              >
                {item.country}
              </Button>
            </li>
          ))}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
