import './App.css';
import Header from './header';
import img_girl from './img_girl.jpg';
import Languages from './Language';
import Skills from './Skills';
import Details from './Details';
import Experience from './Experience';
import Education from './Education';
import Footer from './footer';
import { useState } from "react";

function App() {

  const [data, setData] = useState(['Frontned/ReactJS developer', 'Singapore', 'aswany.mail@gmail.com', '98133771']);
  const [newData, setNewData] = useState('');
  let [uname, setNameChange] = useState("Aswany Das");

  const [lang, setLanguage] = useState(['English', 'Hindi']);
  const [inputLang, setInputLang] = useState('');

  const [showHeader, changeShowHeader] = useState(true);

  const [name, setName] = useState('');
  const [newQualification, setNewEdu] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newSkill, setNewSkill] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [role, setRole] = useState('');
  const [expDate, setExpDate] = useState('');

  const [showLanguage, changeLanguage] = useState(true);
  const [showExperience, changeExperience] = useState(true);
  const [showEducation, changeEducation] = useState(true);

  const [edu, setEdu] = useState([{ Qualification: 'B. TECH Computer Science & Engineering', date: '2011-2015' }]);

  // []

  //{ Qualification: 'B. TECH Computer Science & Engineering', date: '2011-2015' }

  // {Qualification: 'sdfsdfsd', date: '2010'  } //a.push([])




  const [skill, setSkill] = useState(['JavaScript', 'ReactJS', 'HTML 5', 'CSS 3']);
  const [Exp, setExp] = useState([{
    jobTitle: 'Front End Developer / ellow.io',
    role: 'Frontend Application development using ReactJS.HTML 5, CSS 3 development. Unit Testing.Deployment.'
  },
  {
    jobTitle: 'Front End Developer / liveoutage.com',
    role: 'Frontend Application development using ReactJS.HTML 5, CSS 3 development. Unit Testing.Deployment.'
  },
  {
    jobTitle: 'Web developer / QCD Technology Pte Ltd',
    role: 'Frontend Application development using ReactJS.HTML 5, CSS 3 development. Unit Testing.Deployment.'
  }])

  const changeName = () => {
    if (uname === 'Raj') {
      setNameChange('Aswany Das');
    } else {
      setNameChange('Raj');
    }
  }

  const changeLan = () => {
    if (lang.length === 2) {
      setLanguage(['English']);
    }
    else {
      setLanguage(['English', 'Hindi']);
    }
  }

  const changeData = () => {
    if (data.length === 4) {
      setData(['Frontned/ReactJS developer', 'Singapore', 'aswany.mail@gmail.com', '98133771', 'Dependent Visa']);
    }
    else {
      setData(['Frontned/ReactJS developer', 'Singapore', 'aswany.mail@gmail.com', '98133771']);
    }
  }

  const changeSkill = () => {
    if (skill.length === 4) {
      setSkill(['JavaScript', 'ReactJS', 'HTML 5', 'CSS 3', 'C']);
    }
    else {
      setSkill(['JavaScript', 'ReactJS', 'HTML 5', 'CSS 3']);
    }
  }

  const sortSkill = () => {
    let dummyArr = skill;
    let temp = dummyArr[0];
    let c = [];
    let l = skill.length;

    for (let i = 0; i < l; i++) {

      for (let j = 0; j < l; j++) {

        if (temp > dummyArr[j]) {

          temp = dummyArr[j]
        }

      }

      for (let j = 0; j < l; j++) {

        if (temp === dummyArr[j]) {

          dummyArr.splice(j, 1);

        }
      }

      c.push(temp);

      temp = skill[0];

    }

    // console.log(c);

    setSkill(c);

  }

  const changeEdu = () => {
    if (Object.keys(edu).length === 1) {
      setEdu([{ Qualification: 'B. TECH Computer Science & Engineering', date: '2011-2015' },
      { Qualification: 'Plus Two', date: '2009' },
      { Qualification: 'Tenth', date: '2011' }])
    }
    else {
      setEdu([{ Qualification: 'B. TECH Computer Science & Engineering', date: '2011-2015' }]);
    }
  }
  const addData = () => {
    let tempData = data;
    tempData.push(newData);
    setNewData('');
    setData(tempData);

  }
  const addEdu = () => {
    let tempEdu = edu;
    tempEdu.push({ Qualification: newQualification, date: newDate });

    setNewEdu('');
    console.log(tempEdu);
    setEdu(tempEdu);
  }

  const addExperience = () => {
    let tempExperience = Exp;
    tempExperience.push({ jobTitle: jobTitle, role: role, date: expDate });
    setJobTitle('');
    setExp(tempExperience);
  }
  const addName = () => {
    setNameChange(name);

  }

  const show = () => {
    if (showHeader === true) {
      changeShowHeader(false);
    }
    else {
      changeShowHeader(true);
    }
  }

  const addLang = () => {

    let tmpLang = lang; //copy to temp
    tmpLang.push(inputLang); //push add to array

    setInputLang(''); //useState clear input field
    setLanguage(tmpLang);  // set new language
  }

  const addSkill = () => {
    let tempSkill = skill;

    tempSkill.push(newSkill);
    setNewSkill('');
    setSkill(tempSkill);
  }
  const showLang = () => {
    if (showLanguage === true) {
      changeLanguage(false);
    }
    else {
      changeLanguage(true);
    }
  }

  const showExp = () => {
    if (showExperience === true) {
      changeExperience(false);
    }
    else {
      changeExperience(true);
    }
  }

  const showEdu = () => {
    if (showEducation === true) {
      changeEducation(false);
    }
    else {
      changeEducation(true);
    }
  }

  const changeExp = () => {
    if (Object.keys(Exp[0]).length === 2) {
      setExp([{
        jobTitle: 'Front End Developer / ellow.io',
        role: 'Frontend Application development using ReactJS.HTML 5, CSS 3 development. Unit Testing.Deployment.',
        date: '2022'
      },
      {
        jobTitle: 'QCD Technologies',
        role: 'Testing Android and ios devices,Bug Tracking.',
        date: '2019-2020'
      }
      ])
    }
    else {
      setExp([{
        jobTitle: 'Front End Developer / ellow.io',
        role: 'Frontend Application development using ReactJS.HTML 5, CSS 3 development. Unit Testing.Deployment.'
      },
      {
        jobTitle: 'Front End Developer / liveoutage.com',
        role: 'Frontend Application development using ReactJS.HTML 5, CSS 3 development. Unit Testing.Deployment.'
      },
      {
        jobTitle: 'Web developer / QCD Technology Pte Ltd',
        role: 'Frontend Application development using ReactJS.HTML 5, CSS 3 development. Unit Testing.Deployment.'
      }])
    }
  }

  return (
    <div class="w3-light-grey">
      <div class="w3-content w3-margin-top" >
        <div class="w3-row-padding">
          <div class="w3-third">
            <div class="w3-white w3-text-grey w3-card-4">
              <div class="w3-display-container">
                <img src={img_girl} alt="Avatar" width={'100%'} />
                <div class="w3-container w3-text-black">
                </div>
                <Header uname={uname} />
              </div>
              <div class="w3-container">
                <Details data={data} />
                <Skills skill={skill} />
                <Languages lang={lang} />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div class="w3-twothird">
            < Experience Exp={Exp} />
            <Education edu={edu} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App
