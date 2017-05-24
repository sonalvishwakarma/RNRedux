import { combineReducers } from 'redux';
import { ActionConst } from 'react-native-router-flux';
import { todoReducer } from './todoReducer';
import { counterReducer } from './counterReducer';


const sceneReducer = (state = {}, {type, scene}) => {
	switch(type){
		case ActionConst.FOCUS:
			return { ...state, scene };
		default:
		return state;
	}    
}

export const appReducer = combineReducers({
	sceneReducer,
	counterReducer
});