import React, {Component} from 'react';
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button.js";
import Loader from "./Loader/Loader";
import axiosApiServices from "./services/axiosApiServices"


export default class App extends Component {
    state = {
        imageList: [],
        inputValue: "",
        page: 1,
        isLoading: false,
        error: null,
      };
      componentDidUpdate(prevProps, prevState) {
          const {inputValue, page, isLoading} = this.state;
          if(prevState.inputValue !== inputValue || prevState.page !== page) {
              this.setState ({
                  isLoading: true
              });
              this.receiveRequest()
          }
          if(this.state.page !== 1 && prevState.isLoading && !isLoading) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
              });
          }
      }

      receiveRequest = () =>{
        const { inputValue, page } = this.state;
        this.setState({
            isLoading: true
        })
        axiosApiServices(inputValue, page)
        .then((response) => {
            this.setState(({imageList}) => ({
                imageList: [...imageList, ...response.data.hits],
                isLoading: false
            }))
        })
        .catch((error) => this.setState({error}))
      }

      handleSubmit = (e) => {
        e.preventDefault();
        const searchImg = e.target.querySelector(".SearchForm-input").value;
        this.setState((prevState) => {
          if (prevState.inputValue !== searchImg) {
            return {
              imgList: [],
              inputValue: searchImg,
              page: 1,
            };
          } else {
            return {
              page: prevState.page + 1,
            };
          }
        });
      };

      loadMoreImage = () => {
        this.setState(({ page }) => ({
            page: page + 1,
          }));
      }

    render(){
        const {imageList, isLoading} = this.state
        return(
            <div>
            <Searchbar onSubmit={this.handleSubmit}></Searchbar>
            <ImageGallery items={imageList}></ImageGallery>
            {isLoading ? (<Loader/>
            ) : (
                    imageList.length > 0 && <Button onClick={this.loadMoreImage}/>)}
            </div>
        )
    }
}