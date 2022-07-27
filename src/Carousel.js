import Carousel from 'react-bootstrap/Carousel';

function CarouselFade() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://image.invaluable.com/housePhotos/Hindman/62/727962/H0587-L296102374.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Tommy Watson</h3>
                    <p>Desert country west of Irrunytju, or Wingellina, in Western Australia</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://image.invaluable.com/housePhotos/Cooee/18/719018/H21060-L281950023_original.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className="text-warning bg-dark">
                    <h3>Naata Nungurrayi</h3>
                    <p>Kumilnga, west of the Pollock Hills in Western Australia</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/jhanamillers/images/view/ad433e29f2e815d68d3e0586e030d5f3j/jhanamillersgallery-alan-ibell-the-missing-journal-entry-2022.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Alan Ibell</h3>
                    <p>Christchurch, New Zealand</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFade;