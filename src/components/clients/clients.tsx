import React from "react";
import { Container, Row } from "react-bootstrap";

export const Clients = () => {
	return (
		<section className="clients">
			<Container>
				<Row as="ul" className="list-unstyled m-0">
					<li className="clients-item col-sm-6 col-lg-3">
						<img
							className="clients-image img-fluid"
							src="https://htmlstream.com/preview/stream-ui-kit/assets/img-temp/partners/img2.png"
							alt="Image Description"
						/>
					</li>
					<li className="clients-item col-sm-6 col-lg-3">
						<img
							className="clients-image img-fluid"
							src="https://htmlstream.com/preview/stream-ui-kit/assets/img-temp/partners/img3.png"
							alt="Image Description"
						/>
					</li>
					<li className="clients-item col-sm-6 col-lg-3">
						<img
							className="clients-image img-fluid"
							src="https://htmlstream.com/preview/stream-ui-kit/assets/img-temp/partners/img4.png"
							alt="Image Description"
						/>
					</li>
					<li className="clients-item col-sm-6 col-lg-3">
						<img
							className="clients-image img-fluid"
							src="https://htmlstream.com/preview/stream-ui-kit/assets/img-temp/partners/img5.png"
							alt="Image Description"
						/>
					</li>
				</Row>
			</Container>
		</section>
	);
};
