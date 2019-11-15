import { Request, Response, NextFunction } from 'express';

const ViewController = {
  renderIndex
};

async function renderIndex(req: Request, res: Response, next: NextFunction) {
  try {
    res.render('index');
  } catch (error) {
    next(error);
  }
}

export default ViewController;
