import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankRewards from "./NubankRewards";

//Neste caso a NubankRewards nao tem nada a ver com a NubankCard pois em um caso
//real poderiam ter muitas diferenças porém ele respeita a interface.
//No caso tanto o Debit quanto o Credit poderiam substituir o NubankCard ja que
//implementam seus métodos.
//Esse princípio é mais complicado porém respeita os outros 2 principios anteriores.

// const card = new CreditCard()
// const card = new DebitCard()
const card = new NubankRewards()

card.validate()
card.collectPayment()