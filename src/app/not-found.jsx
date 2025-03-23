const NotFound = () => {
  return (
      <>
        <h1>404 Not Found</h1>
        <p>
        요청한 페이지를 찾을 수 없습니다. 사이트 관리자에게 문의해 주세요.
        </p>
        <p>
        This is not the webpage you are looking for.
        </p>
        <div className="flex gap-4 flex-col">
        <button>페이지 전으로 돌아가기</button>
        <button>메인화면</button>
        </div>
      </>
  );
};

export default NotFound;
