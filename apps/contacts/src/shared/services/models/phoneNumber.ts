export class PhoneNumber {
  area: string;
  prefix: string;
  line: string;

  // format phone numbers as E.164
  get e164() {
    const num = 1 + this.area + this.prefix + this.line;
    return `+${num}`;
  }
}
