import axios from 'axios'
import * as $ from 'jquery'

const MyButton = (() => {
    class MyButton {
        element: HTMLElement

        constructor (element: HTMLElement) {
            this.element = element
            this.init()
        }

        async onBtnClicked() {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

            alert('Check console!')
            console.log(data)
        }

        init() {
            $(this.element).on('click', () => this.onBtnClicked())
        }
    }

    $(document).ready(() => {
        $('.btn').each((index, element) => {
            new MyButton(element)
        })
    })
})()

export default MyButton