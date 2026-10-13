"use client";
import useNextBlurhash from "use-next-blurhash";
import Image from "next/image";

interface Props {
  title: string;
}

const CustomerCareImage = ({ title }: Props) => {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");

  return (
    <section className={`relative aspect-[16/5]  border bg-center`}>
      <Image
        src="/images/customer-care.jpg"
        className="object-cover object-center opacity-70 "
        fill={true}
        priority={true}
        placeholder="blur"
        blurDataURL={blurDataUrl}
        alt={`${title} image`}
      />
      <div className="absolute top-1 right-1 sm:top-2 sm:right:2 sm:font-bold">
        <h1 className="text-xm sm:text-reg md:text-lg">ایران سیروبا</h1>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
        <p className="md:text-[3rem] sm:text-[2rem] text-[1.3rem] text-nowrap">
          {title}
        </p>
      </div>
    </section>
  );
};

export default CustomerCareImage;
