function takeANumber(line, name) {
  return `Welcome, ${name}. You are number ${line.length + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0 ) { 
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}

function currentLine(line) {
  if (line.length === 0 ) {
    return "The line is currently empty." 
  } else {
    var ans = "The line is currently: ";
    for (let i = 0; i < line.length; i++) {
      if (i === 0 ) {
        ans += `${i+1}. ${line[i]}`
      }
    }
  }
}