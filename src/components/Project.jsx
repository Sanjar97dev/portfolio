import React from "react";

const Project = () => {
  return (
    <>
      <div className="bg-indigo-800 m-5 md:m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10">Проект</h1>
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Оорукананы башкаруу системасы
                  </div>
                  <a href="#" className="text-indigo-600 font-bold">Чакан аталыш</a>
                  <p className="mt-2 text-slate-500">
                    {"Ооруканаларды башкаруу системасы (HMS) - бул саламаттыкты сактоо мекемесинин ишин борборлоштурган жана оптималдаштырган санариптик чечим. Ал пациенттердин жазууларынан, жолугушууларды пландаштыруудан жана эсепке алуудан баштап инвентаризацияга жана кызматкерлерге чейин баарын башкарат. Бул функцияларды бириктирүү менен, HMS эффективдүүлүгүн жогорулатат, маалыматтардын тактыгын жакшыртат жана пациенттерге жакшыраак кам көрүүнү камсыз кылат. Электрондук ден соолук жазуулары (EHR) жана жөнөкөйлөштүрүлгөн иш процесстери сыяктуу өзгөчөлүктөр менен, ал медициналык тейлөөчүлөргө административдик чыгымдарды азайтып, сапаттуу жардам көрсөтүүгө көңүл бурууга мүмкүндүк берет.".slice(0, 200)+"..."}
                  </p>
                </div>

                <div className="md:shrink-0 p-5">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhfn-QElzZkz1gyplOqEgj7uLQS2smyFCeQ&s"
                    alt="image"
                    className="w-32 h-32 md:w-40 md:h-40 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Мектепти башкаруу системасы
                  </div>
                  <a href="#" className="text-indigo-600 font-bold">Чакан аталыш</a>
                  <p className="mt-2 text-slate-500">
                    {"Мектепти башкаруу системасы (SMS) мектеп ичиндеги административдик, академиялык жана коммуникация процесстерин иретке келтирүүгө жана автоматташтырууга арналган санариптик платформа. Ал окуучулардын жазууларын, сабакка катышуусун, бааларды, графиктерди жана төлөмдөрдү башкаруу үчүн куралдарды сунуштайт, ошол эле учурда мугалимдер, студенттер жана ата-энелер үчүн байланышта болуу үчүн порталдарды камсыз кылат.".slice(0,181)+"..."}
                  </p>
                </div>

                <div className="md:shrink-0 p-5">
                  <img
                    src="https://e7.pngegg.com/pngimages/551/136/png-clipart-student-national-primary-school-middle-school-school-painted-rectangle-thumbnail.png"
                    alt="image"
                    className="w-32 h-32 md:w-40 md:h-40 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Инвестициялык башкаруу системасы
                  </div>
                  <a href="#" className="text-indigo-600 font-bold">Чакан аталыш</a>
                  <p className="mt-2 text-slate-500">
                    {"Инвестицияларды башкаруу системасы (IMS) - финансылык активдерди башкарууну тартипке келтирүү үчүн иштелип чыккан программалык платформа. Бул колдонуучуларга инвестициялык портфелдерди көзөмөлдөөгө, иштин натыйжалуулугун баалоого,тобокелдиктердин деңгээлин анализдөөгө мүмкүнчүлүк берет.".slice(0,136)+"..."}
                  </p>
                </div>

                <div className="md:shrink-0 p-5">
                  <img
                    src="https://e7.pngegg.com/pngimages/143/33/png-clipart-investment-computer-icons-finance-chart-icon-investment-saving-text-thumbnail.png"
                    alt="image"
                    className="w-32 h-32 md:w-40 md:h-40 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Диний руханий, өнүктүрүү тармагы
                  </div>
                  <a href="#" className="text-indigo-600 font-bold">Чакан аталыш</a>
                  <p className="mt-2 text-slate-500">
                    {"Ислам – бул бир кудайга, руханий өсүү жолун да камтыган ишеним. Ислам жашоонун бардык аспектилери, анын ичинде адеп-ахлак, жамаат жана инсандык өнүгүү үчүн принциптерди сунуш кылат.".slice(0,200)+"..."}
                  </p>
                </div>

                <div className="md:shrink-0 p-5">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/007/903/324/small/mosque-dome-islam-minaret-tower-designs-logo-icon-vector.jpg"
                    alt="image"
                    className="w-32 h-32 md:w-40 md:h-40 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
