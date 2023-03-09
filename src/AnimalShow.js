import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

const svgMap = {

	bird, cat, cow, horse
};



function AnimalShow({type}) {

	return <div>
		<img alt="animal" src={svgMap[type]} />
	</div>
}

export default AnimalShow;