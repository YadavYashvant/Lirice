import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React from "react";

interface CardProps {
    title: string;
    description: string;
}

const PostCard: React.FC<CardProps> = ({ title, description }) => {
    return (
        <Card className="py-4 my-10 mx-10 lg:mx-42 lg:my-32">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Config Header</p>
                <small className="text-default-500">config description</small>
                <h4 className="font-bold text-large">Hyprland, AGS, KDE, StarShip and more . . . </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 w-full">
              <Image
              isBlurred
              // width={500}
              src="/myarch.png"
              alt="POST image 1"
              className="m-5 w-[50%]"
              />

              <Image
              isBlurred
              // width={500}
              src="/agshypr.png"
              alt="POST image 2"
              className="m-5 w-[50%]"
              />

            </CardBody>
        </Card>
    );
};

export default PostCard;