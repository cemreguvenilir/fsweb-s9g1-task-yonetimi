import React from "react";
import { useForm } from "react-hook-form";

export default function TaskHookForm(props) {
  const { kisiler } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form className="taskForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-line">
          <label className="input-label" htmlFor="title">
            Başlık
          </label>
          <input
            className="input-text"
            id="title"
            name="title"
            {...register("title", {
              required: "Task başlığı yazmalısınız",
              minLength: {
                value: 3,
                message: "Task başlığı en az 3 karakter olmalı",
              },
            })}
            type="text"
            //onChange={handleOthersChange}
          />
          {errors.title && (
            <p className="input-error">{errors.title.message}</p>
          )}
        </div>

        <div className="form-line">
          <label className="input-label" htmlFor="description">
            Açıklama
          </label>
          <textarea
            className="input-textarea"
            rows="3"
            id="description"
            name="description"
            {...register("description", {
              required: "Task açıklaması yazmalısınız",
              minLength: {
                value: 10,
                message: "Task açıklaması en az 10 karakter olmalı",
              },
            })}
            // onChange={handleOthersChange}
          ></textarea>
          {errors.description && (
            <p className="input-error">{errors.description.message}</p>
          )}
        </div>

        <div className="form-line">
          <label className="input-label">İnsanlar</label>
          <div>
            {kisiler.map((p) => (
              <label className="input-checkbox" key={p}>
                <input
                  type="checkbox"
                  name="people"
                  value={p}
                  {...register("people", {
                    required: "Lütfen en az bir kişi seçin",
                    maxLength: {
                      value: 3,
                      message: "En fazla 3 kişi seçebilirsiniz",
                    },
                  })}
                  //onChange={handleCheckboxChange}
                />
                {p}
              </label>
            ))}
          </div>
          {errors.people && (
            <p className="input-error">{errors.people.message}</p>
          )}
        </div>

        <div className="form-line">
          <button className="submit-button" type="submit" disabled={!isValid}>
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}
