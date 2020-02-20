using System.Threading.Tasks;
using CI.SER.DTOs;
using CI.SER.Interfaces;
using System.Net.Mail;
using System.Net;

namespace CI.SER
{
    public class MailJet : IEmail
    {
        public async Task Send(string emailAddress, string body, EmailOptionsDTO options)
        {
            var client = new SmtpClient();
            client.Host = options.Host;
            client.Credentials = new NetworkCredential(options.ApiKey, options.ApiKeySecret);
            client.Port = options.Port;

            var message = new MailMessage(options.SenderEmail, emailAddress);
            message.Body = body;
            message.IsBodyHtml = true;

            await client.SendMailAsync(message);
        }
    }
}