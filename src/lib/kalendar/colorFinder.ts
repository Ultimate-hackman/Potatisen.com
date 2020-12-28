
export default function colorFinder(subject, opacity) {
  let color: string = ""
  
  switch(subject.toUpperCase()) {
      case "NO":
        color += "#15e715" + opacity
        break;
      case "SO":
          color += "#1d1b1b" + opacity
          break;
      case "MA":
          color += [0, 120, 255, opacity]
          break;
      case "TY":
        let bruh = 255
        color += [bruh, 0, 0, opacity]
    }
  return color
}