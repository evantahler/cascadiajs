import * as os from "os";
import * as Animation from "chalk-animation";

export class Cascadia {
  async display() {
    await this.drawMessage();
    await this.drawGoodbye();
  }

  private async drawMessage() {
    // prettier-ignore
    const rows = [
"",
"   _   _      _ _         _____                         _ _         ___ _____ _ ",
"   | | | |    | | |       /  __ \\                       | (_)       |_  /  ___| |",
"   | |_| | ___| | | ___   | /  \\/ __ _ ___  ___ __ _  __| |_  __ _    | \\ `--.| |",
"   |  _  |/ _ \\ | |/ _ \  | |    / _` / __|/ __/ _` |/ _` | |/ _` |   | |`--. \\ |",
"   | | | |  __/ | | (_) | | \\__/\\ (_| \\__ \\ (_| (_| | (_| | | (_| /\\__/ /\\__/ /_|",
"   \\_| |_/\\___|_|_|\\___/   \\____/\\__,_|___/\\___\\__,_|\\__,_|_|\\__,_\\____/\\____/(_)",
"",];

    const animation = Animation.rainbow(rows.join(os.EOL));
    await this.sleep(5000);
    animation.stop();
  }

  private drawGoodbye() {
    console.log(``);
    console.log(``);
    console.log(`♥️  @evantahler`);
  }

  private async sleep(time = 1000) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}
