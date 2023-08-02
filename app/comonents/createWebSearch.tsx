const CreateWebSearch = () => {
  return (
    <>
      <div className="form-control flex flex-row items-center justify-center">
        <input
          type="text"
          placeholder="Create your own unique URL."
          className="input input-bordered w-24 md:w-auto"
        />
        <button className="btn btn-primary ml-2">Let's Encrypt! </button>
      </div>
    </>
  );
};

export default CreateWebSearch;
