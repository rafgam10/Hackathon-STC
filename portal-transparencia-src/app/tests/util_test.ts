/* eslint-disable */
import { couldStartTrivia } from "typescript";
import utils from "../utils/util_dados.ts";

async function testar() {
  console.log("🔄 Testando API...");


    try{
        const dados = await utils.Obter_Consulta_de_Notas(2023, 110122)
        console.log("✅ Sucesso! Dados:", dados);
    }catch(error){
        console.error(error)
    }

    // try{
    //     const dados = await utils.Obter_Consulta_Despesas(2023, 2, 110122)
    //     console.log("✅ Sucesso! Dados:", dados);
    // }catch(error){
    //     console.error(error)
    // }


  //   try {
//     const dados = await utils.ObterUnidade_Codigo_ug();
//     console.log("✅ Sucesso! Dados:", dados);
//   } catch (error) {
//     console.error("❌ Erro ao chamar API:", error);
//   }
}

testar();