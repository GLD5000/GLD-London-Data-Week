import FullLogoWhiteColour from "../../assets/FullLogoWhiteColour";
import GroupLogoWhite from "../../assets/GroupLogoWhite";

export default function Hero() {
  return (
    <section id="hero-section" className="w-full min-h-screen items-center bg-darkblue p-4">
        <div className="h-fit grid gap-8">

        <FullLogoWhiteColour/>
        <div className=" ml-auto w-3/5">

        <GroupLogoWhite/>
        </div>
        </div>
    </section>
  )
}