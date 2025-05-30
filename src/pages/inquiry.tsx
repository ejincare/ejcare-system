import SubHeader from "@/components/SubHeader";
import { useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import ReCaptchaProvider from "@/components/ReCaptchaProvider";
import Layout from "@/components/Layout";

interface IFormProps {
  userName: string | undefined;
  phoneNumber: string | undefined;
  email: string | undefined;
  companyName: string | undefined;
  title: string | undefined;
  detail: string | undefined;
  funnel: string | undefined;
}

export default function Inquiry() {
  const [form, setForm] = useState<IFormProps>({
    userName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    title: "",
    detail: "",
    funnel: "",
  });

  const [errors, setErrors] = useState<Partial<IFormProps>>({});

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear the error for the field being edited
    });
  };

  const validateForm = () => {
    const newErrors: Partial<IFormProps> = {};

    //if (!form.userName) newErrors.userName = "이름을 입력해 주세요.";
    if (!form.phoneNumber) newErrors.phoneNumber = "연락처를 입력해 주세요.";
    //if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "유효한 이메일 주소를 입력해 주세요.";
    if (!form.companyName) newErrors.companyName = "신청단지명을 입력해 주세요.";
    //if (!form.title) newErrors.title = "제목을 입력해 주세요.";
    //if (!form.detail) newErrors.detail = "내용을 입력해 주세요.";
    //if (!form.funnel) newErrors.funnel = "유입경로를 선택해 주세요.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const inquiry_postData = async () => {
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    try {
      const response = await axios.post('https://admin.ejincare.com/wp-json/wp/v2/inquiry', {
        user_name: form.userName,
        user_phone: form.phoneNumber,
        user_email: form.email,
        user_company: form.companyName,
        title: form.title,
        user_content: form.detail,
        user_ref: form.funnel,
      });

      if (response) {
        Swal.fire({
          icon: "success",
          title: "접수 완료",
          text: "정상적으로 접수 완료되었습니다.",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <main className="max-w-screen-xl mx-auto grid sm:justify-center w-full text-center box-border px-5 xl:px-0 pt-[72px] md:gap-[90px] pb-[100px]">
        <SubHeader title_kor={"견적문의"} title_eng={"Inquiry"} />

        <div className="md:w-[1000px] bg-white md:bg-[#f2f2f6] rounded-[10px] px-4 pt-6 pb-8 md:p-16 flex flex-col gap-2 md:gap-5 text-si-primary-text">
          {/* <div className="flex flex-col gap-2">
            <label htmlFor="userName">이름</label>
            <input
              id="userName"
              name="userName"
              type="text"
              value={form.userName}
              onChange={onChangeValue}
              className="input-class"
            />
            {errors.userName && <span className="text-red-500">{errors.userName}</span>}
          </div> */}

          <ReCaptchaProvider>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
              <label htmlFor="phoneNumber" className="font-medium leading-[120%] text-[17px] text-[#131f35] w-[120px] xl:w-[140px] py-[10px] mr-[10px] text-left">연락처<span className="text-[#e68600] ml-[6px]">*</span>
              </label>
              <div className="flex flex-col gap-2 md:max-w-[580px] flex-1 w-full text-[17px]">
                <input 
                              id="phoneNumber"
                              name="phoneNumber"
                              type="phone"
                              pattern="^\d{3}-\d{3}-\d{4}$"
                              title="전화번호 형식이 올바르지 않습니다. (예: 010-1234-5678)"
                              value={form.phoneNumber}
                              onChange={onChangeValue}
                              
                              className="h-[52px] focus:outline-none focus:border-2 focus:border-si-gray-6 w-full leading-[120%] 900:max-w-[580px] border border-solid border-si-gray-3 rounded-[5px] p-4 placeholder:text-si-gray-6 text-black"
                              onKeyDown ={(e) => {
                                if (!/[0-9]/.test(e.key)) {
                                  e.preventDefault(); // Prevent non-numeric input
                                }
                              }}
                />
                 {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
                </div>
            </div>
            <div className="flex justify-between w-full md:max-w-[580px] ml-auto"></div>
          </div>
          </ReCaptchaProvider>
          
          {/* <div className="flex flex-col gap-2">
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              name="email"
              type="text"
              value={form.email}
              onChange={onChangeValue}
              className="input-class"
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div> */}

          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
              <label htmlFor="companyName" className="font-medium leading-[120%] text-[17px] text-[#131f35] w-[120px] xl:w-[140px] py-[10px] mr-[10px] text-left">신청단지명<span className="text-[#e68600] ml-[6px]">*</span>
              </label>
              <div className="flex flex-col gap-2 md:max-w-[580px] flex-1 w-full text-[17px]">
                <input 
                 id="companyName"
                 name="companyName"
                 type="text"
                 pattern="^[가-힣0-9a-zA-Z\s]+$"
                 title="한글, 숫자, 영문만 입력 가능합니다."
                 value={form.companyName}
                 onChange={onChangeValue}
                 className="h-[52px] focus:outline-none focus:border-2 focus:border-si-gray-6 w-full leading-[120%] 900:max-w-[580px] border border-solid border-si-gray-3 rounded-[5px] p-4 placeholder:text-si-gray-6 text-black"
                  />
                {errors.companyName && <span className="text-red-500">{errors.companyName}</span>}  
                  </div>
            </div>
            <div className="flex justiTfy-between w-full md:max-w-[580px] ml-auto"></div>
          </div>

          <div className="flex justify-end w-full md:max-w-[580px] ml-auto mt-4">
            <button
              className="right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={inquiry_postData}
            >
              제출
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
