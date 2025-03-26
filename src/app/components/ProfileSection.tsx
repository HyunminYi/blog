import BaseSection from '@/app/components/ui/BaseSection'
import ProfileIcon from '@/app/components/ui/Icons/ProfileIcon'

const ProfileSection = () => {
  return (
      <>
        <BaseSection>
          <div className="flex flex-1 flex-col gap-2 bg-orange-200">
          <div className="rounded-full w-48 h-48 bg-white flex justify-center items-center">
          <ProfileIcon width={ 148 } height={ 148 } />
          </div>
          <h2 className="font-bold text-2xl">이현민</h2>
          <p className="">Github</p>
          <h2>이현민</h2>
          <h3>프론트엔드 개발자</h3>
          <p>이메일 <span>smurf@kakao.com</span></p>
          <p>연락처 <span>010-0000-0000</span></p>
          <p>1993.09.26</p>
          <hr />
          <div className="max-w-80">
          <p>React,Next,TypeScript를 주로 사용합니다.</p>
          <p>Tailwind CSS,Styled-Components,CSS Modules 등 다양한 방법으로 스타일링 할 수 있습니다.</p>
          <p>Tanstack-Query를 주로 사용하여 클라이언트에서 데이터 상태를 관리합니다.</p>
          <p>Redux와 같은 컴포넌트간 전역 상태관리를 사용합니다.Zustand,Jotai 등 를 주로 사용합니다. </p>
          <p>Compound 컴포넌트 패턴을 적용하여, 컴포넌트의 재사용에 높이기 용이해 디자인 시스템 프로젝트시 작업하여 활용하였습니다. </p>
          <p>덧붙여 스토리북을 이용하여 디자인시스템을 설계,작업해본적 있습니다.</p>
          <p>REST API 뿐만 아니라 TRPC를 통해 서비스를 개발해본 경험이 있습니다. </p>
          </div>
          <hr />
          </div>
          <div className="flex flex-1 flex-col">
            <h3>기술 스택</h3>
            <p>React,Next.js,Typescript,HTML/CSS,Figma</p>
            <h3>About me</h3>
            <p>안녕하세요. 개발 자체에 집중하고 개발,UI/UX 디자인 등 웹 전반의 재미를 느끼며 작업하는 개발자 이현민입니다. </p>
            <h3>Career</h3>
            <p>WithusInt 24.04 - 24.10 프론트엔드 개발</p>
            <p>웅진 * 스나이퍼 팩토리 UI/UX 디자인 인턴형 프로그램</p>
            <h3>Education</h3>
            <p>포스코 * 코딩온 웹개발자 부트캠프 6기 </p>
            <h3>포트폴리오</h3>
            <p>URL</p>
            <p>깃허브 링크입니다.</p>
            <p>포트폴리오 입니다.</p>
          </div>
        </BaseSection>
      </>
  );
};

export default ProfileSection;
