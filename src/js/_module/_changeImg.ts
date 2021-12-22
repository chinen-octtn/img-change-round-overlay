export function changeImg() {
  // 画像切り替え部分の要素を取得する
  const imgGroup = document.querySelector('#js-group')

  // 切り替え対象の要素の数を取得する
  const img = imgGroup?.querySelectorAll('.js-img')
  const count = Number(img?.length)
  let index = 1

  // 3秒ごとにclassを切り替える
  const timer = setInterval(() => {
    // 一旦classをはずす
    img?.forEach((element) => element.classList.remove('is-active'))

    // 該当の要素のみclassをつける
    img?.item(index).classList.add('is-active')

    // 順番を回して要素の数になったらリセットする
    if (index < count - 1) {
      index++
    } else {
      index = 0
    }
  }, 3000)
}
