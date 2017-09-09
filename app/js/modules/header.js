var header = {
	init: function () {
        document.querySelector(".menu").addEventListener("click",function(e){
            document.querySelector("header").classList.add("menu-opened");
        },false);

        document.querySelector(".close").addEventListener("click",function(e){
            document.querySelector("header").classList.remove("menu-opened");
        },false);
	}
};

module.exports = header;
