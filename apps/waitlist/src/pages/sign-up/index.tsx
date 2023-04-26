import React, { useEffect } from 'react';
import {
  InputWithCountryCode,
  Input,
  SelectWithOptions,
} from '../../public/components/custom/input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppThunkDispatch, useAppSelector } from '../../redux/store';
import { CSelect } from '../../public/components/custom/input';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../redux/reducers/auth/thunkAction';
import { ImSpinner3 } from 'react-icons/im';
import { useAuth } from '../../public/context/auth-context';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Enter your full name'),
  email: Yup.string().email().required('Email is required'),
  foodInterest: Yup.string().required('Select an option'),
  phoneNumber: Yup.string().required('Enter your phone number'),
  shirtSize: Yup.string().required('Select a shirt size'),
});

export const SignUp = () => {
  const data = [{ value: 'Fries', label: 'Fries' }];
  const dispatch = useAppThunkDispatch();
  const navigate = useNavigate();
  const { setName, email } = useAuth();
  const { loading } = useAppSelector(({ authReducer }) => authReducer);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      foodInterest: '',
      phoneNumber: '',
      shirtSize: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      await dispatch(signUp(values)).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          setName(
            values.name.split(' ').length > 1
              ? values.name.split(' ')[1]
              : values.name.split(' ')[0]
          );
          navigate('/confirmation-page');
        }
      });
    },
  });

  useEffect(() => {
    if(email){
      setFieldValue('email', email);
    }
  }, [email])


  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="w-full lg:w-1/2  h-full border flex overflow-scroll justify-center items-center">
        <div className="bg-[url('assets/images/svgs/ec.svg')] top-0 left-0 absolute bg-contain w-[300px] h-[300px] bg-no-repeat" />
        <div className="lg:w-[80%] w-[90%] sign overflow-x-hidden bg-white h-[90%] z-40 p-[10px] lg:p-[30px] pt-[70px] rounded-[20px] border-8 border-[#FCE6E4]">
          <div className="flex w-[115%] justify-between item-center">
            <div className="flex justify-start items-center space-x-4">
              <div className="bg-[url('assets/images/svgs/chow-logo-black.svg')] w-[68px] h-[56px] bg-contain bg-no-repeat" />
              <div className="font-sans text-[#009F79] rounded-[40px] border-2 border-[#D2FFF4] text-[12px] font-normal pl-[15px] pr-[15px] pt-[5px] pb-[5px] bg-[#ECFFFA]">
                coming soon
              </div>
            </div>
            <div className="flex justify-center items-center w-[80px] h-[80px] rounded-[50px] bg-[tranparent]">
              <div className="flex justify-center items-center lg:w-[80px] absolute w-[50px] h-[50px] lg:h-[80px] rounded-[50px] bg-[#009F79]">
                <div className="bg-[url('assets/images/svgs/div.svg')]  lg:w-[60px] w-[30px] h-[30px] lg:h-[60px] bg-center bg-contain bg-no-repeat" />
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="font-pangram-medium text-black text-[24px] lg:text-[40px]">
                Get early access
              </div>
              <div className="font-pangram-regular text-[#858786] leading-[18px] text-[14px]">
                Be one of the first to know when we launch
              </div>
            </div>
          </div>

          <div className="lg:pt-[50px]">
            <Input
              name="name"
              className="name"
              onChange={handleChange}
              onBlur={handleBlur}
              label="Full name"
              err={!!errors.name && touched.name}
              errMsg={errors.name}
              placeholder="Enter full name"
            />
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              value={values.email}
              className="email"
              err={!!errors.email && touched.email}
              errMsg={errors.email}
              label="Email"
              placeholder="Enter your email"
            />
            <InputWithCountryCode
              className="phoneNumber"
              onChange={(e) => setFieldValue('phoneNumber', e)}
              err={!!errors.phoneNumber && touched.phoneNumber}
              errMsg={errors.phoneNumber}
            />

            <CSelect
              setFieldValue={setFieldValue}
              value={values.foodInterest}
              err={!!errors.foodInterest && touched.foodInterest}
              errMsg={errors.foodInterest}
            />
            <SelectWithOptions
              setFieldValue={setFieldValue}
              value={values.shirtSize}
              err={!!errors.shirtSize && touched.shirtSize}
              errMsg={errors.shirtSize}
            />
            <button
              onClick={() => handleSubmit()}
              className="bg-[#009F79] w-[256px] flex justify-center items-center space-x-4˝ font-pangram-normal text-white mt-[60px] mb-[50px] h-[56px] rounded-[56px]"
            >
              <div>JOIN WAITLIST - IT’S FREE </div>
              {loading === 'pending' && (
                <span className="spinner">
                  <ImSpinner3 />
                </span>
              )}
            </button>
          </div>
        </div>
        {/* <div className="bg-[url('assets/images/svgs/image.svg')] z-40 bg-contain absolute bg-left-bottom bottom-0 left-0 lg:w-[150px] w-[100px] h-[100px] lg:h-[150px] bg-no-repeat" /> */}
      </div>
      <div className="lg:flex hidden w-1/2 bg-[url(assets/images/svgs/s-bg.svg)] bg-cover bg-no-repeat h-full flex justify-center items-center">
        <div className="font-pangram-bold text-white text-[52px]">
          Ready, Set,{' '}
          <span className="bg-[#D87023] border-2 border-white rounded-[33px] pl-[15px] pr-[15px]">
            🍲Chow!
          </span>
        </div>
      </div>
    </div>
  );
};
