import StarIconCollection from 'components/Skill/StarIconCollection';

const LegendItem = ({
  times,
  detail,
}: {
  times: number;
  detail: React.ReactNode;
}) => (
  <div>
    <StarIconCollection
      keyphrase={`fixed${times}`}
      times={times}
    />
    <div className="text-gray-600 text-sm px-4">
      {detail}
    </div>
  </div>
);

const Legend = () => (
  <section className="space-y-2 bg-gray-light p-4 rounded-md overflow-hidden">
    <h3 className="mb-4 py-2 border-b border-gray text-center">
      基準
    </h3>
    <LegendItem
      times={5}
      detail={
        <>
          <p>業務で10案件以上経験あり</p>
          <p>個人開発で10年以上経験あり</p>
        </>
      }
    />
    <LegendItem
      times={4}
      detail={
        <>
          <p>業務で5案件以上経験あり</p>
          <p>個人開発で5年以上経験あり</p>
        </>
      }
    />
    <LegendItem
      times={3}
      detail={
        <>
          <p>業務で1案件以上経験あり</p>
          <p>個人開発で5案件以上経験あり</p>
          <p>関連資格取得済み</p>
        </>
      }
    />
    <LegendItem
      times={2}
      detail={<p>個人開発で3案件以上経験あり</p>}
    />
    <LegendItem
      times={1}
      detail={
        <>
          <p>個人開発で1案件以上経験あり</p>
          <p>関連資格の学習中</p>
        </>
      }
    />
  </section>
);

export default Legend;
