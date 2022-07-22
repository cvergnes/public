# Practical Deep Learning

## Deep Learning for Coders with fastai and PyTorch: AI Applications Without a PhD 

### Intro
For using a Jupyter Server, use Paperspace Gradient.

Deep learning is usefulf for : 
- NLP : answer questions, speech recognition, summarize documents
- computer vision : face recognition, reading traffice signs, ...
- medecine : finding anomaly in radiology, ...
- biology : protein folding
- image genration : colorize images, ...
- recommendation systems : product recommendation, web search
- games : chess, go
- robotics; handling objects
- Financial and logistical forecasting, text to speec, etc..


#### History of neural networks
In 1943 Warren McCulloch, a neurophysiologist, and Walter Pitts, a logician, teamed up to develop a mathematical model of an artificial neuron. McCulloch and Pitts realized that a simplified model of a real neuron could be represented using simple addition and thresholding  
Rosenblatt further developed the artificial neuron to give it the ability to learn. Even more importantly, he worked on building the first device that actually used these principles, the Mark I Perceptron  
An MIT professor named Marvin Minsky rote a book called Perceptrons (MIT Press), about Rosenblatt's invention. They showed that a single layer of these devices was unable to learn some simple but critical mathematical functions (such as XOR). In the same book, they also showed that using multiple layers of the devices would allow these limitations to be addressed. Unfortunately, only the first of these insights was widely recognized. As a result, the global academic community nearly entirely gave up on neural networks for the next two decades.  

Perhaps the most pivotal work in neural networks in the last 50 years was the multi-volume Parallel Distributed Processing (PDP) by David Rumelhart, James McClellan, and the PDP Research Group, released in 1986  

Although researchers showed 30 years ago that to get practical good performance you need to use even more layers of neurons, it is only in the last decade that this principle has been more widely appreciated and applied.

#### The software
Fastai lib on top of PyTorch.  

AGI : Artificial General Intelligence  
REPL : Read, Eval, Print & Loop 
SGD : Stochastic Gradient Descent  

A classification model is one which attempts to predict a class, or category. That is, it's predicting from a number of discrete possibilities, such as "dog" or "cat." A regression model is one which attempts to predict one or more numeric quantities, such as a temperature or a location.
Creating a model that can recognize the content of every individual pixel in an image is called segmentation

Validation Set: When you train a model, you must always have both a training set and a validation set, and must measure the accuracy of your model only on the validation set

Transfer learning: Using a pretrained model for a task different to what it was originally trained for.

A good fit for a model is when model has a low error rate on datas on which he wasn't trained. 

Convolutional neural network; a type of neural network that works particularly well for computer vision tasks

 Tabular: Data that is in the form of a table, such as from a spreadsheet, database, or CSV file. A tabular model is a model that tries to predict one column of a table based on information in other columns of the table.

```
import graphviz
def gv(s): return graphviz.Source('digraph G{ rankdir="LR"' + s + '; }')
````

fine_tune is for transfer learning


