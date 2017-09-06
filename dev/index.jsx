import React from "react";
import ReactDOM from "react-dom";
import Carousel from "nuka-carousel";
import _ from "lodash";

var NavBarr=React.createClass({
	render: function() {
		return(
			<div id="listofbuttons">
				<nav id="nav1">
					<ul>
					<li className="first">
						<div className="dropdown">
							<a className="dropbtn" href="" > Home </a>
							</div>

					</li>
					<li>
						<div className="dropdown">
							<a className="dropbtn" href="" > About us </a>
							<div className="dropdown-content">
							    <a href="" >Who we are</a>
							    <a href="" >Our Special services</a>
						    </div>
						 </div> 
					</li>
					<li>
					<div className="dropdown">
						<a className="dropbtn" href="">Faculty</a>
						</div>
					</li>
					<li>
					<div className="dropdown">
						<a className="dropbtn" href="">Courses</a>
							<div className="dropdown-content">
							    <a href="#">CA-CPT</a>
							    <a href="#">CA-IPCC</a>
							    <a href="#">CA-FINAL</a>
							    <a href="#">CMA-FOUNDATION</a>
							    <a href="#">CMA-inter</a>
							    <a href="#">CMA-final</a>
						    </div>
						</div>
					</li>
					<li>
					<div className="dropdown">
						<a className="dropbtn" href="">S&S study Centre</a>
						</div>
					</li>
					<li>
					<div className="dropdown">
						<a className="dropbtn" href="">Resources</a>
							<div className="dropdown-content">
							    <a href="#">CA-CPT</a>
							    <a href="#">CA-IPCC</a>
							    <a href="#">CA-FINAL</a>
							    <a href="#">CMA-FOUNDATION</a>
							    <a href="#">CMA-inter</a>
							    <a href="#">CMA-final</a>
						    </div>
						</div>
					</li>
					<li className="last">
					<div className="dropdown">
						<a className="dropbtn" href="">Contact Us</a>
						</div>
					</li>
					</ul>
	
				</nav>
			</div>

		);
	}
		
});

var AnnouncementCarousel=React.createClass({
		render: function() {
			return(
				<div id="carouselDiv">		
					<Carousel id="firstOne" slidesToShow={1} cellSpacing={500} cellAlign="center" slideWidth={0.75}  dragging={true}>
			  			<img src="1.jpg" ></img>
			  			<img src="2.jpg" ></img>
			 			<img src="3.jpg" ></img>
					</Carousel>
				</div>
			);
		}
	});

var ProgramCarousel=React.createClass({
		render: function() {
			return(
				<div id="programDiv">
					<h1>Programs</h1>
					<Carousel id="secondOne" slidesToShow={3} cellSpacing={20} cellAlign="left" slideWidth={0.75}  dragging={true}>
			  			<img src="122.png" ></img>
			  			<img src="123.png" ></img>
			 			<img src="124.png" ></img>
			 			<img src="122.png" ></img>
			  			<img src="123.png" ></img>
			 			<img src="124.png" ></img>
					</Carousel>
				</div>
			);
		}
	});

var NewsCarousel=React.createClass({
		render: function() {
			return(
				<div id="currentNewsDiv">
					<h1>Current News</h1>
					<Carousel id="secondOne" slidesToShow={3} cellSpacing={20} cellAlign="left" slideWidth={0.75}  dragging={true}>
			  		<div className="ant"><h1>s&s Academy </h1><h2>coming soon</h2></div>
			  		<div className="ant"><h1>s&s Academy </h1><h2>coming soon</h2></div>
			  		<div className="ant"><h1>s&s Academy </h1><h2>coming soon</h2></div>
			  		<div className="ant"><h1>s&s Academy </h1><h2>coming soon</h2></div>
			  		<div className="ant"><h1>s&s Academy </h1><h2>coming soon</h2></div>
			  		<div className="ant"><h1>s&s Academy </h1><h2>coming soon</h2></div>
					</Carousel>
			</div>	
			);
		}
	});	

