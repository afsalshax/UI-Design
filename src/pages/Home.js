import React from 'react'
import "./Home.css"



function Home() {
  return (
    <div>
      <div class="a3">
        <img style={{position:'absolute',marginLeft:'-500px',width:'500px',marginTop:'150px'}} src="https://i.postimg.cc/mrJSPkGN/OIP-removebg-preview-1.png" alt="" />
        <div class="row g-0 text-center">
          <div class="a1 col-sm-6 col-md-4">
            <img style={{ height: '30px', width: '70px', marginRight: '80px', marginTop: '15px' }} src="https://i.postimg.cc/y6RHn67D/2-26056-nike-logo-png-white.png" alt="" />

            <div class="a8" >
              <a style={{marginRight:'20px',color:'white'}} href=""><img src="" alt="" /><i class="fa-brands fa-facebook"></i></a>
              <a style={{color:'white'}} href=""><img src="" alt="" /><i class="fa-brands fa-twitter"></i></a>
              <a style={{marginLeft:'20px',color:'white'}}  href=""><img src="" alt="" /><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          <div class="a2 col-6 col-md-8">

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav" style={{ marginLeft: '200px' }}>
                    <li class="nav-item" style={{ marginRight: "50px" }}>
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item" style={{ marginRight: "50px" }}>
                      <a class="nav-link" href="#">Shop</a>
                    </li>
                    <li class="nav-item" style={{ marginRight: "50px" }}>
                      <a class="nav-link" href="#">Sale</a>
                    </li>
                    <li class="nav-item" style={{ marginRight: "50px" }}>
                      <a class="nav-link" href="#">contact</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"><i class="fa-solid fa-bars"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <h1 style={{ marginRight: "470px", marginTop: "30px" }}><b>Nike</b></h1>
            <h1 style={{ marginRight: "230px", fontSize: '60px', marginTop: "-15px" }}><b>Air Max <span style={{ color: "pink", fontSize: '40px' }}>2090</span></b></h1>

           <div class="a10">
             <h1 style={{marginTop:'-20px',color:'pink'}}>___</h1>
             <h1 style={{marginTop:'-40px',color:'pink'}}>__</h1>
           </div>
            <h6 style={{textAlign:"left",marginTop:'30px',marginLeft:'150px'}}> 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br> Beatae autem necessitatibus,
              ducimus nulla pariatur <br/> nesciunt, libero sunt, est nam dolor<br></br> rem blanditiis tempore neque commodi esse suscipit eum
              assumenda illum?br<br/>Lorem. Recusandae odio consequuntur, vero  earum dolorum repudiandae eos!<br/> Nulla maiores ipsum necessitatibus minus <br/>placeat deserunt ullam exercitationem.
            </h6>
            <button style={{backgroundColor:"pink",borderRadius:'20px',marginTop:'5px',marginLeft:'550px'}} type="button" class="btn">Know More</button>
          

     <div class="a4" style={{display:"flex",marginLeft:'400px',justifyContent:'space-between',width:"40%",marginTop:'70px'}}>

      <div className="a5">
        <img class='a6' height={100} width={90} src="https://i.postimg.cc/SRV87vCf/shoe.png" alt="" />
        <p class='a7'>jordan max 200</p>
      </div>
      <div className="a5">
      <img class='a6' height={100} width={90} src="https://i.postimg.cc/SRV87vCf/shoe.png" alt="" />
        <p class='a7'>jordan max 200</p>
      </div>
      <div className="a5">
      <img class='a6' height={100} width={90} src="https://i.postimg.cc/SRV87vCf/shoe.png" alt="" />
        <p class='a7'>jordan max 200</p>
      </div>

     </div>

         

          </div>
        </div>

      </div>

    </div>
  )
}

export default Home