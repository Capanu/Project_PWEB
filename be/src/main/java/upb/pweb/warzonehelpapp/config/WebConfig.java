package upb.pweb.warzonehelpapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import upb.pweb.warzonehelpapp.config.filter.AuthorizeRoleRequestInterceptor;

@Configuration
@EnableWebMvc
@EnableAsync
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("*/**");
    }

    @Bean
    public AuthorizeRoleRequestInterceptor getAuthorizeRoleRequestInterceptor(){
        return new AuthorizeRoleRequestInterceptor();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(getAuthorizeRoleRequestInterceptor());
    }
}
