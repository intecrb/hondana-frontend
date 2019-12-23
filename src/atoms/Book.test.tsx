import React from 'react';
import Book from './Book.tsx';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Bookコンポートにてステータスによる変化をテストする', () => {

  test('貸出中だと背景色が黒', () => {
  const tree = renderer.create(
    <Book status="貸出中" title="日和の書" img="https://eiga.k-img.com/images/person/48809/636e0909e3853484/320.jpg?1487241318"/>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('width', '150px');
  expect(tree).toHaveStyleRule('background', 'black');
});

test('貸出中以外だと背景色は白', () => {
  const tree = renderer.create(
    <Book status="" title="日和の書" img="https://eiga.k-img.com/images/person/48809/636e0909e3853484/320.jpg?1487241318"/>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('width', '150px');
  expect(tree).toHaveStyleRule('background', 'white');
});
})
