import "./App.css";
import { team, content } from "./data";

function App() {
  return (
    <div className="App">
      <header className="container flex-box flex-col pb-32 md:px-32 px-4">
        <img className="my-5 rounded-full" src={content.main.logo} alt="icon" />
        <h1 className="font-extrabold pb-5">{content.main.title}</h1>
        <h3 className="pb-5">{content.main.description}</h3>
        <h4 className="uppercase text-blue-800 text-3xl pb-5">{content.main.info}</h4>
        <p className="pb-4">{content.main.intro}</p>
        <div className="flex md:flex-row md:justify-evenly md:items-center">
          <a href={content.main.repository} className="p-3 flex-box">
            <p>Project Repository</p>
            <img className="team-img w-24 h-24" src="github.jpeg" alt="repo" />
          </a>
          <a href={content.main.link} className="p-3 flex-box">
            <p>Download Source</p>
            <img className="team-img w-24 h-24" src="download.jpeg" alt="repo" />
          </a>
        </div>


      </header>

      <main className="flex-box pb-32 px-5">
        <div className="container my-24 mx-auto ">
          <section className="mb-32 text-center">
            <h2 className="heading">
              Features
            </h2>
            <div className="grid gap-x-6 md:grid-cols-6 lg:gap-x-12">
              <div className="mb-24 md:mb-0">
                <div
                  className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">

                    </div>
                  </div>
                  <div className="p-4 divide-y">
                    <h5 className="text-lg  mb-4 font-bold text-blue-300">{content.Features[0].feature}</h5>
                    <p className="mb-6">{content.Features[0].intro}</p>

                  </div>
                </div>
              </div>

              <div className="mb-24 md:mb-0">
                <div
                  className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">

                    </div>
                  </div>
                  <div className="p-4 divide-y">
                    <h5 className="text-lg  mb-4 font-bold text-blue-300">{content.Features[1].feature}</h5>
                    <p className="mb-6">{content.Features[1].intro}</p>

                  </div>
                </div>
              </div>

              <div className="mb-24 md:mb-0">
                <div
                  className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">

                    </div>
                  </div>
                  <div className="p-4 divide-y">
                    <h5 className="text-lg  mb-4 font-bold text-blue-300">{content.Features[2].feature}</h5>
                    <p className="mb-6">{content.Features[2].intro}</p>

                  </div>
                </div>
              </div>

              <div className="mb-24 md:mb-0">
                <div
                  className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">

                    </div>
                  </div>
                  <div className="p-4 divide-y">
                    <h5 className="mb-4 text-blue-300 text-lg font-bold">{content.Features[3].feature}</h5>
                    <p className="mb-6">{content.Features[3].intro}</p>

                  </div>
                </div>
              </div>
              <div className="mb-24 md:mb-0">
                <div
                  className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">

                    </div>
                  </div>
                  <div className="p-4 divide-y">
                    <h5 className="mb-4 text-blue-300 text-lg font-bold">{content.Features[4].feature}</h5>
                    <p className="mb-6">{content.Features[4].intro}</p>

                  </div>
                </div>

              </div>
              <div className="mb-24 md:mb-0">
                <div
                  className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">

                    </div>
                  </div>
                  <div className="p-4 divide-y">
                    <h5 className="mb-4 text-blue-300 text-lg font-bold">{content.Features[5].feature}</h5>
                    <p className="mb-6">{content.Features[5].intro}</p>

                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>

        <hr />
        <div className="scroll-tap pb-32">
          <h2 className="heading">Usage</h2>
          <div className="">
            <div className="list-group">
              <h3 className="list-header">{content.Usage[0].step}</h3>
              <p className="list-main">{content.Usage[0].description}</p>
            </div>
            <div className="list-group">
              <h3 className="list-header">{content.Usage[1].step}</h3>
              <p className="list-main">{content.Usage[1].description}</p>
            </div>
            <div className="list-group">
              <h3 className="list-header">{content.Usage[2].step}</h3>
              <p className="list-main">{content.Usage[2].description}</p>
            </div>
            <div className="list-group">
              <h3 className="list-header">{content.Usage[3].step}</h3>
              <p className="list-main">{content.Usage[3].description}</p>
            </div>
          </div>
        </div>

        <hr />
        <div className="scroll-tap pb-32">
          <h2 className="heading">Configuration</h2>
          <div className="flex-box">
            <div className="grouplist">
              <h3 className="headlist">{content.Configuration[0].config}</h3>
              <p className="mainlist">{content.Configuration[0].intro}</p>
            </div>
            <div className="grouplist">
              <h3 className="headlist">{content.Configuration[1].config}</h3>
              <p className="mainlist">{content.Configuration[1].intro}</p>
            </div>
            <div className="grouplist">
              <h3 className="headlist">{content.Configuration[2].config}</h3>
              <p className="mainlist">{content.Configuration[2].intro}</p>
            </div>
            <div className="grouplist">
              <h3 className="headlist">{content.Configuration[3].config}</h3>
              <p className="mainlist">{content.Configuration[3].intro}</p>
            </div>
          </div>
        </div>


        <div className="container scroll-tap my-24 mx-auto md:px-6 pb-32">
          <section className="scroll-tap mb-32 text-center">
            <h2 className="heading mb-20">Acknowledgements</h2>

            <div className="grid lg:grid-cols-3 lg:gap-x-12">
              <div className="mb-12 lg:mb-0">
                <div className="block h-full rounded-lg bg-white shadow [0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex justify-center">
                    <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                      <img
                        className="team-img"
                        src='gpt.jpeg'
                        alt="team"
                      />
                    </div>
                  </div>
                  <div className="p-4 divide-y">
                    <h5 className="mb-4 font-semibold text-blue-300">{content.Acknowledgements[0].skill}</h5>
                    <p>
                      {content.Acknowledgements[0].description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12 lg:mb-0">
                <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex justify-center">
                    <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                      <img
                        className="team-img"
                        src='golang.jpeg'
                        alt="team"
                      />
                    </div>
                  </div>
                  <div className="p-4 divide-y">
                    <h5 className="mb-4 font-semibold text-blue-300">{content.Acknowledgements[1].skill}</h5>
                    <p>
                      {content.Acknowledgements[1].description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex justify-center">
                    <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                      <img
                        className="team-img"
                        src="github.jpeg"
                        alt="team"
                      />
                    </div>
                  </div>
                  <div className="p-4 divide-y">
                    <h5 className="mb-4 font-semibold text-blue-300">{content.Acknowledgements[2].skill}</h5>
                    <p>
                      {content.Acknowledgements[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32">
            <h2 className="heading">
              Installation
            </h2>

            <div className="flex-box flex-wrap">
              <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
                <div className="mb-12 flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="h-6 w-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-2 font-bold">{content.Installation[0].step}</p>
                    <p className="text-neutral-500 dark:text-neutral-300">
                      {content.Installation[0].description}
                    </p>
                  </div>
                </div>

                <div className="mb-12 flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="h-6 w-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-2 font-bold">      {content.Installation[1].step}
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-300">
                      {content.Installation[1].description}
                    </p>
                  </div>
                </div>

                <div className="mb-12 flex">
                  <div className="shrink-0">
                    <div className="rounded-md p-4 shadow-lg bg-[hsl(231,52.6%,20%)] dark:bg-[hsl(231,52.6%,30%)]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="h-6 w-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-2 font-bold">{content.Installation[2].step}
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-300">
                      {content.Installation[2].description}
                    </p>
                  </div>
                </div>


              </div>
            </div>
          </section>
        </div>


      </main>

      <footer className="flex-box scroll-tap">
        <h2 className="heading">Our Team</h2>
        <div className="flex-box flex-col md:flex-row pb-24 pt-8">

          <div className="colab">
            <img
              className="team-img"
              src={team.contributor1.image}
              alt="team"
            />
            <h4 className="px-5 text-blue-200 text-2xl">{team.contributor1.name}</h4>
            <p>{team.contributor1.job}</p>
          </div>

          <div className="colab">
            <img
              className="team-img"
              src={team.contributor2.image}
              alt="team"
            />
            <h4 className="px-5 text-blue-200 text-2xl">{team.contributor2.name}</h4>
            <p>{team.contributor2.job}</p>
          </div>
          <div className="colab">
            <img
              className="team-img"
              src={team.contributor3.image}
              alt="team"
            />
            <h4 className="px-5 text-blue-200 text-2xl">{team.contributor3.name}</h4>
            <p>{team.contributor3.job}</p>
          </div>
          <div className="colab">
            <img
              className="team-img"
              src={team.contributor4.image}
              alt="team"
            />
            <h4 className="px-5 text-blue-200 text-2xl">{team.contributor4.name}</h4>
            <p>{team.contributor4.job}</p>
          </div>
          <div className="colab">
            <img
              className="team-img"
              src={team.contributor5.image}
              alt="team"
            />
            <h4 className="px-5 text-blue-200 text-2xl">{team.contributor5.name}</h4>
            <p>{team.contributor5.job}</p>
          </div>
        </div>
        <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700 flex-end w-screen">
          <p className="py-2">{content.License.info}</p>
          <span className="">© 2023 By💟. All Right Reserved.</span>
          <a
            className="font-semibold text-neutral-600 dark:text-neutral-400"
            href={content.main.link}
          >
            WhizApp
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
