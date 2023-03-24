
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, Input } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { alumnos as data } from "./alumnos";



export default function App() {

  const [id , setId ] = useState('')
  const [nombre , setNombre ] = useState('')
  const [asignatura , setAsignatura ] = useState('')
  const [nota1 , setNota1 ] = useState('')
  const [nota2, setNota2 ] = useState('')
  const [nota3, setNota3 ] = useState('')
  const [final, setFinal ] = useState('')
  const [observacion, setObservacion ] = useState('')

  const [alumnos, setAlumnos ] = useState([])


  useEffect(()=>{
    setAlumnos(data)
  },[])

//CREANDO A LA FUNCION GUARDAR
        const guardar=(opcion) =>{
          if(opcion == "GUARDAR"){
            if(id !== "" && nombre !=="" && asignatura !== "" && nota1 !== "" && nota2 !== "" && nota3 !==""){
              if(nota1>=0 && nota1 <=5 && nota2>=0 && nota2 <=5 && nota3>=0 && nota3 <=5 ){
                // CALCULANDO LA NOTA DEFINITIVA
              let notaFinal=0  
              notaFinal= (parseFloat(nota1)*0.3) + (parseFloat(nota2)*0.35) + (parseFloat(nota3)*0.35)

                let observacionAlumno=''
                //observacionAlumno =(notaFinal) =>{
                  if(notaFinal >= 3){
                    observacionAlumno="APRUEBA"
                    console.log("apruebaaa")
                  }
                  else if(notaFinal >=2 && notaFinal<3){
                    observacionAlumno="Habilita"
                    console.log("habilita")

                  }
                  else if(notaFinal<2){
                    observacionAlumno="Reprueba"
                    console.log("repruebaaa")

                  }
                  else{
                    console.log("error en observacion")
                  }
                  
                
                setObservacion(observacionAlumno)


            if(notaFinal>=0 ){
              function agregarAlumno(alumnoId, alumnoNombre, alumnoAsignatura, alumnoNota1, alumnoNota2, alumnoNota3, alumnoNotaFinal, alumnoObservacion){
                setAlumnos([...alumnos, {
                id:alumnoId,
                nombre: alumnoNombre,
                asignatura: alumnoAsignatura,
                nota1: alumnoNota1,
                nota2: alumnoNota2,
                nota3: alumnoNota3,
                final: alumnoNotaFinal,
                observacion: alumnoObservacion,
                
                }])
              }  
              console.log(alumnos)

             agregarAlumno(id,nombre,asignatura,nota1,nota2,nota3,notaFinal,observacionAlumno) 
             setFinal(notaFinal)
             setObservacion(observacionAlumno)

              console.log(notaFinal)
              console.log(alumnos)
              console.log(observacionAlumno)

            } 
              }
              else{
                alert("Ingrese la nota correcta")
              }
            

            }
            else{
              alert("error - ingrese todos los datos")
            }
          }

        }
      
        //setFinal(notaFinal)

//CREANDO LA FUNCION LIMPIAR
        const limpiar = () =>{
            setId('');
            setNombre('');
            setAsignatura('')
            setNota1('');
            setNota2('');
            setNota3('');
            setFinal('');
            setObservacion(''),
              console.log("limpiando otra vez")
          }
           
//CREANDO LA FUNCION BUSCAR         
          const buscar = (id) => {
          let search = alumnos.find(
            (alumnoBusqueda) => alumnoBusqueda.id == id
          );
          if (search !== undefined){
            setId(search.id);
            setNombre(search.nombre);
            setAsignatura(search.asignatura);
            setNota1(search.nota1);
            setNota2(search.nota2);
            setNota3(search.nota3);
            setFinal(search.final);
            setObservacion(search.observacion);
          }
          //console.log("buscandooo")
          //console.log(search)
          //console.log("definitiva es:" + al)
        };
    

  // PINTANDO EL FORM
  return(
 //  console.log(alumnos,"hello"),
 // console.log(alumnos),

    <View style={styles.container}>
      <View style={[styles.container, styles.banner]}>
        <Text style={styles.textoBanner} >Sistema de Notas</Text>
      </View>


        <View style={styles.formulario}>
          <Text style={styles.label}>Identificacion</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Ingrese ID"
            onChangeText={id => setId(id)}
            value={id}
          />
        </View>
        
        <View style={styles.formulario}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Ingrese nombre"
            onChangeText={nombre => setNombre(nombre)}
            value={nombre}
          />
        </View>

        <View style={styles.formulario}>
          <Text style={styles.label}>Asignatura</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Ingrese asignatura"
            onChangeText={asignatura => setAsignatura(asignatura)}
            value={asignatura}
          />
        </View>
        
        <View style={styles.formulario}>
          <Text style={styles.label}>Nota Momento 1 (30%)</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Ingrese nota 1"
            onChangeText={nota1 => setNota1(nota1)}
            value={nota1}
          />
        </View>

        <View style={styles.formulario}>
          <Text style={styles.label}>Nota Momento 2 (35%)</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Ingrese nota 2"
            onChangeText={nota2 => setNota2(nota2)}
            value={nota2}
          />
        </View>

        <View style={styles.formulario}>
          <Text style={styles.label}>Nota Momento 3 (35%)</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Ingrese nota 3"
            onChangeText={nota3 => setNota3(nota3)}
            value={nota3}
          />
       </View>

      <View style={styles.formulario}>
          <Text style={styles.label}>Definitiva</Text>
          <TextInput
            style={styles.inputs}
            placeholder= "definitiva es:"
           onChangeText={final => setFinal(final)}
           disabled value={final}
          />
        </View>
      
      <View style={styles.formulario}>
          <Text style={styles.label}>Observacion</Text>
          <TextInput
            style={styles.inputs}
            placeholder=" observacion"
            onChangeText={observacion => setObservacion(observacion)}
            disabled value={observacion}
          />
          </View>


        <View style={styles.row}>
          <TouchableOpacity 
          style={styles.boton}
          onPress={() => guardar("GUARDAR")}>
            <Text style={styles.textoBotones} >CALCULAR/GUARDAR</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={[styles.boton,  {backgroundColor:'orange'}]}
          onPress={() => limpiar("LIMPIAR")}>
            <Text style={styles.textoBotones}>LIMPIAR</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={[styles.boton ,  {backgroundColor:'coral'}]}
          onPress={() => {
          buscar(id)}}>
            <Text style={styles.textoBotones}>BUSCAR</Text>
          </TouchableOpacity>

       

        </View>
    
       
    </View>


  );
 

}




