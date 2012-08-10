ifndef QCONFIG
QCONFIG=qconfig.mk
endif
include $(QCONFIG)

USEFILE=

# Extra include path for libfreetype and for target overrides and patches
EXTRA_INCVPATH+=$(QNX_TARGET)/usr/include/freetype2 \
	$(QNX_TARGET)/../target-override/usr/include \
	$(BB_ROOT)/libv8/include \
	$(BB_ROOT)/tibb/include

# Extra library search path for target overrides and patches
EXTRA_LIBVPATH+=$(QNX_TARGET)/$(CPUVARDIR)/usr/lib \
	$(QNX_TARGET)/$(CPUVARDIR)/usr/lib/qt4/lib \
	$(BB_ROOT)/libv8/lib/$(CPU) \
	$(BB_ROOT)/tibb/$(CPU)/a$(if $(filter arm,$(CPULIST)),.le-v7,)$(if $(filter g,$(VARIANTS)),-g,)

# Compiler options for enhanced security and recording the compiler options in release builds
CCFLAGS+=-fstack-protector-all -D_FORTIFY_SOURCE=2 \
	$(if $(filter g so shared,$(VARIANTS)),,-fPIE) \
	$(if $(filter g,$(VARIANTS)),,-frecord-gcc-switches)

# Linker options for enhanced security
LDFLAGS+=-Wl,-z,relro -Wl,-z,now $(if $(filter g so shared,$(VARIANTS)),,-pie)

# Add your required library names, here
LIBS+=tibb v8 v8preparser socket bps

# Extra .so required
LDFLAGS+=-lbbcascades -lbbdevice -lbbsystem -lQtCore -lQtDeclarative -lQtGui -lQtMultimedia -lQtNetwork -lm -lbb
LDFLAGS+=-lQtOpenGL -lQtScript -lQtScriptTools -lQtSql -lQtSvg -lQtTest -lQtXml

include $(MKFILES_ROOT)/qmacros.mk

# Suppress the _g suffix from the debug variant
BUILDNAME=$(NAME)

include $(MKFILES_ROOT)/qtargets.mk

OPTIMIZE_TYPE_g=none
OPTIMIZE_TYPE=$(OPTIMIZE_TYPE_$(filter g, $(VARIANTS)))
