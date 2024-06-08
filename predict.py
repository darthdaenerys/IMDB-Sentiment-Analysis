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

tf.keras.utils.get_custom_objects()['custom_standardize'] = custom_standardize
end2end_model=load_model('../end2end_model')

def get_sentiment(review):
    preds=end2end_model(np.array([review]))
    if preds[0]>.5:
        print(f'Positive, {preds[0].numpy()[0]*100:.2f}',flush=True,end='')
    else:
        print(f'Negative, {(1-preds[0]).numpy()[0]*100:.2f}',flush=True,end='')

while True:
    line = input()
    get_sentiment(line)