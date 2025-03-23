const BaseSection = ({children}) => {
  return (
      <>
        <section className="flex flex-1">
          {children}
        </section>
      </>
  );
};

export default BaseSection;
