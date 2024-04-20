import {Component} from "react"

import "./index.css"

class ProfileVeiw extends Component {

    render() {
        return (
            <div>

                <div className="header">
                <h1 className="amratam">AMRUTAM</h1>
                <div className="home">
                    <p>Home</p>
                    <p>Find Doctors</p>
                    <p>About Us</p>
                </div>
                <div>
                    <button className="login">Login</button>
                    <button className="signin">Sign-up</button>
                </div>
                </div>

                <div className="bgcontainer">
                    <div className="container1">
                    <div className="detailscontainer">
                    <img className="profileimg" src="https://i.ibb.co/0KFXNkG/Ellipse-727.png" alt="Ellipse-727" border="0"/>
                            <p><span className="font">Dr.Bruce Wills </span><br/>Gynecologist <br/><img src="https://i.ibb.co/q7RSsfs/Frame-1000006278.png" alt="Frame-1000006278" border="0"/></p>
                            <p>Follower<br/><span className="font">850</span></p>
                            <p>Following<br/><span className="font">18K</span></p>
                            <p>Posts<br/><span className="font">250</span></p>
                            <div>
                                <button className="btn">Book an Appointment</button>
                            </div>
                        
                    </div>
                    </div>

                    <div className="container2">
                     <div className="box1">
                        <div className="abouteme-box">
                            <div className="aboutme">
                                <p className="font">A Little About me</p>
                                <button className="follow-btn">Follow +</button>
                            </div>
                            <div className="aboutmetext">
                                <p className="aboutmepara">Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the </p>
                                <hr/>
                                <div className="languages">
                                    <p className="font">Language Spoken</p>
                                    <p className="language">English</p>
                                    <p className="language">Hindi</p>
                                    <p className="language">Telugu</p>
                                </div>
                                <img src="https://i.ibb.co/fd29G0Z/Frame-1000006284.png" alt="Frame-1000006284" border="0"/>
                            </div>
                        </div>
                        <div className="splization-box">
                        <div className="splization">
                            <p className="font">I Specialize In</p>
                        </div>
                        <div className="aboutmetext">
                        <img src="https://i.ibb.co/prvbfF9/Frame-1000006276.png" alt="Frame-1000006276" border="0"/>
                        </div>
                        </div>

                        <div className="splization-box">
                        <div className="splization">
                            <p className="font">The Concerns I Treat</p>
                        </div>
                        <div className="Treat">
                        <div className="para">Skin Treatment</div>
                        <div className="para">Skin Treatment</div>
                        <div className="para">Skin Treatment</div>
                        <div className="para">Skin Treatment</div>
                        <div className="para">Skin Treatment</div>
                        <div className="para">Skin Treatment</div>
                        <div className="para">Skin Treatment</div>
                        </div>
                        </div>

                        <div className="splization-box">
                        <div className="splization">
                            <p className="font">The Concerns I Treat</p>
                        </div>
                        <div className="work">
                            <p className="been">I HAVE BEEN IN PRACTIVE FOR: 7+ YEARS</p>
                            <hr/>
                        <div className="experience">
                            <p><span className="clinic">Midtown Medical Clinic</span><br/> <span>Senior doctor</span></p>
                            <p className="present">2016-PRESENT</p>
                        </div>
                        <div className="experience">
                            <p><span className="clinic">Midtown Medical Clinic</span><br/> <span>Senior doctor</span></p>
                            <p className="present">2016-PRESENT</p>
                        </div>
                        </div>
                        </div>
                     
                     </div>  
                     <div className="box2">
                        <div className="fee">
                            <p>Appointment Free</p>
                            <p>$699.00</p>
                        </div>
                        <p className="font">Select your mode of session</p>

                        <div className="mode">
                            <p><span className="font">In-Clinic</span><br/>45 Mins</p>
                            <p className="mode-box"><span className="font">Video</span><br/>45 Mins</p>
                            <p><span className="font">Chat</span><br/>10 Mins</p>
                        </div>
                        <p className="font">Pick a time slot</p>
                        <div className="mode">
                            <p className="mode-box"><span className="font">Mon,10 oct</span><br/>45 Mins</p>
                            <p ><span className="font">Tue,11 oct</span><br/>45 Mins</p>
                            <p><span className="font">wed 12 oct</span><br/>10 Mins</p>
                            
                        </div>
                        <p className="font">Morning</p>
                        <div className="morning">
                            <div className="morning-boxs">09:00AM</div>
                            <div className="morning-boxs">09:00AM</div>
                            <div className="morning-boxs">09:00AM</div>
                            <div className="morning-boxs">09:00AM</div>
                            <div className="morning-boxs">09:00AM</div>
                            <div className="morning-boxs color">09:00AM</div>

                        </div>
                        <p className="font">Evening</p>
                        <div className="morning">
                            <div className="morning-boxs">09:00AM</div>
                            <div className="morning-boxs">09:00AM</div>
                            <div className="morning-boxs">09:00AM</div>
                            <div className="morning-boxs">09:00AM</div>
                            <div className="morning-boxs">09:00AM</div>
                            <div className="morning-boxs">09:00AM</div>

                        </div>
                        <div className="mark">
                                <button className="btn">Mark an Appointment</button>
                        </div>
                     </div>  
                    </div>
                    
                </div>
            </div>
        )
    }

}
export default ProfileVeiw