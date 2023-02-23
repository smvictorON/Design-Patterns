import IPlatform from "../platforms/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live {

  constructor(platform: IPlatform) {
    super(platform);
  }

  subtitles(): void {
    console.log("Legandas ativadas!")
  }

  comments(): void {
    console.log("Comentários liberados!")
  }
}