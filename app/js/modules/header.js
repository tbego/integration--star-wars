var header = {
	init: function () {
        document.querySelector(".menu").addEventListener("click",function(e){
            e.target.style.display = 'none';
            document.querySelector(".close").style.display = 'block';
            document.querySelector("header").classList.add("mobile");
            document.querySelector("header ul").style.display = 'flex';
        },false);

        document.querySelector(".close").addEventListener("click",function(e){
            e.target.style.display = 'none';
            document.querySelector("header ul").style.display = 'none';
            document.querySelector("header").classList.remove("mobile");
            document.querySelector(".menu").style.display = 'block';
        },false);
	}
};

module.exports = header;
