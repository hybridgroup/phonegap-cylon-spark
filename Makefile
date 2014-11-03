BIN := ./node_modules/.bin

bundle:
	@$(BIN)/browserify spark.js -r cylon-gpio -r cylon-spark -o www/js/spark_browser.js
