export class Format {
    private static cleanInput = (input: string | number) => {
      const cleaned = input.toString().replace(/\D/g, "");
      return cleaned;
    };
    public static money = (input: string | number, simbol: "DOP" | "USD") => {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: simbol,
        maximumFractionDigits: 2,
      });
  
      if (typeof input === "string") {
        return formatter.format(parseFloat(input));
      }
  
      if (typeof input === "number") {
        return formatter.format(input);
      }
  
      return "null";
    };
  
    public static cedula = (input: string | number) => {
      const cleaned = this.cleanInput(input);
  
      if (cleaned.length > 11) {
        return cleaned;
      }
  
      const formatted = cleaned.replace(/^(\d{3})(\d{7})(\d{1})$/, "$1-$2-$3");
  
      return formatted;
    };
  
    public static phone = (input: string | number) => {
      const cleaned = this.cleanInput(input);
  
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
      if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
      }
  
      return "Invalid phone number format";
    };
    //float1
    public static float1 = (input: string | number) => {
      const cleaned = this.cleanInput(input);
      const parsedValue = parseFloat(cleaned as string);
      if (isNaN(parsedValue)) {
        return "Invalid input";
      }
      return parsedValue.toFixed(1);
    };
    //float2
    public static float2 = (input: string | number) => {
      const cleaned = input.toString().replace(/\D/g, "");
      const parsedValue = parseFloat(cleaned as string);
      if (isNaN(parsedValue)) {
        return "Invalid input";
      }
      return parsedValue.toFixed(2);
    };
  }
  