function getInstanceJs(parentClass, scriptInterface, addonTriggers, C3) {
  return class extends parentClass {
    constructor(inst, properties) {
      super(inst);

      if (properties) {
      }
    }

    Release() {
      super.Release();
    }

    SaveToJson() {
      return {
        // data to be saved for savegames
      };
    }

    LoadFromJson(o) {
      // load state for savegames
    }

    Trigger(method) {
      super.Trigger(method);
      const addonTrigger = addonTriggers.find((x) => x.method === method);
      if (addonTrigger) {
        this.GetScriptInterface().dispatchEvent(new C3.Event(addonTrigger.id));
      }
    }

    GetScriptInterfaceClass() {
      return scriptInterface;
    }

    _ResetVariable(variable) {
      if (!variable) return;
      variable.ResetToInitialValue();
    }
    _ResetGlobalVariableByName(varName) {
      this._ResetVariable(
        this._runtime._eventSheetManager
          .GetAllGlobalVariables()
          .find((x) => x.GetName().toLowerCase() === varName.toLowerCase())
      );
    }
    _ResetLocalVariableByName(varName) {
      this._ResetVariable(
        this._runtime._eventSheetManager
          .GetAllLocalVariables()
          .find((x) => x.GetName().toLowerCase() === varName.toLowerCase())
      );
    }

    _ResetAllLocalVariables() {
      this._runtime._eventSheetManager
        .GetAllLocalVariables()
        .forEach((x) => this._ResetVariable(x));
    }
  };
}
