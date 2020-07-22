import Controller from './Controller';
class BooksController extends Controller {
  constructor() {
    super();
  }
  async actionList(ctx, next) {
    ctx.body = await ctx.render('books/pages/list');
  }
  async actionCreate(ctx) {
    ctx.body = await ctx.render('books/pages/create');
  }
}
export default BooksController;
