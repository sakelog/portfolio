import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Image from 'next/image';

const OgpPage: NextPage = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div
      className="bg-theme-dark text-white 
  grid grid-cols-3"
      style={{ width: 1200, height: 600 }}
    >
      <div className="flex items-center justify-center">
        <Image
          src="/img/profile.png"
          alt="profile icon"
          width={200}
          height={200}
          layout="intrinsic"
          className="rounded-full bg-white"
        />
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <p className="text-6xl">{title}</p>
      </div>
    </div>
  );
};

export default OgpPage;
