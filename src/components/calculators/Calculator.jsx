const buttons = [
  { label: "C", span: true },
  { label: "←" },
  { label: "%", variant: "operator" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "X", variant: "operator" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "-", variant: "operator" },
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "+", variant: "operator" },
  { label: "0", span: true },
  { label: "." },
  { label: "=", variant: "operator" },
];

const Calculator = () => (
  <section className="min-h-screen bg-[linear-gradient(0deg,_rgba(34,193,195,1)_0%,_rgba(253,187,45,1)_100%)] px-4 py-20">
    <div className="mx-auto flex max-w-3xl items-center justify-center">
      <div className="grid grid-cols-4 grid-rows-[160px_repeat(5,_75px)] gap-[5px] rounded-[32px] bg-brandGreen p-[15px] shadow-calculator">
        <div className="col-span-4 flex flex-col items-end justify-between break-all rounded-[32px] bg-[#363636] p-[16px] text-right text-white shadow-calculatorDisplay">
          <div className="text-[2em]" id="valor-anterior">
            0
          </div>
          <div className="text-[1.5em]" id="valor-actual">
            0
          </div>
        </div>
        {buttons.map((button) => (
          <button
            key={button.label}
            className={[
              "rounded-[32px] bg-brandGreen text-[1.5em] text-white shadow-calculatorButton transition-colors",
              "hover:bg-brandGreenBright active:bg-brandGreenDark",
              button.span ? "col-span-2" : "",
              button.variant === "operator" ? "font-robotoBold" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            type="button"
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default Calculator;
