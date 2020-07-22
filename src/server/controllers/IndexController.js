import Controller from './Controller';
class IndexController extends Controller {
  constructor() {
    super();
  }
  async actionIndex(ctx, next) {
    ctx.body = '首页';

  }
}
export default IndexController;
