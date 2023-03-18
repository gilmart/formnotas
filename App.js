import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useState } from "react";

export default function App() {

  const [id, setId] = useState('');
  const [nombres, setNombre] = useState('');
 
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  
  const [esValido, setesValido] = useState(true);
  const [definitiva, setDefinitiva] = useState('0');
  const [observaciones, setObservaciones] = useState('');

  const asignaturas = ["matematicas", "fisica", "otra", "quimica"]
//Funciones
  let calcularNotas= (operador)=>{
    if (nota1 != "" && nota2 != "" && nota3 != "")
    setesValido(true)

    let resultadoNotas;

    resultadoNotas=parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)

    setDefinitiva(resultadoNotas)

    console.log(resultadoNotas)
  }


  return (
    <>
      <View style={styles.container}>
        <Text>ID</Text>
        <TextInput style={styles.inputs} placeholder="ingrese id" />

        <Text>NOMBRES</Text>
        <TextInput style={styles.inputs} placeholder="ingrese nombres" />
        
        <SelectDropdown style={styles.selects} let data={asignaturas}></SelectDropdown>
 

        <Text>NOTA 1</Text>
        <TextInput style={styles.inputs}
         placeholder="ingrese nota 1" 
         onChangeText={nota1 => setNota1(nota1)}
         value={nota1}
         />

        <Text>NOTA 2</Text>
        <TextInput style={styles.inputs} placeholder="ingrese nota 2" />

        <Text>NOTA 3</Text>
        <TextInput style={styles.inputs} placeholder="ingrese nota 3" />

        <Text>DEFINITIVA</Text>
        <TextInput  disabled={true} style={styles.inputs} placeholder="" />

        <Text>OBSERVACIONES</Text>
        <TextInput style={styles.inputs} placeholder="" />
      </View>

      <View style={[styles.container, styles.vistaBotones]}>
        
        <Button style={styles.botones} title={'GUARDAR'} onPress={()=>calcularNotas("GUARDAR")}></Button>


        <Button style={styles.botones} title={'LIMPIAR'}/>
        <Button style={styles.botones} title={'BUSCAR'}/>

      </View>



    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  inputs: {
    color: "grey",
    borderRadius: 5,
    padding: 5,
    borderWidth: 2,
    borderColor: "green",
    textAlign: "center",
  },
  selects: {
    color: "grey",
    borderRadius: 5,
    padding: 10,
    borderWidth: 5,
    borderColor: "green",
    textAlign: "center",
  },
  botones: {
    padding: 10,
    borderRadius: '10px',
    width: 20,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: '2rem',
    width: '100px'
  },
  vistaBotones:{
    //display:'flex',
    flexDirection:'column',
    //width: '100%',
   // margin:'1rem'
  }

});
