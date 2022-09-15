import dynamic from 'next/dynamic';

const Utterances = dynamic(() => import('@/components/Utterances'), {
  ssr: false,
});

const TitlePage = () => (
  <div>
    <Utterances />
  </div>
);

export default TitlePage;
