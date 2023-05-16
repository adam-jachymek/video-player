import * as RadixSlider from "@radix-ui/react-slider";

import "./styles.sass";

const VolumeSlider = () => (
  <RadixSlider.Root
    className="volume"
    defaultValue={[60]}
    max={100}
    step={1}
    aria-label="Volume"
  >
    <RadixSlider.Track className="volume__track">
      <RadixSlider.Range className="volume__range" />
    </RadixSlider.Track>
    <RadixSlider.Thumb className="volume__thumb" />
  </RadixSlider.Root>
);

export default VolumeSlider;
