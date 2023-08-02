"use client";
import { useTranslation } from 'next-i18next';
import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'

export default function Home() {
  const [selectOption, setSelectedOption] = useState("");
  const [animationComplete, setAnimationComplete] = useState(false);
  const [fadeOutComplete, setFadeOutComplete] = useState(true);
  const [fadeInComplete, setFadeInComplete] = useState(false);

  const {t} = useTranslation('common');
  useEffect(() => {
    setInterval(() => {
      setFadeOutComplete(false);
      setAnimationComplete(false);
      setSelectedOption("");

      const timeout = setTimeout(() => {
        setSelectedOption("option3");
      }, 1500);
      
      const fadeOutTimeout = setTimeout(() => {
        setAnimationComplete(true);
      }, 2000);
      const fadeInTimer = setTimeout(() => {
        setSelectedOption("");
        setFadeOutComplete(true);
        
      }, 4000);

      return () => {
        clearTimeout(timeout);
        clearTimeout(fadeOutTimeout);
        clearTimeout(fadeInTimer);
      }
    }, 5000);

  }, []);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='section'>
        <div className={`${animationComplete ? !fadeOutComplete ? 'fadeOut-active' : 'visible':'fadeOut'}`}>
          <h2 className='title'>{t("Which of the below statements about electricity is not true?")}</h2>
            <div className='slideInUp'>
            <div className={`${!fadeOutComplete  ? 'fadeIn': 'slideInUp'}`}>
              <div className='qstn'>
                <input name="radio" id="radio1" type="radio" onChange={() => setSelectedOption("option1")} checked={selectOption === "option1"} />
                <label htmlFor='radio1'>{t("Electricity is measured in units called watts")}</label>
              </div>
              <div className='qstn'>
                <input name="radio" id="radio2" type="radio" onChange={() => setSelectedOption("option2")} checked={selectOption === "option2"} />
                <label htmlFor='radio2'>{t("Electricity flows at the speed of light")}</label>
              </div>
              <div className='qstn'>
                <input name="radio" id="radio3" type="radio" onChange={() => setSelectedOption("option3")} checked={selectOption === "option3"} />
                <label htmlFor='radio3'>{t("Electricity is a primary energy source")}</label>
              </div>
            </div>
            </div>
        </div>
      </div>
    </main>
  )
}
