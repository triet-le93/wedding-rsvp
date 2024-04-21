import SaveTheDate from "@/components/SaveTheDate/SaveTheDate";
import CountDown from "@/components/CountDown/CountDown";

const WeddingDate = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-wedding-bg">
      <div className="text-center">
        <SaveTheDate />
        <CountDown targetDate="2024-11-11T18:00:00+09:00" />
      </div>
    </div>
  );
}

export default WeddingDate;
