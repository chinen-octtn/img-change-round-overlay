export function changeImg() {
  // 3秒ごとに画像を切り替える

  // 切り替える要素の数を取得する
  const img = document.querySelectorAll('.js-img')
  const count: number = Number(img?.length)
  let index: number = 1

  // 3秒ごとにclassを切り替える
  setInterval(() => {
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
