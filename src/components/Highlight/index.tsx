import { SubtitleText, TitleText, ViewHighlight } from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

export default function Highlight({ subtitle, title }: Props) {
  return (
    <ViewHighlight>
      <TitleText>{title}</TitleText>

      <SubtitleText>{subtitle}</SubtitleText>
    </ViewHighlight>
  );
}
