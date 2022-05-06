import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Image from 'next/image';

// components
import siteMeta from 'components/config';

const OgpPage: NextPage = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div
      style={{ width: 1200, height: 630 }}
      className="grid grid-cols-3"
    >
      <div className="bg-theme flex items-center justify-center">
        <Image
          loader={({ src }) => src}
          src="/img/profile.png"
          alt="profile icon"
          width={200}
          height={200}
          layout="intrinsic"
          className="rounded-full bg-white"
        />
      </div>
      <div className="col-span-2 flex flex-col gap-2 items-center justify-center">
        <p className="text-6xl">{title}</p>
        <p className="text-2xl">{siteMeta.url}</p>
      </div>
    </div>
  );
};

export default OgpPage;
