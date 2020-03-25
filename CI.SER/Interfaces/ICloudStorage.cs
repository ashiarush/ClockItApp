using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace CI.SER.Interfaces
{
    public interface ICloudStorage
    {

        Task UploadAsync(IFormFile file);

        Task DeleteImage(string name);


    }
}