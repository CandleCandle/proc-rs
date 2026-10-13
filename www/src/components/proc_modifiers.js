


class ModifierValues {
  static Multiplier = 'Multiplier';
  static Percent = 'Percent';
  static PercentAddition = 'PercentAddition';

  static create(mode, d, i, o) {
    switch (mode) {
      case 'Multiplier':
        return new ModifierValuesMultiplier(d ? d : 1, i ? i : 1, o ? o : 1);
      case 'PercentAddition':
        return new ModifierValuesPercentAddition(d ? d : 0, i ? i : 0, o ? o : 0);
      case 'Percent':
        return new ModifierValuesPercent(d ? d : 100, i ? i : 100, o ? o : 100);
    }
  }

  constructor(d, i, o) {
    this.duration = d;
    this.input = i;
    this.output = o;
  }

  to_a() {
    return [
      this.duration,
      this.input,
      this.output,
    ]
  }

  into_multiplier() {
    return this;
  }

  into_percent() {
    return new ModifierValues(
      this.duration * 100,
      this.input * 100,
      this.output * 100,
    );
  }

  into_percent_addition() {
    return new ModifierValues(
      (this.duration * 100) - 100,
      (this.input * 100) - 100,
      (this.output * 100) - 100,
    );
  }

  into(mode) {
    switch (mode) {
      case 'Multiplier':
        return this.into_multiplier().into_multiplier(); // normalise, then convert again.
      case 'PercentAddition':
        return this.into_multiplier().into_percent_addition();
      case 'Percent':
        return this.into_multiplier().into_percent();
    }
  }
}

class ModifierValuesMultiplier extends ModifierValues {}

class ModifierValuesPercent extends ModifierValues {
  constructor(d, i, o) {
    super(d, i, o);
  }

  into_multiplier() {
    return new ModifierValues(
      this.duration / 100,
      this.input / 100,
      this.output / 100,
    );
  }
}

class ModifierValuesPercentAddition extends ModifierValues {
  constructor(d, i, o) {
    super(d, i, o);
  }

  into_multiplier() {
    return new ModifierValues(
      (this.duration + 100) / 100,
      (this.input + 100) / 100,
      (this.output + 100) / 100,
    );
  }
}

export { ModifierValues };
