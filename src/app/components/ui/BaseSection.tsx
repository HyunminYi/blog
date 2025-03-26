const BaseSection = ({children}) => {
  return (
      <>
        <section className="flex w-full flex-1 p-5 bg-[#e7e6ed]">
          {children}
        </section>
      </>
  );
};

export default BaseSection;
