import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

interface CardProps {
    title: string;
    description: string;
    image?: string;
}

const PostCard: React.FC<CardProps> = ({ title, description, image }) => {
    // const [data, setData] = useState<any>(null);

    // useEffect(() => {
    //     fetch("http://localhost:8080/posts")
    //         .then(response => response.json())
    //         .then(data => setData(data))
    //         .catch(error => console.error("Error fetching data:", error));
    // }, []);

    return (
        <Card className="py-4 my-10 mx-10 lg:mx-42 lg:my-24">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{title}</p>
                {/* <small className="text-default-500">config description</small> */}
                <h4 className="font-bold text-large">{description}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 w-full">
                <Image
                    isBlurred
                    // width={500}
                    src={`/images/${image}`}
                    // src="/myarch.png"
                    alt={`${title}`}
                    className="m-5 w-[50%]"
                />
                {/* {data && (
                    <div>
                        <h5>API Response:</h5>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                )} */}
            </CardBody>
        </Card>
    );
};

export default PostCard;