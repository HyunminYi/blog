import ProfileIcon from '@/app/components/ui/Icons/ProfileIcon'
import ProfileSection from '@/app/components/ProfileSection'
import ProjectSection from '@/app/components/ProjectSection'

export default function Home() {
  return (
      <>
    <div className="flex p-8 w-full gap-16 justify-center">
      <main className="flex gap-8 row-start-2 justify-between w-full h-screen p-4">
        <ProfileSection/>
        <ProjectSection/>
      </main>
    </div>
      </>
  );
}
