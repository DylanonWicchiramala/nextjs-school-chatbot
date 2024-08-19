// import React, { useEffect, useState } from 'react';
// import { LangChain, RetrievalAugmentedGeneration } from 'langchain';
// import { TextLoader, WebBaseLoader } from 'langchain_community';
// import { ChatOpenAI, OpenAIEmbeddings } from 'langchain_openai';
// import { Chroma } from 'langchain_chroma';
// import { RecursiveCharacterTextSplitter } from 'langchain_text_splitters';
// import { ChatPromptTemplate } from 'langchain_core';
// import { StrOutputParser } from 'langchain_core';
// import { RunnablePassthrough } from 'langchain_core';
// import dotenv from 'dotenv';

import { TextLoader } from "langchain/document_loaders/fs/text";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createStreamableValue } from "ai/rsc";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { JsonOutputKeyToolsParser } from "@langchain/core/output_parsers/openai_tools";

// Load environment variables from .env file
dotenv.config();

// Create a function to load documents
async function getDocument() {
    const loader = new TextLoader(".documents/data_source.txt");
    const docs = await loader.load();
    return docs;
}

// Format documents
function formatDocs(docs: any[]) {
    return docs.map(doc => doc.page_content).join("\n\n");
}

const docs = getDocument();