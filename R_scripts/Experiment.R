library(ggplot2)
library(reshape)
library(e1071)

require(plyr)

# Install these packages if they are not already in your system
# install.packages("ggplot2")
# install.packages("reshape")
# install.packages("e1071")

# To get a dataframe with all the data of the webapges and their energy consumed on each run,
# Call the function get_energy_data(dir_path) where dir_path is the path to the directory with the name of the device in the output files.
# There is an example at the end of the file

#Return the row where the data for time is empty
get_empty_index<-function(data){
  
  for(x in 1:nrow(data["Time...ms."])){
    if(data[x,1]== ""){
      empty_index = x
    }
  }
  return(empty_index)
}

#TODO: Check on Windows
#Given the directory path with the name of the webpage, it returns the name of the webpage
get_webpage_name<-function(dir_path){
  dir_vector <- unlist(strsplit(dir_path,"/")) #splits the path with delimiter /
  last<-length(dir_vector)
  name<-substring(dir_vector[last],8) #Omits the httpwww part of the name
  return(name)
}

#TODO: Check on windows
#Given the directory with the name of the webpage, returns the directory with the csv files for that webpage
get_csv_path<-function(dir){
  full_dir<-paste0(dir,"/comandroidchrome/trepn/")
  return(full_dir)
}

#Given a file path, calculates the energy_consumption and returns a data frame with the name of the webpage and the energy consumption
get_data_from_file <- function(webpage,file_path){
  data <- read.csv(file=file_path,skip=2, header=TRUE,sep=",") #Skipping first lines of csv but reading until the end
  rows<-get_empty_index(data)
  rows<-rows-1 #Number of rows until we have time data
  data <- read.csv(file=file_path,skip=2,nrows = rows, header=TRUE,sep=",") #Reading until time data finishes
  duration = data["Time...ms."][rows,]/1000 #Duration in seconds
  power_consumption = sum(data["Battery.Power...uW...Delta."],na.rm=TRUE)/1000000 #Sum up all the power consumption profiled in Watts.
  energy_consumption = power_consumption*duration #Energy consumption in Jules
  
  #x <- data.frame("Webpage"=character(),"Energy_consumption"=double(),stringsAsFactors = FALSE)
  x <- data.frame("Webpage"=character(),"Energy_consumption"=double(),stringsAsFactors = TRUE)
  x <- rbind(x,data.frame("Webpage"=webpage,"Energy_consumption"=energy_consumption))
  
  return(x)
}

#Given a directory path, it reads all the files and returns a data frame with the energy consumption of those files
get_data_from_dir<-function(webpage,dir_path){
  files<-list.files(path=dir_path, recursive = FALSE)
  files
  #x <- data.frame("Webpage"=character(),"Energy_consumption"=double(),stringsAsFactors = FALSE)
  x <- data.frame("Webpage"=character(),"Energy_consumption"=double(),stringsAsFactors = TRUE)
  for(file in files){
    file_path<-paste0(dir_path,file)
    x<- rbind(x,get_data_from_file(webpage,file_path)) #Adds new rows to data frame
  }
  return(x)
  
}

#Given the path of the folder that contains the directories of all the webpages of the experiment it returns a data frame with the information of all the experiments
get_energy_data<-function(dir_path){
  dirs <- list.dirs(path=dir_path,recursive = FALSE)
  #x <- data.frame("Webpage"=character(),"Energy_consumption"=double(),stringsAsFactors = FALSE)
  x <- data.frame("Webpage"=character(),"Energy_consumption"=double(),stringsAsFactors = TRUE)
  for(dir in dirs){
    webpage<-get_webpage_name(dir)
    csv_path <- get_csv_path(dir)
    x <- rbind(x,get_data_from_dir(webpage,csv_path))
  }
  return(x)
}

