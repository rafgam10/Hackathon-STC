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
            const despesas = response.data;
            
            const totais = despesas.reduce((acc: any, item: any) => ({
                total_empenho: acc.total_empenho + (parseFloat(item.valor_emp) || 0),
                total_liquido: acc.total_liquido + (parseFloat(item.valor_nl) || 0),
                total_pago: acc.total_pago + (parseFloat(item.valor_op) || 0)
            }), { total_empenho: 0, total_liquido: 0, total_pago: 0 });

            return totais;
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
    },

    Calcular_Totais_Despesas(despesas: any[]) {
        if (!Array.isArray(despesas) || despesas.length === 0) {
            return {
                total_empenho: 0,
                total_liquido: 0,
                total_pago: 0,
                quantidade_registros: 0
            };
        }

        const totais = despesas.reduce((acc, despesa) => {
            return {
                total_empenho: acc.total_empenho + (parseFloat(despesa.valor_emp) || 0),
                total_liquido: acc.total_liquido + (parseFloat(despesa.valor_nl) || 0),
                total_pago: acc.total_pago + (parseFloat(despesa.valor_op) || 0)
            };
        }, { total_empenho: 0, total_liquido: 0, total_pago: 0 });

        return {
            ...totais,
            quantidade_registros: despesas.length
        };
    },

    Extrair_Valores_Despesas(despesas: any[]) {
        if (!Array.isArray(despesas)) return [];

        return despesas.map(despesa => ({
            empenho: parseFloat(despesa.valor_emp) || 0,
            liquido: parseFloat(despesa.valor_nl) || 0,
            pago: parseFloat(despesa.valor_op) || 0,
            descricao: despesa.descricao,
            credor: despesa.credor_nome,
            data: despesa.data
        }));
    }
    
}