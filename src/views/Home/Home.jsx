import React from "react";


export default function Home() {

    return (
        <main className="shadow-sm">
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">React App Base</h1>
                        <img src="/assets/images/logo.png" className="mx-1 my-1" alt="..."/>
                        <div className="row mt-3 justify-content-between">
                            <div className="col-3 badge bg-primary">
                                React js
                            </div>
                            <div className="col-3 badge bg-primary">
                                React Router
                            </div>
                            <div className="col-3 badge bg-primary">
                                Bootstrap
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
  