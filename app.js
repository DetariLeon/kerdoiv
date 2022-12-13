document.getElementsByClassName('container')[0].style.display = "block";
        function next(id) {
            document.getElementsByClassName('container')[id - 1].style.display = "none";
            document.getElementsByClassName('container')[id].style.display = "block";
        }

        function result() {
            var pont = 0;
            if (document.getElementById('correct1').checked) {
                pont++;
            }
            if (document.getElementById('correct2').checked) {
                pont++;
            }
            if (document.getElementById('correct3').checked) {
                pont++;
            }
            if (document.getElementById('correct4').checked) {
                pont++;
            }
            if (document.getElementById('correct5').checked) {
                pont++;
            }
            if (document.getElementById('correct6').checked) {
                pont++;
            }
            alert("Szép volt! Az ön pontja: " + pont);
        }