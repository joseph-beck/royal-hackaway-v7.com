import { BigBlink } from '../ui/blink';
import { Sponsor } from '../ui/sponsor';
import { H2, H3, H4 } from '../ui/title';
import redbull_logo from '@/public/redbull_logo.svg';
import github_logo from '@/public/github_logo.svg';
import rhsu_logo from '@/public/rhsu_logo_black.webp';
import rhul_logo from '@/public/royalholloway.webp';
import rhul_cs_logo from '@/public/cs_department_logo.gif';
import hackathons_uk_logo from '@/public/hacakthons_uk_logo.svg';
import mlh_logo from '@/public/mlh_logo.svg';
import verdn from '@/public/verdn.jpg';
import pilk from '@/public/pilk_logo.png';
import sf from '@/public/sf-colour.svg';

export const Sponsors = (): JSX.Element => {
  return (
    <div className="mb-10" id="sponsors">
      <H2 text="Meet our Sponsors!" />
      <div className="w-full">
        <div className="mx-auto w-fit mb-16 mt-8">
          <BigBlink
            text="Want to sponsor us?"
            href="mailto:computing@royalholloway.su"
            target="_blank"
          />
        </div>
      </div>
      <div>
        <div>
          <H3 text="Platinum"></H3>
          <H4 text="Nothing yet, could you be the first?"></H4>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Gold"></H3>
          <div
            className={`grid ${true ? 'justify-center' : 'grid-cols-1 lg:grid-cols-3'
              } gap-4 lg:gap-8 mx-auto place-content-center`}
          >
            <Sponsor
              name="CS Department"
              img={rhul_cs_logo}
              alt="RHUL CS Department Logo"
              href="https://www.royalholloway.ac.uk/research-and-teaching/departments-and-schools/computer-science/"
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Silver"></H3>
          <div
            className={`grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 mx-auto place-content-center`}
          >
            <Sponsor name="Verdn" img={verdn} alt="Verdn Logo" href="https://verdn.com/" />
            <Sponsor name="Pilk" img={pilk} alt='Pilk Logo' href="https://pilk.uk/" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Bronze"></H3>
          <div
            className={`grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 mx-auto place-content-center`}
          >
            <Sponsor
              name="StoryFutures"
              img={sf}
              alt="Story Futures Logo"
              href="https://www.storyfutures.com/"
              className='bg-black p-4 scale-[50%]'
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Supporter"></H3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-auto place-content-center">
            <Sponsor
              name="Red Bull"
              img={redbull_logo}
              alt="Red Bull Logo"
              href="https://www.redbull.com/"
            />
            <div className=" scale-[60%]">
              <Sponsor
                name="Github"
                img={github_logo}
                alt="Github Logo"
                href="https://github.com/"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Partner"></H3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-auto">
            <Sponsor
              name="RHSU"
              img={rhsu_logo}
              alt="RHSU Logo"
              href="https://www.su.rhul.ac.uk/"
            />
            <div className="mx-auto">
              <Sponsor
                name="RHUL"
                img={rhul_logo}
                alt="RHUL Logo"
                href="https://www.royalholloway.ac.uk/"
              />
            </div>
            <Sponsor
              name="Hackathons UK"
              img={hackathons_uk_logo}
              alt="Hackathons UK Logo"
              href="https://www.hackathons.org.uk/"
            />
            <Sponsor name="MLH" img={mlh_logo} alt="MLH Logo" href="https://mlh.io/" />
          </div>
        </div>
      </div>
    </div>
  );
};
