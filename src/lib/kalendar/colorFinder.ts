
export default function colorFinder(subject, opacity) {
  let color: string = ""
  
  switch(subject.toUpperCase()) {
      case "NO":
        color += [21,	231, 21, + opacity]
        break;
      case "SO":
          color += [29, 27, 27, + opacity]
          break;
      case "MA":
          color += [0, 120, 255, opacity]
          break;
      case "TY":
        color += [225, 0, 0, opacity]
    }
  return color
}