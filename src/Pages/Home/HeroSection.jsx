export default function HeroSection(){
    return(
        <section id="heroSection" className="hero--Section">
            <div className="hero--Section--content-box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm John</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam minus sit deserunt aspernatur, tempore officiis tenetur! Harum, minima fugiat.

                        <br />

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nostrum commodi consequatur animi illo sit voluptatibus laborum dicta voluptatem necessitatibus.

                    </p>
                </div>
            <button className="btn btn-primary">Get in touch</button>
            </div>
            <div className="hero--sectio--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    );
    
}
