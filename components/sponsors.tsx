import { BigBlink, Blink } from "./blink";
import { Sponsor } from "./sponsor";
import { H2, H3, H4 } from "./title";
import stand_out_stickers_logo from "@/public/stand_out_stickers_logo.svg";
import bcs_logo from "@/public/bcs_logo.svg";
import rhsu_logo from "@/public/rhsu_logo_black.webp";
import rhul_logo from "@/public/royalholloway.webp";
import rhul_cs_logo from "@/public/cs_department_logo.gif";

interface Props {

}

export const Sponsors: React.FC<Props> = (): JSX.Element => {
  return (
    <div className="mb-10">
      <H2 text="Meet our Sponsors!"/>
      <div className="w-full">
        <div className="mx-auto w-fit mb-16 mt-8">
          <BigBlink text="Become a sponsor!" href="https://royalhackawayv7.tiiny.site/" target="_blank"/>
        </div>
      </div>
      <div>
        <div>
          <H3 text="Platinum"></H3>
          <H4 text="Nothing yet, could you be the first?"></H4>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Gold"></H3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <Sponsor
              name="CS Department"
              img={rhul_cs_logo}
              alt="RHUL CS Department Logo"
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Silver"></H3>
          <H4 text="Nothing yet, could you be the first?"></H4>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Bronze"></H3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <Sponsor
              name="BCS"
              img={bcs_logo}
              alt="BCS Logo"
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Supporter"></H3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <Sponsor
              name="Stand Out Stickers"
              img={stand_out_stickers_logo}
              alt="Stand Out Stickers Logo"
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <H3 text="Partner"></H3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <Sponsor
              name="RHSU"
              img={rhsu_logo}
              alt="RHSU Logo"
            />
            <Sponsor
              name="RHUL"
              img={rhul_logo}
              alt="RHUL Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
