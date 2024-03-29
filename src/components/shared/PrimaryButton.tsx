import "./../styles/primaryButtonStyles.css";

interface Props {
  label: string;
  width?: string;
  boxShadow?: boolean;
}

const PrimaryButton = ({ label, width = "229px", boxShadow }: Props) => {
  return (
    <button
      className={`${boxShadow && "with_shadow"}`}
      style={{ width: width }}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
