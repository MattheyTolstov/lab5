let matrix = []

function create_matrix() {
    for (let i = 0; i < input_m.value; i++) {
        let row = []
        for (let j = 0; j < input_n.value; j++) {
            row.push(Math.round((Number(Math.random()))*20-10))
        }
        matrix.push(row)
    }
    print_matrix()
}

function print_matrix() {
    for (let i = 0; i < input_m.value; i++) {
        let new_row = document.createElement("tr")
        for (let j = 0; j < input_n.value; j++) {
            let new_cell = document.createElement("td")
            new_cell.innerText = matrix[i][j]
            new_row.append(new_cell)
        }
        table.append(new_row)
    }
    print_result()
}

function print_result() {
    let arithm_mean_rows = []

    for (let i = 0; i < input_m.value; i++) {
        arithm_mean_rows.push(arithm_mean_array(matrix[i]))
    }

    let count_elem_lt_arithm_mean = []

    for (let i = 0; i < input_m.value; i++) {
        let count_elem = 0
        for (let j = 0; j < input_n.value; j++) {
            if (matrix[i][j] < arithm_mean_rows[i]) {
                count_elem++
            }
        }
        count_elem_lt_arithm_mean.push(count_elem)
    }
    let count_elem_lt_arithm_mean_print = document.createElement("p")
    count_elem_lt_arithm_mean_print.innerText = `Количество элементов, меньших среднего арифметического всех элементов этой строки соответственно:  
    ${count_elem_lt_arithm_mean}`
    section.append(count_elem_lt_arithm_mean_print)
}

function arithm_mean_array(array) {
    let sum_elem = 0
    for (let i = 0; i < array.length; i++) {
        sum_elem += array[i]
    }
    return sum_elem / array.length
}


const button_create_matrix = document.getElementById("create_matrix")
const input_m = document.getElementById("m")
const input_n = document.getElementById("n")

let section = document.querySelector("section")
let table = document.createElement("table")
section.append(table)

button_create_matrix.addEventListener("click", create_matrix)