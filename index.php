<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
	<title>GitHub search</title>
	 <script src="script.js"></script>
     <link href="style.css" rel="stylesheet">
</head>
<body>


<?php include 'search.php' ?>

<form id="form" action="index.php" method="post">
    <div id="div1">
	<select name="field1" placeholder="Field...">
	    <option  value="" disabled selected>Field...</option>
		<option  value="size" <?php if ('size' == $field) { ?> selected <?php } ?> >size</option>
		<option  value="forks" <?php if ('forks' == $field) { ?> selected <?php } ?> >forks</option>
		<option  value="stars" <?php if ('stars' == $field) { ?> selected <?php } ?> >stars</option>
		<option  value="followers" <?php if ('followers' == $field) { ?> selected <?php } ?> >followers</option>
	</select>
	<select name="operator1" placeholder="Operator...">
	    <option  value="" disabled selected>Operator...</option>
		<option  value=">" <?php if ('>' == $operator) { ?> selected <?php } ?> >></option>
		<option  value="<" <?php if ('<' == $operator) { ?> selected <?php } ?> ><</option>
		<option  value="=" <?php if ('=' == $operator) { ?> selected <?php } ?> >=</option>
	</select>
	<input type="number" name="number1" step="1" size="15" value="" placeholder="Value...">
	<input type="button" id="button1" name="reset1" value="Delete" >
	<br>
	</div>
	<div id="div2">
	<select name="field2" placeholder="Field...">
	    <option  value="" disabled selected>Field...</option>
		<option  value="size" <?php if ('size' == $field) { ?> selected <?php } ?> >size</option>
		<option  value="forks" <?php if ('forks' == $field) { ?> selected <?php } ?> >forks</option>
		<option  value="stars" <?php if ('stars' == $field) { ?> selected <?php } ?> >stars</option>
		<option  value="followers" <?php if ('followers' == $field) { ?> selected <?php } ?> >followers</option>
	</select>
	<select name="operator2" placeholder="Operator...">
	    <option  value="" disabled selected>Operator...</option>
		<option  value=">" <?php if ('>' == $operator) { ?> selected <?php } ?> >></option>
		<option  value="<" <?php if ('<' == $operator) { ?> selected <?php } ?> ><</option>
		<option  value="=" <?php if ('=' == $operator) { ?> selected <?php } ?> >=</option>
	</select>
	<input type="number2" name="number2" step="1" size="15" value="" placeholder="Value...">
	<input type="button" name="reset" id="button2" value="Delete" >
	</div>
	<hr>
	<input type="submit" name="" value="Apply">
	<input id="Clear" type="button" name="" value="Clear">
	<input id="Add_Rule" type="button" name="" value="Add Rule">
</form>

</body>
</html>