#Given a dataframe with the webpages and their energy consumption on each iteration, returns a new data frame with the webpages and the mean of their energy consumption
get_mean_data<-function(data){
  mean_data <- data.frame("Webpage"=character(),"Mean_energy_consumption"=double(),stringsAsFactors = TRUE)
  #mean_data <- data.frame("Webpage"=character(),"Energy_consumption"=double(),stringsAsFactors = FALSE)
  for (webpage in levels(data$Webpage)) {
    webpage_data <- data[which(data$Webpage == webpage),]
    webpage_mean <- mean(webpage_data$Energy_consumption)
    mean_data <- rbind(mean_data,data.frame("Webpage"=webpage,"Mean_energy_consumption"=webpage_mean))
  }
  return(mean_data)
}

#Creates a dataframe with the webpages and the performance caterogry based on its energy consumption. 
#The categories are obtained with python script get_categories.py and they are added manually.
get_performance_data<-function(){
  performance_data <- data.frame("Webpage"=character(),"Performance"=character(),stringsAsFactors = TRUE)
  #performance_data <- data.frame("Webpage"=character(),"Performance"=character(),stringsAsFactors = FALSE)
  
  performance_data <- rbind(performance_data,data.frame("Webpage"="yandexru","Performance"="Good"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="xnxxcom","Performance"="Good"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="popadsnet","Performance"="Good"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="microsoftcom","Performance"="Good"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="xvideoscom","Performance"="Good"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="youtubecom","Performance"="Good"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="askcom","Performance"="Good"))
  
  performance_data <- rbind(performance_data,data.frame("Webpage"="paypalcom","Performance"="Average"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="instagramcom","Performance"="Average"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="tianyacn","Performance"="Average"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="twittercom","Performance"="Average"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="applecom","Performance"="Average"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="quoracom","Performance"="Average"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="whatsappcom","Performance"="Average"))
  
  performance_data <- rbind(performance_data,data.frame("Webpage"="coccoccom","Performance"="Poor"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="theguardiancom","Performance"="Poor"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="ettodaynet","Performance"="Poor"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="hao123com","Performance"="Poor"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="cnncom","Performance"="Poor"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="amazonawscom","Performance"="Poor"))
  performance_data <- rbind(performance_data,data.frame("Webpage"="chinacom","Performance"="Poor"))
  
  return(performance_data)
}

get_merged_data<-function(data){
  mean_data <- get_mean_data(data)
  performance_data <- get_performance_data()
  merged_data <- merge(mean_data,performance_data,by = "Webpage")
  
  return(merged_data)
}
##############################################


# Must update the directory to your own folder.  Pay special attention to your system's
#   representation of directories. For windows, use escape sequences for slashes
data<-get_energy_data(".\\Data\\nx9")
data


View(data)

# Visualize the data using Histograms, qqnorm and qqplot
qplot(data$Energy_consumption, geom="histogram", main="Histogram for Energy Values")
p <-ggplot(data.frame(y = data$Energy_consumption), aes(sample = y))
  p + stat_qq() + stat_qq_line(col="red", lty=2) + ylab("Energy Consumption Sample Quantile") + 
  xlab("Normal Theoretical Quantile") + ggtitle("Q-Q Plot: Energy Consumption")

# Test the data for normality -- Fail
shapiro.test(data$Energy_consumption)
# Test for skewness
skewness(data$Energy_consumption)

# Manipulating the data to check if skewness can be fixxed
energy_squared <-data$Energy_consumption ^ 2
energy_natural_log <- log(data$Energy_consumption)        # performs natural log
energy_reciprocal <- 1/ data$Energy_consumption

## Visualize the square of the data -- No major improvement
qplot(energy_reciprocal, geom="histogram")
ggplot(data.frame(y = energy_reciprocal), aes(sample = y)) +
    stat_qq() + stat_qq_line(col="red", lty=2)+ ylab("Energy Consumption Sample Quantile") + 
  xlab("Normal Theoretical Quantile") + ggtitle("Q-Q Plot: Reciprocal of the Energy Consumption Values")

