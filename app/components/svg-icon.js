import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class SvgIconComponent extends Component {
  @tracked isSvgLoaded = false;

  constructor() {
    super(...arguments);
    this.loadSvg();
  }

  @action
  onSvgLoad() {
    this.isSvgLoaded = true;
  }

  loadSvg() {
    const img = new Image();
    img.onload = this.onSvgLoad.bind(this);
    img.src = `/assets/${this.args.name}.svg`;
  }
}
