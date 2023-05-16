import * as RadixSlider from "@radix-ui/react-slider";

import "./styles.sass";

type Props = {
  value: number;
  maxValue: number;
  setValue: (value: number) => void;
};

const Timeline = ({ value, maxValue, setValue }: Props) => (
  <RadixSlider.Root
    className="timeline"
    defaultValue={[50]}
    max={maxValue}
    step={1}
    value={[value]}
    aria-label="Timeline"
    onValueChange={(value: number[]) => setValue(Number(value))}
  >
    <RadixSlider.Track className="timeline__track">
      <RadixSlider.Range className="timeline__range" />
    </RadixSlider.Track>
  </RadixSlider.Root>
);

export default Timeline;
