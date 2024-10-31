import React from 'react';
import { useParams } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const skillsData = {
  html: {
    name: "HTML5",
    icon: <FaHtml5 color="#e34c26" />,
    stars: 5,
    first: "22 январь 2008 (16 жыл мурун)",
    latest: "5.2 (Экинчи ревизия) 14 Декабрь 2017 (6 жыл мурун)",
    description: "HTML5 (Hypertext Markup Language 5) - бүткүл дүйнөлүк желеде гипертексттик документтерди структуралаштыруу жана көрсөтүү үчүн колдонулган белгилөө тили. Бул бешинчи жана акыркы негизги HTML версиясы болгон.",
  },
  css: {
    name: "CSS3",
    icon: <FaCss3Alt color="#264de4" />,
    stars: 5,
    first: "17 Декабрь 1996 (27 жыл мурун)",
    latest: "CSS3 - стандарт.",
    description: "CSS (Cascading Style Sheets) веб-баракчаларды стилдөө үчүн колдонулган стилдер жадыбалынын тили, ал эми CSS3 анын жаңы мүмкүнчүлүктөрү жана модулдары менен өркүндөтүлгөн версиясы. CSS3 веб-дизайн үчүн көбүрөөк ийкемдүүлүктү жана функцияларды камсыз кылуу менен анимациялар, өтүүлөр, медиа сурамдары жана тегеректелген бурчтар сыяктуу жакшыртылган стилдөө мүмкүнчүлүктөрүн киргизет.",
  },
  js: {
    id: 'js',
    name: "JavaScript",
    icon: <FaReact color="#F7DF1E" />,
    stars: 5,
    first: "1995 (29 жыл мурун)",
    latest: "ECMAScript 2022 (2022)",
    description: "JavaScript – бул ECMAScript стандартына ылайык келген жогорку деңгээлдеги программалоо тили . Ал алгач веб-сайттар үчүн скрипт тили катары иштелип чыккан , бирок жалпы максаттуу программалоо тили катары кеңири кабыл алынганжана учурда колдонулуп жаткан эң популярдуу программалоо тили болуп саналат. [ 1 ] JavaScript адатта веб-браузерде интерактивдүү же автоматташтырылган мазмун катары иштейт, калкып чыкма билдирүүлөрдөн жана жандуу сааттардан чоң веб тиркемелерге чейин . JavaScript ошондой эле Node.js , [ 2 ] сыяктуу платформалар аркылуу сервердик программалоодо колдонулатже базалык программалоо тили JavaScript сунуш кылган жогорку деңгээлдеги функцияларга ээ болбогон JavaScript эмес тиркемелерде 'киргизилген'. Аты жана синтаксисиндеги окшоштуктарга карабастан , JavaScript Java программалоо тилине тиешеси жок . Эки тилдин аттары Oracle корпорациясынын соода белгилери болуп саналса да , эки тил ар кандай дизайн принциптерин карманышат жана бири-бирине тиешеси жок уюмдар тарабынан жигердүү иштелип чыгат.",
  },
  react: {
    name: "React",
    icon: <FaReact color="#61dbfb" />,
    stars: 4.5,
    first: "2013 (11 жыл мурун)",
    latest: "17.0.2 (2022)",
    description: "React (ошондой эле React.js же ReactJS деп аталат ) - бул Facebook Inc тарабынан компоненттердин негизинде колдонуучу интерфейстерин куруу үчүн акысыз жана ачык булактуу алдыңкы JavaScript китепканасы [ 4 ] [ 5 ] . Аны Meta (мурдагы Facebook) жана жеке иштеп чыгуучулардын жана компаниялардын коомчулугу тейлейт . [ 6 ] [ 7 ] [ 8 ] React Next.js сыяктуу алкактары бар бир беттик , мобилдик же сервердик тиркемелерди иштеп чыгуу үчүн колдонулушу мүмкүн . React колдонуучу интерфейси жана DOMга компоненттерди көрсөтүү менен гана алектенгендиктен , React колдонмолору көбүнчө маршрутташтыруу жана башка кардар тарабындагы функциялар үчүн китепканаларга таянышат . [ 9 ] [ 10 ] React'тин негизги артыкчылыгы - ал өзгөрүлбөгөн DOM элементтерин керексиз кайра көрсөтүүдөн качкан беттин өзгөргөн бөлүктөрүн гана кайра көрсөтөт. Ал биринчи жолу 2013-жылдын 29-майында ишке киргизилген. [ 11 ]",
  },
  node: {
    name: "Node.js",
    icon: <FaNodeJs color="#3c873a" />,
    stars: 4,
    first: "2009 (15 жыл мурун)",
    latest: "Node.js 18.x (2022)",
    description: 'Node.js – бул Windows , Linux , Unix , macOS жана башкаларда иштей турган кайчылаш платформа , ачык булактуу JavaScript иштөө чөйрөсү . Node.js V8 JavaScript кыймылдаткычында иштейт жана JavaScript кодун веб браузерден тышкары аткарат . Node.js иштеп чыгуучуларга JavaScriptти буйрук сабынын куралдарын жазуу жана сервердик скрипт үчүн колдонууга мүмкүндүк берет . Серверде JavaScript кодун иштетүү мүмкүнчүлүгү көбүнчө баракча колдонуучунун веб-браузерине жөнөтүлгөнгө чейин динамикалык веб-баракчанын мазмунун түзүү үчүн колдонулат. Демек, Node.js "бардык жерде JavaScript" парадигмасын билдирет , [ 6 ] сервердик жана кардар тараптагы программалоо үчүн ар кандай тилдерди колдонуудан айырмаланып, веб-тиркемени иштеп чыгууну бир программалоо тилинин айланасында бириктирет .'},
  git: {
    name: "Git",
    icon: <FaGitAlt color="#f1502f" />,
    stars: 4.5,
    first: "2005 (19 жыл мурун)",
    latest: "Git 2.x (2022)",
    description: "Git - бул кичинекейден абдан чоң долбоорлорго чейин бардыгын ылдамдык жана эффективдүү башкаруу үчүн иштелип чыккан эркин жана ачык булак бөлүштүрүлгөн версияны башкаруу системасы. Git үйрөнүү оңой жана чагылгандай ылдам иштөө менен кичинекей изи бар . Ал арзан жергиликтүү бутактандыруу , ыңгайлуу сахналаштыруу аймактары жана бир нече иш процесстери сыяктуу өзгөчөлүктөр менен Subversion, CVS, Perforce жана ClearCase сыяктуу SCM куралдарынан ашып түштү .",
  },
};

const SkillDetail = () => {
  const { skillId } = useParams();
  const skill = skillsData[skillId];

  if (!skill) return <div className="p-8 text-center text-white">Skill not found.</div>;

  return (
    <div className="p-10 bg-indigo-900 text-white flex flex-col items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md text-center">
        <div className="text-7xl mb-4">{skill.icon}</div>
        <h1 className="text-4xl font-bold text-indigo-800">{skill.name}</h1>
        <div className="flex justify-center space-x-1 text-yellow-500 my-4">
          {Array.from({ length: Math.floor(skill.stars) }, (_, i) => <BsStarFill key={i} />)}
          {skill.stars % 1 !== 0 && <BsStarHalf />}
          {Array.from({ length: 5 - Math.ceil(skill.stars) }, (_, i) => <BsStar key={i} />)}
        </div>
        <p className="text-gray-700 mt-4">{skill.description}</p>
        
        {/* Additional Information */}
        <div className="mt-6">
          <p className="text-gray-600"><strong>Башталгыч дата:</strong> {skill.first}</p>
          <p className="text-gray-600"><strong>Акыркы версия:</strong> {skill.latest}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
