<script>
	let shiki1="please input";
	let answer= null
	function calcConjunction(b1,b2){
		return b1 && b2
	}
	function calcDisjunction(b1,b2){
		return b1 || b2
	}
	function calcNot(b){
		return !b
	}
	function calcImplication(b1,b2){
		return !b1||b2
	}
	function calcEquivalence(b1,b2){
		return (!b1 || b2) && (b1 || !b2);
	}
	function calcMain(str,p,q,r){
		let state = 0
		let i=0
		let end=false
		if(str.length<=1){
			switch(str){
				case "p":
					if(state===0){
						return p
					}
					break;
				case "q":
					if(state===0){
						return q
					}
					break;
				case "r":
					if(state===0){
						return r
					}
					break;
			}
		}
		for(;i<str.length || end;i++){
			console.log(str[i])
			switch(str[i]){
				case "(":
					state++;
					break;
				case ")":
					state--;
					break;
				case "∧":
					if(state===0){
						let str1 = str.substring(0,i).replace("(","").replace(")","")
						let str2 = str.substring(i+1,str.length).replace("(","").replace(")","")
						end=true
						return calcConjunction(calcMain(str1,p,q,r),calcMain(str2,p,q,r))
						break;
					}
				case "∨":
					if(state===0){
						let str1 = str.substring(0,i).replace("(","").replace(")","")
						let str2 = str.substring(i+1,str.length).replace("(","").replace(")","")
						end=true
						return calcDisjunction(calcMain(str1,p,q,r),calcMain(str2,p,q,r))
						break;
					}
				case "¬":
					if(state===0){
						let str1 = str.substring(0,i).replace("(","").replace(")","")
						let str2 = str.substring(i+1,str.length).replace("(","").replace(")","")
						console.log(str1)
						console.log(str2)
						end=true
						return calcNot(calcMain(str2,p,q,r))
						break;
					}
				case "⇒":
					if(state===0){
						let str1 = str.substring(0,i).replace("(","").replace(")","")
						let str2 = str.substring(i+1,str.length).replace("(","").replace(")","")
						console.log(str1)
						console.log(str2)
						end=true
						return calcImplication(calcMain(str1,p,q,r),calcMain(str2,p,q,r))
						break;
					}
				case "⇔":
					if(state===0){
						let str1 = str.substring(0,i).replace("(","").replace(")","")
						let str2 = str.substring(i+1,str.length).replace("(","").replace(")","")
						end=true
						return calcEquivalence(calcMain(str1,p,q,r),calcMain(str2,p,q,r))
						break;
					}
			}
		}
		console.log("error")
	}
	function calc(){
		let str=shiki1
		let ans=true
		let list=[true,false]
		list.forEach((x)=>{
			console.log(1)
			list.forEach((y)=>{
				console.log(2)
				list.forEach((z)=>{
					console.log(3)
					let b=calcMain(str,x,y,z)
					console.log(b)
					if(!b){
						ans=false
					}
				})
			})
		})
		answer=ans
	}
</script>

<main>
	<h1>命題論理式Tautology判定機</h1>
	<p>
		命題論理式がTautologyか自動で調べます。<br>
		Tautlogyならtrue、そうでないならfalseを返します。<br>
	</p>
	<h2>使える記号</h2>
	<p>
		∧:連言(Conjunction)<br>
		∨:選言(Disjunction)<br>
		¬:否定(Not)<br>
		⇒:含意(Implication)<br>
		⇔:同値(Equivalence)
	</p>
	<div>
		<input bind:value={shiki1} type="text">
		<button on:click={calc}>計算</button>
	</div>
	<p>結果:{answer}</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>