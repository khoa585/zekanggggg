import { BsFillStarFill } from "react-icons/bs";
export const to_slug = (str) => {
    str = str.toLowerCase();
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    str = str.replace(/([^0-9a-z-\s])/g, '');
    str = str.replace(/(\s+)/g, '-');
    str = str.replace(/^-+/g, '');
    str = str.replace(/-+$/g, '');
    return str;
}

export const formatNumber = (num) => {
    return new Intl.NumberFormat({ style: 'currency', currency: 'VND' }).format(num);
}

export const formatStar = (star) => {
    if (star === 5) {
        return <><BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill /></>
    } else {
        if (star === 4) {
            return <><BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill /></>
        } else {
            if (star === 3) {
                return <><BsFillStarFill /> <BsFillStarFill /> <BsFillStarFill /></>
            } else {
                if (star === 2) {
                    return <><BsFillStarFill /> <BsFillStarFill /></>
                } else {
                    return <BsFillStarFill />
                }
            }
        }
    }
}