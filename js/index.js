$('.accordion').click(function() {

	if ($('.accordion__inner').hasClass('--active')) {
		$('.accordion__inner').removeClass('--active');
		$('h1').removeClass('--active');
	}
	$(this).children().toggleClass('--active');
})


	function creatTable (rows , colums) {
		let table = document.createElement('table');
        let number = 1;
        let innerTable = '';

            for (let i = 1; i <= rows; i++) {
                let tr = '<tr>';

                for (let j = 1; j <= colums; j++) {
                    tr += `<td>${number++}</td>`;
                }

                tr += '</tr>';
                innerTable += tr;

            }

            table.innerHTML = innerTable;

            return table;

        }

let $wrapper = document.querySelector('.wrapper');

$wrapper.append(creatTable(3,3));



document.querySelector('table').addEventListener('click', function(e) {
	let txtCont = '';
	if (e.target.tagName === 'TD') {
		txtCont += e.target.textContent;
	}

	let res = Number(txtCont);
	$wrapper.append(res);
})