const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'top',
    width: '100%',
    backgroundColor: '#FFFBDD '

  },
  
  formulario:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'left',
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: '#FFFBDD '
  },
  
  label:{
    marginRight: 10,
    textAlign:'left',
    color:'green',
    with:'100%',
    alignItems:'right',
    alignContent:'right',
    justifyContent:'flex-end',
    fontWeight: '300',
    fontSize: 15
  },

  inputs: {
    color: "grey",
    //flex: 1,
    //borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderBottomWidth: 1,
    height:40,
    textAlign:'center',
    fontSize: 10

    
  },
  boton: {
    backgroundColor: "green",
    flex: 1,
    marginHorizontal: 1,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    paddingHorizontal: 35,
    paddingVertical: 10,

    //flexWrap:'wrap',
    borderRadius: 4,
   // alignSelf: 'flex-center',
    //marginHorizontal: '1%',
    justifyContent: 'center'
  },

  row:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textoBotones:{
    color:'white',
    fontSize: 10,
    fontWeight: '500'
  },
  banner:{
   backgroundColor:'steelblue',
   padding: 15,
   color: 'white',
   textDecorationLine: 'underline',
  
  },
  textoBanner:{
  color:'white',
  fontWeight: '300',
  fontSize: 25


  },




});






/*
   <TouchableOpacity 
          style={styles.boton}
          onPress={() => calcularDefinitva(nota1,nota2,nota3)}>
            <Text style={styles.textoBotones}>CALCULAR</Text>
          </TouchableOpacity>
*/





/*
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


*/