## Visualize the Reciprocal of the data -- No major improvement
qplot(energy_squared, geom="histogram")
ggplot(data.frame(y = energy_squared), aes(sample = y)) +
  stat_qq() + stat_qq_line(col="red", lty=2)+ ylab("Energy Consumption Sample Quantile") + 
  xlab("Normal Theoretical Quantile") + ggtitle("Q-Q Plot: Square of the Energy Consumption Values")



## Visualize the log of the data -- Promising
qplot(energy_natural_log, geom="histogram")
ggplot(data.frame(y = energy_log), aes(sample = y)) +
  stat_qq() + stat_qq_line(col="red", lty=2)+ ylab("Energy Consumption Sample Quantile") + 
  xlab("Normal Theoretical Quantile") + ggtitle("Q-Q Plot: Log of the Energy Consumption Values")

# Test the data for normality of the log -- Fail
shapiro.test(energy_natural_log)


# Test for skewness -- Substantially lower but still skewed
skewness(energy_natural_log)

# We conclude that even with data manipulation, the energy consumption is not normal.
#       We perform kruskal wallis (non-parametric test)
Performance_data = get_performance_data()
energy_consumption_values = data
energy_with_performance = join(Performance_data, energy_consumption_values, by="Webpage", type="inner")

rank_values <- data.frame("Performance"=character(), "Rank" = numeric(), stringsAsFactors = TRUE)
rank_values <- rbind(rank_values,data.frame("Performance"="Good","Rank"=1))
rank_values <- rbind(rank_values,data.frame("Performance"="Average","Rank"=2))
rank_values <- rbind(rank_values,data.frame("Performance"="Poor","Rank"=3))

energies_with_ranks = join(energy_with_performance, rank_values, by="Performance", type="inner")

# Make an analysis of variance for Energy consumption values with performance as a 
#   factor
kruskal.test(energy_with_performance$Energy_consumption, energy_with_performance$Performance)

# Make an analysis of Correlion which is non-parametric
cor.test(energies_with_ranks$Rank,energies_with_ranks$Energy_consumption, method="spearman")
cor.test(energies_with_ranks$Energy_consumption,energies_with_ranks$Rank, method="spearman")



# Tes
shapiro.test(data[which(data$Webpage == "amazonawscom"),]$Energy_consumption)[[2]]

par(mfrow=c(3,4));
#Generate a QQplot and histogram of each webpage with its energy consumption
for(webpage in levels(data$Webpage)){
  webpage_data <- data[which(data$Webpage == webpage),]
  qqnorm(webpage_data$Energy_consumption, main = webpage, ylab = "Energy Consumption")
  qqline(webpage_data$Energy_consumption)
  hist(webpage_data$Energy_consumption, main = webpage, xlab = "Energy Consumption")
  
  p_value <- shapiro.test(webpage_data$Energy_consumption)[[2]]
  cat(webpage,p_value)
  print("")
}

#mean_data <- get_mean_data(data)
#performance_data <- get_performance_data()

merged_data <- get_merged_data(data)
merged_data


#Checking normality of the data on each category
par(mfrow=c(3,3));
for(performance in levels(merged_data$Performance)){
  performance_data <- merged_data[which(merged_data$Performance == performance),]
  
  qqnorm(performance_data$Mean_energy_consumption, main = performance, ylab = "Mean energy consumption")
  qqline(performance_data$Mean_energy_consumption)
  hist(performance_data$Mean_energy_consumption, main = performance, xlab = "Mean energy consumption")
  boxplot(performance_data$Mean_energy_consumption,)
  
  p_value <- shapiro.test(performance_data$Mean_energy_consumption)[[2]]
  cat(performance,p_value)
  print("")
}


#!!Probably missing some randomization before doing anova

energy_aov <- lm(Mean_energy_consumption~Performance, data = merged_data)
anova(energy_aov)

summary(energy_aov)
confint(energy_aov)