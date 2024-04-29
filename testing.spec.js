import { expect } from 'chai'
import repeatString from './repeatedString.js'

describe('Fitur menghitung huruf a', function() {
    describe('Positif', function() {
        it('input 10 dan aac, hasilnya bertipe number', function() {
            const hasil = repeatString('aac', 10)
            expect(hasil).to.be.a('number')
        })

        it('input a dan 1000000000000, hasilnya 1000000000000', function() {
            const hasil = repeatString('a', 1000000000000)
            expect(hasil).to.equal(1000000000000)

        })

        it('input aba dan 10, hasilnya 7', function() {
            const hasil = repeatString('aba', 10)
            expect(hasil).to.equal(7)

        })

        it('input aadcdaccacabdaabadadaabacdcbcacabbbadbdadacbdadaccbbadbdcadbdcacacbcacddbcbbbaaccbaddcabaacbcaabbaaa dan 942885108885, hasilnya 330009788107', function() {
            const hasil = repeatString('aadcdaccacabdaabadadaabacdcbcacabbbadbdadacbdadaccbbadbdcadbdcacacbcacddbcbbbaaccbaddcabaacbcaabbaaa', 942885108885)
            expect(hasil).to.equal(330009788107)

        })

        it('input d dan 590826798023, hasilnya 0', function() {
            const hasil = repeatString('d', 590826798023)
            expect(hasil).to.equal(0)

        })
    })

    describe('Negatif', function() {
        it('input aac dan 10, hasilnya TypeError', function() {
            const hasil = repeatString(10, 'aac')
            expect(hasil).to.throw(TypeError)
        })

        it('input aac dan aab, hasilnya AssertionError', function() {
            const hasil = repeatString('aac', 'aab')
            expect(hasil).to.throw(AssertionError)
        })

        it('input 10 dan 100, hasilnya TypeError', function() {
            const hasil = repeatString(10, 100)
            expect(hasil).to.throw(TypeError)
        })

        it('input string 10 dan string 100, hasilnya AssertionError', function() {
            const hasil = repeatString('10', '100')
            expect(hasil).to.throw(AssertionError)
        })

        it('input kosong, hasilnya TypeError', function() {
            const hasil = repeatString()
            expect(hasil).to.throw(TypeError)
        })
    })
})