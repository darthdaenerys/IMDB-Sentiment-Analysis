from tensorflow.keras.models import load_model
import numpy as np
import tensorflow as tf
import string
import re
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

stemmer=PorterStemmer()

def custom_standardize(input_data):
    text=tf.strings.lower(input_data)
    text=tf.strings.regex_replace(text,"<br />"," ")
    text=tf.strings.regex_replace(text,f"[{re.escape(string.punctuation)}]","")
    for word in stopwords.words('english'):
        text=tf.strings.regex_replace(text,f' {word} ',"")
    for word in stopwords.words('english'):
        text=tf.strings.regex_replace(text,f' {word} ',f" {stemmer.stem(word)} ")
    return text

def get_sentiment(review):
    preds=end2end_model(np.array([review]))

while True:
    line = input()
    get_sentiment(line)