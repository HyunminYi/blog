import ProfileIcon from '@/app/components/ui/Icons/ProfileIcon'
import ProfileSection from '@/app/components/ProfileSection'
import ProjectSection from '@/app/components/ProjectSection'

export default function Home() {
  return (
      <>
    <div className="flex flex-1 p-8 flex-col h-full w-full gap-16 justify-center">
      <main className="flex gap-8 justify-between w-full flex-1 p-4 bg-orange-500">
        <ProfileSection/>
        <ProjectSection/>
      </main>
    </div>
      </>
  );
}
