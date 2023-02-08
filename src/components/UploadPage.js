import React, { useState } from 'react';
import { Button, Upload, message, InputNumber, Checkbox, Form, Input, Divider } from 'antd';
import "./UploadPage.scss"
import {useNavigate} from "react-router-dom"
import axios from 'axios';

const UploadPage = () => {
    /* const [imageUrl, setImageUrl] = useState(null); */
    const history = useNavigate();
    const onsubmit = (values) => {
        axios.post(``,{
            name: values.name,
            description: values.description,
            seller: values.seller,
            price: values.price,
        })
        .then((result)=>{
            console.log(result);
            history('/', {replace:true});
        }).catch((error)=>{
            console.log(error);
            message.error(`에러가 발생했습니다 $(error.message)`)
        });
    };
    const onChangeImage = (info)=>{
        /* if(){
            return
        }
        if(){} */
    }
        
    return (
        <div id='upload-container'>
            <Form name='uploadForm' onFinish={onsubmit}>
                <Form.Item name="upload" label={<span className='upload-label'>상품사진</span>}>
                    <div id='upload-img' onChange={onChangeImage}>
                        <img src="/images/icons/camera.png" alt="" />
                        <span>이미지를 업로드 해주세요</span>
                    </div >
                </Form.Item>
                <Divider/>
                <Form.Item label={<span className='upload-label'>판매자명</span>} name="seller" rules={[ {required: true, message: '판매자명은 필수 입력사항입니다.'} ]} >
                    <Input className='upload-name' placeholder='이름을 입력해주세요!' size='large'/>
                </Form.Item>
                <Divider/>
                <Form.Item label={<span className='upload-label'>상품명</span>} name="name" rules={[ {required: true, message: '상품명은 필수 입력사항입니다.'} ]} >
                    <Input className='upload-name' placeholder='상품명을 입력해주세요!' size='large'/>
                </Form.Item>
                <Divider/>
                <Form.Item label={<span className='upload-label'>판매가</span>} name="price" rules={[ {required: true, message: '판매가는 필수 입력사항입니다.'} ]} >
                    <InputNumber className='upload-price' min={0} size='large'/>
                </Form.Item>
                <Divider/>
                <Form.Item label={<span className='upload-label'>상품설명</span>} name="description" rules={[ {required: true, message: '상품설명을 해주세요.'} ]} >
                    <Input.TextArea placeholder='상품설명을 해주세요!' size='large' id='product-description' showCount maxLength={300}/>
                </Form.Item>
                <Divider/>
                <Form.Item>
                    <Button id='submit-button' size='large' htmlType='submit'>상품등록하기</Button>
                </Form.Item>
            </Form>
        </div> 
    );
};



export default UploadPage;
