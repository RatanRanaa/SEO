function ScrollButton() {
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    return (
      <button className=" text-white font-bold py-2 px-4 rounded fixed bottom-4 right-4 shadow-md" onClick={scrollToTop}>
        <img className=" w-16" src="https://thumbs.dreamstime.com/z/up-arrow-icon-flat-black-round-button-vector-illustration-design-isolated-142988552.jpg" alt="logo" />
      </button>
    );
  }
  
  export default ScrollButton;