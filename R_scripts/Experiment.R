# To get a dataframe with all the data of the webapges and their energy consumed on each run,
# Call the function get_all_data(dir_path) where dir_path is the path to the directory with the name of the device in the output files.
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
get_all_data<-function(dir_path){
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

##############################################
data<-get_all_data("/home/mglmx/Documents/GL/repo/GreenLab-Over9000/R_scripts/Data/nx9")
data

par(mfrow=c(3,4));
for(webpage in levels(data$Webpage)){
  webpage_data <- data[which(data$Webpage == webpage),]
  qqnorm(webpage_data$Energy_consumption, main = webpage, ylab = "Energy Consumption")
  qqline(webpage_data$Energy_consumption)
  hist(webpage_data$Energy_consumption, main = webpage, xlab = "Energy Consumption")
}
