import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>аааааа</Head>
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
	  

        <h2 className={utilStyles.headingLg}>Список проектов:</h2>
		

<details>
    <summary>Самостоятельная работа по JS</summary>
 
	<p>JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. </p>
	<img
                  src="/images/4.jpg"
                  
                />
				<br/>
				<img
                  src="/images/5.jpg"
                  
                />
<br/>	
</details>
<br/>
<details>
    <summary>Создание чат-бота для Telegram</summary>
    <p>Telegram – это мессенджер для обмена данными между пользователями. Он позволяет вести приватную или групповую беседу, подписываться на каналы и использовать/создавать ботов.</p>
<br/>
Что такое боты для чата в телеграм? 
<br/>Данные приложения – это специальный алгоритм в telegram, который используется для ведения диалога в автоматическом режиме с реальным участником канала. Работают такие чат для ботов в телеграм с использованием специальной системы аналитики входящих смс и подбора нужного варианта ответа из определенной базы вариантов.
<br/><br/> В качестве чат-бота мы выбрали кадендарь мероприятий.
Календарь мероприятий — это электронный календарь, где фиксируются даты, на которые намечены какие-либо внутривузовские мероприятия.
<br/> На следующем скриншоте показан наш чат в действии
</details>
<br/>

<details open>
    <summary>Создание прототипа сайта</summary>
    <p>Прототип — это схематическое изображение отдельной страницы или сайта в целом.</p>

Прототипирование — это один из первых шагов в разработке и первый этап визуализации будущего проекта.
Чтобы создать прототип сайта, используют специальные программы и онлайн-сервисы, причем популярность последних постоянно растет из-за простоты и удобства.

<br/> В качестве темы для сайтов мы выбрали клининговую компанию и юридическую консультацию.
Ниже представлены прототипы наших сайтов:

<img
                  src="/images/3.jpg"
                  
                />
</details>
<br/>






	   <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
  <Link href={`/posts/${id}`}>
    <a>{title}</a>
  </Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
</li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}





export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}



