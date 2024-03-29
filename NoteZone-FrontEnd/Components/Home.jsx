import Notes from "./Notes";

const Home = () => {

  


  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // You can handle form submission logic here
  };

  return (
    <div>
      <div className="container my-3">
        <h3>Add a Note</h3>
        <form onSubmit={handleSubmit} className="my-4">
          <div className="form-group mb-3">
            {/* Added margin bottom to form group */}
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group mb-3">
            {/* Added margin bottom to form group */}
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-check mb-3">
            {/* Added margin bottom to form check */}
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div>
        <Notes/>
      </div>
    </div>
  );
}

export default Home;
