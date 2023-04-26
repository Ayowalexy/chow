import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ChangeEvent } from 'react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import useMediaQuery from '../hooks/useMediaquery';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import { AiFillCaretDown } from 'react-icons/ai';
import { foodInterest } from '../utils/images';

export type selectProps = {
  value: string;
  label: string;
};

type dataProps = {
  props: {
    label: string;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: ChangeEvent<HTMLElement>) => void;
    err?: boolean;
    errMsg?: string;
    name: string;
    className?: string;
    value?: string;
  };
  data: selectProps[];
};

type props = dataProps['props'];

export const Input = ({
  label,
  placeholder = 'Enter value',
  onBlur,
  onChange,
  err,
  errMsg,
  name,
  className,
  value
}: props) => {
  useEffect(() => {
    if (err && className) {
      const doc = document.querySelector(`.${className}`);
      doc?.classList.toggle('shake');
    }
  }, [err, className]);
  return (
    <div className={`w-full mt-[25px] box ${className}`}>
      <div className="font-sans text-black text-[12px] pb-[5px] uppercase">
        {label}
      </div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="focus:outline-none text-[#000] placeholder:font-pangram-light w-[100%] h-[56px] rounded-[12px] bg-[#F2F3F7] pl-[20px] placeholder:text-[#A8A8A8] font-normal"
        placeholder={placeholder}
      />
      {err && (
        <div className="text-[red] font-pangram-light text-[13px]">
          {errMsg}
        </div>
      )}
    </div>
  );
};

type inputProps = {
  onChange: (e: string) => void;
  err: boolean | undefined;
  errMsg: string | undefined;
  className?: string;
};

export const InputWithCountryCode = ({
  onChange,
  err,
  errMsg,
  className,
}: inputProps) => {
  const [phone, setPhone] = useState<string>('');
  return (
    <div className="font-normal mt-[25px]">
      <div className="font-sans text-black text-[12px] pb-[5px] uppercase">
        WHATSAPP NUMBER{' '}
        <span className="font-pangram-light text-[#A8A8A8]">(OPTIONAL)</span>
      </div>
      <PhoneInput
        country={'ng'}
        // value={phone}
        buttonStyle={{
          width: '60px',
          paddingLeft: '10px',
          border: 'none',
          backgroundColor: '#F2F3F7',
          borderRadius: '12px',
        }}
        onChange={onChange}
        inputStyle={{
          width: '100%',
          height: 56,
          backgroundColor: '#F2F3F7',
          borderRadius: '12px',
          border: 'none',
          paddingLeft: 80,
        }}
      />
      {err && (
        <div className="text-[red] font-pangram-light text-[13px]">
          {errMsg}
        </div>
      )}
    </div>
  );
};

export const Select = (data: dataProps) => {
  const { label, placeholder = 'Select an option', err, errMsg } = data.props;
  const options = data.data;

  return (
    <div className="w-full mt-[25px]">
      <div className="font-sans text-black text-[12px] pb-[5px] uppercase">
        {label}
      </div>
      <select
        className="focus:outline-none mb-[25px] pl-[20px] pl-[20px] border-r-[20px] border-[#F2F3F7] placeholder:font-pangram-light w-[100%] h-[56px] rounded-[12px] bg-[#F2F3F7]  placeholder:text-[#A8A8A8] font-normal"
        placeholder={placeholder}
      >
        {options.map((element) => (
          <option
            className="font-pangram-light"
            key={element.label}
            value={element.value}
          >
            {element.label}
          </option>
        ))}
      </select>
      {err && (
        <div className="text-[red] font-pangram-light text-[13px]">
          {errMsg}
        </div>
      )}
    </div>
  );
};

type CselectProps = {
  setFieldValue: (a: string, b: string) => void;
  err?: boolean;
  errMsg?: string;
  value: string | undefined;
};

export const CSelect = ({
  setFieldValue,
  err,
  errMsg,
  value,
}: CselectProps) => {
  const menuItems = foodInterest.map((element: string, idx: number) => (
    <MenuItem
      className="border-0 cursor-pointer flex h-[40px] w-full pb-[20px] justify-start items-center space-x-2 shadow-none"
      key={idx.toString()}
      onClick={() => setFieldValue('foodInterest', element)}
    >
      <div className="w-[15px] h-[15px] border border-[#D87023] flex justify-center items-center rounded-[5px]">
        {value === element && (
          <div className="w-[70%] h-[70%] rounded-[2px] bg-[#D87023]" />
        )}
      </div>
      <div className="font-sans text-[14px] text-black font-normal">
        {element}
      </div>
    </MenuItem>
  ));
  const menu = (
    <div className="bg-white p-[30px] w-full h-[300px] overflow-scroll border-0 shadow-lg rounded-[20px]">
      <div className="font-pangram-medium text-[18px] text-black pb-[30px]">
        Foods you’re interested in
      </div>
      <Menu className="border-0 shadow-none">{menuItems}</Menu>
    </div>
  );

  return (
    <>
      <div className="font-sans mt-[25px] text-black text-[12px] pb-[5px] uppercase">
        FOODS YOU’RE INTERESTED IN
      </div>
      <Dropdown overlay={menu}>
        <button className="pr-[20px] pl-[20px] flex justify-between items-center text-[#000] placeholder:font-pangram-light w-[100%] h-[56px] rounded-[12px] bg-[#F2F3F7] pl-[20px] placeholder:text-[#A8A8A8] font-normal">
          <div>{value ? value : 'Select an option'}</div>
          <AiFillCaretDown />
        </button>
      </Dropdown>
      {err && (
        <div className="text-[red] font-pangram-light text-[13px]">
          {errMsg}
        </div>
      )}
    </>
  );
};

export const SelectWithOptions = ({
  setFieldValue,
  value,
  err,
  errMsg,
}: CselectProps) => {
  return (
    <div className="w-full mt-[25px]">
      <div className="font-sans text-black text-[12px] pb-[5px] uppercase">
        T-shirt size
      </div>
      <div className="flex justify-start items-center space-x-4">
        {['S', 'M', 'L', 'XL', 'XXL'].map((element) => (
          <button
            onClick={() => setFieldValue('shirtSize', element)}
            style={{
              backgroundColor: value === element ? '#009F79' : '#F5F4F3',
              color: value === element ? '#fff' : '#000',
              transition: 'ease all 300ms',
            }}
            className="w-[56px] border-[#FBFBFB] font-pangram-normal rounded-[12px] text-[16px] lg:text-[20px] text-black h-[56px] bg-[#F5F4F3] border-2 border-[#FBFBFB]"
            key={element}
          >
            {element}
          </button>
        ))}
      </div>
      {err && (
        <div className="text-[red] font-pangram-light text-[13px]">
          {errMsg}
        </div>
      )}
    </div>
  );
};
