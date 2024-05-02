const Hero = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Your feet deserve the best and we are here to help 
                    you to our shoes. 
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button  className="secondary-btn">Catagory</button>
                </div>
 
                <div className="shopping"> 
                    <p>Available On</p>

                    <div className="brand-icons">
                    <img src="/Images/amazon.png" alt="amazon-logo " />
                    <img src="/Images/flipkart.png" alt="amazon-logo " />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/Images/hero-image.png" alt="" />
                
            </div>

        </main>
    );
};

export default Hero;