import Card from "../components/Card";
import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <Card
          title="Seminar Voting"
          description="You can organize a seminar"
        ></Card>
        <Card
          title="Seminar Voting"
          description="You can organize a seminar"
        ></Card>
        <Card
          title="Seminar Voting"
          description="You can organize a seminar"
        ></Card>
      </div>
    </MainLayout>
  )
}
