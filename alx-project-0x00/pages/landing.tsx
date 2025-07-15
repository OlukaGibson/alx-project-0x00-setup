import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <Card />
      <Card />
      <div className="flex gap-2 mt-4">
        <Button title="Small" size="small" rounded="sm" />
        <Button title="Medium" size="medium" rounded="md" />
        <Button title="Large" size="large" rounded="full" />
      </div>
    </div>
  );
};

export default Landing;
