 # Image Encryption using RSA
 * The RSA is an cryptographic algorithm which is used to encrypt and decrypt the data. Here we are implementing RSA(Asymmetric Key Cryptography) Algorithm on an image to encrypt and decrypt using two keys, Private key and Public key.
 
## What Is Asymmetric Encryption?
* In Asymmetric Encryption algorithms, you use two different keys, one for encryption and the other for decryption. The key used for encryption is the public key, and the key used for decryption is the private key. But, of course, both the keys must belong to the receiver.

![image](https://user-images.githubusercontent.com/59358031/158393154-4e42857f-f5ce-4b10-92d5-6b55be8e336d.png)

## RSA in Data Encryption
* When using RSA for encryption and decryption of general data, it reverses the key set usage. Unlike signature verification, it uses the receiver’s public key to encrypt the data, and it uses the receiver’s private key in decrypting the data. Thus, there is no need to exchange any keys in this scenario.

* There are two broad components when it comes to RSA cryptography, they are: 

* Key Generation: Generating the keys to be used for encrypting and decrypting the data to be exchanged.
* Encryption/Decryption Function: The steps that need to be run when scrambling and recovering the data.

## Steps in RSA Algorithm

* Key Generation : 
You need to generate public and private keys before running the functions to generate your ciphertext and plaintext. They use certain variables and parameters, all of which are explained below:


<ol>
  <li>Choose two large prime numbers (p and q)</li>
  <li>Calculate n = p*q and z = (p-1)(q-1)</li>
  <li>Choose a number e where 1 < e < z</li>
  <li>You can bundle private key pair as (n,d)</li>
 <li>You can bundle public key pair as (n,e)</li>
</ol>


* Encryption/Decryption Function : 
Once you generate the keys, you pass the parameters to the functions that calculate your ciphertext and plaintext using the respective key.
If the plaintext is m, ciphertext = me mod n.
If the ciphertext is c, plaintext = cd mod n

## Result
<img src="https://user-images.githubusercontent.com/59358031/145890432-b921992c-8367-4184-8ae4-20dbea51b7f5.png" width=80% height=80%>

## Conclusion


* The RSA algorithm is widely used and very secure. There are no known consistently effective attacks on the system with current technology. The necessity of keeping d and the prime numbers used to construct n (usually denoted p and q) secret are the greatest risk to security, which is usually a human and social problem, i.e. one might accidentally reveal them or be tricked into doing so.
The security of RSA encryption is derived from the near impossibility of prime factorization of large numbers.

* This algorithm has also introduced concepts useful across cryptography and number theory such as Euler’s function, Euler’s theorem and the concept of greatest common divisors.


## References
1. [Generate Large Prime Numbers for RSA](https://www.geeksforgeeks.org/how-to-generate-large-prime-numbers-for-rsa-algorithm/)
2. [RSA algorithm](https://www.simplilearn.com/tutorials/cryptography-tutorial/rsa-algorithm)
3. [RSA Algorithm Cryptography](https://www.geeksforgeeks.org/rsa-algorithm-cryptography/?ref=rp)
4. [Digital Image Encryption Based on RSA Algorithm](https://www.researchgate.net/publication/307545291_Digital_Image_Encryption_Based_on_RSA_Algorithm)
5. [RSA and Extended Euclidean Algorithm](https://math.stackexchange.com/questions/1226742/rsa-and-extended-euclidian-algorithm)


