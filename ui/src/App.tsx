import { useState } from 'react'
import './App.css'

type Persona = 'experienced' | 'fresh-grad' | null

interface AboutMePageProps {
  workspaceName: string
  onWorkspaceNameChange: (name: string) => void
}

interface UploadedResume {
  fileName: string
  size: number
  type: string
  objectUrl: string
}

interface ResumePageProps {
  uploadedResume: UploadedResume | null
  onResumeUpload: (resume: UploadedResume) => void
}

interface Application {
  id: number
  companyName: string
  roleTitle: string
  jobDescription?: string
  createdAt: string
}

interface AddApplicationPageProps {
  onAddApplication: (application: Application) => void
  onNavigateToAll: () => void
}

interface AllApplicationsPageProps {
  applications: Application[]
}

function AboutMePage({ workspaceName, onWorkspaceNameChange }: AboutMePageProps) {
  // Initialize fullName with workspace name if it's not the default
  const [fullName, setFullName] = useState(workspaceName !== 'My workspace' ? workspaceName : '')
  const [email, setEmail] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [education, setEducation] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [profileSaved, setProfileSaved] = useState(workspaceName !== 'My workspace')

  const getInitial = () => {
    return workspaceName.charAt(0).toUpperCase()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (fullName.trim()) {
      onWorkspaceNameChange(fullName.trim())
      setProfileSaved(true)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  return (
    <div className="min-h-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Banner Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center mb-4">
            <span className="text-3xl font-semibold text-slate-600">{getInitial()}</span>
          </div>
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">{workspaceName}</h1>
          <p className="text-slate-600 text-sm">Click to add your details...</p>
        </div>

        {/* Main Content - 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Main Card (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Setup Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">
                    Finish setting up your MockMind profile
                  </h2>
                  <p className="text-sm text-slate-600">
                    {profileSaved ? '1' : '0'} of 1 main step completed
                  </p>
                </div>
                <button className="text-slate-400 hover:text-slate-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Setup Tiles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="rounded-lg border border-slate-200 p-4 hover:border-slate-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 mb-1">Add basic details</h3>
                      <p className="text-xs text-slate-600">Name + email so MockMind can personalize the workspace.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 p-4 hover:border-slate-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 mb-1">Contact info</h3>
                      <p className="text-xs text-slate-600">A phone/WhatsApp number for future reminders.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 p-4 hover:border-slate-300 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-900 mb-1">Education snapshot</h3>
                      <p className="text-xs text-slate-600">What you're studying or aiming for.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-medium text-slate-700 mb-1.5">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactNumber" className="block text-xs font-medium text-slate-700 mb-1.5">
                      Contact number
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="education" className="block text-xs font-medium text-slate-700 mb-1.5">
                      Education
                    </label>
                    <input
                      type="text"
                      id="education"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      placeholder="MS Data Science, 2026"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md transition"
                    >
                      Save profile
                    </button>
                    {showSuccess && (
                      <p className="mt-2 text-xs text-green-600 text-center">
                        Profile saved. Workspace updated to your name.
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Info Cards (1/3 width) */}
          <div className="lg:col-span-1 space-y-6">
            {/* MockMind Tips Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">MockMind tips</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                This workspace is for practicing interviews, case studies, and self-reflection. All your answers stay private and secure.
              </p>
            </div>

            {/* Next Step Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">Next step</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                After saving your profile, create your first Mock Session to start preparing for interviews with AI-powered practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResumePage({ uploadedResume, onResumeUpload }: ResumePageProps) {
  const [mode, setMode] = useState<'upload' | 'review' | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [fileInputRef, setFileInputRef] = useState<HTMLInputElement | null>(null)
  const [pendingResume, setPendingResume] = useState<UploadedResume | null>(null)

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const objectUrl = URL.createObjectURL(file)
      const resume: UploadedResume = {
        fileName: file.name,
        size: file.size,
        type: file.type,
        objectUrl
      }
      setPendingResume(resume)
      setShowSuccess(false)
    }
  }

  const handleSaveResume = () => {
    if (!pendingResume) return
    onResumeUpload(pendingResume)
    setShowSuccess(true)
    setMode('review')
  }

  const handleUploadClick = () => {
    setMode('upload')
    fileInputRef?.click()
  }

  const handleReviewClick = () => {
    setMode('review')
  }

  return (
    <div className="min-h-full bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Capsule Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <button
            onClick={handleUploadClick}
            className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md transition"
          >
            Upload a resume
          </button>
          <button
            onClick={handleReviewClick}
            className="rounded-full border-2 border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Review resume
          </button>
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={setFileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          className="hidden"
        />

        {/* Upload Mode */}
        {mode === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Upload your resume
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Choose a PDF or Word document from your local system. Accepted formats: PDF, DOC, DOCX
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md transition"
                >
                  Choose File
                </button>
                <button
                  type="button"
                  onClick={handleSaveResume}
                  disabled={!pendingResume}
                  className={`rounded-lg px-6 py-2.5 text-sm font-semibold shadow-sm transition ${
                    pendingResume
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Save resume
                </button>
              </div>

              {pendingResume && (
                <div className="mt-6 text-left space-y-1 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Selected file:</span>
                    <span>{pendingResume.fileName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Size:</span>
                    <span>{formatFileSize(pendingResume.size)}</span>
                  </div>
                </div>
              )}

              {showSuccess && (
                <p className="mt-4 text-sm text-green-600">
                  Resume saved successfully.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Review Mode */}
        {mode === 'review' && (
          <div className="max-w-3xl mx-auto">
            {!uploadedResume ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
                <p className="text-slate-600">
                  No resume saved yet. Please upload and save your resume first.
                </p>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-6">Your resume</h3>
                
                {/* File Info */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="font-medium">File name:</span>
                    <span>{uploadedResume.fileName}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="font-medium">File size:</span>
                    <span>{formatFileSize(uploadedResume.size)}</span>
                  </div>
                </div>

                {/* PDF Preview */}
                {uploadedResume.type === 'application/pdf' && (
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <iframe
                      src={uploadedResume.objectUrl}
                      className="w-full h-[600px]"
                      title="Resume Preview"
                    />
                  </div>
                )}

                {/* Non-PDF files - show download option */}
                {uploadedResume.type !== 'application/pdf' && (
                  <div className="border border-slate-200 rounded-lg p-8 text-center">
                    <p className="text-slate-600 mb-4">
                      Preview not available for this file type. You can download it to view.
                    </p>
                    <a
                      href={uploadedResume.objectUrl}
                      download={uploadedResume.fileName}
                      className="inline-block rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md transition"
                    >
                      Download Resume
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Default state when no mode is selected */}
        {mode === null && (
          <div className="max-w-2xl mx-auto text-center py-12">
            <p className="text-slate-600">
              Click one of the buttons above to upload or review your resume.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function AddApplicationPage({ onAddApplication, onNavigateToAll }: AddApplicationPageProps) {
  const [companyName, setCompanyName] = useState('')
  const [roleTitle, setRoleTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<{ companyName?: string; roleTitle?: string; jobDescription?: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    const newErrors: { companyName?: string; roleTitle?: string; jobDescription?: string } = {}
    if (!companyName.trim()) {
      newErrors.companyName = 'Company name is required'
    }
    if (!roleTitle.trim()) {
      newErrors.roleTitle = 'Role title is required'
    }
    if (!jobDescription.trim()) {
      newErrors.jobDescription = 'Job description is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Create application
    const application: Application = {
      id: Date.now(),
      companyName: companyName.trim(),
      roleTitle: roleTitle.trim(),
      jobDescription: jobDescription.trim(),
      createdAt: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    }

    onAddApplication(application)
    setCompanyName('')
    setRoleTitle('')
    setJobDescription('')
    setErrors({})
    setShowSuccess(true)
    
    // Auto-navigate after 1.5 seconds
    setTimeout(() => {
      onNavigateToAll()
    }, 1500)
  }

  return (
    <div className="min-h-full bg-slate-50">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            Congratulations on your interview!
          </h2>
          <p className="text-slate-600 text-sm mb-8">
            Let's save a quick snapshot so MockMind can keep track.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-1.5">
                Which company invited you for an interview? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value)
                  if (errors.companyName) setErrors({ ...errors, companyName: undefined })
                }}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.companyName ? 'border-red-300' : 'border-slate-300'
                } focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm`}
                placeholder="e.g., Google, Microsoft, Amazon"
              />
              {errors.companyName && (
                <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>
              )}
            </div>

            <div>
              <label htmlFor="roleTitle" className="block text-sm font-medium text-slate-700 mb-1.5">
                What role is this interview for? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="roleTitle"
                value={roleTitle}
                onChange={(e) => {
                  setRoleTitle(e.target.value)
                  if (errors.roleTitle) setErrors({ ...errors, roleTitle: undefined })
                }}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.roleTitle ? 'border-red-300' : 'border-slate-300'
                } focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm`}
                placeholder="e.g., Software Engineer, Product Manager"
              />
              {errors.roleTitle && (
                <p className="mt-1 text-xs text-red-600">{errors.roleTitle}</p>
              )}
            </div>

            <div>
              <label htmlFor="jobDescription" className="block text-sm font-medium text-slate-700 mb-1.5">
                Job description (JD) <span className="text-red-500">*</span>
              </label>
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => {
                  setJobDescription(e.target.value)
                  if (errors.jobDescription) setErrors({ ...errors, jobDescription: undefined })
                }}
                rows={6}
                className={`w-full px-4 py-2.5 rounded-lg border ${
                  errors.jobDescription ? 'border-red-300' : 'border-slate-300'
                } focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm resize-y`}
                placeholder="Paste the full job description from the posting..."
              />
              {errors.jobDescription && (
                <p className="mt-1 text-xs text-red-600">{errors.jobDescription}</p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md transition"
              >
                Save application
              </button>
              {showSuccess && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-green-600 mb-2">
                    Application saved successfully!
                  </p>
                  <p className="text-xs text-slate-600">
                    Redirecting to All Applications...
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

interface ATSResumePageProps {
  applications: Application[]
  uploadedResume: UploadedResume | null
  workspaceName: string
}

function ATSResumePage({ applications, uploadedResume, workspaceName }: ATSResumePageProps) {
  const [selectedApplicationId, setSelectedApplicationId] = useState<number | null>(null)
  const [showJDPreview, setShowJDPreview] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [atsResume, setAtsResume] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const selectedApplication = applications.find(app => app.id === selectedApplicationId)

  const handleGenerate = async () => {
    if (!selectedApplication || !selectedApplication.jobDescription) {
      setError('Please select an application with a job description')
      return
    }

    setIsGenerating(true)
    setError(null)
    setAtsResume(null)

    try {
      // Extract base resume text if available (for now, we'll send empty string)
      // In the future, we could extract text from PDF using a library
      const baseResumeText = '' // TODO: Extract from uploadedResume if PDF

      const response = await fetch('http://localhost:3001/api/generate-ats-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobDescription: selectedApplication.jobDescription,
          baseResumeText: baseResumeText,
          profile: {
            name: workspaceName !== 'My workspace' ? workspaceName : undefined,
          }
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate ATS-friendly resume')
      }

      const data = await response.json()
      setAtsResume(data.atsResume)
    } catch (err) {
      setError('Could not generate ATS-friendly resume. Please try again in a moment.')
      console.error('Error generating ATS resume:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownload = () => {
    if (!atsResume) return

    const blob = new Blob([atsResume], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ats-resume-${selectedApplication?.companyName || 'resume'}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleReview = () => {
    // Scroll to the resume display area
    const resumeElement = document.getElementById('ats-resume-display')
    if (resumeElement) {
      resumeElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (applications.length === 0) {
    return (
      <div className="min-h-full bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              No applications found
            </h3>
            <p className="text-sm text-slate-600">
              Add an application first, including the job description, to generate an ATS-friendly resume.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-full bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            ATS friendly resume
          </h2>
          <p className="text-slate-600 text-sm">
            Tailor your resume to match a specific job description.
          </p>
        </div>

        {/* Application Selection */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 mb-6">
          <label htmlFor="applicationSelect" className="block text-sm font-medium text-slate-700 mb-2">
            Select an application
          </label>
          <select
            id="applicationSelect"
            value={selectedApplicationId || ''}
            onChange={(e) => {
              setSelectedApplicationId(e.target.value ? Number(e.target.value) : null)
              setAtsResume(null)
              setError(null)
            }}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
          >
            <option value="">Choose an application...</option>
            {applications.map((app) => (
              <option key={app.id} value={app.id}>
                {app.companyName} - {app.roleTitle}
              </option>
            ))}
          </select>

          {/* JD Preview */}
          {selectedApplication && selectedApplication.jobDescription && (
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setShowJDPreview(!showJDPreview)}
                className="text-sm text-pink-600 hover:text-pink-700 font-medium"
              >
                {showJDPreview ? 'Hide' : 'Show'} job description
              </button>
              {showJDPreview && (
                <div className="mt-2 p-4 bg-slate-50 rounded-lg border border-slate-200 max-h-60 overflow-y-auto">
                  <p className="text-xs text-slate-700 whitespace-pre-wrap">
                    {selectedApplication.jobDescription}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Generate Button */}
        {selectedApplication && (
          <div className="mb-6">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !selectedApplication.jobDescription}
              className={`w-full rounded-lg px-6 py-3 text-sm font-semibold shadow-sm transition ${
                isGenerating || !selectedApplication.jobDescription
                  ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white hover:shadow-md'
              }`}
            >
              {isGenerating ? 'Generating ATS-friendly resume...' : 'Generate ATS-friendly resume'}
            </button>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* ATS Resume Display */}
        {atsResume && (
          <div id="ats-resume-display" className="mb-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Your ATS-friendly resume</h3>
              <div className="bg-slate-50 rounded-lg p-6 max-h-[600px] overflow-y-auto">
                <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
                  {atsResume}
                </pre>
              </div>
            </div>

            {/* Download and Review Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
              <button
                onClick={handleDownload}
                className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md transition"
              >
                Download
              </button>
              <button
                onClick={handleReview}
                className="rounded-full border-2 border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Review
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function AllApplicationsPage({ applications }: AllApplicationsPageProps) {
  const [selectedApplicationId, setSelectedApplicationId] = useState<number | null>(null)

  const selectedApplication = applications.find(app => app.id === selectedApplicationId)

  if (applications.length === 0) {
    return (
      <div className="min-h-full bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              No applications added yet
            </h3>
            <p className="text-sm text-slate-600">
              Use 'Add Application' to log your first interview.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Show detailed view when an application is selected
  if (selectedApplication) {
    return (
      <div className="min-h-full bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Back button */}
          <button
            onClick={() => setSelectedApplicationId(null)}
            className="mb-6 flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all applications
          </button>

          {/* Application Details */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
                Application Details
              </h2>
              <p className="text-xs text-slate-500">
                Added on {selectedApplication.createdAt}
              </p>
            </div>

            <div className="space-y-6">
              {/* Company Name */}
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">
                  Company
                </label>
                <p className="text-lg font-semibold text-slate-900">
                  {selectedApplication.companyName}
                </p>
              </div>

              {/* Role Title */}
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">
                  Role
                </label>
                <p className="text-base text-slate-700">
                  {selectedApplication.roleTitle}
                </p>
              </div>

              {/* Job Description */}
              {selectedApplication.jobDescription && (
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">
                    Job Description
                  </label>
                  <div className="mt-2 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                      {selectedApplication.jobDescription}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Show list view
  return (
    <div className="min-h-full bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
            All Applications
          </h2>
          <p className="text-slate-600 text-sm">
            {applications.length} {applications.length === 1 ? 'application' : 'applications'} saved
          </p>
        </div>

        <div className="space-y-4">
          {applications.map((app) => (
            <button
              key={app.id}
              onClick={() => setSelectedApplicationId(app.id)}
              className="w-full text-left rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {app.companyName}
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">
                    {app.roleTitle}
                  </p>
                  <p className="text-xs text-slate-500">
                    Added on {app.createdAt}
                  </p>
                </div>
                <div className="flex items-center text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [selectedPersona, setSelectedPersona] = useState<Persona>(null)
  const [openSection, setOpenSection] = useState<'profile' | 'applications' | 'interview' | null>(null)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [workspaceName, setWorkspaceName] = useState<string>('My workspace')
  const [uploadedResume, setUploadedResume] = useState<UploadedResume | null>(null)
  const [applications, setApplications] = useState<Application[]>([])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {step === 1 ? (
        // STEP 1 — Welcome Screen
        <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center">
          <div className="w-full max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
            {/* Left column - Text */}
            <div className="flex flex-col items-start">
              {/* Label */}
              <p className="inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-500 shadow-sm mb-6">
                MockMind · interview prep copilot
              </p>

              {/* Heading - Two lines */}
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-semibold text-slate-900">
                  Welcome to
                </h1>
                <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-fuchsia-500">
                  MockMind
                </h1>
              </div>

              {/* Subtitle */}
              <p className="mt-8 text-xl md:text-2xl font-medium text-slate-700 max-w-xl leading-relaxed">
                Turn every interview into a prepared opportunity!!
              </p>

              {/* Body text */}
              <p className="mt-4 text-sm md:text-base text-slate-500 max-w-xl">
                AI-powered mock sessions tailored to your interview. Enter the company and role, and start preparing smarter.
              </p>

              {/* Next button */}
              <button
                onClick={() => setStep(2)}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/40 transition"
              >
                Next
              </button>
            </div>

            {/* Right column - Robot */}
            <div className="flex justify-center md:justify-end">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-white flex items-center justify-center shadow-2xl shadow-pink-500/20 border border-slate-200">
                <img 
                  src="/robot1.gif" 
                  alt="MockMind Robot"
                  className="w-40 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ) : step === 2 ? (
        // STEP 2 — Persona Selection Screen
        <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center">
          <div className="max-w-4xl mx-auto px-6 py-16 w-full">
            <div className="space-y-10">
              {/* Heading */}
              <div className="text-center space-y-3">
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
                  Who are you today?
                </h2>
                <p className="text-slate-600 text-sm md:text-base text-center max-w-2xl mx-auto">
                  Select the persona that best describes your current situation to get personalized interview preparation.
                </p>
              </div>

              {/* Cards Container */}
              <div className="grid gap-6 md:grid-cols-2 mt-10">
                {/* Card 1 - Experienced Candidate */}
                <button
                  onClick={() => {
                    setSelectedPersona('experienced');
                    setStep(3);
                  }}
                  className={`cursor-pointer rounded-2xl border p-6 md:p-8 flex flex-col gap-2 shadow-sm hover:shadow-lg transition-transform duration-150 hover:-translate-y-1 text-left ${
                    selectedPersona === 'experienced'
                      ? 'border-pink-500 shadow-pink-500/30 bg-white'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <h3 className={`text-2xl md:text-3xl font-semibold ${
                    selectedPersona === 'experienced' ? 'text-pink-500' : 'text-slate-900'
                  }`}>
                    Exp. Candidate
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    3+ years of experience, switching or leveling up.
                  </p>
                </button>

                {/* Card 2 - Fresh Grad */}
                <button
                  onClick={() => {
                    setSelectedPersona('fresh-grad');
                    setStep(3);
                  }}
                  className={`cursor-pointer rounded-2xl border p-6 md:p-8 flex flex-col gap-2 shadow-sm hover:shadow-lg transition-transform duration-150 hover:-translate-y-1 text-left ${
                    selectedPersona === 'fresh-grad'
                      ? 'border-pink-500 shadow-pink-500/30 bg-white'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <h3 className={`text-2xl md:text-3xl font-semibold ${
                    selectedPersona === 'fresh-grad' ? 'text-pink-500' : 'text-slate-900'
                  }`}>
                    Fresh Grad
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    Student or recent graduate preparing for internships or first full-time role.
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : step === 3 ? (
        // STEP 3 — Workspace Layout
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
          {/* TOP HEADER BAR */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="text-lg font-semibold text-slate-900">
              {workspaceName}
            </div>
            <div>
              <span className="rounded-full border border-slate-300 px-4 py-1 text-sm text-slate-700 bg-white">
                {selectedPersona === 'experienced' 
                  ? 'Mode: Exp. Candidate' 
                  : selectedPersona === 'fresh-grad' 
                  ? 'Mode: Fresh Grad' 
                  : 'Mode: Not set'}
              </span>
            </div>
          </div>

          {/* MAIN AREA */}
          <div className="flex flex-1 overflow-hidden">
            {/* LEFT SIDEBAR */}
            <div className="w-72 border-r border-slate-200 bg-white flex flex-col">
              {/* Logo region */}
              <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shadow-lg shadow-pink-500/20">
                  <img 
                    src="/robot.png" 
                    alt="MockMind icon" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="font-semibold text-slate-900">MockMind</span>
              </div>

              {/* Navigation Groups */}
              <nav className="px-4 py-2 space-y-2 text-sm flex-1">
                {/* Group 1: Profile */}
                <div>
                  <button
                    onClick={() => setOpenSection(openSection === 'profile' ? null : 'profile')}
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <span className="font-medium">Profile</span>
                    <span className={`transform transition-transform ${openSection === 'profile' ? 'rotate-90' : ''}`}>
                      &gt;
                    </span>
                  </button>
                  {openSection === 'profile' && (
                    <div className="pl-6 space-y-1 mt-1">
                      <button
                        onClick={() => setSelectedItem('profile-about')}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedItem === 'profile-about'
                            ? 'bg-pink-500 text-white'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        About Me
                      </button>
                      <button
                        onClick={() => setSelectedItem('profile-resume')}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedItem === 'profile-resume'
                            ? 'bg-pink-500 text-white'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        Resume
                      </button>
                    </div>
                  )}
                </div>

                {/* Group 2: Applications */}
                <div>
                  <button
                    onClick={() => setOpenSection(openSection === 'applications' ? null : 'applications')}
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <span className="font-medium">Applications</span>
                    <span className={`transform transition-transform ${openSection === 'applications' ? 'rotate-90' : ''}`}>
                      &gt;
                    </span>
                  </button>
                  {openSection === 'applications' && (
                    <div className="pl-6 space-y-1 mt-1">
                      <button
                        onClick={() => setSelectedItem('applications-all')}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedItem === 'applications-all'
                            ? 'bg-pink-500 text-white'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        All Applications
                      </button>
                      <button
                        onClick={() => setSelectedItem('applications-add')}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedItem === 'applications-add'
                            ? 'bg-pink-500 text-white'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        Add Application
                      </button>
                      <button
                        onClick={() => setSelectedItem('applications-ats')}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedItem === 'applications-ats'
                            ? 'bg-pink-500 text-white'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        ATS friendly Resume
                      </button>
                    </div>
                  )}
                </div>

                {/* Group 3: Interview Prep */}
                <div>
                  <button
                    onClick={() => setOpenSection(openSection === 'interview' ? null : 'interview')}
                    className="w-full text-left flex items-center justify-between px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <span className="font-medium">Interview Prep</span>
                    <span className={`transform transition-transform ${openSection === 'interview' ? 'rotate-90' : ''}`}>
                      &gt;
                    </span>
                  </button>
                  {openSection === 'interview' && (
                    <div className="pl-6 space-y-1 mt-1">
                      <button
                        onClick={() => setSelectedItem('interview-technical')}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedItem === 'interview-technical'
                            ? 'bg-pink-500 text-white'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        Technical
                      </button>
                      <button
                        onClick={() => setSelectedItem('interview-coding')}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedItem === 'interview-coding'
                            ? 'bg-pink-500 text-white'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        Coding
                      </button>
                      <button
                        onClick={() => setSelectedItem('interview-behavioural')}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedItem === 'interview-behavioural'
                            ? 'bg-pink-500 text-white'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        Behavioural
                      </button>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* RIGHT CONTENT AREA */}
            <div className="flex-1 overflow-y-auto bg-slate-50">
              {selectedItem === 'profile-about' ? (
                <AboutMePage 
                  workspaceName={workspaceName}
                  onWorkspaceNameChange={setWorkspaceName}
                />
              ) : selectedItem === 'profile-resume' ? (
                <ResumePage
                  uploadedResume={uploadedResume}
                  onResumeUpload={setUploadedResume}
                />
              ) : selectedItem === 'applications-add' ? (
                <AddApplicationPage
                  onAddApplication={(app) => setApplications([...applications, app])}
                  onNavigateToAll={() => {
                    setOpenSection('applications')
                    setSelectedItem('applications-all')
                  }}
                />
              ) : selectedItem === 'applications-all' ? (
                <AllApplicationsPage applications={applications} />
              ) : selectedItem === 'applications-ats' ? (
                <ATSResumePage
                  applications={applications}
                  uploadedResume={uploadedResume}
                  workspaceName={workspaceName}
                />
              ) : (
                <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
                  {/* Heading */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
                      Welcome to your MockMind workspace
                    </h2>
                    <p className="text-slate-600 text-sm">
                      This area will show profile, applications, and interview prep details based on what is selected in the sidebar.
                    </p>
                  </div>

                  {/* Selected Item Indicator */}
                  {selectedItem && (
                    <p className="text-slate-600 text-sm">
                      You're viewing: {openSection} → {selectedItem.split('-')[1] || selectedItem}
                    </p>
                  )}

                  {/* Content Sections */}
                  <div className="space-y-6">
                    {/* Section 1 */}
                    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                      <h3 className="font-medium text-slate-900 mb-2">
                        Finish setting up your profile
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Complete your personal information and upload your resume to get started with personalized interview preparation.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                      <h3 className="font-medium text-slate-900 mb-2">
                        Applications overview
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Track your job applications and manage company interviews in one place.
                      </p>
                    </div>

                    {/* Section 3 */}
                    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                      <h3 className="font-medium text-slate-900 mb-2">
                        Interview prep
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Access technical, coding, and behavioural interview preparation resources tailored to your selected persona.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
