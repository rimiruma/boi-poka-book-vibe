import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../Utility/Addtodb';
import Book from '../Book/Book';


const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect( () => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map(id => parseInt(id));
    console.log(storedReadList, storedReadListInt, allBooks);

    const redBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
    setReadList(redBookList);
    
  }, [])

  return (
    <div>
      <h3 className="text-3xl my-8">ListedBooks</h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className='text-3xl'>Books I Read: {readList.length}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className='text-2xl'>My wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;