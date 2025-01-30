import React, { useState } from "react";
import MultiOptionButtonCollapse from "../Template/MultiOptionButtonCollapse";
import ListCollapseTemplate from "../Template/ListCollapseTemplate";

const HomePageMyths = () => {
  const [activeTitle, setActiveTitle] = useState("Myth");


const data= [  
    {
       title:"DisInformation",
       contents :[
       {
           key:"❌ A fake & misleading news is circulated that VVPAT slips from GE 2024 are being destroyed in Andhra Pradesh.",
           value:"✅ Paper rolls are removed from VVPATs after 10 days of completion of counting of votes, if no EVM Checking & Verification request is received. Additionally,VVPAT slips taken out after counting of votes are preserved in sealed black envelopes as per Rule 94 of CoE Rules 1961 i.e.for 1 year & even beyond till disposal of EP, if any. No VVPAT slips of GE to LS2024 & Andhra Pradesh LA are destroyed."
       }
       ,{
           key:"❌ A video was shared in which a voter had raised allegation regarding functioning of EVM/ VVPAT.",
           value:"✅ The video seen was a case of mob violence in a Polling Station (3/21 Khurai Assembly Segment) in Imphal East and Re-poll had already been done in the said Polling Station on 22 April, 2024. No case of mismatch on the button pressed in the Ballot Unit and Paper Slip generated through VVPAT had been alleged by anyone or found."
       },
       {
           key:"❌ A person in a video posted on a YT Channel was claiming that EVM can be hacked.",
           value:"✅ Claim is blatantly wrong & EVM shown is not ECI EVMs. EVM in video is Fake. ECI EVM cannot be hacked or manipulated. For more details on EVM https://eci.gov.in/evm-vvpat"
       },
       {
           key:"❌ 15 lakh EVMs are missing.",
           value:"✅ The claim is misleading and fake. Facts are twisted & presented selectively. There are no missing EVMs. Honble Supreme Court has also dismissed the petitions on missing EVMs."
       },
       {
           key:"❌ A digital news channel claimed that a ban on Electronic Voting Machines has been approved by the President of India. Ballot papers to be used for elections in India.",
           value: "✅ The claim made in the news is fake. Since 2004 EVMs have been used in all General Elections/Bye Elections to the Parliamentary and Assembly Constituencies. Further, Voter Verifiable Paper Audit Trail (VVPAT is being used in all General /Bye Election to Parliamentary & Assembly Constituencies to provide even greater transparency to the poll process since 2017."
       }]
       
      
   },
    {
       title: "Myth",
       contents:[
       {
           key: "❌ EVM can be Hacked.",
           value:"✅ ‘Hacking' is unauthorised access to or control over computer network security systems for some illicit purpose In the case of ECI EVMs, the 'Hacking' is not possible for following reasons: The EVM is a stand-alone machine and is not connected to any network through wire or wirelessly.The Software is one time Programmable and Microcontroller can neither be read nor modified."
       },
       {
           key:"❌ EVM can be remotely altered through wireless communication",
           value:"✅  It is alleged this can be done by either replacing the original display module with another display fitted with a wireless device or inserting an extra circuit board which can communicate with an external unit via a wireless device and tamper the result by controlling the CU display used for declaring the result. Such a modification would require unfettered access to the EVM after First Level Checking. In M3 EVMs the display is mounted in the UADM. Any attempt to open the UADM will send the EVM into Factory Mode."
       },
       {
           key:"❌ EVM memory can be manipulated" ,
           value:"✅ It is alleged that voting data can be altered by clipping a Memory Manipulator IC to the memory chip where Vote data is stored. This would need - Full and free access to Control Units after the Polling is over.  The same is not possible since EVMs are kept in administrative safeguard, Breaking the seals and locks of the strong room is not possible due to two layers of security, CCTV coverage and close watch of representatives of the candidates near the strong room, The memory is inside the microcontroller which itself is inside the UADM.  Any attempt to open the UADM will send the EVM into Factory Mode."
       },
       {
           key:"❌ EVMs cannot be used in areas where there is no electricity?",
           value:"✅ EVM and VVPAT do not require any external power supply. EVM and VVPAT run on their own battery power-packs supplied by Bharat Electronics Limited & Electronics Corporation of India Limited. EVM runs on a Power Pack of 7.5 Volts and VVPAT runs on a power-pack of 22.5 Volts."
       },
       {
           key:"❌ Voting can be done more than once by pressing the button again and again on the EVM",
           value: "✅ No, it is not possible to vote more than once on an EVM. As soon as a particular button on the Ballot Unit is pressed, the vote is recorded for that particular candidate. The machine does not respond to further button presses on the BU. This way the EVMs ensure the principle of “one voter, one vote”. The next vote is enabled only when the Presiding Officer in-charge of the Control Unit releases the Ballot by pressing the Ballot Button on the Control Unit after checking and sending the next voter. This is a distinct advantage over the ballot paper system."
       }
   ]
   }
]

  return (
    <div className="row">
        <hr  style={{border:'1px solid black'}} className="mt-2"/>
        
        <h2 className="d-flex justify-content-center" style={{fontFamily:'sans-serif'}}> Myths & DisInformation</h2>
        <div className="col-2"></div>
        <div className="col-8">

     
      <table className="table table-striped-columns">
        <tbody>
          <tr>
            {data.map((d, index) => (
                <td key={index} style={{width:"50%"}} >
                <MultiOptionButtonCollapse
                  title={d.title}
                  activeTitle={activeTitle}
                  setActiveTitle={setActiveTitle}
                />
              </td>
            ))}
          </tr>
          <tr>
            <td colSpan={2}>
              {data
                .filter((d) => d.title === activeTitle)
                .map((d, index) => (
                    <ListCollapseTemplate key={index} arr={d.contents} />
                ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
                <div className="col-2"></div>
        <hr  style={{border:'1px solid black'}} className="mt-2"/>

    </div>
  );
};

export default HomePageMyths;
