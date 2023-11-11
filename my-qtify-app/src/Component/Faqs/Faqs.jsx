import React, { useEffect, useState } from "react";
import { faqData, getUid } from "../Data/Data";
import "./Faqs.css";
import ExploreAccordion from "../Accordion/ExploreAccordion";


const Faqs = () => {
    const [questionData, setQuestionData] = useState([]);


    useEffect( () => {
        const loadHandler = async () => {
            try{
                const res = await faqData();
                setQuestionData(res);
            }
            catch(error){
                console.log("Error fetching FAQ data: ", error);
            }
        };
        loadHandler();
    },[]);


    return(
        <div className="faqs">
            <h2 className="faqs_heading">FAQS</h2>
            <div className="faqs_explore">
                {questionData.map((qItem) => {
                    const id = getUid();
                    return <ExploreAccordion key={id} data={qItem} />;
                })}
            </div>
        </div>
    );
};

export default Faqs;