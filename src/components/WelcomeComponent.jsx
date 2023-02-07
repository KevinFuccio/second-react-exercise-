function welcome(prop) {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{prop.title}</h1>
        <p className="col-md-8 fs-4">{prop.mainText}</p>
        <button className="btn btn-primary btn-lg" type="button">{prop.buttonText}</button>
      </div>
    </div>
  );
}
export default welcome
