import { Component } from 'react';
import fetchImages from './services/api';
import Button from './Button/Button';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    photos: [],
    searchValue: '',
    page: 1,
    error: null,
    isLoading: false,
    modal: '',
  };

  async componentDidUpdate(prevState, prevProps) {
    if (
      this.state.searchValue !== prevProps.searchValue ||
      this.state.page !== prevProps.page
    ) {
      try {
        this.setState({ isLoading: true });

        const photos = await fetchImages(
          this.state.searchValue,
          this.state.page
        );

        photos.map(photo => {
          return this.setState(prevState => ({
            photos: [
              ...prevState.photos,
              {
                id: photo.id,
                webformatURL: photo.webformatURL,
                largeImageURL: photo.largeImageURL,
                tags: photo.tags,
              },
            ],
          }));
        });
      } catch (error) {
        this.setState({ error });
        console.log(this.state.error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  searchValue = e => {
    this.setState({ photos: [], searchValue: e });
    console.log(e);
  };

  showPhotos = () => {
    const { photos } = this.state;
    return photos;
  };

  handleButtonVisibility = () => {
    if (this.state.photos.length < 12) return 'none';
  };

  loadMore = e => {
    if (e) {
      this.setState({ page: this.state.page + 1 });

      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }, 500);
    }
  };

  handleModal = imageAddress => this.setState({ modal: imageAddress });

  modalClose = e => this.setState({ modal: e });

  passImgToModal = () => this.state.modal;

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.searchValue} />
        <ImageGallery className="Gallery" imageAddress={this.handleModal} />
        {this.state.isLoading && <Loader />}
        <div
          className="ButtonContainer"
          style={{ display: this.handleButtonVisibility() }}
        >
          {!this.state.isLoading && <Button onClick={this.loadMore} />}
        </div>
      </div>
    );
  }
}
export default App;
// class App extends Component {
//   state = {
//     images: [],
//     searchValue: '',
//     page: 1,
//     isLoading: false,
//     error: null,
//     modal: '',
//   };

//   async componentDidUpdate(prevState, prevProps) {
//     if (
//       this.state.searchValue !== prevProps.searchValue ||
//       this.state.page !== prevProps.page
//     ) {
//       try {
//         this.setState({ isLoading: true });

//         const photos = await fetchImages(
//           this.state.searchValue,
//           this.state.page
//         );

//         photos.map(photo => {
//           return this.setState(prevState => ({
//             photos: [
//               ...prevState.photos,
//               {
//                 id: photo.id,
//                 webformatURL: photo.webformatURL,
//                 largeImageURL: photo.largeImageURL,
//                 tags: photo.tags,
//               },
//             ],
//           }));
//         });
//       } catch (error) {
//         this.setState({ error });
//         console.log(this.state.error);
//       } finally {
//         this.setState({ isLoading: false });
//       }
//     }
//   }

//   searchValue = e => this.setState({ images: [], searchValue: e });

//   showImages = () => {
//     return this.state.images;
//   };

//   loadMore = e => {
//     if (e) {
//       this.setState({ page: this.state.page + 1 });
//     }
//   };

//   handleModal = imageURL => {
//     this.setState({ modal: imageURL });
//   };

//   modalClose = e => {
//     this.setState({ modal: e });
//   };

//   passImageToModal = () => {
//     return this.state.modal;
//   };

//   render() {
//     return (
//       <div className="App">
//         <SearchBar onSubmit={this.searchValue}></SearchBar>
//         <ImageGallery
//           photos={this.showImages}
//           imageAddress={this.handleModal}
//         />
//         {this.state.isLoading && <Loader />}
//         <div className="ButtonContainer">
//           {!this.state.isLoading && <Button onClick={this.loadMore} />}
//         </div>
//         {this.state.modal !== '' && (
//           <Modal
//             imageAddress={this.passImageToModal}
//             onClick={this.modalClose}
//           />
//         )}
//       </div>
//     );
//   }
// }
// export default App;
