
export const createArticle = (title, content, section, imageUrl, user) =>{
        let article = {
            title: title,
            content: content,
            section: section,
            imageUrl: imageUrl,
            author: user.name,
            dateCreated: Date.now(),
        }

        return fetch('https://ad-app-react.firebaseio.com/articles.json',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(article)
        })
};