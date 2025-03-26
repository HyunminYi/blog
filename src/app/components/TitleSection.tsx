import Title from '@/app/components/ui/Title'
import BaseTab from '@/app/components/ui/BaseTab'
import Shortcut from '@/app/components/ui/Shortcut'

const TitleSection = () => {
  return (
      <header className="flex gap-8 items-center justify-between px-4 p-2 border-black border-b">
        <Title/>
        <BaseTab/>
        <Shortcut/>
      </header>
  );
};

export default TitleSection;
