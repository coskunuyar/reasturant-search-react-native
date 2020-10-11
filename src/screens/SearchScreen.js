import React,{useState } from 'react';
import { Text , StyleSheet , ScrollView } from 'react-native';
import useResults from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [ term , setTerm ] = useState('');
  const [ searchApi , results , errorMessage ] = useResults();

  const filterResultsByPrice = (price) =>{
    return results.filter(result => {
      return result.price === price;
    })
  }

  return <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {Boolean(errorMessage) && <Text>{errorMessage}</Text>}
            <ScrollView>
              <ResultsList 
                  results={filterResultsByPrice('$')} 
                  title="Cost Effective"
              />
              <ResultsList 
                  results={filterResultsByPrice('$$')} 
                  title="Bit Pricier" 
              />
              <ResultsList 
                  results={filterResultsByPrice('$$$')} 
                  title="Big Spender" 
              />
              <ResultsList 
                  results={filterResultsByPrice('$$$$')} 
                  title="Rich Only" 
              />
            </ScrollView>
         </>
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
});

export default SearchScreen