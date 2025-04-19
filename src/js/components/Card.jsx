import React from "react";

const Card = (props)=>{
    return(
                <div className="card">
					<img src={props.image} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
						<div className="card-body">
							<h5 className="card-title">{props.title}</h5>
							<p className="card-text">{props.description}</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item d-flex align-items-center justify-content-center">
								<a className="btn btn-primary">Boton1</a>
							</li>
						</ul>
					</div>
    );
}

export default Card;