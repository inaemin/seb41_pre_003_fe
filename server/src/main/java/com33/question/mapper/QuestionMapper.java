package com33.question.mapper;

import com33.member.entity.Member;
import com33.member.service.MemberService;
import com33.question.dto.QuestionDto;
import com33.question.entity.Question;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;


import java.time.LocalDateTime;
import java.util.List;


@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {

    default QuestionDto.Response questionToQuestionResponse(Question question) {
        QuestionDto.Response response = new QuestionDto.Response();

        response.setQuestionId(question.getQuestionId());
        response.setMemberId(question.getMember().getMemberId());
        response.setTitle(question.getTitle());
        response.setCreate_date(question.getCreate_date());
        response.setContent(question.getContent());
        response.setViewCount(question.getViewCount());
        response.setVoteCount(question.getVoteCount());

        return response;
    }

    default Question questionPatchToQuestion(QuestionDto.Patch requestBody) {
        Question question = new Question();

        question.setQuestionId(requestBody.getQuestionId());
        question.setContent(requestBody.getContent());

        return question;
    }

    default Question questionPostToQuestion(MemberService memberService, QuestionDto.Post questionPostDto) {
        if (questionPostDto == null) {
            return null;
        }

        Question question = new Question();
        Member member = new Member();
        member.setMemberId(questionPostDto.getMemberId());

        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());
        question.setMember(memberService.findMember(member.getMemberId()));
        question.setCreate_date(LocalDateTime.now());

        return question;
    }

    List<QuestionDto.Response> questionsToQuestionResponses(List<Question> questions);

    default Question questionVoteToQuestion(QuestionDto.Vote questionVoteDto) {
        if (questionVoteDto == null) {
            return null;
        }

        Question question = new Question();
        question.setQuestionId(questionVoteDto.getQuestionId());

        return question;
    }

}
