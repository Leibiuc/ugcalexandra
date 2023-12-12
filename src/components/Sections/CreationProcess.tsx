import { CreationStep } from "../CreationStep";

const steps = [
  {
    title: "Contract",
    content:
      "Identificarea așteptărilor legate de colaborare, stabilirea unui Brief, semnarea contractului",
  },
  {
    title: "Scenariu",
    content:
      "In cazul in care este nevoie, scriu scenariul și îl trimit spre aprobare",
  },
  {
    title: "Filmare",
    content:
      "După primirea produselor încep producția materialelor conform Brief-ului",
  },
  {
    title: "Editare",
    content:
      " Montez, corectez culorile, adaug tranziții, efecte, cuts,  voice-over.",
  },
];
export const CreationProcess = ({ ...rest }) => {
  return (
    <div className="px-6 py-10">
      <h1 className="font-light text-6xl mb-4">Procesul de creare</h1>

      <div
        className="flex justify-center items-center min-h-fit px-6 py-10"
        {...rest}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {steps.map((step, index) => (
            <CreationStep
              key={index}
              title={step.title}
              content={step.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
