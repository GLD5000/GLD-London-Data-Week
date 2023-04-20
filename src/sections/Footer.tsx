import AtiSvg from '../assets/AtiSvg';
import LotiSvg from '../assets/LotiSvg';
import GldSvg from '../icons/GldSvg';
import HorizontalDivider from '../icons/HorizontalDivider';
import ExternalLink from './header/ExternalLink';

export default function Footer() {
  return (
    <footer id="footer" className=" flex flex-shrink-0 flex-grow-0 flex-col flex-wrap items-center gap-2 py-4 text-sm">
      <div
        className=" relative grid gap-10 w-body-sm min-w-body  max-w-body items-center
                sm:w-body "
      >
        <h2 className="w-fit mx-auto mt-24 text-center text-lg md:text-2xl font-bold decoration text-txt-mid dark:text-txt-mid-dk">
          London Data Week is made possible by:
        </h2>
        <div className=" relative flex flex-row mx-auto h-[20vw] items-center max-h-[5rem] w-fit max-w-[27rem] gap-6">
          <a
            className="w-fit h-full max-h-[5rem] basis-0 grow"
            href="https://loti.london/"
            target="_blank"
            rel="noreferrer"
          >
            <LotiSvg />
          </a>

          <HorizontalDivider />
          <a
            className="w-fit  h-full max-h-[5rem] basis-0 grow"
            href="https://www.turing.ac.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <AtiSvg />
          </a>
        </div>
        <img
          className="bg-darkblue dark:bg-transparent rounded-2xl w-full  max-w-[27rem] mx-auto"
          role="presentation"
          src="./CorporateLogos.png"
          alt="corporate-logos"
        />
        <div className="grid gap-4 mb-6">
          <p key="text" className="m-0 w-fit mx-auto text-txt-mid dark:text-txt-mid-dk ">
            Design: London Data Week Team
          </p>
          <ExternalLink
            layoutClasses="w-fit mx-auto"
            link="https://gld-portfolio.vercel.app/"
            content={
              <p key="text" className="m-0 ">
                Web Development: Gareth L Devlin
              </p>
            }
          />
          <ExternalLink
            layoutClasses="w-fit mx-auto"
            link="https://gld-portfolio.vercel.app/"
            content={<GldSvg key="svg" />}
          />
        </div>
      </div>
    </footer>
  );
}
