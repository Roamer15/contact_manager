import PropTypes from 'prop-types';

export default function ContactForm({ formData, handleChange, handleFileChange, handleSubmit, errors, isEditing }) {
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input
                type="text"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                required
            />
            {errors?.name && <p className="form_error">{errors.name}</p>}

            <label htmlFor="telephone"></label>
            <input
                type="tel"
                name="telephone"
                placeholder='Telephone'
                value={formData.telephone}
                onChange={handleChange}
                required
            />
            {errors?.telephone && <p className="form_error">{errors.telephone}</p>}

            <label htmlFor="email"></label>
            <input
                type="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                required
            />
            {errors?.email && <p className="form_error">{errors.email}</p>}

            <label htmlFor="profilePic">Profile Picture</label>
            <input
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleFileChange}
            />
            {errors?.profilePic && <p className="form_error">{errors.profilePic}</p>}

            {formData.profilePic && (
                <img
                    src={typeof formData.profilePic === 'string' ? formData.profilePic : URL.createObjectURL(formData.profilePic)}
                    alt="Profile Preview"
                    style={{ width: '100px', height: '100px', marginTop: '10px' }}
                />
            )}

            <button type="submit">{isEditing ? 'Save Changes' : 'Add Contact'}</button>
        </form>
    );
}

ContactForm.propTypes = {
    formData: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleFileChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object,
    isEditing: PropTypes.bool
};
