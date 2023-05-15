import React,{useState} from 'react'
import '../section/Rightsection.css'
import Vector from '../images/Vector.png'
import frame from '../images/frame.png'
import { Link } from 'react-router-dom'
const Rightsection = () => {
    let [price, setPrice] = useState();
    console.log(price)
    return (
        <>
            <div className='side_section_right'>
                <div className='progress_bar'>
                    <div className='btn1'>
                        <Link to={'/signup'} className='btn1_1'>1</Link>
                        <p>sign Up</p>
                    </div>
                    <div className='btn1'>
                        <Link to={"/subscribe"} className='btn1_1'>2</Link>
                        <p>subscribe</p>
                    </div>
                </div>
                <div className='side_right_header'>
                    Select your subscription plan
                </div>
                <div className='input_container'>
                    <div className='subscription1_1'>
                        <div className='subscription1_select'>
                            <input type="radio" disabled />
                            <label htmlFor="">12th month subscription</label>
                        </div>
                        <div>
                            <p>Total <b>&#8377;99</b></p>
                            <p><strong>&#8377;8</strong> /mon</p>
                        </div>
                        <div id='offer-exp'><p>Offer expired</p></div>
                    </div>
                    <div className='subscription1_2'>
                        <div className='subscription1_select'>
                            <input type="radio" name='offer' className='subscribe' id='check-1' value={"179"} onClick={e => setPrice(e.target.value)} />
                            <label htmlFor="">12th month subscription</label>
                        </div>
                        <div>
                            <p>Total <b>&#8377;179</b></p>
                            <p><strong>&#8377;15</strong> /mon</p>
                        </div>
                        <div id='offer-rec'><p>Recommended</p></div>
                    </div>
                    <div className='subscription1_3'>
                        <div className='subscription1_select'>
                            <input type="radio" name='offer' className='subscribe' id='check-1' value={"149"} onClick={e => setPrice(e.target.value)} />
                            <label htmlFor="">12th month subscription</label>
                        </div>
                        <div>
                            <p>Total <b>&#8377;149</b></p>
                            <p><strong>&#8377;25</strong> /mon</p>
                        </div>
                    </div>
                    <div className='subscription1_3'>
                        <div className='subscription1_select'>
                            <input type="radio" name='offer' className='subscribe' id='check-1' value={"99"} onClick={e => setPrice(e.target.value)} />
                            <label htmlFor="">12th month subscription</label>
                        </div>
                        <div>
                            <p>Total <b>&#8377;99</b></p>
                            <p><strong>&#8377;33</strong> /mon</p>
                        </div>
                    </div>
                </div>
                <div className='offer_detail'>
                    <div className='offer_detail_1'>
                        <p>subscription fee</p>
                        <p className='p1'>&#8377; 18,500</p>
                    </div>
                    <div className='offer_detal_2'>
                        <div className='limited_offer'>
                            <h4>Limited time offer</h4>
                            <p><img src={Vector} alt='vector-img' /> offer valid detail 25th may 2023</p>
                        </div>
                        <p>-&#8377;18,401 </p>
                    </div>
                    <div className='offer_detal_3'>
                        <p><span className='total-offer'>Total</span> <span>(Incl. of 18% GST)</span> </p>
                        <h3>&#8377;{!price ? "18500" : 18401 - price}</h3>
                    </div>
                </div>
                <div className='button_for_pay'>
                    <div >
                        <Link to={'/cancel'} className='cancel'>cancel</Link>
                    </div>
                    <div >
                        <Link to={'/pay'} className='proceed_to_pay'>Proceed to pay</Link>
                    </div>
                </div>
                <div className='button_for_pay'>
                    <div className='frame'>
                        <img src={frame} alt="frame" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rightsection
