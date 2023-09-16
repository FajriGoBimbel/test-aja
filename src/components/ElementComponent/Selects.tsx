import CreatableSelect from "react-select/creatable";

interface OptionProps {
  label: string;
  value: string;
}

interface SelectProps {
  options: OptionProps[];
  placeholder: string;
  required?: boolean;
}

const Selects = ({ options, placeholder, required = true }: SelectProps) => {
  return (
    <CreatableSelect
      options={options}
      placeholder={placeholder}
      isSearchable={true}
      required={required}
      styles={{
        control: (baseStyle, state) => ({
          ...baseStyle,
          fontSize: 14,
        }),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 8,
        colors: {
          ...theme.colors,
          primary: "#566070",
          primary25: "#ECB2B9",
          primary50: "#C7172C",
        },
      })}
    />
  );
};

export default Selects;
