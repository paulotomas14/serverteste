"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main(){
  console.log("Hello world");
	ListenForData();
};

private void ListenForData()
{
    try
    {
        socketConnection = new TcpClient("https://keystrokestestesecenas.netlify.com/", 1337);
        Byte[] bytes = new Byte[1024];
        while (true)
        {

            using (StreamReader sr = new StreamReader(socketConnection.GetStream()))
            {
                var string line;
                // Read and display lines from the file until the end of
                // the file is reached.
                while ((line = sr.ReadLine()) != null)
                {
                    console.log(line);
                }
            }
        }
    }
    catch (SocketException socketException)
    {
        Debug.Log("Socket exception: " + socketException);
    }
}
