import React, { useState } from 'react'
import {faqData} from "./Data"
import FAQ from './FAQ'
import Style from './faqs.module.css'


const FAQS = () => {
    const [faqs,setFaqs]=useState(faqData)
  return <main className={Style.container}>
    <section className={Style.faqs}>
        <h1>FAQS</h1>
        {/* mapping the datas */}
        {faqs.map((faq)=> 
           <FAQ  key={faq.id} {...faq}/>) }
    </section>
  </main>
  
}

export default FAQS

