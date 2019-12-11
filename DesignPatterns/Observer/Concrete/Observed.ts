class Observed implements Observer {
  notify(message: any) {
    alert(`${message}`);
  }
}
