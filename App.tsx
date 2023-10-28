import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Button } from 'react-native';

export default function App() {
  const [codigo, setCodigo] = useState('');
  const [rg, setRG] = useState('');
  const [cpf, setCPF] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  
  


  const [dadosCadastrados, setDadosCadastrados] = useState([]);

  const cadastro = () => {
    if (codigo && rg && cpf && nome && email && celular && telefone && endereco && complemento) {
      setDadosCadastrados([...dadosCadastrados, { codigo, rg, cpf, nome, email, celular, telefone, endereco, complemento}]);
      setCodigo('');
      setRG('');
      setCPF('');
      setNome('');
      setEmail('');
      setCelular('');
      setTelefone('');
      setEndereco('');
      setComplemento('');
      
    }
  }

  const removerItem = (index) => {
    const novosDados = [...dadosCadastrados];
    novosDados.splice(index, 1);
    setDadosCadastrados(novosDados);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={{ color: 'white', fontSize:30 }}>TELA DE CADASTRO</Text>

      <View style={styles.opcoes} > 
        <Text style={styles.texto}>Codigo: </Text>
        <TextInput style={styles.caixaTexto} value={codigo} onChangeText={text => setCodigo(text)} />
      </View>
      
      <View style={styles.opcoes} > 
        <Text style={styles.texto}>RG: </Text>
        <TextInput style={styles.caixaTexto} value={rg} onChangeText={text => setRG(text)} />
      </View>

      <View style={styles.opcoes} > 
        <Text style={styles.texto}>CPF: </Text>
        <TextInput style={styles.caixaTexto} value={cpf} onChangeText={text => setCPF(text)} />
      </View>
      
      <View style={styles.opcoes} > 
        <Text style={styles.texto}>Nome: </Text>
        <TextInput style={styles.caixaTexto} value={nome} onChangeText={text => setNome(text)} />
      </View>

      <View style={styles.opcoes} > 
        <Text style={styles.texto}>Email: </Text>
        <TextInput style={styles.caixaTexto} value={email} onChangeText={text => setEmail(text)} />
      </View>

      <View style={styles.opcoes} > 
        <Text style={styles.texto}>Celular: </Text>
        <TextInput style={styles.caixaTexto} value={celular} onChangeText={text => setCelular(text)} />
      </View>

      <View style={styles.opcoes} > 
        <Text style={styles.texto}>Telefone: </Text>
        <TextInput style={styles.caixaTexto} value={telefone} onChangeText={text => setTelefone(text)} />
      </View>

      <View style={styles.opcoes} > 
        <Text style={styles.texto}>Endereco: </Text>
        <TextInput style={styles.caixaTexto} value={endereco} onChangeText={text => setEndereco(text)} />
      </View>

      <View style={styles.opcoes} > 
        <Text style={styles.texto}>Complemento: </Text>
        <TextInput style={styles.caixaTexto} value={complemento} onChangeText={text => setComplemento(text)} />
      </View>
   
      

      <TouchableOpacity style={styles.botao} onPress={cadastro}>
        <Text>cadastrar</Text>
      </TouchableOpacity>

      <FlatList
        data={dadosCadastrados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => removerItem(index)} style={{  backgroundColor: 'white', margin: 5, padding: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>

              <Text>Codigo: {item.codigo};</Text>
              <Text>RG: {item.rg};</Text>
              <Text>CPF: {item.cpf};</Text>
              <Text>Nome: {item.nome};</Text>
              <Text>Email: {item.email};</Text>
              <Text>Celular: {item.celular};</Text>
              <Text>Telefone: {item.telefone};</Text>
              <Text>Endereço: {item.endereco};</Text>
              <Text>complemento: {item.complemento};</Text>

            </View>
            
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  texto:{
    color:"white", 
    fontSize:18, 
    marginTop: 12, 
    width: 170,
    textAlign:'center'
    

  },

  opcoes:{
    flexDirection: 'row', 
    alignItems: 'center',
    
    
  },


  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  caixaTexto: {
    width: '50%',
    borderRadius: 10,
    height: 30,
    backgroundColor: 'white',
    marginTop: 20,
    paddingLeft: 10,
  },

  botao: {
    marginTop: 20,
    backgroundColor: "white",
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  }
});