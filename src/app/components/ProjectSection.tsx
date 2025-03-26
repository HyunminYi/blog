import BaseSection from '@/app/components/ui/BaseSection'
import ProfileIcon from '@/app/components/ui/Icons/ProfileIcon'

const ProjectSection = () => {
  return (
      <>
        <BaseSection>
          <div className="flex flex-1 flex-col">
          <ProfileIcon width={ 148 } height={ 148 } />
          <h2>프로젝트 명</h2>
          <div>
            <p>skill stack</p>
            <p>작업기간</p>
            <p>URL</p>
            <p>상태</p>
          </div>
            <hr/>
            <p>
              설명
            </p>
          </div>
        </BaseSection>
      </>
  );
};

export default ProjectSection;
