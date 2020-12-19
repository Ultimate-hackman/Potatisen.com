

export default function colorFinder(subject) {
    let color: string = ""
    
    switch(subject.toUpperCase() ) {
        case "NO":
          color += "#15e71588"
          break;
        case "SO":
            color += "#1d1b1b55"
            break;
        case "MA":
            color += "#4652ff"
            break;
        case undefined:
            color += "#4652ff"
            break;
      }
    return color
}