import Image from 'next/image';
import DynamicIcons from '../components/DynamicIcons';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';
import useFetch from '../lib/hooks/useFetch';
import { myLoader } from '../lib/media';
import { shimmer, toBase64 } from '../util/toBase64';

function BioLinks({ about, ...props }) {
  const { data: bioLinks, error, isLoading } = useFetch('/bio-links');

  const LoadingLink = () => {
    return [3, 2].map((ar, i) => (
      <div
        key={i}
        className={`relative flex w-full flex-col justify-center overflow-hidden rounded-md bg-gradient-to-br from-amber-600 via-amber-800 to-indigo-900 px-3 py-2 ${
          ar && 'opacity-' + ar * 10 + ' animate-pulse delay-75'
        } shadow-lg shadow-indigo-800/10 `}
      >
        <h1 className="flex w-full justify-center text-center">...</h1>
      </div>
    ));
  };
  return (
    <div className="relative flex min-h-screen flex-col bg-primary font-poppins antialiased">
      <Seo />
      <div className="relative mx-auto flex min-h-[calc(100vh-112px)] max-w-sm flex-col items-center p-8 md:px-20 lg:flex-row 2xl:container 2xl:mx-auto">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-secondary bg-gradient-to-br from-amber-300 via-amber-700 to-indigo-700 shadow-lg">
          <Image
            loader={myLoader}
            src="/hero-image.png"
            alt="ratama adhi"
            layout="fill"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(144, 144)
            )}`}
            className="object-cover"
          />
        </div>
        <div className="mt-4 flex flex-col">
          <p className="text-center text-xs leading-relaxed text-secondary">
            {about.description}
          </p>
        </div>

        {/* list bio links */}
        <div className="mt-6 w-full space-y-4 text-secondary">
          {!isLoading &&
            bioLinks.length > 0 &&
            bioLinks.map((bio, i) => {
              const { _id, title, reactIcons, url, description, thumbnail } =
                bio;
              return (
                <div
                  key={_id}
                  onClick={() => url && window.open(url, '_blank')}
                  className={`relative flex w-full flex-col justify-center overflow-hidden rounded-md ${
                    thumbnail
                      ? 'border border-amber-600/30 shadow-lg shadow-indigo-800/10'
                      : ' bg-gradient-to-br from-amber-600 via-amber-800 to-indigo-900 shadow-lg shadow-indigo-800/10'
                  } space-y-1 px-3 py-2`}
                >
                  {thumbnail && (
                    <div className="absolute bottom-0 left-0 z-20 h-[10%] w-full animate-pulse  shadow-lg shadow-indigo-900" />
                  )}
                  {thumbnail && (
                    <Image
                      loader={myLoader}
                      src={thumbnail.formats.thumbnail.url ?? thumbnail.url}
                      alt="ratama adhi"
                      layout="fill"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(144, 144)
                      )}`}
                      className="z-10 object-cover blur-md"
                    />
                  )}
                  {(reactIcons || title) && (
                    <div
                      className="relative z-10 flex w-full items-center"
                      style={{ margin: 0 }}
                    >
                      {reactIcons && (
                        <DynamicIcons
                          code={reactIcons.split('/')[0]}
                          size={24}
                          className="absolute left-0 bottom-0 z-30 "
                        />
                      )}
                      {title && (
                        <h1 className={`relative z-30 w-full text-center`}>
                          {title}
                        </h1>
                      )}
                    </div>
                  )}
                  {/* {description && (
                    <p className="relative z-30 text-xs text-slate-400">
                      {description}
                    </p>
                  )} */}
                </div>
              );
            })}

          {!isLoading && bioLinks.length <= 0 && (
            <div className="relative flex w-full flex-col justify-center overflow-hidden rounded-md bg-gradient-to-br from-amber-600 via-amber-800 to-indigo-900 px-3 py-2 shadow-lg shadow-indigo-800/10">
              <h1>Sayangnya tidak ada link</h1>
            </div>
          )}
          {!isLoading && <LoadingLink />}
        </div>
      </div>
      <div className="sticky left-0 bottom-0 z-10 flex w-full justify-center bg-primary py-10 text-amber-600">
        <span className="text-xs">
          <span className="font-semibold">Ratama Adhi</span> © 2022
        </span>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const about = await fetchAPI('/about');
  return {
    props: {
      about,
    },
  };
}

export default BioLinks;
