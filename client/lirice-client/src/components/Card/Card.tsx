import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React from "react";

interface CardProps {
    title: string;
    description: string;
}

const PostCard: React.FC<CardProps> = ({ title, description }) =>{
    return(
        <Card className="py-4 my-10 mx-10 lg:mx-52">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Config Header</p>
        <small className="text-default-500">config description</small>
        <h4 className="font-bold text-large">Hyprland, AGS, KDE, StarShip and more . . . </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://private-user-images.githubusercontent.com/97237370/325270207-406b72b6-fa38-4f0d-a6c4-4d7d5d5ddcb7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjA5NzkxOTAsIm5iZiI6MTcyMDk3ODg5MCwicGF0aCI6Ii85NzIzNzM3MC8zMjUyNzAyMDctNDA2YjcyYjYtZmEzOC00ZjBkLWE2YzQtNGQ3ZDVkNWRkY2I3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzE0VDE3NDEzMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM1NzYyN2M0YzkyNzMyMzg1YTAwZDkyYzg3YTJjNzVjNDYxNzlmYTZhYTg3MDJhYmIyYzRlZmFkMjVmODgxMDgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.bIEbhjUynyArUPz7qcJi-sp9thfyxZDSRou_zEi6cPw"
          width={270}
        />
      </CardBody>
    </Card>
    );
};

export default PostCard;
