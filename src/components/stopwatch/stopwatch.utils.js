const FormatTime = seconds => {
  // days (just incase)
  if (seconds >= 86400) {
    return ` ${Math.floor(seconds / 86400) % 24}d ${
      Math.floor(seconds / 3600) % 24
    }h ${Math.floor(seconds / 60) % 60}m ${seconds % 60}s`;

    // hours
  } else if (seconds >= 3600) {
    return `${Math.floor(seconds / 3600)}h ${Math.floor(seconds / 60) % 60}m ${
      seconds % 60
    }s`;
  }

  // minutes
  else if (seconds >= 60) {
    return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  }

  return `${seconds}s`;
};

export default FormatTime;
