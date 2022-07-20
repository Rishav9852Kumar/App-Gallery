import React from "react";
import {Card,CardBody,CardTitle,CardText,Button} from "reactstrap"

const QuotesCard= ({quote}) => {
    return (
        <Card fluid style={{marginTop:"25px",
            background: "6px solid black",
            backgroundColor: "rgb(248, 255, 255)"}}>
            <CardBody className="text-center text-primary">
                
           <CardTitle>
           {quote.content}
            </CardTitle>
          <ul><i><CardTitle>{quote.author}</CardTitle></i> </ul> 
            </CardBody>
            
        </Card>
    );
}
export default QuotesCard;