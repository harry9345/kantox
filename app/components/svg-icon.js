import Component from "@glimmer/component";

export default class SvgIconComponent extends Component {

  constructor() {
    super(...arguments);
    this.loadSvg();
  }

  loadSvg() {
    const img = new Image();
    img.src = `/assets/${this.args.name}.svg`;
  }
}
