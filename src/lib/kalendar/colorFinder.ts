
export default function colorFinder(subject, opacity) {
  let color: string = ""
  
  switch(subject.toUpperCase()) {
      case "NO":
        color += [21,	231, 21, opacity]
        break;
      case "SO":
          color += [29, 27, 27, opacity]
          break;
      case "MA":
          color += [0, 120, 255, opacity]
          break;
      case "SV":
        color += [255,255,51, opacity]
          break;
      case "ID":
        color += [128, 0,128, opacity]
      case "EN":
        color += [225, 0, 0, opacity]
        break;
      case "TY":
        color += [255, 140, 0, opacity]
        break;
      case "SP":
        color += [255, 140, 0, opacity]
        break;
      case "FR":
        color += [255, 140, 0, opacity]
        break;
    }
  return color
}