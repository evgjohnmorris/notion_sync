/**
 * Generated Tool: workspacesTool_0767
 * Domain: Workspaces
 * ID: 0767
 */
exports.workspacesTool_0767 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0767:', error);
    throw error;
  }
};
