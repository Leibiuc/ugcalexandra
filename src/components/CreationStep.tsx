type Props = {
  title: string;
  content: string;
};

export const CreationStep = ({ title, content }: Props) => {
  return (
    <div className="max-w-md p-6 bg-gradient-to-br from-orange-100 to-orange-100 via-white bg-opacity-50 bg-blend-color-burn rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="font-light">{content}</p>
    </div>
  );
};
