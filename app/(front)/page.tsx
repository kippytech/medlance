import DoctorsList from "@/components/DoctorsList";
import Hero from "@/components/Frontend/Hero";
import MegaMenu from "@/components/Frontend/MegaMenu";
import TabSection from "@/components/Frontend/TabSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* <MegaMenu /> */}
      <Hero />
      <TabSection />
      <DoctorsList title='Telehealth visit' />
      <DoctorsList title='In-person doctor visit' isInPerson={true} />
    </main>
  );
}
