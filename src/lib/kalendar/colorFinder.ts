

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
            color += "#4652ff" + opacity
            break;
        case "OLD":
          color += "#8080" + opacity
      }
    return color
}