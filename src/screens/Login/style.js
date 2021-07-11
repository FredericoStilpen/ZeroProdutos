import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient'

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: #6ab982; //fundo tela de login

`;

export const ContainerLog = styled.View`
display: flex;
justify-content: center;
width: 350px;
height:300px;
background-color: #fff; //fundo box de login
`;

export const TextHeader = styled.Text`
font-size: 20px;
margin: 10px;
`;

export const TextLog = styled.TextInput`
font-size: 20px;
margin: 10px;
border-bottom-width: 1px;
`;
