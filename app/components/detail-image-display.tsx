"use client";

import { useState, useEffect } from "react";
import { ButtonImage } from "./button-image";
import { DisplayMainImage } from "./display-main-image";
import { trainings } from "../data/trainings";
import Iframex from "./iframex";
import { IfModelType } from "../../utils/types";

interface IfTraining {
  id: number;
  title: string;
  videos: {
    introduction: { label: string; link: string; poster: string }[];
    training: { label: string; link: string; poster: string }[];
    teaser: { label: string; link: string; poster: string }[];
    service: { label: string; link: string; poster: string }[];
  };
}

interface Props {
  image: string;
  title: string;
  subCategory: string;
  isTeaser: boolean;
  model: IfModelType;
}

const DetailImageDisplay = ({ image, subCategory, title, isTeaser, model }: Props) => {
  const [toggle, setToggle] = useState(true);

  const training: IfTraining | undefined = trainings?.find(
    (t) => t.title === model?.title
  );

  useEffect(() => {
    if (!training) setToggle(false);
    else setToggle(training.videos.teaser.length === 0);
  }, []);

  if (!training) return null;

  const handleClick = () => {
    if (training && training.videos.teaser.length === 0) return;
    setToggle(!toggle);
  };

  return (
    <section className="w-full mb-2 flex justify-center flex-col-reverse sm:rounded-lg gap-2 lg:flex-row-reverse">
      <div className="flex lg:flex-col flex-row-reverse gap-2">
        {isTeaser && (
          <ButtonImage
            image={image}
            title={title}
            playIconSize={28}
            onClick={handleClick}
          />
        )}
        <ButtonImage image={image} title={title} onClick={handleClick} />
      </div>
      <div className="relative flex justify-center w-full aspect-video border-2">
        {toggle ? (
          <DisplayMainImage image={image} title={title} subCategory={subCategory} />
        ) : (
          <Iframex
            label={title}
            link={training?.videos.teaser[0]?.link}
            iconSize={30}
            autoPlay={false}
          />
        )}
      </div>
    </section>
  );
};

export default DetailImageDisplay;
