import P from "prop-types";
import * as S from "./styles";

export const Radio = ({ onCheck, label, name, value, labelFor }) => {
  const onChange = () => {
    !!onCheck && onCheck(value);
  };

  return (
    <S.Wrapper>
      <label htmlFor={labelFor}>{label}</label>
      <input
        id={labelFor}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
      />
    </S.Wrapper>
  );
};

Radio.propTypes = {
  onCheck: P.func,
  label: P.string,
  labelFor: P.string,
  value: P.string,
  name: P.string
};
