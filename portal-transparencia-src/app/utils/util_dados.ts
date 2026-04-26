/* eslint-disable */
import axios from "axios";

export default {
 
    //GET - Lista de unidades com código_UG
    async ObterUnidade_Codigo_ug(){
        try{
            const response = await axios.get('https://transparencia.ma.gov.br/api/consulta-unidades')
            return response.data;
        }catch(error: any) {
            console.error("Erro:", error.message); // VER MENSAGEM
            throw error; // LANÇAR O ERRO
        }
    },

    async Obter_Consulta_Despesas(ano: number, mes: number, codigo_ug: number){
        try {
            const response = await axios.get(
                'https://transparencia.ma.gov.br/api/consulta-despesas',
                {
                    params: {
                        ano,
                        mes,
                        codigo_ug
                    }
                }
            )
            return response.data;
        } catch(error: any) {
            console.error("Erro:", error.message);
            throw error;
        }
    },

    async Obter_Consulta_de_Notas(ano: number, codigo_ug: number){
        try{
            const response = await axios.get(
                'https://transparencia.ma.gov.br/api/consulta-notas',
                {
                    params: {
                        ano,
                        codigo_ug
                    }
                }
            )
            return response.data;
        }catch(error){
            console.error(error)
            throw error;
        }
    }
    
}