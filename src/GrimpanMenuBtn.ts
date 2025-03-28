class GrimpanMenuBtn {
  private name: string;
  private type: string;
  private onClick?: () => void;
  private onChange?: () => void;
  private active?: boolean;
  private value?: string | number;

  private constructor(
    name: string,
    type: string,
    onClick?: () => void,
    onChange?: () => void,
    active?: boolean,
    value?: string | number
  ) {
    this.name = name;
    this.type = type;
    this.onClick = onClick;
    this.onChange = onChange;
    this.active = active;
    this.value = value;
  }

  static Builder = class GrimpanMenuBtnBuilder {
    btn: GrimpanMenuBtn;
    constructor(name: string, type: string) {
      this.btn = new GrimpanMenuBtn(name, type);
    }

    setOnClick(onClick: () => void) {
      this.btn.onClick = onClick;
      return this;
    }

    setOnChange(onChange: () => void) {
      this.btn.onChange = onChange;
      return this;
    }

    setActive(active: boolean) {
      this.btn.active = active;
      return this;
    }

    setValue(value: string | number) {
      this.btn.value = value;
      return this;
    }

    build() {
      return this.btn;
    }
  };
}

const backbtn = new GrimpanMenuBtn.Builder("back", "button")
  .setOnClick(() => {
    console.log("back");
  })
  .setActive(true)
  .build();