var Footer=React.createClass({
		render: function() {
			return(
				<div id="footerDiv">
					<div className="footerClass"><img  src="logo.jpg" height="110" width="147"></img></div>
					<div className="footerClass">
						<h2>Contact Us:</h2>
						<h3>3rd Floor, #49-24-62, Coastal</h3>
						<h3>Heights</h3>
						<h3>Shankara Matam Road,</h3>
						
					</div>

					<div className="footerClass">
						<AddQuiry />
					</div>


					<div className="footerClass">
					<h2>policy & terms</h2>
					<h3>policy</h3>
					<h3>terms</h3>
					</div>
				</div>
		
			);
		}
	});	





var WhoWe=React.createClass({
		render: function() {
			return(
				<div>
				<h2>Who we are</h2>
				<p>
					S&S Academy is a premier institute for Chartered Accountancy coaching at Visakhapatnam. The Academy was founded by two young passionate Chartered Accountants after their successful corporate jobs in multinational companies. The Academy has team of qualified and experienced facutly members, who had secured many All India ranks at various levels of CA & CMA examination.  

					We strongly belive- 

					We strongly believe that 'Success is no Accident'. It is hardwork, perseverance, learning, studying, sacrifice and most of all love of what you are doing.

					Vision without action is a daydream. We inclucate the hard work required for passing CA and CMA examinations and support the students in develpoing conceptual knowledge. We believe, every invidual has ability and strength and due to lack of proper guidance and support from others, they are not able to achieve what they are capable of. We will pay attention to individual student in understanding their background, skills and expecation from examinations and carrer and properly mould them according to their vision. Every student progress is assessed from time to time by conducting systematic study hours, regular self-assessment tests.

					We have shown what we are capable of in the last CA Final and IPCC examination. There has been 60% pass percentage in CA-IPCC exams conducted in November 2016  and 50% pass percentage in CA-Final exams conducted in November 2016.  

					SINCERITY towards our passion for teaching and SUCCESS in CA examination for students are driving forces for our Academy. Come and Join S&S Academy and we will surely make a difference in your life.  
				</p>
				</div>
			);
		}
	});

var OurSpecialServices=React.createClass({
		render: function() {
			return(
				<div className="tobeflexed">
					<h2>Our Special Services</h2>

					<p>SINCERE CLASSES + SYSTEMATIC STUDY = SURE SUCCESS </p>

					<p>S&S Academy is the address for sure success because it has below special services for students

					Faculty members are qualified CA/CMA/CS/PhD with rich teaching and corporate work experience
					Faculty members passed CA and CMA courses in 1st attempt with All India ranks, who can guide the students in same way
					Excellent study material covering full syllabus, student friendly, examination oriented
					Teaching for conceptual knowledge in examination point of view
					Systematic study hours and doubts clarification by faculties
					Regular tests, paper valuation and faculties guide each student individually to improve marks
					Digital class rooms
					Limited number of students in class
					Counselling to students by experts
					Guest lectures by industry experts
					Special classes on how to prepare for exams and how to write exams
					Special classes on how to improve reading skills, writing skills, memory techniques,personality development
					</p>
				</div>
			);
		}
	});	

var AddQuiry=React.createClass({

	getInitialState: function(){

		return{
			name: "",
		};

	},

	onNameChange: function(e){
		this.setState({name: e.target.value});
	},

	onSubmit: function(e){
		e.preventDefault();
		this.props.onAdd(this.state.name);
		this.setState({name:""});
	},
	render: function() {
		return(
			<div className="footerClass">
				<h2>Quick Enquiry</h2>
				<form onSubmit={this.onSubmit}>
					<input type="text" value={this.state.name} onChange={this.onNameChange}/><br/>
					<input type="text" value="E-Mail Address"/><br/>
					<input type="text" value="phone"/><br/>
					<input type="text" value="message"/><br/>
					<input type="submit" value="Send"/>
				</form>
			</div>
		);
	}
}); 






var HelloWorld = React.createClass({
	render: function() {
		return (
		  	<div>
		        <header>
				<img id="image1" src="logo.jpg" height="110" width="147"></img>
				<NavBarr/>
				</header>
				
				<OurSpecialServices/>
				<AnnouncementCarousel/>

				
				<footer id="footerid">
					<Footer/>
				</footer>	
			</div>
		)
	  }
});


ReactDOM.render(<HelloWorld/>,

	 document.querySelector("#container")
);  


 


